import { localLogout } from "@/entities/user/models/user.slice";
import { Routes } from "@/shared/data/routes.data";
import { store } from "@/store/store";

export default function logoutUtil() {
    store.dispatch(localLogout())
    window.location.href = Routes.HOME_PAGE;
}