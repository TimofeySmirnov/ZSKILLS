import { combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from '../entities/user/models/user.slice'
import tariffSlice from '../entities/tariff/models/tariff.slice'
import profileSlice from "@/entities/profile/models/profile.slice";
import courseSlice from "@/entities/course/models/course.slice";
import courseTestSlice from "@/entities/course-test/models/course-test.slice";
import courseWebinarSlice from "@/entities/course-webinar/models/course-webinar.slice";

const appReducer = combineReducers({
  auth: authSlice,
  tariff: tariffSlice,
  profile: profileSlice,
  course: courseSlice,
  courseTest: courseTestSlice,
  courseWebinar: courseWebinarSlice
});

export const store = configureStore({
  reducer: appReducer,
  devTools: true,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  any
>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
