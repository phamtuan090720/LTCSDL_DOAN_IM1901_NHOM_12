import * as Type from './type.js';
import { http_auth } from '../../../../api/http_auth';
import { Modal } from 'antd';

export const getListReceipt = (page = 1) => {
    return (dispatch) => {
        dispatch(getListReceiptRequset());
        http_auth.get(`receipt/?page=${page}`).then((rs) => {
            console.log(rs.data)
            let pagination = {
                current: parseInt(page),
                total: rs.data.count
            }
            dispatch(getListReceiptSucces(rs.data.results));
            dispatch(setPagination(pagination));
        }).catch((err) => {
            if (err.response) {
                return dispatch(getListReceiptFailed(err.response));
            }
            else {
                return dispatch(getListReceiptFailed(err));
            }

        })
    }
}
const getListReceiptRequset = () => {
    return {
        type: Type.GET_LIST_RECEIPT_REQUEST
    }
}
const getListReceiptSucces = (data) => {
    return {
        type: Type.GET_LIST_RECEIPT_SUCCESS,
        data: data
    }
}
const getListReceiptFailed = (err) => {
    return {
        type: Type.GET_LIST_RECEIPT_FAILED,
        err: err
    }
}
const setPagination = (pagination) => {
    return {
        type: Type.SET_PAGINATION,
        data: pagination
    }
}
const notification = (mess, confirm, dispatch) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "confirm",
        onOk() {
            return dispatch(confirm)
        }
    });
}
const notificationErr = (mess) => {
    return Modal.error({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "confirm",
    });
}
export const addReview = (id, data, current) => {
    return (dispatch) => {
        dispatch(addReviewRequest())
        http_auth.post(`receipt/${id}/add-review/`, data).then((rs) => {
            dispatch(addReviewSuccess())
            notification(rs.data, getListReceipt(current), dispatch);
        }).catch((err) => {
            notificationErr("Failed")
            console.log(err)
            dispatch(addReviewFailed(err.response.data))
        })
    }
}
const addReviewRequest = () => {
    return {
        type: Type.ADD_REVIEW_REQUEST
    }
}
const addReviewSuccess = () => {
    return {
        type: Type.ADD_REVIEW_SUCCESS
    }
}
const addReviewFailed = (err) => {
    return {
        type: Type.ADD_REVIEW_FAILED,
        err: err
    }
}