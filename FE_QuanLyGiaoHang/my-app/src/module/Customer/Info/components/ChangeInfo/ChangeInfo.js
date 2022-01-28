import React, { useCallback, useState } from 'react'
import { Modal, Form, Row, Col, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { actChangeInfo } from '../../reducer/actions';
export default function ChangeInfo({ isOpenChangeInfo, setOpenChangeInfo }) {
    const { userLogin } = useSelector(state => state.LoginReducer)
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = useCallback((values) => {
        let data = {
            ...values,
            id: userLogin.id
        }
        console.log(data)
        dispatch(actChangeInfo(data, setLoading, () => setOpenChangeInfo(false)))
    }, [dispatch, userLogin, setOpenChangeInfo]);
    const closePopup = useCallback(() => {
        setOpenChangeInfo(false);
    }, [setOpenChangeInfo]);
    return (
        <Modal visible={isOpenChangeInfo}
            onCancel={closePopup}
            onOk={form.submit}
            title='Change Infomation'
            okButtonProps={{ loading: loading }}

        >
            <Form form={form} onFinish={onSubmit} layout='vertical'
                initialValues={{
                    first_name: userLogin?.first_name,
                    last_name: userLogin?.last_name,
                    email: userLogin?.email,
                    so_dien_thoai: userLogin?.so_dien_thoai,
                }}
            >
                <Row>
                    <Col style={{ marginRight: 20 }}>
                        <Form.Item label='Frist name' name='first_name'>
                            <Input></Input>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item label='Last name' name='last_name'>
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
            </Form>
        </Modal>
    )
}
