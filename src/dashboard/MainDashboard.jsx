import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 6000 },
  { name: "Mar", revenue: 8000 },
  { name: "Apr", revenue: 9000 },
  { name: "May", revenue: 11000 },
  { name: "Jun", revenue: 13000 },
];

const categoryData = [
  { name: "Dresses", value: 38 },
  { name: "Tops", value: 24 },
  { name: "Bags", value: 20 },
  { name: "Other", value: 18 },
];

const COLORS = ["#000000", "#8884d8", "#82ca9d", "#facc15"];

const MainDashboard = () => {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Good morning, <span className="italic font-light">Michael</span>
        </h1>

        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg bg-gray-100 text-sm outline-none"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "TOTAL REVENUE", value: "$84,230", change: "+12.4%" },
          { title: "TOTAL ORDERS", value: "1,847", change: "+8.1%" },
          { title: "NEW CUSTOMERS", value: "342", change: "-3.2%" },
          { title: "AVG. ORDER VALUE", value: "$45.60", change: "+5.7%" },
        ].map((card, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow">
            <p className="text-xs text-gray-400">{card.title}</p>
            <h2 className="text-2xl font-bold">{card.value}</h2>
            <span className="text-xs text-gray-500">{card.change}</span>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Line Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Revenue Overview</h2>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Donut Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Sales by Category</h2>

          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={categoryData}
                innerRadius={50}
                outerRadius={80}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <ul className="mt-4 space-y-2 text-sm">
            {categoryData.map((item, i) => (
              <li key={i} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.value}%</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Orders */}
      <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
<h2 className="font-semibold mb-6">Latest Transactions</h2>

<div className="overflow-x-auto">
  <table className="w-full text-sm">
    
    {/* Header */}
    <thead>
      <tr className="text-gray-400 text-xs uppercase border-b">
        <th className="py-3 text-left">Order</th>
        <th className="text-left">Product</th>
        <th className="text-left">Customer</th>
        <th className="text-left">Date</th>
        <th className="text-left">Amount</th>
        <th className="text-left">Status</th>
      </tr>
    </thead>

    {/* Body */}
    <tbody className="divide-y">

      {/* Row */}
      <tr className="hover:bg-gray-50 transition">
        <td className="py-4 text-gray-500">#4821</td>

        <td className="flex items-center gap-3 py-4">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            👗
          </div>
          <div>
            <p className="font-medium">Silk Wrap Dress</p>
            <p className="text-xs text-gray-400">Dresses</p>
          </div>
        </td>

        <td>Emma Clarke</td>
        <td className="text-gray-500">Mar 9, 2026</td>
        <td className="font-medium">$128.00</td>

        <td>
          <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
            Delivered
          </span>
        </td>
      </tr>

      {/* Row */}
      <tr className="hover:bg-gray-50 transition">
        <td className="py-4 text-gray-500">#4820</td>

        <td className="flex items-center gap-3 py-4">
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            👜
          </div>
          <div>
            <p className="font-medium">Leather Tote Bag</p>
            <p className="text-xs text-gray-400">Bags</p>
          </div>
        </td>

        <td>Isabelle Morel</td>
        <td className="text-gray-500">Mar 9, 2026</td>
        <td className="font-medium">$245.00</td>

        <td>
          <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">
            Processing
          </span>
        </td>
      </tr>

      {/* Row */}
      <tr className="hover:bg-gray-50 transition">
        <td className="py-4 text-gray-500">#4819</td>

        <td className="flex items-center gap-3 py-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            👠
          </div>
          <div>
            <p className="font-medium">Suede Block Heels</p>
            <p className="text-xs text-gray-400">Footwear</p>
          </div>
        </td>

        <td>Chloe Anderson</td>
        <td className="text-gray-500">Mar 8, 2026</td>
        <td className="font-medium">$189.00</td>

        <td>
          <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">
            Shipped
          </span>
        </td>
      </tr>

      {/* Row */}
      <tr className="hover:bg-gray-50 transition">
        <td className="py-4 text-gray-500">#4818</td>

        <td className="flex items-center gap-3 py-4">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            🧥
          </div>
          <div>
            <p className="font-medium">Trench Coat</p>
            <p className="text-xs text-gray-400">Outerwear</p>
          </div>
        </td>

        <td>Margot Dupont</td>
        <td className="text-gray-500">Mar 8, 2026</td>
        <td className="font-medium">$312.00</td>

        <td>
          <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
            Delivered
          </span>
        </td>
      </tr>

      {/* Row */}
      <tr className="hover:bg-gray-50 transition">
        <td className="py-4 text-gray-500">#4817</td>

        <td className="flex items-center gap-3 py-4">
          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
            💍
          </div>
          <div>
            <p className="font-medium">Gold Hoop Set</p>
            <p className="text-xs text-gray-400">Accessories</p>
          </div>
        </td>

        <td>Nina Petrov</td>
        <td className="text-gray-500">Mar 7, 2026</td>
        <td className="font-medium">$78.00</td>

        <td>
          <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-500">
            Cancelled
          </span>
        </td>
      </tr>

    </tbody>
  </table>
</div>
      </div>

        {/* Top Products */}
      <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-6">Top Products</h2>

      <ul className="space-y-5">

      {/* Item */}
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm w-4">1</span>

          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            👗
          </div>

          <div>
            <p className="font-medium text-sm">Silk Wrap Dress</p>
            <p className="text-xs text-gray-400">Dresses · 214 sold</p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-medium text-sm">$27,392</p>
          <p className="text-xs text-green-500">+14.2%</p>
        </div>
      </li>

      {/* Item */}
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm w-4">2</span>

          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            🧥
          </div>

          <div>
            <p className="font-medium text-sm">Trench Coat Classic</p>
            <p className="text-xs text-gray-400">Outerwear · 88 sold</p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-medium text-sm">$19,456</p>
          <p className="text-xs text-green-500">+8.7%</p>
        </div>
      </li>

      {/* Item */}
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm w-4">3</span>

          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            👜
          </div>

          <div>
            <p className="font-medium text-sm">Leather Tote Bag</p>
            <p className="text-xs text-gray-400">Bags · 79 sold</p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-medium text-sm">$14,610</p>
          <p className="text-xs text-green-500">+22.1%</p>
        </div>
      </li>

      {/* Item */}
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm w-4">4</span>

          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            👠
          </div>

          <div>
            <p className="font-medium text-sm">Suede Block Heels</p>
            <p className="text-xs text-gray-400">Footwear · 76 sold</p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-medium text-sm">$11,324</p>
          <p className="text-xs text-green-500">+5.3%</p>
        </div>
      </li>

      {/* Item */}
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm w-4">5</span>

          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
            💍
          </div>

          <div>
            <p className="font-medium text-sm">Gold Hoop Set</p>
            <p className="text-xs text-gray-400">Accessories · 142 sold</p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-medium text-sm">$9,204</p>
          <p className="text-xs text-red-400">-3.1%</p>
        </div>
      </li>

      </ul>
      </div>

      </div>

    </div>
  );
};

export default MainDashboard;