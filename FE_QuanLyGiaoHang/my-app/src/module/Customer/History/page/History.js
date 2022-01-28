import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getListReceipt } from '../reducer/action';
import Header from '../components/Header/Header';
import ListReceipt from '../components/ListReceipt/ListReceipt';
export default function History() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListReceipt());
    }, [dispatch]);
    return (
        <div>
            <Header />
            <ListReceipt/>
        </div>
    )
}
