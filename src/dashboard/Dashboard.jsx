import React from 'react'
import { FaCog } from 'react-icons/fa'
import { FaBox, FaCircleDollarToSlot, FaPeopleLine, FaUser, FaUserTag } from 'react-icons/fa6'
import { RiShoppingBag2Line, RiStarLine } from 'react-icons/ri'

const Dashboard = () => {
  return (
    <section className='relative min-h-screen flex'>
        <aside className='absolute left-0 top-0 space-y-10 w-64 bg-gray-800 text-white'>
            <header className='text-2xl font-bold mb-4 block p-2 rounded hover:bg-gray-700 border-b border-gray-700'>
              711 Tohon Fashion Store
            </header>
            <main className='p-4 space-y-4'>
              <nav>
                <h1 className='text-xs uppercase font-regular mb-4'>Overview</h1>
                <ul>
                  <li className='mb-2'><a href="#" className='block p-2 rounded hover:bg-gray-700'>Dashboard</a></li>
                  <li className='mb-2'><a href="#" className='block p-2 rounded hover:bg-gray-700'>Analytics</a></li>
                </ul>
              </nav>

              <nav>
                <h1 className='text-xs uppercase font-regular mb-4'>Commerce</h1>
                <ul>
                  <li className='mb-2'><a href="#" className='flex items-center gap-4 p-2 rounded hover:bg-gray-700'><RiShoppingBag2Line/> Orders</a></li>
                  <li className='mb-2'><a href="#" className='flex items-center gap-4 p-2 rounded hover:bg-gray-700'><FaBox/> Products</a></li>
                  <li className='mb-2'><a href="#" className='flex items-center gap-4 p-2 rounded hover:bg-gray-700'><FaUserTag/> Collection</a></li>
                  <li className='mb-2'><a href="#" className='flex items-center gap-4 p-2 rounded hover:bg-gray-700'><FaCircleDollarToSlot/> Revenue</a></li>
                </ul>
              </nav>

              <nav>
                <h1 className='text-xs uppercase font-regular mb-4'>Customer</h1>
                <ul>
                  <li className='mb-2'><a href="#" className='flex items-center gap-4 p-2 rounded hover:bg-gray-700'><FaPeopleLine/> Customers</a></li>
                  <li className='mb-2'><a href="#" className='flex items-center gap-4 p-2 rounded hover:bg-gray-700'><RiStarLine /> Loyalty</a></li>
                </ul>
              </nav>

              <nav>
                <h1 className='text-xs uppercase font-regular mb-4'>Settings</h1>
                <ul>
                  <li className='mb-2'><a href="#" className='flex items-center gap-4 p-2 rounded hover:bg-gray-700'><FaUser/> Profile</a></li>
                  <li className='mb-2'><a href="#" className='flex items-center gap-4 p-2 rounded hover:bg-gray-700'><FaCog/> Account</a></li>
                </ul>
              </nav>
            </main>
            <footer className='absolute bottom-0 w-full  text-center text-sm text-gray-400'>
              <div className='relative flex gap-4 justify-center mb-2'>
                <h1 className='absolute top-2.5 left-16'>EM</h1>
                <div className='w-10 h-10 rounded-full bg-gray-600'></div>
                <div className=''>
                  <h1>Eleke Michael</h1>
                  <p>Store Manager</p>
                </div>
              </div>
            </footer>
        </aside>
        <main className='flex-1 p-4'>
            <h1>Welcome to the Dashboard</h1>
            <p>This is the main content area.</p>
        </main>
    </section>
  )
}

export default Dashboard