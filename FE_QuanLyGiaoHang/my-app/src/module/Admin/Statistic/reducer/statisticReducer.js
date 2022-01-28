import * as Type from './type.js';
let inintialState = {
    data: null,
    loading: false,
    err: null
}
const statisticReducer = (state = inintialState, action) => {
    switch (action.type) {
        case Type.GET_STATISTIC_REQUEST:
            state.data = null;
            state.err = null;
            state.loading = true;
            return { ...state };
        case Type.GET_STATISTIC_SUCCESS:
            state.data = action.data;
            state.err = null;
            state.loading = false;
            return { ...state };
        case Type.GET_STATISTIC_FALIED:
            state.data = null;
            state.err = action.err;
            state.loading = false;
            return { ...state };
        default:
            return { ...state };
    }
}
export default statisticReducer;