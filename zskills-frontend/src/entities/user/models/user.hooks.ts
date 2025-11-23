import { shallowEqual, useSelector } from "react-redux";
import {
  selectCurrentSub,
  selectIsAuth,
  selectIsLoading,
  selectUser,
} from "./user.selectors";

export const useIsLoadingAuth = () => {
  return useSelector(selectIsLoading);
};

export const useIsAuth = () => {
  return useSelector(selectIsAuth);
};

export const useCurrentSub = () => {
  return useSelector(selectCurrentSub, shallowEqual);
};

export const useUser = () => {
    return useSelector(selectUser, shallowEqual)
};
