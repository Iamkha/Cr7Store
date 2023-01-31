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
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  items: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.data.title === action.payload.data.title
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].data.qty += 1;
      } else {
        const tempProduct = { ...action.payload };
        state.items.push(tempProduct);
      }
    },
    removeCart: (state, action: PayloadAction<CartItem>) => {
      const removeId = action.payload.data.id;

      const removeCart = state.items.filter(
        (cart: any) => cart.data.id !== removeId
      );
      state.items = removeCart;
    },
    removeCartAll(state) {
      state.items = [];
    },
    decreaseCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.data.id === action.payload.data.id
      );

      if (state.items[itemIndex].data.qty > 1) {
        state.items[itemIndex].data.qty -= 1;
      } else {
        const removeId = action.payload.data.id;

        const removeCart = state.items.filter(
          (cart: any) => cart.data.id !== removeId
        );
        state.items = removeCart;
      }
    },
    increaseCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.data.id === action.payload.data.id
      );

      state.items[itemIndex].data.qty += 1;
    },
    Purchase: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.data.title === action.payload.data.title
      );
      if (
        itemIndex >= 0 &&
        state.items[itemIndex].data.checkbox == false
      ) {
        state.items[itemIndex].data.checkbox = true;
      } else if (
        itemIndex >= 0 &&
        state.items[itemIndex].data.checkbox == true
      ) {
        state.items[itemIndex].data.checkbox = false;
      }
    },
  },
});

export const {
  addToCart,
  removeCart,
  removeCartAll,
  decreaseCart,
  increaseCart,
  Purchase,
} = cartSlice.actions;
export default cartSlice.reducer;

// const items = (state: RootState) => state.cart.items;

// export const totalItemQtyselector = createSelector(
//   [items],
//   (items) => {
//     return items.reduce(
//       (total: number, curr: CartItem) => total + curr.data.qty,
//       0
//     );
//   }
// );

// export const totalQtyLimitSelector = createSelector(
//   [items, (items, limit: number) => limit],
//   (items, limit) => {
//     const total = items.reduce(
//       (total: number, curr: CartItem) => (total += curr.data.id),
//       0
//     );
//     return total > limit;
//   }
// );
