import React from 'react'
import { Route } from 'react-router'
import LayoutShipper from '../../Layout/LayoutShipper/LayoutShipper'

export default function ShipperTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={(propsComponent) => (
                <LayoutShipper>
                    <Component {...propsComponent} />
                </LayoutShipper>
            )}
        />
    )
}
