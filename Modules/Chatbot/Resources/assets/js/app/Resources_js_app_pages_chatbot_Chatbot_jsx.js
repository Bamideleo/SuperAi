"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Resources_js_app_pages_chatbot_Chatbot_jsx"],{

/***/ "./Resources/js/app/pages/chatbot/Chatbot.jsx":
/*!****************************************************!*\
  !*** ./Resources/js/app/pages/chatbot/Chatbot.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SEO */ "./Resources/js/app/components/SEO.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./Resources/js/app/components/Button.jsx");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Input */ "./Resources/js/app/components/Input.jsx");
/* harmony import */ var _components_NoChatbot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/NoChatbot */ "./Resources/js/app/components/NoChatbot.jsx");
/* harmony import */ var _components_YourChatbotCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/YourChatbotCard */ "./Resources/js/app/components/YourChatbotCard.jsx");
/* harmony import */ var _components_skeleton_YourChatbotCardSkeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/skeleton/YourChatbotCardSkeleton */ "./Resources/js/app/components/skeleton/YourChatbotCardSkeleton.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/debounce */ "./Resources/js/app/utils/debounce.js");
/* harmony import */ var _constants_chatbotUrls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/chatbotUrls */ "./Resources/js/app/constants/chatbotUrls.js");
/* harmony import */ var _hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useLangTranslation */ "./Resources/js/app/hooks/useLangTranslation.jsx");
/* harmony import */ var _store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/services/chatbotApi */ "./Resources/js/app/store/services/chatbotApi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


// ** Redux Imports


// ** Import react-router-dom


// ** Components Import







// ** Icons Import


// ** Utils



// ** Constants


// ** Hooks



var ChatbotPage = function ChatbotPage() {
  var _useLangTranslation = (0,_hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_11__["default"])(),
    trans = _useLangTranslation.trans;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector)(function (state) {
      return state.ui;
    }),
    isCollapse = _useSelector.isCollapse,
    isOpenSidebar = _useSelector.isOpenSidebar;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchQuery = _useState2[0],
    setSearchQuery = _useState2[1];

  // get chatbots query
  var _useGetChatbotsQuery = (0,_store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_12__.useGetChatbotsQuery)({
      searchQuery: searchQuery
    }),
    _useGetChatbotsQuery$ = _useGetChatbotsQuery.data,
    _useGetChatbotsQuery$2 = _useGetChatbotsQuery$ === void 0 ? {} : _useGetChatbotsQuery$,
    _useGetChatbotsQuery$3 = _useGetChatbotsQuery$2.data,
    chatbots = _useGetChatbotsQuery$3 === void 0 ? [] : _useGetChatbotsQuery$3,
    chatbotIsLoading = _useGetChatbotsQuery.isLoading,
    chatbotIsFetching = _useGetChatbotsQuery.isFetching,
    chatbotIsSuccess = _useGetChatbotsQuery.isSuccess,
    chatbotIsError = _useGetChatbotsQuery.isError,
    chatbotError = _useGetChatbotsQuery.error;

  // ** Handle search query
  var handleSearchQuery = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_9__.debounce)(function (e) {
    setSearchQuery(e.target.value);
  });

  // ** Content what to show
  var content = null;
  if (chatbotIsLoading) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_8__["default"])('grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-2.5', {
        'md:grid-cols-2 lg:grid-cols-3': isCollapse,
        'sm:grid-cols-2': !isOpenSidebar
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_skeleton_YourChatbotCardSkeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          isTrainedSkeleton: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_skeleton_YourChatbotCardSkeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          isTrainedSkeleton: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_skeleton_YourChatbotCardSkeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          isTrainedSkeleton: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_skeleton_YourChatbotCardSkeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          isTrainedSkeleton: true
        })]
      })
    });
  }
  if (!chatbotIsLoading && chatbotIsError) {
    var _chatbotError$data;
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_NoChatbot__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: chatbotError === null || chatbotError === void 0 || (_chatbotError$data = chatbotError.data) === null || _chatbotError$data === void 0 ? void 0 : _chatbotError$data.error
    });
  }
  if (!chatbotIsLoading && chatbotIsSuccess && chatbots.length === 0) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_NoChatbot__WEBPACK_IMPORTED_MODULE_4__["default"], {});
  }
  if (!chatbotIsLoading && chatbotIsSuccess && chatbots.length > 0) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_8__["default"])('grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-2.5', {
        'md:grid-cols-2 lg:grid-cols-3': isCollapse,
        'sm:grid-cols-2': !isOpenSidebar
      }),
      children: chatbots.map(function (chatbot, index) {
        var _chatbot$meta, _chatbot$meta2;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_YourChatbotCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "max-w-full",
          image: chatbot === null || chatbot === void 0 || (_chatbot$meta = chatbot.meta) === null || _chatbot$meta === void 0 || (_chatbot$meta = _chatbot$meta.image) === null || _chatbot$meta === void 0 ? void 0 : _chatbot$meta.url,
          chatbotCode: chatbot === null || chatbot === void 0 ? void 0 : chatbot.code,
          status: chatbot === null || chatbot === void 0 ? void 0 : chatbot.status,
          isActive: (chatbot === null || chatbot === void 0 ? void 0 : chatbot.status) === 'Active' ? true : false,
          isTrained: chatbot === null || chatbot === void 0 ? void 0 : chatbot.isTrained,
          name: chatbot === null || chatbot === void 0 ? void 0 : chatbot.name,
          description: chatbot === null || chatbot === void 0 || (_chatbot$meta2 = chatbot.meta) === null || _chatbot$meta2 === void 0 ? void 0 : _chatbot$meta2.discription,
          index: index
        }, chatbot === null || chatbot === void 0 ? void 0 : chatbot.id);
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "h-full overflow-y-auto mr-[3px]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "max-w-[1280px] mx-auto px-4 mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h5", {
          className: "ml-5 md:ml-0 mt-6 text-[22px] font-[600] text-dark-1 dark:text-white font-redhat",
          children: "Chatbot Workplace"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
          className: "ml-5 md:ml-0 mt-[6px] text-gray-1 text-15 font-medium",
          children: "Create and train chatbots powered by our AI to easily maintain customer support."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "mt-7 mb-5 flex gap-3 justify-between items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onChange: handleSearchQuery,
            className: "max-w-[420px]",
            pClassName: "max-w-[420px]",
            isLoading: !chatbotIsLoading && chatbotIsFetching,
            Icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_7__.SearchIcon, {}),
            placeholder: "Search bots"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
            to: "/".concat(_constants_chatbotUrls__WEBPACK_IMPORTED_MODULE_10__.ROUTING_TREE.CHATBOATS.CREATE_SETUP),
            className: "flex-shrink-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: "flex-shrink-0",
              startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_7__.PlusIcon, {}),
              children: "New Chatbot"
            })
          })]
        }), content]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotPage);

/***/ })

}]);