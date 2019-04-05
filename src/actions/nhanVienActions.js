import { LIST_NHANVIEN, ADD_NHANVIEN } from "../constants/actionType";

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