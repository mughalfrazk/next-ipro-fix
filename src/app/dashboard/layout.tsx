import AppShellLayout from "@/components/layouts/app-shell";
import ProfileProvider from "@/context/profile.context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProfileProvider>
      <AppShellLayout>{children}</AppShellLayout>
    </ProfileProvider>
  );
}
