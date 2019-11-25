import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess } from './actions';

// generation -> mesma coisa que async function
function* addToCart({ id }) {
  const respose = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(respose.data, respose.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
