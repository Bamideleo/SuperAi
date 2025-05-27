"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Resources_js_app_pages_test_TestWelcome_jsx"],{

/***/ "./Resources/js/app/components/ChatbotThreeWelcomePreview.jsx":
/*!********************************************************************!*\
  !*** ./Resources/js/app/components/ChatbotThreeWelcomePreview.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_embed_chatbot_style_three_components_PrevConversationItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/embed/chatbot/style-three/components/PrevConversationItem */ "./Resources/js/app/pages/embed/chatbot/style-three/components/PrevConversationItem.jsx");
/* harmony import */ var _pages_embed_chatbot_style_three_components_StartNewButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/embed/chatbot/style-three/components/StartNewButton */ "./Resources/js/app/pages/embed/chatbot/style-three/components/StartNewButton.jsx");
/* harmony import */ var _pages_embed_chatbot_style_three_components_WelcomeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/embed/chatbot/style-three/components/WelcomeHeader */ "./Resources/js/app/pages/embed/chatbot/style-three/components/WelcomeHeader.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var ChatbotThreeWelcomePreview = function ChatbotThreeWelcomePreview(_ref) {
  var bgColor = _ref.bgColor,
    className = _ref.className,
    onNavigate = _ref.onNavigate;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: 20
    },
    transition: {
      duration: 0.5
    }
    // className="flex-shrink-0 flex flex-col items-center w-[478px] max-h-[609px] h-full rounded-xl bg-white shadow-chatbot overflow-hidden"
    ,
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_3__["default"])('flex-shrink-0 flex flex-col items-center w-[478px] max-h-[609px] h-full rounded-xl bg-white shadow-chatbot overflow-hidden', className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_pages_embed_chatbot_style_three_components_WelcomeHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bgColor: bgColor,
      title: "Funny Support Guy",
      description: "Weclome to Artifism! How can we help you today?"
    }),  true && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "mb-[25px] max-h-[231px] max-w-[360px] w-full overflow-y-auto border border-gray-2 rounded-lg",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_pages_embed_chatbot_style_three_components_PrevConversationItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
        name: "Funny Support Guy",
        description: "How can I Hlp you brother?",
        img: '',
        timeStamp: "12 hours ago"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_pages_embed_chatbot_style_three_components_PrevConversationItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
        name: "Tell me about 2nd wave of covid",
        description: "The second wave of COVID-19 is a reality. It is important to understand the reasons behind the second wave of COVID-19 and how to protect yourself from it.",
        img: '',
        timeStamp: "12 hours ago"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_pages_embed_chatbot_style_three_components_PrevConversationItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
        name: "USA pandemic situation",
        description: "The United States has been hit hard by the COVID-19 pandemic. The country has seen a surge in cases and deaths, with many states implementing strict lockdown measures to curb the spread of the virus.",
        img: '',
        timeStamp: "2 days ago"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_pages_embed_chatbot_style_three_components_StartNewButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      bgColor: bgColor,
      onNavigate: onNavigate
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotThreeWelcomePreview);

/***/ }),

/***/ "./Resources/js/app/pages/embed/chatbot/style-three/components/PrevConversationItem.jsx":
/*!**********************************************************************************************!*\
  !*** ./Resources/js/app/pages/embed/chatbot/style-three/components/PrevConversationItem.jsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var PrevConversationItem = function PrevConversationItem(_ref) {
  var name = _ref.name,
    description = _ref.description,
    img = _ref.img,
    timeStamp = _ref.timeStamp,
    onSelect = _ref.onSelect,
    isLastIndex = _ref.isLastIndex;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
      return state.preferences;
    }),
    defaultImage = _useSelector.defaultImage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    onClick: onSelect,
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('p-3 flex items-center border-b border-gray-2 hover:bg-[#D9D9D9]/20 cursor-pointer', {
      'border-b-0': isLastIndex
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "flex-shrink-0 h-[42px] w-[42px] bg-[#D9D9D9] rounded-full mr-3 overflow-hidden",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        className: "h-full w-full object-cover",
        src: img || defaultImage,
        alt: name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mb-[2px] flex items-center w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "flex-auto font-normal text-2xs line-clamp-1",
          style: {
            color: '#898989'
          },
          children: name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "ml-1 font-normal text-2xs whitespace-nowrap",
          style: {
            color: '#898989'
          },
          children: timeStamp
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "font-normal text-sm line-clamp-1",
        style: {
          color: '#141414'
        },
        children: description
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrevConversationItem);

/***/ }),

