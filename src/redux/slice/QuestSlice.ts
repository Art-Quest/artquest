import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QuestT } from "../types";

// Define the initial state using that type
const initialState: QuestT[] = [];

export const QuestSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {
    addQuest: (state, { payload }: PayloadAction<QuestT>) => {
      state.push(payload);
    },
    clearQuest: () => {
      return initialState;
    },
  },
});

export const { clearQuest, addQuest } = QuestSlice.actions;

export default QuestSlice.reducer;
