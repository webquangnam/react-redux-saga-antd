import {
    LIST_NHANVIEN,
    LIST_NHANVIEN_SUCCESS,
    LIST_NHANVIEN_FAIL,
    ADD_NHANVIEN_SUCCESS,
    ADD_NHANVIEN_FAIL,
    ADD_NHANVIEN,
    EDIT_NHANVIEN_SUCCESS,
    EDIT_NHANVIEN_FAIL,
    EDIT_NHANVIEN,
    DEL_NHANVIEN_SUCCESS,
    DEL_NHANVIEN_FAIL,
    DEL_NHANVIEN

    
} from '../constants/actionType';

//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { nhanVienApi } from './nhanVienApi';

// ListNhanVien
const fetchListNhanVien = function* fetchListNhanVien() {
    try {
        const receivedData = yield nhanVienApi.getNhanVienApi();
        yield put({ type: LIST_NHANVIEN_SUCCESS, data: receivedData });
    } catch (error) {
        yield put({ type: LIST_NHANVIEN_FAIL, error });
    }
};
export const watchFetchListNhanVien = function* watchFetchListNhanVien() {
    yield takeLatest(LIST_NHANVIEN, fetchListNhanVien,);
};

// addNhanVien
const addNhanVien = function* addNhanVien(item) {
    try {
        const receivedData = yield nhanVienApi.addNhanVienApi(item);
        yield put({ type: ADD_NHANVIEN_SUCCESS, data: receivedData });
    } catch (error) {
        yield put({ type: ADD_NHANVIEN_FAIL, error });
    }
  };
export const watchAddNhanVien = function* watchAddNhanVien() {
    yield takeLatest(ADD_NHANVIEN, addNhanVien);
};

// editNhanVien
const editNhanVien = function* editNhanVien(item) {
    try {
        const receivedData = yield nhanVienApi.editNhanVienApi(item);
        yield put({ type: EDIT_NHANVIEN_SUCCESS, data: receivedData });
    } catch (error) {
        yield put({ type: EDIT_NHANVIEN_FAIL, error });
    }
  };
export const watchEditNhanVien = function* watchEditNhanVien() {
    yield takeLatest(EDIT_NHANVIEN, editNhanVien);
};

// delNhanVien
const delNhanVien = function* delNhanVien(item) {
    try {
        const receivedData = yield nhanVienApi.delNhanVienApi(item);
        yield put({ type: DEL_NHANVIEN_SUCCESS, data: receivedData });
    } catch (error) {
        yield put({ type: DEL_NHANVIEN_FAIL, error });
    }
  };
export const watchDelNhanVien = function* watchDelNhanVien() {
    yield takeLatest(DEL_NHANVIEN, delNhanVien);
};
