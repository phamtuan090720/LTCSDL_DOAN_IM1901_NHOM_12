import * as Type from './type.js';
import { http_auth } from '../../../../api/http_auth';
import { Modal } from 'antd';

export const getListOrder = (page = 1) => {
    return (disptach) => {
        disptach(getListOrderRequest())
        setTimeout(() => {
            http_auth.get(`order/?page=${page}`).then((rs) => {
                console.log(rs.data)
                let pagination = {
                    current: parseInt(page),
                    total: rs.data.count
                }
                disptach(setPagination(pagination))
                disptach(getListOrderSuccess(rs.data.results));
            }).catch((err) => {
                disptach(getListOrderFailed(err.response))
                console.log(err)
            })
        }, 800);

    }
}

const getListOrderRequest = () => {
    return {
        type: Type.GET_LIST_ORDER_REQUEST
    }
}
const getListOrderSuccess = (data) => {
    return {
        type: Type.GET_LIST_ORDER_SUCCESS,
        data: data
    }
}
const getListOrderFailed = (err) => {
    return {
        type: Type.GET_LIST_ORDER_FAILED,
        err: err
    }
}
const setPagination = (pagination) => {
    return {
        type: Type.SET_PAGINATION,
        data: pagination
    }
}
const notification = (type, mess, action) => {
    return Modal[type]({
        content: mess,
        onOk() {
            if (action) {
                return action()
            }

        }
    })
}
export const doneOrder = (id, setLoading) => {
    return disptach => {
        setLoading(true)
        http_auth.get(`order/${id}/done-order/`).then((rs) => {
            setLoading(false);
            return notification("success", rs.data, () => disptach(getListOrder()))
        }).catch((err) => {
            setLoading(false);
            console.log(err)
            return notification("error", "Failed")
        })
    }
}