import React, { useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import acountP from '../image/Ellipse29.png'
import { GiWeight,GiBodyHeight } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { actionLogoutAsync, listInfoASync } from '../redux/actions/actions';

export default function Profile() {
    
  const dispach = useDispatch()
  const { info} = useSelector(store => store.info)
  console.log(info);
  useEffect(()=>{
    dispach(listInfoASync())
  }, [dispach])
  return (
    <div className='px-2 py-5 bg-blue-back text-white h-screen ' >
   
    <div className='flex w-7/12 justify-between '>
    <Link to='/'> <IoIosArrowBack className='text-2xl text-blue-button'/></Link>
    <p className='text-center'>Account</p>
    </div>

    <div className=' flex pt-10 justify-center'>
        <img src={acountP} alt='account'/>
    </div>
    <div className='flex py-10 gap-5 justify-center'>
        <span className='bg-back-color px-4 py-2 rounded-full'><GiWeight  className='inline text-xl'/> 28 </span>
        <span className='bg-back-color px-4 py-2 rounded-full'><GiBodyHeight className='inline text-xl'/> 178 </span>
        <span className='bg-back-color px-4 py-2 rounded-full'><p className='font-bold inline'>Age:</p> 28 </span>
    </div>

    <div >
        <form className='flex flex-col gap-5'>
            <input/>
            <input/>
            <input/>
            <button className='bg-blue-button py-2 rounded-full'>Save</button>
        </form>
    </div>
    <div className='flex pt-10 justify-center'>
    <p onClick={() => dispach(actionLogoutAsync())}>Salir</p>
    </div>
    </div>
  )
}
