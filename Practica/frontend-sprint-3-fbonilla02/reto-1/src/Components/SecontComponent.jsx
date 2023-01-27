import React from 'react'
import manilla  from '../Image/image24.png'
import reloj from '../Image/image25.png'

export default function SecondComponent() {
  return (
  <div>
      <div className='grid items-center grid-row-2 md:grid-cols-2 gap-4 md:px-20 pl-5'>
        <section>
            <img src={manilla} alt='manilla'/>
        </section>
        <section>
            <h2 className='text-4xl'>Gold Woven Chain Bracelet in Black</h2>
            <p className='mt-2 text-xs  md:text-base'>This bracelet features a 5MM Stainless Steel chain with Nylon cord braiding. Each bracelet includes a polishing pad and a cotton jewelry pouch. Proudly made by hand in Atlanta, GA.</p>
            <div className='py-5'>
            <p>Size</p>
            <div className="btn-group">
                <input type="radio" name="options" data-title="S" className="btn btn-outline" />
                <input type="radio" name="options" data-title="M" className="btn btn-outline" />
                <input type="radio" name="options" data-title="L" className="btn btn-outline" />
            </div>
            <div className='flex gap-5 pt-5 items-center'>
            <button className="btn ">ADD TO CART</button>
                <p className='font-bold text-lg'>320.99</p>
            </div>
            </div>
        </section>
    </div>

    <div className='grid items-center grid-row-2 md:grid-cols-2 gap-4 md:px-20 px-5'>
        
        <section className=' order-1 md:-order-1'>
            <h2 className='text-4xl'>Gold Black Coral Ring</h2>
            <p className='mt-2 text-xs  md:text-base'>This bracelet features a 5MM Stainless Steel chain with Nylon cord braiding. Each bracelet includes a polishing pad and a cotton jewelry pouch. Proudly made by hand in Atlanta, GA.</p>
            <div className='py-5'>
            <p>Size</p>
            <div className="btn-group">
                <input type="radio" name="options" data-title="S" className="btn btn-outline" />
                <input type="radio" name="options" data-title="M" className="btn btn-outline" />
                <input type="radio" name="options" data-title="L" className="btn btn-outline" />
            </div>
            <div className='flex gap-5 pt-5 items-center'>
            <button className="btn ">ADD TO CART</button>
                <p className='font-bold text-lg'>320.99</p>
            </div>
            </div>
        </section>
        <section >
            <img src={reloj} alt='manilla'/>
        </section>
    </div>
   
  </div>
  )
}
