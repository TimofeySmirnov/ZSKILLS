import { shallowEqual, useSelector } from "react-redux";
import {
  selectIsOpenNav,
  selectMyCourses,
  selectSelectedCourse,
  selectSelectedLesson,
} from "./course.selectors";

export const useMyCourses = () => {
  return useSelector(selectMyCourses, shallowEqual);
};

export const useSelectedCourse = () => {
  return useSelector(selectSelectedCourse, shallowEqual);
};

export const useSelectedLesson = () => {
  return useSelector(selectSelectedLesson, shallowEqual);
};

export const useIsOpenNav = () => {
  return useSelector(selectIsOpenNav)
}