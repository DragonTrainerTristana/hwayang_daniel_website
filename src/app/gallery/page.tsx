const photos = [
  { title: "여름성경학교", date: "2024.08", color: "bg-yellow-100" },
  { title: "부활절 행사", date: "2024.04", color: "bg-pink-100" },
  { title: "겨울수련회", date: "2024.01", color: "bg-blue-100" },
  { title: "성탄 행사", date: "2023.12", color: "bg-green-100" },
  { title: "달란트 시장", date: "2023.10", color: "bg-purple-100" },
  { title: "주일 예배", date: "2023.09", color: "bg-orange-100" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          갤러리 📸
        </h1>
        <p className="text-center text-neutral-500 mb-16">
          우리의 소중한 추억들
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`aspect-square rounded-2xl ${photo.color} mb-3 transition-transform group-hover:scale-[1.02]`} />
              <p className="font-semibold">{photo.title}</p>
              <p className="text-xs text-neutral-400">{photo.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-2xl bg-neutral-100">
          <p className="font-semibold mb-2">📁 사진 추가하기</p>
          <p className="text-sm text-neutral-500">
            public/images 폴더에 사진을 넣고 코드를 수정해주세요
          </p>
        </div>
      </div>
    </div>
  );
}
