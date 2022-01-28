import { PageHeader } from 'antd'
import React from 'react'
import Paper from '../../../../../components/Paper/Paper';
import style from './Header.module.scss';
export default function Header() {
    return (
        <Paper className={style.wrap}>
            <PageHeader
                title="Orders are being delivered"
            />
        </Paper>
    )
}
