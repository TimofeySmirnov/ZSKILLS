import api from "@/services/axios.config";
import {
  ChangeLessonTestType,
  CreateLessonDto,
  CreateQuestionDto,
  CreateWebinarDto,
} from "../lesson.types";

export class LessonApi {
  static async createLesson(id: string, data: CreateLessonDto) {
    return api.post(`/lesson/${id}`, data);
  }

  static async updateLesson(id: string, data: CreateLessonDto) {
    return api.put(`/lesson/${id}`, data);
  }

  static async deleteLesson(id: string) {
    return api.delete(`/lesson/${id}`);
  }

  static async changeTestQuestions(id: string, data: ChangeLessonTestType) {
    return api.post(`lesson/change-test/${id}`, data);
  }

  static async addQuestion(id: string, data: CreateQuestionDto) {
    return await api.post(`lesson/add-test/${id}`, data);
  }

  static async updateQuestion(id: string, data: CreateQuestionDto) {
    return await api.put(`lesson/question/${id}`, data);
  }

  static async deleteQuestion(id: string) {
    return await api.delete(`/lesson/question/${id}`)
  }


  static async getWebinarInfo(id: string) {
    return await api.get(`lesson/webinar/${id}`);
  }

  static async createWebinarInfo(id: string, data: CreateWebinarDto) {
    return await api.post(`lesson/webinar/${id}`, data);
  }


  static async updateWebinarInfo(id: string, data: CreateWebinarDto) {
    return await api.put(`lesson/webinar/${id}`, data);
  }

  static async deleteWebinarInfo(id: string) {
    return await api.delete(`lesson/webinar/${id}`);
  }

  static async changeLection(id: string, content: any) {
    return await api.patch(`lesson/lection/${id}`, {content});
  }
}
