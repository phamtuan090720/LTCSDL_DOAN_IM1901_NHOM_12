import React from 'react';
import { Layout, Menu, } from 'antd';
import {
    AreaChartOutlined, LogoutOutlined,
    // HighlightOutlined,
    // FontSizeOutlined,
    // FileImageOutlined,
    // VideoCameraOutlined,
    // BookOutlined,
    // FilePdfOutlined,
    // DesktopOutlined,
    // KeyOutlined,
    // UsergroupAddOutlined,
    // BarChartOutlined,
} from '@ant-design/icons';
import { actLogout } from '../../module/Admin/Login/reducer/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const { Sider } = Layout;
export default function AdminMenu() {
    const [collapsed, setCollapsed] = React.useState(false);
    const dispatch = useDispatch();
    const history = useHistory()
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };
    const logOut = () => {
        history.push('/admin/login')
        dispatch(actLogout(history));
      }
    return (
        <>
            <Sider style={{ background: 'white' }} collapsed={collapsed}>
                <div style={{ height: 32, display: 'flex', alignItems: 'center', justifyContent: "center", margin: '10px 0' }} onClick={() => {
                    onCollapse(collapsed === true ? false : true);
                }}> <img src='https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg' alt="me" width="40" height="40" /></div>
                <Menu theme="light" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
                    <Menu.Item key="1" icon={<AreaChartOutlined />}>Static</Menu.Item>
                    <Menu.Item key="4" icon={<LogoutOutlined />} onClick={logOut} >
                        Logout
                    </Menu.Item>
                </Menu>

            </Sider>


        </>
    )
}
