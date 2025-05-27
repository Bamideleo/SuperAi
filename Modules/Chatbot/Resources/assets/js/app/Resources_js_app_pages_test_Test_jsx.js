"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Resources_js_app_pages_test_Test_jsx"],{

/***/ "./Resources/js/app/components/ChatbotCard.jsx":
/*!*****************************************************!*\
  !*** ./Resources/js/app/components/ChatbotCard.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["image", "title", "subtitle", "status", "isSelected", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




var ChatbotCard = function ChatbotCard(_ref) {
  var image = _ref.image,
    title = _ref.title,
    subtitle = _ref.subtitle,
    status = _ref.status,
    isSelected = _ref.isSelected,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
      return state.preferences;
    }),
    defaultImage = _useSelector.defaultImage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", _objectSpread(_objectSpread({
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('flex gap-3 items-center cursor-pointer bg-white dark:bg-dark-shade-1 h-full max-h-[78px] sm:min-w-[375px] max-w-[488px] w-full p-4 rounded-lg border-white border dark:border-clr47 hover:border-gray-1, dark:hover:border-gray-1', className, {
      'border-gray-1 dark:border-gray-1': isSelected
    })
  }, rest), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex-1 flex items-center gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "flex-shrink-0 relative",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: "h-[42px] w-[42px] rounded-full bg-gray-2",
          src: image || defaultImage,
          alt: title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-dark-1 dark:text-white text-lg font-normal",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "flex items-center gap-1 mt-[2px] text-gray-1 text-2xs font-medium",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: subtitle
          })
        })]
      })]
    }), status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('max-h-[22px] h-full w-fit bg-green-1 px-2 py-[3px] rounded-3xl text-[11px] text-white font-[600px]', {
        'bg-red': status === 'Inactive'
      }),
      children: status
    })]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotCard);

/***/ }),

/***/ "./Resources/js/app/components/skeleton/ChatbotCardSkeleton.jsx":
/*!**********************************************************************!*\
  !*** ./Resources/js/app/components/skeleton/ChatbotCardSkeleton.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var ChatbotCardSkeleton = function ChatbotCardSkeleton(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('bg-white dark:bg-dark-shade-1 h-full max-h-[78px] w-full p-4 rounded-lg border-white border dark:border-clr47', className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "animate-pulse h-full w-full flex items-center gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex-shrink-0 h-[42px] w-[42px] rounded-full bg-gray-2 dark:bg-gray-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "h-2 w-[100px] mb-3 rounded bg-gray-2 dark:bg-gray-1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "h-2 w-full rounded bg-gray-2 dark:bg-gray-1"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotCardSkeleton);

/***/ }),

/***/ "./Resources/js/app/components/test/TestChatbotList.jsx":
/*!**************************************************************!*\
  !*** ./Resources/js/app/components/test/TestChatbotList.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/debounce */ "./Resources/js/app/utils/debounce.js");
/* harmony import */ var _NoData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NoData */ "./Resources/js/app/components/NoData.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var _ChatbotCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ChatbotCard */ "./Resources/js/app/components/ChatbotCard.jsx");
/* harmony import */ var _InfiniteDataScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InfiniteDataScroll */ "./Resources/js/app/components/InfiniteDataScroll.jsx");
/* harmony import */ var _TestChatbotListHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TestChatbotListHeader */ "./Resources/js/app/components/test/TestChatbotListHeader.jsx");
/* harmony import */ var _skeleton_ChatbotCardSkeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../skeleton/ChatbotCardSkeleton */ "./Resources/js/app/components/skeleton/ChatbotCardSkeleton.jsx");
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useMediaQuery */ "./Resources/js/app/hooks/useMediaQuery.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_slices_testModeSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/slices/testModeSlice */ "./Resources/js/app/store/slices/testModeSlice.js");
/* harmony import */ var _store_services_apiSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/services/apiSlice */ "./Resources/js/app/store/services/apiSlice.js");
/* harmony import */ var _store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/services/chatbotApi */ "./Resources/js/app/store/services/chatbotApi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


// ** Utils



// ** Components







// ** Hooks


// ** redux



// ** services



