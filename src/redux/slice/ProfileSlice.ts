import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProfileT } from "../types";

// Define the initial state using that type
const initialState: ProfileT = {
  name: "",
  username: "",
  email: "",
  bio: "",
  social: [""],
  referral: [""],
  xp: 0,
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile: (state, { payload }: PayloadAction<ProfileT>) => {
      state.name = payload.name;
      state.username = payload.username;
      state.email = payload.email;
      state.bio = payload.bio;
      state.social = payload.social;
      state.referral = payload.referral;
      state.xp = payload.xp;
    },
    clearProfile: () => {
      return initialState;
    },
  },
});

export const { addProfile, clearProfile } = ProfileSlice.actions;

export default ProfileSlice.reducer;
