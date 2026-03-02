"use client";

import Image from "next/image";
import { useState } from "react";

const minister = {
  name: "정지운",
  role: "담당 전도사",
  image: "/images/선생님들/정지운전도사님_사진.png",
};

const teachers = [
  { name: "한서영", role: "1학년 희락반", icon: "☺️", image: "/images/선생님들/한서영_사진.png" },
  { name: "김신미", role: "2학년 화평반", icon: "🕊️", image: "/images/선생님들/김신미_사진.jpeg" },
  { name: "안하은", role: "2학년 자비반", icon: "💝", image: "/images/선생님들/안하은_사진.png" },
  { name: "이진석", role: "3학년 온유반", icon: "🌸", image: "/images/선생님들/이진석_사진.jpeg" },
  { name: "배꽃하얀", role: "4학년 사랑반", icon: "💕", image: "/images/선생님들/배꽃하얀_사진.jpeg" },
  { name: "오승현", role: "5학년 절제반", icon: "💎", image: "/images/선생님들/오승현_사진.png" },
  { name: "권혜정", role: "5학년 충성반", icon: "⭐", image: "/images/선생님들/권혜정_사진.png" },
  { name: "박은주", role: "6학년 양선반", icon: "✨", image: "/images/선생님들/박은주_사진.png" },
  { name: "이시훈", role: "6학년 양선반", icon: "✨", image: "/images/선생님들/이시훈_사진.jpeg" },
  { name: "박영실", role: "", icon: "", image: "" },
];

function ProfileImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return <div className="w-full h-full bg-gray-100" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setHasError(true)}
    />
  );
}

export default function MinistersPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-5">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Ministers</h1>
          <p className="text-gray-500 text-sm mt-1">다니엘초등부 선생님 <span className="text-orange-300">✿</span></p>
        </div>

        {/* 전도사님 */}
        <div className="mb-8">
          <p className="text-sm text-gray-900 font-medium mb-3">전도사님</p>
          <div className="bg-white rounded-xl p-3 border-2 border-pink-200 w-fit">
            <div className="w-40 h-40 rounded-lg overflow-hidden relative bg-gray-100 mb-2">
              <ProfileImage src={minister.image} alt={minister.name} />
            </div>
            <p className="font-bold text-gray-900 text-sm">{minister.name} 전도사님</p>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-200 mb-8" />

        {/* 선생님 */}
        <p className="text-sm text-gray-900 font-medium mb-3">선생님</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-xl p-2.5 border-2 border-amber-100">
              <div className="aspect-square rounded-lg overflow-hidden relative bg-gray-100 mb-2">
                <ProfileImage src={teacher.image} alt={teacher.name} />
              </div>
              <p className="font-semibold text-gray-900 text-xs">{teacher.name}</p>
              {teacher.role && (
                <p className="text-gray-400 text-[10px] mt-0.5">{teacher.role} {teacher.icon}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
