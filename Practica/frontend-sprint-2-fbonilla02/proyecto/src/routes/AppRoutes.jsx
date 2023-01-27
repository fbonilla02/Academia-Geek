import React from 'react'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import Footer from '../components/Footer'
import AllData from '../container/AllData'
import Detail from '../container/Detail'
import EditPayment from '../container/EditPayment'
import EditProf from '../container/EditProf'
import Faq from '../container/Faq'
import Lenguage from '../container/Lenguage'
import LocEdit from '../container/LocEdit'
import Main from '../container/Main'
import Product from '../container/Product'
import Profile from '../container/Profile'
import Support from '../container/Support'

export default function AppRoutes() {
    return (
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/AllData' element={<AllData />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='/Profile/EditProfile' element={<EditProf />}/>
        <Route path='/Profile/EditPayment' element={<EditPayment />}/>
        <Route path='/Profile/Lenguage' element={<Lenguage />}/>
        <Route path='/Profile/Location' element={<LocEdit />}/>
        <Route path='/Profile/Faq' element={<Faq />}/>
        <Route path='/Profile/supp' element={<Support />}/>
        <Route path='/detalle/:id' element={<Product/>}/>
        <Route path='/detalle/:id/:id/' element={<Detail/>}/>
    </Routes>
    <Footer />
       
    
    </BrowserRouter>
    )
}
