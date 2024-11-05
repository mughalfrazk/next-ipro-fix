import AppShellLayout from "@/components/layouts/app-shell"
import withAuth from "@/hoc/with-auth"

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <AppShellLayout>{children}</AppShellLayout>
}

export default withAuth(RootLayout)
