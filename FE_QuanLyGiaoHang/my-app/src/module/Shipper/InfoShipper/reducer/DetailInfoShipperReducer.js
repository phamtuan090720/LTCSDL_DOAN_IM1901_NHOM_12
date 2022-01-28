import * as Type from './type';
const initialState = {
    loading: false,
    err: null,
    detaiInfo: null
}
const detailInfoShipperReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_DETAIL_INFO_REQUEST:
            state.loading = true;
            state.err = null;
            state.detaiInfo = null;
            return { ...state }
        case Type.GET_DETAIL_INFO_SUCCESS:
            state.loading = false;
            state.err = null;
            state.detaiInfo = action.data;
            return { ...state }
        case Type.GET_DETAIL_INFO_FAILED:
            state.loading = false;
            state.err = action.err;
            state.detaiInfo = null;
            return { ...state }
        default:
            return { ...state }
    }
}
export default detailInfoShipperReducer;