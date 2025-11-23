import { AppState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectProfileSlice = (state: AppState) => state.profile

export const selectTeachercategory = createSelector(
    [selectProfileSlice],
    s => s.selectedTeacherCategoty
)

