import { Layout } from 'antd';
import React from 'react'
import AdminMenu from '../../components/CustomMenu/AdminMenu';

export default function LayoutAdmin({ children }) {
    return (
        <Layout style={{ minHeight: '100vh', height: "100%" }}>
            <AdminMenu />
            <Layout.Content>
                {children}
            </Layout.Content>
        </Layout>
    )
}
