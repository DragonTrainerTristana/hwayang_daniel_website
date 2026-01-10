(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MinistersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hwayang_Church_Website/hwayang_daniel_website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hwayang_Church_Website/hwayang_daniel_website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hwayang_Church_Website/hwayang_daniel_website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ministers = [
    {
        name: "정지운 전도사님",
        role: "초등부 담당 전도사",
        color: "bg-pink-100",
        image: "/images/사역자들/전도사님.jpg"
    }
];
const teachers = [
    {
        name: "임미선",
        role: "1학년 희락반",
        color: "bg-yellow-100",
        image: "/images/사역자들/희락반.jpg"
    },
    {
        name: "김효건",
        role: "1학년 오래참음반",
        color: "bg-yellow-100",
        image: "/images/사역자들/오래참음반.jpg"
    },
    {
        name: "오승현",
        role: "2학년 화평반",
        color: "bg-green-100",
        image: "/images/사역자들/화평반.jpg"
    },
    {
        name: "조인표",
        role: "3학년 사랑반",
        color: "bg-blue-100",
        image: "/images/사역자들/사랑반.jpg"
    },
    {
        name: "김신미",
        role: "4학년 양선반",
        color: "bg-purple-100",
        image: "/images/사역자들/양선반.jpg"
    },
    {
        name: "배꽃하얀",
        role: "4학년 온유반",
        color: "bg-purple-100",
        image: "/images/사역자들/온유반.jpg"
    },
    {
        name: "안하은",
        role: "5학년 자비반",
        color: "bg-pink-100",
        image: "/images/사역자들/자비반.jpg"
    },
    {
        name: "윤성준",
        role: "6학년 충성반",
        color: "bg-orange-100",
        image: "/images/사역자들/충성반.jpg"
    },
    {
        name: "권혜정",
        role: "6학년 절제반",
        color: "bg-orange-100",
        image: "/images/사역자들/절제반.jpg"
    },
    {
        name: "한서영",
        role: "",
        color: "bg-neutral-100",
        image: "/images/사역자들/한서영.jpg"
    }
];
function ProfileImage({ src, alt, size }) {
    _s();
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (hasError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-white rounded-full"
        }, void 0, false, {
            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
            lineNumber: 32,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: src,
        alt: alt,
        width: size,
        height: size,
        className: "w-full h-full object-cover",
        onError: ()=>setHasError(true)
    }, void 0, false, {
        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(ProfileImage, "0lWSx5YqYPOl7PiOJe/TIAtHv6A=");
_c = ProfileImage;
function MinistersPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pt-24 pb-16 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-extrabold text-center mb-4",
                    children: "사역자들 👋"
                }, void 0, false, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-neutral-500 mb-16",
                    children: "다니엘초등부를 섬기는 선생님들이에요"
                }, void 0, false, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-neutral-400 mb-4",
                            children: "전도사님"
                        }, void 0, false, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        ministers.map((minister, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-8 rounded-3xl ${minister.color} flex items-center gap-6`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 rounded-full overflow-hidden bg-white flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileImage, {
                                            src: minister.image,
                                            alt: minister.name,
                                            size: 96
                                        }, void 0, false, {
                                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-2xl font-bold",
                                                children: minister.name
                                            }, void 0, false, {
                                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-neutral-500 mt-1",
                                                children: minister.role
                                            }, void 0, false, {
                                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-neutral-400 mb-4",
                            children: "선생님들"
                        }, void 0, false, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                            children: teachers.map((teacher, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-6 rounded-2xl ${teacher.color} flex flex-col items-center text-center`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-20 rounded-full overflow-hidden bg-white mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileImage, {
                                                src: teacher.image,
                                                alt: teacher.name,
                                                size: 80
                                            }, void 0, false, {
                                                fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold",
                                            children: [
                                                teacher.name,
                                                " 선생님"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-neutral-500",
                                            children: teacher.role
                                        }, void 0, false, {
                                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-neutral-400 mt-12 text-center",
                    children: "* 사진은 public/images/사역자들/ 폴더에 넣어주세요"
                }, void 0, false, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c1 = MinistersPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProfileImage");
__turbopack_context__.k.register(_c1, "MinistersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=84d2a_Church_Website_hwayang_daniel_website_src_app_ministers_page_tsx_28b8c9ed._.js.map