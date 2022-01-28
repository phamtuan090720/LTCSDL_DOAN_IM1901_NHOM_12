import * as Type from './type';
import { http } from '../../../../api/http';
import { http_auth } from '../../../../api/http_auth.js';
import { Modal } from 'antd';
export const getCategory = () => {
    return (dispatch) => {
        http.get(`category/`).then((rs) => {
            console.log(rs.data)
            dispatch({
                type: Type.GET_CATEGORY_SUCCESS,
                data: rs.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }

}
export const getListPost = (page = 1) => {
    return (dispatch) => {
        dispatch(getListPostRequest())
        http.get(`posts/?page=${page}`).then((rs) => {
            console.log(rs)
            let pagination = {
                current: parseInt(page),
                total: rs.data.count
            }
            dispatch(setPagination(pagination))
            dispatch(getListPostSuccess(rs.data.results));
        }).catch((err) => {
            dispatch(getListPostFailed(err.response))
            console.log(err)
        })
    }
}
const getListPostRequest = () => {
    return {
        type: Type.GET_POSTS_REQUEST
    }
}
const getListPostSuccess = (data) => {
    return {
        type: Type.GET_POSTS_SUCCESS,
        data: data
    }
}
const getListPostFailed = (err) => {
    return {
        type: Type.GET_POSTS_FAILED,
        err: err
    }
}
const setPagination = (pagination) => {
    return {
        type: Type.SET_PAGINATION,
        data: pagination
    }
}

export const addAuction = (id,data, loading,closePopup) => {
    return (dispatch) => {
        loading(true)
        http_auth.post(`posts/${id}/add_auction/`,data).then((rs) => {
            loading(false)
            return Modal.success({
                title: 'This is a notification message',
                content: <>
                    {rs.data}
                </>,
                width: 500,
                okText: "Confirm",
                onOk() {
                    closePopup()
                }
            })
            }).catch((err) => {
                loading(false)
                return Modal.error({
                    title: 'This is a notification message',
                    content: <>
                        {err.response.data}
                    </>,
                    width: 500,
                    okText: "Confirm",
                    onOk() {
                    }
                })

            })
        }
}