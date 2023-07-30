import { Space } from "antd";
import React from 'react'
import Header from './Header'
import { Footer } from "antd/es/layout/layout";
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import SideMenu from './SideMenu';
import "./Layout.css";


const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <div>
        {children}
    </div>
   
    
    </>
  )
}

export default Layout