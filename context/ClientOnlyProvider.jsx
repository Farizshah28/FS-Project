"use client";
import { useEffect, useState } from "react";
import { AppContextProvider } from "./AppContext";

export default function ClientOnlyProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a minimal layout that matches the final structure
    return (
      <div className="min-h-screen bg-white">
        {/* This ensures the layout structure is maintained during SSR */}
        {children}
      </div>
    );
  }

  return <AppContextProvider>{children}</AppContextProvider>;
} 