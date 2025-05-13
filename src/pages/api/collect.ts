import { NextApiRequest, NextApiResponse } from "next";
// import { getSponsorKeypair } from '@/utils/sponsor';
// import { getSuiClient } from '@/utils/wallet';
// import { TransactionBlock } from '@mysten/sui.js/transactions';
import { mockCoins } from "@/mockCoins";
import { getCollectibleSponsoredTx } from "@/utils/collect";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { coinId, address } = JSON.parse(req.body);

    console.log(req.body);

    if (!coinId || !address) {
      return res
        .status(400)
        .json({ error: "Missing required parameters: coinId and address" });
    }

    // Get coin data from mock data
    const coinData = mockCoins[coinId as keyof typeof mockCoins];

    if (!coinData) {
      return res.status(404).json({ error: "Coin not found" });
    }

    const signedTx = await getCollectibleSponsoredTx(coinData);

    // Return the serialized transaction and signature
    return res.status(200).json({
      success: true,
      signedTx,
    });
  } catch (error) {
    console.error("Error creating sponsored transaction:", error);
    return res
      .status(500)
      .json({ error: "Failed to create sponsored transaction" });
  }
}
