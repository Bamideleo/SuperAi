"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Resources_js_app_pages_embed_chatbot_style-three_view_conversation_index_jsx"],{

/***/ "./Resources/js/app/components/skeleton/ChatItemSkeleton.jsx":
/*!*******************************************************************!*\
  !*** ./Resources/js/app/components/skeleton/ChatItemSkeleton.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HrzPositionWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HrzPositionWrapper */ "./Resources/js/app/components/HrzPositionWrapper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var ChatItemSkeleton = function ChatItemSkeleton() {
  return Array.from({
    length: 3
  }).map(function (_, index) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_HrzPositionWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
        $align: "right",
        className: "gap-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "animate-pulse",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "h-9 w-[150px] rounded-[10px] bg-gray-2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "ml-auto mt-1.5 h-2 w-[80px] rounded-md bg-gray-2"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_HrzPositionWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "!flex-row gap-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "animate-pulse",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "self-end flex items-center gap-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "h-[38px] w-[38px] rounded-full bg-gray-2"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "h-9 w-[200px] rounded-[10px] bg-gray-2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "mt-1.5 h-2 w-[80px] rounded-md bg-gray-2"
                })]
              })]
            })
          })
        })
      })]
    }, index);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatItemSkeleton);

/***/ }),

/***/ "./Resources/js/app/pages/embed/chatbot/style-three/components/Conversation.jsx":
/*!**************************************************************************************!*\
  !*** ./Resources/js/app/pages/embed/chatbot/style-three/components/Conversation.jsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BotAwait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../components/BotAwait */ "./Resources/js/app/components/BotAwait.jsx");
/* harmony import */ var _components_ChatDistributor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/ChatDistributor */ "./Resources/js/app/components/ChatDistributor.jsx");
/* harmony import */ var _components_skeleton_ChatItemSkeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/skeleton/ChatItemSkeleton */ "./Resources/js/app/components/skeleton/ChatItemSkeleton.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../store/slices/chatbotSlice */ "./Resources/js/app/store/slices/chatbotSlice.js");
/* harmony import */ var _store_services_apiSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../store/services/apiSlice */ "./Resources/js/app/store/services/apiSlice.js");
/* harmony import */ var _components_InfiniteChatScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/InfiniteChatScroll */ "./Resources/js/app/components/InfiniteChatScroll.jsx");
/* harmony import */ var _store_services_visitorApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../store/services/visitorApi */ "./Resources/js/app/store/services/visitorApi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


// ** components



// ** skeleton


// ** redux



// ** services




