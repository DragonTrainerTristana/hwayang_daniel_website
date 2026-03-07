"use client";

import { useState } from "react";
import Image from "next/image";

const notices = [
  {
    title: "3월 정체성 선포 캘린더",
    image: "/images/공지사진/공지_1번/공지1_1.jpeg",
    images: [
      "/images/공지사진/공지_1번/공지1_1.jpeg",
      "/images/공지사진/공지_1번/공지1_2.jpeg",
      "/images/공지사진/공지_1번/공지1_3.jpeg",
    ],
    description: "",
    color: "bg-amber-100",
  },
  {
    title: "다니엘 예배팀 모집",
    image: "/images/공지사진/공지2/공지2_1.jpeg",
    images: [
      "/images/공지사진/공지2/공지2_1.jpeg",
      "/images/공지사진/공지2/공지2_2.jpeg",
    ],
    description: "",
    color: "bg-amber-100",
  },
  {
    title: "다니엘 초등부 기도통장",
    image: "/images/공지사진/공지3/공지3_1.jpeg",
    images: [
      "/images/공지사진/공지3/공지3_1.jpeg",
      "/images/공지사진/공지3/공지3_2.jpeg",
      "/images/공지사진/공지3/공지3_3.jpeg",
    ],
    description: "",
    color: "bg-amber-100",
  },
];

type Notice = (typeof notices)[0];

export default function AnnouncementsPage() {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-amber-50">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-4">공지사항</h1>
        <p className="text-center text-neutral-500 mb-12">
          다니엘초등부 소식을 전해드립니다
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group"
              onClick={() => setSelectedNotice(notice)}
            >
              {notice.image ? (
                <div className="h-40 relative">
                  <Image
                    src={notice.image}
                    alt={notice.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`h-40 ${notice.color} flex items-center justify-center`}
                >
                  <svg
                    className="w-10 h-10 text-amber-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                </div>
              )}
              <div className="p-4">
                <h3 className="font-bold text-neutral-800">{notice.title}</h3>
                {notice.description && (
                  <p className="text-sm text-neutral-500 mt-1 line-clamp-2">
                    {notice.description}
                  </p>
                )}
              </div>
            </div>
          ))}
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
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* 모달 내용 */}
            <div
              className="p-4 overflow-auto"
              style={{ maxHeight: "calc(85vh - 60px)" }}
            >
              {selectedNotice.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {selectedNotice.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100"
                    >
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
                <div
                  className={`h-48 rounded-2xl ${selectedNotice.color} flex items-center justify-center`}
                >
                  <p className="text-neutral-500">이미지가 없습니다</p>
                </div>
              )}

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
