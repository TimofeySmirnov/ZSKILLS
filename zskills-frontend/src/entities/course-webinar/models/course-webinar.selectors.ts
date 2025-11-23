import { AppState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectWebinarSlice = (state: AppState) => state.courseWebinar

export const selectWebinarInfo = createSelector(
    [selectWebinarSlice],
    s => s.selectedWebinarInfo
)