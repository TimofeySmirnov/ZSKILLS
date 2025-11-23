import { LessonApi } from "@/entities/lesson/api/lesson.api";
import { CreateWebinarDto, WebinarType } from "@/entities/lesson/lesson.types";
import { AppState } from "@/store/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

type initialState = {
  selectedWebinarInfo: WebinarType | null;
  lessonId: string | null;
};

const initialState: initialState = {
  selectedWebinarInfo: null,
  lessonId: null,
};

export const getWebinarInfo = createAsyncThunk(
  "courseWebinar/getWebinarInfo",
  async (id: string, api) => {
    try {
        const res  = await LessonApi.getWebinarInfo(id)
        return res.data
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const createWebinarInfo = createAsyncThunk(
  "courseWebinar/createWebinarInfo",
  async ({id, data}: {id: string, data: CreateWebinarDto}, api) => {
    try {
        const res  = await LessonApi.createWebinarInfo(id, data)
        return res.data
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const updateWebinarInfo = createAsyncThunk(
  "courseWebinar/updateWebinarInfo",
  async ({id, data}: {id: string, data: CreateWebinarDto}, api) => {
    try {
        const res  = await LessonApi.updateWebinarInfo(id, data)
        return res.data
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const deleteWebinarInfo = createAsyncThunk(
  "courseWebinar/deleteWebinarInfo",
  async (id: string, api) => {
    try {
        const res  = await LessonApi.deleteWebinarInfo(id)
        return res.data
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);



const courseWebinarSlice = createSlice({
  name: "courseWebinar",
  initialState,
  reducers: {
    loadWebinarData: (s, a: PayloadAction<WebinarType>) => {
      s.selectedWebinarInfo = a.payload;
      s.lessonId = a.payload.id;
    },
  },
  extraReducers: (b) => {
    b.addCase(getWebinarInfo.fulfilled, (s, a) => {
        if(!a.payload) return
        s.selectedWebinarInfo = a.payload
        s.lessonId = a.payload.id
    })
    b.addCase(createWebinarInfo.fulfilled, (s, a) => {
        if(!a.payload) return
        s.selectedWebinarInfo = a.payload
        s.lessonId = a.payload.id
    })
    b.addCase(updateWebinarInfo.fulfilled, (s, a) => {
        if(!a.payload) return
        s.selectedWebinarInfo = a.payload
        s.lessonId = a.payload.id
    })
    b.addCase(deleteWebinarInfo.fulfilled, (s) => {
        s.selectedWebinarInfo = null
    })
  }
});

export default courseWebinarSlice.reducer;
export const { loadWebinarData } = courseWebinarSlice.actions;
