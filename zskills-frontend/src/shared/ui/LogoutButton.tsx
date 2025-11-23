import { store } from "@/store/store";
import Button from "./Button";
import { logout } from "@/entities/user/models/user.slice";
import { Routes } from "../data/routes.data";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter()
    const handleLogout = () => {
        store.dispatch(logout())
        router.replace(Routes.HOME_PAGE)
      }
  return (
    <>
      <Button title="Выйти" hover="red" onClick={handleLogout} />
    </>
  );
}
