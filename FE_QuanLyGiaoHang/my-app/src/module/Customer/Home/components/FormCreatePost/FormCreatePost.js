import { Button, Drawer, Form, Input, InputNumber, Row, Select } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost, getCategory } from '../../reducer/actions';
// const { Text } = Typography
export default function FormCreatePost({ onClose, visible }) {
    const dispatch = useDispatch();

    const { category } = useSelector(state => state.listPotsReducer);
    const [form] = Form.useForm()
    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])
    const renderCategory = () => {
        if (category) {
            return category.map((item, index) => {
                return <Select.Option key={index} value={item.id}>{item.subject}</Select.Option>
            })
        }
    }
    const onFinish = (value) => {
        console.log(value)
        dispatch(addPost(value, () => {
            form.resetFields();
            onClose();
        }))
    }
    return (
        <Drawer
            title="Add Post"
            width={720}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
        >
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onFinish={onFinish}
                form={form}

            >
                <Form.Item hasFeedback label="Category" name='category' rules={[{ required: true, message: "Please Select Category" }]}>
                    <Select>
                        {renderCategory()}
                    </Select>
                </Form.Item>
                <Form.Item hasFeedback label="Description" name='mo_ta' rules={[{ required: true, message: "Please Input Address" }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item hasFeedback label="To" name='dia_chi_giao' rules={[{ required: true, message: "Please Input Address" }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item hasFeedback label="From" name='dia_chi_nhan' rules={[{ required: true, message: "Please Input Address" }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item hasFeedback label="Km" name='so_km' rules={[
                    { required: true, message: "Please Input Kilometer" }
                ]}>
                    <InputNumber min={0} />
                </Form.Item>

                <Row justify='end'>
                    <Button type='primary' htmlType='submit'>Add Posts</Button>
                </Row>

            </Form>
        </Drawer>
    )
}
