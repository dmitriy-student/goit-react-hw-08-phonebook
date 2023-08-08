import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ContactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import authSlice from './auth/authSlice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import persistReducer from 'redux-persist/es/persistReducer';

// // const persistConfig = {
// //   key: 'contacts',
// //   storage,
// // };

// const reducer = combineReducers({
//   contacts: contactsReducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

const reducer = combineReducers({
  auth: authSlice,
  contacts: ContactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer,
});
