const getNhanVienApi = function* getNhanVienApi() {
    //const json = yield fetch('https://highlightsfootball.com/wp-json/wp/v2/posts')
    const json = yield fetch('http://vntests.com/APIReact/dsnhanvien.php')
      .then(response => response.json(), );
      return yield json;
    };

const addNhanVienApi = function* addNhanVienApi(data) {
    //console.log('dataAdd', data.item);
    const json = yield fetch('http://vntests.com/APIReact/addnhanvien.php', { method: 'POST', body: data.item })
        .then(response => response.json(), );
        return yield json;
    };

const editNhanVienApi = function* editNhanVienApi(data) {
    //console.log('dataEdit', data.item);
    const json = yield fetch('http://vntests.com/APIReact/editnhanvien.php', { method: 'POST', body: data.item })
        .then(response => response.json(), );
        return yield json;
    };
    
const delNhanVienApi = function* delNhanVienApi(data) {
    console.log('dataDel', data.item);
    const json = yield fetch('http://vntests.com/APIReact/delnhanvien.php', { method: 'POST', body: data.item })
        .then(response => response.json(), );
        return yield json;
    };
    
      
export const nhanVienApi = {
    getNhanVienApi, addNhanVienApi, editNhanVienApi, delNhanVienApi
};
            