import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../components/shared/header/Header';
import Footer from '../../components/shared/footer/Footer';

export const LayOut = () => {
  return (
    <div><Header/>
    <Outlet/>
    <Footer/>    
    </div>
  )
}
export default LayOut;