import { createOperation } from "../../shared/utils/utils";
import {
  addProduct,
  deleteProduct,
  getProductList,
} from "../../shared/api/diary";

export const getProductListRequest = createOperation(
  "diary/getProductList",
  getProductList
);
export const deleteProductRequest = createOperation(
  "diary/deleteProduct",
  deleteProduct
);
export const addProductRequest = createOperation(
  "diary/addProduct",
  addProduct
);
