import { http_auth } from '../../../../api/http_auth.js';
import * as Type from './type.js';

export const getSta = () => {
    return (dispatch) => {  
        dispatch(getStaRequest());
        setTimeout(() => {
            http_auth.get('receipt/statistic/').then((rs) => {
                dispatch(getStaSuccess(rs.data))
            }).catch((err) => {
                dispatch(getStaFalied(err))
            })
        }, (800));

    }
}
const getStaRequest = () => {
    return {
        type: Type.GET_STATISTIC_REQUEST
    }
}
const getStaSuccess = (data) => {
    return {
        type: Type.GET_STATISTIC_SUCCESS,
        data: data
    }
}
const getStaFalied = (err) => {
    return {
        type: Type.GET_STATISTIC_FALIED,
        err: err
    }
}