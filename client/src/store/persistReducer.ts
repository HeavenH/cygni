import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Reducer } from 'redux'

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer({
    key: 'cygni',
    storage,
    whitelist: ['auth', 'user', 'uploads'],
    },
    reducers
  );

  return persistedReducer;
}