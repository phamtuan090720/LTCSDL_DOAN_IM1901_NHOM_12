import * as Type from './type.js';
const initalState = {
    loading: false,
    listPost: null,
    category: null,
    category_err: null,
    category_loading: false,
    err: null,
    pagination: {
        current: 1,
        pageSize: 10,
    }
}

const listPotsReducer = (state = initalState, action) => {
    switch (action.type) {
        case Type.GET_CATEGORY_REQUEST: {
            state.category_err = null;
            state.category_loading = true;
            state.category = null;
            return { ...state }
        }
        case Type.GET_CATEGORY_SUCCESS: {
            state.category_err = null;
            state.category_loading = false;
            state.category = action.data;
            return { ...state }
        }
        case Type.GET_CATEGORY_FAILED: {
            state.category_err = action.err;
            state.category_loading = false;
            state.category = null;
            return { ...state }
        }
        case Type.GET_POST_REQUEST: {
            state.err = null;
            state.loading = true;
            state.listPost = null;
            state.pagination = {
                current: 1,
                pageSize: 10,
            };
            return { ...state }
        }
        case Type.GET_POST_SUCCESS: {
            state.loading = false;
            state.listPost = action.data;
            return { ...state }
        }
        case Type.GET_POST_FAILED: {
            state.err = action.err;
            state.loading = false;
            return { ...state }
        }
        case Type.SET_PAGINATION: {
            state.pagination = { ...state.pagination, current: action.data.current, total: action.data.total }
            return { ...state };
        }
        default:
            return { ...state }
    }
}
export default listPotsReducer;