"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LeftHome from "@/components/ui/left-home";
import RightHome from "@/components/ui/right-home";
import MainHome from "@/components/ui/main-home";
import { useUser } from "@/hooks/use-user";

const Home = () => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/auth/signin");
    }
  }, [user, router]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <main className="flex-1 min-h-[calc(100vh-4rem)] pt-16 px-4 md:px-6 lg:px-8">
      <div className="flex w-full h-full gap-4 max-w-7xl mx-auto">
        <div className="w-1/4 sticky top-20">
          <LeftHome />
        </div>
        <div className="w-2/4">
          <MainHome />
        </div>
        <div className="w-1/4 sticky top-20">
          <RightHome />
        </div>
      </div>
    </main>
  );
};

export default Home;
