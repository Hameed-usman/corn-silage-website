"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    elements.forEach((el) => observer.observe(el));

    // #region agent log
    fetch('http://127.0.0.1:7573/ingest/122ed688-980c-47dc-ba7c-0d8255cc5351',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'8aa062'},body:JSON.stringify({sessionId:'8aa062',runId:'post-fix',hypothesisId:'H2',location:'components/ui/ScrollReveal.tsx:7',message:'ScrollReveal mounted',data:{note:'scroll_reveal_ok'},timestamp:Date.now()})}).catch(()=>{});
    // #endregion

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
