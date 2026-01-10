(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hwayang_Church_Website/hwayang_daniel_website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hwayang_Church_Website/hwayang_daniel_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// 배경 이미지들
const backgroundImages = [
    "/images/메인사진/메인_1.jpg",
    "/images/메인사진/메인_2.jpg",
    "/images/메인사진/메인_3.jpg"
];
// 공지사항 카드 (실제 내용으로 교체하세요)
const notices = [
    {
        title: "성탄절 예배 안내",
        description: "12월 25일 성탄절 특별 예배가 있습니다. 모두 함께 참여해주세요!",
        color: "bg-pink-100"
    },
    {
        title: "겨울수련회 신청",
        description: "1월 겨울수련회 신청을 받고 있습니다. 마감일을 확인해주세요.",
        color: "bg-blue-100"
    },
    {
        title: "새친구 초대",
        description: "친구를 초대하면 특별 달란트를 드려요! 많은 참여 부탁드립니다.",
        color: "bg-green-100"
    },
    {
        title: "달란트 시장 오픈",
        description: "이번 달 달란트 시장이 열립니다. 달란트를 모아오세요!",
        color: "bg-yellow-100"
    },
    {
        title: "부모님 간담회",
        description: "다음 주 부모님 간담회가 예정되어 있습니다.",
        color: "bg-purple-100"
    },
    {
        title: "사진 업로드 완료",
        description: "여름성경학교 사진이 갤러리에 업로드되었습니다.",
        color: "bg-orange-100"
    }
];
function Home() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bgIndex, setBgIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const totalPages = Math.ceil(notices.length / 3);
    // 공지사항 자동 전환
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const interval = setInterval({
                "Home.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "Home.useEffect.interval": (prev)=>(prev + 1) % totalPages
                    }["Home.useEffect.interval"]);
                }
            }["Home.useEffect.interval"], 10000);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        totalPages
    ]);
    // 배경 이미지 자동 전환 (5초 간격)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const interval = setInterval({
                "Home.useEffect.interval": ()=>{
                    setBgIndex({
                        "Home.useEffect.interval": (prev)=>(prev + 1) % backgroundImages.length
                    }["Home.useEffect.interval"]);
                }
            }["Home.useEffect.interval"], 5000);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const currentNotices = notices.slice(currentIndex * 3, currentIndex * 3 + 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-screen overflow-hidden",
        children: [
            backgroundImages.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 bg-cover transition-opacity duration-1000 ${index === bgIndex ? "opacity-100" : "opacity-0"}`,
                    style: {
                        backgroundImage: `url(${img})`,
                        backgroundPosition: 'center 80%'
                    }
                }, index, false, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
            }, void 0, false, {
                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 pt-24 px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs tracking-widest text-white/70 mb-2",
                        children: "화양교회"
                    }, void 0, false, {
                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold tracking-tight text-white",
                        style: {
                            fontFamily: 'var(--font-gowun), sans-serif'
                        },
                        children: "다니엘초등부"
                    }, void 0, false, {
                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-0 right-0 z-20 bg-[#fafafa] rounded-t-3xl shadow-2xl transition-transform duration-500 ease-out ${isOpen ? "translate-y-0" : "translate-y-[calc(100%-56px)]"}`,
                style: {
                    height: "70vh"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "w-full py-3 flex flex-col items-center cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-1 bg-neutral-300 rounded-full mb-1.5"
                            }, void 0, false, {
                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-neutral-400 flex items-center gap-1",
                                children: [
                                    "공지사항",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `transition-transform text-[10px] ${isOpen ? "rotate-180" : ""}`,
                                        children: "▲"
                                    }, void 0, false, {
                                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 pb-10 overflow-auto",
                        style: {
                            height: "calc(100% - 60px)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-5xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-3 gap-4",
                                    children: currentNotices.map((notice, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all animate-fade-in cursor-pointer group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `h-28 ${notice.color}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-neutral-800 mb-1",
                                                            children: notice.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-neutral-500 leading-relaxed line-clamp-2",
                                                            children: notice.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-neutral-400 mt-3 group-hover:text-neutral-600 transition-colors",
                                                            children: "Read More →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, `${currentIndex}-${index}`, true, {
                                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center gap-2 mt-6",
                                    children: Array.from({
                                        length: totalPages
                                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentIndex(index),
                                            className: `w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-neutral-800 w-4" : "bg-neutral-300 hover:bg-neutral-400"}`
                                        }, index, false, {
                                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Home, "IK7j6NXOMCgW144cYOkbDkJrZgE=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Hwayang_Church_Website_hwayang_daniel_website_src_app_page_tsx_79e9bd6f._.js.map