const activities = [
  { title: "주일 예배", when: "매주 주일 오전 11시", color: "bg-pink-100" },
  { title: "공과 공부", when: "예배 후", color: "bg-blue-100" },
  { title: "여름성경학교", when: "8월", color: "bg-yellow-100" },
  { title: "달란트 시장", when: "분기별", color: "bg-purple-100" },
  { title: "생일 파티", when: "매월", color: "bg-orange-100" },
];

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          활동 🎈
        </h1>
        <p className="text-center text-neutral-500 mb-16">
          다니엘초등부에서 하는 재미있는 활동들
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity, index) => (
            <div key={index} className={`p-6 rounded-2xl ${activity.color}`}>
              <p className="font-bold">{activity.title}</p>
              <p className="text-sm text-neutral-500 mt-1">{activity.when}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-sm font-semibold text-neutral-400 mb-4 text-center">
            연간 일정
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {["4월 부활절", "8월 여름성경학교", "12월 성탄절"].map((event, i) => (
              <span key={i} className="px-4 py-2 bg-neutral-100 rounded-full text-sm">
                {event}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xs text-neutral-400 mt-12 text-center">
          * 실제 정보로 업데이트해주세요
        </p>
      </div>
    </div>
  );
}
