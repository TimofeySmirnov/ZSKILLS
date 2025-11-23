import { AppState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectCourseTest = (state: AppState) => state.courseTest

export const selectTestQuestions = createSelector(
    [selectCourseTest],
    s => Object.values(s.questions).filter(q => q.status !== 'delete')
)

export const selectNeedSaveTest = createSelector(
    [selectCourseTest],
    s => s.needSave
)