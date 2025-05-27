(self["webpackChunk"] = self["webpackChunk"] || []).push([["Resources_js_app_pages_chatbot_Details_jsx"],{

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./Resources/js/app/components/ChatbotInstallation.jsx":
/*!*************************************************************!*\
  !*** ./Resources/js/app/components/ChatbotInstallation.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./Resources/js/app/components/Button.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextArea */ "./Resources/js/app/components/TextArea.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var ChatbotInstallation = function ChatbotInstallation(_ref) {
  var _ref$snippet = _ref.snippet,
    snippet = _ref$snippet === void 0 ? '' : _ref$snippet,
    isLoading = _ref.isLoading;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    copied = _useState2[0],
    setCopied = _useState2[1];

  // after 2 seconds setCopied to false
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (copied) {
      setTimeout(function () {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "flex flex-col xl:flex-row gap-4 w-full bg-white dark:bg-dark-shade-2 px-6 py-5 rounded-xl mb-1",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex flex-col w-full max-w-[280px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "text-dark-1 dark:text-white font-medium text-lg",
        children: "Chatbot Installation"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "text-gray-1 font-normal text-sm mb-5",
        children: "Paste the code snippet just before the tag"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()), {
        text: snippet,
        onCopy: function onCopy() {
          return setCopied(true);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "mt-auto flex-shrink-0 h-[44px] w-fit px-6 py-[11px] text-sm font-medium text-white bg-dark-1 rounded-lg transition-opacity hover:opacity-90",
          startIcon: copied ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.CheckIcon, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.CopyIcon, {}),
          children: "Copy to Clipboard"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "w-full",
      children: isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "animate-pulse",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "border border-gray-2 dark:border-clr47 rounded-xl h-[163px] w-full bg-gray-2 dark:bg-gray-1"
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TextArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
        readOnly: true,
        spellCheck: "false",
        className: "h-[163px] text-gray-1 text-[15px] resize-none",
        value: snippet
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotInstallation);

/***/ }),

/***/ "./Resources/js/app/components/ChatbotStatus.jsx":
/*!*******************************************************!*\
  !*** ./Resources/js/app/components/ChatbotStatus.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select */ "./Resources/js/app/components/Select.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useLangTranslation */ "./Resources/js/app/hooks/useLangTranslation.jsx");
/* harmony import */ var _store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/services/chatbotApi */ "./Resources/js/app/store/services/chatbotApi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





// ** hooks


// ** services


var statuses = [{
  id: 1,
  name: 'Active',
  value: 'active',
  color: '#48B460'
}, {
  id: 2,
  name: 'Inactive',
  value: 'inactive',
  color: '#DF2F2F'
}];
var ChatbotStatus = function ChatbotStatus(_ref) {
  var chatbotCode = _ref.chatbotCode,
    chatbotStatus = _ref.chatbotStatus,
    isLoading = _ref.isLoading;
  var _useLangTranslation = (0,_hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    trans = _useLangTranslation.trans;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    status = _useState2[0],
    setStatus = _useState2[1];

  // update chatbot mutation
  var _useUpdateChatbotMuta = (0,_store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_5__.useUpdateChatbotMutation)(),
    _useUpdateChatbotMuta2 = _slicedToArray(_useUpdateChatbotMuta, 1),
    updateChatbot = _useUpdateChatbotMuta2[0];
  var handleChatbotStatus = function handleChatbotStatus(status) {
    setStatus(status);
    updateChatbot({
      code: chatbotCode,
      body: {
        _method: 'PATCH',
        status: status.name
      }
    }).unwrap().then(function () {
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(trans('Successfully updated chatbot status'));
    })["catch"](function (error) {
      var _error$data;
      react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error((error === null || error === void 0 || (_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.error) || trans('Failed to update chatbot status'));
    });
  };

  // set status on load
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (chatbotStatus === 'Active') {
      setStatus(statuses[0]);
    } else if (chatbotStatus === 'Inactive') {
      setStatus(statuses[1]);
    } else {
      setStatus('');
    }
  }, [chatbotStatus]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "bg-gradient-8 h-[100px] flex justify-center items-center w-full rounded-xl",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "h-[calc(100%-2px)] w-[calc(100%-2px)] flex gap-2 justify-between items-center bg-white dark:bg-dark-shade-2 px-6 py-[25px] rounded-[11px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "flex-1 text-dark-1 dark:text-white text-lg font-semibold whitespace-nowrap",
        children: "Chatbot Status"
      }), isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "animate-pulse w-[105px] h-[30px] rounded-[6px] text-white border-0 bg-gray-2 dark:bg-gray-1"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Select__WEBPACK_IMPORTED_MODULE_1__["default"], {
        parentClass: "w-[110px] bg-dark-1 rounded-[6px]",
        className: "w-[105px] h-[30px] rounded-[6px] bg-dark-1 dark:bg-dark-1 text-white border-0",
        shrink: true,
        id: "select-status",
        name: "select-status",
        Icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.ActiveIcon, {}),
        items: status ? statuses : [],
        selected: status,
        setSelected: function setSelected(status) {
          return handleChatbotStatus(status);
        },
        variant: "medium"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotStatus);

/***/ }),

/***/ "./Resources/js/app/components/TableNoData.jsx":
/*!*****************************************************!*\
  !*** ./Resources/js/app/components/TableNoData.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var TableNoData = function TableNoData(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'Not Trained' : _ref$title,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? 'Looks like you did not train your bot with Ai yet' : _ref$message;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "my-[58px]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      className: "font-semibold text-xl text-center text-dark-1 dark:text-white mb-3",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      className: "font-semibold text-[15px] text-center text-gray-1",
      children: message
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableNoData);

/***/ }),

