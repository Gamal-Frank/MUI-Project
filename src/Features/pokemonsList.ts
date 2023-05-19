import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface pokemonListState{
    value: object[]
}
const initialState:pokemonListState = {
  value: [],
};
export const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    addPokemons: (state, action: PayloadAction<object>) => {
        state.value.push(action.payload)
    },
  },
});

export default pokemonListSlice.reducer;
