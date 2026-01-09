
import React from 'react';
import { ShieldCheck, Truck, Lock } from 'lucide-react';

const Checkout: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9] min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Form */}
          <div className="flex-grow space-y-8">
            <section className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-100">
              <h2 className="text-xl font-light serif mb-8 border-b border-gray-50 pb-6">Delivery Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-black transition-all outline-none" placeholder="e.g. Ariful Islam" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">Phone Number</label>
                  <input type="tel" className="w-full bg-gray-50 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-black transition-all outline-none" placeholder="+880 1XXX-XXXXXX" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">Detailed Address</label>
                  <textarea rows={3} className="w-full bg-gray-50 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-black transition-all outline-none resize-none" placeholder="House/Flat, Road, Area, Landmark"></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">City / District</label>
                  <select className="w-full bg-gray-50 border-none px-4 py-3 text-sm focus:ring-1 focus:ring-black transition-all outline-none">
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Sylhet</option>
                    <option>Rajshahi</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-100">
              <h2 className="text-xl font-light serif mb-8 border-b border-gray-50 pb-6">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center p-6 border border-black bg-gray-50 rounded-lg cursor-pointer">
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mr-4">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest">Cash on Delivery</h4>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-tight">Pay after checking the product at your door.</p>
                  </div>
                </div>
                <div className="flex items-center p-6 border border-gray-100 rounded-lg opacity-40 cursor-not-allowed grayscale">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-200 mr-4"></div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest">bKash / Nagad (Soon)</h4>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-tight">Digital payments are coming in Phase 2.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Summary */}
          <aside className="lg:w-96">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 sticky top-32">
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-8 border-b border-gray-50 pb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Subtotal (1 item)</span>
                  <span className="font-medium">৳1,450</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Delivery Fee</span>
                  <span className="font-medium">৳60</span>
                </div>
                <div className="flex justify-between items-center text-lg font-medium pt-4 border-t border-gray-50">
                  <span className="serif italic">Total</span>
                  <span className="text-black">৳1,510</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-gray-800 transition-colors mb-6">
                Complete Purchase
              </button>

              <div className="space-y-4 text-[10px] text-gray-400 uppercase tracking-widest">
                <div className="flex items-center">
                  <Lock size={14} className="mr-2" /> 128-bit Secure Session
                </div>
                <div className="flex items-center">
                  <ShieldCheck size={14} className="mr-2" /> Satisfaction Guaranteed
                </div>
                <div className="flex items-center">
                  <Truck size={14} className="mr-2" /> Quality Verified Shipping
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
