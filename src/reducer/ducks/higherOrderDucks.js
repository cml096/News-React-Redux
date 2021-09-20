import { makeType, asyncMac, createReducer, reduceReducers } from "./duckHelper";
import {
  fechtReducer,
  addReducer,
  delReducer,
  selectReducer,
} from "../thunks/higherOrderReducer";

export const Crud = (mod, url) => {
  // Actions Type
  const t = makeType(mod);
  const FETCH = t("fetch", true);
  const ADD = t("add", true);
  const DEL = t("del", true);
  const SELECT = t("select", false);
  
  const initialState = {
    data: [],
    fetching: false,
    fetched: false,
    creating: false,
    deleting: false,
    error: null,
    selected: null,
  };

  // Create Reducers
  const r1 = createReducer(initialState, fechtReducer(FETCH));
  const r2 = createReducer(initialState, addReducer(ADD));
  const r3 = createReducer(initialState, delReducer(DEL));
  const r4 = createReducer(initialState, selectReducer(SELECT));

  // Action Creator
  const fetchAc = asyncMac(FETCH);
  const addAc = asyncMac(ADD);
  const delAc = asyncMac(DEL);
  const sel = asyncMac(SELECT);


  const get = (payload) => ({
    actions: fetchAc,
    request: async () => {
      const result = await fetch(url);
      return await result.json();
    },
  });

  const post = (payload) => ({
    actions: addAc,
    request: async () => {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      return await result.json();
    },
  });

  const del = (payload) => ({
    actions: delAc,
    request: async () => {
      const result = await fetch(url + '/' + payload, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await result.json();
    },
  });

  const select = (payload) => ({
    actions: sel,
    request: () => payload,
  });

  return {
    reducer: reduceReducers(r1, r2, r3, r4),
    get,
    post,
    del,
    select,
  };
};
