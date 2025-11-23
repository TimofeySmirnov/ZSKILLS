import { AppState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectCourseSlice = (state: AppState) => state.course;

export const selectMyCourses = createSelector(
  [selectCourseSlice],
  (s) => s.myCourses
);

export const selectSelectedCourse = createSelector(
  [selectCourseSlice],
  (s) => s.selectedCourse
);

export const selectSelectedLesson = createSelector(
  [selectCourseSlice],
  (s) => s.selectedLesson
);

export const selectIsOpenNav = createSelector(
  [selectCourseSlice],
  (s) => s.open
);


