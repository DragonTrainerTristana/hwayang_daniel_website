const activities = [
  {
    title: "주일 예배",
    description: "매 주 주일오전 11:20",
    icon: "🙏",
  },
  {
    title: "장소",
    description: "화양교회 4층 믿음실 (지하철 어린이대공원역 5번출구)",
    icon: "📍",
  },
  {
    title: "큐티생활",
    description:
      "1~2학년: 큐티아이 / 3~4학년: 저학년용 / 5~6학년: 고학년용\n확인도장 + 2달 시상",
    icon: "📖",
  },
  {
    title: "공과 공부",
    description: "예배 후 반별로",
    icon: "✏️",
  },
  {
    title: "새사람의 DNA 말씀 활동",
    description: "매 월",
    icon: "🧬",
  },
  {
    title: "정체성 선포운동",
    description: "하나님의 DNA를 품은 자녀로서의 정체성을 선포합니다",
    icon: "📣",
  },
  {
    title: "생일파티",
    description: "매 월",
    icon: "🎂",
  },
  {
    title: "리딩지저스",
    description: "하반기 성경통독",
    icon: "📚",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          예배 및 활동
        </h1>
        <p className="text-center text-neutral-500 mb-12">
          다니엘초등부의 예배와 활동을 소개합니다
        </p>

        {/* 예배 정보 */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-neutral-200 shadow-md">
          <h2 className="text-xl font-bold text-neutral-800 mb-4 text-center">
            예배 안내
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-amber-50 rounded-xl p-4 text-center flex-1">
              <p className="text-sm text-neutral-400 mb-1">시간</p>
              <p className="font-bold text-neutral-800">매 주 주일오전 11:20</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 text-center flex-1">
              <p className="text-sm text-neutral-400 mb-1">장소</p>
              <p className="font-bold text-neutral-800">
                화양교회 4층 믿음실
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                지하철 어린이대공원역 5번출구
              </p>
            </div>
          </div>
        </div>

        {/* 활동 카드 */}
        <div className="grid md:grid-cols-2 gap-4">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{activity.icon}</span>
                <div>
                  <h3 className="font-bold text-neutral-800">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1 whitespace-pre-line">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
