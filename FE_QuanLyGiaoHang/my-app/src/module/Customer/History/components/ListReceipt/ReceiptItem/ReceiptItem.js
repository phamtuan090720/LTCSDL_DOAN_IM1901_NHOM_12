import { Card, Descriptions, Comment, Tooltip, Typography, Rate, Button, Empty, Form, Modal, Input } from 'antd'
import React, { useCallback, useState } from 'react'
import moment from 'moment';
import { addReview } from '../../../reducer/action';
import { useDispatch, useSelector } from 'react-redux';
const { Text } = Typography;
export default function ReceiptItem({ item }) {
    const { created_date, danh_gia_shipper, tong_gia, don_hang, id } = item;
    const { pagination } = useSelector(state => state.listReceiptReducer);
    const { loading } = useSelector(state => state.addReviewReducer);
    const [form] = Form.useForm();
    const [isOpen, setIsOpen] = useState(false);
    console.log(item)
    const dispatch = useDispatch();
    const renderDate = (date) => {
        let dateFm = new Date(date);
        return `${dateFm.getDate()}/${dateFm.getMonth() + 1}/${dateFm.getFullYear()}`
    }
    const onSubmit = useCallback((values) => {
        console.log(values)
        dispatch(addReview(id, values, pagination.current));
        setIsOpen(false);
    }, [dispatch, id, pagination]);
    const closePopup = useCallback(() => {
        form.resetFields();
        setIsOpen(false);
    }, [form]);
    const renderDanhGia = () => {
        if (danh_gia_shipper) {
            return <Descriptions.Item>
                <Comment
                    author={<Text strong>{don_hang.bai_dang.tac_gia.username}</Text>}
                    content={
                        <>
                            <Rate value={danh_gia_shipper.diem_danh_gia} disabled />
                            <p>
                                {danh_gia_shipper.binh_luan}
                            </p>
                        </>

                    }
                    datetime={
                        <Tooltip title={moment(danh_gia_shipper.created_date).format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment(danh_gia_shipper.created_date).fromNow()}</span>
                        </Tooltip>
                    }
                />
            </Descriptions.Item>
        }
        else {
            return <Descriptions.Item> <Empty /></Descriptions.Item>
        }
    }
    return (
        <>
            <Card hoverable style={{ marginTop: 10, marginBottom: 10 }}>
                <Descriptions column={2} title='Receipt Info'>

                    <Descriptions.Item label="To">{don_hang.bai_dang?.dia_chi_giao}</Descriptions.Item>
                    <Descriptions.Item label="From">{don_hang.bai_dang?.dia_chi_nhan}</Descriptions.Item>
                    <Descriptions.Item label="Kilometer">{don_hang.bai_dang.so_km}</Descriptions.Item>
                    <Descriptions.Item label="Total">{parseFloat(tong_gia).toFixed(1)}VNĐ</Descriptions.Item>
                    <Descriptions.Item label="Create Date">{renderDate(created_date)}</Descriptions.Item>

                </Descriptions>
                <Descriptions title='Your Reviews'>
                    {
                        renderDanhGia()
                    }
                </Descriptions>
                <div>
                    <Button onClick={() => setIsOpen(true)}>Add Review</Button>
                </div>
            </Card>
            <Modal visible={isOpen}
                onCancel={closePopup}
                onOk={form.submit}
                title='Confirm Infomation'
                okButtonProps={{ loading: loading }}
            >
                <Form form={form} onFinish={onSubmit}
                    initialValues={
                        {
                            diem_danh_gia: danh_gia_shipper?.diem_danh_gia,
                            binh_luan: danh_gia_shipper?.binh_luan
                        }

                    }
                >
                    <Form.Item label="Rate" name='diem_danh_gia' rules={[{ required: true, message: "Rate is not Null" }]}>
                        <Rate />
                    </Form.Item>
                    <Form.Item label="Comment" name='binh_luan' rules={[{ required: true, message: "Comment is not Null" }]}>
                        <Input.TextArea></Input.TextArea>
                    </Form.Item>
                </Form>
            </Modal>
        </>

    )
}
