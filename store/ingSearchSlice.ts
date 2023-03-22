import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Ingredient } from "@/types";

export interface SearchState {
  search: string;
  startupIngredients: Ingredient[];
}

const initialState: SearchState = {
  search: "",
  startupIngredients: [],
};

const ingSearchSlice = createSlice({
  name: "ingSearch",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupIngredients: (state, action: PayloadAction<Ingredient[]>) => {
      state.startupIngredients = action.payload;
    },
  },
});

export const { setSearch, setStartupIngredients } = ingSearchSlice.actions;
export default ingSearchSlice.reducer;
