import React from 'react'
import { Descriptions, Typography } from 'antd';
import Paper from '../../../../../components/Paper/Paper';
import styles from './DeatilInfo.module.scss';
import { useSelector } from 'react-redux';
const { Title } = Typography;
export default function DetailInfo() {
    const { userLogin } = useSelector(state => state.LoginReducer)
    return (
        <Paper className={styles.wrap}>
            <Title level={4} style={{ textAlign: 'start' }}>Detail Info User</Title>
            <Descriptions column={1}>
                <Descriptions.Item labelStyle={{ fontWeight: "bold" }} label='Username'>{userLogin?.username}</Descriptions.Item>
                <Descriptions.Item labelStyle={{ fontWeight: "bold" }} label='First Name'>{userLogin?.first_name}</Descriptions.Item>
                <Descriptions.Item labelStyle={{ fontWeight: "bold" }} label='Last Name'>{userLogin?.last_name}</Descriptions.Item>
                <Descriptions.Item labelStyle={{ fontWeight: "bold" }} label='Phone Number'>{userLogin?.so_dien_thoai}</Descriptions.Item>
                <Descriptions.Item labelStyle={{ fontWeight: "bold" }} label='Email'>{userLogin?.email}</Descriptions.Item>
            </Descriptions>
        </Paper>
    )
}
