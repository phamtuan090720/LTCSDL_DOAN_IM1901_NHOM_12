import { Card, Descriptions, Tag } from 'antd'
import React from 'react'

export default function OrderItem({ item }) {
    const { bai_dang, dau_gia_duoc_chon, giam_gia } = item;
    console.log(item)
    const renderDiscout = (price, discount) => {
        let defaultPrice = parseFloat(price);
        let newPrice = defaultPrice - ((defaultPrice * parseFloat(discount / 100)))
        return parseFloat(newPrice).toFixed(1)
    }
    return (
        <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Card hoverable>
                <Descriptions title="Info Post" column={3}>
                    <Descriptions.Item label="UserName">{bai_dang.tac_gia.username}</Descriptions.Item>
                    <Descriptions.Item label="Telephone">{bai_dang.tac_gia.so_dien_thoai}</Descriptions.Item>
                    <Descriptions.Item label="Email">{bai_dang.tac_gia.email}</Descriptions.Item>
                    <Descriptions.Item label="Kilometer">{parseFloat(bai_dang.so_km).toFixed(1)}</Descriptions.Item>
                    <Descriptions.Item label="To">{bai_dang.dia_chi_giao}</Descriptions.Item>
                    <Descriptions.Item label="From">
                        {bai_dang.dia_chi_nhan}
                    </Descriptions.Item>
                    <Descriptions.Item label="Category">
                        <Tag color="#f05">#{bai_dang.category.subject}</Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label="Discount">
                        {giam_gia === null ? "No discount" : <Tag color="#22a549">{giam_gia.giam_gia}%</Tag>}
                    </Descriptions.Item>
                </Descriptions>
                <Descriptions title="Info Shipper" column={2}>
                    <Descriptions.Item label="UserName">{dau_gia_duoc_chon.shipper.user.username}</Descriptions.Item>
                    <Descriptions.Item label="Telephone">{dau_gia_duoc_chon.shipper.user.so_dien_thoai}</Descriptions.Item>
                    <Descriptions.Item label="Price Over 1km">{giam_gia === null ? `${dau_gia_duoc_chon.gia_giao_hang_km} VND`
                        : `${renderDiscout(dau_gia_duoc_chon.gia_giao_hang_km, giam_gia.giam_gia)} VND (Promotion included)`}
                    </Descriptions.Item>
                    <Descriptions.Item label="Status">On Delivery</Descriptions.Item>
                </Descriptions>
            </Card>

        </div>
    )
}
