import React from 'react'

const MainDashboard = () => {
  return (
    <main className="flex-1 py-4 overflow-y-auto space-y-10">

  {/* Header */}
  <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
    <div>
      <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
      <p className='text-sm text-gray-500'>Welcome back, Michael 👋</p>
    </div>

    <button className='mt-4 md:mt-0 bg-black text-white px-4 py-2 rounded hover:bg-gray-800'>
      + Add Product
    </button>
  </div>

  {/* Stats Cards */}
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>

    <div className='bg-white p-4 rounded-xl shadow'>
      <p className='text-sm text-gray-500'>Total Sales</p>
      <h2 className='text-xl font-bold mt-2'>$12,340</h2>
    </div>

    <div className='bg-white p-4 rounded-xl shadow'>
      <p className='text-sm text-gray-500'>Orders</p>
      <h2 className='text-xl font-bold mt-2'>1,245</h2>
    </div>

    <div className='bg-white p-4 rounded-xl shadow'>
      <p className='text-sm text-gray-500'>Customers</p>
      <h2 className='text-xl font-bold mt-2'>845</h2>
    </div>

    <div className='bg-white p-4 rounded-xl shadow'>
      <p className='text-sm text-gray-500'>Revenue</p>
      <h2 className='text-xl font-bold mt-2'>$23,890</h2>
    </div>

  </div>

  {/* Charts + Activity */}
  <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

    {/* Sales Chart */}
    <div className='lg:col-span-2 bg-white p-6 rounded-xl shadow'>
      <h2 className='text-lg font-semibold mb-4'>Sales Overview</h2>

      <div className='h-60 flex items-center justify-center text-gray-400'>
        {/* Replace with Recharts later */}
        Chart goes here 📊
      </div>
    </div>

    {/* Recent Activity */}
    <div className='bg-white p-6 rounded-xl shadow'>
      <h2 className='text-lg font-semibold mb-4'>Recent Activity</h2>

      <ul className='space-y-4 text-sm'>
        <li className='flex justify-between'>
          <span>New order placed</span>
          <span className='text-gray-400'>2m ago</span>
        </li>

        <li className='flex justify-between'>
          <span>Product added</span>
          <span className='text-gray-400'>10m ago</span>
        </li>

        <li className='flex justify-between'>
          <span>Customer registered</span>
          <span className='text-gray-400'>1h ago</span>
        </li>

        <li className='flex justify-between'>
          <span>Order shipped</span>
          <span className='text-gray-400'>3h ago</span>
        </li>
      </ul>
    </div>

  </div>

  {/* Recent Orders Table */}
  <div className='mt-8 bg-white p-6 rounded-xl shadow overflow-x-auto'>
    <h2 className='text-lg font-semibold mb-4'>Recent Orders</h2>

    <table className='w-full text-sm text-left'>
      <thead>
        <tr className='text-gray-500 border-b'>
          <th className='py-2'>Order ID</th>
          <th className='py-2'>Customer</th>
          <th className='py-2'>Product</th>
          <th className='py-2'>Amount</th>
          <th className='py-2'>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr className='border-b'>
          <td className='py-2'>#1023</td>
          <td>John Doe</td>
          <td>Leather Jacket</td>
          <td>$120</td>
          <td className='text-green-500'>Completed</td>
        </tr>

        <tr className='border-b'>
          <td className='py-2'>#1024</td>
          <td>Jane Smith</td>
          <td>Sneakers</td>
          <td>$80</td>
          <td className='text-yellow-500'>Pending</td>
        </tr>

        <tr>
          <td className='py-2'>#1025</td>
          <td>Mike Ross</td>
          <td>T-shirt</td>
          <td>$25</td>
          <td className='text-red-500'>Cancelled</td>
        </tr>
      </tbody>
    </table>
  </div>

</main>
  )
}

export default MainDashboard