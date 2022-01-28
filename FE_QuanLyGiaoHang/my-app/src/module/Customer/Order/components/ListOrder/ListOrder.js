import { Empty, Pagination, Typography } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../../../components/Loading/Loading'
import { getListOrder } from '../../reducer/actions';
import style from './ListOrder.module.scss';
import OrderItem from './OrderItem/OrderItem';
const { Title } = Typography;
export default function ListOrder() {
    const { loading, pagination, listOrder } = useSelector(state => state.listOrderReducerCustomer);
    const dispatch = useDispatch()
    const renderListOrder = () => {
        if (listOrder && listOrder.length > 0) {
            return listOrder.map((item, index) => {
                return <div key={index}>
                    <OrderItem item={item} />
                </div>
            })
        }
        else {
            return <Empty />
        }
    }
    if (loading) return <Loading />
    const onChange = (pageNumber) => {
        dispatch(getListOrder(pageNumber));
    }
    return (
        <div className={style.wrap}>
            <Title level={4}>List Order</Title>
            <div className={style.wrapListOrder}>
                {renderListOrder()}
            </div>
            <Pagination onChange={onChange} current={pagination?.current} pageSize={pagination.pageSize} total={pagination?.total} />
        </div>
    )
}
