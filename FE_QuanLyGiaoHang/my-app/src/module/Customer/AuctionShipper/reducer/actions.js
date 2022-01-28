import * as Type from './type.js';
import { http_auth } from '../../../../api/http_auth.js';
import { Modal } from 'antd';
import { http } from '../../../../api/http.js';

export const getDetailPost = (id, page = 1) => {
    return (dispatch) => {
        dispatch(getDetailPostRequest())
        setTimeout(() => {
            http_auth.get(`posts/${id}/`).then((rs) => {
                console.log(rs.data.results)
                let pagination = {
                    current: parseInt(page),
                    total: rs.data.count
                }
                dispatch(setPagination(pagination))
                dispatch(getDetailPostSuccess(rs.data.results))
                console.log(pagination)
            }).catch((err) => {
                console.log(err)
                if (err?.response) {
                    dispatch(getDetailPostFailed(err?.response))
                }
                else {
                    dispatch(getDetailPostFailed(err))
                }

            })
        }, 1000);
    }
}
const getDetailPostRequest = () => {
    return {
        type: Type.GET_DETAIL_POST_REQUEST
    }
}
const getDetailPostSuccess = (data) => {
    return {
        type: Type.GET_DETAIL_POST_SUCCESS,
        data: data
    }
}
const getDetailPostFailed = (err) => {
    return {
        type: Type.GET_DETAIL_POST_FAILED,
        err: err
    }
}
const setPagination = (pagination) => {
    return {
        type: Type.SET_PAGINATION,
        data: pagination
    }
}
const notification = (mess, goBack) => {
    return Modal.success({
        title: 'This is a notification message',
        content: <>
            {mess}
        </>,
        width: 500,
        okText: "Confirm",
        onOk() {
            return goBack();
        }
    })
}
const notificationErr = (mess) => {
    return Modal.error({
        title: 'This is a notification message',
        content: <>
            {mess}
        </>,
        width: 500,
        okText: "Confirm",
        onOk() {

        }
    })
}
export const createOrder = (id, data, history) => {
    return (dispatch) => {
        dispatch(createOrderRequest())
        http_auth.post(`posts/${id}/add_order/`, data).then((rs) => {
            console.log(rs)
            notification(rs.data, () => history.goBack())
            dispatch(createOrderSuccess())
        }).catch((err) => {
            console.log(err)
            if (err?.response?.detail) {
                notificationErr(err.response.detail)
                return createOrderFailed(err.response.detail)
            }
            else {
                return createOrderFailed(err)
            }


        })
    }
}
const createOrderRequest = () => {
    return {
        type: Type.CREATE_ORDER_REQUEST
    }
}
const createOrderSuccess = () => {
    return {
        type: Type.CREATE_ORDER_SUCCESS
    }
}
const createOrderFailed = (err) => {
    return {
        type: Type.CREATE_ORDER_FAILED,
        err: err
    }
}

export const getDiscount = () => {
    return (dispatch) => {
        http.get(`discount/`).then((rs) => {
            console.log(rs.data)
            dispatch({
                type: Type.GET_DISCOUNT,
                data: rs.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}