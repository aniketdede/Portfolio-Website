"use client";

import Link from "next/link";

export default function ResumeActions() {
  return (
    <div className="no-print mx-auto max-w-[820px] flex flex-wrap items-center justify-between gap-3 mb-5 print:hidden">
      <Link
        href="/"
        className="px-5 py-2.5 bg-zinc-200 text-black text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-300 transition-colors inline-flex items-center gap-2"
      >
        ← Back to Portfolio
      </Link>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => window.print()}
          className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-800 transition-colors cursor-pointer shadow-sm"
        >
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
}
