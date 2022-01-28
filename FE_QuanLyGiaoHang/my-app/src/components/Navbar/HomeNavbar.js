import React from 'react'
import Style from './NavbarHome.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
export default function HomeNavbar() {
    const loaction = useLocation();
    return (
        <div className={Style.wrap}>
            <div className={Style.navBarLeft}>
                <NavLink to="/">
                    <div className={Style.logo}>
                        <img src='./img/logo2.png' alt='logo' />
                    </div>
                </NavLink>
            </div>
            <div className={Style.navBarRight}>
                <ul className={Style.menu}>
                    <li><NavLink to="/" isActive={() => {
                        if (loaction.pathname === '/' || loaction.pathname === '/home') {
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }}>Home</NavLink></li>
                    <li><NavLink to="/about" isActive={() => {
                        if (loaction.pathname === '/about') {
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }}>About Us</NavLink></li>
                    <li><NavLink to="/contact" isActive={() => {
                        if (loaction.pathname === '/contact') {
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }} >Contact</NavLink></li>
                    <li><NavLink to="/login" isActive={() => {
                        if (loaction.pathname === '/login') {
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }}>Login</NavLink></li>
                    <li><NavLink to="/sign-up" isActive={() => {
                        if (loaction.pathname === '/sign-up') {
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }}>Sign Up</NavLink></li>
                    <li><NavLink to="/sign-up-shipper" isActive={() => {
                        if (loaction.pathname === '/sign-up-shipper') {
                            return 1;
                        }
                        else return 0;
                    }} activeStyle={{
                        color: "#13A549"
                    }}>Sign up Shipper</NavLink></li>
                </ul>
            </div>
        </div>
    )

}
