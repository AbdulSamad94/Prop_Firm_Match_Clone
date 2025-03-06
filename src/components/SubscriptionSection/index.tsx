import React from 'react'

const SubscriptionSection = () => {
  return (
    <section className='p-2'>

    <div className='max-w-7xl  mx-auto bg-[#151314] w-full  p-8 md:p-20 border border-gray-500 rounded my-20 flex flex-col items-center gap-6 md:gap-8'>
        <p className='uppercase text-secondary-text md:text-base text-sm'>Stay Connected</p>
        <h2 className='text-2xl md:text-4xl font-bold max-w-2xl text-center leading-normal md:leading-relaxed'>{"Subscribe For The Latest In Prop Trading News And Deals"}</h2>
        <div className='rounded-full flex px-2 py-1 md:px-4 md:p-2 bg-accent-bg  '>
            <input className='max-w-[200px] md:text-base text-sm' type="text" placeholder='Enter your Email'/>
            <button className='rounded-full py-2 px-4 md:text-base text-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-500"'>
                Subscribe
            </button>
        </div>
    </div>
    </section>

  )
}

export default SubscriptionSection