import { createSlice } from "@reduxjs/toolkit";

// initial store data

const initialState = {
  todo: {
    ...sessionStorage
  }
};

// creating reducer function logic for different actions

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    change: (state, action) => {
      let key = action.payload.nodeValue;
      if (state.todo[key] === "false") {
        sessionStorage.setItem(key, true);
        state.todo[key] = true;
      } else if (state.todo[key] === "true") {
        sessionStorage.setItem(key, false);
        state.todo[key] = false;
      } else {
        let bool = !state.todo[key];
        sessionStorage.setItem(key, bool);
        state.todo[key] = bool;
      }
    },
    addToList: (state, action) => {
      state.todo[action.payload] = false;
    },
    removeFromList: (state, action) => {
      let key = action.payload;
      delete state.todo[key];
    }
  }
});

// Action creators are generated for each case reducer function
export const { change, addToList, removeFromList } = counterSlice.actions;

export default counterSlice.reducer;
