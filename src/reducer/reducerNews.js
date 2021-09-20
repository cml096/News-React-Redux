import { Crud } from "./ducks/higherOrderDucks";

const { reducer, get, post, del } = Crud("news", "http://localhost:5000/news");

export default reducer;

export const getNews = get;
export const createNews = post;
export const deleteNews = del;