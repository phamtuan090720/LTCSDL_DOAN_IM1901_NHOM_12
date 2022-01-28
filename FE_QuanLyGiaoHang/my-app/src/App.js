import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routesAdmin, routesHome, routesKhachHang, routesShipper } from './routers';
import Hometemplate from './Template/Hometemplate/Hometemplate';
import PageNotFound from './Page/PageNotFound/PageNotFound';
import ShipperTemplate from './Template/ShipperTemplate/ShipperTemplate';
import CustomerTemplate from './Template/CustomerTemplate/CustomerTemplate';
import InfoShipper from './Page/InfoShipper/InfoShipper';
import AdminTemplate from './Template/AdminTemplate/AdminTemplate';
import LoginAdmin from './module/Admin/Login/Login.js';
const showLayoutHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return <Hometemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
    });
  }
}
const showLayoutKhachHang = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return <CustomerTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
    });
  }
}
const showLayoutShipper = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return <ShipperTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
    });
  }
}
const showLayoutAdmin = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
    });
  }
}
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {showLayoutHome(routesHome)}
        {showLayoutKhachHang(routesKhachHang)}
        {showLayoutShipper(routesShipper)}
        {showLayoutAdmin(routesAdmin)}
        <Route path='/info/shipper/:id' component={InfoShipper} />
        <Route path='/admin/login' component={LoginAdmin} />
        <Route path='' component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
