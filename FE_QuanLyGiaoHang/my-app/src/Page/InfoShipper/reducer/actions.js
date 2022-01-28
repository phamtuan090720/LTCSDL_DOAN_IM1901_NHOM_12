import * as Type from './type';
import { http } from '../../../api/http.js';

export const getInfoShipper = (id) => {
    return (dispatch) => {
        dispatch(getInfoShipperRequest())
        setTimeout(() => {
            http.get(`shipper/${id}/`).then((rs) => {
                console.log(rs.data)
                dispatch(getInfoShipperSuccess(rs.data))
            }).catch((err) => {
                dispatch(getInfoShipperFailed(err.response))
                console.log(err)
            })
        }, 800);    
    }
}
const getInfoShipperRequest = () => {
    return {
        type: Type.GET_DETAIL_INFO_REQUEST
    }
}
const getInfoShipperSuccess = (data) => {
    return {
        type: Type.GET_DETAIL_INFO_SUCCESS,
        data: data
    }
}
const getInfoShipperFailed = (err) => {
    return {
        type: Type.GET_DETAIL_INFO_FAILED,
        err: err
    }
}