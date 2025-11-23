'use client'
import { store } from "@/store/store";
import { refresh } from "@/entities/user/models/user.slice";
import { useEffect } from "react";
import { useIsLoadingAuth } from "@/entities/user/models/user.hooks";
import { JWTUtils } from "@/utils/jwtUtils";

export default function RefreshUserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = useIsLoadingAuth()
  useEffect(() => {
    const token = JWTUtils.getToken()
    if(token) {
      store.dispatch(refresh());
    }
  }, []);
  if(isLoading) return (
    <div>
      Loading...
    </div>
  )
  return <>{children}</>;
}
