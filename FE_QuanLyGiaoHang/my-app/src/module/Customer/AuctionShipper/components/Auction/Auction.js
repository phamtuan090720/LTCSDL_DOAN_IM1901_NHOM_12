import React, { useCallback, useEffect, useState } from 'react'
import { Comment, Tooltip, Avatar, Typography, Descriptions, Card, Modal, Select, Form } from 'antd';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { createOrder, getDiscount } from '../../reducer/actions';
const { Text } = Typography;

export default function Auction({ item }) {
    const { binh_luan, created_date, shipper, gia_giao_hang_km, id } = item;
    const { loading } = useSelector(state => state.createOrderReducer);
    const { lisDiscount } = useSelector(state => state.detailPostReducer);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [isOpen, setIsOpen] = useState(false);
    const param = useParams();
    const history = useHistory();
    useEffect(() => {
        dispatch(getDiscount())
    }, [dispatch]);
    const onSubmit = useCallback((values) => {
        let data;
        if (values.ma_giam_gia) {
            data = {
                id_dau_gia: id,
                ma_giam_gia: values.ma_giam_gia
            }
        }
        else {
            data = {
                id_dau_gia: id,
            }
        }
        console.log(data)
        dispatch(createOrder(param.id, data, history))
    }, [dispatch, param, history, id]);
    const closePopup = useCallback(() => {
        form.resetFields();
        setIsOpen(false);
    }, [form]);
    const renderDiscout = () => {
        if (lisDiscount) {
            return lisDiscount.map((item) => {
                return <Select.Option key={item.id} value={item.id}>
                    {
                        item.noi_dung
                    }
                    - {
                        item.giam_gia
                    }
                </Select.Option>
            })
        }
    }
    const actions = [
        <span onClick={() => setIsOpen(true)} key="comment-basic-reply-to">Choose Shipper</span>,
    ];
    return (
        <>
            <Card
                hoverable
            >
                <Comment
                    actions={actions}
                    author={<Link to={`/info/shipper/${shipper.user.id}`}><Text strong>{shipper.user.username}</Text></Link>}
                    avatar={<Avatar src={shipper.avatar} alt="Han Solo" >{shipper.user.username}</Avatar>}
                    content={
                        <Descriptions
                            column={1}
                            labelStyle={{ fontWeight: 'bold' }}
                            style={{ marginTop: 10 }}
                        >
                            <Descriptions.Item label="Price per 1km">{parseFloat(gia_giao_hang_km).toFixed(0)} VND</Descriptions.Item>
                            <Descriptions.Item >
                                {binh_luan}
                            </Descriptions.Item>
                        </Descriptions>
                    }
                    datetime={
                        <Tooltip title={moment(created_date).format('YYYY-MM-DD HH:mm:ss')}>
                            <Text>{moment(created_date).fromNow()}</Text>
                        </Tooltip>
                    }
                />
            </Card>
            <Modal visible={isOpen}
                onCancel={closePopup}
                onOk={form.submit}
                title='Confirm Infomation'
                okButtonProps={{ loading: loading }}
            >
                <Descriptions
                    column={1}
                    labelStyle={{ fontWeight: 'bold' }}
                >
                    <Descriptions.Item label="Shipper">{ }</Descriptions.Item>
                    <Descriptions.Item label="Price per 1km">{parseFloat(gia_giao_hang_km).toFixed(0)} VND</Descriptions.Item>

                </Descriptions>
                <Form form={form} onFinish={onSubmit}>
                    <Text strong>
                        Choise Discount :
                    </Text>
                    <Form.Item name='ma_giam_gia'>
                        <Select style={{ width: '100%' }}>
                            {renderDiscout()}
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>


    )
}
