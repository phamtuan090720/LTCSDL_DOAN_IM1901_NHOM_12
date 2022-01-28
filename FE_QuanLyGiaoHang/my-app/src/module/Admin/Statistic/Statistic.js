import React from 'react'
import { useEffect } from 'react';
import AuthAdmin from '../../../Hooks/Auth/Auth_Admin';
import { getSta } from './reducer/action';
import style from './Statistic.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/Loading/Loading';
import ThongKeDoanhThu from './components/ThongKeDoanhThu/ThongKeDoanhThu';
import ThongKeTanSuat from './components/ThongKeTanSuat/ThongKeTanSuat';
import ThongKeDonHang from './components/ThongKeDonHang/ThongKeDonHang';
export default function Statistic() {
    const { loading } = useSelector(state => state.statisticReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSta())
    }, [dispatch]);
    if (loading) return <Loading></Loading>
    return <AuthAdmin>
        <div className={style.wrap}>
            <ThongKeDoanhThu />
            <ThongKeDonHang />
            <ThongKeTanSuat />
        </div>

    </AuthAdmin>
}