/***/ "./Resources/js/app/components/TextArea.jsx":
/*!**************************************************!*\
  !*** ./Resources/js/app/components/TextArea.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["className", "isShadow"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }



var TextArea = function TextArea(_ref) {
  var className = _ref.className,
    isShadow = _ref.isShadow,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea", _objectSpread(_objectSpread({}, rest), {}, {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('w-full h-[90px] max-h-[200px] p-3 bg-white dark:bg-dark-shade-1 border border-gray-2 dark:border-clr47 rounded-xl text-15 font-medium focus:outline-none active:outline-none hover:border-gray-1 dark:hover:border-gray-1 transition ease-out duration-200 placeholder:text-gray-1 text-dark-1 dark:text-white', className, {
      'shadow-input': isShadow
    })
  }));
};
TextArea.propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  isShadow: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);

/***/ }),

/***/ "./Resources/js/app/components/chatbotDetails/LastTrainingMaterialsTable.jsx":
/*!***********************************************************************************!*\
  !*** ./Resources/js/app/components/chatbotDetails/LastTrainingMaterialsTable.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var _TableNoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TableNoData */ "./Resources/js/app/components/TableNoData.jsx");
/* harmony import */ var _skeleton_TableSkeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skeleton/TableSkeleton */ "./Resources/js/app/components/skeleton/TableSkeleton.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var _store_services_trainingApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/services/trainingApi */ "./Resources/js/app/store/services/trainingApi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var LastTrainingMaterialsTable = function LastTrainingMaterialsTable(_ref) {
  var _materialsError$data;
  var chatbotCode = _ref.chatbotCode,
    navigateToAITraining = _ref.navigateToAITraining;
  // get training materials query
  var _useGetTrainingMateri = (0,_store_services_trainingApi__WEBPACK_IMPORTED_MODULE_4__.useGetTrainingMaterialsQuery)({
      code: chatbotCode
    }, {
      skip: !chatbotCode
    }),
    _useGetTrainingMateri2 = _useGetTrainingMateri.data,
    _useGetTrainingMateri3 = _useGetTrainingMateri2 === void 0 ? {} : _useGetTrainingMateri2,
    _useGetTrainingMateri4 = _useGetTrainingMateri3.data,
    trainingMaterials = _useGetTrainingMateri4 === void 0 ? [] : _useGetTrainingMateri4,
    materialsIsLoading = _useGetTrainingMateri.isLoading,
    materialsIsSuccess = _useGetTrainingMateri.isSuccess,
    materialsIsError = _useGetTrainingMateri.isError,
    materialsError = _useGetTrainingMateri.error;
  if (materialsIsLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_skeleton_TableSkeleton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      rowLength: 5,
      cellLength: 4
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "w-full bg-white dark:bg-dark-shade-2 rounded-xl pt-5 pb-[3px] px-6",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex items-center gap-3 justify-between mb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "text-dark-1 dark:text-white text-lg font-medium",
        children: "Last Training Materials"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
        onClick: navigateToAITraining,
        className: "flex items-center gap-[3px] text-gray-1 font-medium text-[13px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: "See more"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon, {})]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "relative overflow-x-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("table", {
        className: "w-full text-sm text-left rtl:text-right text-dark-1 dark:text-white",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tbody", {
          children: [!materialsIsLoading && materialsIsSuccess && (trainingMaterials === null || trainingMaterials === void 0 ? void 0 : trainingMaterials.length) > 0 && (trainingMaterials === null || trainingMaterials === void 0 ? void 0 : trainingMaterials.slice(0, 5).map(function (tm, i) {
            var _tm$meta, _tm$meta2, _tm$meta3, _tm$meta4, _tm$meta5;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
              className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('bg-white dark:bg-dark-shade-2 border-b-gray-3 dark:border-b-clr47', {
                'border-b': i !== (trainingMaterials === null || trainingMaterials === void 0 ? void 0 : trainingMaterials.length) - 1
              }),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                className: "pr-3 py-5 text-clr47 dark:text-gray-2",
                children: tm === null || tm === void 0 ? void 0 : tm.original_name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                className: "px-3 py-5 text-clr47 dark:text-gray-2 w-[200px]",
                children: tm === null || tm === void 0 ? void 0 : tm.type
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                className: "px-3 py-5 text-clr47 dark:text-gray-2 whitespace-nowrap w-[100px]",
                children: tm === null || tm === void 0 || (_tm$meta = tm.meta) === null || _tm$meta === void 0 ? void 0 : _tm$meta.last_trained
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
                align: "right",
                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('px-3 py-5 text-clr47 dark:text-gray-2 whitespace-nowrap w-[200px]', {
                  'text-green-1 dark:text-green-1': (tm === null || tm === void 0 || (_tm$meta2 = tm.meta) === null || _tm$meta2 === void 0 ? void 0 : _tm$meta2.state) === 'Trained',
                  'text-red dark:text-red': (tm === null || tm === void 0 || (_tm$meta3 = tm.meta) === null || _tm$meta3 === void 0 ? void 0 : _tm$meta3.state) === 'Untrained'
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                  className: "flex items-center justify-end gap-1",
                  children: [(tm === null || tm === void 0 || (_tm$meta4 = tm.meta) === null || _tm$meta4 === void 0 ? void 0 : _tm$meta4.state) === 'Trained' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_3__.SparklerIcon, {}), tm === null || tm === void 0 || (_tm$meta5 = tm.meta) === null || _tm$meta5 === void 0 ? void 0 : _tm$meta5.state, ' ']
                })
              })]
            }, i);
          })), !materialsIsLoading && materialsIsError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
            className: "text-center",
            colSpan: 6,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TableNoData__WEBPACK_IMPORTED_MODULE_1__["default"], {
              title: "Error",
              message: materialsError === null || materialsError === void 0 || (_materialsError$data = materialsError.data) === null || _materialsError$data === void 0 ? void 0 : _materialsError$data.error
            })
          }), !materialsIsLoading && materialsIsSuccess && (trainingMaterials === null || trainingMaterials === void 0 ? void 0 : trainingMaterials.length) === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
            className: "text-center",
            colSpan: 6,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_TableNoData__WEBPACK_IMPORTED_MODULE_1__["default"], {})
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastTrainingMaterialsTable);

