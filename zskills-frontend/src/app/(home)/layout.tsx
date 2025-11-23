"use client";

import NoAuthHeader from "@/shared/ui/NoAuthHeader";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NoAuthHeader />
      <main>{children}</main>
    </div>
  );
}
