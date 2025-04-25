export interface Collectible {
  id: string;
  title: string;
  description: string;
  image: string;
}

// Mock data for different collectible coins
export const mockCoins: Record<string, Collectible> = {
  "earth-day": {
    id: "earth-day",
    title: "Earth Day Digital Coin",
    description:
      "Collect this special digital coin to commemorate Earth Day Detroit",
    image: "/arts-for-earth-blank.png",
  },
  "community-garden": {
    id: "community-garden",
    title: "Community Garden Coin",
    description:
      "A special coin celebrating urban gardening and community green spaces",
    image: "/community-garden.png",
  },
  "tree-planting": {
    id: "tree-planting",
    title: "Tree Planting Coin",
    description:
      "Commemorating reforestation efforts and tree planting initiatives in Detroit",
    image: "/arts-for-earth-blank.png", // Replace with actual image
  },
  "water-conservation": {
    id: "water-conservation",
    title: "Water Conservation Coin",
    description: "Supporting clean water initiatives and conservation efforts",
    image: "/arts-for-earth-blank.png", // Replace with actual image
  },
  "renewable-energy": {
    id: "renewable-energy",
    title: "Renewable Energy Coin",
    description:
      "Celebrating sustainable energy solutions and green technology",
    image: "/arts-for-earth-blank.png", // Replace with actual image
  },
  "zero-waste": {
    id: "zero-waste",
    title: "Zero Waste Coin",
    description:
      "Promoting recycling and waste reduction practices for a cleaner planet",
    image: "/arts-for-earth-blank.png", // Replace with actual image
  },
};
