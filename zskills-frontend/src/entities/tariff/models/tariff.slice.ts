import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TariffType } from "../tariff.types";
import ReturnErrorStringUtil from "@/utils/returnErrorString.util";
import { AppState } from "@/store/store";
import { TariffApi } from "../api/tariff.api";
import { AxiosResponse } from "axios";
import { selectAllTariffs } from "./tariff.selectors";

type initialState = {
  allTariffs: TariffType[];
};

const initialState: initialState = {
  allTariffs: [],
};

export const getAllTariffs = createAsyncThunk(
  "tariff/all",
  async (_, thunkApi) => {
    try {
      const result: AxiosResponse<TariffType[]> = await TariffApi.getAll();
      return result.data;
    } catch (err) {
      thunkApi.rejectWithValue(ReturnErrorStringUtil(err));
      return;
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState() as AppState;
      return state.tariff.allTariffs.length === 0;
    },
  }
);

const tariffSlice = createSlice({
  name: "tariff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTariffs.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.allTariffs = action.payload;
    });
  },
});

export default tariffSlice.reducer;
