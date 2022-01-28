import * as Type from './type';
const initialState = {
    listPost: null,
    loading: false,
    err: null,
    categorys: null,
    pagination: {
        current: 1,
        pageSize: 10,
    }
}
const listPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_CATEGORY_REQUEST: {
            state.categorys = null;
            return { ...state }
        }
        case Type.GET_CATEGORY_SUCCESS:
            state.categorys = action.data
            return { ...state }
        case Type.GET_POSTS_REQUEST:
            state.loading = true;
            state.listPost = null;
            state.err = null;
            state.pagination = {
                current: 1,
                pageSize: 10,
            }
            return { ...state };
        case Type.GET_POSTS_SUCCESS:
            state.listPost = action.data;
            state.loading = false;
            return { ...state };
        case Type.GET_POSTS_FAILED:
            state.err = action.err;
            state.loading = false;
            return { ...state };
        case Type.SET_PAGINATION: {
            state.pagination = { ...state.pagination, current: action.data.current, total: action.data.total }
            return { ...state };
        }
        default:
            return { ...state }
    }
}
export default listPostReducer;