import { Col, Empty, Pagination, Row } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../../../components/Loading/Loading';
import Paper from '../../../../../components/Paper/Paper';
import { getListPost } from '../../reducer/actions';
import style from './ListPost.module.scss';
import Post from './Post/Post';
export default function ListPost() {
    const { listPost, loading, pagination } = useSelector(state => state.listPotsReducer)
    const dispatch = useDispatch()
    if (loading) return <Loading />
    const renderListPost = () => {
        if (listPost && listPost.length > 0) {
            return listPost.map((item, index) => {
                return <Col span={12} style={{ marginTop: 20 }} key={index}>
                    <Post category={item.category.subject} email={item.tac_gia.email} phone={item.tac_gia.so_dien_thoai} km={item.so_km}
                        to={item.dia_chi_giao}
                        from={item.dia_chi_nhan}
                        created_date={item.created_date}
                        description={item.mo_ta}
                        id={item.id}
                    />
                </Col>
            })
        }
    }
    const onChange = (pageNumber) => {
        console.log(pageNumber)
        dispatch(getListPost(pageNumber))
    }
    if (listPost?.length === 0) return <div style={{ marginTop: 20 }}><Empty /></div>
    return (
        <div className={style.wrap}>
            <Row gutter={20}>
                {renderListPost()}
                <Paper className={style.pagination}>
                    <Pagination onChange={onChange} current={pagination?.current} pageSize={pagination.pageSize} total={pagination?.total} />
                </Paper>
            </Row>
        </div>
    )
}
