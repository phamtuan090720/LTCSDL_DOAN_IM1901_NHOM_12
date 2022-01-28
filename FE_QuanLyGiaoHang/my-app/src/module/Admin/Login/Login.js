import { Layout, Row, Form, Typography, Button, Input } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Paper from '../../../components/Paper/Paper';
import Style from './Login.module.scss';
import { login } from './reducer/actions';
const { Title } = Typography
export default function Login() {
    const history = useHistory();
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(login(values, history));
    }
    return (
        <Layout className={Style.wrap}>
            <Row className={Style.wrapLogin}>
                <Paper className={Style.wrapFormLogin}>
                    <Form
                        name="basic"
                        onFinish={onFinish}
                        style={{ maxWidth: 400, margin: '0 auto' }}
                        layout='vertical'

                    >
                        <Title level={4} style={{ textAlign: 'center' }}>Login Admin</Title>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Account cannot be left blank!',
                                },
                            ]}
                        >
                            <Input placeholder="Enter account" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Password cannot be left blank!',
                                },
                            ]}
                        >
                            <Input placeholder="Enter password" />
                        </Form.Item>
                        <Form.Item>
                            <Button className={Style.btnLogin} type="primary" shape='round' htmlType="submit">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Paper>
            </Row>
        </Layout >
    )
}
