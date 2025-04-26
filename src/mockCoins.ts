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
    title: "Earth Day Digital",
    description:
      "Collect this special digital coin to commemorate Earth Day Detroit",
    image: "/arts-for-earth-blank.png",
  },
  "community-garden": {
    id: "community-garden",
    title: "Community Garden",
    description:
      "A special coin celebrating urban gardening and community green spaces",
    image: "/community-garden.png",
  },
  "tree-planting": {
    id: "tree-planting",
    title: "Tree Planting",
    description:
      "Commemorating reforestation efforts and tree planting initiatives in Detroit",
    image: "/tree-planting.png",
  },
  "water-conservation": {
    id: "water-conservation",
    title: "Water Conservation",
    description: "Supporting clean water initiatives and conservation efforts",
    image: "/water-conservation.png",
  },
  "renewable-energy": {
    id: "renewable-energy",
    title: "Renewable Energy",
    description:
      "Celebrating sustainable energy solutions and green technology",
    image: "/renewable-energy.png",
  },
  "zero-waste": {
    id: "zero-waste",
    title: "Zero Waste",
    description:
      "Promoting recycling and waste reduction practices for a cleaner planet",
    image: "/zero-waste.png",
  },
  "wildlife-protection": {
    id: "wildlife-protection",
    title: "Wildlife Protection",
    description:
      "Dedicated to the conservation and protection of local wildlife and natural habitats",
    image: "/wildlife-protection.png",
  },
};
