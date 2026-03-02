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
const minister = {
    name: "정지운",
    role: "담당 전도사",
    image: "/images/선생님들/정지운전도사님_사진.png"
};
const teachers = [
    {
        name: "한서영",
        role: "1학년 희락반",
        icon: "☺️",
        image: "/images/선생님들/한서영_사진.png"
    },
    {
        name: "김신미",
        role: "2학년 화평반",
        icon: "🕊️",
        image: "/images/선생님들/김신미_사진.jpeg"
    },
    {
        name: "안하은",
        role: "2학년 자비반",
        icon: "💝",
        image: "/images/선생님들/안하은_사진.png"
    },
    {
        name: "이진석",
        role: "3학년 온유반",
        icon: "🌸",
        image: "/images/선생님들/이진석_사진.jpeg"
    },
    {
        name: "배꽃하얀",
        role: "4학년 사랑반",
        icon: "💕",
        image: "/images/선생님들/배꽃하얀_사진.jpeg"
    },
    {
        name: "오승현",
        role: "5학년 절제반",
        icon: "💎",
        image: "/images/선생님들/오승현_사진.png"
    },
    {
        name: "권혜정",
        role: "5학년 충성반",
        icon: "⭐",
        image: "/images/선생님들/권혜정_사진.png"
    },
    {
        name: "박은주",
        role: "6학년 양선반",
        icon: "✨",
        image: "/images/선생님들/박은주_사진.png"
    },
    {
        name: "이시훈",
        role: "6학년 양선반",
        icon: "✨",
        image: "/images/선생님들/이시훈_사진.jpeg"
    },
    {
        name: "박영실",
        role: "",
        icon: "",
        image: ""
    }
];
function ProfileImage({ src, alt }) {
    _s();
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!src || hasError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-gray-100"
        }, void 0, false, {
            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
            lineNumber: 29,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: src,
        alt: alt,
        fill: true,
        className: "object-cover",
        onError: ()=>setHasError(true)
    }, void 0, false, {
        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ProfileImage, "0lWSx5YqYPOl7PiOJe/TIAtHv6A=");
_c = ProfileImage;
function MinistersPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 pt-24 pb-16 px-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-900",
                            children: "Ministers"
                        }, void 0, false, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm mt-1",
                            children: [
                                "다니엘초등부 선생님 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-orange-300",
                                    children: "✿"
                                }, void 0, false, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 64
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-900 font-medium mb-3",
                            children: "전도사님"
                        }, void 0, false, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-3 border-2 border-pink-200 w-fit",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-40 h-40 rounded-lg overflow-hidden relative bg-gray-100 mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileImage, {
                                        src: minister.image,
                                        alt: minister.name
                                    }, void 0, false, {
                                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-gray-900 text-sm",
                                    children: [
                                        minister.name,
                                        " 전도사님"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-200 mb-8"
                }, void 0, false, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-900 font-medium mb-3",
                    children: "선생님"
                }, void 0, false, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 sm:grid-cols-4 gap-3",
                    children: teachers.map((teacher, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-2.5 border-2 border-amber-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-square rounded-lg overflow-hidden relative bg-gray-100 mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileImage, {
                                        src: teacher.image,
                                        alt: teacher.name
                                    }, void 0, false, {
                                        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-gray-900 text-xs",
                                    children: teacher.name
                                }, void 0, false, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                teacher.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hwayang_Church_Website$2f$hwayang_daniel_website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-[10px] mt-0.5",
                                    children: [
                                        teacher.role,
                                        " ",
                                        teacher.icon
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Hwayang_Church_Website/hwayang_daniel_website/src/app/ministers/page.tsx",
        lineNumber: 45,
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