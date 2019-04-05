import {
    LIST_NHANVIEN_SUCCESS,
    LIST_NHANVIEN_FAIL,
    ADD_NHANVIEN_SUCCESS,
    ADD_NHANVIEN_FAIL
} from '../constants/actionType';

let initData = [];// status,

const nhanVienReducer = (data = initData, action) => {
    switch (action.type) {
        case LIST_NHANVIEN_SUCCESS:
            console.log('action', action);
            data = action.data;
          return data;
        case LIST_NHANVIEN_FAIL:
            return [];
        
        case ADD_NHANVIEN_SUCCESS:
            data = action.data;
            return data;

        case ADD_NHANVIEN_FAIL:
            return [];

        default:
          return data;
      }
}

export default nhanVienReducer;