/***/ }),

/***/ "./Resources/js/app/components/skeleton/DetailsProfileSkeleton.jsx":
/*!*************************************************************************!*\
  !*** ./Resources/js/app/components/skeleton/DetailsProfileSkeleton.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var DetailsProfileSkeleton = function DetailsProfileSkeleton() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "animate-pulse mt-7 flex sm:items-center items-start gap-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "w-[72px] h-[72px] rounded-full bg-gray-2 dark:bg-gray-1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "h-5 w-[150px] rounded-xl bg-gray-2 dark:bg-gray-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "mt-5 h-3 w-[200px] rounded-lg bg-gray-2 dark:bg-gray-1"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailsProfileSkeleton);

/***/ }),

/***/ "./Resources/js/app/components/skeleton/TableSkeleton.jsx":
/*!****************************************************************!*\
  !*** ./Resources/js/app/components/skeleton/TableSkeleton.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var TableSkeleton = function TableSkeleton(_ref) {
  var _ref$thData = _ref.thData,
    thData = _ref$thData === void 0 ? [] : _ref$thData,
    _ref$rowLength = _ref.rowLength,
    rowLength = _ref$rowLength === void 0 ? 5 : _ref$rowLength,
    _ref$cellLength = _ref.cellLength,
    cellLength = _ref$cellLength === void 0 ? 6 : _ref$cellLength;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "relative overflow-x-auto",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table", {
      className: "w-full text-sm text-left rtl:text-right text-dark-1 dark:text-white",
      children: [thData.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
        className: "h-6 bg-gray-2 dark:bg-clr47",
        children: Array.from({
          length: cellLength
        }).map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
            className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('px-3', {
              'rounded-tl-lg': i === 0,
              'rounded-tr-lg': i === cellLength - 1
            })
          }, i + 1);
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
        className: "bg-gray-2 dark:bg-clr47 font-medium",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tr", {
          className: "h-10",
          children: thData === null || thData === void 0 ? void 0 : thData.map(function (th, idx) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
              scope: "col",
              className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('px-3', {
                'rounded-tl-lg': idx === 0,
                'rounded-tr-lg': idx === thData.length - 1
              }),
              children: th
            }, idx + 1);
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody", {
        children: Array.from({
          length: rowLength
        }).map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tr", {
            className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('bg-white dark:bg-dark-shade-2 border-b-gray-3 dark:border-b-clr47', {
              'border-b': i !== rowLength - 1
            }),
            children: Array.from({
              length: cellLength
            }).map(function (_, tdIdx) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('px-3 py-5', {
                  // apply border radius to the last cell of the last row
                  'rounded-br-lg': i === rowLength - 1 && tdIdx === cellLength - 1,
                  // apply border radius to the first cell of the last row
                  'rounded-bl-lg': i === rowLength - 1 && tdIdx === 0
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "animate-pulse h-5 w-28 rounded bg-gray-2 dark:bg-gray-1"
                })
              }, tdIdx + 1);
            })
          }, i);
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableSkeleton);

/***/ }),

