import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LoginReducer from "../module/Login/reducer/LoginReducer";
import listPotsReducer from "../module/Customer/Home/reducer/ListPotsReducer";
import deletePostReducer from "../module/Customer/Home/reducer/DeletePostReducer";
import detailPostReducer from "../module/Customer/AuctionShipper/reducer/DetailPostReducer";
import listOrderReducerCustomer from "../module/Customer/Order/reducer/ListOrderReducer";
import createOrderReducer from "../module/Customer/AuctionShipper/reducer/CreateOrderReducer";
import listReceiptReducer from "../module/Customer/History/reducer/ListReceiptReducer";
import addReviewReducer from "../module/Customer/History/reducer/AddReviewReducer";
import listPostReducer from "../module/Shipper/Home/reducer/ListPostReducer";
import listOrderShipperReducer from "../module/Shipper/Order/reducer/ListOrderShipperReducer";
import detailInfoShipperReducer from "../Page/InfoShipper/reducer/DetailInfoShipperReducer";
import statisticReducer from "../module/Admin/Statistic/reducer/statisticReducer";
const rootReducer = combineReducers({
    LoginReducer,
    listPotsReducer,
    deletePostReducer,
    detailPostReducer,
    listOrderReducerCustomer,
    createOrderReducer,
    listReceiptReducer,
    addReviewReducer,
    listPostReducer,
    listOrderShipperReducer,
    detailInfoShipperReducer,
    statisticReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;