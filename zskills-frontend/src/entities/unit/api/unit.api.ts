import api from "@/services/axios.config";
import { createUnitDto } from "../unit.types";

export class UnitApi {
  static async create(id: string, data: createUnitDto) {
    return api.post(`unit/${id}`, data);
  }

  static async delete(id: string) {
    return api.delete(`unit/${id}`);
  }
}
