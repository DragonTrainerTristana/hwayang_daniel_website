"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "소개", href: "/" },
  { name: "사역자들", href: "/ministers" },
  { name: "예배팀", href: "/worship-team" },
  { name: "활동", href: "/activities" },
  { name: "갤러리", href: "/gallery" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            다니엘 ☁️
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white/90 backdrop-blur-md rounded-2xl">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
