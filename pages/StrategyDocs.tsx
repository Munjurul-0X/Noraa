
import React from 'react';
// Added X to imports to fix missing name errors on lines 158-161
import { BookOpen, Map, Target, Shield, Zap, TrendingUp, AlertTriangle, Coffee, X } from 'lucide-react';

const StrategyDocs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 animate-in slide-in-from-bottom-4 duration-700">
      <header className="mb-20 text-center">
        <h1 className="text-5xl font-light serif italic mb-6">Strategic Foundation</h1>
        <p className="text-gray-500 uppercase tracking-widest text-xs">Phase 1: The Blueprint</p>
      </header>

      <div className="space-y-24">
        {/* 1. Information Architecture */}
        <section>
          <div className="flex items-center mb-8">
            <BookOpen className="mr-4 text-black" size={28} />
            <h2 className="text-2xl font-medium tracking-tight">1. Information Architecture (IA)</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg space-y-4 text-sm leading-relaxed text-gray-700 border border-gray-100">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Global Navigation:</strong> Shop (Men/Electronics/Collections), Brand Story, Track Order.</li>
              <li><strong>Fashion Hierarchy:</strong> Men &rarr; T-Shirts (Focus) &rarr; Product Details (Material, Fit, Wash Care).</li>
              <li><strong>Conversion Path:</strong> Add to Cart &rarr; One-Page Checkout &rarr; OTP Verification &rarr; Thank You/Tracking.</li>
              <li><strong>Post-Purchase:</strong> WhatsApp Support Integration &rarr; Delivery Updates &rarr; Feedback.</li>
            </ul>
          </div>
        </section>

        {/* 2. Homepage Breakdown */}
        <section>
          <div className="flex items-center mb-8">
            <Map className="mr-4 text-black" size={28} />
            <h2 className="text-2xl font-medium tracking-tight">2. Homepage Breakdown</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">Above-the-Fold</h3>
              <p className="text-gray-500">Minimal hero. Single statement of quality. Zero slider distraction. Focus on "The Vision" and "Shop Collection".</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">Core Signals</h3>
              <p className="text-gray-500">3 icons: Quality Assurance, Honest Return, Premium Logistics. Establishes professional scale immediately.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">Curated Grid</h3>
              <p className="text-gray-500">Only 3-6 items. Prevents decision fatigue. Highlights "New Arrivals" with high-res photography.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">The Transparency Section</h3>
              <p className="text-gray-500">Founder's note on why NOORA exists. Humanizes the brand beyond just a digital catalog.</p>
            </div>
          </div>
        </section>

        {/* 3. Trust Decisions */}
        <section>
          <div className="flex items-center mb-8">
            <Shield className="mr-4 text-black" size={28} />
            <h2 className="text-2xl font-medium tracking-tight">3. UX Trust Decisions (BD Specific)</h2>
          </div>
          <div className="bg-black text-white p-8 rounded-lg space-y-6">
            <div className="flex gap-4">
              <div className="h-8 w-8 bg-white/10 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold">01</div>
              <p className="text-sm"><strong>Guest Checkout:</strong> BD customers hate forced accounts. Let them buy, then offer account creation via WhatsApp/Phone after success.</p>
            </div>
            <div className="flex gap-4">
              <div className="h-8 w-8 bg-white/10 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold">02</div>
              <p className="text-sm"><strong>Check-at-Door Support:</strong> Explicitly mention that customers can verify the quality before finalizing COD.</p>
            </div>
            <div className="flex gap-4">
              <div className="h-8 w-8 bg-white/10 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold">03</div>
              <p className="text-sm"><strong>High-Res Micro-details:</strong> Zoom features on stitches and fabric weave to prove the product isn't generic stock.</p>
            </div>
          </div>
        </section>

        {/* 4. Development Milestones */}
        <section>
          <div className="flex items-center mb-8">
            <Zap className="mr-4 text-black" size={28} />
            <h2 className="text-2xl font-medium tracking-tight">4. Frontend-First Milestones</h2>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center p-4 bg-gray-50 border-l-4 border-black">
              <span>Week 1: Visual Identity & Navigation System</span>
              <span className="text-xs text-gray-400">Current</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white border border-gray-100">
              <span>Week 2: Product Engine & Catalog UX</span>
              <span className="text-xs text-gray-400">Next</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white border border-gray-100">
              <span>Week 3: Checkout Logic & Order Lifecycle Management</span>
              <span className="text-xs text-gray-400">Planned</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white border border-gray-100">
              <span>Week 4: Admin Panel & Data Persistence Integration</span>
              <span className="text-xs text-gray-400">Planned</span>
            </div>
          </div>
        </section>

        {/* 5 & 6. Backend / Data */}
        <section>
          <div className="flex items-center mb-8">
            <Coffee className="mr-4 text-black" size={28} />
            <h2 className="text-2xl font-medium tracking-tight">5 & 6. Technical Architecture</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Data Model (MongoDB)</h4>
            <code className="text-xs block whitespace-pre bg-gray-900 text-green-400 p-6 rounded overflow-auto">
{`Product {
  sku: String,
  fabric: { type: String, weight: String },
  status: Boolean, // Section ON/OFF control
  stock: Number,
  pricing: { base: Number, sale: Number }
}

Order {
  status: Enum['pending', 'verified', 'processing', 'shipped', 'completed'],
  verifiedBy: ObjectId, // Admin ID for manual approval
  payment: { method: 'COD', verified: Boolean }
}`}
            </code>
          </div>
        </section>

        {/* 9. BD Specific Suggestions */}
        <section>
          <div className="flex items-center mb-8">
            <TrendingUp className="mr-4 text-black" size={28} />
            <h2 className="text-2xl font-medium tracking-tight">9. Bangladesh Market Nuances</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">The "Inbox Price" Syndrome</h3>
              <p className="text-gray-500 italic mb-3">"Apni price koto?"</p>
              <p className="text-gray-600">Solve this with 100% price transparency on ads. Use website UX to show value breakdown (Fabric + Sourcing + Margin). Trust is built when you stop hiding.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold mb-3">WhatsApp as a CRM</h3>
              <p className="text-gray-600">Integration of WhatsApp for order confirmation is mandatory in BD. Automate this via Node.js backend using official API. It increases delivery success rates by 30%.</p>
            </div>
          </div>
        </section>

        {/* 8. Common Mistakes */}
        <section>
          <div className="flex items-center mb-8">
            <AlertTriangle className="mr-4 text-red-500" size={28} />
            <h2 className="text-2xl font-medium tracking-tight">8. Brand Poisoning (Avoid)</h2>
          </div>
          <div className="border border-red-100 p-8 rounded-lg space-y-4">
            <p className="text-sm font-medium text-red-600">Avoid these at all costs:</p>
            <ul className="text-sm space-y-3 text-gray-600">
              <li className="flex items-center"><X size={14} className="mr-2 text-red-400" /> Flash sales every weekend (Cheapens the brand)</li>
              <li className="flex items-center"><X size={14} className="mr-2 text-red-400" /> Aggressive "Someone just bought this" popups (Fake urgency)</li>
              <li className="flex items-center"><X size={14} className="mr-2 text-red-400" /> Oversaturation of influencer reviews (Looks like a paid campaign, not real love)</li>
              <li className="flex items-center"><X size={14} className="mr-2 text-red-400" /> Hidden delivery charges added at the very last step</li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="mt-32 pt-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-xs italic">"Clarity is not the absence of complexity, but the presence of trust."</p>
      </footer>
    </div>
  );
};

export default StrategyDocs;
