import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { prisma } from "../lib/db";
import { authConfig } from "./auth.config";

export const authOptions: NextAuthOptions = {
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ token, session }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          picture: user.image,
        };
      }

      // Subsequent calls
      return token;
    },
  },
} satisfies NextAuthOptions;
