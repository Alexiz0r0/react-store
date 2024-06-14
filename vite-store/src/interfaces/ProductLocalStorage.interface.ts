export interface ProductLocalStorage {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  color: string;
  onSale: boolean;
}
