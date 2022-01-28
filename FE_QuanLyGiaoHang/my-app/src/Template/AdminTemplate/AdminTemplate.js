import React from 'react'
import { Route } from 'react-router'
import LayoutAdmin from '../../Layout/LayoutAdmin/LayoutAdmin'

export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => (
                <LayoutAdmin>
                    <Component {...propsComponent} />
                </LayoutAdmin>
            )}
        />
    )
}
