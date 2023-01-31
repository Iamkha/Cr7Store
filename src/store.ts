import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import cartSlide from './feature/cartSlide';
import ReviewSlide from './feature/reviewSlide';
import userSlice from './feature/userSlide';

export const store = configureStore({
  reducer: {
    cart: cartSlide,
    user: userSlice,
    review: ReviewSlide,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch =
  useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
