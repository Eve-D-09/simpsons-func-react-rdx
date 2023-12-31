import { createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   
    setSimpsons: ( state, action) => {
      state.simpsons = action.payload;
    },

    setSearch: ( state, action) => {
      state.search = action.payload;
    },
    setSort: ( state, action) => {
      state.sort = action.payload;
    },
    deleteItem: (state, action) => {
      const indexOf = state.simpsons.findIndex((char) => {
            return char.id === action.payload;
          });
          state.simpsons.splice(indexOf, 1);
    },
    toggleLiked: (state, action) => {
      const indexOf = state.simpsons.findIndex((char) => {
            return char.id === action.payload;
          });
          state.simpsons[indexOf].liked = !state.simpsons[indexOf].liked;
    },
  },
});

export const { toggleLiked, deleteItem, setSort, setSearch, setSimpsons } = counterSlice.actions;


export const selectSimpsons = (state) => state.counter.simpsons;
export const selectSearch = (state) => state.counter.search;
export const selectSort = (state) => state.counter.sort;


export default counterSlice.reducer;
