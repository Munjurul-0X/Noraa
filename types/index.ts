
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'fashion' | 'electronics';
  subCategory: string;
  description: string;
  images: string[];
  stock: number;
  isNew?: boolean;
}

export interface Order {
  id: string;
  customerName: string;
  total: number;
  status: 'pending' | 'approved' | 'delivered' | 'cancelled';
  date: string;
  items: { productId: string; quantity: number }[];
}

export interface User {
  id: string;
  role: 'admin' | 'owner' | 'customer';
  email: string;
  name: string;
}
