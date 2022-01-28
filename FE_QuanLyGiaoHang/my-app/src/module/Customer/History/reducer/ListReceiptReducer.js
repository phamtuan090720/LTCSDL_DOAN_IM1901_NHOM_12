import * as Type from './type.js';
const initialState = {
    loading: false,
    listReceipt: null,
    err: null,
    pagination: {
        current: 1,
        pageSize: 10,
    }
}
const listReceiptReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_LIST_RECEIPT_REQUEST:
            state.loading = true;
            state.listReceipt = null;
            state.err = null;
            state.pagination = {
                current: 1,
                pageSize: 10,
            }
            return { ...state };
        case Type.GET_LIST_RECEIPT_SUCCESS:
            state.loading = false;
            state.listReceipt = action.data;
            state.err = null;
            return { ...state };
        case Type.GET_LIST_RECEIPT_FAILED:
            state.loading = false;
            state.listReceipt = null;
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
export default listReceiptReducer;