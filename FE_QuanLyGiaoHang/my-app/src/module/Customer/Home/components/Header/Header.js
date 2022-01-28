import { PlusOutlined } from '@ant-design/icons';
import { Button, PageHeader } from 'antd'
import React from 'react'
import Paper from '../../../../../components/Paper/Paper';
import style from './Header.module.scss';
export default function Header({ openFormCreate }) {
    return (
        <Paper className={style.wrap}>
            <PageHeader
                title="Your Post"
                extra={[
                    <Button icon={<PlusOutlined />} shape={'round'} key="1" type="primary" onClick={openFormCreate}>
                        Add Post
                    </Button>,
                ]}
            />
        </Paper>
    )
}
