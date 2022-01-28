import { Empty, Pagination } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../../../components/Loading/Loading';
import { getListReceipt } from '../../reducer/action';
import style from './ListReceipt.module.scss';
import ReceiptItem from './ReceiptItem/ReceiptItem';
export default function ListReceipt() {
    const { loading, pagination, listReceipt } = useSelector(state => state.listReceiptReducer);
    const dispatch = useDispatch()
    if (loading) return <Loading />
    const onChange = (pageNumber) => {
        console.log(pageNumber)
        dispatch(getListReceipt(pageNumber));
    }
    const renderList = () => {
        if (listReceipt && listReceipt.length > 0) {
            return listReceipt.map((item, index) => {
                return <div key={index}>
                    <ReceiptItem item={item} />
                </div>
            })
        }
        else {
            return <Empty />
        }
    }
    return (
        <div className={style.wrap}>
            <div className={style.wrapListReceipt}>
                {renderList()}
            </div>
            <Pagination onChange={onChange} current={pagination?.current} pageSize={pagination.pageSize} total={pagination?.total} />
        </div>
    )
}
