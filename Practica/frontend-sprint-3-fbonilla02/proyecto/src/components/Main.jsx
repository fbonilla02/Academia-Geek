import React from 'react'

import { AiOutlineBell, AiFillLock} from "react-icons/ai";

import account from '../image/Account.png'
import saltito from '../image/saltito.png'
import ejercicio1 from '../image/461.png'
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className='bg-blue-back h-full xl:h-screen text-white '>
      <div className='flex justify-between items-center px-5'>
        <Link  className='flex  items-center' to='/profile'>
          <img src={account} alt='account'/>
          <div className='ml-5'>
            <p>Hi!</p>
            <p>Ralp Edwards</p>
          </div>
          </Link>
        <section>
          <AiOutlineBell className='text-2xl text-blue-button '/>
        </section>
      </div>
      <div className='py-5 flex flex-row w-full items-center overscroll-x-contain snap-x overflow-x-auto'>

        <div className='flex ml-10 rounded-lg  items-center bg-back-color w-full px-5 py-2'>
          <div className='flex justify-center flex-col w-60  h-36'>
            <p className='font-bold '>Warm up</p>
            <p>Before training, be sure to warm up, give it 5 - 10 minutes</p>
          </div>
          <img src={saltito} alt='saltito'/>
        </div>
        <div className='flex ml-10 rounded-lg  items-center bg-back-color w-full px-5 py-2'>
          <div className='flex justify-center flex-col w-60  h-36'>
            <p className='font-bold '>Warm up</p>
            <p>Before training, be sure to warm up, give it 5 - 10 minutes</p>
          </div>
          <img src={saltito} alt='saltito'/>
        </div>
      </div>
      <div className='grid grid-cols-2 justify-around rounded-full   mx-10 items-center mt-5 h-12  bg-back-color'>
        <section className='flex justify-center items-center rounded-full h-full hover:bg-blue-button'>
            <p className='text-center '>Discover</p>
        </section>
        <section className='flex justify-center items-center rounded-full h-full hover:bg-blue-button'>
            <p className='text-center '>Discover</p>
        </section>
       </div>

      <div className='py-5 flex flex-row w-full pl-5 items-center md:justify-center overscroll-x-contain snap-x overflow-x-auto'>
        <button className='min-w-max rounded-full  ml-5 px-5  py-1 h-full bg-back-color hover:bg-blue-button'>
          All Body
        </button>

        <button className=' rounded-full  ml-5 px-5 py-1 h-full bg-back-color hover:bg-blue-button'>
          Triceps
        </button>
        <button className=' rounded-full ml-5 px-5 py-1 h-full bg-back-color hover:bg-blue-button'>
          Biceps
        </button>
        <button className=' rounded-full ml-5 px-5 py-1 h-full bg-back-color hover:bg-blue-button'>
          Breast
        </button>
        <button className=' rounded-full ml-5 px-5 py-1 h-full bg-back-color hover:bg-blue-button'>
          Back
        </button>
        <button className=' rounded-full ml-5 px-5 py-1 h-full bg-back-color hover:bg-blue-button'>
          Legs
        </button>
      </div>

      <div className='px-16 justify-center grid lg:grid-cols-[repeat(auto-fill,_minmax(min(100%,_20rem),_2fr))]  gap-4 '>
            <div className="mt-5 max-w-sm bg-back-color rounded-lg  border-gray-200 shadow-md ">
                    <img className=" w-full rounded-t-lg" src={ejercicio1} alt=""/>
                <div className="p-3 grid  md:grid-cols-[1fr_120px]">
                  <div className='p-2'>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight ">Split 3 days</h5>
                      <p className="mb-3 text-xs">the workout is divided into 3 days, day 1 biceps back day 2 triceps chest day 3 shoulders legs</p>
                  </div>
                        
                  <div className='flex flex-col justify-around  items-end'>
                    <p>39 min</p>
                    <p className=' text-blue-button'><AiFillLock className='inline text-xl'/> Premium</p>
                  </div>
                </div>
            </div>
            <div className="mt-5 max-w-sm bg-back-color rounded-lg  border-gray-200 shadow-md ">
                    <img className=" w-full rounded-t-lg" src={ejercicio1} alt=""/>
                <div className="p-3 grid  md:grid-cols-[1fr_120px]">
                  <div className='p-2'>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight ">Split 3 days</h5>
                      <p className="mb-3 text-xs">the workout is divided into 3 days, day 1 biceps back day 2 triceps chest day 3 shoulders legs</p>
                  </div>
                        
                  <div className='flex flex-col justify-around  items-end'>
                    <p>39 min</p>
                    <p className=' text-blue-button'><AiFillLock className='inline text-xl'/> Premium</p>
                  </div>
                </div>
            </div>
            <div className="mt-5 max-w-sm bg-back-color rounded-lg  border-gray-200 shadow-md ">
                    <img className=" w-full rounded-t-lg" src={ejercicio1} alt=""/>
                <div className="p-3 grid  md:grid-cols-[1fr_120px]">
                  <div className='p-2'>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight ">Split 3 days</h5>
                      <p className="mb-3 text-xs">the workout is divided into 3 days, day 1 biceps back day 2 triceps chest day 3 shoulders legs</p>
                  </div>
                        
                  <div className='flex flex-col justify-around  items-end'>
                    <p>39 min</p>
                    <p className=' text-blue-button'><AiFillLock className='inline text-xl'/> Premium</p>
                  </div>
                </div>
            </div>
      </div>

    </div>
  );
}

export default Main;
