export const fechtReducer = ({ START, SUCCESS, ERROR }) => ({
  [START]: (state) => ({ ...state, fetching: true }),
  [SUCCESS]: (state, { payload }) => ({
    ...state,
    data: payload.data,
    fetching: false,
    fetched: true,
  }),
  [ERROR]: (state, { error }) => ({ ...state, error, fetching: false }),
});

export const addReducer = ({ START, SUCCESS, ERROR }) => ({
  [START]: (state) => ({ ...state, creating: true }),
  [SUCCESS]: (state, { payload }) => {
    return {
      ...state,
      data: [ ...state.data, {...payload.data} ],
      creating: false,
    }
  },
  [ERROR]: (state, { error }) => ({ ...state, error, creating: false }),
});

export const delReducer = ({ START, SUCCESS, ERROR }) => ({
  [START]: (state) => ({ ...state, deleting: true }),
  [SUCCESS]: (state, { payload }) => {
    const removeIndex = state.data.findIndex( x => x._id === payload.data._id );
    state.data.splice( removeIndex, 1 )
    return {
      ...state,
      data: [...state.data],
      deleting: false,
      error: null,
    };
  },
  [ERROR]: (state, { error }) => ({ ...state, error, deleting: false }),
});

export const selectReducer = ({ SUCCESS }) => ({
  [SUCCESS]: (state, { payload }) => ({ ...state, selected: payload})
});
