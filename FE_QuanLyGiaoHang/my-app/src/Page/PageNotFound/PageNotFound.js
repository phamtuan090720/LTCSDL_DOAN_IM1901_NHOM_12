import { Result } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
export default function PageNotFound() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Không tìm thấy trang"
            extra={<Link to='/'>Back Home</Link>}
        />
    )
}