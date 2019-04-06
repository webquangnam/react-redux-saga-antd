//Saga effects
import { fork, all } from 'redux-saga/effects';
import { watchFetchListNhanVien, watchAddNhanVien, watchEditNhanVien, watchDelNhanVien } from './nhanVienSaga';

const rootSaga = function* rootSaga() {
    yield all([
        fork(watchFetchListNhanVien),
        fork(watchAddNhanVien),
        fork(watchEditNhanVien),
        fork(watchDelNhanVien)
    ]);
};

export default rootSaga;