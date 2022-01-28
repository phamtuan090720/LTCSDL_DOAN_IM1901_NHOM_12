import { PageHeader } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'
import Paper from '../../../../components/Paper/Paper';
import style from './Header.module.scss';
export default function Header() {
    const history = useHistory();
    return (
        <Paper className={style.wrap}>
            <PageHeader
                onBack={() => history.goBack()}
                title='Info Shipper'
            >
            </PageHeader>
        </Paper>
    )
}
