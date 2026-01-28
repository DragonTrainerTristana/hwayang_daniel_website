const worshipTeam = [
  { name: "조이플 키즈팀", members: ["권혜정", "안하은"], color: "bg-white" },
  { name: "세션팀", members: ["건반 : 배꽃하얀"], color: "bg-white" },
  { name: "영상/음향", members: ["오승현", "이시훈"], color: "bg-white" },
  { name: "기도용사", members: ["조인표"], color: "bg-white" },
  { name: "사진 및 영상 촬영", members: ["한서영"], color: "bg-white" },
  { name: "예배 준비", members: ["윤성준"], color: "bg-white" },
];

export default function WorshipTeamPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-amber-50">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          다니엘 초등부 예배팀 🎵
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
      </div>
    </div>
  );
}
