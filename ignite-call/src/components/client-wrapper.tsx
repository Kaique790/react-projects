"use client";

import { globalStyles } from "@/styles/global";
import { useEffect } from "react";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    globalStyles();
  }, []);

  return <>{children}</>;
}
