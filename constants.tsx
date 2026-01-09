
import { Product } from './types';

export const COLORS = {
  primary: '#1a1a1a',
  secondary: '#717171',
  accent: '#B8860B', // Dark Gold
  background: '#ffffff',
  surface: '#F9F9F9'
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Essential Supima Tee',
    price: 1450,
    category: 'fashion',
    subCategory: 'Men',
    description: '100% long-staple cotton for unmatched softness and clarity.',
    images: ['https://picsum.photos/seed/tee1/800/1000'],
    stock: 50,
    isNew: true
  },
  {
    id: '2',
    name: 'Minimalist Tech Organizer',
    price: 2800,
    category: 'electronics',
    subCategory: 'Mobile accessories',
    description: 'Clean lines, maximum utility. Vegan leather finish.',
    images: ['https://picsum.photos/seed/tech1/800/1000'],
    stock: 20
  },
  {
    id: '3',
    name: 'Noora Signature Polo',
    price: 1850,
    category: 'fashion',
    subCategory: 'Men',
    description: 'The standard of quality for the modern professional.',
    images: ['https://picsum.photos/seed/polo1/800/1000'],
    stock: 35,
    isNew: true
  }
];