var TestChatbotList = function TestChatbotList(_ref) {
  var _chatbotError$data;
  var listDrawerOpen = _ref.listDrawerOpen,
    handleListDrawerClose = _ref.handleListDrawerClose,
    navigateState = _ref.navigateState;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useDispatch)();
  var _useMediaQuery = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__["default"])({
      maxWidth: 1474
    }),
    maxWidth_1474px = _useMediaQuery.matches;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedChatbot = _useState2[0],
    setSelectedChatbot = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      sortBy: null,
      status: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    filter = _useState4[0],
    setFilter = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    filterSortBy = _useState6[0],
    setFilterSortBy = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    filterStatus = _useState8[0],
    setFilterStatus = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    searchQuery = _useState10[0],
    setSearchQuery = _useState10[1];

  // get chatbots query
  var _useGetChatbotsQuery = (0,_store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_12__.useGetChatbotsQuery)({
      searchQuery: searchQuery,
      status: filterStatus,
      sortBy: filterSortBy
    }),
    _useGetChatbotsQuery$ = _useGetChatbotsQuery.data,
    _useGetChatbotsQuery$2 = _useGetChatbotsQuery$ === void 0 ? {} : _useGetChatbotsQuery$,
    _useGetChatbotsQuery$3 = _useGetChatbotsQuery$2.data,
    chatbots = _useGetChatbotsQuery$3 === void 0 ? [] : _useGetChatbotsQuery$3,
    _useGetChatbotsQuery$4 = _useGetChatbotsQuery$2.meta,
    meta = _useGetChatbotsQuery$4 === void 0 ? {} : _useGetChatbotsQuery$4,
    chatbotIsLoading = _useGetChatbotsQuery.isLoading,
    chatbotIsFetching = _useGetChatbotsQuery.isFetching,
    chatbotIsSuccess = _useGetChatbotsQuery.isSuccess,
    chatbotIsError = _useGetChatbotsQuery.isError,
    chatbotError = _useGetChatbotsQuery.error;
  var handleSelectChatbot = function handleSelectChatbot(chatbot) {
    dispatch((0,_store_slices_testModeSlice__WEBPACK_IMPORTED_MODULE_10__.setChatID)(undefined));
    setSelectedChatbot(chatbot);
    dispatch((0,_store_slices_testModeSlice__WEBPACK_IMPORTED_MODULE_10__.setChatbot)(chatbot));
    if (maxWidth_1474px) {
      handleListDrawerClose();
    }
  };
  var handleSearchQuery = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_2__.debounce)(function (e) {
    setSearchQuery(e.target.value);
  });
  var handleUpdateFilter = function handleUpdateFilter() {
    var _filter$sortBy, _filter$status;
    setFilterSortBy((_filter$sortBy = filter.sortBy) === null || _filter$sortBy === void 0 ? void 0 : _filter$sortBy.value);
    setFilterStatus((_filter$status = filter.status) === null || _filter$status === void 0 ? void 0 : _filter$status.value);
  };
  var patchFunc = function patchFunc(page) {
    dispatch(_store_services_apiSlice__WEBPACK_IMPORTED_MODULE_11__.apiSlice.endpoints.getMoreChatbots.initiate({
      searchQuery: searchQuery,
      status: filterStatus,
      sortBy: filterSortBy,
      page: page
    }));
  };

  // reset filter
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!filter.sortBy && !filter.status) {
      setFilterSortBy('');
      setFilterStatus('');
    }
  }, [filter, setFilterSortBy, setFilterStatus]);

  // set default chatbot
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (chatbotIsSuccess && chatbots.length > 0 && navigateState !== null && navigateState !== void 0 && navigateState.code) {
      var _selectedChatbot = chatbots === null || chatbots === void 0 ? void 0 : chatbots.find(function (chatbot) {
        return (chatbot === null || chatbot === void 0 ? void 0 : chatbot.code) === navigateState.code;
      });
      setSelectedChatbot(_selectedChatbot);
      dispatch((0,_store_slices_testModeSlice__WEBPACK_IMPORTED_MODULE_10__.setChatbot)(_selectedChatbot));
    } else if (chatbotIsSuccess && chatbots.length > 0 && !(navigateState !== null && navigateState !== void 0 && navigateState.code)) {
      setSelectedChatbot(chatbots[0]);
      dispatch((0,_store_slices_testModeSlice__WEBPACK_IMPORTED_MODULE_10__.setChatbot)(chatbots[0]));
    }
  }, [chatbots, navigateState, setSelectedChatbot]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('absolute lg:static lg:max-w-[520px] transform h-full flex flex-col w-full bg-bg-2 dark:bg-dark-shade-2 border-r border-r-gray-2 dark:border-r-clr47 transition-all z-50', {
      '-translate-x-full opacity-0 lg:w-0': !listDrawerOpen
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_TestChatbotListHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      handleListDrawerClose: handleListDrawerClose,
      handleSearchQuery: handleSearchQuery,
      chatbotIsLoading: !chatbotIsLoading && chatbotIsFetching,
      handleUpdateFilter: handleUpdateFilter,
      filter: filter,
      setFilter: setFilter
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      id: "scrollableDiv",
      className: "h-full px-4 pb-3 select-none mr-[3px] space-y-3 overflow-y-auto",
      children: [chatbotIsLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _toConsumableArray(Array(8)).map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_skeleton_ChatbotCardSkeleton__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "sm:min-w-[375px]"
          }, i);
        })
      }), !chatbotIsLoading && chatbotIsError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_NoData__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "w-full sm:min-w-[375px]",
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.BotIcon, {}),
        message: chatbotError === null || chatbotError === void 0 || (_chatbotError$data = chatbotError.data) === null || _chatbotError$data === void 0 ? void 0 : _chatbotError$data.error
      }), !chatbotIsLoading && chatbotIsSuccess && chatbots.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_NoData__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "w-full sm:min-w-[375px]",
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_4__.BotIcon, {}),
        message: "No chatbot found"
      }), !chatbotIsLoading && chatbotIsSuccess && chatbots.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_InfiniteDataScroll__WEBPACK_IMPORTED_MODULE_6__["default"], {
        meta: meta,
        data: chatbots,
        patchFunc: patchFunc,
        scrollableTarget: "scrollableDiv",
        children: chatbots.map(function (chatbot) {
          var _chatbot$meta, _chatbot$meta2;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ChatbotCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('min-w-[300px] max-w-full hover:border-gray-1'),
            onClick: function onClick() {
              return handleSelectChatbot(chatbot);
            },
            image: chatbot === null || chatbot === void 0 || (_chatbot$meta = chatbot.meta) === null || _chatbot$meta === void 0 || (_chatbot$meta = _chatbot$meta.image) === null || _chatbot$meta === void 0 ? void 0 : _chatbot$meta.url,
            isSelected: (selectedChatbot === null || selectedChatbot === void 0 ? void 0 : selectedChatbot.id) === (chatbot === null || chatbot === void 0 ? void 0 : chatbot.id),
            subtitle: chatbot === null || chatbot === void 0 || (_chatbot$meta2 = chatbot.meta) === null || _chatbot$meta2 === void 0 ? void 0 : _chatbot$meta2.discription,
            title: chatbot === null || chatbot === void 0 ? void 0 : chatbot.name,
            status: chatbot === null || chatbot === void 0 ? void 0 : chatbot.status
          }, chatbot === null || chatbot === void 0 ? void 0 : chatbot.id);
        })
      }) : null]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestChatbotList);

