import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginUserApi } from "./lib/services/api/auth.service";
import { LoginFormModel } from "./lib/models/auth.model";

declare module "@auth/core/types" {
  interface Session {
    user: {
      email: string;
      access_token: string;
      id: string;
    };
  }
}

type SessionUser = {
  id: string;
  email: string;
  access_token: string;
};

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
        return loginUserApi(credentials as LoginFormModel);
      }
    })
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      const user = token.user as SessionUser;

      if (user) {
        session.user.id = user.id;
        session.user.email = user.email;
        session.user.access_token = user.access_token;
      }

      return session;
    }
  }
});
