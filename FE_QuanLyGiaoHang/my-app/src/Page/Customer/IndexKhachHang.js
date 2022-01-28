import { Button, Result } from 'antd';
import React from 'react'
import { useParams } from 'react-router';
import Auth from '../../Hooks/Auth/Auth_Customer'
import History from '../../module/Customer/History/page/History';
import Home from '../../module/Customer/Home/page/Home';
import GeneralInformation from '../../module/Customer/Info/page/GeneralInformation';
import Order from '../../module/Customer/Order/page/Order';

export default function IndexKhachHang() {
    const router = useParams();
    const renderComponent = React.useCallback(() => {
        switch (router.page) {
            case 'home':
                return <Home />
            case 'order':
                return <Order />
            case 'history':
                return <History />
            case 'info':
                return <GeneralInformation />
            default:
                return <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button shape='round' type="primary">Back Home</Button>}
                />
        }
    }, [router]);
    return (
        <Auth>
            <div>
                {renderComponent()}
            </div>
        </Auth>
    )
}
