import { AppState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectTariffSlice = (state: AppState) => state.tariff

export const selectAllTariffs = createSelector(
    [selectTariffSlice],
    tariff => tariff.allTariffs
)