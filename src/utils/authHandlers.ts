// utils/authHandlers.ts
'use client'; // Ensures it's usable in Client Components

import { useRouter } from "next/navigation";

export const useAuthHandlers = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/signin");
  };

  return { handleSignIn };
};
