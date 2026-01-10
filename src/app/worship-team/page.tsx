const worshipTeam = [
  { name: "찬양 인도", members: ["김OO", "이OO"], color: "bg-pink-100" },
  { name: "건반", members: ["박OO"], color: "bg-blue-100" },
  { name: "기타", members: ["최OO"], color: "bg-green-100" },
  { name: "드럼", members: ["정OO"], color: "bg-yellow-100" },
  { name: "영상/음향", members: ["강OO", "조OO"], color: "bg-purple-100" },
];

export default function WorshipTeamPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          예배팀 🎵
        </h1>
        <p className="text-center text-neutral-500 mb-16">
          찬양으로 예배를 이끄는 팀이에요
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {worshipTeam.map((team, index) => (
            <div key={index} className={`p-6 rounded-2xl ${team.color}`}>
              <p className="font-bold mb-3">{team.name}</p>
              <div className="flex flex-wrap gap-2">
                {team.members.map((member, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-white/60 px-3 py-1 rounded-full"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-neutral-100 text-center">
          <p className="font-semibold">⏰ 찬양 시간</p>
          <p className="text-sm text-neutral-500 mt-1">
            매주 주일 예배 전 10분
          </p>
        </div>

        <p className="text-xs text-neutral-400 mt-12 text-center">
          * 실제 정보로 업데이트해주세요
        </p>
      </div>
    </div>
  );
}
