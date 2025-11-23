import api from "@/services/axios.config";
import { loginDTO, registrationDTO } from "../user.types";

export class UserApi {
  static registration = (data: registrationDTO) => {
    return api.post("/auth/registration", data);
  };

  static login = (data: loginDTO) => {
    return api.post("/auth/login", data);
  };

  static logout = () => {
    return api.post("/auth/logout");
  };

  static refresh = () => {
    return api.post("/auth/refresh");
  };
}
