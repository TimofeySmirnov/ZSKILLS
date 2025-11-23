import { createSlice } from "@reduxjs/toolkit";
import { TeacherNavElements } from "../data/teacherProfile.data";

type initialState = {
  selectedTeacherCategoty: TeacherNavElements;
};

const initialState: initialState = {
  selectedTeacherCategoty: TeacherNavElements.Курсы,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedTeacherCategoty = action.payload;
    },
  },
});

export default profileSlice.reducer;
export const { setCategory } = profileSlice.actions;
