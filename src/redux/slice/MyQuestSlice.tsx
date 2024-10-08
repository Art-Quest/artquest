import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QuestT } from "../types";

// Define the initial state using that type
const initialState: QuestT[] = [];

export const MyQuestSlice = createSlice({
  name: "myQuest",
  initialState,
  reducers: {
    addMyQuest: (state, { payload }: PayloadAction<QuestT>) => {
      state.push(payload);
    },
    clearMyQuests: () => {
      return initialState;
    },
  },
});

export const { clearMyQuests, addMyQuest } = MyQuestSlice.actions;

export default MyQuestSlice.reducer;
