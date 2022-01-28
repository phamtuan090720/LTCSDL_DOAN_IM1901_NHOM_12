import { Col, Layout, Row, Form, Input, Button, Typography, Divider } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Paper from '../../../components/Paper/Paper';
import { actLoginGG, getInfoUser, login } from '../reducer/actions';
import Style from './Login.module.scss';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import cookies from 'react-cookies';
import { useHistory } from 'react-router';
const { Title } = Typography;
export default function Login() {
    const { userLogin } = useSelector(state => state.LoginReducer)
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        if (cookies.load('access_token')) {
            dispatch(getInfoUser())
        }
    }, [dispatch]);
    useEffect(() => {
        if (userLogin) {
            switch (userLogin.user_role) {
                case "KhachHang":
                    return history.push('/user/home')
                case "Shipper":
                    return history.push('/shipper/home')
                default:
                    return history.push('/user/home')
            }
        }
    }, [userLogin, history]);
    const responseGoogle = (response) => {
        console.log(response)
        dispatch(actLoginGG(response.accessToken))
    }
    const onFinish = (values) => {
        console.log('Success:', values);
        dispatch(login(values, history));
    };
    return (
        <Layout className={Style.wrap}>
            <Row className={Style.wrapLogin}>
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
                            <Title level={4} style={{ textAlign: 'center' }}>Log in</Title>
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Account cannot be empty!',
                                    },
                                ]}
                            >
                                <Input placeholder="Enter Account" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'password cannot be empty!',
                                    },
                                ]}
                            >
                                <Input placeholder="Enter password" />
                            </Form.Item>
                            {/* <Form.Item >
                                <Button type="link" style={{ padding: 0 }}>Quên mật khẩu?</Button>
                            </Form.Item> */}

                            <Form.Item>
                                <Button className={Style.btnLogin} type="primary" shape='round' htmlType="submit">
                                    Login
                                </Button>
                            </Form.Item>
                            <Divider>or</Divider>
                            <Form.Item>
                                <GoogleLogin
                                    clientId="640428241498-1procc6n3hou95ump9iifp1tboq3uqvt.apps.googleusercontent.com"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    render={renderProps => (
                                        <Button onClick={renderProps.onClick} disabled={renderProps.disabled} shape="round" className={Style.googleBtn} >
                                            <FcGoogle className={Style.icon} /> Continue with Google
                                        </Button>
                                    )}
                                />
                            </Form.Item>
                            <Form.Item style={{ marginBottom: `10px` }}>
                                <div style={{ textAlign: 'center' }}>
                                    Do not have an account ?
                                    <Link to="/sign-up" className='ml-2'>Sign up</Link>
                                </div>
                            </Form.Item>
                        </Form>
                    </Paper>
                </Col>
            </Row>
        </Layout >
    )
}
