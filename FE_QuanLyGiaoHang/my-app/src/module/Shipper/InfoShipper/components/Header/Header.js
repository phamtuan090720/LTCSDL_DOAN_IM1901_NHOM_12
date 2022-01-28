import { Button, PageHeader } from 'antd'
import React, { useState } from 'react'
import Paper from '../../../../../components/Paper/Paper';
import ChangeInfoShipper from '../ChangeInfoShipper/ChangeInfoShipper';
import ChangePassword from '../ChangePassword/ChangePassword';
import style from './Header.module.scss';
export default function Header() {
    const [isOpenChangePassword, setOpenChangePassword] = useState(false);
    const [isOpenChangeInfo, setOpenChangeInfo] = useState(false);
    return (
        <Paper className={style.wrap}>
            <PageHeader
                title='Info Shipper'
                extra={[
                    <Button onClick={() => setOpenChangeInfo(true)}>Change Info</Button>,
                    <Button onClick={() => setOpenChangePassword(true)}>Change Password</Button>
                ]}
            >
            </PageHeader>
            <ChangePassword isOpenChangePassword={isOpenChangePassword} setOpenChangePassword={setOpenChangePassword} />
            <ChangeInfoShipper isOpenChangeInfo = {isOpenChangeInfo} setOpenChangeInfo = {setOpenChangeInfo}/>
        </Paper>
    )
}
