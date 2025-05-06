"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold tracking-tighter text-primary">
            404 b6g7yj
          </h1>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
          <Button asChild className="flex items-center gap-2">
            <Link href="/home">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
