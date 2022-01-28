import React from 'react';
import { Layout, Menu, } from 'antd';
import {
    HighlightOutlined,
    FontSizeOutlined,
    FileImageOutlined,
    VideoCameraOutlined,
    BookOutlined,
    FilePdfOutlined,
    DesktopOutlined,
    KeyOutlined,
    UsergroupAddOutlined,
    BarChartOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
export default function MenuEditCourse() {
    const [collapsed, setCollapsed] = React.useState(false);
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };

    return (
        <>
            <Sider style={{ background: 'white' }} collapsed={collapsed}>
                <div style={{ height: 32, display: 'flex', alignItems: 'center', justifyContent: "center", margin: '10px 0' }} onClick={() => {
                    onCollapse(collapsed === true ? false : true);
                }}> <img src='https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg' alt="me" width="40" height="40" /></div>
                <Menu theme="light" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
                    <Menu.ItemGroup key="g1" title="About Course">
                        <Menu.Item key="1" icon={<HighlightOutlined />}>Course Name</Menu.Item>
                        <Menu.Item key="2" icon={<HighlightOutlined />}>Sub title </Menu.Item>
                        <Menu.Item icon={<FontSizeOutlined />} key="3">Description</Menu.Item>
                        <Menu.Item key="4" icon={<FileImageOutlined />} >Display Image</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.Divider />
                    <Menu.ItemGroup key="g2" title="Edit Content" >
                        <Menu.Item key="5" icon={<DesktopOutlined />}> Lessons</Menu.Item>
                        <Menu.Item key="6" icon={<VideoCameraOutlined />}>Videos</Menu.Item>
                        <Menu.Item key="7" icon={<BookOutlined />} >Homework</Menu.Item>
                        <Menu.Item key="8" icon={<FilePdfOutlined />}>File</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.Divider />
                    <Menu.ItemGroup key="g3" title="Manage Course">
                        <Menu.Item icon={<UsergroupAddOutlined />} key="9">Manage Participants</Menu.Item>
                        <Menu.Item icon={<KeyOutlined />}key="10">Change Public Mode</Menu.Item>
                        <Menu.Item icon={<BarChartOutlined />}key="11">Performance</Menu.Item>
                    </Menu.ItemGroup>
                </Menu>
            </Sider>


        </>
    )
}
