import { useSelector } from "react-redux"
import { selectTeachercategory } from "./profile.selectors"

export const useSelectedTeacherCategory = () => {
    return useSelector(selectTeachercategory)
}