/***/ "./Resources/js/app/pages/chatbot/Details.jsx":
/*!****************************************************!*\
  !*** ./Resources/js/app/pages/chatbot/Details.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Button */ "./Resources/js/app/components/Button.jsx");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Avatar */ "./Resources/js/app/components/Avatar.jsx");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Modal */ "./Resources/js/app/components/Modal.jsx");
/* harmony import */ var _components_InfoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/InfoCard */ "./Resources/js/app/components/InfoCard.jsx");
/* harmony import */ var _components_NoChatbot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NoChatbot */ "./Resources/js/app/components/NoChatbot.jsx");
/* harmony import */ var _components_ChatbotStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ChatbotStatus */ "./Resources/js/app/components/ChatbotStatus.jsx");
/* harmony import */ var _components_DeleteModalContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/DeleteModalContent */ "./Resources/js/app/components/DeleteModalContent.jsx");
/* harmony import */ var _components_ChatbotInstallation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ChatbotInstallation */ "./Resources/js/app/components/ChatbotInstallation.jsx");
/* harmony import */ var _components_chatbotDetails_LastTrainingMaterialsTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/chatbotDetails/LastTrainingMaterialsTable */ "./Resources/js/app/components/chatbotDetails/LastTrainingMaterialsTable.jsx");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _constants_chatbotUrls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/chatbotUrls */ "./Resources/js/app/constants/chatbotUrls.js");
/* harmony import */ var _components_skeleton_DetailsProfileSkeleton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/skeleton/DetailsProfileSkeleton */ "./Resources/js/app/components/skeleton/DetailsProfileSkeleton.jsx");
/* harmony import */ var _store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/services/chatbotApi */ "./Resources/js/app/store/services/chatbotApi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


