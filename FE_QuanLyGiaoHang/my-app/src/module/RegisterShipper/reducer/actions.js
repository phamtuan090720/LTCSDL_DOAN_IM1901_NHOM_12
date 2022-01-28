import { Modal, Typography } from "antd"
import { http } from "../../../api/http"
const { Text } = Typography
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
    const render = (title, mess) => {
        return <>
            <div >
                <Text strong type='danger'>{title}</Text>
                {
                    mess.map((item, index) => {
                        return <div key={index}>
                            <Text type='danger'>{item}</Text>
                        </div>
                    })
                }
            </div>

        </>

    }
    const renderMess = () => {
        let content = [];
        if (mess) {
            for (let i in mess) {
                content.push(render(i, mess[i]))
            }
        }
        return content
    }
    return Modal.error({
        title: 'This is a notification message',
        content: (
            <>
                {
                    renderMess().map((item) => {
                        return item
                    })
                }
            </>
        ),
        width: 600,
        okText: "confirm",
    });
}
export const registerShipper = (data, history) => {
    return async (dispatch) => {
        console.log(data)
        http.post('user/register-shipper/', data).then((rs) => {
            console.log(rs.data)
            notification(rs.data.mess, () => {
                history.push('/login')
            })
        }).catch((err) => {
            console.log(err)
            if (err.response.data) {
                notificationErr(err.response.data)
            }
        })
    }
}