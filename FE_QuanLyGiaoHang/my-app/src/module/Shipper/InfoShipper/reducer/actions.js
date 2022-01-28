import * as Type from './type';
import { http_auth } from '../../../../api/http_auth';
import { Modal, Typography } from 'antd';
const { Text } = Typography

export const getInfoShipper = () => {
    return (dispatch) => {
        dispatch(getInfoShipperRequest())
        setTimeout(() => {
            http_auth.get(`shipper/current-user/`).then((rs) => {
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
const notification = (mess, confim) => {
    return Modal.success({
        title: 'This is a notification message',
        content: `${mess}`,
        width: 450,
        okText: "Comfim",
        onOk() {
            return confim()
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
export const actChangeInfoShipper = (data, closeFrom, setLoading) => {
    return (dispatch) => {
        setLoading(true)
        http_auth.post('user/update-shipper/', data).then((rs) => {
            notification(rs.data, () => {
                dispatch(getInfoShipper())
                closeFrom()
            })
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
            if (err.response.data) {
                notificationErr(err.response.data)
            }
            else {
                alert("failed")
            }
        })
    }
}