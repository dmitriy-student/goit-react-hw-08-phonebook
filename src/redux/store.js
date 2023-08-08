import { configureStore } from '@reduxjs/toolkit';
import { ContactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filterSlice';
import authSlice from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    contacts: ContactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const reducer = combineReducers({
//   auth: authSlice,
//   contacts: ContactsReducer,
//   filter: filterReducer,
// });

// export const store = configureStore({
//   reducer,
// });
