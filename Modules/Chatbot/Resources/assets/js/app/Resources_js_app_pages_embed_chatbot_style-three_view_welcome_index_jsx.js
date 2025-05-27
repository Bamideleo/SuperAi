"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Resources_js_app_pages_embed_chatbot_style-three_view_welcome_index_jsx"],{

/***/ "./Resources/js/app/components/skeleton/PrevConversationItemSkeleton.jsx":
/*!*******************************************************************************!*\
  !*** ./Resources/js/app/components/skeleton/PrevConversationItemSkeleton.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }


var PrevConversationItemSkeleton = function PrevConversationItemSkeleton(_ref) {
  _objectDestructuringEmpty(_ref);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "animate-pulse p-3 flex items-center border-b border-gray-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "flex-shrink-0 h-[42px] w-[42px] rounded-full bg-gray-2 mr-3"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "w-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "justify-between mb-2 flex items-center w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "h-2 w-[100px] rounded-lg bg-gray-2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "ml-1 h-2 w-[50px] rounded-lg bg-gray-2"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "h-2 w-[180px] rounded-lg bg-gray-2"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrevConversationItemSkeleton);

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

/***/ "./Resources/js/app/pages/embed/chatbot/style-three/view/welcome/index.jsx":
/*!*********************************************************************************!*\
  !*** ./Resources/js/app/pages/embed/chatbot/style-three/view/welcome/index.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _utils_updateLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utils/updateLocalStorage */ "./Resources/js/app/utils/updateLocalStorage.js");
/* harmony import */ var _components_WelcomeHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/WelcomeHeader */ "./Resources/js/app/pages/embed/chatbot/style-three/components/WelcomeHeader.jsx");
/* harmony import */ var _components_StartNewButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/StartNewButton */ "./Resources/js/app/pages/embed/chatbot/style-three/components/StartNewButton.jsx");
/* harmony import */ var _components_PrevConversationItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PrevConversationItem */ "./Resources/js/app/pages/embed/chatbot/style-three/components/PrevConversationItem.jsx");
/* harmony import */ var _components_CircleSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../components/CircleSpinner */ "./Resources/js/app/components/CircleSpinner.jsx");
/* harmony import */ var _components_skeleton_PrevConversationItemSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../components/skeleton/PrevConversationItemSkeleton */ "./Resources/js/app/components/skeleton/PrevConversationItemSkeleton.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _utils_generateChatbotLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../utils/generateChatbotLink */ "./Resources/js/app/utils/generateChatbotLink.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../store/slices/chatbotSlice */ "./Resources/js/app/store/slices/chatbotSlice.js");
/* harmony import */ var _store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../store/services/chatbotApi */ "./Resources/js/app/store/services/chatbotApi.js");
/* harmony import */ var _store_services_visitorApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../store/services/visitorApi */ "./Resources/js/app/store/services/visitorApi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



// ** utils


// ** components





// ** skeleton




// ** Redux



// ** services



