import { configureStore } from "@reduxjs/toolkit";
import recipient from "./slice/RecepientSlice";
import quest from "./slice/QuestSlice";
import transction from "./slice/TransactionSlice";
import price from "./slice/PriceSlice";
import tronData from "./slice/TronDataSlice";
import myQuests from "./slice/MyQuestSlice";

export const store = configureStore({
  reducer: {
    recipient,
    quest,
    transction,
    price,
    tronData,
    myQuests,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
