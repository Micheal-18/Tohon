import React from 'react'
import shot from '../assets/shot.jpeg'
import { FaPlus } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Home = () => {
  const data = [
    { id: 1, img: shot, title: 'New Arrivals' },
    { id: 2, img: shot, title: 'The Casual Edit' },
    { id: 3, img: shot, title: 'Best Sellers' },
  ];

  const insta = [
    { id: 1, img: shot },
    { id: 2, img: shot },
    { id: 3, img: shot },
    { id: 4, img: shot },
    { id: 5, img: shot },
  ];

  const wear = [
    { id: 1, img: shot, icon: FaPlus },
    { id: 2, img: shot, icon: FaPlus },
    { id: 3, img: shot, icon: FaPlus },
    { id: 4, img: shot, icon: FaPlus },
    { id: 5, img: shot, icon: FaPlus },
  ]
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
          <button className='p-2 w-1/2 flex items-center justify-center bg-(--primary) dark:bg-(--primary) rounded text-(--secondary) dark:text-(--secondary)'>Shop Now</button>
        </div>
      </div>
      <div className="w-full relative lg:flex hidden flex-col space-y-4 mt-10 px-4">
        <h1 className="text-(--dropdownh1) dark:text-(--dropdownh1)  text-md lg:text-lg">What to Wear Now</h1>

        <div className="flex gap-8 lg:overflow-hidden overflow-x-auto scrollbar-hide py-2">
          {/* CARD 1 */}
          {wear.map((item) => (
            <div key={item.id} className="relative shrink-0">
              <img
                src={item.img}
                alt={`feature${item.id}`}
                className="w-55 h-55 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute right-3 bottom-3 bg-black/60 text-white p-1 rounded-full">
                <FaPlus />
              </div>
            </div>
          ))}



        </div>

      </div>
      <div className="w-full relative flex flex-col space-y-4 mt-10 px-4">
        {/* HEADINGS */}
        <h1 className="text-(--dropdownh1) dark:text-(--dropdownh1)  text-md lg:text-lg">
          Elevate your lifestyle, with a more intelligent, superior wardrobe.
          <br />Discover the art of timeless fashion with Tohon where sustainability meets style.
        </h1>

        {/* HORIZONTAL SCROLL */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 text-md text-(--primary) dark:text-(--primary) font-semibold py-2">

          {/* CARD 1 */}
          {data.map((item) => (
            <div key={item.id} className="relative flex-1 ">
              <img
                src={item.img}
                alt={item.title}
                className="w-150 lg:h-120 object-cover rounded shadow-md hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute left-3 bottom-3   p-1 ">
                {item.title}
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="w-full relative lg:hidden flex flex-col space-y-4 mt-10 px-4">
        <h1 className="text-(--dropdownh1) dark:text-(--dropdownh1)  text-md lg:text-lg">What to Wear Now</h1>

        <div className="flex gap-8 lg:overflow-hidden overflow-x-auto scrollbar-hide py-2">
          {/* CARD 1 */}
          {wear.map((item) => (
            <div key={item.id} className="relative shrink-0">
              <img
                src={item.img}
                alt={`feature${item.id}`}
                className="w-55 h-55 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute right-3 bottom-3 bg-black/60 text-white p-1 rounded-full">
                <FaPlus />
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="w-full relative flex flex-col space-y-4 mt-10 px-4">
        <div className="flex flex-col justify-center items-center lg:flex-row gap-4 text-md text-(--primary) dark:text-(--primary) font-semibold py-2">
          <div className="relative shrink-0">
            <img
              src={shot}
              alt="feature3"
              className="w-150 h-150 object-cover rounded  shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute left-3 bottom-3 text-2xl  p-1 ">
              Best Sellers
            </div>
          </div>

          <div className="relative shrink-0">
            <img
              src={shot}
              alt="feature3"
              className="w-150 h-150 object-cover rounded  shadow-md hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute left-3 bottom-3 text-2xl  p-1 ">
              Best Sellers
            </div>
          </div>
        </div>
      </div>

      <div className='w-full relative flex flex-col  '>
        <div className='flex flex-col items-center justify-center bg-(--footer) dark:bg-(--footer) space-x-8 text-lg mt-10 py-20 px-4 lg:px-20 text-center gap-6'>
          <h1 className='text-2xl text-(--secondary) dark:text-(--secondary) '>The Art of Fewer, Better Choices</h1>

          <p className='text-(--secondary) dark:text-(--secondary) max-w-2xl text-center'>
            At Tohon, we believe in the power of thoughtful fashion. Our curated collections are designed to help you build a wardrobe that reflects your values and style. By choosing quality over quantity, you contribute to a more sustainable future while enjoying timeless pieces that elevate your everyday look.
          </p>
        </div>
      </div>

      <div className='w-full relative flex flex-col space-y-8 mt-10 py-10 px-4'>
        <h1 className="text-(--dropdownh1) dark:text-(--dropdownh1) text-center  text-md lg:text-lg">Shop Instagram</h1>
        <div className="flex gap-8 lg:overflow-hidden overflow-x-auto scrollbar-hide py-2">

          {insta.map((item) => (
            <div key={item.id} className="relative shrink-0 group">
              <img
                src={item.img}
                alt={`insta${item.id}`}
                className="w-50 h-50 lg:w-55 lg:h-55  object-cover  shadow-md hover:shadow-xl transition-shadow duration-300 group"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Home