/***/ }),

/***/ "./Resources/js/app/components/test/TestChatbotListHeader.jsx":
/*!********************************************************************!*\
  !*** ./Resources/js/app/components/test/TestChatbotListHeader.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _constants_chatbotUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/chatbotUrls */ "./Resources/js/app/constants/chatbotUrls.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input */ "./Resources/js/app/components/Input.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./Resources/js/app/components/Button.jsx");
/* harmony import */ var _DropdownFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DropdownFilter */ "./Resources/js/app/components/DropdownFilter.jsx");
/* harmony import */ var _FilterPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FilterPopup */ "./Resources/js/app/components/FilterPopup.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var _ArrowButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ArrowButton */ "./Resources/js/app/components/ArrowButton.jsx");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useMediaQuery */ "./Resources/js/app/hooks/useMediaQuery.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// ** constants


// ** react-router-dom


// ** custom components





// ** icons



// ** utils Imports


// ** hooks


var sortData = [{
  id: 1,
  name: 'Newest',
  value: 'desc'
}, {
  id: 2,
  name: 'Oldest',
  value: 'asc'
}, {
  id: 3,
  name: 'Name',
  value: 'name'
}];
var statusData = [{
  id: 1,
  name: 'All',
  value: ''
}, {
  id: 2,
  name: 'Active',
  value: 'active'
}, {
  id: 3,
  name: 'Inactive',
  value: 'inactive'
}];
var TestChatbotListHeader = function TestChatbotListHeader(_ref) {
  var handleListDrawerClose = _ref.handleListDrawerClose,
    handleSearchQuery = _ref.handleSearchQuery,
    chatbotIsLoading = _ref.chatbotIsLoading,
    handleUpdateFilter = _ref.handleUpdateFilter,
    _ref$filter = _ref.filter,
    filter = _ref$filter === void 0 ? {} : _ref$filter,
    _ref$setFilter = _ref.setFilter,
    setFilter = _ref$setFilter === void 0 ? function () {} : _ref$setFilter;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(function (state) {
      return state.ui;
    }),
    headerHeight = _useSelector.headerHeight;
  var _useMediaQuery = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__["default"])({
      maxWidth: 1180
    }),
    breakpoint1180 = _useMediaQuery.matches;
  var _useMediaQuery2 = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_9__["default"])({
      maxWidth: 1474
    }),
    maxWidth_1474px = _useMediaQuery2.matches;
  var handleShortChange = function handleShortChange(value) {
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      sortBy: value
    }));
  };
  var handleStatusChange = function handleStatusChange(value) {
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      status: value
    }));
  };
  var handleResetFilter = function handleResetFilter() {
    setFilter({
      sortBy: '',
      status: ''
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "flex items-center justify-between px-4 py-3 border-b border-b-gray-2 dark:border-b-clr47",
      style: {
        height: headerHeight
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "flex items-center ml-6 md:ml-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ArrowButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onAction: handleListDrawerClose,
          className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_8__["default"])('hidden', {
            flex: maxWidth_1474px
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
            className: "transform rotate-180",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_6__.RightArrowIcon, {})
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          className: "text-dark-1 dark:text-white font-medium text-lg",
          children: "Chatbot"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, {
        to: "/".concat(_constants_chatbotUrls__WEBPACK_IMPORTED_MODULE_1__.ROUTING_TREE.CHATBOATS.CREATE_SETUP),
        className: "flex-shrink-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "h-[34px] bg-white dark:bg-dark-shade-1 px-3 border border-gray-2 hover:border-gray-1 dark:hover:border-gray-1 dark:border-clr47 text-dark-1 dark:text-white text-sm font-normal transition",
          startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_6__.RobotIcon, {}),
          children: "Create New"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "px-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "my-3 flex items-center gap-2.5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
          placeholder: "Search chatbot",
          Icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_6__.SearchIcon, {}),
          isLoading: chatbotIsLoading,
          onChange: handleSearchQuery
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DropdownFilter__WEBPACK_IMPORTED_MODULE_4__["default"], {
          btnLabel: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_6__.FilterLinesIcon, {}),
          btnStyles: "flex-shrink-0 flex items-center justify-center h-[44px] w-[44px] rounded-xl bg-white dark:bg-dark-shade-1 border border-gray-2 dark:border-clr47 hover:border-gray-1 dark:hover:border-gray-1 outline-none focus:outline-none text-dark-1 dark:text-white transition",
          positionStyles: "w-fit",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_FilterPopup__WEBPACK_IMPORTED_MODULE_5__["default"], {
            firstFilterData: sortData,
            secondFilterData: statusData,
            selectedFirstFilter: filter.sortBy,
            selectedSecondFilter: filter.status,
            reset: handleResetFilter,
            update: handleUpdateFilter,
            handleFirstFilterChange: handleShortChange,
            handleSecondFilterChange: handleStatusChange
          })
        })]
      }), Object.values(filter).some(function (item) {
        return item;
      }) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "mb-3 flex gap-2 justify-between items-start",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "flex items-center gap-2 flex-wrap",
          children: Object.values(filter).map(function (item) {
            if (item) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "w-fit bg-white dark:bg-dark-shade-1 border border-gray-2 dark:border-clr47 rounded-full text-dark-1 dark:text-white text-xs px-2 py-[2px]",
              children: item.name
            }, item.name);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
          onClick: handleResetFilter,
          className: "text-gray-1 mr-3 mt-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_6__.CloseIcon, {})
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestChatbotListHeader);

