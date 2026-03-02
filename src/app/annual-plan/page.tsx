const months = [
  {
    month: "2월",
    items: [
      "어린이 바나바",
      "기선제압 교사 릴레이기도",
      "진급예배(1학년)",
      "교사세미나(수요예배)",
      "2026 다니엘예배팀 모집",
      "사순절",
      "다니엘예배팀 교육",
    ],
  },
  {
    month: "3월",
    items: [
      "다니엘 예배팀 임명식",
      "1기도통장운동",
      "새학기 정체성 선포캘린더",
      "종려주일",
      "고난주간 & 고난주간 특새",
    ],
  },
  {
    month: "4월",
    items: [
      "고난주간",
      "부활주일&노방전도",
      "반별 교제의 시간(예정)",
      "성동광진지방 어린이큰잔치",
    ],
  },
  {
    month: "5월",
    items: [
      "에바다 가정예배",
      "어린이주일&천국잔치",
      "어버이주일",
    ],
  },
  {
    month: "6월",
    items: [
      "미니성경골든벨",
      "리딩지저스 모집",
      "여름성경학교 교사강습회 및 릴레이기도",
    ],
  },
  {
    month: "7월",
    items: [
      "맥추감사주일",
      "여름성경학교 준비기간",
      "전도의 달",
    ],
  },
  {
    month: "8월",
    items: [
      "교회학교 부모 합심기도회",
      "여름성경학교",
      "2026 성동광진지방 성경골든벨",
    ],
    note: "*구약(여호수아, 에스라, 느헤미야)\n*신약(마태복음, 에베소서, 빌립보서)",
  },
  {
    month: "9월",
    items: [
      "반별 교제의 시간",
      "서울연회 성경골든벨",
      "하반기 교사대학(예정)",
    ],
  },
  {
    month: "10월",
    items: [
      "다바르 말씀암송대회",
      "전국 성경골든벨",
      "가을특새",
    ],
  },
  {
    month: "11월",
    items: [
      "친구초청예배&달란트잔치",
      "추수감사주일",
    ],
  },
  {
    month: "12월",
    items: [
      "성탄발표 준비기간",
      "성탄절&크리스마스축제",
      "송구영신예배",
    ],
  },
  {
    month: "2027년 1월",
    items: [
      "2026 시상식",
      "졸업예배",
    ],
  },
];

export default function AnnualPlanPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-4">연간계획</h1>
        <p className="text-center text-neutral-500 mb-12">
          2026년 다니엘초등부 연간 계획
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {months.map((data, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col border border-neutral-200 shadow-md"
            >
              <h3 className="font-bold text-amber-600 text-lg mb-3">
                {data.month}
              </h3>
              <ul className="space-y-1.5 flex-1">
                {data.items.map((item, i) => (
                  <li key={i} className="text-sm text-neutral-700 flex items-start gap-2">
                    <span className="text-amber-400 mt-1 text-[8px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>
              {data.note && (
                <p className="text-xs text-neutral-400 mt-3 whitespace-pre-line leading-relaxed">
                  {data.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
