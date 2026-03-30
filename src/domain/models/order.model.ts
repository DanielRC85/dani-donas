import { Product } from "./product.model";

export interface Order {
  items: Product[];
  total: number;
  customer?: {
    name?: string;
    phone?: string;
  };
}