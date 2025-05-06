"use client";

import * as React from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { Button } from "../ui/button";
import { Icons } from "../icons";

export function UserAuthForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/home";

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCoinbaseLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("coinbase", { callbackUrl });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-6">
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={handleGoogleLogin}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Google
      </Button>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={handleCoinbaseLogin}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.coinbase className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Coinbase
      </Button>
    </div>
  );
}
