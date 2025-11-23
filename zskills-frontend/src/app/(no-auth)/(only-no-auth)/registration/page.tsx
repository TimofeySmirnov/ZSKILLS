import RegistrationForm from "@/entities/user/ui/RegistrationForm";
import AuthBanner from "@/shared/ui/AuthBanner";

export default function ReqgistrationPage() {
  return (
    <div className="flex  justify-center items-center gap-15 p-4 pl-10 h-[100vh]">
      <RegistrationForm />
      <AuthBanner />
    </div>
  );
}
