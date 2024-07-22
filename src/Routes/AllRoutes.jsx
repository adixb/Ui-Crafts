import React from 'react'
import {Routes,Route} from 'react-router-dom' ; 
import Home from '../Pages/Home';
import Component from '../Pages/Component';

function AllRoutes() {
  return (
 <>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Component-Page' element={<Component/>}/>

 </Routes>
 </>
  )
}

export default AllRoutes