/***/ }),

/***/ "./Resources/js/app/pages/test/Test.jsx":
/*!**********************************************!*\
  !*** ./Resources/js/app/pages/test/Test.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SEO */ "./Resources/js/app/components/SEO.jsx");
/* harmony import */ var _components_ArrowButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ArrowButton */ "./Resources/js/app/components/ArrowButton.jsx");
/* harmony import */ var _components_ChatFabButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ChatFabButton */ "./Resources/js/app/components/ChatFabButton.jsx");
/* harmony import */ var _components_test_TestChatbotList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/test/TestChatbotList */ "./Resources/js/app/components/test/TestChatbotList.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useMediaQuery */ "./Resources/js/app/hooks/useMediaQuery.jsx");
/* harmony import */ var _hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useLangTranslation */ "./Resources/js/app/hooks/useLangTranslation.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

// ** React Imports


// ** React router dom


// ** custom Components





// ** Icons


// ** Utils


// ** Hooks




var TestPage = function TestPage() {
  var _chatbot$meta;
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useLocation)(),
    state = _useLocation.state;
  var _useLangTranslation = (0,_hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    trans = _useLangTranslation.trans;
  var _useMediaQuery = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_7__["default"])({
      maxWidth: 1474
    }),
    maxWidth_1474px = _useMediaQuery.matches;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(function (state) {
      return state.testMode;
    }),
    chatbot = _useSelector.chatbot;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    listDrawerOpen = _useState2[0],
    setListDrawerOpen = _useState2[1];
  var handleListDrawerOpen = function handleListDrawerOpen() {
    setListDrawerOpen(true);
  };
  var handleListDrawerClose = function handleListDrawerClose() {
    setListDrawerOpen(false);
  };

  // auto open drawer when drawer close and screen size is less than 1474px
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!maxWidth_1474px && !listDrawerOpen) {
      setListDrawerOpen(true);
    }
  }, [maxWidth_1474px, listDrawerOpen]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "".concat(trans('Test'), " - ").concat(trans(/* unsupported import.meta.env.VITE_WEBSITE_NAME */ undefined.VITE_WEBSITE_NAME), " ").concat(trans('Chatbot')),
      description: "".concat(/* unsupported import.meta.env.VITE_WEBSITE_NAME */ undefined.VITE_WEBSITE_NAME, " is a chatbot builder platform. Create your own chatbot with our easy-to-use chatbot builder"),
      name: "".concat(/* unsupported import.meta.env.VITE_WEBSITE_NAME */ undefined.VITE_WEBSITE_NAME, " Chatbot"),
      type: "website"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "h-full overflow-y-hidden",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "relative flex h-full overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_test_TestChatbotList__WEBPACK_IMPORTED_MODULE_4__["default"], {
          listDrawerOpen: listDrawerOpen,
          navigateState: state,
          handleListDrawerClose: handleListDrawerClose
        }), chatbot && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "corner-gradient-bg bg-cover bg-no-repeat bg-right-bottom h-full flex flex-col w-full bg-bg-2 dark:bg-dark-bg border-r border-r-gray-2 dark:border-r-clr47",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "max-w-[1006px] w-full h-full mx-auto px-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "flex flex-col h-full w-full overflow-y-auto",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "mt-[17.2px] mb-5 ml-6 md:ml-0 flex items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ArrowButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  onAction: handleListDrawerOpen,
                  className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_6__["default"])('hidden z-50', {
                    flex: maxWidth_1474px && !listDrawerOpen
                  }),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_5__.RightArrowIcon, {})
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h4", {
                  className: "text-lg font-medium text-dark-1 dark:text-white",
                  children: "Test Mode"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "mt-auto ml-auto",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Outlet, {})
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "ml-auto mt-3 mb-8",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ChatFabButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  badge: 0,
                  theme: {
                    color: chatbot === null || chatbot === void 0 || (_chatbot$meta = chatbot.meta) === null || _chatbot$meta === void 0 ? void 0 : _chatbot$meta.theme_color
                  }
                })
              })]
            })
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestPage);

/***/ })

}]);