"use client";

import { Check, Mail } from "lucide-react";
import { useEffect, useState } from "react";

/** Copies the address instead of opening mailto:, which does nothing when no mail app is set up. */
export function CopyEmail({ email, className }: { email: string; className: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const reset = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(reset);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
  }

  return (
    <button type="button" onClick={copy} title={`Copy ${email}`} className={`${className} cursor-pointer`}>
      {copied ? (
        <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" strokeWidth={2.5} />
      ) : (
        <Mail className="size-3.5 opacity-80" />
      )}
      <span aria-live="polite">{copied ? "Copied!" : "Email"}</span>
    </button>
  );
}
