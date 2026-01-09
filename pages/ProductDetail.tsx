
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { ShieldCheck, Truck, RotateCcw, Plus, Minus, ChevronRight } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) {
    return (
      <div className="py-40 text-center">
        <p className="serif italic text-2xl">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-xs uppercase tracking-widest border-b border-black">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-[#F5F5F7] overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-[#F5F5F7]"></div>
              <div className="aspect-[3/4] bg-[#F5F5F7]"></div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <nav className="flex mb-8 text-[10px] uppercase tracking-[0.2em] text-gray-400">
              <Link to="/" className="hover:text-black">Home</Link>
              <ChevronRight size={10} className="mx-2 mt-0.5" />
              <Link to={`/shop/${product.category}`} className="hover:text-black">{product.category}</Link>
            </nav>

            <h1 className="text-4xl font-light serif mb-4">{product.name}</h1>
            <p className="text-2xl font-light mb-8 text-gray-900">৳{product.price.toLocaleString()}</p>
            
            <div className="border-t border-gray-100 pt-8 mb-8">
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {product.description}
              </p>

              {product.category === 'fashion' && (
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-widest font-semibold block mb-4">Select Size</span>
                  <div className="flex space-x-3">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 text-xs flex items-center justify-center border transition-all ${
                          selectedSize === size 
                            ? 'border-black bg-black text-white' 
                            : 'border-gray-200 text-gray-400 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-6 mb-10">
                <div className="flex items-center border border-gray-200 h-14 px-4">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2"><Minus size={14}/></button>
                  <span className="w-12 text-center text-sm">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2"><Plus size={14}/></button>
                </div>
                <button className="flex-grow h-14 bg-black text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-gray-800 transition-colors">
                  Add to Bag
                </button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex items-start">
                <ShieldCheck size={18} className="mr-4 mt-0.5 text-gray-400" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest mb-1">Check-at-Door Support</h4>
                  <p className="text-[11px] text-gray-400 uppercase tracking-tight">Inspect quality before paying on delivery.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Truck size={18} className="mr-4 mt-0.5 text-gray-400" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest mb-1">Standard Shipping</h4>
                  <p className="text-[11px] text-gray-400 uppercase tracking-tight">Dhaka: 2-3 Days | Outside: 4-6 Days.</p>
                </div>
              </div>
              <div className="flex items-start">
                <RotateCcw size={18} className="mr-4 mt-0.5 text-gray-400" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest mb-1">Transparent Returns</h4>
                  <p className="text-[11px] text-gray-400 uppercase tracking-tight">Hassle-free 7-day return policy for defects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
