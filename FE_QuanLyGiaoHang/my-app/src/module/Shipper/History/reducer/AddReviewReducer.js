import * as Type from './type.js';
const initialState = {
    loading: false,
    err: null,
}
const addReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_LIST_RECEIPT_REQUEST:
            state.loading = true;
            state.err = null;
            return { ...state };
        case Type.GET_LIST_RECEIPT_SUCCESS:
            state.loading = false;
            state.err = null;
            return { ...state };
        case Type.GET_LIST_RECEIPT_FAILED:
            state.loading = true;
            state.err = action.err;
            return { ...state };
        default:
            return { ...state };
    }
}
export default addReviewReducer;