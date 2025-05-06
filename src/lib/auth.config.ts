import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CoinbaseProvider from "next-auth/providers/coinbase";

export const authConfig: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CoinbaseProvider({
      clientId: process.env.COINBASE_CLIENT_ID!,
      clientSecret: process.env.COINBASE_CLIENT_SECRET!,
    }),
  ],
} as const;
