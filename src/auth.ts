import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { loginUserApi } from "./lib/services/api/auth.service"
import { LoginFormSchema } from "./lib/models/auth.model"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const payload = await LoginFormSchema.parseAsync(credentials)

        const session = await loginUserApi(payload)
        console.log("session: ", session)
        return session
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user = token.user;
      return session;
    },
  }
})
