import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './slices/filterSlice';
import { totalSlice } from './slices/totalSlice';
import { qytSlice } from './slices/qytItemSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    total: totalSlice.reducer,
    qyt: qytSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
