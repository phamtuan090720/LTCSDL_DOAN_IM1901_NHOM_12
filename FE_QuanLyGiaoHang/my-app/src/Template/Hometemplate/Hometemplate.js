import React from 'react'
import { Route } from 'react-router'
import LayoutHome from '../../Layout/LayoutHome'

export default function Hometemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => (
                <LayoutHome>
                    <Component {...propsComponent} />
                </LayoutHome>
            )}
        />
    )
}