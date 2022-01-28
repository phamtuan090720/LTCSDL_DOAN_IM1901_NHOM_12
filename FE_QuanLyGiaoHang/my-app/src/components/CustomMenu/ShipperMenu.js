import React from 'react'
import { Layout, Menu } from 'antd';
import {
    HomeOutlined,
    LogoutOutlined,
    UserOutlined,
    // UserOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { actLogout } from '../../module/Login/reducer/actions';
// import { BiHistory } from 'react-icons/bi'
// import { MdPendingActions } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { BiHistory } from 'react-icons/bi';
import { MdPendingActions } from 'react-icons/md';
const { Sider } = Layout;
export default function ShipperMenu() {
    const [collapsed, setCollapsed] = React.useState(false);
    const dispatch = useDispatch();
    const history = useHistory()
    const router = useParams();
    const logOut = () => {
        dispatch(actLogout(history));
    }
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };
    return (

        <Sider style={{ background: 'white' }} collapsed={collapsed} width={250}>
            <div style={{ height: 32, display: 'flex', alignItems: 'center', justifyContent: "center", margin: '10px 0' }} onClick={() => {
                onCollapse(collapsed === true ? false : true);
            }}> <img src='https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg' alt="me" width="40" height="40" /></div>
            <Menu theme="light" defaultSelectedKeys={[`${router.page}`]} mode="inline">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to='/shipper/home'>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="order" icon={<MdPendingActions />}>
                    <Link to='/shipper/order'>
                        Orders
                    </Link>
                </Menu.Item>
                <Menu.Item key="history" icon={<BiHistory />}>
                    <Link to='/shipper/history'>
                        Delivery history
                    </Link>
                </Menu.Item>
                <Menu.Item key="info" icon={<UserOutlined />}>
                    <Link to='/shipper/info'>
                        General Information
                    </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<LogoutOutlined />} onClick={logOut} >
                    Logout
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
