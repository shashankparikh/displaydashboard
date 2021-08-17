import { createAction } from 'redux-actions';

import {GET_CATEGORY_LIST,GET_CATEGORY_LIST_SUCCESS,GET_CATEGORY_LIST_FAIL,
    // UPDATE_USER_INPUT
} from './constant';
// export const getCategoryList = (params) => {
//     return { type: GET_CATEGORY_LIST, params }
// }

// export const getCategoryListSuccess = (response) => {
//     return { type: GET_CATEGORY_LIST_SUCCESS, response }
// }

// export const getCategoryListFail = (response) => {
//     return { type: GET_CATEGORY_LIST_FAIL, response }
// }

export const getCategoryList = createAction(GET_CATEGORY_LIST);
export const getCategoryListSuccess = createAction(GET_CATEGORY_LIST_SUCCESS);
export const getCategoryListFail = createAction(GET_CATEGORY_LIST_FAIL);
// export const updateUserInput = createAction(UPDATE_USER_INPUT);

