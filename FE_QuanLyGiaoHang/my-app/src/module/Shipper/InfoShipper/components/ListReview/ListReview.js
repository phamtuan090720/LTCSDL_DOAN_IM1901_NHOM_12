import React from 'react'
import { Typography, List, Rate, Comment, Tooltip, Card } from 'antd'
import moment from 'moment';
const { Title, Text } = Typography;
export default function ListReview({list_danh_gia}) {
    return (
        <div>
            <Title level={5}>Reviews</Title>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={list_danh_gia}
                renderItem={item => (
                    <List.Item
                        key={item.id}
                    >
                        <Card hoverable>
                            <Comment
                                author={<Text strong>{item.tac_gia.username}</Text>}
                                content={
                                    <>
                                        <Rate value={item.diem_danh_gia} disabled />
                                        <p>
                                            {item.binh_luan}
                                        </p>
                                    </>

                                }
                                datetime={
                                    <Tooltip title={moment(item.created_date).format('YYYY-MM-DD HH:mm:ss')}>
                                        <span>{moment(item.created_date).fromNow()}</span>
                                    </Tooltip>
                                }
                            />
                        </Card>
                    </List.Item>
                )}
            />
        </div >
    )
}
