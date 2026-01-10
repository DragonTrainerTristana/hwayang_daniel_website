"use client";

import Image from "next/image";
import { useState } from "react";

const ministers = [
  {
    name: "정지운 전도사님",
    role: "초등부 담당 전도사",
    color: "bg-pink-100",
    image: "/images/사역자들/정지운_전도사님.png",
  },
];

const teachers = [
  { name: "임미선", role: "1학년 희락반", color: "bg-yellow-100", image: "/images/사역자들/희락반.jpg" },
  { name: "김효건", role: "1학년 오래참음반", color: "bg-yellow-100", image: "/images/사역자들/오래참음반.jpg" },
  { name: "오승현", role: "2학년 화평반", color: "bg-green-100", image: "/images/사역자들/오승현_사진.png" },
  { name: "조인표", role: "3학년 사랑반", color: "bg-blue-100", image: "/images/사역자들/조인표_사진.png" },
  { name: "김신미", role: "4학년 양선반", color: "bg-purple-100", image: "/images/사역자들/양선반.jpg" },
  { name: "배꽃하얀", role: "4학년 온유반", color: "bg-purple-100", image: "/images/사역자들/온유반.jpg" },
  { name: "안하은", role: "5학년 자비반", color: "bg-pink-100", image: "/images/사역자들/자비반.jpg" },
  { name: "윤성준", role: "6학년 충성반", color: "bg-orange-100", image: "/images/사역자들/충성반.jpg" },
  { name: "권혜정", role: "6학년 절제반", color: "bg-orange-100", image: "/images/사역자들/절제반.jpg" },
  { name: "한서영", role: "", color: "bg-neutral-100", image: "/images/사역자들/한서영.jpg" },
];

function ProfileImage({ src, alt, size }: { src: string; alt: string; size: number }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div className="w-full h-full bg-white rounded-full" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="w-full h-full object-cover"
      onError={() => setHasError(true)}
    />
  );
}

export default function MinistersPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          사역자들 👋
        </h1>
        <p className="text-center text-neutral-500 mb-16">
          다니엘초등부를 섬기는 선생님들이에요
        </p>

        {/* 담당 전도사 */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-neutral-400 mb-4">전도사님</p>
          {ministers.map((minister, index) => (
            <div key={index} className={`p-8 rounded-3xl ${minister.color} flex items-center gap-6`}>
              <div className="w-24 h-24 rounded-full overflow-hidden bg-white flex-shrink-0">
                <ProfileImage src={minister.image} alt={minister.name} size={96} />
              </div>
              <div>
                <p className="text-2xl font-bold">{minister.name}</p>
                <p className="text-neutral-500 mt-1">{minister.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 선생님들 */}
        <div>
          <p className="text-sm font-semibold text-neutral-400 mb-4">선생님들</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {teachers.map((teacher, index) => (
              <div key={index} className={`p-6 rounded-2xl ${teacher.color} flex flex-col items-center text-center`}>
                <div className="w-20 h-20 rounded-full overflow-hidden bg-white mb-3">
                  <ProfileImage src={teacher.image} alt={teacher.name} size={80} />
                </div>
                <p className="font-bold">{teacher.name} 선생님</p>
                <p className="text-sm text-neutral-500">{teacher.role}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-neutral-400 mt-12 text-center">
          * 사진은 public/images/사역자들/ 폴더에 넣어주세요
        </p>
      </div>
    </div>
  );
}
