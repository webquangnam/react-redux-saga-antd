//Saga effects
import { fork, all } from 'redux-saga/effects';
import { watchFetchListNhanVien, watchAddNhanVien } from './nhanVienSaga';

const rootSaga = function* rootSaga() {
    yield all([
        fork(watchFetchListNhanVien),
        fork(watchAddNhanVien)
    ]);
};

export default rootSaga;