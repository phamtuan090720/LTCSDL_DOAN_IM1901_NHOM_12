import { Col, Layout, Row, Form, Input, Button, Typography, Upload, Image } from 'antd';
import React, { useCallback } from 'react'
import Paper from '../../../components/Paper/Paper';
import Style from './RegisterShipper.module.scss';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { registerShipper } from '../reducer/actions';
import { useHistory } from 'react-router';
const { Title, Text } = Typography;
export default function RegisterShipper() {
    const formData = new FormData();
    const history = useHistory();
    const [form] = Form.useForm()
    const [src, setSrc] = React.useState('/default-image.jpg');
    const dispatch = useDispatch()
    const onFinish = (values) => {
        console.log('Success:', values);
        for (let v in values) {
            formData.append(v, values[v]);
        }
        console.log(formData.get('avatar'))
        dispatch(registerShipper(formData, history))

    };
    const renderImage = useCallback(() => {
        return <Image id='srcImg' width={'100%'}
            height={'100%'}
            src={src}
            fallback={'/default-image.jpg'}
            onError={(e) => { e.target.onerror = null; e.target.src = "/default-image.jpg" }}
        ></Image>
    }, [src]);
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
        form.setFieldsValue({
            avatar: file.originFileObj,
        });
    }
    return (
        <Layout className={Style.wrap}>
            <Row className={Style.wrapLogin} align='middle'>
                <Col span='12'><div className={Style.imgShipper}>
                    <img src='./img/deliv.png' alt='shipper' />
                </div></Col>
                <Col span='12'>
                    <Paper className={Style.wrapFormLogin}>
                        <Form
                            name="basic"
                            onFinish={onFinish}
                            style={{ maxWidth: 400, margin: '0 auto' }}
                            layout='vertical'
                            form={form}

                        >
                            <Title level={4} style={{ textAlign: 'center' }}>Register for a Shipper Account</Title>
                            <Form.Item name='avatar' rules={[{ required: true, message: "You must have an avatar to register" }]}>
                                <Row style={{ marginBottom: 20 }}>
                                    <Col span={24}>
                                        <Text strong>Avatar</Text>
                                    </Col>
                                    <div className={Style.avatar}>
                                        {renderImage()}
                                        <Upload.Dragger
                                            maxCount={1}
                                            accept='image/png, image/jpg, image.jpeg,image/gif'
                                            className={Style.updateAvatar}
                                            onChange={handleChangeFile}
                                            beforeUpload={() => false}
                                        > <p style={{ color: 'white' }}><UploadOutlined /> Upload</p> </Upload.Dragger>
                                    </div>
                                </Row>
                            </Form.Item>
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your account!',
                                    },
                                ]}
                            >

                                <Input placeholder="Enter account" />
                            </Form.Item>
                            <Form.Item
                                name="so_dien_thoai"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your phone number!',
                                    },
                                    {
                                        pattern: new RegExp("(84|0[3|5|7|8|9])+([0-9]{8})\\b"),
                                        message: "The phone number is not in the correct format for Vietnam's phone number",
                                    },
                                ]}
                            >
                                <Input placeholder="enter your phone number" />
                            </Form.Item>
                            <Form.Item
                                name="email"
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
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                            <Form.Item
                                name="cmnd"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your ID!',
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

                                <Input placeholder="enter your ID!" />
                            </Form.Item>


                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password!',
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Enter password" />
                            </Form.Item>
                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please, confirm password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="confirm password!" />
                            </Form.Item>
                            <Form.Item>
                                <Button className={Style.btnLogin} type="primary" shape='round' htmlType="submit">
                                    Sign up
                                </Button>
                            </Form.Item>
                        </Form>
                    </Paper>
                </Col>
            </Row>
        </Layout >
    )
}