import { Crud } from "./ducks/higherOrderDucks";

// const { API_URL_CATEGORY } = process.env;
const { reducer , get, post, del, select } = Crud("category", "http://localhost:5000/category");

export default reducer;

export const getCategories =  get;
export const createCategory = post;
export const deleteCategory = del;
export const selectedCategory = select;