// ** React router dom


// ** Redux Imports


// ** Components Import










// ** Icons Import


// ** Utils


// ** Toastify


// ** Constants


// ** Skeletons


// services


var ChatbotDetailsPage = function ChatbotDetailsPage() {
  var _chatbot$meta, _chatbot$meta2;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useNavigate)();
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__.useParams)(),
    chatbotId = _useParams.id;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.useSelector)(function (state) {
      return state.ui;
    }),
    isCollapse = _useSelector.isCollapse;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];

  // get chatbot details by id
  var _useGetChatbotDetails = (0,_store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_15__.useGetChatbotDetailsByIdQuery)(chatbotId),
    _useGetChatbotDetails2 = _useGetChatbotDetails.data,
    _useGetChatbotDetails3 = _useGetChatbotDetails2 === void 0 ? {} : _useGetChatbotDetails2,
    _useGetChatbotDetails4 = _useGetChatbotDetails3.data,
    chatbot = _useGetChatbotDetails4 === void 0 ? {} : _useGetChatbotDetails4,
    chatbotIsLoading = _useGetChatbotDetails.isLoading,
    chatbotIsError = _useGetChatbotDetails.isError,
    chatbotError = _useGetChatbotDetails.error;

  // delete chatbot by id
  var _useDeleteChatbotMuta = (0,_store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_15__.useDeleteChatbotMutation)(),
    _useDeleteChatbotMuta2 = _slicedToArray(_useDeleteChatbotMuta, 2),
    deleteChatbot = _useDeleteChatbotMuta2[0],
    isDeleting = _useDeleteChatbotMuta2[1].isLoading;
  var handleDeleteDialog = function handleDeleteDialog(value) {
    setIsOpen(value);
  };

  // chatbot delete by id
  var getPermission = function getPermission(value) {
    if (value) {
      deleteChatbot(chatbotId).unwrap().then(function (payload) {
        navigate("/".concat(_constants_chatbotUrls__WEBPACK_IMPORTED_MODULE_13__.ROUTING_TREE.CHATBOATS.ROOT));
        setIsOpen(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success((payload === null || payload === void 0 ? void 0 : payload.message) || trans('Chatbot deleted successfully'));
      })["catch"](function (err) {
        var _err$data;
        setIsOpen(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.error((err === null || err === void 0 || (_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.error) || trans('Chatbot could not be deleted'));
      });
    }
  };
  var navigateToCustomize = function navigateToCustomize() {
    navigate("/".concat(_constants_chatbotUrls__WEBPACK_IMPORTED_MODULE_13__.ROUTING_TREE.CUSTOMIZATIONS), {
      state: _objectSpread({
        name: chatbot === null || chatbot === void 0 ? void 0 : chatbot.name,
        code: chatbot === null || chatbot === void 0 ? void 0 : chatbot.code
      }, chatbot === null || chatbot === void 0 ? void 0 : chatbot.meta)
    });
  };
  var navigateToTestRun = function navigateToTestRun() {
    navigate("/".concat(_constants_chatbotUrls__WEBPACK_IMPORTED_MODULE_13__.ROUTING_TREE.TEST), {
      state: _objectSpread({
        name: chatbot === null || chatbot === void 0 ? void 0 : chatbot.name,
        code: chatbot === null || chatbot === void 0 ? void 0 : chatbot.code
      }, chatbot === null || chatbot === void 0 ? void 0 : chatbot.meta)
    });
  };
  var navigateToAITraining = function navigateToAITraining() {
    navigate("/".concat(_constants_chatbotUrls__WEBPACK_IMPORTED_MODULE_13__.ROUTING_TREE.AI_TRAINING), {
      state: _objectSpread({
        name: chatbot === null || chatbot === void 0 ? void 0 : chatbot.name,
        code: chatbot === null || chatbot === void 0 ? void 0 : chatbot.code
      }, chatbot === null || chatbot === void 0 ? void 0 : chatbot.meta)
    });
  };

  // ** show error message if chatbot is not found
  if (!chatbotIsLoading && chatbotIsError) {
    var _chatbotError$data;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      className: "h-full fle p-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_NoChatbot__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: "Not Found",
        message: chatbotError === null || chatbotError === void 0 || (_chatbotError$data = chatbotError.data) === null || _chatbotError$data === void 0 ? void 0 : _chatbotError$data.error
      })
    });
  }

  // ** show details of chatbot
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
    className: "h-full overflow-y-auto mr-[3px]",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: "max-w-[1280px] mx-auto px-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("button", {
        onClick: function onClick() {
          return navigate(-1);
        },
        className: "flex-shrink-0 mt-7 ml-7 md:ml-0 flex items-center gap-[7px] text-dark-1 dark:text-white text-15 font-normal",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_10__.LeftArrowIcon, {
          className: "text-gray-1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
          children: "Back"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_11__["default"])('flex flex-col xl:flex-row gap-9 justify-between mb-5'),
        children: [chatbotIsLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_skeleton_DetailsProfileSkeleton__WEBPACK_IMPORTED_MODULE_14__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_11__["default"])('mt-7 flex sm:items-center items-start gap-4'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
            alt: "Avatar",
            className: "h-[72px] w-[72px] bg-white dark:bg-dark-shade-1",
            src: chatbot === null || chatbot === void 0 || (_chatbot$meta = chatbot.meta) === null || _chatbot$meta === void 0 || (_chatbot$meta = _chatbot$meta.image) === null || _chatbot$meta === void 0 ? void 0 : _chatbot$meta.url
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h3", {
              className: "flex-shrink-0 text-dark-1 dark:text-white font-[600] text-[28px] font-redhat",
              children: chatbot === null || chatbot === void 0 ? void 0 : chatbot.name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("p", {
              className: "font-medium text-gray-1 text-base mt-1",
              children: ["Chatbot Code", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
                className: "ml-2 text-clr47 dark:text-gray-2",
                children: chatbot === null || chatbot === void 0 ? void 0 : chatbot.code
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: "flex-1 flex items-center xl:justify-end gap-2 xl:self-end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
            onClick: navigateToCustomize,
            className: "flex-shrink-0 w-full max-w-[143px] h-[44px] px-3 gap-0 bg-white dark:bg-dark-shade-1 border border-gray-2 hover:border-gray-1 dark:border-clr47 dark:hover:border-gray-1 text-sm font-medium text-dark-1 dark:text-white transition disabled:border-gray-2",
            startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_10__.MagicIcon, {}),
            disabled: chatbotIsLoading,
            children: "Customize"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
            onClick: navigateToTestRun,
            className: "flex-shrink-0 w-fit text-sm font-medium bg-dark-1 dark:bg-dark-shade-1 dark:border border-clr47 dark:hover:border-gray-1 transition",
            startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_10__.DoubleMessageIcon, {}),
            disabled: chatbotIsLoading,
            children: "Test Run"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_11__["default"])('grid gap-3 lg:grid-cols-[420px,_1fr]', {
          'lg:grid-cols-1 xl:grid-cols-[420px,_1fr]': !isCollapse
        }),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: "flex flex-col gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ChatbotStatus__WEBPACK_IMPORTED_MODULE_6__["default"], {
            chatbotCode: chatbot === null || chatbot === void 0 ? void 0 : chatbot.code,
            chatbotStatus: chatbot === null || chatbot === void 0 ? void 0 : chatbot.status,
            isLoading: chatbotIsLoading
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_InfoCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "max-w-full",
            quantity: chatbot === null || chatbot === void 0 ? void 0 : chatbot.total_conversation,
            title: "All Conversations",
            link: "/".concat(_constants_chatbotUrls__WEBPACK_IMPORTED_MODULE_13__.ROUTING_TREE.CONVERSATIONS)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ChatbotInstallation__WEBPACK_IMPORTED_MODULE_8__["default"], {
          isLoading: chatbotIsLoading,
          snippet: chatbot === null || chatbot === void 0 || (_chatbot$meta2 = chatbot.meta) === null || _chatbot$meta2 === void 0 ? void 0 : _chatbot$meta2.script_code
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_11__["default"])('mt-3'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_chatbotDetails_LastTrainingMaterialsTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
          chatbotCode: chatbotId,
          navigateToAITraining: navigateToAITraining
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: "mt-10 mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {
          className: "text-sm font-medium text-gray-1",
          children: "Want to remove this bot permanently? Note that you can not restore any of its data back."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          onClick: function onClick() {
            return setIsOpen(true);
          },
          className: "mt-3 flex-shrink-0 w-full max-w-[120px] h-[34px] px-3 gap-0 text-sm font-medium dark:text-white transition bg-red text-white",
          startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_icons__WEBPACK_IMPORTED_MODULE_10__.DeleteIcon, {}),
          disabled: chatbotIsLoading,
          children: "Delete Bot"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_DeleteModalContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          handleDeleteDialog: handleDeleteDialog,
          getPermission: getPermission,
          isDeleting: isDeleting
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatbotDetailsPage);

