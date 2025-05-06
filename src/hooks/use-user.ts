"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export type User = {
  id?: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export const useUser = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("Session status:", status);
    console.log("Session data:", session);
    console.log("Current authentication state:", {
      isLoading: status === "loading",
      isAuthenticated: status === "authenticated",
      isUnauthenticated: status === "unauthenticated",
      sessionUser: session?.user,
    });

    if (status === "authenticated" && session?.user) {
      console.log("Setting user from session:", session.user);
      setUser(session.user);
    } else {
      console.log("Clearing user data, status:", status);
      setUser(null);
    }
  }, [session, status]);

  return user;
};
