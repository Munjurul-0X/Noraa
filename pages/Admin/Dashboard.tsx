
import React from 'react';
import { LayoutDashboard, ShoppingCart, Users, Package, TrendingUp, Search } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const stats = [
    { label: 'Total Revenue', value: '৳4,52,000', icon: TrendingUp, trend: '+12%' },
    { label: 'Pending Orders', value: '24', icon: ShoppingCart, trend: 'Manual Approval' },
    { label: 'Active Customers', value: '840', icon: Users, trend: '+5%' },
    { label: 'In Stock Pieces', value: '1,200', icon: Package, trend: '98%' },
  ];

  const orders = [
    { id: '#NR-1024', customer: 'Ariful Islam', total: '৳2,900', status: 'Pending', date: 'Oct 24, 2024' },
    { id: '#NR-1023', customer: 'Sumiya Khan', total: '৳1,450', status: 'Approved', date: 'Oct 23, 2024' },
    { id: '#NR-1022', customer: 'Tahmid Rahman', total: '৳4,500', status: 'Shipped', date: 'Oct 23, 2024' },
    { id: '#NR-1021', customer: 'Nusrat Jahan', total: '৳1,850', status: 'Completed', date: 'Oct 22, 2024' },
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex">
      {/* Sidebar - Desktop Only */}
      <aside className="w-64 bg-white border-r border-gray-100 hidden lg:block h-screen fixed">
        <div className="p-8">
          <h2 className="text-xl font-semibold tracking-widest uppercase">NOORA ADMIN</h2>
        </div>
        <nav className="px-4 space-y-2">
          {[
            { label: 'Dashboard', icon: LayoutDashboard, active: true },
            { label: 'Orders', icon: ShoppingCart },
            { label: 'Products', icon: Package },
            { label: 'Customers', icon: Users },
          ].map((item) => (
            <button 
              key={item.label}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                item.active ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <item.icon size={18} className="mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow lg:ml-64 p-8 lg:p-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-2xl font-semibold">Overview</h1>
            <p className="text-sm text-gray-500">Welcome back, Owner.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search orders..." 
                className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-black transition-colors"
              />
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <stat.icon size={20} className="text-black" />
                </div>
                <span className="text-[10px] font-bold text-green-500 uppercase">{stat.trend}</span>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-semibold uppercase text-xs tracking-widest">Recent Orders</h3>
            <button className="text-xs text-gray-500 hover:text-black">View All</button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-gray-400 border-b border-gray-50">
                <th className="px-6 py-4 font-semibold">Order ID</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Total</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 font-semibold">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                      order.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' :
                      order.status === 'Approved' ? 'bg-blue-50 text-blue-600' :
                      order.status === 'Completed' ? 'bg-green-50 text-green-600' :
                      'bg-gray-100 text-gray-500'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[10px] font-bold uppercase tracking-widest text-black hover:underline">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
