import { shallowEqual, useSelector } from "react-redux"
import { selectWebinarInfo } from "./course-webinar.selectors"

export const useWebinarInfo = () => {
    return useSelector(selectWebinarInfo, shallowEqual)
}