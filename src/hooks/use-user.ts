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
    if (status === "authenticated" && session?.user) {
      setUser(session.user);
    } else {
      setUser(null);
    }
  }, [session, status]);

  return user;
};
