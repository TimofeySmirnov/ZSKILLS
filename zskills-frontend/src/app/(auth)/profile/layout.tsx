"use client";

import { useIsAuth } from "@/entities/user/models/user.hooks";
import ProfileHeader from "@/shared/ui/ProfileHeader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function WithAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const isAuth = useIsAuth();
  useEffect(() => {
    if (!isAuth) {
      
    }
  }, [isAuth, router]);
  if (!isAuth) return null;
  return (
    <div>
      <ProfileHeader />
      <main>{children}</main>
    </div>
  );
}
