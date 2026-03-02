"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const items = el.querySelectorAll(".reveal");
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function AboutPage() {
  const containerRef = useReveal();
  const [showVision, setShowVision] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVision((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="bg-gray-50 text-neutral-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-x-clip">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <Image
            src="/images/소개/소개.png"
            alt="다니엘초등부 단체사진"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50" />
        </div>

        {/* Hero 텍스트 - 6초 간격 토글 */}
        <div className="relative z-10 text-center px-4 w-full">
          <p className="reveal text-sm md:text-base tracking-[0.3em] uppercase text-rose-400/70 mb-6"
             style={{ fontFamily: "var(--font-space)" }}>
            Hwayang Church
          </p>

          <div className="relative h-[200px] md:h-[260px]">
            {/* 다니엘초등부 */}
            <div className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-700 ease-in-out ${
              showVision ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}>
              <h1 className="text-[2.5rem] md:text-8xl font-bold tracking-tight text-neutral-900"
                  style={{ fontFamily: "var(--font-space)" }}>
                다니엘초등부
              </h1>
              <div className="w-16 h-[2px] bg-rose-300 mt-6 mb-4" />
              <p className="text-sm md:text-xl text-neutral-700 font-medium">
                하나님의 DNA를 품은 자녀
              </p>
            </div>

            {/* Arise Shine */}
            <div className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-700 ease-in-out ${
              showVision ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}>
              <h1 className="text-[2.5rem] md:text-8xl font-bold tracking-tighter text-neutral-900"
                  style={{ fontFamily: "var(--font-space)" }}>
                Arise Shine
              </h1>
              <div className="w-16 h-[2px] bg-rose-300 mt-6 mb-4" />
              <p className="text-sm md:text-lg text-neutral-700 font-medium leading-relaxed">
                일어나라 빛을 발하라
              </p>
              <p className="text-sm md:text-lg text-neutral-700 font-medium leading-relaxed">
                이는 네 빛이 이르렀고 여호와의 영광이 네 위에 임하였음이니라
              </p>
              <p className="text-xs md:text-sm text-rose-500 font-semibold mt-3" style={{ fontFamily: "var(--font-space)" }}>
                이사야 60:1
              </p>
            </div>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400"
                style={{ fontFamily: "var(--font-space)" }}>
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-rose-300/60 to-transparent" />
        </div>
      </section>

      {/* 소개 섹션 */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/40 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-12 items-start">
            {/* 왼쪽 - 타이틀 */}
            <div className="reveal md:sticky md:top-32">
              <p className="text-xs tracking-[0.3em] uppercase text-rose-400 mb-4"
                 style={{ fontFamily: "var(--font-space)" }}>
                About Us
              </p>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-neutral-800 mb-6"
                  style={{ fontFamily: "var(--font-space)" }}>
                구별된<br />정체성,
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-rose-400"
                  style={{ fontFamily: "var(--font-space)" }}>
                구별된<br />믿음
              </h2>
              <div className="w-12 h-[3px] bg-rose-300 mt-8" />
            </div>

            {/* 오른쪽 - 카드들 */}
            <div className="space-y-6">
              <div className="reveal reveal-delay-1 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-sm">✦</span>
                  <span className="text-xs tracking-[0.2em] uppercase text-rose-400 font-semibold"
                        style={{ fontFamily: "var(--font-space)" }}>
                    Identity
                  </span>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  화양교회 다니엘초등부는<br />
                  하나님의 DNA를 품은 자녀라는 &lsquo;구별된 정체성&rsquo;과<br />
                  하나님 말씀에 뜻을 정한(단1:8) &lsquo;구별된 믿음&rsquo;으로<br />
                  하나님을 사랑하며 예배드리는 초등부입니다.
                </p>
              </div>

              <div className="reveal reveal-delay-2 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-sm">✦</span>
                  <span className="text-xs tracking-[0.2em] uppercase text-rose-400 font-semibold"
                        style={{ fontFamily: "var(--font-space)" }}>
                    Faith
                  </span>
                </div>
                <p className="text-neutral-600 leading-relaxed">
                  매 주 예배와 새사람의 정체성 말씀을 통해<br />
                  이 시대의 다니엘과 같은 믿음을 가지고<br />
                  자라나고 있습니다.
                </p>
              </div>

              <div className="reveal reveal-delay-3 bg-gradient-to-br from-rose-50 to-rose-100/50 rounded-2xl p-8 border border-neutral-200 shadow-md">
                <p className="text-sm text-neutral-500 italic leading-relaxed text-center">
                  &ldquo;하나님이 다니엘에게 지식을 주시고<br />
                  모든 학문과 지혜에 명철을 주셨으니&rdquo;
                </p>
                <p className="text-xs text-rose-400 text-center mt-3 font-semibold"
                   style={{ fontFamily: "var(--font-space)" }}>
                  다니엘 1:17
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 유튜브 섹션 */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="reveal text-xs tracking-[0.3em] uppercase text-rose-400 mb-8"
             style={{ fontFamily: "var(--font-space)" }}>
            Channel
          </p>
          <h2 className="reveal reveal-delay-1 text-2xl md:text-4xl font-bold mb-12 text-neutral-800"
              style={{ fontFamily: "var(--font-space)" }}>
            다니엘초등부의 이야기를<br />
            <span className="text-neutral-400">영상으로 만나보세요</span>
          </h2>
          <Link
            href="https://www.youtube.com/@kwonhyejeong/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-delay-2 group inline-flex items-center gap-3 border border-neutral-300 hover:border-rose-300 text-neutral-700 px-8 py-4 rounded-full transition-all duration-500 hover:bg-rose-50"
          >
            <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span className="text-sm font-medium tracking-wider"
                  style={{ fontFamily: "var(--font-space)" }}>
              YouTube Channel
            </span>
            <svg className="w-4 h-4 text-neutral-400 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
