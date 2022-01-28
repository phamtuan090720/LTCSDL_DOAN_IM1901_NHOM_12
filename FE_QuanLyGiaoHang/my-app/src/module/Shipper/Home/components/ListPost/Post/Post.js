import { Card, Descriptions, Input, InputNumber, Modal } from 'antd'
import React, { useCallback, useState } from 'react'
import { Comment, Typography, Form } from 'antd';
import { addAuction } from '../../../reducer/actions';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
const { Text } = Typography;
export default function Post({ item }) {
    const [form] = Form.useForm();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const { tac_gia, dia_chi_giao, dia_chi_nhan, so_km, mo_ta, created_date, id } = item;
    const renderDate = (date) => {
        let dateFm = new Date(date);
        return `${dateFm.getDate()}/${dateFm.getMonth() + 1}/${dateFm.getFullYear()}`
    }
    const actions = [
        <span key="comment-basic-reply-to" onClick={() => setIsOpen(true)}>Add Your Auction</span>,
    ];
    const onSubmit = useCallback((values) => {
        console.log(values)
        dispatch(addAuction(id,values, setLoading,()=> setIsOpen(false)));
    }, [dispatch, id]);
    const closePopup = useCallback(() => {
        form.resetFields();
        setIsOpen(false);
    }, [form]);
    return (
        <>
            <Card hoverable style={{marginTop:10}}>
                <Comment
                    actions={actions}
                    author={<Text strong>{tac_gia.username}</Text>}
                    content={
                        <div>
                            <Descriptions column={2} style={{ marginTop: 20 }}>
                                <Descriptions.Item label="Email">{tac_gia.email}</Descriptions.Item>
                                <Descriptions.Item label="Phone">{tac_gia.so_dien_thoai}</Descriptions.Item>
                                <Descriptions.Item label="To">{dia_chi_giao}</Descriptions.Item>
                                <Descriptions.Item label="From">{dia_chi_nhan}</Descriptions.Item>
                                <Descriptions.Item label="Km">{so_km}</Descriptions.Item>
                                <Descriptions.Item label="Create Date">{renderDate(created_date)}</Descriptions.Item>
                            </Descriptions>
                            <Descriptions column={1}>
                                <Descriptions.Item label="Description">{mo_ta}</Descriptions.Item>
                            </Descriptions>
                        </div>

                    }
                />
            </Card>
            <Modal title="Add Your Auction " visible={isOpen} onOk={form.submit} onCancel={closePopup} okButtonProps={{ loading: loading }}>
                <Form form={form} onFinish={onSubmit} layout='vertical'>
                    <Form.Item hasFeedback label="Price per 1km" name='gia_giao_hang_km' rules={[
                        { required: true, message: "Please Input Price" }
                    ]}>
                        <InputNumber min={0} max={999999} />
                    </Form.Item>
                    <Form.Item label="Comment" name='binh_luan' rules={[{ required: true, message: "Comment is not Null" }]}>
                        <Input.TextArea></Input.TextArea>
                    </Form.Item>
                </Form>
            </Modal>
        </>

    )
}
