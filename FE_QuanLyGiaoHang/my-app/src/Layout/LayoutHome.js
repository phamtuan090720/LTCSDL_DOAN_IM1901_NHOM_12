import React from 'react'
import HomeNavbar from '../components/Navbar/HomeNavbar'
export default function LayoutHome({ children }) {
    return <>
        <HomeNavbar />
        {children}
    </>
}
