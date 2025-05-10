"use client";

import { useEffect, useState } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // Handle client-side only rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Remove any extension-added classes during hydration
    document.body.className = "antialiased font-sans bg-white";
  }, []);

  if (!mounted) {
    return null; // Return nothing on the server pass
  }

  return <>{children}</>;
}
