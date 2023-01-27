import React from 'react'
import senora from '../Image/image12.png'
import hands from '../Image/Rectangle349.png'
import oidos from '../Image/Rectangle348.png'
import collar2 from '../Image/Rectangle347.png'

export default function FourComponent() {
  return (
    <div className='grid grid-row-2 gap-4 md:px-20 pl-5'>
        <section>
                    <div className="carousel  w-full">
                    <div id="item1" className="carousel-item  items-center w-full">
                    <div className='grid  md:grid-cols-2'>
                        <img className='hidden md:inline ' src={senora} alt='a' />
                        <div className=' bg-white  py-5 px-2 md:p-10 w-fit h-fit'>
                            <h5 className='text-2xl  '>Maria Sarapavoo</h5>
                            <p className='text-sm'>Senior Designer</p>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using letters Ipsum is that it has a more-or-less normal distribution of letter.</p>
                        </div>
                    </div>
                    </div> 
                    <div id="item2" className="carousel-item w-full gap-2">
                    <div className='grid   md:grid-cols-2'>
                        <img className='hidden md:inline' src={senora} alt='a' />
                        <div className=' bg-white py-5 px-2  md:p-10 w-fit h-fit'>
                            <h5 className='text-2xl  '>Maria Sarapavoo</h5>
                            <p className='text-sm'>Senior Designer</p>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using letters Ipsum is that it has a more-or-less normal distribution of letter.</p>
                        </div>
                    </div>
                    </div> 
                    <div id="item3" className="carousel-item w-full">
                    <div className='grid grid-cols-2'>
                        <img className='hidden md:inline bo' src={senora} alt='a' />
                        <div className=' bg-white  py-5 px-2  md:p-10 w-fit h-fit'>
                            <h5 className='text-2xl  '>Maria Sarapavoo</h5>
                            <p className='text-sm'>Senior Designer</p>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using letters Ipsum is that it has a more-or-less normal distribution of letter.</p>
                        </div>
                    </div>
                    </div> 
                    <div id="item4" className="carousel-item w-full">
                    <div className='grid grid-cols-2'>
                        <img className='hidden md:inline' src={senora} alt='a' />
                        <div className=' bg-white  py-5 px-2  md:p-10 w-fit h-fit'>
                            <h5 className='text-2xl  '>Maria Sarapavoo</h5>
                            <p className='text-sm'>Senior Designer</p>
                            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using letters Ipsum is that it has a more-or-less normal distribution of letter.</p>
                        </div>
                    </div>
                    </div>
                    </div> 
                    <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a> 
                    <a href="#item2" className="btn btn-xs">2</a> 
                    <a href="#item3" className="btn btn-xs">3</a> 
                    <a href="#item4" className="btn btn-xs">4</a>
                    </div>
        </section>
        <section className='flex flex-col items-center'>
        <h2 className='text-xl md:text-2xl font-bold'>Join J-Shop’s Family</h2>
        <div className="form-control my-5">
        <div className="input-group md:gap-4 grid grid-cols-2">
            <input type="text" placeholder="Enter your email" className="input input-bordered" />
            <button className="btn">
            Join Family
            </button>
        </div>
        </div>
        </section>
        <section className=''>
            <h2 className='text-center text-3xl my-10 font-bold'>Our Blogs</h2>
            <div className='grid md:grid-cols-3 gap-5'>
            <div className="card font-sans ">
                <figure><img src={hands} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">For Beauty</h2>
                    <p>Offending belonging promotion provision an be oh consulted ourselves it.</p>
                </div>
                </div>
                <div className="card font-sans">
                <figure><img src={oidos} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product Quality</h2>
                    <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day necessary.</p>
                </div>
                </div>
                <div className="card font-sans">
                <figure><img src={collar2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">For Comfort</h2>
                    <p>Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment.</p>
                    
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
