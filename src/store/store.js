import { configureStore, sonfigureStore } from '@reduxjs/toolkit';
import bookmarkReduser from './reducers/bookmark';

const store = configureStore({ reducer: { bookmark: bookmarkReduser }, devTools: true });

export default store;