/***/ "./Resources/js/app/pages/embed/chatbot/style-three/components/StartNewButton.jsx":
/*!****************************************************************************************!*\
  !*** ./Resources/js/app/pages/embed/chatbot/style-three/components/StartNewButton.jsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["onNavigate", "bgColor"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }


var StartNewButton = function StartNewButton(_ref) {
  var onNavigate = _ref.onNavigate,
    bgColor = _ref.bgColor,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", _objectSpread(_objectSpread({
    onClick: onNavigate,
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('mb-8 max-w-[332px] w-full h-[52px] rounded-[40px] flex justify-between items-center p-[6px] mx-auto font-medium text-base text-center hover:opacity-90 transition-opacity duration-300'),
    style: {
      background: bgColor ? bgColor : '#9163dd',
      color: '#FFFFFF'
    }
  }, rest), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: "flex-auto",
      children: "Start new conversation"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "flex-shrink-0 h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
        width: "14",
        height: "13",
        viewBox: "0 0 14 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
          d: "M1.14886 3.14919L2.53945 5.71229C2.748 6.09667 2.85227 6.28887 2.85227 6.5C2.85227 6.71113 2.74799 6.90333 2.53945 7.28771L1.14886 9.85082C0.226494 11.5509 -0.23469 12.401 0.119076 12.8255C0.472841 13.25 1.31788 12.8607 3.00795 12.0819L3.00796 12.0819L11.9892 7.94334C13.3297 7.32564 14 7.0168 14 6.5C14 5.9832 13.3297 5.67436 11.9892 5.05666L3.00796 0.91813C1.31788 0.13935 0.472842 -0.250041 0.119076 0.174504C-0.23469 0.599049 0.226495 1.44909 1.14886 3.14919Z",
          fill: "#141414"
        })
      })
    })]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartNewButton);

/***/ }),

/***/ "./Resources/js/app/pages/embed/chatbot/style-three/components/WelcomeHeader.jsx":
/*!***************************************************************************************!*\
  !*** ./Resources/js/app/pages/embed/chatbot/style-three/components/WelcomeHeader.jsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var WelcomeHeader = function WelcomeHeader(_ref) {
  var image = _ref.image,
    bgColor = _ref.bgColor,
    name = _ref.name,
    message = _ref.message;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.preferences;
    }),
    defaultImage = _useSelector.defaultImage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "h-[92px] w-full flex justify-center",
      style: {
        background: bgColor ? bgColor : '#9163dd'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "h-[100px] w-[100px] border-gray-2 rounded-full overflow-hidden mt-[56px]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          className: "h-full w-full object-cover",
          src: image || defaultImage,
          alt: "bot-image"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "pt-[82px] mb-6",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
        className: " font-medium text-[22px] text-center leading-[30px]",
        style: {
          color: '#141414'
        },
        children: name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "text-[15px] leading-[22px] text-center font-medium px-4",
        style: {
          color: '#898989'
        },
        children: message
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WelcomeHeader);

/***/ }),

/***/ "./Resources/js/app/pages/test/TestWelcome.jsx":
/*!*****************************************************!*\
  !*** ./Resources/js/app/pages/test/TestWelcome.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_ChatbotThreeWelcomePreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ChatbotThreeWelcomePreview */ "./Resources/js/app/components/ChatbotThreeWelcomePreview.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var TestWelcome = function TestWelcome() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var navigateToConversation = function navigateToConversation() {
    navigate("/test/conversation");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ChatbotThreeWelcomePreview__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: "w-[375px] sm:w-[478px]",
    bgColor: "#9163dd",
    onNavigate: navigateToConversation
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestWelcome);

/***/ })

}]);