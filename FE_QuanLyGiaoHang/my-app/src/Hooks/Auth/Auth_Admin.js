import React from 'react'
import { Button, Result } from 'antd';
import cookies from 'react-cookies';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getInfoUser } from '../../module/Login/reducer/actions';
import { useEffect } from 'react';
export default function AuthAdmin({children}) {
    const { userLogin, loading } = useSelector(state => state.LoginReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if (cookies.load('access_token')) {
            dispatch(getInfoUser());
        }
    }, [dispatch])
    if (loading) return <></>
    if (!cookies.load('access_token')) {
        return (
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button shape='round' type="primary"><Link to='/login'>Login</Link></Button>}
            />
        )
    }
    if (userLogin)
        if (userLogin.user_role === "Admin" ) {
            return (
                <>
                    {children}
                </>

            )
        }
        else {
            return (
                <Result
                    status="403"
                    title="403"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Button shape='round' type="primary"><Link to='/login'>Login</Link></Button>}
                />
            )
        }

    else {
        return (
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button shape='round' type="primary"><Link to='/login'>Login</Link></Button>}
            />
        )

    }
}
