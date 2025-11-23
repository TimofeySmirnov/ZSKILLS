import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CoureseOnlyType, Course, CourseDto, Lesson } from "../course.types";
import { CourseApi } from "../api/course.api";
import { AppState } from "@/store/store";
import { createUnitDto } from "@/entities/unit/unit.types";
import { UnitApi } from "@/entities/unit/api/unit.api";
import { LessonApi } from "@/entities/lesson/api/lesson.api";
import {
  CreateLessonDto,
  thunkCreateLessonType,
} from "@/entities/lesson/lesson.types";
import { toast } from "react-toastify";

type initialState = {
  myCourses: CoureseOnlyType[];
  selectedCourse: Course | null;
  selectedLesson: Lesson | "main";
  open: boolean;
};

const initialState: initialState = {
  myCourses: [],
  selectedCourse: null,
  selectedLesson: "main",
  open: false,
};

export const getAllCourses = createAsyncThunk(
  "course/getAllCourses",
  async (name: string, api) => {
    try {
      const res = await CourseApi.getMyCourses(name);
      return res.data;
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const getCourseById = createAsyncThunk(
  "course/getCourseById",
  async (id: string, api) => {
    try {
      const res = await CourseApi.getCourseById(id);
      return res.data;
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const createCourse = createAsyncThunk(
  "course/createCourse",
  async (data: CourseDto, api) => {
    try {
      const res = await CourseApi.createCourse(data);
      return res.data;
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const createUnit = createAsyncThunk(
  "course/createUnit",
  async (data: createUnitDto, api) => {
    try {
      const { course } = api.getState() as AppState;
      const id = course.selectedCourse?.id;
      if (!id) return;
      const res = await UnitApi.create(id, data);
      return res.data;
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const createLesson = createAsyncThunk(
  "course/createLesson",
  async (data: thunkCreateLessonType, api) => {
    try {
      const res = await LessonApi.createLesson(data.id, data.data);
      return { lesson: res.data, id: data.id };
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (id: string, api) => {
    try {
      const res = await CourseApi.deleteCourse(id);
      return res.data;
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const updateCourse = createAsyncThunk(
  "course/updateCourse",
  async (data: CourseDto, api) => {
    try {
      const { course } = api.getState() as AppState;
      const id = course.selectedCourse?.id;
      if (!id) return;
      const res = await CourseApi.updateCourse(id, data);
      return res.data;
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const updateLesson = createAsyncThunk(
  "course/updateLesson",
  async (data: CreateLessonDto, api) => {
    try {
      const { course } = api.getState() as AppState;
      const lesson = course.selectedLesson;
      if (lesson === "main") return;
      const id = lesson.id;
      const res = await LessonApi.updateLesson(id, data);
      return res.data;
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const deleteLesson = createAsyncThunk(
  "course/deleteLesson",
  async (id: string, api) => {
    try {
      await LessonApi.deleteLesson(id);
      return id;
    } catch (err) {
      return api.rejectWithValue(err);
    }
  }
);

export const changeLection = createAsyncThunk(
  'courseWebinar/changeLection',
  async ({id, data}: {id: string, data: any}, api) => {
    try{
      const res = await LessonApi.changeLection(id, data)
      toast.success('Сохранено')
      return res.data
    }catch(err) {
      return api.rejectWithValue(err)
    }
  }
)

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setLesson: (state, action) => {
      state.selectedLesson = action.payload;
    },
    setOpenNav: (state) => {
      state.open = !state.open;
    },
  },
  extraReducers: (b) => {
    b.addCase(getAllCourses.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.myCourses = action.payload;
    });
    b.addCase(createCourse.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.myCourses.push(action.payload);
    });
    b.addCase(getCourseById.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.selectedCourse = action.payload;
    });
    b.addCase(createUnit.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.selectedCourse?.courseUnits.push(action.payload);
    });
    b.addCase(createLesson.fulfilled, (state, action) => {
      if (!action.payload) return;

      const { id, lesson } = action.payload;
      const unit = state.selectedCourse?.courseUnits.find((i) => i.id === id);

      if (!unit) return;

      unit.lessons.push(lesson);
    });
    b.addCase(deleteCourse.fulfilled, (state) => {
      state.selectedCourse = null;
      state.selectedLesson = "main";
    });
    b.addCase(updateCourse.fulfilled, (state, action) => {
      if (!action.payload) return;
      const { name, description, id } = action.payload;
      if (state.selectedCourse) {
        state.selectedCourse.name = name;
        state.selectedCourse.description = description;
      }
      state.myCourses = state.myCourses.map((i) =>
        i.id === id ? { ...i, name, description } : i
      );
    });
    b.addCase(updateLesson.fulfilled, (state, action) => {
      if (!action.payload) return;
      const lesson = state.selectedLesson;
      if (lesson === "main") return;
      state.selectedLesson = {
        ...lesson,
        name: action.payload.name,
        lessonType: action.payload.lessonType,
      };
    });
    b.addCase(deleteLesson.fulfilled, (state, action) => {
      state.selectedLesson = "main";
      if (!state.selectedCourse) return;
      for (const unit of state.selectedCourse.courseUnits) {
        unit.lessons = unit.lessons.filter(
          (lesson) => lesson.id !== action.payload
        );
      }
    });
    b.addCase(changeLection.fulfilled, (s, a) => {
      if(!a.payload) return
      if(s.selectedLesson === 'main') return
      if (!s.selectedCourse) return;
      s.selectedLesson.content = a.payload.content
      for (const unit of s.selectedCourse.courseUnits) {
        unit.lessons = unit.lessons.map(l => l.id === a.payload.id ? a.payload : l)
      }
    })
  },
});

export default courseSlice.reducer;
export const { setLesson, setOpenNav } = courseSlice.actions;
