module.exports = [
"[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hwayang_Church_Website/hwayang_daniel_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hwayang_Church_Website/hwayang_daniel_website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hwayang_Church_Website/hwayang_daniel_website/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// 배경 이미지들
const backgroundImages = [
    "/images/메인사진/메인_1.jpg",
    "/images/메인사진/메인_2.jpg",
    "/images/메인사진/메인_3.jpg"
];
// 공지사항 카드
const notices = [
    {
        title: "1월 로마서 통독",
        image: "/images/공지사진/공지사항_1번/1번_로마서.jpeg",
        images: [
            "/images/공지사진/공지사항_1번/1번_로마서.jpeg",
            "/images/공지사진/공지사항_1번/2번_로마서.jpeg"
        ],
        description: "📖기적을 이루는 1월 성경통독🎀\n\n⏰돌아오는 주일, 로마서 성경통독 표를 나눠줍니다.\n\n- 5독, 10독, 20독, 30독 이상 챌린지에 함께 도전해요!💪",
        color: "bg-pink-100"
    },
    {
        title: "주일성수 승리!",
        image: "/images/공지사진/공지사항_2번/공지사항2_1.jpeg",
        images: [
            "/images/공지사진/공지사항_2번/공지사항2_1.jpeg",
            "/images/공지사진/공지사항_2번/공지사항2_2.jpeg"
        ],
        description: "샬롬(스타) 일어나 빛을 발하라!✨\n\n예수님의 부흥을 이뤄가는 주인공! 다니엘초등부 입니다✨✨",
        color: "bg-blue-100"
    },
    {
        title: "공지사항 3",
        image: "",
        images: [],
        description: "",
        color: "bg-green-100"
    }
];
function Home() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bgIndex, setBgIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedNotice, setSelectedNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // 배경 이미지 자동 전환 (5초 간격)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setBgIndex((prev)=>(prev + 1) % backgroundImages.length);
        }, 5000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-screen overflow-hidden",
        children: [
            backgroundImages.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 bg-cover transition-opacity duration-1000 ${index === bgIndex ? "opacity-100" : "opacity-0"}`,
                    style: {
                        backgroundImage: `url(${img})`,
                        backgroundPosition: 'center 80%'
                    }
                }, index, false, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
            }, void 0, false, {
                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 pt-24 px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs tracking-widest text-white/70 mb-2",
                        children: "화양교회"
                    }, void 0, false, {
                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold tracking-tight text-white",
                        style: {
                            fontFamily: 'var(--font-gowun), sans-serif'
                        },
                        children: "다니엘초등부"
                    }, void 0, false, {
                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-0 right-0 z-20 bg-[#fafafa] rounded-t-3xl shadow-2xl transition-transform duration-500 ease-out ${isOpen ? "translate-y-0" : "translate-y-[calc(100%-56px)]"}`,
                style: {
                    height: "70vh"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "w-full py-3 flex flex-col items-center cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-1 bg-neutral-300 rounded-full mb-1.5"
                            }, void 0, false, {
                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-neutral-400 flex items-center gap-1",
                                children: [
                                    "공지사항",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `transition-transform text-[10px] ${isOpen ? "rotate-180" : ""}`,
                                        children: "▲"
                                    }, void 0, false, {
                                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 pb-10 overflow-auto",
                        style: {
                            height: "calc(100% - 60px)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-4",
                                children: notices.map((notice, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group",
                                        onClick: ()=>setSelectedNotice(notice),
                                        children: [
                                            notice.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-28 relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: notice.image,
                                                    alt: notice.title,
                                                    fill: true,
                                                    className: "object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-28 ${notice.color}`
                                            }, void 0, false, {
                                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-neutral-800",
                                                    children: notice.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            selectedNotice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4",
                onClick: ()=>setSelectedNotice(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-hidden",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 border-b",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-bold text-lg",
                                    children: selectedNotice.title
                                }, void 0, false, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedNotice(null),
                                    className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 overflow-auto",
                            style: {
                                maxHeight: "calc(85vh - 60px)"
                            },
                            children: [
                                selectedNotice.images.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: selectedNotice.images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: img,
                                                alt: `${selectedNotice.title} ${idx + 1}`,
                                                fill: true,
                                                className: "object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 23
                                            }, this)
                                        }, idx, false, {
                                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-48 rounded-2xl ${selectedNotice.color} flex items-center justify-center`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-neutral-500",
                                        children: "이미지가 없습니다"
                                    }, void 0, false, {
                                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this),
                                selectedNotice.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-4 bg-neutral-50 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-neutral-700 whitespace-pre-line leading-relaxed",
                                        children: selectedNotice.description
                                    }, void 0, false, {
                                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Hwayang_Church_Website_hwayang_daniel_website_src_app_page_tsx_0323953b._.js.map