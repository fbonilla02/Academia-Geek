import React from 'react'
import { useForm } from '../hooks/UseForm'
import logo from '../image/Logo.png'
import { useDispatch } from 'react-redux'
import { AddInfoAsync } from '../redux/actions/actions'

export default function Info() {
    const dispach = useDispatch()
    const  [formValue, handleInputChange, rest] = useForm({
        height: '',
        weight: '',
        age: ''


    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        rest()
      dispach(AddInfoAsync(formValue))

    }
  return (
    <div className='bg-blue-back h-screen '>
     <div className=' flex items-center justify-center '>
                    <img  src={logo} alt='logo'/>
            </div>
            <section className='flex flex-col py-5 m-auto  w-3/5  content-center' >
            <form onSubmit={handleSubmit}  className='flex flex-col gap-5 items-center '>
                <label className='text-white'>Enter your height</label>
                <input type='number' placeholder='Ej: 179 cm' name='height' onChange={handleInputChange}/>
                
                <label className='text-white'>Enter your weight</label>
                <input type='number' placeholder='Ej: 78 kg' name='weight' onChange={handleInputChange}/>

                <label className='text-white'>Enter your Age</label>
                <input type='number' placeholder='Ej: 15' name='age' onChange={handleInputChange}/>
                <button type="onsubmit"  className="text-white bg-blue-button hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar y continuar</button>
                </form>
            </section>
    </div>
  )
}
