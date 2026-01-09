
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const Hero: React.FC = () => (
  <section className="relative h-[85vh] flex items-center bg-[#F5F5F7] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-6 block font-medium">The Inaugural Collection</span>
        <h1 className="text-5xl md:text-7xl font-light serif text-black leading-tight mb-8">
          The Luxury of <br />
          <span className="italic">Honest Quality.</span>
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed font-light">
          Premium essentials designed for clarity and confidence. No noise. No urgency. Just meticulous craftsmanship.
        </p>
        <div className="flex space-x-4">
          <Link 
            to="/shop/men" 
            className="px-8 py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 rounded-sm"
          >
            Shop Collection
          </Link>
          <Link 
            to="/strategy" 
            className="px-8 py-4 border border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-sm"
          >
            The Vision
          </Link>
        </div>
      </div>
    </div>
    <div className="absolute right-[-10%] top-0 h-full w-[60%] hidden lg:block">
      <img 
        src="https://picsum.photos/seed/noora-hero/1200/1600" 
        alt="Premium Quality" 
        className="w-full h-full object-cover grayscale opacity-90"
      />
    </div>
  </section>
);

const FeatureSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="text-center group">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-black group-hover:scale-110 transition-transform">
            <ShieldCheck size={32} strokeWidth={1} />
          </div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Unwavering Quality</h3>
          <p className="text-gray-500 text-sm leading-relaxed px-6">
            Sourced from the finest mills. Every stitch is inspected by our team before dispatch.
          </p>
        </div>
        <div className="text-center group border-x border-gray-100">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-black group-hover:scale-110 transition-transform">
            <RefreshCw size={32} strokeWidth={1} />
          </div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Honest Returns</h3>
          <p className="text-gray-500 text-sm leading-relaxed px-6">
            Transparent policies built on trust. 7-day hassle-free return for any manufacturing defect.
          </p>
        </div>
        <div className="text-center group">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-black group-hover:scale-110 transition-transform">
            <Truck size={32} strokeWidth={1} />
          </div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Premium Delivery</h3>
          <p className="text-gray-500 text-sm leading-relaxed px-6">
            Reliable logistics partners ensuring your order arrives in pristine condition.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ProductPreview: React.FC = () => (
  <section className="py-24 bg-[#F9F9F9]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 block">New Arrivals</span>
          <h2 className="text-3xl font-light serif italic">Selected Pieces</h2>
        </div>
        <Link to="/shop" className="text-sm font-medium border-b border-black pb-1 hover:opacity-70 transition-opacity">
          View All
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PRODUCTS.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-gray-900 group-hover:underline">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-tighter">{product.subCategory}</p>
              </div>
              <p className="text-sm font-semibold">৳{product.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const BrandPhilosophy: React.FC = () => (
  <section className="py-32 bg-black text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light serif mb-10 leading-snug">
          "The most powerful trust signal is a brand that refuses to rush you."
        </h2>
        <div className="w-16 h-[1px] bg-white/30 mx-auto mb-10"></div>
        <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
          NOORA is not just a store. It is a system. We focus on long-staple cotton, artisanal craftsmanship, and a user experience that respects your time.
        </p>
        <Link 
          to="/strategy" 
          className="inline-flex items-center text-sm uppercase tracking-widest hover:translate-x-2 transition-transform"
        >
          Read the 4-year vision <ArrowRight size={16} className="ml-3" />
        </Link>
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <FeatureSection />
      <ProductPreview />
      <BrandPhilosophy />
    </div>
  );
};

export default Home;
