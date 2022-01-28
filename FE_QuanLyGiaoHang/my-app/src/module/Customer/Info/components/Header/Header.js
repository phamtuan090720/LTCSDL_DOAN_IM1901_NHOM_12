import { Button, PageHeader } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Paper from '../../../../../components/Paper/Paper';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import ChangePassword from '../ChangePassword/ChangePassword';
import style from './Header.module.scss';
export default function Header() {
    const [isOpenChangeInfo, setOpenChangeInfo] = useState(false);
    const [isOpenChangePassword, setOpenChangePassword] = useState(false);
    const { userLogin } = useSelector(state => state.LoginReducer)
    const [action, setAction] = useState([])
    useEffect(() => {
        if (userLogin.user_role === "KhachHang") {
            setAction(
                [
                    <Button onClick={() => setOpenChangeInfo(true)}>Change Info</Button>,
                    <Button onClick={() => setOpenChangePassword(true)}>Change Password</Button>
                ]
            )
        }
        else {
            setAction([
                <Button onClick={() => setOpenChangeInfo(true)}>Change Info</Button>,
            ])
        }
    }, [userLogin])
    return (
        <>
            <Paper className={style.wrap}>
                <PageHeader
                    title='Info User'
                    extra={action}
                >
                </PageHeader>
            </Paper>
            <ChangeInfo isOpenChangeInfo={isOpenChangeInfo} setOpenChangeInfo={setOpenChangeInfo} />
            <ChangePassword isOpenChangePassword={isOpenChangePassword} setOpenChangePassword={setOpenChangePassword} />
        </>

    )
}
