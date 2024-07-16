import { Action, AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit';
import andressReducer from './slices/andress';
import productReducer from './slices/product';

export const store = configureStore({
  reducer: {
    andressStore: andressReducer,
    productStore: productReducer
  },
 });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppThunk<S = any, E = any, A extends Action = AnyAction> = ThunkAction<S, S, E, A>;