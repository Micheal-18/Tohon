import React from 'react'
import shot from '../assets/shot.jpeg'
import { FaPlus } from 'react-icons/fa6'

const Home = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center bg-(--primary) dark:bg-(--primary) '>
      <div className='relative flex flex-col  min-h-screen w-full items-center justify-center'>
        <div className='overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <img src={shot} alt="front" className='w-full h-full object-cover duration-500 absolute top-0 left-0 ' />
        </div>
        <div className='absolute left-10 bottom-10 flex flex-col  '>
          <div className='lg:text-4xl text-2xl text-left font-bold mb-4 drop-shadow-lg'>
            <h1 className='lg:max-w-md max-w-60 '>Elevate Your Style Timeless Fashion, Sustainable Choices</h1>
          </div>
          <button className='p-2 w-1/2 flex items-center justify-center bg-(--primary) dark:bg-(--primary) text-(--secondary) dark:text-(--secondary)'>Shop Now</button>
        </div>
      </div>


      <div className="w-full relative flex flex-col space-y-4 mt-10 px-4">

        {/* HEADINGS */}
        
          <h1 className="text-(--dropdownh1) dark:text-(--dropdownh1)  text-md lg:text-lg">
            Elevate your lifestyle, with a more intelligent, superior wardrobe.
            <br />Discover the art of timeless fashion with Tohon where sustainability meets style.
          </h1>
        

        {/* HORIZONTAL SCROLL */}
        <div className="flex flex-col lg:flex-row gap-4 text-md text-(--secondary) dark:text-(--secondary) font-semibold py-2">

          {/* CARD 1 */}
          <div className="relative shrink-0">
            <img
              src={shot}
              alt="feature1"
              className="w-100 h-100 object-cover  shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute left-3 bottom-3  p-1 ">
              New Arrivals
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative shrink-0">
            <img
              src={shot}
              alt="feature2"
              className="w-100 h-100 object-cover  shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute left-3 bottom-3   p-1 ">
              The Causal Edit
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative shrink-0">
            <img
              src={shot}
              alt="feature3"
              className="w-100 h-100 object-cover  shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute left-3 bottom-3  p-1 ">
              Best Sellers
            </div>
          </div>

        </div>
      </div>

      <div className="w-full relative flex flex-col space-y-4 mt-10 px-4">
        <h1 className="text-(--dropdownh1) dark:text-(--dropdownh1)  text-md lg:text-lg">What to Wear Now</h1>

        <div className="flex gap-8 lg:overflow-hidden overflow-x-auto scrollbar-hide py-2">
            {/* CARD 1 */}
          <div className="relative shrink-0">
            <img
              src={shot}
              alt="feature1"
              className="w-55 h-55 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute right-3 bottom-3 bg-black/60 text-white p-1 rounded-full">
              <FaPlus />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative shrink-0">
            <img
              src={shot}
              alt="feature2"
              className="w-55 h-55 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute right-3 bottom-3 bg-black/60 text-white p-1 rounded-full">
              <FaPlus />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative shrink-0">
            <img
              src={shot}
              alt="feature3"
              className="w-55 h-55 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute right-3 bottom-3 bg-black/60 text-white p-1 rounded-full">
              <FaPlus />
            </div>
          </div>
          {/* CARD 4 */}
          <div className="relative shrink-0">
            <img
              src={shot}
              alt="feature3"
              className="w-55 h-55 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute right-3 bottom-3 bg-black/60 text-white p-1 rounded-full">
              <FaPlus />
            </div>
          </div>
          {/* CARD 5 */}
          <div className="relative shrink-0">
            <img
              src={shot}
              alt="feature3"
              className="w-55 h-55 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute right-3 bottom-3 bg-black/60 text-white p-1 rounded-full">
              <FaPlus />
            </div>
          </div>
          
          </div>
          
      </div>

    </section>
  )
}

export default Home