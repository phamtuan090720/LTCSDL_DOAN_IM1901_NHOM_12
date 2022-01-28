import { Button, Result } from 'antd'
import React from 'react'

export default function PageErr({ type, mess }) {
    return (
        <Result
            status={type}
            title={type}
            subTitle={mess}
            extra={<Button shape='round' type="primary">Back Home</Button>}
        />
    )
}
