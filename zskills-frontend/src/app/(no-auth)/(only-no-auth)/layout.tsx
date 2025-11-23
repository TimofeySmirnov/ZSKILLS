"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useIsAuth } from "@/entities/user/models/user.hooks";

export default function OnlyNoAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = useIsAuth();
  const router = useRouter();
  useEffect(() => {
    if (isAuth) {
      router.replace("/");
    }
  }, [isAuth, router]);
  if (isAuth) return null;
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
