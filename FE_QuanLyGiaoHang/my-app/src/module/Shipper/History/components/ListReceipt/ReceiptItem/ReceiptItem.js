import { Card, Descriptions, Comment, Tooltip, Typography, Rate,Empty } from 'antd'
import React from 'react'
import moment from 'moment';
const { Text } = Typography;
export default function ReceiptItem({ item }) {
    const { created_date, danh_gia_shipper, tong_gia, don_hang } = item;
    const renderDate = (date) => {
        let dateFm = new Date(date);
        return `${dateFm.getDate()}/${dateFm.getMonth() + 1}/${dateFm.getFullYear()}`
    }
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
                <Descriptions title='Customer ratings'>
                    {
                        renderDanhGia()
                    }
                </Descriptions>
            </Card>

        </>

    )
}
