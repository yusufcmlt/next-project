export type ProductData = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string; // You may replace "..." with the actual type if known
  images: string[]; // You may replace "..." with the actual type if known
};
