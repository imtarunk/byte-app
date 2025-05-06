"use client";

import { ProfileCard } from "../profile/profile-card";
import { useUser } from "@/hooks/use-user";

const LeftHome = () => {
  const user = useUser();
  return (
    <div className="w-full h-screen flex flex-col p-2">
      <ProfileCard
        name={user?.name || ""}
        username={user?.username || ""}
        bio={user?.bio || ""}
        followers={user?.followers || 0}
        following={user?.following || 0}
        imageUrl={user?.image || ""}
      />
    </div>
  );
};

export default LeftHome;
