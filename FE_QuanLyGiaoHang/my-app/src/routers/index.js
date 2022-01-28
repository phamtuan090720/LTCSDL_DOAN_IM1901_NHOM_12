import Login from "../module/Login/page/Login";
import RegisterShipper from "../module/RegisterShipper/page/RegisterShipper";
import SignUp from "../module/SignUp/page/SignUp";
import HomePage from "../Page/HomePage";
import IndexKhachHang from "../Page/Customer/IndexKhachHang";
import IndexShipper from "../Page/Shipper/IndexShipper";
import AuctionShipper from "../module/Customer/AuctionShipper/page/AuctionShipper";
import LoginAdmin from "../module/Admin/Login/Login";
import Statistic from "../module/Admin/Statistic/Statistic";

const routesHome = [{
    exact: true,
    path: "/",
    component: HomePage,
},
{
    exact: false,
    path: "/home",
    component: HomePage,
},
{
    exact: false,
    path: "/sign-up",
    component: SignUp,
},
{
    exact: false,
    path: "/login",
    component: Login,
},
{
    exact: false,
    path: "/sign-up-shipper",
    component: RegisterShipper,
},
];
const routesKhachHang = [
    {
        exact: false,
        path: "/user/:page",
        component: IndexKhachHang,
    },
    {
        exact: false,
        path: "/auction-shipper/:id",
        component: AuctionShipper,
    }
];
const routesShipper = [
    {
        exact: false,
        path: "/shipper/:page",
        component: IndexShipper,
    }
];
const routesAdmin = [
    {
        exact: true,
        path: "/admin",
        component: LoginAdmin,
    },
    {
        exact: false,
        path: "/admin/statistic",
        component: Statistic,
    }
]
export { routesHome, routesKhachHang, routesShipper, routesAdmin };