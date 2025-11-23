import { shallowEqual, useSelector } from "react-redux"
import { selectNeedSaveTest, selectTestQuestions } from "./course-test.selectors"

export const useTestQuestions = () => {
    return useSelector(selectTestQuestions, shallowEqual)
}

export const useNeedSaveTest = () => {
    return useSelector(selectNeedSaveTest)
}