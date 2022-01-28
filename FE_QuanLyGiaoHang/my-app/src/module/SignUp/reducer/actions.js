import { Modal, Typography } from "antd";
import { http } from "../../../api/http";
const { Text } = Typography;
const notification = (mess, goToLogin) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "Go to Login",
        onOk() {
            return goToLogin()
        }
    });
}
const notificationErr = (mess) => {
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
export const actionRegister = (user, history) => {
    return async (dispatch) => {
        let data = {
            username: user.username,
            password: user.password,
            email: user.email,
            so_dien_thoai: user.so_dien_thoai

        }
        await http.post('user/', data).then((rs) => {
            notification('Đăng ký thành công', () => {
                history.push('/login')
            })
        }).catch((err) => {
            if (err.response.data) {
                notificationErr(err.response.data)
            }
            else {
                notificationErr("Failed");
            }
        })
    }
}