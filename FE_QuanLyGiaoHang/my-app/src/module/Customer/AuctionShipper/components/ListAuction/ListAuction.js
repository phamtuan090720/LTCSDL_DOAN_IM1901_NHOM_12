import { Empty, Pagination, Typography } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { getDetailPost } from '../../reducer/actions';
import Auction from '../Auction/Auction'
import style from './ListAuction.module.scss';
const { Title } = Typography
export default function ListAuction() {
    const { detailPost, pagination } = useSelector(state => state.detailPostReducer)
    const router = useParams();
    const dispatch = useDispatch()
    const renderList = () => {
        if (detailPost?.dau_gia && detailPost?.dau_gia.length > 0) {
            return detailPost?.dau_gia.map((item, index) => {
                return <div className={style.auctionItem} key={index}>
                    <Auction item={item} />
                </div>
            })
        }
        else {
            return <Empty />
        }
    }
    const onChange = (pageNumber) => {
        console.log(pageNumber)
        dispatch(getDetailPost(router.id, pageNumber))
    }
    return (
        <div className={style.wrap}>
            <Title level={4}>List Auction</Title>
            <div className={style.containerList}>
                {renderList()}
            </div>
            <Pagination onChange={onChange} current={pagination?.current} pageSize={pagination.pageSize} total={pagination?.total} />
        </div>
    )
}
