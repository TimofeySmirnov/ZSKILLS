import LoginForm from "@/entities/user/ui/LoginForm";
import AuthBanner from "@/shared/ui/AuthBanner";


export default function LoginPage() {
  return (
    <div className="flex  justify-center items-center gap-15 p-4 pl-10 h-[100vh]">
        <LoginForm />
      <AuthBanner />
    </div>
  );
}
