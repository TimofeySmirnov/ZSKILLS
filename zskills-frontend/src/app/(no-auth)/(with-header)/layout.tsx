import NoAuthHeader from "@/shared/ui/NoAuthHeader";

export default function NoAuthLayout({
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
