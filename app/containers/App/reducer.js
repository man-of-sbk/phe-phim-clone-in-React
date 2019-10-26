/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { accessToken } from 'services/constants';
import * as actionTypes from './constants';

export const initialState = {
  isFetchingMovies: false,
  hotMovies: undefined,
  latestMovies: undefined,

  user: undefined,
  isAuthorizingUser: false,
  AuthorizeUserSuccess: false,
};

const saveToken = token => {
  localStorage.setItem(accessToken, token);
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.FETCH_MOVIES_ACTION:
        draft.isFetchingMovies = true;
        break;

      case actionTypes.FETCH_HOT_MOVIES_SUCCESS_ACTION:
        draft.hotMovies = action.payloads;
        draft.isFetchingMovies = false;
        break;

      case actionTypes.FETCH_HOT_MOVIES_FAILED_ACTION:
        draft.isFetchingMovies = false;
        break;

      case actionTypes.FETCH_LATEST_MOVIES_SUCCESS_ACTION:
        draft.latestMovies = action.payloads;
        draft.isFetchingMovies = false;
        break;

      case actionTypes.FETCH_LATEST_MOVIES_FAILED_ACTION:
        draft.isFetchingMovies = false;
        break;

      case actionTypes.AUTHORIZE_USER_ACTION:
        draft.isAuthorizingUser = true;
        break;

      case actionTypes.AUTHORIZE_USER_SUCCESS_ACTION:
        saveToken(action.payloads);

        draft.user = action.payloads;
        draft.AuthorizeUserSuccess = true;
        draft.isAuthorizingUser = false;
        break;

      case actionTypes.AUTHORIZE_USER_FAILED_ACTION:
        draft.user = undefined;
        draft.AuthorizeUserSuccess = false;
        draft.isAuthorizingUser = false;
        break;
    }
  });

export default appReducer;
