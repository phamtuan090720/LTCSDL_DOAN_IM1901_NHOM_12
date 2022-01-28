import React from 'react'
import { Route } from 'react-router'
import LayoutKhachHang from '../../Layout/LayoutKhachHang/LayoutKhachHang'

export default function CustomerTemplate({ Component, ...props }) {
    return (

        <Route
            {...props}
            render={(propsComponent) => (
                
                    <LayoutKhachHang>
                        <Component {...propsComponent} />
                    </LayoutKhachHang>
           
            )}
        />

    )
}
