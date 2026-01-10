"use client";

import { useState, useEffect } from "react";

// 배경 이미지
const backgroundImage = "/images/메인사진/메인_1.jpg";

// 공지사항 카드 (실제 내용으로 교체하세요)
const notices = [
  {
    title: "성탄절 예배 안내",
    description: "12월 25일 성탄절 특별 예배가 있습니다. 모두 함께 참여해주세요!",
    color: "bg-pink-100",
  },
  {
    title: "겨울수련회 신청",
    description: "1월 겨울수련회 신청을 받고 있습니다. 마감일을 확인해주세요.",
    color: "bg-blue-100",
  },
  {
    title: "새친구 초대",
    description: "친구를 초대하면 특별 달란트를 드려요! 많은 참여 부탁드립니다.",
    color: "bg-green-100",
  },
  {
    title: "달란트 시장 오픈",
    description: "이번 달 달란트 시장이 열립니다. 달란트를 모아오세요!",
    color: "bg-yellow-100",
  },
  {
    title: "부모님 간담회",
    description: "다음 주 부모님 간담회가 예정되어 있습니다.",
    color: "bg-purple-100",
  },
  {
    title: "사진 업로드 완료",
    description: "여름성경학교 사진이 갤러리에 업로드되었습니다.",
    color: "bg-orange-100",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const totalPages = Math.ceil(notices.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 10000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const currentNotices = notices.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image - 전체 화면 */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center 80%' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Title */}
      <div className="relative z-10 pt-24 px-6 text-center">
        <p className="text-xs tracking-widest text-white/70 mb-2">
          화양교회
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-gowun), sans-serif' }}>
          다니엘초등부
        </h1>
      </div>

      {/* 공지사항 Bottom Sheet */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 bg-[#fafafa] rounded-t-3xl shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-[calc(100%-56px)]"
        }`}
        style={{ height: "70vh" }}
      >
        {/* Handle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-3 flex flex-col items-center cursor-pointer"
        >
          <div className="w-10 h-1 bg-neutral-300 rounded-full mb-1.5" />
          <p className="text-xs text-neutral-400 flex items-center gap-1">
            공지사항
            <span className={`transition-transform text-[10px] ${isOpen ? "rotate-180" : ""}`}>
              ▲
            </span>
          </p>
        </button>

        {/* Content */}
        <div className="px-6 pb-10 overflow-auto" style={{ height: "calc(100% - 60px)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              {currentNotices.map((notice, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all animate-fade-in cursor-pointer group"
                >
                  <div className={`h-28 ${notice.color}`} />
                  <div className="p-4">
                    <h3 className="font-bold text-neutral-800 mb-1">{notice.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                      {notice.description}
                    </p>
                    <p className="text-xs text-neutral-400 mt-3 group-hover:text-neutral-600 transition-colors">
                      Read More →
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-neutral-800 w-4"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
