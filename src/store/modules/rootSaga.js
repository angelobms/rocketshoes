import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rooSaga() {
  return yield all([cart]);
}
