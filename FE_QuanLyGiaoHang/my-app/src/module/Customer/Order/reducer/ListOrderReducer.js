import * as Type from './type.js';
const initialState = {
    listOrder: null,
    loading: false,
    err: null,
    pagination: {
        current: 1,
        pageSize: 10,
    }
}
const listOrderReducerCustomer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_LIST_ORDER_REQUEST:
            state.loading = true;
            state.listOrder = null;
            state.err = null;
            state.pagination = {
                current: 1,
                pageSize: 10,
            }
            return { ...state };
        case Type.GET_LIST_ORDER_SUCCESS:
            state.loading = false;
            state.listOrder = action.data;
            state.err = null;
            return { ...state };
        case Type.GET_LIST_ORDER_FAILED:
            state.loading = false;
            state.listOrder = null;
            state.err = action.err;
            return { ...state };
        case Type.SET_PAGINATION: {
            state.pagination = { ...state.pagination, current: action.data.current, total: action.data.total }
            return { ...state };
        }
        default:
            return { ...state };

    }
}
export default listOrderReducerCustomer;