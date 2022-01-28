import { Modal, Form, Input } from 'antd';
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actChangePassword } from '../../../../Customer/Info/reducer/actions';

export default function ChangePassword({ setOpenChangePassword, isOpenChangePassword }) {
    const { userLogin } = useSelector(state => state.LoginReducer)
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const closePopup = useCallback(() => {
        form.resetFields()
        setOpenChangePassword(false);
    }, [setOpenChangePassword, form]);
    const onSubmit = useCallback((values) => {
        let data = {
            ...values,
            username: userLogin.username,
            id: userLogin.id
        }
        console.log(data)
        dispatch(actChangePassword(data, setLoading, closePopup))
    }, [userLogin, dispatch, closePopup]);

    return (
        <Modal visible={isOpenChangePassword}
            onCancel={closePopup}
            onOk={form.submit}
            title='Change Infomation'
            okButtonProps={{ loading: loading }}

        >
            <Form form={form} name='change-password' layout='horizontal' onFinish={onSubmit}>
                <Form.Item
                    name="oldPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your old password!',
                        },
                    ]}
                >
                    <Input.Password placeholder="Old Password" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: 'Please input your password!' }, {
                            min: 6, message: 'This password is too short. It must contain at least 6 characters'
                        }]}
                >
                    <Input.Password placeholder="New Password" />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your new password!',
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
                    <Input.Password placeholder="Confirm your new password" />
                </Form.Item>
            </Form>
        </Modal>
    )
}
