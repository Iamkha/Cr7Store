import { RootState } from '@/store';
import {
  createSlice,
  PayloadAction,
  createSelector,
} from '@reduxjs/toolkit';

export interface DataApi {
  id: number;
  title: string;
  Url: string;
  price: number;
  description: String;
  Qty: String;
  qty: number;
  Numberofwarehouses: String;
  Sport: number;
  Category: String;
  checkbox: boolean;
}

export interface CartItem {
  data: DataApi;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const ReviewSlide = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addToReview: (state, action: PayloadAction<CartItem>) => {
      console.log(action.payload, 'action');

      const itemIndex = state.items.findIndex(
        (item) => item.data.title === action.payload.data.title
      );
      if (state.items.length == 0 && itemIndex < 0) {
        const tempProduct = { ...action.payload };
        state.items.push(tempProduct);
      } else if (state.items.length >= 1 && itemIndex < 0) {
        const removeId = action.payload.data.id;
        const tempProduct = { ...action.payload };
        state.items.push(tempProduct);
        const removeCart = state.items.filter(
          (cart: any) => cart.data.id === removeId
        );
        state.items = removeCart;
      }
    },
  },
});

export const { addToReview } = ReviewSlide.actions;
export default ReviewSlide.reducer;
