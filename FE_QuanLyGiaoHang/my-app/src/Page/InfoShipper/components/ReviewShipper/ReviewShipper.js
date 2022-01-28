import React from "react";
import { Col, Rate, Row, Typography } from "antd";
import { Progress } from "antd";
import style from './ReviewShipper.module.scss';
import Paper from "../../../../components/Paper/Paper";
import ListReview from "../ListReview/ListReview";
import { useSelector } from "react-redux";
const { Title, Text } = Typography;
export default function ReviewShipper() {
  const { detaiInfo } = useSelector(state => state.detailInfoShipperReducer)
  const percentRate = (rate) => {
    if (detaiInfo?.list_danh_gia && detaiInfo?.list_danh_gia.length > 0) {
      let count = detaiInfo.list_danh_gia.filter((item) => item.diem_danh_gia === rate).length
      let percent = count / detaiInfo.list_danh_gia.length * 100;
      return {
        count: count,
        percent: percent
      }
    }
    return {
      count: 0,
      percent: 0
    }
  }
  return (
    <Paper className={style.wrap}>
      <Title level={4} style={{ textAlign: 'start' }}>Reviews Shipper</Title>
      <Row style={{ marginBottom: 20, marginTop: 20 }} align='middle' justify='center'>
        <Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={style.group_avg_rate}>
            <div className={style.point}>
              <Text strong style={{ color: '#b4690e' }}>{detaiInfo?.avg_rate}</Text>
            </div>
            <div className={style.total}>
              <Text strong style={{ color: '#b4690e' }}>Total : ({detaiInfo?.list_danh_gia.length})</Text>
            </div>
            <div className={style.rate}>
              <Rate disabled allowHalf value={detaiInfo?.avg_rate} />
            </div>
            <div style={{ textAlign: "center", marginTop: 10 }}>
              <Text strong style={{ color: '#b4690e', textTransform: 'uppercase' }}>Shipper Rating</Text>
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Row align='middle' gutter={20}>
            <Col span={18}>
              <Progress percent={percentRate(1).percent} strokeColor={"#fadb14"} showInfo={false} />
            </Col>
            <Col span={6}>
              <div className={style.groupStart}>
                <Rate value={1} disabled style={{ marginRight: 10 }} />
                <div><Text strong>({percentRate(1).count})</Text></div>
              </div>
            </Col>
          </Row>
          <Row align='middle' gutter={20}>
            <Col span={18}>
              <Progress percent={percentRate(1).percent} strokeColor={"#fadb14"} showInfo={false} />
            </Col>
            <Col span={6}>
              <div className={style.groupStart}>
                <Rate value={2} disabled style={{ marginRight: 10 }} />
                <div><Text strong>({percentRate(2).count})</Text></div>
              </div>
            </Col>
          </Row>
          <Row align='middle' gutter={20}>
            <Col span={18}>
              <Progress percent={percentRate(3).percent} strokeColor={"#fadb14"} showInfo={false} />
            </Col>
            <Col span={6}>
              <div className={style.groupStart}>
                <Rate value={3} disabled style={{ marginRight: 10 }} />
                <div><Text strong>({percentRate(3).count})</Text></div>
              </div>
            </Col>
          </Row>
          <Row align='middle' gutter={20}>
            <Col span={18}>
              <Progress percent={percentRate(4).percent} strokeColor={"#fadb14"} showInfo={false} />
            </Col>
            <Col span={6}>
              <div className={style.groupStart}>
                <Rate value={4} disabled style={{ marginRight: 10 }} />
                <div><Text strong>({percentRate(4).count})</Text></div>
              </div>
            </Col>
          </Row>
          <Row align='middle' gutter={20}>
            <Col span={18}>
              <Progress percent={percentRate(5).percent} strokeColor={"#fadb14"} showInfo={false} />
            </Col>
            <Col span={6}>
              <div className={style.groupStart}>
                <Rate value={5} disabled style={{ marginRight: 10 }} />
                <div><Text strong>({percentRate(5).count})</Text></div>
              </div>
            </Col>
          </Row>
        </Col>

      </Row>
      <ListReview list_danh_gia={detaiInfo?.list_danh_gia} />
    </Paper>
  );
}