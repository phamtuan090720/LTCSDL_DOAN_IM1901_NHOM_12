import React from 'react'
import { useSelector } from 'react-redux';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Line } from 'react-chartjs-2';
import { Typography } from 'antd';
const { Title } = Typography;
export default function ThongKeTanSuat() {
    const { data } = useSelector(state => state.statisticReducer);
    console.log(data)
    const renderTable = () => {
        let key = []
        let value_hoanThanh = []
        let value_chuaHoanThanh = []
        if (data?.don_hang_hoang_thanh) {
            key = Object.keys(data?.don_hang_hoang_thanh);
            value_hoanThanh = Object.values(data.don_hang_hoang_thanh);
            value_chuaHoanThanh = Object.values(data.don_hang_chua_hoan_thanh);
        }

        let thTable = key.map((item) => {
            return <th>{item}</th>
        });
        let tdTableHoanThanh = value_hoanThanh.map((item) => {
            return <td>{item}</td>
        })
        let tdTableChuaHoanThanh = value_chuaHoanThanh.map((item) => {
            return <td>{item}</td>
        })
        return <table id='thong-ke-tan-suat' className="table table-dark my-4">
            <tr>
                <th>#</th>
                {thTable}
            </tr>
            <tbody>
                <tr>
                    <td>Hoàn Thành</td>
                    {tdTableHoanThanh}
                </tr>
                <tr>
                    <td>Chưa Hoàn Thành</td>
                    {tdTableChuaHoanThanh}
                </tr>
            </tbody>
        </table>
    }
    const getlabel = () => {
        if (data?.don_hang_hoang_thanh) {
            return Object.keys(data?.don_hang_hoang_thanh)
        }
        return []
    }
    const getValue = (arr) => {
        if (arr) {
            return Object.values(arr)
        }
        return []
    }
    const dataConfig = {
        labels: getlabel(),
        datasets: [
            {
                label: 'Đơn Hàng Hoàn Thành Từng Tháng Năm ' + new Date().getFullYear(),
                data: getValue(data?.don_hang_hoang_thanh),
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: 'Đơn Hàng Chưa Hoàn Thành Từng Tháng Năm ' + new Date().getFullYear(),
                data: getValue(data?.don_hang_chua_hoan_thanh),
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
            <Title level={3} className='text-center'>Bảng Thống Kê Tần Suất Đơn Hàng Từng Tháng Năm {new Date().getFullYear()}</Title>
            <Line data={dataConfig} options={options} />
            <ReactHTMLTableToExcel
                // id="test-table-xls-button"
                className="btn btn-success my-3"
                table="thong-ke-tan-suat"
                filename="thongketansuat"
                sheet="thongketansuat"
                buttonText="Download as XLS" />
            <Title level={3} className='text-center'>Bảng Số Liệu</Title>
            {renderTable()}
        </>
    )
}
