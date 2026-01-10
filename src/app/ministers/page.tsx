const ministers = [
  {
    name: "김OO 전도사님",
    role: "담당 전도사",
    color: "bg-pink-100",
  },
];

const teachers = [
  { name: "이OO", role: "1학년", color: "bg-yellow-100" },
  { name: "박OO", role: "2학년", color: "bg-green-100" },
  { name: "최OO", role: "3학년", color: "bg-blue-100" },
  { name: "정OO", role: "4학년", color: "bg-purple-100" },
  { name: "강OO", role: "5학년", color: "bg-pink-100" },
  { name: "조OO", role: "6학년", color: "bg-orange-100" },
];

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
            <div key={index} className={`p-8 rounded-3xl ${minister.color}`}>
              <p className="text-2xl font-bold">{minister.name}</p>
              <p className="text-neutral-500 mt-1">{minister.role}</p>
            </div>
          ))}
        </div>

        {/* 선생님들 */}
        <div>
          <p className="text-sm font-semibold text-neutral-400 mb-4">선생님들</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {teachers.map((teacher, index) => (
              <div key={index} className={`p-6 rounded-2xl ${teacher.color}`}>
                <p className="font-bold">{teacher.name} 선생님</p>
                <p className="text-sm text-neutral-500">{teacher.role}</p>
              </div>
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
