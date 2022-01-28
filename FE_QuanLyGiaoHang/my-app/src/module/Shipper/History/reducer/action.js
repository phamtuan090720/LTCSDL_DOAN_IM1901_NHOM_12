import * as Type from './type.js';
import { http_auth } from '../../../../api/http_auth';

export const getListReceipt = (page = 1) => {
    return (dispatch) => {
        dispatch(getListReceiptRequset());
        setTimeout(() => {
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
        }, 800);

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
