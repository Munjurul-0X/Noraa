
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { ChevronDown, Filter as FilterIcon } from 'lucide-react';

const Shop: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [activeSort, setActiveSort] = useState('Newest');

  const filteredProducts = category 
    ? MOCK_PRODUCTS.filter(p => 
        p.category.toLowerCase() === category.toLowerCase() || 
        p.subCategory.toLowerCase() === category.toLowerCase()
      )
    : MOCK_PRODUCTS;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-20 pb-12 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <nav className="flex mb-4 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                <Link to="/" className="hover:text-black">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900">{category || 'All Collections'}</span>
              </nav>
              <h1 className="text-4xl font-light serif capitalize">
                {category ? category.replace('-', ' ') : 'All Collections'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-8 text-xs uppercase tracking-widest font-medium">
              <button className="flex items-center hover:opacity-60 transition-opacity">
                <FilterIcon size={14} className="mr-2" /> Filter
              </button>
              <div className="relative group cursor-pointer">
                <button className="flex items-center hover:opacity-60 transition-opacity">
                  Sort: {activeSort} <ChevronDown size={14} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group block">
                <div className="aspect-[3/4] bg-[#F5F5F7] overflow-hidden relative">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-white px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
                      New
                    </span>
                  )}
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-light text-gray-900 mb-1 group-hover:underline decoration-gray-300 underline-offset-4">
                      {product.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400">
                      {product.subCategory}
                    </p>
                  </div>
                  <p className="text-sm font-medium">৳{product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-40 text-center">
            <p className="text-gray-400 serif italic text-xl">No pieces found in this collection.</p>
            <Link to="/shop" className="text-xs uppercase tracking-widest mt-6 inline-block border-b border-black pb-1">
              Browse All
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
