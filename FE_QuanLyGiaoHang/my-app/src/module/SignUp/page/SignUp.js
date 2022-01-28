import { Col, Layout, Row, Form, Input, Button, Typography } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Paper from '../../../components/Paper/Paper';
import { actionRegister } from '../reducer/actions';
import Style from './SignUp.module.scss';
const { Title } = Typography;
export default function SignUp() {
    const history = useHistory();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(actionRegister(values, history))
    };
    // let regex = new RegExp("(84|0[3|5|7|8|9])+([0-9]{8})\\b");
    // console.log(regex)

    // console.log(regex.test('0388888888'))
    // console.log(new RegExp('(84|0[3|5|7|8|9])+([0-9]{8})'))
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

                        >
                            <Title level={4} style={{ textAlign: 'center' }}>Sign Up</Title>
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
                                <Input placeholder="Nhập số điện thoại của bạn" />
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
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password! ',
                                    },
                                    {
                                        min: 6, message: 'Password must be longer than 6 characters'
                                    }
                                ]}
                            >
                                <Input.Password placeholder="enter your password" />
                            </Form.Item>
                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please , Confirm password!',
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
                                <Input.Password placeholder="Confirm password" />
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