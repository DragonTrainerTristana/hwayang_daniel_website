import Image from "next/image";

const worshipTeams = [
  {
    name: "조이플 키즈팀",
    teachers: "지도교사: 권혜정, 안하은",
    description:
      "하나님을 기쁘게 찬양하는 조이플 키즈팀이에요.\n주일 예배에 '율동'으로 예배를 섬겨요",
    image: "/images/예배팀/조이플키즈팀_사진.png",
    icon: "",
  },
  {
    name: "조이플 찬양팀",
    teachers: "지도교사: 권혜정, 안하은",
    description:
      "하나님을 기쁘게 찬양하는 조이플 찬양팀이에요.\n주일 예배에 '찬양'으로 예배를 섬겨요",
    image: "/images/예배팀/조이플찬양팀_사진.png",
    icon: "",
  },
  {
    name: "기도용사",
    teachers: "",
    description:
      "예배 전 중보기도로 예배를 준비해요.\n초등부의 가장 든든한 기도용사들이에요.",
    image: "/images/예배팀/기도용사_사진.png",
    icon: "",
  },
  {
    name: "예배섬김이",
    teachers: "",
    description:
      "예배를 위해 여러 가지 역할로 준비합니다.\n예배 반주, 예배방석 준비, 큐티 도장, 예배 시간 알림이 등",
    image: "/images/예배팀/예배섬김이_사진.jpeg",
    contain: true,
    icon: "🙌",
  },
];

export default function WorshipTeamPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          다니엘 초등부 예배팀
        </h1>
        <p className="text-center text-neutral-500 mb-16">
          다니엘초등부는 어린이들이 하나님을 사랑하는 마음으로 예배를 준비하며
          거룩한 예배자로 섬깁니다.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {worshipTeams.map((team, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
              {team.image ? (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={team.image}
                    alt={team.name}
                    fill
                    className={team.contain ? "object-contain" : "object-cover"}
                  />
                </div>
              ) : (
                <div className="aspect-[16/9] bg-neutral-100" />
              )}
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-800 mb-1">
                  {team.name}
                </h3>
                {team.teachers && (
                  <p className="text-sm text-rose-400 mb-3">{team.teachers}</p>
                )}
                <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
                  {team.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
