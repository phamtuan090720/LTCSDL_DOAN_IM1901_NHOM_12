import * as Type from './type.js';
import { http } from '../../../api/http';
import { http_auth } from '../../../api/http_auth.js';
import cookies from 'react-cookies';
import axios from "axios";
import { notification } from 'antd';
const openNotification = (type, mess) => {
    return notification[type]({
        message: `Thông Báo Đăng Nhập`,
        description: `${mess}`,
        placement: 'topLeft'
    })
}
export const getInfoUser = () => {
    return async (dispatch) => {
        dispatch(loginRequest())
        await http_auth.get('user/current-user/').then((rs) => {
            console.log(rs.data)
            dispatch(loginSuccess(rs.data))
        }).catch((err) => {
            if (err?.response?.data) {
                dispatch(loginFailed(err.response.data))
            }
            else {
                openNotification('error', 'Đã hết phiên đăng nhập')
            }

        })
    }
}
export const actLoginGG = (accessToken) => {
    return async (dispatch) => {
        dispatch(loginRequest())
        let data = {
            token: accessToken,
            backend: 'google-oauth2',
            grant_type: 'convert_token',
        }
        await http.get('oauth2-info/').then((rs) => {
            data = {
                ...data,
                client_id: rs.data.client_id,
                client_secret: rs.data.client_serect
            }
        }).catch((err) => {
            dispatch(loginFailed(err.response.data));
        })
        await axios.post('http://127.0.0.1:8000/auth/convert-token/', data).then((rs) => {
            let d = new Date();
            // do hàm này nó trả về mili giây lên phải đổi ra giây để tính toán
            d.setTime(d.getTime() + (rs.data.expires_in * 1000))
            // set thời gian hết hạn của token và xóa token trong cookie
            cookies.save('access_token', rs.data.access_token, { path: '/', expires: d });
        }).catch((err) => {
            dispatch(loginFailed(err.response.data))
            openNotification('error', 'Login Failed')
        })
        await http_auth.get('user/current-user/').then((rs) => {
            dispatch(loginSuccess(rs.data))
            openNotification('success', 'Đăng nhập thành công')
        }).catch((err) => {
            if (err?.response?.data) {
                dispatch(loginFailed(err.response.data))
            }
            else {
                openNotification('error', 'Đã hết phiên đăng nhập')
            }

        })
    }
}
export const login = (user, history) => {
    return async (dispatch) => {
        dispatch(loginRequest())
        let data = {
            ...user,
            grant_type: 'password'
        }
        await http.get('oauth2-info/').then((rs) => {
            data = {
                ...data,
                client_id: rs.data.client_id,
                client_secret: rs.data.client_serect
            }
        }).catch((err) => {
            dispatch(loginFailed(err.response.data));
            openNotification('error', 'Đăng Nhập Thất Bại')
        })
        await http.post('o/token/', data).then((rs) => {
            let d = new Date();
            // do hàm này nó trả về mili giây lên phải đổi ra giây để tính toán
            d.setTime(d.getTime() + (rs.data.expires_in * 1000))
            cookies.save('access_token', rs.data.access_token, { path: '/', expires: d });
        }).catch((err) => {
            dispatch(loginFailed(err.response.data))
            openNotification('error', 'Tài Khoản hoặc mật khẩu không đúng')
        })
        await http_auth.get('user/current-user/').then((rs) => {
            dispatch(loginSuccess(rs.data))
            if (history) {
                switch (rs.data.user_role) {
                    case "KhachHang":
                        return history.push('/user/home')
                    case "Shipper":
                        return history.push('/shipper/home')
                    default:
                        break;
                }
            }
        }).catch((err) => {
            if (err?.response?.data) {
                dispatch(loginFailed(err.response.data))
            }
            else {
                openNotification('error', 'Đã hết phiên đăng nhập')
            }

        })
    }
}
const loginRequest = () => {
    return {
        type: Type.LOGIN_REQUEST
    }
}
const loginSuccess = (data) => {
    return {
        type: Type.LOGIN_SUCCESS,
        data: data
    }
}
const loginFailed = (err) => {
    return {
        type: Type.LOGIN_FAILED,
        err: err
    }
}
export const actLogout = () => {
    let d = new Date();
    d.setTime(d.getTime() - (2000))
    cookies.save('access_token', "", { path: '/', expires: d });
    return {
        type: Type.LOGOUT,
    }
}