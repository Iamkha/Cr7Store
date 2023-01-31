import { RootState } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Datauser {
  email: string;
  name: string;
  password: string;
}

export interface UserItem {
  data: Datauser;
}

interface UseState {
  users: UserItem[];
}
const initialState: UseState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToUser: (state, action: PayloadAction<UserItem>) => {
      state.users.push(action.payload);
    },
    removeToUser: (state) => {
      state.users = [];
    },
  },
});

export default userSlice.reducer;
export const { addToUser, removeToUser } = userSlice.actions;
const users = (state: RootState) => state.user.users;
