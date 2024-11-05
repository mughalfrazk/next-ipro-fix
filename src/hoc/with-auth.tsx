import { ComponentType, FC } from "react"
import { redirect } from "next/navigation"

import { auth } from "@/auth"
import ProfileProvider from "@/context/profile.context"

const withAuth = <P extends Record<string, unknown>>(
  Component: ComponentType<P>,
) => {
  const WithAuth: FC<P> = async (props) => {
    const session = await auth()
    if (!session) return redirect("/auth")

    return (
      <ProfileProvider>
        <Component {...props} />
      </ProfileProvider>
    )
  }
  return WithAuth
}

export default withAuth
