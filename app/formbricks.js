"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import formbricks from "@formbricks/js/app";

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window !== undefined) {
    formbricks.init({
      environmentId: "clwttk0z600xuihbufeb70j36",
      apiHost: "https://app.formbricks.com",
      userId: "",
    });
        
} else {
    console.error("Window object not accessible to init Formbricks");
}
  }, []);

  useEffect(() => {
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
}
