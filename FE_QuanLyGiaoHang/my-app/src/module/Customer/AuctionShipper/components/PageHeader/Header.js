import { Descriptions, PageHeader, Tag } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router'

export default function Header() {
    const { detailPost } = useSelector(state => state.detailPostReducer)
    console.log(detailPost)
    const history = useHistory();
    const renderDate = (date) => {
        let dateFm = new Date(date);
        return `${dateFm.getDate()}/${dateFm.getMonth() + 1}/${dateFm.getFullYear()}`
    }
    return (
        <PageHeader
            title="Auction Shipper"
            onBack={() => history.goBack()}
            tags={<Tag color='#f50'>#{detailPost?.info.category.subject}</Tag>}
            style={{ marginTop: 20 }}
        >
            <Descriptions size="small" column={2}>
                <Descriptions.Item label="Author" labelStyle={{ fontWeight: 'bold' }}>{detailPost?.info.tac_gia.username}</Descriptions.Item>
                <Descriptions.Item label="Email" labelStyle={{ fontWeight: 'bold' }}>
                    {detailPost?.info.tac_gia.email}
                </Descriptions.Item>
                <Descriptions.Item label="Phone Number" labelStyle={{ fontWeight: 'bold' }}>{detailPost?.info.tac_gia.so_dien_thoai}</Descriptions.Item>
                <Descriptions.Item label="Post Date" labelStyle={{ fontWeight: 'bold' }}> {renderDate(detailPost?.info.created_date)}</Descriptions.Item>
                <Descriptions.Item label="To" labelStyle={{ fontWeight: 'bold' }}>{detailPost?.info.dia_chi_giao}</Descriptions.Item>
                <Descriptions.Item label="From" labelStyle={{ fontWeight: 'bold' }}>
                    {detailPost?.info.dia_chi_nhan}
                </Descriptions.Item>
                <Descriptions.Item label="Kilometer" labelStyle={{ fontWeight: 'bold' }}>
                    {parseFloat(detailPost?.info.so_km).toFixed(1)}
                </Descriptions.Item>
            </Descriptions>
            <Descriptions size="small" column={1}>
                <Descriptions.Item label="Description" labelStyle={{ fontWeight: 'bold' }}>
                    {detailPost?.info.mo_ta}
                </Descriptions.Item>
            </Descriptions>
        </PageHeader>
    )
}
