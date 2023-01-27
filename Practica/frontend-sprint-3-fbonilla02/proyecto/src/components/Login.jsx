import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import logo from '../image/Logo.png'
import iconFace from '../image/iconFace.png'
import iconGoogle from '../image/iconGoogle.png'
import { GoogleLogin, loginAsync } from '../redux/actions/actions'
import { useDispatch } from 'react-redux'


const  RegisterShema = Yup.object().shape({
    email: Yup.string().email().required('Este email es requerido'),
    password1: Yup.string().min(6, 'Password muy corto').max(20, 'Password muy largo').required('Este campo es requerido'),
})


export default function Login() {
    const dispach = useDispatch()
  return (
    <div className='flex h-screen  justify-center bg-blue-back text-white '>
            <div className='flex flex-col py-5  w-3/5  content-center '>
            <div className=' flex items-center justify-center '>
                    <img  src={logo} alt='logo'/>
            </div>
            <p className='text-3xl text-center'>Sign In</p>
            <Formik initialValues={
        {
            email: '',
            password1:'',
        }
    } validationSchema={RegisterShema}
    onSubmit={values =>{
        console.log( values.email, values.password1)
        dispach(loginAsync( values.email, values.password1))
        }} >
    {({ errors, touched })=>(
        <Form className='pt-10'>
        
        <div className="mb-6">
            <Field type='email' placeholder='Email' name='email'  className="text-black bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            {errors.email && touched.email && <div>{errors.email}</div>}
        </div>
            <div className="mb-6">
            <Field type='password' placeholder='password' name='password1' className="text-black bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            {errors.password1 && touched.password1 && <div>{errors.password1}</div>}
            </div>
        <button type="onsubmit"  className="text-white bg-blue-button hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  >Entrar</button>
        </Form>
        )}
    </Formik>

            <p className='text-xs pt-2 text-center' > Forgot Password?</p>

            <div className='pt-10 flex flex-col items-center'>
                <p>Sing in With</p>
                <div className='flex pt-2'>
                    <img className='border-r-2 border-r-blue-900 px-2 cursor-pointer' src={iconGoogle} onClick={()=> dispach(GoogleLogin())} alt='google Icon'/>
                    <img className='px-2 cursor-pointer' src={iconFace} alt='facebook Icon'/>
                </div>
            </div>
            <span className='pt-10 text-center '> D’ont have an account ?<Link  className='text-blue-button' to='/register'> Register</Link></span>
            </div>
    </div>
  )
}
