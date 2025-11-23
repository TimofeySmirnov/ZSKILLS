import { AppState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectUserSlice = (state: AppState) => state.auth

export const selectIsLoading = createSelector(
    [selectUserSlice],
    auth => auth.isLoading
)


export const selectIsAuth = createSelector(
    [selectUserSlice],
    auth => auth.isAuth
)

export const selectCurrentSub = createSelector(
    [selectUserSlice],
    auth => auth.currentSub
)

export const selectUser = createSelector(
    [selectUserSlice],
    auth => auth.user
)
