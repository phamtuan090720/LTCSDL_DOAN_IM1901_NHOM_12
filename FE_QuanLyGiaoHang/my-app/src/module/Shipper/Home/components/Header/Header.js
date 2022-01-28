import { Col, PageHeader, Row, Select, Typography } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import Paper from '../../../../../components/Paper/Paper';
import style from './Header.module.scss';
const { Option } = Select;
const { Text } = Typography;
export default function Header() {
    const { categorys } = useSelector(state => state.listPostReducer)
    const renderListCate = () => {
        if (categorys) {
            return categorys.map((item, index) => {
                return <Option value={item.id} key={index}>
                    {item.subject}
                </Option>
            });
        }
    }
    const handleChange = (value) => {
        console.log(value)
    }
    return (
        <Paper className={style.wrap}>
            <PageHeader
                title="Posts"
                extra={[
                    <Row justify='center' align='middle' key='1'>
                        <Col>
                            <Text strong style={{ marginRight: 10 }}>Filter by Category : </Text>
                        </Col>
                        <Col>
                            <Select defaultValue="" style={{ width: 120 }} onChange={handleChange}>
                                <Option value="">All</Option>
                                {renderListCate()}
                            </Select>
                        </Col>

                    </Row>
                    ,
                ]}
            >

            </PageHeader>
        </Paper>
    )
}
