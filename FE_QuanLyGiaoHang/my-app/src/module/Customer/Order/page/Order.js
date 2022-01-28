import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '../components/Header/Header';
import ListOrder from '../components/ListOrder/ListOrder';
import { getListOrder } from '../reducer/actions'

export default function Order() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListOrder())
    }, [dispatch]);
    return (
        <div>
            <Header />
            <ListOrder />
        </div>
    )
}
