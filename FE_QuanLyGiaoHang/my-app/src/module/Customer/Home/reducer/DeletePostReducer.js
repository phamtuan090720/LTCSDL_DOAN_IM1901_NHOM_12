import * as Type from './type.js';
const initialState = {
    loading: false,
    err: null,
}
const deletePostReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.DELETE_POST_REQUEST: {
            state.loading = true;
            state.err = null;
            return { ...state }
        }
        case Type.DELETE_POST_SUCCESS: {
            state.loading = false;
            return { ...state }
        }
        case Type.DELETE_POST_FAILED: {
            state.loading = false;
            return { ...state }
        }
        default:
            return { ...state }
    }
}
export default deletePostReducer;