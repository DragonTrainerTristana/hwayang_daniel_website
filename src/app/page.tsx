"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// 배경 이미지들
const backgroundImages = [
  "/images/메인사진/메인_1.jpg",
  "/images/메인사진/메인_2.jpg",
  "/images/메인사진/메인_3.jpg",
];

// 공지사항 카드
const notices = [
  {
    title: "1월 로마서 통독",
    image: "/images/공지사진/공지사항_1번/1번_로마서.jpeg",
    images: [
      "/images/공지사진/공지사항_1번/1번_로마서.jpeg",
      "/images/공지사진/공지사항_1번/2번_로마서.jpeg",
    ],
    description: "📖기적을 이루는 1월 성경통독🎀\n\n⏰돌아오는 주일, 로마서 성경통독 표를 나눠줍니다.\n\n- 5독, 10독, 20독, 30독 이상 챌린지에 함께 도전해요!💪",
    color: "bg-amber-100",
  },
  {
    title: "주일성수 승리!",
    image: "/images/공지사진/공지사항_2번/공지사항2_1.jpeg",
    images: [
      "/images/공지사진/공지사항_2번/공지사항2_1.jpeg",
      "/images/공지사진/공지사항_2번/공지사항2_2.jpeg",
    ],
    description: "샬롬(스타) 일어나 빛을 발하라!✨\n\n예수님의 부흥을 이뤄가는 주인공! 다니엘초등부 입니다✨✨",
    color: "bg-amber-100",
  },
  {
    title: "공지사항 3",
    image: "",
    images: [],
    description: "",
    color: "bg-amber-100",
  },
];

type Notice = typeof notices[0];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  // 배경 이미지 자동 전환 (5초 간격)
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images - 슬라이드쇼 */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover transition-opacity duration-1000 ${
            index === bgIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center 80%' }}
        />
      ))}
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
        className={`absolute bottom-0 left-0 right-0 z-20 bg-amber-50 rounded-t-3xl shadow-2xl transition-transform duration-500 ease-out ${
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
              {notices.map((notice, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
                  onClick={() => setSelectedNotice(notice)}
                >
                  {notice.image ? (
                    <div className="h-28 relative">
                      <Image
                        src={notice.image}
                        alt={notice.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`h-28 ${notice.color}`} />
                  )}
                  <div className="p-4">
                    <h3 className="font-bold text-neutral-800">{notice.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 공지사항 상세 모달 */}
      {selectedNotice && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedNotice(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 모달 헤더 */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-bold text-lg">{selectedNotice.title}</h2>
              <button
                onClick={() => setSelectedNotice(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 모달 내용 - 이미지들 */}
            <div className="p-4 overflow-auto" style={{ maxHeight: "calc(85vh - 60px)" }}>
              {selectedNotice.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {selectedNotice.images.map((img, idx) => (
                    <div key={idx} className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100">
                      <Image
                        src={img}
                        alt={`${selectedNotice.title} ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className={`h-48 rounded-2xl ${selectedNotice.color} flex items-center justify-center`}>
                  <p className="text-neutral-500">이미지가 없습니다</p>
                </div>
              )}

              {/* 설명 글 */}
              {selectedNotice.description && (
                <div className="mt-4 p-4 bg-neutral-50 rounded-xl">
                  <p className="text-neutral-700 whitespace-pre-line leading-relaxed">
                    {selectedNotice.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
