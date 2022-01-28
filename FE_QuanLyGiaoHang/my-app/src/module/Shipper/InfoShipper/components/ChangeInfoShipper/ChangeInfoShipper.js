import { UploadOutlined } from '@ant-design/icons';
import { Modal, Form, Row, Col, Input, Image, Typography, Upload } from 'antd';
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actChangeInfoShipper } from '../../reducer/actions';
import styles from './ChangeInfoShipper.module.scss';
const { Text } = Typography
export default function ChangeInfoShipper({ setOpenChangeInfo, isOpenChangeInfo }) {
    const { detaiInfo } = useSelector(state => state.detailInfoShipperReducer);
    const [src, setSrc] = React.useState('/default-image.jpg');
    const formData = new FormData();
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        if (detaiInfo?.avatar === null) {
            setSrc('/default-image.jpg')
        }
        else {
            setSrc(detaiInfo?.avatar)
        }

    }, [form, detaiInfo])
    const handleChangeFile = async (event) => {
        console.log(event)
        //Lấy dữ liệu từ file từ người dùng nhập
        let file = event.fileList[0];
        let reader = new FileReader();
        // //Đọc file
        reader.readAsDataURL(file.originFileObj);
        // console.log(URL.createObjectURL(file.originFileObj))
        // //Sau khi đọc file chạy hàm onload để thay đổi hình
        reader.onload = async (e) => {
            setSrc(e.target.result);
        }
        formData.append('avatar', file.originFileObj);
    }
    const renderImage = useCallback(() => {
        return <Image id='srcImg' width={'100%'}
            height={'100%'}
            src={src}
            fallback={'/default-image.jpg'}
            onError={(e) => { e.target.onerror = null; e.target.src = "/default-image.jpg" }}
        ></Image>
    }, [src]);
    const closePopup = useCallback(() => {
        setOpenChangeInfo(false);
    }, [setOpenChangeInfo]);
    const onSubmit = (values) => {
        if (values.cmnd === detaiInfo.cmnd) {
            delete values.cmnd
        }
        for (let v in values) {
            formData.append(v, values[v]);
        }
        dispatch(actChangeInfoShipper(formData, () => setOpenChangeInfo(false),setLoading))
    }
    return (
        <Modal
            visible={isOpenChangeInfo}
            onCancel={closePopup}
            onOk={form.submit}
            title='Change Infomation'
            okButtonProps={{ loading: loading }}
        >
            <Form form={form} name='change-password' layout='horizontal'
                onFinish={onSubmit}
                initialValues={{
                    first_name: detaiInfo?.user?.first_name,
                    last_name: detaiInfo?.user?.last_name,
                    email: detaiInfo?.user?.email,
                    so_dien_thoai: detaiInfo?.user?.so_dien_thoai,
                    cmnd: detaiInfo?.cmnd
                }}
            >
                <Row style={{ marginBottom: 20 }}>
                    <Col span={24}>
                        <Text strong>Avatar</Text>
                    </Col>
                    <div className={styles.avatar}>
                        {renderImage()}
                        <Upload.Dragger
                            maxCount={1}
                            accept='image/png, image/jpg, image.jpeg,image/gif'
                            className={styles.updateAvatar}
                            onChange={handleChangeFile}
                        > <p style={{ color: 'white' }}><UploadOutlined /> Upload</p> </Upload.Dragger>
                    </div>
                </Row>
                <Row>
                    <Col style={{ marginRight: 20 }}>
                        <Form.Item label='Frist name' name='first_name' style={{ width: 400 }}>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label='Last name' name='last_name' style={{ width: 400 }}>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Form.Item style={{ width: 400 }} label='Email' name='email'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your email!',
                            },
                            {
                                type: 'email',
                                message: 'Email invalidate',
                            },
                        ]}
                    >
                        <Input></Input>
                    </Form.Item>
                </Row>
                <Row>
                    <Form.Item style={{ width: 400 }} label='Phone' name='so_dien_thoai' rules={[
                        {
                            required: true,
                            message: 'Please enter your phone number!',
                        },
                        {
                            pattern: new RegExp("(84|0[3|5|7|8|9])+([0-9]{8})\\b"),
                            message: "The phone number is not in the correct format for Vietnam's phone number",
                        },
                    ]}>
                        <Input></Input>
                    </Form.Item>
                </Row>
                <Row>
                    <Form.Item
                        name="cmnd"
                        label="Identity card"
                        style={{ width: 400 }}
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your ID car!',
                            },
                            {
                                pattern: new RegExp('[0-9]'),
                                message: 'Identity card malformed!',
                            },
                            {
                                max: 12,
                                message: 'Identity card malformed!',
                            },
                            {
                                min: 9,
                                message: 'Identity card malformed!',
                            },
                        ]}
                    >
                        <Input></Input>
                    </Form.Item>
                </Row>
            </Form>
        </Modal>
    )
}
