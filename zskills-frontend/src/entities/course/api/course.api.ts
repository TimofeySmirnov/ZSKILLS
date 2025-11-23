import api from "@/services/axios.config";
import { CourseDto, UnitDto } from "../course.types";

export class CourseApi {
  static async getMyCourses(name?: string) {
    return api.get(`/course/all?name=${name}`);
  }

  static async getCourseById(id: string) {
    return api.get(`/course/${id}`);
  }

  static async createCourse(data: CourseDto) {
    return api.post("/course/", data);
  }

  static async updateCourse(id: string, data: CourseDto) {
    return api.put(`/course/${id}`, data);
  }

  static async deleteCourse(id: string) {
    return api.delete(`/course/${id}`);
  }

  static createUnit(data: UnitDto) {
    return api.post("/unit/", data);
  }

  static async deleteUnit(id: string) {
    return api.delete(`/unit/${id}`);
  }
}
