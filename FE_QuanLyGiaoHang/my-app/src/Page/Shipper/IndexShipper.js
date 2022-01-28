import { Button, Result } from 'antd';
import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import Home from '../../module/Shipper/Home/page/Home';
import Order from '../../module/Shipper/Order/page/Order';
import History from '../../module/Shipper/History/page/History';
import Auth from '../../Hooks/Auth/Auth_Shipper.js'
import InfoShipper from '../../module/Shipper/InfoShipper/InfoShipper';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoShipper } from '../../module/Shipper/InfoShipper/reducer/actions';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
export default function IndexShipper() {
    const { err,loading } = useSelector(state => state.detailInfoShipperReducer)
    const dispatch = useDispatch()
    const router = useParams();
    useEffect(() => {
        dispatch(getInfoShipper())
    }, [dispatch])
    const renderComponent = React.useCallback(() => {
        switch (router.page) {
            case 'home':
                return <Home />
            case 'order':
                return <Order />
            case 'history':
                return <History />
            case 'info':
                return <InfoShipper />
            default:
                return <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button shape='round' type="primary">Back Home</Button>}
                />
        }
    }, [router]);
    if(loading) return <Loading/>
    if (err) {
        return <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button shape='round' type="primary"><Link to='/login'>Login</Link></Button>}
        />
    }
    return (
        <Auth>
            <div>
                {renderComponent()}
            </div>
        </Auth>
    )
}
