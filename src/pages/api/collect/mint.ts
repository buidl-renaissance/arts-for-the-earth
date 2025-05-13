import { NextApiRequest, NextApiResponse } from "next";
import { mintCollectibleForUser } from "@/utils/collect";
import { mockCoins } from "@/mockCoins";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { coinId, userAddress } = req.query;

    console.log("coinId", coinId);
    console.log("userAddress", userAddress);

    const coin = mockCoins[coinId as string];
    coin.image = `https://earth.gods.work${coin.image}`;

    if (!coin || !userAddress) {
      return res
        .status(400)
        .json({ error: "Missing required parameters: coin and userAddress" });
    }

    const result = await mintCollectibleForUser(coin, userAddress as string);

    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error("Error minting collectible:", error);
    return res
      .status(500)
      .json({ error: "Failed to mint collectible", details: error instanceof Error ? error.message : "Unknown error" });
  }
}