var Conversation = function Conversation(_ref) {
  var image = _ref.image,
    chatID = _ref.chatID,
    visitorID = _ref.visitorID,
    bgColor = _ref.bgColor;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {
      return state.chatbot;
    }),
    initialChat = _useSelector.initialChat,
    chatPage = _useSelector.chatPage;

  // get chat details by visitor & chat id  query
  var _useGetChatByVisitorN = (0,_store_services_visitorApi__WEBPACK_IMPORTED_MODULE_7__.useGetChatByVisitorNChatIDQuery)({
      visitorID: visitorID,
      chatID: chatID
    }, {
      skip: !chatID
    }),
    _useGetChatByVisitorN2 = _useGetChatByVisitorN.data,
    _useGetChatByVisitorN3 = _useGetChatByVisitorN2 === void 0 ? {} : _useGetChatByVisitorN2,
    chat = _useGetChatByVisitorN3.data,
    pagination = _useGetChatByVisitorN3.pagination,
    chatIsLoading = _useGetChatByVisitorN.isLoading,
    chatIsFetching = _useGetChatByVisitorN.isFetching,
    chatIsSuccess = _useGetChatByVisitorN.isSuccess,
    chatIsError = _useGetChatByVisitorN.isError;
  var patchFunc = function patchFunc(page) {
    dispatch(_store_services_apiSlice__WEBPACK_IMPORTED_MODULE_5__.apiSlice.endpoints.getMoreChatByVisitorNChatID.initiate({
      visitorID: visitorID,
      chatID: chatID,
      page: page
    }));
  };
  var patchPageFunc = function patchPageFunc(nextPage) {
    dispatch((0,_store_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_4__.setChatPage)(nextPage));
  };

  // content what to render
  var content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: "flex-1 w-full mx-auto flex flex-col gap-4 py-4 px-4 overflow-y-auto"
  });
  if (!initialChat.length && chatIsLoading) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "flex-1 w-full mx-auto flex flex-col gap-4 py-4 px-4 overflow-y-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_skeleton_ChatItemSkeleton__WEBPACK_IMPORTED_MODULE_3__["default"], {})
    });
  }
  if (!chatIsLoading && !chatIsError && chatIsSuccess && (chat === null || chat === void 0 ? void 0 : chat.length) > 0) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_InfiniteChatScroll__WEBPACK_IMPORTED_MODULE_6__["default"], {
      chat: chat,
      image: image,
      bgColor: bgColor,
      pagination: pagination,
      currentPage: chatPage,
      patchFunc: patchFunc,
      patchPageFunc: patchPageFunc,
      chatIsError: chatIsError,
      chatIsLoading: chatIsLoading,
      chatIsFetching: chatIsFetching
    });
  }
  if ((initialChat === null || initialChat === void 0 ? void 0 : initialChat.length) > 0) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "flex-1 w-full mx-auto flex flex-col gap-4 py-4 px-4 overflow-y-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ChatDistributor__WEBPACK_IMPORTED_MODULE_2__["default"], {
        chat: initialChat,
        bgColor: bgColor
      }), (initialChat === null || initialChat === void 0 ? void 0 : initialChat.find(function (item) {
        return item === null || item === void 0 ? void 0 : item.isTemp;
      })) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_BotAwait__WEBPACK_IMPORTED_MODULE_1__["default"], {
        image: image
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: content
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Conversation);

/***/ }),

/***/ "./Resources/js/app/pages/embed/chatbot/style-three/view/conversation/index.jsx":
/*!**************************************************************************************!*\
  !*** ./Resources/js/app/pages/embed/chatbot/style-three/view/conversation/index.jsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_PromptInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../components/PromptInput */ "./Resources/js/app/components/PromptInput.jsx");
/* harmony import */ var _components_Conversation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Conversation */ "./Resources/js/app/pages/embed/chatbot/style-three/components/Conversation.jsx");
/* harmony import */ var _components_ConversationFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ConversationFooter */ "./Resources/js/app/pages/embed/chatbot/style-three/components/ConversationFooter.jsx");
/* harmony import */ var _components_ConversationHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ConversationHeader */ "./Resources/js/app/pages/embed/chatbot/style-three/components/ConversationHeader.jsx");
/* harmony import */ var _components_CircleSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../components/CircleSpinner */ "./Resources/js/app/components/CircleSpinner.jsx");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../hooks/useLangTranslation */ "./Resources/js/app/hooks/useLangTranslation.jsx");
/* harmony import */ var _utils_generateChatbotLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../utils/generateChatbotLink */ "./Resources/js/app/utils/generateChatbotLink.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../store/slices/chatbotSlice */ "./Resources/js/app/store/slices/chatbotSlice.js");
/* harmony import */ var _store_services_visitorApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../store/services/visitorApi */ "./Resources/js/app/store/services/visitorApi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


// ** react-router-dom


// ** components






// ** third party components



// ** hooks


// ** utils


// ** Redux



// ** services


