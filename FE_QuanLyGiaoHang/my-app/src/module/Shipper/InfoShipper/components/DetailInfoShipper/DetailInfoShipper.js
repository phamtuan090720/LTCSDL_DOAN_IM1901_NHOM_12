import { Image } from "antd";
import React from "react";
import "./DetailInfoShipper.scss";
import { Typography } from "antd";
import Paper from "../../../../../components/Paper/Paper"; 
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

export default function DetailInfoShipper() {
  const { detaiInfo } = useSelector(state => state.detailInfoShipperReducer)
  return (
    <Paper className='wrap'>
      <Title level={4} style={{ textAlign: 'start' }}>Detail Info Shipper</Title>
      <div className="detail-info-shipper">
        <div className="avatar-shipper">
          <Image src={detaiInfo?.avatar} width={"100%"} height={"100%"} />
        </div>
        <div className="info-shipper">
        <div className="info-shipper-items">
            <Title level={5}>Username: </Title>
            <Text className="">{detaiInfo?.user.username}</Text>
          </div>
          <div className="info-shipper-items">
            <Title level={5}>First Name: </Title>
            <Text className="">{detaiInfo?.user.first_name}</Text>
          </div>
          <div className="info-shipper-items">
            <Title level={5}>Last Name: </Title>
            <Text>{detaiInfo?.user.last_name} </Text>
          </div>
          <div className="info-shipper-items">
            <Title level={5}>Phone Number: </Title>
            <Text>{detaiInfo?.user.so_dien_thoai}</Text>
          </div>
          <div className="info-shipper-items">
            <Title level={5}>Email: </Title>
            <Text>{detaiInfo?.user.email}</Text>
          </div>
          <div className="info-shipper-items">
            <Title level={5}>Identity card: </Title>
            <Text>{detaiInfo?.cmnd}</Text>
          </div>

        </div>
      </div>
    </Paper>

  );
}
