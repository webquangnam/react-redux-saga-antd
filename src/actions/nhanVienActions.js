import { LIST_NHANVIEN, ADD_NHANVIEN, EDIT_NHANVIEN, DEL_NHANVIEN } from "../constants/actionType";

export const listNhanViens = () => {
  return {
    type: LIST_NHANVIEN
  };
};

export const addNhanViens = (item) => {
    return {
      type: ADD_NHANVIEN,
      item
    };
};

export const editNhanViens = (item) => {
  return {
    type: EDIT_NHANVIEN,
    item
  };
};

export const delNhanViens = (item) => {
  return {
    type: DEL_NHANVIEN,
    item
  };
};