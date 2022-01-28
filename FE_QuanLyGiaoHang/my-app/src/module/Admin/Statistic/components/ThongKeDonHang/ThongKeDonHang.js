import React from 'react'
import { useSelector } from 'react-redux';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Line } from 'react-chartjs-2';
import { Typography } from 'antd';
const { Title } = Typography;
export default function ThongKeDonHang() {
    const { data } = useSelector(state => state.statisticReducer);

    const renderTable = () => {
        let key = [];
        let value = [];
        if (data?.tong_don_hang_theo_thang) {
            key = Object.keys(data?.tong_don_hang_theo_thang);
            value = Object.values(data.tong_don_hang_theo_thang);
        }

        let thTable = key.map((item) => {
            return <th>{item}</th>
        });
        let tdTable = value.map((item) => {
            return <td>{item}</td>
        })
        return <table id="thongketongdonhang" className="table table-dark my-4">
            <tr>
                {thTable}
            </tr>
            <tbody>
                {tdTable}
            </tbody>
        </table>

    }
    const getlabel = () => {
        if (data?.doanh_thu) {
            return Object.keys(data?.tong_don_hang_theo_thang)
        }
        return []
    }
    const getValue = () => {
        if (data?.doanh_thu) {
            return Object.values(data?.tong_don_hang_theo_thang)
        }
        return []
    }
    const dataConfig = {
        labels: getlabel(),
        datasets: [
            {
                label: 'Tổng Số Đơn Hàng Từng Tháng Năm ' + new Date().getFullYear(),
                data: getValue(),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <>
            <Title level={3} className='text-center'>Bảng Thống Kê Số Liệu Đơn Hàng Từng Tháng Năm {new Date().getFullYear()}</Title>
            <Line data={dataConfig} options={options} />
            <ReactHTMLTableToExcel
                // id="test-table-xls-button"
                className="btn btn-success my-3"
                table="thongketongdonhang"
                filename="thongketongdonhang"
                sheet="thongketongdonhang"
                buttonText="Download as XLS" />
            <Title level={3} className='text-center'>Bảng Số Liệu </Title>
            {renderTable()}
        </>

    )
}
