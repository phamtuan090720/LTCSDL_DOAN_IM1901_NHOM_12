import { Layout } from 'antd';
import React from 'react'
import CustomMenuUser from '../../components/CustomMenu/CustomMenuUser';
export default function LayoutKhachHang({ children }) {
    return (
        <Layout style={{ minHeight: '100vh',height:"100%" }}>
            <CustomMenuUser />
            <Layout.Content>
                {children}
            </Layout.Content>
        </Layout>
    )
}
