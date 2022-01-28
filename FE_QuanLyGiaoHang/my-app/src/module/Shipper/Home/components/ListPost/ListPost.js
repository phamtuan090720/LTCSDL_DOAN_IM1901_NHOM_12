import React from 'react'
import Post from './Post/Post';
import style from './ListPost.module.scss';
import Paper from '../../../../../components/Paper/Paper';
import { Empty, Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../../../components/Loading/Loading';
import { getListPost } from '../../reducer/actions';
export default function ListPost() {
    const { loading, pagination, listPost } = useSelector(state => state.listPostReducer);
    const dispatch = useDispatch()
    const renderListPost = () => {
        if (listPost && listPost.length > 0) {
            return listPost.map((item, index) => {
                return <div key={index}>
                    <Post item={item} />
                </div>
            })
        }
        else {
            return <Empty />
        }
    }
    if (loading) return <Loading />
    const onChange = (pageNumber) => {
        dispatch(getListPost(pageNumber));
    }
    return (
        <div className={style.wrap}>
            {renderListPost()}
            <Paper className={style.pagination}>
                <Pagination onChange={onChange} current={pagination?.current} pageSize={pagination.pageSize} total={pagination?.total} />
            </Paper>
        </div>
    )
}
