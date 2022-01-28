import * as Type from './type.js';
const initialState = {
    detailPost: null,
    loading: false,
    err: null,
    lisDiscount: null,
    pagination: {
        current: 1,
        pageSize: 10,
    }
}
const detailPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_DETAIL_POST_REQUEST:
            state.loading = true;
            state.detailPost = null;
            state.err = null;
            state.lisDiscount = null;
            state.pagination = {
                current: 1,
                pageSize: 10,
            };
            return { ...state }
        case Type.GET_DETAIL_POST_SUCCESS:
            state.loading = false;
            state.detailPost = action.data;
            state.err = null;
            return { ...state }
        case Type.GET_DETAIL_POST_FAILED:
            state.loading = false;
            state.detailPost = null;
            state.err = action.err;
            return { ...state }
        case Type.SET_PAGINATION: {
            state.pagination = { ...state.pagination, current: action.data.current, total: action.data.total }
            return { ...state };
        }
        case Type.GET_DISCOUNT:
            state.lisDiscount = action.data;
            return { ...state }
        default:
            return { ...state }
    }

}
export default detailPostReducer;