export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    rating: number;
    oldPrice?: number;
    onSale?: boolean;
    outOfStock?: boolean;
    minPurchase?: number;
  }