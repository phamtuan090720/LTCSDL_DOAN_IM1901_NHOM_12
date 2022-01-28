import { Button, Card, Col, Divider, Modal, Row, Tag, Typography } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Paper from '../../../../../../components/Paper/Paper';
import { actDeletePost } from '../../../reducer/actions';
// import style from './Post.module.scss';
const { Text, Paragraph } = Typography
export default function Post({ category, phone, email, to, from, created_date, km, description, id }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const renderDate = (date) => {
        let dateFm = new Date(date);
        return `${dateFm.getDate()}/${dateFm.getMonth() + 1}/${dateFm.getFullYear()}`
    }
    const deletePost = () => {
        return Modal.confirm({
            title: 'This is a notification message',
            content: `Do you Want to delete these Post?`,
            width: 450,
            okText: "confirm",
            onCancel() {
                console.log('Cancel');
            },
            onOk() {
                dispatch(actDeletePost(id))
            }

        });
    }
    return (
        <Paper>
            <Card bordered>
                <Row>
                    <Col style={{ marginRight: 10 }}><Text strong>Type:</Text></Col>
                    <Col><Tag color='#f50'>#{category}</Tag></Col>
                </Row>
                <Divider orientation="left" ><Text type='secondary'>Description</Text> </Divider>
                <Paragraph>
                    {description}
                </Paragraph>
                <Divider orientation="left" ><Text type='secondary'>Info Customer</Text> </Divider>

                <Row>
                    <Col style={{ marginRight: 10 }} span={5}><Text strong>Phone number:</Text></Col>
                    <Col><Text>{phone}</Text></Col>
                </Row>
                <Row>
                    <Col style={{ marginRight: 10 }} span={5}><Text strong>email:</Text></Col>
                    <Col><Text>{email}</Text></Col>
                </Row>
                <Divider orientation="left" ><Text type='secondary'>Info Order</Text> </Divider>
                <Row>
                    <Col style={{ marginRight: 10 }} span={5}><Text strong>Created date:</Text></Col>
                    <Col><Text>{renderDate(created_date)}</Text></Col>
                </Row>
                <Row>
                    <Col style={{ marginRight: 10 }} span={5}><Text strong>Kilometer:</Text></Col>
                    <Col><Text>{parseFloat(km).toFixed(1)}</Text></Col>
                </Row>
                <Row>
                    <Col style={{ marginRight: 10 }} span={5}><Text strong>To:</Text></Col>
                    <Col><Text>{to}</Text></Col>
                </Row>
                <Row>
                    <Col style={{ marginRight: 10 }} span={5}><Text strong>From:</Text></Col>
                    <Col><Text>{from}</Text></Col>
                </Row>
                <Divider orientation="left" ><Text type='secondary'>Action</Text> </Divider>
                <Row>
                    <Button shape='round' type='primary' onClick={() => history.push(`/auction-shipper/${id}`)} style={{ marginRight: 10 }}>View Shipper Auctions</Button>
                    <Button shape='round' type='primary' danger onClick={deletePost}>Delete Post</Button>
                </Row>
            </Card>
        </Paper>
    )
}
