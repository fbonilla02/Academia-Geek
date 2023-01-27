import React from 'react'
import anillo from '../Image/gold-ring.png'
import anilloV from '../Image/Rectangle 4.png'
import play from '../Image/Group 5.png'


export default function FirstComponent() {
  return (
    <div className='grid grid-row-2 md:grid-cols-2 gap-4 md:px-20 pl-5'>

    <div className='flex flex-col relative '>
    <img src={anillo} alt='anillo' />
    <h1 className='text-6xl'>Jewelery tells a great story</h1>

    <div className='absolute md:inset-y-1/3 bottom-20 -right-4 md:-right-16 ' >
      <div className='border rounded-full px-6 py-10 '>
      <p className='underline'>Explore</p>
      </div>
    </div>
    <div className='flex pt-5'>
      <section className='px-5'>
      <h3 className='font-bold '>GOLD</h3>
      <p className='mt-2 text-xs md:text-base '>Her provision acuteness had
two why intention. </p>
      </section>
      <section>
      <h3 className='font-bold '>SILVER</h3>
      <p className='mt-2 text-xs md:text-base'>Her provision acuteness had
two why intention. </p>
      </section>
    </div>
    </div>

    <div>
      <section>
        <h2 className='text-3xl'>Our Story</h2>
        <p className='text-sm pt-5 md:text-base'>modern jewelry is made of gold, silver, or platinum, often with precious or semiprecious stones, it evolved from shells, animal teeth, and other items used as body decoration in prehistoric times.</p>
      </section>

      <section>
      <img src={anilloV} alt='si'/>
      <div className='flex items-center gap-2 justify-center '>
        <img src={play} alt='play'/>
        <p>Play Video</p>
      </div>
      </section>
    </div>

    </div>
  )
}
