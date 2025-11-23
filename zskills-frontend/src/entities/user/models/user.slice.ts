import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginDTO, registrationDTO, responseAuthUser, UserType } from "../user.types";
import { UserApi } from "../api/user.api";
import { AxiosResponse } from "axios";
import { JWTUtils } from "@/utils/jwtUtils";
import ReturnErrorStringUtil from "@/utils/returnErrorString.util";
import { toast } from "react-toastify";
import { SubTypeInAuth } from "@/entities/subscribe/subscribe.types";

type initialState = {
  user: UserType | null;
  isAuth: boolean;
  isLoading: boolean;
  currentSub: SubTypeInAuth | null
};

const initialState: initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  currentSub: null
};

export const registration = createAsyncThunk(
  "auth/registration",
  async (data: registrationDTO, thunkApi) => {
    try {
      const result: AxiosResponse<responseAuthUser> =
        await UserApi.registration(data);
      const { token, ...other} = result.data;
      JWTUtils.setToken(token);
      return other;
    } catch (err) {
      return thunkApi.rejectWithValue(ReturnErrorStringUtil(err));
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: loginDTO, thunkApi) => {
    try {
      const result: AxiosResponse<responseAuthUser> = await UserApi.login(data);
      const { token, ...other} = result.data;
      JWTUtils.setToken(token);
      return other;
    } catch (err) {
      const error = ReturnErrorStringUtil(err)
      toast.error(error)
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const result: AxiosResponse<{ status: boolean }> = await UserApi.logout();
    if (result.data.status) {
      JWTUtils.removeToken();
    }
    return;
  } catch (err) {
    return thunkApi.rejectWithValue(ReturnErrorStringUtil(err));
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  try {
    const result: AxiosResponse<Omit<responseAuthUser, 'token'>> = await UserApi.refresh();
    return result.data
  } catch (err) {
    return thunkApi.rejectWithValue(ReturnErrorStringUtil(err));
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    localLogout: (state) => {
      state.user = null
      state.isAuth = false
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(registration.fulfilled, (state, action) => {
        if (!action.payload) return;
        const {user, sub} = action.payload
        state.user = user;
        state.currentSub = sub
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        if (!action.payload) return;
        const {user, sub} = action.payload
        state.user = user;
        state.currentSub = sub
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuth = false;
        state.isLoading = false;
      })
      .addCase(refresh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        if (!action.payload) return;
        const {user, sub} = action.payload
        state.user = user;
        state.currentSub = sub
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(refresh.rejected, (state) => {
        state.isLoading = false;
      }),
});

export default authSlice.reducer;
export const {localLogout} = authSlice.actions