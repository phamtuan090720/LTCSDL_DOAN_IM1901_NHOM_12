import { Modal } from "antd";
import { http } from "../../../../api/http";
import { http_auth } from "../../../../api/http_auth"
import * as Type from './type.js';
export const getListPost = (page = 1, category = '') => {
    return (dispatch) => {
        dispatch(getListPostRequest())
        setTimeout(() => {
            http_auth.get(`posts/my-post/?page=${page}&category=${category}/`).then((rs) => {
                console.log(rs.data)
                dispatch(getListPostSuccess(rs.data.results))
                let pagination = {
                    current: parseInt(page),
                    total: rs.data.count
                }
                dispatch(setPagination(pagination))
            }).catch((err) => {
                console.log(err)
                dispatch(getListPostFailed(err))
            })
        }, 1000);
    }
}
const getListPostRequest = () => {
    return {
        type: Type.GET_POST_REQUEST
    }
}
const getListPostSuccess = (data) => {
    return {
        type: Type.GET_POST_SUCCESS,
        data: data
    }
}
const getListPostFailed = () => {
    return {
        type: Type.GET_POST_FAILED
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
export const addPost = (data, closeFrom) => {
    return (dispatch) => {
        http_auth.post(`posts/add-post/`, data).then((rs) => {
            console.log(rs.data)
            notification(rs.data.mess, getListPost(), dispatch)
            closeFrom();
        }).catch((error) => {
            if (error?.response.data?.mess) {
                return notificationErr(error?.response.data?.mess)
            }
            else if (error?.response.data?.detail && error?.response.status === 401) {
                return notificationErr(error?.response.data?.detail)
            }
            else if (error?.response.data?.detail) {
                return notificationErr(error?.response.data?.detail)
            }
            else {
                notificationErr("Failed")
                console.log(error)
            }
        })
    }
}
export const getCategory = () => {
    return (dispatch) => {
        dispatch(getCategoryRequest()); 
        http.get('category/').then((rs) => {
            console.log(rs.data)
            dispatch(getCategorySuccess(rs.data))
        }).catch((err) => {
            dispatch(getCategoryFailed(err))
        })
    }
}

const getCategoryRequest = () => {
    return {
        type: Type.GET_CATEGORY_REQUEST
    }
}
const getCategorySuccess = (data) => {
    return {
        type: Type.GET_CATEGORY_SUCCESS,
        data: data
    }
}
const getCategoryFailed = (err) => {
    return {
        type: Type.GET_CATEGORY_FAILED,
        err: err
    }
}
export const actDeletePost = (id) => {
    return (dispatch) => {
        dispatch(actDeletePostRequest())
        http_auth.get(`posts/${id}/delete_post/`).then(() => {
            dispatch(actDeletePostSuccess())
            dispatch(getListPost())
        }).catch((err) => {
            console.log(err)
            dispatch(actDeletePostFailed())
            notificationErr("Failed")
        })
    }
}
const actDeletePostRequest = () => {
    return {
        type: Type.GET_POST_REQUEST
    }
}
const actDeletePostFailed = () => {
    return {
        type: Type.GET_POST_FAILED
    }
}
const actDeletePostSuccess = () => {
    return {
        type: Type.GET_POST_SUCCESS
    }
}
