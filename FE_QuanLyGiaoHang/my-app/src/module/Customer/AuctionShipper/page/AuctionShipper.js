import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../../../../components/Loading/Loading';
import Header from '../components/PageHeader/Header';
import { getDetailPost } from '../reducer/actions';
import { Result, Button } from 'antd';
import style from './AuctionShipper.module.scss';
import ListAuction from '../components/ListAuction/ListAuction';
export default function AuctionShipper() {
    const { loading, err } = useSelector(state => state.detailPostReducer)
    const router = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetailPost(router.id))
    }, [dispatch, router])
    if (loading) return <Loading />
    if (err) return <Result
        status={`403`}
        title={err.statusText}
        subTitle={err.data.detail}
        extra={<Button type="primary" shape='round'>Back Home</Button>}
    />
    return (
        <div className={style.wrap}>
            <Header />
            <ListAuction/>
        </div>
    )
}
