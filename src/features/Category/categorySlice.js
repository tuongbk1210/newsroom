import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: { value: 'Technology' },
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { actions, reducer } = categorySlice;
export const { setCategory } = actions;
export default reducer;