var ChatbotWelcome = function ChatbotWelcome() {
  var _chatbot$meta2, _chatbot$meta3, _chatbot$meta5;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    chatbotCode = _useState2[0],
    setChatbotCode = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    lastVisitor = _useState4[0],
    setLastVisitor = _useState4[1];

  // get chatbot details by id query
  var _useGetChatbotDetails = (0,_store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_9__.useGetChatbotDetailsByIdQuery)(chatbotCode, {
      skip: !chatbotCode
    }),
    _useGetChatbotDetails2 = _useGetChatbotDetails.data,
    _useGetChatbotDetails3 = _useGetChatbotDetails2 === void 0 ? {} : _useGetChatbotDetails2,
    chatbot = _useGetChatbotDetails3.data,
    chatbotIsLoading = _useGetChatbotDetails.isLoading,
    chatbotIsSuccess = _useGetChatbotDetails.isSuccess,
    chatbotIsError = _useGetChatbotDetails.isError,
    chatbotError = _useGetChatbotDetails.error;

  // get chats by visitor id query
  var _useGetChatsByVisitor = (0,_store_services_visitorApi__WEBPACK_IMPORTED_MODULE_10__.useGetChatsByVisitorIDQuery)(lastVisitor === null || lastVisitor === void 0 ? void 0 : lastVisitor.visitorID, {
      skip: !lastVisitor
    }),
    _useGetChatsByVisitor2 = _useGetChatsByVisitor.data,
    _useGetChatsByVisitor3 = _useGetChatsByVisitor2 === void 0 ? {} : _useGetChatsByVisitor2,
    _useGetChatsByVisitor4 = _useGetChatsByVisitor3.data,
    chats = _useGetChatsByVisitor4 === void 0 ? [] : _useGetChatsByVisitor4,
    chatsIsLoading = _useGetChatsByVisitor.isLoading,
    chatsIsSuccess = _useGetChatsByVisitor.isSuccess;
  var navigateToNewConversation = function navigateToNewConversation() {
    dispatch((0,_store_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_8__.setChatID)(undefined));
    (0,_utils_updateLocalStorage__WEBPACK_IMPORTED_MODULE_1__.updateLocalVisitor)({
      chatbotCode: chatbotCode,
      chatID: null
    });
    navigate((0,_utils_generateChatbotLink__WEBPACK_IMPORTED_MODULE_7__.generateChatbotLink)('conversation', chatbotCode), {
      state: chatbot
    });
  };

  // navigate to conversation with carry chat id
  var navToConvWithID = function navToConvWithID(id) {
    (0,_utils_updateLocalStorage__WEBPACK_IMPORTED_MODULE_1__.updateLocalVisitor)({
      chatbotCode: chatbotCode,
      chatID: id
    });
    dispatch((0,_store_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_8__.setChatPage)(1));
    dispatch((0,_store_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_8__.setChatID)(id));
    navigate((0,_utils_generateChatbotLink__WEBPACK_IMPORTED_MODULE_7__.generateChatbotLink)('conversation', chatbotCode), {
      state: chatbot
    });
  };

  // if chatID & chatbotCode exist in local storage, navigate to conversation page
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var existingVisitor = JSON.parse(localStorage.getItem(chatbotCode));
    if (!chatbotIsLoading && chatbotIsSuccess && (chatbot === null || chatbot === void 0 ? void 0 : chatbot.status) !== 'Inactive' && existingVisitor !== null && existingVisitor !== void 0 && existingVisitor.chatID) {
      navigate((0,_utils_generateChatbotLink__WEBPACK_IMPORTED_MODULE_7__.generateChatbotLink)('conversation', chatbotCode), {
        state: chatbot
      });
    }
  }, [chatbotCode, chatbotIsSuccess, chatbot]);

  // get chatbot code from url & process last visitor
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var code = window.location.pathname.split('/')[3].split('=')[1];
    setChatbotCode(code);
    dispatch((0,_store_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_8__.saveLastVisitor)(code));
    if (!chatbotIsLoading && chatbot !== null && chatbot !== void 0 && chatbot.code) {
      var _lastVisitor = JSON.parse(localStorage.getItem(chatbot === null || chatbot === void 0 ? void 0 : chatbot.code));
      if (_lastVisitor) {
        setLastVisitor(_lastVisitor);
      }
      if (!_lastVisitor) {
        var _chatbot$meta;
        localStorage.setItem(code, JSON.stringify({
          chatbotCode: code,
          chatbot_name: chatbot === null || chatbot === void 0 ? void 0 : chatbot.name,
          chatbot_img: chatbot === null || chatbot === void 0 || (_chatbot$meta = chatbot.meta) === null || _chatbot$meta === void 0 || (_chatbot$meta = _chatbot$meta.image) === null || _chatbot$meta === void 0 ? void 0 : _chatbot$meta.url,
          visitorID: null,
          chatID: null
        }));
      }
    }
  }, [chatbotIsLoading, chatbot]);
  if (chatbotIsLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_14__.motion.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      transition: {
        duration: 0.4
      },
      className: "h-screen flex justify-center items-center w-full bg-white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_CircleSpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
        w: "6",
        h: "6"
      })
    });
  }
  if (!chatbotIsLoading && chatbotIsError) {
    var _chatbotError$data;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_14__.motion.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      transition: {
        duration: 0.4
      },
      className: "h-screen flex flex-col items-center w-full bg-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_WelcomeHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "-mt-6 mb-[25px] h-[100px] max-w-[360px] w-full border-gray-2 rounded-lg flex justify-center items-center text-center px-2 bg-clrE0 font-medium text-gray-1",
        children: (chatbotError === null || chatbotError === void 0 || (_chatbotError$data = chatbotError.data) === null || _chatbotError$data === void 0 ? void 0 : _chatbotError$data.error) || 'Widget Chatbot does not exist.'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_StartNewButton__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_14__.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    transition: {
      duration: 0.4
    },
    className: "h-screen flex flex-col items-center w-full bg-white",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_WelcomeHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: chatbot === null || chatbot === void 0 || (_chatbot$meta2 = chatbot.meta) === null || _chatbot$meta2 === void 0 || (_chatbot$meta2 = _chatbot$meta2.image) === null || _chatbot$meta2 === void 0 ? void 0 : _chatbot$meta2.url,
      bgColor: chatbot === null || chatbot === void 0 || (_chatbot$meta3 = chatbot.meta) === null || _chatbot$meta3 === void 0 ? void 0 : _chatbot$meta3.theme_color,
      name: chatbot === null || chatbot === void 0 ? void 0 : chatbot.name,
      message: chatbot === null || chatbot === void 0 ? void 0 : chatbot.message
    }), !chatbotIsLoading && chatbotIsSuccess && (chatbot === null || chatbot === void 0 ? void 0 : chatbot.status) === 'Inactive' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: "mb-[25px] h-[100px] max-w-[360px] w-full border-gray-2 rounded-lg flex justify-center items-center text-center px-2 bg-clrE0 font-medium text-gray-1",
      children: "The chatbot is currently inactive. Please contact the admin to activate it."
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [chatsIsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "mb-[25px] max-h-[231px] max-w-[360px] w-full overflow-y-auto border border-gray-2 rounded-lg",
        children: [1, 2, 3].map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_skeleton_PrevConversationItemSkeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {}, item);
        })
      }), !chatsIsLoading && chatsIsSuccess && (chats === null || chats === void 0 ? void 0 : chats.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "mb-[25px] max-h-[231px] max-w-[360px] w-full overflow-y-auto border border-gray-2 rounded-lg",
        children: chats === null || chats === void 0 ? void 0 : chats.map(function (chat) {
          var _chatbot$meta4;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_PrevConversationItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            name: chatbot === null || chatbot === void 0 ? void 0 : chatbot.name,
            description: chat === null || chat === void 0 ? void 0 : chat.title,
            img: chatbot === null || chatbot === void 0 || (_chatbot$meta4 = chatbot.meta) === null || _chatbot$meta4 === void 0 || (_chatbot$meta4 = _chatbot$meta4.image) === null || _chatbot$meta4 === void 0 ? void 0 : _chatbot$meta4.url,
            timeStamp: chat === null || chat === void 0 ? void 0 : chat.created_at,
            onSelect: function onSelect() {
              return navToConvWithID(chat === null || chat === void 0 ? void 0 : chat.id);
            },
            isLastIndex: (chats === null || chats === void 0 ? void 0 : chats.indexOf(chat)) === (chats === null || chats === void 0 ? void 0 : chats.length) - 1
          }, chat === null || chat === void 0 ? void 0 : chat.id);
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_StartNewButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      disabled: !chatbotIsLoading && chatbotIsSuccess && (chatbot === null || chatbot === void 0 ? void 0 : chatbot.status) === 'Inactive',
      onNavigate: navigateToNewConversation,
      bgColor: chatbot === null || chatbot === void 0 || (_chatbot$meta5 = chatbot.meta) === null || _chatbot$meta5 === void 0 ? void 0 : _chatbot$meta5.theme_color
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotWelcome);

