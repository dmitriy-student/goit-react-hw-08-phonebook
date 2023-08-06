import { createSlice } from '@reduxjs/toolkit';

const FilterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilter(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { changeFilter } = FilterSlice.actions;
export const filterReducer = FilterSlice.reducer;
