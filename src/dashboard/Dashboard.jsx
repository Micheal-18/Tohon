import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { FaChartBar, FaCog, FaWindows } from 'react-icons/fa'
import { FaBox, FaCircleDollarToSlot, FaPeopleLine, FaUser, FaUserTag } from 'react-icons/fa6'
import { RiShoppingBag2Line, RiStarLine } from 'react-icons/ri'

const Dashboard = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-4 p-2 rounded transition ${
      isActive
        ? 'bg-yellow-200 text-black'
        : 'hover:bg-yellow-200 hover:text-black'
    }`

  return (
    <section className='min-h-screen flex bg-gray-50'>

      {/* SIDEBAR */}
      <aside className='fixed left-0 top-0 h-full w-64 bg-black text-white'>
        <header className='p-6 border-b border-gray-700'>
          <h1 className='text-2xl font-bold'>
            711 Tohon
            <span className='block text-sm font-light text-yellow-100'>
              Fashion Company
            </span>
          </h1>
        </header>

        <div className='p-8 space-y-10 custom-scrollbar overflow-y-auto h-[calc(100vh-8rem)]'>

          {/* Overview */}
          <nav>
            <h1 className='text-xs uppercase mb-4'>Overview</h1>
            <ul className='space-y-2 text-sm'>
              <li>
                <NavLink to="/dashboard" end className={linkClass}>
                  <FaWindows /> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/analytics" className={linkClass}>
                  <FaChartBar /> Analytics
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Commerce */}
          <nav>
            <h1 className='text-xs uppercase mb-4'>Commerce</h1>
            <ul className='space-y-2 text-sm'>
              <li>
                <NavLink to="/dashboard/orders" className={linkClass}>
                  <RiShoppingBag2Line /> Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/products" className={linkClass}>
                  <FaBox /> Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/collections" className={linkClass}>
                  <FaUserTag /> Collection
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/revenue" className={linkClass}>
                  <FaCircleDollarToSlot /> Revenue
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Customer */}
          <nav>
            <h1 className='text-xs uppercase mb-4'>Customer</h1>
            <ul className='space-y-2 text-sm'>
              <li>
                <NavLink to="/dashboard/customers" className={linkClass}>
                  <FaPeopleLine /> Customers
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/loyalty" className={linkClass}>
                  <RiStarLine /> Loyalty
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Settings */}
          <nav>
            <h1 className='text-xs uppercase mb-4'>Settings</h1>
            <ul className='space-y-2 text-sm'>
              <li>
                <NavLink to="/dashboard/profile" className={linkClass}>
                  <FaUser /> Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/account" className={linkClass}>
                  <FaCog /> Account
                </NavLink>
              </li>
            </ul>
          </nav>

        </div>

        <div className='absolute bottom-0 left-0 border-t bg-black p-4 w-full text-center text-sm text-black'>
          <div className='relative flex gap-4  mb-2'>
            <h1 className='absolute top-2.5 left-2.5 font-serif'>EM</h1>
            <div className='w-10 h-10 rounded-full bg-yellow-200/50'></div>
            <div className='text-left'>
              <h1 className='text-gray-100 font-semibold'>Eleke Michael</h1>
              <p className='text-gray-500 text-xs'>Store Manager</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className='flex-1 ml-64 p-4 lg:p-8'>
        <Outlet />
      </main>

    </section>
  )
}

export default Dashboard