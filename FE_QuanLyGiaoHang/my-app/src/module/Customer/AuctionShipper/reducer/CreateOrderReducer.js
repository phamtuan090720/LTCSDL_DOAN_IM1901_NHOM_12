import * as Type from './type.js';
const initialState = {
    loading: false,
    err: null
}
const createOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.CREATE_ORDER_REQUEST:
            state.loading = true;
            state.err = null;
            return { ...state }
        case Type.CREATE_ORDER_SUCCESS:
            state.loading = false;
            state.err = null;
            return { ...state }
        case Type.CREATE_ORDER_FAILED:
            state.loading = false;
            state.err = action.err;
            return { ...state }
        default:
            return { ...state }
    }
}
export default createOrderReducer;