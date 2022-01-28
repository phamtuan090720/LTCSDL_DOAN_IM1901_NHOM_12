import React from 'react'
import { useSelector } from 'react-redux';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Line } from 'react-chartjs-2';
import { Typography } from 'antd';
const { Title } = Typography;
export default function ThongKeDoanhThu() {
    const { data } = useSelector(state => state.statisticReducer);
    const renderTable = () => {
        let key = []
        let value = []
        if (data?.doanh_thu) {
            key = Object.keys(data?.doanh_thu);
            value = Object.values(data?.doanh_thu);
        }

        let thTable = key.map((item) => {
            return <th>{item}</th>
        });
        console.log(thTable)
        let tdTable = value.map((item) => {
            return <td>{item}</td>
        })
        return <table id="table-to-xls" className="table table-dark my-4">
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
            return Object.keys(data?.doanh_thu)
        }
        return []
    }
    const getValue = () => {
        if (data?.doanh_thu) {
            return Object.values(data?.doanh_thu)
        }
        return []
    }
    const dataConfig = {
        labels: getlabel(),
        datasets: [
            {
                label: 'Doanh Thu Từng Tháng Năm ' + new Date().getFullYear(),
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
            <Title level={3} className='text-center'>Bảng Thống Kê Số Liệu Doanh Thu Từng Tháng Năm {new Date().getFullYear()}</Title>
            <Line data={dataConfig} options={options} />
            <ReactHTMLTableToExcel
                // id="test-table-xls-button"
                className="btn btn-success my-3"
                table="table-to-xls"
                filename="thongkedoanhthu"
                sheet="thongkedoanhthu"
                buttonText="Download as XLS" />
            <Title level={3} className='text-center'>Bảng Số Liệu </Title>
            {renderTable()}
        </>

    )
}
