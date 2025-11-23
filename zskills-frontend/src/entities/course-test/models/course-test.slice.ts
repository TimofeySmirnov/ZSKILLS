import {
  TestQuestion,
  TestQuestionWithType,
} from "@/entities/course/course.types";
import { LessonApi } from "@/entities/lesson/api/lesson.api";
import { CreateQuestionDto } from "@/entities/lesson/lesson.types";
import { AppState } from "@/store/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  lessonId: string | null;
  questions: Record<string, TestQuestionWithType>;
  needSave: boolean;

  
};

const initialState: initialState = {
  lessonId: null,
  questions: {},
  needSave: false,
};

export const addQuestionThunk = createAsyncThunk(
  'courseTest/addQuestion',
  async (data: CreateQuestionDto, api) => {
    try{
      const {courseTest} = api.getState() as AppState
      const id = courseTest.lessonId
      console.log(id)
      if(!id) return
      const res = await LessonApi.addQuestion(id, data)
      return res.data
    }catch(err) {
      return api.rejectWithValue(err)
    }
  }
)

export const deleteQuestionThunk = createAsyncThunk(
  'courseTest/deleteQuestionThunk' ,
  async (id: string, api) => {
    try{
      await LessonApi.deleteQuestion(id)
      return id
    }catch(err) {
      return api.rejectWithValue(err)
    }
  }
)

export const updateQuestionThunk = createAsyncThunk(
  'courseTest/updateQuestionThunk',
  async ({id, data} : {id: string, data: CreateQuestionDto}, api) => {
    try{
      const res = await LessonApi.updateQuestion(id, data)
      console.log(res.data)
      return res.data
    }catch(err) {
      return api.rejectWithValue(err)
    }
  }
)

const courseTestSlice = createSlice({
  name: "courseTest",
  initialState,
  reducers: {
    loadQuestions: (
      state,
      action: PayloadAction<{ lessonId: string; questions: TestQuestion[] | undefined }>
    ) => {
      const { lessonId, questions } = action.payload;
      state.lessonId = lessonId;
      if(!questions) return
      const normalizeQuestions: Record<string, TestQuestionWithType> = {};
      for (const q of questions) {
        normalizeQuestions[q.id] = { ...q, status: "exist" };
      }
      state.questions = normalizeQuestions
    },
    addQuestion: (state, action) => {
      const id = Date.now().toString();
      state.questions[id] = { ...action.payload, status: "new" };
      state.needSave = true;
    },
    editQuestion: (state, action) => {
      state.questions[action.payload.id] = {
        ...action.payload,
        status: "updated",
      };
      state.needSave = true;
    },
    deleteQuestion: (state, action) => {
      state.questions[action.payload.id] = {
        ...state.questions[action.payload.id],
        status: "delete",
      };
      state.needSave = true;
    },
  },
  extraReducers: (b) => {
    b.addCase(addQuestionThunk.fulfilled, (s, a) => {
      if(!a.payload) return
      s.questions[a.payload.id] = a.payload
    })
    b.addCase(deleteQuestionThunk.fulfilled, (s, a) => {
      if(!a.payload) return
      const {[a.payload]: _, ...rest} = s.questions
      s.questions = rest
    })
    b.addCase(updateQuestionThunk.fulfilled, (s, a) => {
      if(!a.payload) return
      s.questions[a.payload.id] = a.payload
    })
  }
});

export default courseTestSlice.reducer;
export const { loadQuestions, addQuestion, editQuestion, deleteQuestion } =
  courseTestSlice.actions;
