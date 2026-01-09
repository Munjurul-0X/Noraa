
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User as UserIcon, Menu, X, ArrowRight } from 'lucide-react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import StrategyDocs from './pages/StrategyDocs';
import AdminDashboard from './pages/Admin/Dashboard';
import Checkout from './pages/Checkout';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Men', path: '/shop/men' },
    { name: 'Electronics', path: '/shop/electronics' },
    { name: 'Strategy', path: '/strategy' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="hover:text-black transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/" className="text-2xl font-semibold tracking-[0.2em] uppercase text-black">
            NOORA
          </Link>

          <div className="flex items-center space-x-5">
            <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link to="/admin" className="p-2 hover:bg-gray-50 rounded-full transition-colors">
              <UserIcon size={20} strokeWidth={1.5} />
            </Link>
            <Link to="/cart" className="p-2 relative hover:bg-gray-50 rounded-full transition-colors">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-lg font-light text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-medium tracking-widest mb-6 uppercase">NOORA</h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Built on the foundations of clarity and trust. Our vision is to elevate the digital commerce landscape in Bangladesh.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase mb-4">Shop</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/shop/men" className="hover:text-black">Men's Essentials</Link></li>
            <li><Link to="/shop/electronics" className="hover:text-black">Smart Gadgets</Link></li>
            <li><Link to="/shop" className="hover:text-black">New Arrivals</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase mb-4">Support</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/tracking" className="hover:text-black">Track Order</Link></li>
            <li><Link to="/policy" className="hover:text-black">Return Policy</Link></li>
            <li><Link to="/contact" className="hover:text-black">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase mb-4">Philosophy</h4>
          <p className="text-xs text-gray-400 mb-4">
            Subscribe for curated updates. No spam, just clarity.
          </p>
          <div className="flex border-b border-black py-1">
            <input type="email" placeholder="Email address" className="bg-transparent border-none outline-none text-sm w-full" />
            <button className="p-1"><ArrowRight size={16} /></button>
          </div>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-[0.2em]">
        <p>&copy; 2024 NOORA CLARITY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span>Privacy</span>
          <span>Terms</span>
          <span>BD Market</span>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/strategy" element={<StrategyDocs />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
