import React from 'react'
import anilloHand from '../Image/image(12).png'
import collar from '../Image/image(13).png'
import arete from '../Image/image(14).png'
import umbraco from '../Image/logo.png'
import pearfisher from '../Image/logo-1.png'
import brightpearl from '../Image/logo-2.png'
import planday from '../Image/logo-3.png'

export default function ThirtComponent() {
  return (
    <div className=' gap-4 md:px-20 pl-5'>
    <section className='grid grid-row-2 md:grid-row-0 md:grid-cols-2 my-5 items-center'>
        <img src={anilloHand} alt='anilloHand'/>
        <div className='pl-5'>
        <h3 className='text-4xl pt-10'>J-Shop’s best Collections</h3>
        <h4 className='text-2xl pt-5'>Comfort</h4>
        <p className='mt-2 text-xs  md:text-base'>  We will reach out to you for the current cost of this permit. Please contact us for more information. Maui Divers Jewelry offers extended sizing which may be subject to an additional cost. Any subsequent resizes after purchase will incur an additional charge. Please note some styles cannot be resized due to their design.</p>
        </div>
    </section>
    <section className='grid grid-row-2 md:grid-row-0 md:grid-cols-2 items-center'>
        <img src={collar} alt='anilloHand'/>
            <div className='pr-5 md:-order-1'>
            <h4 className='text-2xl pt-5'>100% Gold</h4>
            <p className='mt-2 text-xs md:text-base'> Gold chains were a sign of service to the supreme beings of a particular religion in the past. Nowadays, they are symbols of wealth and class. Rap artists were most likely the ones who brought the custom of wearing gold chains to modern men's everyday life. There are a few reasons why do men wear gold chains.</p>
            </div>
    </section>

    <section className='grid grid-row-2 md:grid-row-0 md:grid-cols-2 my-5 items-center'>
    <img src={arete} alt='anilloHand'/>
        <div className='pl-5'>
        <h4 className='text-2xl pt-5'>Trendy</h4>
        <p className='mt-2 text-xs md:text-base'> A collection of hammered gold discs swing from the top and bottom of a shimmery gold hoop, creating a noisy fringe. Earring attaches to a standard fishhook fitting. Sold as one pair of earrings.Other hoop designs do not complete the circle, but penetrate through the ear in a post, using the same attachment techniques that apply to stud earrings.</p>
        <div className='pt-5'>
        <button className="btn ">GO TO SHOP</button>
        </div>
        </div>
    </section>
    <section className=' flex flex-col items-center my-5'>
        <h2 className='text-2xl my-10 font-bold'>Trusted by leading companies</h2>
        <div className="text-sm breadcrumbs mb-10">
          <ul >
            <li className='mr-2'><img src={umbraco} alt=''/></li>
            <li className='mr-2'><img src={pearfisher} alt=''/></li>
            <li className='mr-2'><img src={brightpearl} alt=''/></li>
            <li className='mr-2'><img src={planday} alt=''/></li>
          </ul>
        </div>
    </section>
    </div>
  )
}
