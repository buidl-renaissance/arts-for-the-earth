import { TransactionBlock } from "@mysten/sui.js/transactions";
import { getSponsorKeypair } from "./sponsor";
import { getSuiClient } from "./wallet";
import { Collectible } from "@/mockCoins";

export const getCollectibleSponsoredTx = async (coin: Collectible) => {
  const tx = new TransactionBlock();

  // Check the correct number of arguments for the mint function
  // Assuming we need to fix the number of arguments based on the error
  tx.moveCall({
    target:
      "0x78b86454d1f4ac9fe1b8261d0a824b0fa7fe24b0967a8c6b2d3935a5f7e88b6f::collectible::mint",
    arguments: [
      tx.pure(
        "0x379276e515345598b1d337018599c6b90844086ebacdb241faf6a350388b7aa1"
      ), // Publisher object ID
      tx.pure(coin.id), // Coin ID
      tx.pure(coin.title), // Title
      tx.pure(coin.description), // Description
      tx.pure(coin.image), // Image URL
      // Add any missing required arguments here if needed
    ],
  });

  tx.setGasBudget(10000000);

  tx.setSender(
    "0x3094f32ff9bb1dd472d49b181c15f1e3729eccad8dbe513819d0712923efd6b7"
  );

  // Build the transaction with the client to get proper gas estimation
  const client = getSuiClient();
  const txBytes = await tx.build({ client });

  const keypair = getSponsorKeypair();
  const signedTx = await keypair.signTransactionBlock(txBytes);

  return signedTx;
};

export const mintCollectibleForUser = async (
  coin: Collectible,
  userAddress: string
) => {
  try {
    const client = getSuiClient();
    const tx = new TransactionBlock();
    
    // Call the mint function with the correct parameters based on the collectible module
    tx.moveCall({
      target:
        "0x78b86454d1f4ac9fe1b8261d0a824b0fa7fe24b0967a8c6b2d3935a5f7e88b6f::collectible::mint",
      arguments: [
        tx.pure(
          "0x379276e515345598b1d337018599c6b90844086ebacdb241faf6a350388b7aa1"
        ), // Registry object ID
        tx.pure(coin.title), // Title
        tx.pure(coin.description || "A digital collectible"), // Description
        tx.pure(coin.image), // Image URL
        tx.pure(userAddress), // The user's address as the collector
        // The ctx parameter is automatically provided by the Move runtime
      ],
    });
    tx.setGasBudget(10000000);
    
    
    // Get the sponsor keypair to sign and execute the transaction
    const sponsorKeypair = getSponsorKeypair();

    console.log("sponsorKeypair", sponsorKeypair.getPublicKey().toSuiAddress());

    // Set the transaction sender
    tx.setSender(sponsorKeypair.getPublicKey().toSuiAddress());
    
    // Build the transaction
    const bytes = await tx.build({ client });
    
    // Sign and execute the transaction with additional options
    const result = await client.signAndExecuteTransactionBlock({
      signer: sponsorKeypair,
      transactionBlock: bytes,
      options: {
        showEffects: true,
        showEvents: true,
      },
    });

    console.log("Collectible minted for user:", result);
    if (result && result.digest) {
      return {
        success: true,
        digest: result.digest,
        coinId: coin.id,
        userAddress
      };
    } else {
      throw new Error("Minting failed: No transaction digest returned");
    }
  } catch (error) {
    console.error("Error minting collectible for user:", error);
    throw error;
  }
};