/***/ }),

/***/ "./Resources/js/app/store/services/trainingApi.js":
/*!********************************************************!*\
  !*** ./Resources/js/app/store/services/trainingApi.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trainingApi: () => (/* binding */ trainingApi),
/* harmony export */   useAssetTrainingMutation: () => (/* binding */ useAssetTrainingMutation),
/* harmony export */   useDeleteMaterialMutation: () => (/* binding */ useDeleteMaterialMutation),
/* harmony export */   useFetchURLMutation: () => (/* binding */ useFetchURLMutation),
/* harmony export */   useGetDownloadMaterialQuery: () => (/* binding */ useGetDownloadMaterialQuery),
/* harmony export */   useGetTrainingMaterialsQuery: () => (/* binding */ useGetTrainingMaterialsQuery),
/* harmony export */   useTrainUpMutation: () => (/* binding */ useTrainUpMutation)
/* harmony export */ });
/* harmony import */ var _apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiSlice */ "./Resources/js/app/store/services/apiSlice.js");

var trainingApi = _apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.injectEndpoints({
  endpoints: function endpoints(build) {
    return {
      getTrainingMaterials: build.query({
        query: function query(_ref) {
          var code = _ref.code,
            _ref$page = _ref.page,
            page = _ref$page === void 0 ? '' : _ref$page,
            _ref$searchQuery = _ref.searchQuery,
            searchQuery = _ref$searchQuery === void 0 ? '' : _ref$searchQuery,
            _ref$type = _ref.type,
            type = _ref$type === void 0 ? '' : _ref$type,
            _ref$state = _ref.state,
            state = _ref$state === void 0 ? '' : _ref$state;
          return {
            url: "v2/widget/chatbot/materials/".concat(code, "?search=").concat(searchQuery, "&type=").concat(type, "&state=").concat(state, "&page=").concat(page)
          };
        },
        providesTags: ['Train']
      }),
      getDownloadMaterial: build.query({
        query: function query(code) {
          return {
            url: "v2/widget/chatbot/materials/".concat(code, "/download/csv")
          };
        }
      }),
      assetTraining: build.mutation({
        // assetTraining means to store data for training the chatbot like [file upload, text, url add]
        query: function query(_ref2) {
          var data = _ref2.data;
          return {
            url: "v2/widget/chatbot/materials/store/".concat(data.code),
            method: 'POST',
            body: data.body
          };
        },
        invalidatesTags: ['Train']
      }),
      trainUp: build.mutation({
        query: function query(_ref3) {
          var data = _ref3.data;
          return {
            url: "v2/widget/chatbot/materials/train/".concat(data.code),
            method: 'POST',
            body: data.body
          };
        },
        invalidatesTags: ['Train']
      }),
      fetchURL: build.mutation({
        query: function query(data) {
          return {
            url: 'v2/widget/chatbot/materials/fetch-url',
            method: 'POST',
            body: data
          };
        },
        providesTags: ['Train']
      }),
      deleteMaterial: build.mutation({
        query: function query(data) {
          return {
            url: "v2/widget/chatbot/materials/destroy",
            method: 'POST',
            body: data
          };
        },
        invalidatesTags: ['Train']
      })
    };
  },
  overrideExisting: false
});
var useGetTrainingMaterialsQuery = trainingApi.useGetTrainingMaterialsQuery,
  useAssetTrainingMutation = trainingApi.useAssetTrainingMutation,
  useFetchURLMutation = trainingApi.useFetchURLMutation,
  useTrainUpMutation = trainingApi.useTrainUpMutation,
  useDeleteMaterialMutation = trainingApi.useDeleteMaterialMutation,
  useGetDownloadMaterialQuery = trainingApi.useGetDownloadMaterialQuery;


