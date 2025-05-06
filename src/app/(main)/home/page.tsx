"use client";

import { redirect } from "next/navigation";
import LeftHome from "@/components/ui/left-home";
import RightHome from "@/components/ui/right-home";
import MainHome from "@/components/ui/main-home";
import { useUser } from "@/hooks/use-user";

const Home = () => {
  const user = useUser();
  if (!user) {
    redirect("/auth/signin");
  }
  return (
    <div className="flex w-full h-full">
      <div className="w-1/4 ">
        <LeftHome />
      </div>
      <div className="w-2/4 ">
        <MainHome />
      </div>
      <div className="w-1/4">
        <RightHome />
      </div>
    </div>
  );
};

export default Home;
