const steps = [
  {
    week: "1주",
    title: "새가족 등록",
    description: "전도사님과 만남",
  },
  {
    week: "2주",
    title: "새가족 반",
    description: "새가족 반에서 함께 예배드려요",
  },
  {
    week: "3주",
    title: "반 친구들과 만남",
    description: "배정된 반에서 친구들과 만나요",
  },
  {
    week: "4주",
    title: "새가족 정착 축복의 시간",
    description: "임명장과 축복 선물",
  },
];

export default function NewFamilyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-4">새가족</h1>
        <p className="text-center text-neutral-500 mb-12">
          다니엘초등부에 오신 것을 환영합니다
        </p>

        {/* 4주 과정 타임라인 */}
        <div className="bg-white rounded-2xl p-8 mb-8 border border-neutral-200 shadow-md">
          <h2 className="text-xl font-bold text-neutral-800 mb-8 text-center">
            새가족 4주 과정
          </h2>

          <div className="relative">
            {/* 타임라인 세로선 */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-amber-200 hidden md:block" />

            <div className="flex flex-col gap-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 md:gap-6">
                  {/* 주차 원형 */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.week}
                  </div>

                  {/* 내용 */}
                  <div className="bg-amber-50 rounded-xl p-4 flex-1">
                    <h3 className="font-bold text-neutral-800">{step.title}</h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 안내 문구 */}
        <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-md">
          <p className="text-sm text-neutral-500 leading-relaxed">
            *초등부 예배안내가 공유되는 부모님 단톡방은 새가족 정착 시,
            담임교사를 통해 초대됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