/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/Component.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/Component.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CopyToClipboard = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _copyToClipboard = _interopRequireDefault(__webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js"));

var _excluded = ["text", "onCopy", "options", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CopyToClipboard = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(CopyToClipboard, _React$PureComponent);

  var _super = _createSuper(CopyToClipboard);

  function CopyToClipboard() {
    var _this;

    _classCallCheck(this, CopyToClipboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      var _this$props = _this.props,
          text = _this$props.text,
          onCopy = _this$props.onCopy,
          children = _this$props.children,
          options = _this$props.options;

      var elem = _react["default"].Children.only(children);

      var result = (0, _copyToClipboard["default"])(text, options);

      if (onCopy) {
        onCopy(text, result);
      } // Bypass onClick if it was present


      if (elem && elem.props && typeof elem.props.onClick === 'function') {
        elem.props.onClick(event);
      }
    });

    return _this;
  }

  _createClass(CopyToClipboard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _text = _this$props2.text,
          _onCopy = _this$props2.onCopy,
          _options = _this$props2.options,
          children = _this$props2.children,
          props = _objectWithoutProperties(_this$props2, _excluded);

      var elem = _react["default"].Children.only(children);

      return /*#__PURE__*/_react["default"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, {
        onClick: this.onClick
      }));
    }
  }]);

  return CopyToClipboard;
}(_react["default"].PureComponent);

exports.CopyToClipboard = CopyToClipboard;

_defineProperty(CopyToClipboard, "defaultProps", {
  onCopy: undefined,
  options: undefined
});

/***/ }),

/***/ "./node_modules/react-copy-to-clipboard/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-copy-to-clipboard/lib/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ./Component */ "./node_modules/react-copy-to-clipboard/lib/Component.js"),
    CopyToClipboard = _require.CopyToClipboard;

CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ })

}]);