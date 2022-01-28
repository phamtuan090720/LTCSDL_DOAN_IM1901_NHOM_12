import { Modal, Typography } from "antd";
import { http } from "../../../../api/http";
import { http_auth } from "../../../../api/http_auth";
import { LOGIN_SUCCESS } from '../../../Login/reducer/type.js'
import cookies from 'react-cookies';
const { Text } = Typography;
const notification = (mess) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "confirm",
        onOk() {

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
export const actChangeInfo = (user, setLoading, colseFrom) => {
    return async (dispatch) => {
        setLoading(true)
        await http_auth.patch(`user/${user.id}/`, user).then((rs) => {
            setLoading(false)
            notification('Change info success')
            dispatch(updateInfoUser(rs.data))
            colseFrom()

        }).catch((err) => {
            setLoading(false)
            notificationErr('Change info Failed')
            console.log(err)
        })
    }
}
const updateInfoUser = (data) => {
    return {
        type: LOGIN_SUCCESS,
        data: data
    }
}
const notificationChangePasswrod = (mess) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "confirm",
        onOk() {
        }
    });
}
const notificationErrChangePasswrod = (mess) => {
    const renderMessPassword = () => {
        if (mess.password) {
            return mess.password.map((item, index) => {
                return <div key={index}>
                    <Text type='danger'>{item}</Text>
                </div>
            })
        }
    }
    const renderMessUsername = () => {
        if (mess.username) {
            return mess.username.map((item, index) => {
                return <div key={index}>
                    <Text type='danger'>{item}</Text>
                </div>
            })
        }
    }
    return Modal.error({
        title: 'This is a notification message',
        content: (
            <div>
                <div >
                    {mess.username ? <Text strong type='danger'>*Username error :</Text> : ''}

                </div>
                {renderMessUsername()}
                <div>
                    {mess.password ? <Text strong type='danger'>*Password error :</Text> : ''}

                </div>
                {renderMessPassword()}
            </div>
        ),
        width: 600,
        okText: "confirm",
    });
}
export const actChangePassword = (user, setLoading, closePopup) => {
    return async (dispatch) => {
        setLoading(true)
        let data = {
            username: user.username,
            password: user.oldPassword,
            grant_type: 'password'
        }
        await http.get('oauth2-info/').then((rs) => {
            data = {
                ...data,
                client_id: rs.data.client_id,
                client_secret: rs.data.client_serect
            }
        }).catch((err) => {
            setLoading(false)
            notificationErr('Change Password failed')
            console.log(err)
        })
        await http_auth.post('o/token/', data).then((rs) => {
            let d = new Date();
            // do hàm này nó trả về mili giây lên phải đổi ra giây để tính toán
            d.setTime(d.getTime() + (rs.data.expires_in * 1000))
            cookies.save('access_token', rs.data.access_token, { path: '/', expires: d });
            // cookies.save('access_token', rs.data.access_token, { path: '/' });
            console.log("Login success")
            console.log(rs.data)
            let data = {
                password: user.password
            }
            let id = user.id
            console.log('password', data)
            http_auth.patch(`user/${id}/`, data).then((rs) => {
                setLoading(false)
                notificationChangePasswrod('Change password success')
                console.log(rs)
                closePopup();
            }).catch((err) => {
                setLoading(false)
                if (err.response.data) {
                    notificationErrChangePasswrod(err.response.data);
                }
                else {
                    notificationErr('Change Password failed')
                    console.log(err)
                }
            })
        }).catch((err) => {
            setLoading(false)
            if (err.response.data) {
                console.log(err.response.data)
                notificationErr(err.response.data.error_description);
            }
            else {
                notificationErr('Change Password failed')
                console.log(err)
            }
        })
        console.log(data)
    }
}