var ChatbotConversation = function ChatbotConversation() {
  var _state$meta, _state$meta2, _state$meta3, _state$meta4;
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useLocation)(),
    state = _useLocation.state;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_12__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();
  var _useLangTranslation = (0,_hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    trans = _useLangTranslation.trans;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    chatbotCode = _useState2[0],
    setChatbotCode = _useState2[1];
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(function (state) {
      return state.chatbot;
    }),
    chatID = _useSelector.chatID,
    visitorID = _useSelector.visitorID,
    chatPage = _useSelector.chatPage;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    checking = _useState4[0],
    setIsChecking = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    prompt = _useState6[0],
    setPrompt = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    lastVisitor = _useState8[0],
    setLastVisitor = _useState8[1];

  // post chat mutation
  var _usePostChatMutation = (0,_store_services_visitorApi__WEBPACK_IMPORTED_MODULE_10__.usePostChatMutation)(),
    _usePostChatMutation2 = _slicedToArray(_usePostChatMutation, 2),
    postChat = _usePostChatMutation2[0],
    isLoading = _usePostChatMutation2[1].isLoading;
  var handleSubmission = function handleSubmission() {
    if (chatPage > 1) {
      dispatch((0,_store_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_9__.setChatPage)(1));
    }
    if (!isLoading && prompt.length) {
      postChat({
        visitorID: visitorID,
        body: {
          prompt: prompt,
          chatbot_code: lastVisitor === null || lastVisitor === void 0 ? void 0 : lastVisitor.chatbotCode,
          chatbot_chat_id: chatID || null,
          visitor_id: visitorID || null
        }
      }).unwrap().then(function () {})["catch"](function (error) {
        var _error$data;
        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error((error === null || error === void 0 || (_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.error) || trans('Failed to send message'));
      });
    }
    // reset prompt
    setPrompt('');
  };

  //  get last visitor
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var code = window.location.pathname.split('/')[3].split('=')[1];
    setChatbotCode(code);
    // const lastVisitor = JSON.parse(localStorage.getItem(state?.code))
    var lastVisitor = JSON.parse(localStorage.getItem(code));
    if (lastVisitor) {
      setLastVisitor(lastVisitor);
      dispatch((0,_store_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_9__.setChatID)(lastVisitor === null || lastVisitor === void 0 ? void 0 : lastVisitor.chatID));
      dispatch((0,_store_slices_chatbotSlice__WEBPACK_IMPORTED_MODULE_9__.setVisitorID)(lastVisitor === null || lastVisitor === void 0 ? void 0 : lastVisitor.visitorID));
      setIsChecking(false);
    } else {
      navigate((0,_utils_generateChatbotLink__WEBPACK_IMPORTED_MODULE_8__.generateChatbotLink)('welcome', code));
    }
  }, [dispatch, navigate]);

  // check if last visitor is set
  if (checking) {
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
    style: {
      background: '#F6F3F2'
    },
    className: "flex flex-col w-full h-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ConversationHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      bgColor: state === null || state === void 0 || (_state$meta = state.meta) === null || _state$meta === void 0 ? void 0 : _state$meta.theme_color,
      preferences: {
        // code: state?.code,
        code: chatbotCode,
        name: state === null || state === void 0 ? void 0 : state.name,
        // image: state?.meta?.image?.url,
        image: lastVisitor === null || lastVisitor === void 0 ? void 0 : lastVisitor.chatbot_img,
        isActive: (state === null || state === void 0 ? void 0 : state.status) === 'Active' ? true : false
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Conversation__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: state === null || state === void 0 || (_state$meta2 = state.meta) === null || _state$meta2 === void 0 || (_state$meta2 = _state$meta2.image) === null || _state$meta2 === void 0 ? void 0 : _state$meta2.url,
      chatID: chatID
      // visitorID={lastVisitor?.visitorID}
      ,
      visitorID: visitorID,
      bgColor: state === null || state === void 0 || (_state$meta3 = state.meta) === null || _state$meta3 === void 0 ? void 0 : _state$meta3.theme_color
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_PromptInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
      prompt: prompt,
      setPrompt: setPrompt,
      handleSubmission: handleSubmission,
      isLoading: isLoading,
      iconColor: state === null || state === void 0 || (_state$meta4 = state.meta) === null || _state$meta4 === void 0 ? void 0 : _state$meta4.theme_color,
      divClassName: "!border-t-gray-2 !border-l-0 !border-r-0 !border-b-0"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_ConversationFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotConversation);

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