/***/ }),

/***/ "./Resources/js/app/store/services/visitorApi.js":
/*!*******************************************************!*\
  !*** ./Resources/js/app/store/services/visitorApi.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGetChatByVisitorNChatIDQuery: () => (/* binding */ useGetChatByVisitorNChatIDQuery),
/* harmony export */   useGetChatsByVisitorIDQuery: () => (/* binding */ useGetChatsByVisitorIDQuery),
/* harmony export */   usePostChatMutation: () => (/* binding */ usePostChatMutation),
/* harmony export */   visitorApi: () => (/* binding */ visitorApi)
/* harmony export */ });
/* harmony import */ var _apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiSlice */ "./Resources/js/app/store/services/apiSlice.js");
/* harmony import */ var _utils_fakePatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/fakePatch */ "./Resources/js/app/utils/fakePatch.js");
/* harmony import */ var _slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slices/chatbotSlice */ "./Resources/js/app/store/slices/chatbotSlice.js");
/* harmony import */ var _utils_transformResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/transformResponse */ "./Resources/js/app/utils/transformResponse.js");
/* harmony import */ var _utils_updateLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/updateLocalStorage */ "./Resources/js/app/utils/updateLocalStorage.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var visitorApi = _apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.injectEndpoints({
  endpoints: function endpoints(build) {
    return {
      getChatsByVisitorID: build.query({
        query: function query(visitorID) {
          return "v2/chatbots/chats/".concat(visitorID);
        },
        providesTags: ['Visitor']
      }),
      getChatByVisitorNChatID: build.query({
        query: function query(_ref) {
          var visitorID = _ref.visitorID,
            chatID = _ref.chatID;
          return "v2/chatbots/chats/".concat(visitorID, "/").concat(chatID);
        },
        transformResponse: function transformResponse(response) {
          return (0,_utils_transformResponse__WEBPACK_IMPORTED_MODULE_3__.transformChatResponse)(response);
        },
        onQueryStarted: function onQueryStarted(arg, _ref2) {
          return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var dispatch, queryFulfilled, getState;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  dispatch = _ref2.dispatch, queryFulfilled = _ref2.queryFulfilled, getState = _ref2.getState;
                  _context.prev = 1;
                  _context.next = 4;
                  return queryFulfilled;
                case 4:
                  if (getState().chatbot.initialChat.length) {
                    dispatch((0,_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_2__.resetInitialChat)());
                  }
                  _context.next = 9;
                  break;
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](1);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[1, 7]]);
          }))();
        },
        providesTags: ['Visitor']
      }),
      getMoreChatByVisitorNChatID: build.query({
        query: function query(_ref3) {
          var visitorID = _ref3.visitorID,
            chatID = _ref3.chatID,
            page = _ref3.page;
          return "v2/chatbots/chats/".concat(visitorID, "/").concat(chatID, "?page=").concat(page);
        },
        transformResponse: function transformResponse(response) {
          return (0,_utils_transformResponse__WEBPACK_IMPORTED_MODULE_3__.transformChatResponse)(response);
        },
        onQueryStarted: function onQueryStarted(_ref4, _ref5) {
          return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var visitorID, chatID, dispatch, queryFulfilled, result;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  visitorID = _ref4.visitorID, chatID = _ref4.chatID;
                  dispatch = _ref5.dispatch, queryFulfilled = _ref5.queryFulfilled;
                  _context2.prev = 2;
                  _context2.next = 5;
                  return queryFulfilled;
                case 5:
                  result = _context2.sent;
                  dispatch(_apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.util.updateQueryData('getChatByVisitorNChatID', {
                    visitorID: visitorID,
                    chatID: chatID
                  }, function (draft) {
                    var _draft$data;
                    (_draft$data = draft.data).push.apply(_draft$data, _toConsumableArray(result.data.data));
                    draft.pagination.nextPage = result.data.pagination.nextPage;
                    draft.pagination.next_page_url = result.data.pagination.next_page_url;
                    draft.pagination.currentPage = result.data.pagination.currentPage;
                  }));
                  _context2.next = 11;
                  break;
                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2["catch"](2);
                case 11:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[2, 9]]);
          }))();
        },
        forceRefetch: function forceRefetch(_ref6) {
          var currentArg = _ref6.currentArg,
            previousArg = _ref6.previousArg;
          return currentArg !== previousArg;
        }
      }),
      postChat: build.mutation({
        query: function query(data) {
          return {
            // url: `v2/chatbots/chats/${data.visitorID}`,
            url: "v2/chatbots/chats/create",
            method: 'POST',
            body: data.body
          };
        },
        onQueryStarted: function onQueryStarted(data, _ref7) {
          return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var dispatch, queryFulfilled, getState, _ref8, visitorID, body, fakePatch, patchResult, _yield$queryFulfilled, _data, _data$data, _data$data2, _data$data3, existingVisitor, _data$data4;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  dispatch = _ref7.dispatch, queryFulfilled = _ref7.queryFulfilled, getState = _ref7.getState;
                  _ref8 = data || {}, visitorID = _ref8.visitorID, body = _ref8.body;
                  fakePatch = (0,_utils_fakePatch__WEBPACK_IMPORTED_MODULE_1__.chatFakePatch)(data);
                  patchResult = dispatch(_apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.util.updateQueryData('getChatByVisitorNChatID', {
                    visitorID: visitorID,
                    chatID: body === null || body === void 0 ? void 0 : body.chatbot_chat_id
                  }, function (draft) {
                    draft.data.push(fakePatch);
                  })); // set initial chat state if body?.chatbot_chat_id is null /  new chat
                  if (!(body !== null && body !== void 0 && body.chatbot_chat_id)) {
                    dispatch((0,_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_2__.setInitialChat)((0,_utils_fakePatch__WEBPACK_IMPORTED_MODULE_1__.chatFakePatch)(data)));
                  }
                  _context3.prev = 5;
                  _context3.next = 8;
                  return queryFulfilled;
                case 8:
                  _yield$queryFulfilled = _context3.sent;
                  _data = _yield$queryFulfilled.data;
                  if (!getState().chatbot.chatID) {
                    dispatch((0,_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_2__.setChatID)(Number(_data === null || _data === void 0 || (_data$data = _data.data) === null || _data$data === void 0 ? void 0 : _data$data.chatbot_chat_id)));
                    dispatch((0,_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_2__.setVisitorID)(_data === null || _data === void 0 || (_data$data2 = _data.data) === null || _data$data2 === void 0 || (_data$data2 = _data$data2.meta) === null || _data$data2 === void 0 ? void 0 : _data$data2.visitor_id));
                    (0,_utils_updateLocalStorage__WEBPACK_IMPORTED_MODULE_4__.updateLocalVisitor)({
                      chatbotCode: body === null || body === void 0 ? void 0 : body.chatbot_code,
                      chatID: _data === null || _data === void 0 || (_data$data3 = _data.data) === null || _data$data3 === void 0 ? void 0 : _data$data3.chatbot_chat_id
                    });

                    // update visitor id in local storage
                    existingVisitor = JSON.parse(localStorage.getItem(body === null || body === void 0 ? void 0 : body.chatbot_code));
                    if (existingVisitor) {
                      localStorage.setItem(body === null || body === void 0 ? void 0 : body.chatbot_code, JSON.stringify(_objectSpread(_objectSpread({}, existingVisitor), {}, {
                        visitorID: _data === null || _data === void 0 || (_data$data4 = _data.data) === null || _data$data4 === void 0 || (_data$data4 = _data$data4.meta) === null || _data$data4 === void 0 ? void 0 : _data$data4.visitor_id
                      })));
                    }
                  }
                  _context3.next = 17;
                  break;
                case 13:
                  _context3.prev = 13;
                  _context3.t0 = _context3["catch"](5);
                  dispatch((0,_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_2__.resetInitialChat)());
                  patchResult.undo();
                case 17:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, null, [[5, 13]]);
          }))();
        },
        invalidatesTags: ['Visitor']
      })
    };
  },
  overrideExisting: false
});
var useGetChatsByVisitorIDQuery = visitorApi.useGetChatsByVisitorIDQuery,
  useGetChatByVisitorNChatIDQuery = visitorApi.useGetChatByVisitorNChatIDQuery,
  usePostChatMutation = visitorApi.usePostChatMutation;


/***/ }),

/***/ "./Resources/js/app/utils/fakePatch.js":
/*!*********************************************!*\
  !*** ./Resources/js/app/utils/fakePatch.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chatFakePatch: () => (/* binding */ chatFakePatch)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

function chatFakePatch(data) {
  var _data$body;
  return {
    isTemp: true,
    // id: data?.body?.chatbot_chat_id || uuidv4(),
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    type: 'visitor_reply',
    created_at: 'just now',
    meta: {
      visitor_id: data === null || data === void 0 ? void 0 : data.visitorID,
      visitor_reply: data === null || data === void 0 || (_data$body = data.body) === null || _data$body === void 0 ? void 0 : _data$body.prompt
    }
  };
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

}]);