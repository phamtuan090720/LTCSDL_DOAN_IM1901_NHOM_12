import { Layout } from 'antd'
import React from 'react'
import ShipperMenu from '../../components/CustomMenu/ShipperMenu'

export default function LayoutShipper({ children }) {
    return (
        <Layout style={{ minHeight: '100vh', height: "100%" }}>
            <ShipperMenu />
            <Layout.Content>
                {children}
            </Layout.Content>
        </Layout>
    )
}
