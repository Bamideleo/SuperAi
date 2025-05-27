(self["webpackChunk"] = self["webpackChunk"] || []).push([["Resources_js_app_pages_Conversations_jsx"],{

/***/ "./Resources/js/app/components/ArrowButton.jsx":
/*!*****************************************************!*\
  !*** ./Resources/js/app/components/ArrowButton.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var ArrowButton = function ArrowButton(_ref) {
  var onAction = _ref.onAction,
    children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    onClick: onAction,
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('flex-shrink-0 flex items-center justify-center mr-3 border h-6 w-6 rounded', className),
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowButton);

/***/ }),

/***/ "./Resources/js/app/components/BotAwait.jsx":
/*!**************************************************!*\
  !*** ./Resources/js/app/components/BotAwait.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar */ "./Resources/js/app/components/Avatar.jsx");
/* harmony import */ var _BotTyping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BotTyping */ "./Resources/js/app/components/BotTyping.jsx");
/* harmony import */ var _HrzPositionWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HrzPositionWrapper */ "./Resources/js/app/components/HrzPositionWrapper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var BotAwait = function BotAwait(_ref) {
  var _ref$isAvatar = _ref.isAvatar,
    isAvatar = _ref$isAvatar === void 0 ? true : _ref$isAvatar,
    _ref$image = _ref.image,
    image = _ref$image === void 0 ? '' : _ref$image;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_HrzPositionWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "!flex-row",
    children: [isAvatar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_0__["default"], {
      src: image,
      alt: "bot",
      className: "mr-3 h-[38px] w-[38px]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_BotTyping__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BotAwait);

/***/ }),

/***/ "./Resources/js/app/components/BotTyping.jsx":
/*!***************************************************!*\
  !*** ./Resources/js/app/components/BotTyping.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }


var StyledTypingAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  max-width: 80px;\n  width: 100%;\n  height: 36px;\n  border-radius: 10px;\n  overflow: hidden;\n  .dot-1,\n  .dot-2,\n  .dot-3,\n  .dot-4 {\n    width: 8px;\n    height: 8px;\n    background: #898989;\n    border-radius: 50%;\n    animation: zooming 1s ease infinite;\n  }\n  .dot-1 {\n    animation-delay: 0s;\n  }\n  .dot-2 {\n    animation-delay: 0.2s;\n  }\n  .dot-3 {\n    animation-delay: 0.3s;\n  }\n  .dot-4 {\n    animation-delay: 0.5s;\n  }\n  @keyframes zooming {\n    0% {\n      transform: scale(0.25);\n    }\n    50% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0.25);\n    }\n  }\n"])));
var BotTyping = function BotTyping() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTypingAnimation, {
    className: "bg-white",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "dot-1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "dot-2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "dot-3"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "dot-4"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BotTyping);

/***/ }),

/***/ "./Resources/js/app/components/ChatDistributor.jsx":
/*!*********************************************************!*\
  !*** ./Resources/js/app/components/ChatDistributor.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar */ "./Resources/js/app/components/Avatar.jsx");
/* harmony import */ var _TextCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextCard */ "./Resources/js/app/components/TextCard.jsx");
/* harmony import */ var _HrzPositionWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HrzPositionWrapper */ "./Resources/js/app/components/HrzPositionWrapper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var ChatDistributor = function ChatDistributor(_ref) {
  var _ref$chat = _ref.chat,
    chat = _ref$chat === void 0 ? [] : _ref$chat,
    _ref$bgColor = _ref.bgColor,
    bgColor = _ref$bgColor === void 0 ? '' : _ref$bgColor,
    _ref$chatBgColor = _ref.chatBgColor,
    chatBgColor = _ref$chatBgColor === void 0 ? '' : _ref$chatBgColor,
    _ref$image = _ref.image,
    image = _ref$image === void 0 ? '' : _ref$image;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
      return state.chatbot;
    }),
    visitor = _useSelector.visitor;
  return chat === null || chat === void 0 ? void 0 : chat.slice().sort(function (a, b) {
    return a.id - b.id;
  }).map(function (item) {
    var _item$meta, _item$meta2, _item$bot_details, _item$meta3;
    return item !== null && item !== void 0 && (_item$meta = item.meta) !== null && _item$meta !== void 0 && _item$meta.visitor_reply ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HrzPositionWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      $align: "right",
      className: "gap-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TextCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "flex flex-col items-end",
        style: {
          background: bgColor ? bgColor : '#' + /* unsupported import.meta.env.VITE_DEFAULT_THEME_COLOR */ undefined.VITE_DEFAULT_THEME_COLOR,
          color: '#FFFFFF'
        },
        timeStampStyle: {
          color: '#898989'
        },
        variant: "filled",
        align: "right",
        timeStamp: item === null || item === void 0 ? void 0 : item.created_at,
        children: item === null || item === void 0 || (_item$meta2 = item.meta) === null || _item$meta2 === void 0 ? void 0 : _item$meta2.visitor_reply
      })
    }, item === null || item === void 0 ? void 0 : item.id) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_HrzPositionWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "!flex-row gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_0__["default"], {
        alt: "Avatar",
        className: "h-[38px] w-[38px]"
        // src={visitor?.chatbot_img}
        ,
        src: (item === null || item === void 0 || (_item$bot_details = item.bot_details) === null || _item$bot_details === void 0 || (_item$bot_details = _item$bot_details.meta) === null || _item$bot_details === void 0 || (_item$bot_details = _item$bot_details.image) === null || _item$bot_details === void 0 ? void 0 : _item$bot_details.url) || image
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TextCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: {
          background: chatBgColor ? chatBgColor : '#FFFFFF',
          color: '#141414'
        },
        timeStampStyle: {
          color: '#898989'
        },
        className: "max-w-[inherit]",
        character: "bot",
        timeStamp: item === null || item === void 0 ? void 0 : item.created_at,
        children: item === null || item === void 0 || (_item$meta3 = item.meta) === null || _item$meta3 === void 0 ? void 0 : _item$meta3.chatbot_reply
      })]
    }, item === null || item === void 0 ? void 0 : item.id);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatDistributor);

/***/ }),

/***/ "./Resources/js/app/components/ConversationItem.jsx":
/*!**********************************************************!*\
  !*** ./Resources/js/app/components/ConversationItem.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var ConversationItem = function ConversationItem(_ref) {
  var onAction = _ref.onAction,
    selected = _ref.selected,
    name = _ref.name,
    userId = _ref.userId,
    desc = _ref.desc,
    image = _ref.image,
    created = _ref.created,
    className = _ref.className;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
      return state.preferences;
    }),
    defaultImage = _useSelector.defaultImage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('h-full max-h-[116px] w-full sm:min-w-[375px] max-w-[488px] px-2.5 py-[14px] rounded-lg bg-white dark:bg-dark-shade-1 border border-white dark:border-clr47 hover:border-gray-1, dark:hover:border-gray-1 text-xs font-light cursor-pointer overflow-hidden transition', className, {
      'border-gray-1 dark:border-gray-1': selected
    }),
    onClick: onAction,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: image || defaultImage,
        alt: name,
        className: "flex-shrink-0 h-[42px] w-[42px] rounded-full object-cover bg-gray-2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "w-full flex items-center gap-[6px] justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex items-center gap-[6px] text-gray-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.RobotIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-2xs font-medium text-gray-1",
              children: name
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            className: "mt-[2px] text-2xs font-medium text-gray-1",
            children: created
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "mt-1 mb-0.5 font-medium text-dark-1 dark:text-white",
          children: userId
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "text-dark-1 dark:text-white text-[13px] line-clamp-2",
          children: desc
        })]
      })]
    })
  });
};
ConversationItem.propTypes = {
  onAction: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,
  image: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,
  desc: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,
  created: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConversationItem);

/***/ }),

/***/ "./Resources/js/app/components/DropdownFilter.jsx":
/*!********************************************************!*\
  !*** ./Resources/js/app/components/DropdownFilter.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var DropdownFilter = function DropdownFilter(_ref) {
  var positionStyles = _ref.positionStyles,
    btnLabel = _ref.btnLabel,
    btnStyles = _ref.btnStyles,
    children = _ref.children;
  var renderChildrenWithProps = function renderChildrenWithProps(close) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
        close: close
      });
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('w-56 text-right', positionStyles),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {
        as: "div",
        className: "relative inline-block text-left",
        children: function children(_ref2) {
          var open = _ref2.open,
            close = _ref2.close;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Button, {
                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])("inline-flex text-dark-1 dark:text-white focus:outline-none", btnStyles),
                children: btnLabel
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
              as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              enter: "transition ease-out duration-100",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Items, {
                className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('absolute right-3 -mt-2 origin-top-right w-fit rounded-lg bg-white dark:bg-dark-shade-1 shadow-input ring-1 ring-gray-1 focus:outline-none overflow-hidden z-50'),
                children: renderChildrenWithProps(close)
              })
            })]
          });
        }
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownFilter);

/***/ }),

/***/ "./Resources/js/app/components/FilterPopup.jsx":
/*!*****************************************************!*\
  !*** ./Resources/js/app/components/FilterPopup.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./Resources/js/app/components/Select.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./Resources/js/app/components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var FilterPopup = function FilterPopup(_ref) {
  var close = _ref.close,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? {
      firstTitle: 'Sort by',
      secondTitle: 'Status'
    } : _ref$title,
    firstFilterData = _ref.firstFilterData,
    secondFilterData = _ref.secondFilterData,
    selectedFirstFilter = _ref.selectedFirstFilter,
    selectedSecondFilter = _ref.selectedSecondFilter,
    reset = _ref.reset,
    update = _ref.update,
    handleFirstFilterChange = _ref.handleFirstFilterChange,
    handleSecondFilterChange = _ref.handleSecondFilterChange;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "bg-white dark:bg-dark-shade-2 p-5 overflow-y-auto",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "text-dark-1 dark:text-white font-medium text-lg mb-[2px]",
      children: "Filter"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "w-[288px] text-gray-1 text-[13px] font-medium leading-[20px] border-b border-b-gray-2 dark:border-b-gray-1 pb-4",
      children: "List out according to your preferences."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-center gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "my-5 w-full max-w-[488px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "mb-1 text-sm",
          htmlFor: "select-sort",
          children: title.firstTitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Select__WEBPACK_IMPORTED_MODULE_0__["default"], {
          name: "selectFirstFilter",
          variant: "medium",
          items: firstFilterData,
          selected: selectedFirstFilter,
          setSelected: function setSelected(data) {
            return handleFirstFilterChange(data);
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "my-5 w-full max-w-[488px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "mb-1 text-sm",
          htmlFor: "select-status",
          children: title.secondTitle
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Select__WEBPACK_IMPORTED_MODULE_0__["default"], {
          name: "selectSecondFilter",
          variant: "medium",
          items: secondFilterData,
          selected: selectedSecondFilter,
          setSelected: function setSelected(data) {
            return handleSecondFilterChange(data);
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "mt-5 mb-5 border-t border-t-gray-2 dark:border-gray-1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: function onClick() {
          update();
          close();
        },
        className: "bg-dark-1 dark:bg-white w-fit h-[40px] font-semibold text-xs px-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-white dark:text-dark-1",
          children: "Filter"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: reset,
        className: "flex-shrink-0 h-[40px] w-fit font-semibold text-xs px-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          children: "Reset"
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterPopup);

/***/ }),

/***/ "./Resources/js/app/components/InfiniteChatScroll.jsx":
/*!************************************************************!*\
  !*** ./Resources/js/app/components/InfiniteChatScroll.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BotAwait__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BotAwait */ "./Resources/js/app/components/BotAwait.jsx");
/* harmony import */ var _ChatDistributor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatDistributor */ "./Resources/js/app/components/ChatDistributor.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_infinite_scroll_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-infinite-scroll-hook */ "./node_modules/react-infinite-scroll-hook/dist/react-infinite-scroll-hook.esm.js");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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


// redux



// ** redux


// ** infinite scroll hook


// ** utils


var InfiniteChatScroll = function InfiniteChatScroll(_ref) {
  var chat = _ref.chat,
    image = _ref.image,
    bgColor = _ref.bgColor,
    chatBgColor = _ref.chatBgColor,
    currentPage = _ref.currentPage,
    pagination = _ref.pagination,
    patchFunc = _ref.patchFunc,
    patchPageFunc = _ref.patchPageFunc,
    chatIsError = _ref.chatIsError,
    chatIsLoading = _ref.chatIsLoading,
    chatIsFetching = _ref.chatIsFetching,
    parentClass = _ref.parentClass,
    childClass = _ref.childClass;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    hasNextPage = _useState2[0],
    setHasNextPage = _useState2[1];

  // Query for more chat history
  var loadMore = function loadMore() {
    if (currentPage > 1) {
      patchFunc(currentPage);
    }
  };

  // handle pagination
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!chatIsLoading) {
      if ((pagination === null || pagination === void 0 ? void 0 : pagination.nextPage) > 1) {
        setHasNextPage(true);
        patchPageFunc(pagination === null || pagination === void 0 ? void 0 : pagination.nextPage);
      } else {
        setHasNextPage(false);
      }
    }
  }, [chat, chatIsLoading, pagination]);
  var _useInfiniteScroll = (0,react_infinite_scroll_hook__WEBPACK_IMPORTED_MODULE_3__["default"])({
      loading: chatIsFetching,
      hasNextPage: hasNextPage,
      onLoadMore: loadMore,
      disabled: !!chatIsError,
      rootMargin: '400px 0px 0px 0px'
    }),
    _useInfiniteScroll2 = _slicedToArray(_useInfiniteScroll, 2),
    infiniteRef = _useInfiniteScroll2[0],
    rootRef = _useInfiniteScroll2[1].rootRef;
  var scrollableRootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var lastScrollDistanceToBottomRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var reversedItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return chat && _toConsumableArray(chat).reverse();
  }, [chat]);

  // We keep the scroll position when new items are added etc.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var _lastScrollDistanceTo;
    var scrollableRoot = scrollableRootRef.current;
    var lastScrollDistanceToBottom = (_lastScrollDistanceTo = lastScrollDistanceToBottomRef.current) !== null && _lastScrollDistanceTo !== void 0 ? _lastScrollDistanceTo : 0;
    if (scrollableRoot) {
      scrollableRoot.scrollTop = scrollableRoot.scrollHeight - lastScrollDistanceToBottom;
    }
  }, [reversedItems, rootRef]);
  var rootRefSetter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (node) {
    rootRef(node);
    scrollableRootRef.current = node;
  }, [rootRef]);
  var handleRootScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var rootNode = scrollableRootRef.current;
    if (rootNode) {
      var scrollDistanceToBottom = rootNode.scrollHeight - rootNode.scrollTop;
      lastScrollDistanceToBottomRef.current = scrollDistanceToBottom;
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ref: rootRefSetter,
    onScroll: handleRootScroll,
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_4__["default"])('flex-1 h-full w-full overflow-y-auto', parentClass),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_4__["default"])('w-full mx-auto flex flex-col gap-4 py-4 px-4', childClass),
      children: [hasNextPage && currentPage > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "text-center text-dark-1",
        ref: infiniteRef,
        children: "Loading..."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ChatDistributor__WEBPACK_IMPORTED_MODULE_2__["default"], {
        chat: chat,
        bgColor: bgColor,
        chatBgColor: chatBgColor,
        image: image
      }), (chat === null || chat === void 0 ? void 0 : chat.find(function (item) {
        return item === null || item === void 0 ? void 0 : item.isTemp;
      })) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_BotAwait__WEBPACK_IMPORTED_MODULE_1__["default"], {
        image: image
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfiniteChatScroll);

/***/ }),

/***/ "./Resources/js/app/components/InfiniteDataScroll.jsx":
/*!************************************************************!*\
  !*** ./Resources/js/app/components/InfiniteDataScroll.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _CircleSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircleSpinner */ "./Resources/js/app/components/CircleSpinner.jsx");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var InfiniteDataScroll = function InfiniteDataScroll(_ref) {
  var children = _ref.children,
    patchFunc = _ref.patchFunc,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    meta = _ref.meta,
    scrollableTarget = _ref.scrollableTarget;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    hasMore = _useState4[0],
    setHasMore = _useState4[1];
  var fetchMore = function fetchMore() {
    if ((data === null || data === void 0 ? void 0 : data.length) < (meta === null || meta === void 0 ? void 0 : meta.total)) {
      setPage(function (prev) {
        return prev + 1;
      });
    } else {
      setHasMore(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (page > 1) {
      patchFunc(page);
    }
  }, [page, dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scrollableTarget: scrollableTarget,
    dataLength: data === null || data === void 0 ? void 0 : data.length,
    next: fetchMore,
    hasMore: hasMore,
    className: "space-y-3",
    loader: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "pb-1 flex justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_CircleSpinner__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    }),
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfiniteDataScroll);

/***/ }),

/***/ "./Resources/js/app/components/Input.jsx":
/*!***********************************************!*\
  !*** ./Resources/js/app/components/Input.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CircleSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircleSpinner */ "./Resources/js/app/components/CircleSpinner.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["isShadow", "Icon", "className", "pClassName", "isLoading"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }




var Input = function Input(_ref) {
  var isShadow = _ref.isShadow,
    Icon = _ref.Icon,
    className = _ref.className,
    pClassName = _ref.pClassName,
    isLoading = _ref.isLoading,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('relative z-5 w-full', pClassName),
    children: [Icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "absolute h-full flex items-center px-2.5 rounded-xl",
      children: Icon
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", _objectSpread(_objectSpread({}, rest), {}, {
      className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('w-full h-[44px] p-2.5 bg-white dark:bg-dark-shade-1 border border-gray-2 dark:border-clr47 rounded-xl text-sm font-normal focus:outline-none active:outline-none hover:border-gray-1 dark:hover:border-gray-1 transition ease-out duration-200 placeholder:text-gray-1 text-dark-1 dark:text-white', className, {
        'shadow-input': isShadow,
        'pl-9': Icon
      })
    })), isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "absolute right-2 top-1/2 -translate-y-1/2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CircleSpinner__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    })]
  });
};
Input.propTypes = {
  isShadow: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
Input.defaultProps = {
  isShadow: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./Resources/js/app/components/NoData.jsx":
/*!************************************************!*\
  !*** ./Resources/js/app/components/NoData.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var NoData = function NoData(_ref) {
  var _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.DoubleMessageFilledIcon, {}) : _ref$icon,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? 'No conversations' : _ref$message,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_0__["default"])('mt-[100px] sm:mt-[160px] flex flex-col justify-center items-center', className),
    children: [icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "mt-4 font-medium text-lg text-center text-gray-1",
      children: message
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoData);

/***/ }),

/***/ "./Resources/js/app/components/Select.jsx":
/*!************************************************!*\
  !*** ./Resources/js/app/components/Select.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var Select = function Select(_ref) {
  var items = _ref.items,
    selected = _ref.selected,
    setSelected = _ref.setSelected,
    isLoading = _ref.isLoading,
    Icon = _ref.Icon,
    className = _ref.className,
    parentClass = _ref.parentClass,
    _ref$centralize = _ref.centralize,
    centralize = _ref$centralize === void 0 ? false : _ref$centralize,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'large' : _ref$variant,
    shrink = _ref.shrink;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox, {
    value: selected,
    onChange: setSelected,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('relative w-full', parentClass),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox.Button, {
        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('flex-shrink-0 flex items-center h-[48px] w-full relative bg-white dark:bg-dark-shade-1 rounded-xl border border-gray-2 hover:border-gray-1 dark:border-clr47 dark:hover:border-gray-1 py-2.5 px-3 text-left outline-none text-sm text-dark-1 dark:text-white font-medium transition', {
          'h-[48px]': variant === 'large',
          'h-[44px]': variant === 'medium',
          'px-0': shrink
        }, className),
        children: [Icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          style: {
            color: selected === null || selected === void 0 ? void 0 : selected.color
          },
          className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
          children: Icon
        }), selected !== null && selected !== void 0 && selected.value ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('block truncate pr-3.5', {
            'pl-7': Icon
          }),
          children: selected !== null && selected !== void 0 && selected.name ? selected === null || selected === void 0 ? void 0 : selected.name : selected === null || selected === void 0 ? void 0 : selected.value
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('block truncate pr-3.5', {
            'pl-7': Icon
          }),
          children: isLoading ? 'Loading...' : 'Select...'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronDownIcon, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {
        as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        enter: "transition duration-200 ease-out",
        enterFrom: "transform scale-0 opacity-0",
        enterTo: "transform scale-100 opacity-100",
        leave: "transition duration-300 ease-out",
        leaveFrom: "transform scale-100 opacity-100",
        leaveTo: "transform scale-0 opacity-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox.Options, {
          className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('z-10 absolute origin-top transform shadow-input max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-dark-shade-1 text-sm border text-dark-1 dark:text-white border-gray-2 dark:border-gray-1 focus:outline-none', {
            'left-1/2 -translate-x-1/2': centralize
          }),
          children: [(items === null || items === void 0 ? void 0 : items.length) === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "p-2 block whitespace-nowrap font-normal",
            children: "No items found"
          }), items === null || items === void 0 ? void 0 : items.map(function (item, itemIdx) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Listbox.Option, {
              className: function className(_ref2) {
                var selected = _ref2.selected,
                  active = _ref2.active;
                return (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('relative cursor-pointer select-none py-2 pr-5 pl-3', {
                  'bg-bg-1 dark:bg-dark-shade-2': selected || active,
                  'hover:bg-bg-1 hover:dark:bg-dark-shade-2': !selected && !active,
                  'pl-10': Icon,
                  'pl-7': shrink
                });
              },
              value: item,
              children: function children(_ref3) {
                var selected = _ref3.selected;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                  children: [Icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    style: {
                      color: item === null || item === void 0 ? void 0 : item.color
                    },
                    className: "absolute inset-y-0 left-0 flex items-center pl-3",
                    children: Icon
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "pr-8 block whitespace-nowrap ".concat(selected ? 'font-medium' : 'font-normal'),
                    children: item !== null && item !== void 0 && item.name ? item === null || item === void 0 ? void 0 : item.name : item.value
                  }), selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "absolute inset-y-0 right-0 flex items-center pr-3",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_2__.CheckIcon, {})
                  }) : null]
                });
              }
            }, itemIdx);
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);

/***/ }),

/***/ "./Resources/js/app/components/conversations/ConversationDetailsHeader.jsx":
/*!*********************************************************************************!*\
  !*** ./Resources/js/app/components/conversations/ConversationDetailsHeader.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modal */ "./Resources/js/app/components/Modal.jsx");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../IconButton */ "./Resources/js/app/components/IconButton.jsx");
/* harmony import */ var _ArrowButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ArrowButton */ "./Resources/js/app/components/ArrowButton.jsx");
/* harmony import */ var _DeleteModalContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DeleteModalContent */ "./Resources/js/app/components/DeleteModalContent.jsx");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var _hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useLangTranslation */ "./Resources/js/app/hooks/useLangTranslation.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _store_services_userApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/services/userApi */ "./Resources/js/app/store/services/userApi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








// ** hooks



// ** services


var ConversationDetailsHeader = function ConversationDetailsHeader(_ref) {
  var handleListDrawerOpen = _ref.handleListDrawerOpen,
    setSelectedChat = _ref.setSelectedChat,
    chatId = _ref.chatId,
    visitor = _ref.visitor;
  var _useLangTranslation = (0,_hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    trans = _useLangTranslation.trans;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (state) {
      return state.ui;
    }),
    headerHeight = _useSelector.headerHeight;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDialogOpen = _useState2[0],
    setIsDialogOpen = _useState2[1];
  var _useDeleteUserChatMut = (0,_store_services_userApi__WEBPACK_IMPORTED_MODULE_8__.useDeleteUserChatMutation)(),
    _useDeleteUserChatMut2 = _slicedToArray(_useDeleteUserChatMut, 2),
    deleteUserChat = _useDeleteUserChatMut2[0],
    deleting = _useDeleteUserChatMut2[1].isLoading;
  var handleDeleteDialog = function handleDeleteDialog(value) {
    setIsDialogOpen(value);
  };

  // chat delete by id
  var getPermission = function getPermission(value) {
    if (value) {
      deleteUserChat(chatId).unwrap().then(function (payload) {
        setIsDialogOpen(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(setSelectedChat(null), (payload === null || payload === void 0 ? void 0 : payload.message) || trans('The conversation has been deleted successfully'));
      })["catch"](function (err) {
        var _err$data;
        setIsDialogOpen(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error((err === null || err === void 0 || (_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.error) || trans('The conversation could not be deleted'));
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "flex items-center justify-between px-4 py-3 bg-bg-2 dark:bg-dark-shade-2 border-b border-b-gray-2 dark:border-b-clr47",
    style: {
      height: headerHeight
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "flex items-center ml-6 md:ml-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ArrowButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onAction: handleListDrawerOpen,
        className: "lg:hidden",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_5__.RightArrowIcon, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        className: "mr-[6px] text-dark-1 dark:text-white font-medium text-lg",
        children: visitor === null || visitor === void 0 ? void 0 : visitor.visitor_id
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "flex items-center gap-2.5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onClick: function onClick() {
          return handleDeleteDialog(true);
        },
        className: "bg-dark-1 text-white",
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_5__.DeleteIcon, {})
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isOpen: isDialogOpen,
      setIsOpen: setIsDialogOpen,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_DeleteModalContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isDeleting: deleting,
        getPermission: getPermission,
        handleDeleteDialog: handleDeleteDialog
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConversationDetailsHeader);

/***/ }),

/***/ "./Resources/js/app/components/conversations/ConversationList.jsx":
/*!************************************************************************!*\
  !*** ./Resources/js/app/components/conversations/ConversationList.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NoData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NoData */ "./Resources/js/app/components/NoData.jsx");
/* harmony import */ var _ConversationItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ConversationItem */ "./Resources/js/app/components/ConversationItem.jsx");
/* harmony import */ var _InfiniteDataScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InfiniteDataScroll */ "./Resources/js/app/components/InfiniteDataScroll.jsx");
/* harmony import */ var _ConversationListHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConversationListHeader */ "./Resources/js/app/components/conversations/ConversationListHeader.jsx");
/* harmony import */ var _skeleton_ConversationItemSkeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skeleton/ConversationItemSkeleton */ "./Resources/js/app/components/skeleton/ConversationItemSkeleton.jsx");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/debounce */ "./Resources/js/app/utils/debounce.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_services_apiSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/services/apiSlice */ "./Resources/js/app/store/services/apiSlice.js");
/* harmony import */ var _store_services_userApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/services/userApi */ "./Resources/js/app/store/services/userApi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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


// ** Components






// ** Utils




// ** services



var ConversationList = function ConversationList(_ref) {
  var _chatsError$data;
  var setVisitor = _ref.setVisitor,
    listDrawerOpen = _ref.listDrawerOpen,
    handleListDrawerClose = _ref.handleListDrawerClose,
    handleSelectConversation = _ref.handleSelectConversation;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedItem = _useState2[0],
    setSelectedItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      sortBy: null,
      bots: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    filter = _useState4[0],
    setFilter = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('newest'),
    _useState6 = _slicedToArray(_useState5, 2),
    filterSortBy = _useState6[0],
    setFilterSortBy = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    filterBot = _useState8[0],
    setFilterBot = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    searchQuery = _useState10[0],
    setSearchQuery = _useState10[1];

  // get user chats query
  var _useGetUserChatsQuery = (0,_store_services_userApi__WEBPACK_IMPORTED_MODULE_9__.useGetUserChatsQuery)({
      searchQuery: searchQuery,
      bot: filterBot,
      sortBy: filterSortBy
    }),
    _useGetUserChatsQuery2 = _useGetUserChatsQuery.data,
    _useGetUserChatsQuery3 = _useGetUserChatsQuery2 === void 0 ? {} : _useGetUserChatsQuery2,
    _useGetUserChatsQuery4 = _useGetUserChatsQuery3.data,
    chats = _useGetUserChatsQuery4 === void 0 ? [] : _useGetUserChatsQuery4,
    _useGetUserChatsQuery5 = _useGetUserChatsQuery3.meta,
    meta = _useGetUserChatsQuery5 === void 0 ? {} : _useGetUserChatsQuery5,
    chatsIsLoading = _useGetUserChatsQuery.isLoading,
    chatsIsFetching = _useGetUserChatsQuery.isFetching,
    chatsIsSuccess = _useGetUserChatsQuery.isSuccess,
    chatsIsError = _useGetUserChatsQuery.isError,
    chatsError = _useGetUserChatsQuery.error;
  var handleClickConversation = function handleClickConversation(item) {
    var _item$child$;
    handleSelectConversation(item);
    setSelectedItem(item === null || item === void 0 ? void 0 : item.id);
    setVisitor(item === null || item === void 0 || (_item$child$ = item.child[0]) === null || _item$child$ === void 0 ? void 0 : _item$child$.meta);
  };
  var handleSearchQuery = (0,_utils_debounce__WEBPACK_IMPORTED_MODULE_7__.debounce)(function (e) {
    setSearchQuery(e.target.value);
  });
  var handleUpdateFilter = function handleUpdateFilter() {
    var _filter$sortBy, _filter$bots;
    setFilterSortBy((_filter$sortBy = filter.sortBy) === null || _filter$sortBy === void 0 ? void 0 : _filter$sortBy.value);
    setFilterBot((_filter$bots = filter.bots) === null || _filter$bots === void 0 ? void 0 : _filter$bots.value);
  };
  var patchFunc = function patchFunc(page) {
    dispatch(_store_services_apiSlice__WEBPACK_IMPORTED_MODULE_8__.apiSlice.endpoints.getMoreUserChats.initiate({
      searchQuery: searchQuery,
      bot: filterBot,
      sortBy: filterSortBy,
      page: page
    }));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (chats.length > 0) {
      var _chats$, _chats$2;
      setSelectedItem((_chats$ = chats[0]) === null || _chats$ === void 0 ? void 0 : _chats$.id);
      handleSelectConversation(chats[0]);
      setVisitor((_chats$2 = chats[0]) === null || _chats$2 === void 0 || (_chats$2 = _chats$2.child[0]) === null || _chats$2 === void 0 ? void 0 : _chats$2.meta);
    }
  }, [chats]);

  // reset filter
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!filter.sortBy && !filter.bots) {
      setFilterSortBy('newest');
      setFilterBot('');
    }
  }, [filter, setFilterSortBy, setFilterBot]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_6__["default"])('absolute lg:static lg:max-w-[520px] transform h-full flex flex-col w-full bg-bg-2 dark:bg-dark-shade-2 border-r border-r-gray-2 dark:border-r-clr47 transition-all', {
      'translate-x-0 opacity-100': listDrawerOpen,
      '-translate-x-full opacity-0 lg:opacity-100 lg:translate-x-0': !listDrawerOpen
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ConversationListHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      handleListDrawerClose: handleListDrawerClose,
      handleSearchQuery: handleSearchQuery,
      isLoading: !chatsIsLoading && chatsIsFetching,
      handleUpdateFilter: handleUpdateFilter,
      filter: filter,
      setFilter: setFilter
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      id: "scrollableDiv",
      className: "h-full px-4 pb-3 select-none mr-[3px] space-y-3 overflow-y-auto",
      children: [chatsIsLoading && _toConsumableArray(Array(8)).map(function (_, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_skeleton_ConversationItemSkeleton__WEBPACK_IMPORTED_MODULE_5__["default"], {}, i);
      }), !chatsIsLoading && chatsIsError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_NoData__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "w-full sm:min-w-[375px]",
        message: chatsError === null || chatsError === void 0 || (_chatsError$data = chatsError.data) === null || _chatsError$data === void 0 ? void 0 : _chatsError$data.error
      }), !chatsIsLoading && chatsIsSuccess && chats.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_NoData__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "w-full sm:min-w-[375px]",
        message: "No chatbot found"
      }), !chatsIsLoading && chatsIsSuccess && chats.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_InfiniteDataScroll__WEBPACK_IMPORTED_MODULE_3__["default"], {
        meta: meta,
        data: chats,
        patchFunc: patchFunc,
        scrollableTarget: "scrollableDiv",
        children: chats.map(function (item, i) {
          var _item$bot_details, _item$child$2, _item$bot_details2;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ConversationItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
            onAction: function onAction() {
              return handleClickConversation(item);
            },
            selected: selectedItem === (item === null || item === void 0 ? void 0 : item.id),
            name: item === null || item === void 0 || (_item$bot_details = item.bot_details) === null || _item$bot_details === void 0 ? void 0 : _item$bot_details.name,
            userId: item === null || item === void 0 || (_item$child$2 = item.child[0]) === null || _item$child$2 === void 0 || (_item$child$2 = _item$child$2.meta) === null || _item$child$2 === void 0 ? void 0 : _item$child$2.visitor_id,
            desc: item === null || item === void 0 ? void 0 : item.title,
            image: item === null || item === void 0 || (_item$bot_details2 = item.bot_details) === null || _item$bot_details2 === void 0 || (_item$bot_details2 = _item$bot_details2.meta) === null || _item$bot_details2 === void 0 || (_item$bot_details2 = _item$bot_details2.image) === null || _item$bot_details2 === void 0 ? void 0 : _item$bot_details2.url,
            created: item === null || item === void 0 ? void 0 : item.created_at,
            className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_6__["default"])('max-w-full hover:border-gray-1')
          }, item === null || item === void 0 ? void 0 : item.id);
        })
      }) : null]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConversationList);

/***/ }),

/***/ "./Resources/js/app/components/conversations/ConversationListHeader.jsx":
/*!******************************************************************************!*\
  !*** ./Resources/js/app/components/conversations/ConversationListHeader.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input */ "./Resources/js/app/components/Input.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./Resources/js/app/components/Button.jsx");
/* harmony import */ var _DropdownFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DropdownFilter */ "./Resources/js/app/components/DropdownFilter.jsx");
/* harmony import */ var _FilterPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FilterPopup */ "./Resources/js/app/components/FilterPopup.jsx");
/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-csv */ "./node_modules/react-csv/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons */ "./Resources/js/app/components/icons/index.js");
/* harmony import */ var _ArrowButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ArrowButton */ "./Resources/js/app/components/ArrowButton.jsx");
/* harmony import */ var _store_services_apiSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/services/apiSlice */ "./Resources/js/app/store/services/apiSlice.js");
/* harmony import */ var _store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/services/chatbotApi */ "./Resources/js/app/store/services/chatbotApi.js");
/* harmony import */ var _store_services_userApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/services/userApi */ "./Resources/js/app/store/services/userApi.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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



// ** Components






// ** Icons



// ** Services




var sortData = [{
  id: 1,
  name: 'Newest',
  value: 'newest'
}, {
  id: 2,
  name: 'Oldest',
  value: 'oldest'
}];
var ConversationListHeader = function ConversationListHeader(_ref) {
  var handleListDrawerClose = _ref.handleListDrawerClose,
    handleSearchQuery = _ref.handleSearchQuery,
    isLoading = _ref.isLoading,
    handleUpdateFilter = _ref.handleUpdateFilter,
    _ref$filter = _ref.filter,
    filter = _ref$filter === void 0 ? {} : _ref$filter,
    _ref$setFilter = _ref.setFilter,
    setFilter = _ref$setFilter === void 0 ? function () {} : _ref$setFilter;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
      return state.ui;
    }),
    headerHeight = _useSelector.headerHeight;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    botsData = _useState2[0],
    setBotsData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    csvData = _useState4[0],
    setCsvData = _useState4[1];

  // get chatbots query
  var _useGetChatbotsQuery = (0,_store_services_chatbotApi__WEBPACK_IMPORTED_MODULE_9__.useGetChatbotsQuery)({
      searchQuery: '',
      status: ''
    }),
    _useGetChatbotsQuery$ = _useGetChatbotsQuery.data,
    _useGetChatbotsQuery$2 = _useGetChatbotsQuery$ === void 0 ? {} : _useGetChatbotsQuery$,
    _useGetChatbotsQuery$3 = _useGetChatbotsQuery$2.data,
    chatbots = _useGetChatbotsQuery$3 === void 0 ? [] : _useGetChatbotsQuery$3;

  // get download chat list query
  var _useGeTDownloadChatLi = (0,_store_services_userApi__WEBPACK_IMPORTED_MODULE_10__.useGeTDownloadChatListQuery)(),
    _useGeTDownloadChatLi2 = _useGeTDownloadChatLi.data,
    _useGeTDownloadChatLi3 = _useGeTDownloadChatLi2 === void 0 ? {} : _useGeTDownloadChatLi2,
    _useGeTDownloadChatLi4 = _useGeTDownloadChatLi3.data,
    chats = _useGeTDownloadChatLi4 === void 0 ? [] : _useGeTDownloadChatLi4,
    chatsIsLoading = _useGeTDownloadChatLi.isLoading;
  var handleShortChange = function handleShortChange(value) {
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      sortBy: value
    }));
  };
  var handleBotsChange = function handleBotsChange(value) {
    setFilter(_objectSpread(_objectSpread({}, filter), {}, {
      bots: value
    }));
  };
  var handleResetFilter = function handleResetFilter() {
    setFilter({
      sortBy: null,
      bots: null
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if ((chatbots === null || chatbots === void 0 ? void 0 : chatbots.length) > 0) {
      var data = chatbots.map(function (i) {
        return {
          id: i === null || i === void 0 ? void 0 : i.id,
          name: i === null || i === void 0 ? void 0 : i.name,
          value: i === null || i === void 0 ? void 0 : i.code
        };
      });
      setBotsData(data);
    }
  }, [chatbots]);

  // set csv data
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (chats.length > 0) {
      var data = chats.map(function (c) {
        var _bot_details$meta, _bot_details$meta2, _bot_details$meta3, _bot_details$meta4, _bot_details$meta5;
        var _ref2 = c || {},
          id = _ref2.id,
          title = _ref2.title,
          type = _ref2.type,
          created_at = _ref2.created_at,
          bot_details = _ref2.bot_details;
        return {
          id: id,
          title: title,
          bot: bot_details === null || bot_details === void 0 ? void 0 : bot_details.name,
          code: bot_details === null || bot_details === void 0 ? void 0 : bot_details.code,
          role: bot_details === null || bot_details === void 0 ? void 0 : bot_details.role,
          message: bot_details === null || bot_details === void 0 ? void 0 : bot_details.message,
          status: bot_details === null || bot_details === void 0 ? void 0 : bot_details.status,
          theme_color: bot_details === null || bot_details === void 0 || (_bot_details$meta = bot_details.meta) === null || _bot_details$meta === void 0 ? void 0 : _bot_details$meta.theme_color,
          provider: bot_details === null || bot_details === void 0 || (_bot_details$meta2 = bot_details.meta) === null || _bot_details$meta2 === void 0 ? void 0 : _bot_details$meta2.provider,
          model: bot_details === null || bot_details === void 0 || (_bot_details$meta3 = bot_details.meta) === null || _bot_details$meta3 === void 0 ? void 0 : _bot_details$meta3.model,
          script: bot_details === null || bot_details === void 0 || (_bot_details$meta4 = bot_details.meta) === null || _bot_details$meta4 === void 0 ? void 0 : _bot_details$meta4.script_code,
          language: bot_details === null || bot_details === void 0 || (_bot_details$meta5 = bot_details.meta) === null || _bot_details$meta5 === void 0 ? void 0 : _bot_details$meta5.language,
          type: type,
          created_at: created_at
        };
      });
      setCsvData(data);
    }
  }, [chats]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "flex items-center justify-between px-4 py-3 border-b border-b-gray-2 dark:border-b-clr47",
      style: {
        height: headerHeight
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "flex items-center ml-6 md:ml-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ArrowButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onAction: handleListDrawerClose,
          className: "lg:hidden",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
            className: "transform rotate-180",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_6__.RightArrowIcon, {})
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "text-dark-1 dark:text-white font-medium text-lg",
          children: "Conversations"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "h-[34px] bg-white dark:bg-dark-shade-1 px-3 border border-gray-2 hover:border-gray-1 dark:hover:border-gray-1 dark:border-clr47 text-dark-1 dark:text-white text-sm font-normal transition",
        startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_6__.DownloadIcon, {}),
        disabled: chatsIsLoading,
        children: chatsIsLoading && csvData.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          children: "Export All"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_csv__WEBPACK_IMPORTED_MODULE_5__.CSVLink, {
          filename: "conversations-".concat(new Date().getMilliseconds(), ".csv"),
          data: csvData,
          children: "Export All"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "px-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "my-3 flex items-center gap-2.5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
          placeholder: "Search",
          Icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_6__.SearchIcon, {}),
          isLoading: isLoading,
          onChange: handleSearchQuery
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_DropdownFilter__WEBPACK_IMPORTED_MODULE_3__["default"], {
          btnLabel: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_6__.FilterLinesIcon, {}),
          btnStyles: "flex-shrink-0 flex items-center justify-center h-[44px] w-[44px] rounded-xl bg-white dark:bg-dark-shade-1 border border-gray-2 dark:border-clr47 hover:border-gray-1 dark:hover:border-gray-1 outline-none focus:outline-none text-dark-1 dark:text-white transition",
          positionStyles: "w-fit",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_FilterPopup__WEBPACK_IMPORTED_MODULE_4__["default"], {
            title: {
              firstTitle: 'Sort by',
              secondTitle: 'Bot'
            },
            firstFilterData: sortData,
            secondFilterData: botsData,
            selectedFirstFilter: filter.sortBy,
            selectedSecondFilter: filter.bots,
            reset: handleResetFilter,
            update: handleUpdateFilter,
            handleFirstFilterChange: handleShortChange,
            handleSecondFilterChange: handleBotsChange
          })
        })]
      }), Object.values(filter).some(function (item) {
        return item;
      }) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "mb-3 flex gap-2 justify-between items-start",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "flex items-center gap-2 flex-wrap",
          children: Object.values(filter).map(function (item) {
            if (item) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "w-fit bg-white dark:bg-dark-shade-1 border border-gray-2 dark:border-clr47 rounded-full text-dark-1 dark:text-white text-xs px-2 py-[2px]",
              children: item.name
            }, item.name);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
          onClick: function onClick() {
            return handleResetFilter();
          },
          className: "text-gray-1 mr-3 mt-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_6__.CloseIcon, {})
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConversationListHeader);

/***/ }),

/***/ "./Resources/js/app/components/conversations/index.js":
/*!************************************************************!*\
  !*** ./Resources/js/app/components/conversations/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConversationDetailsHeader: () => (/* reexport safe */ _ConversationDetailsHeader__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ConversationList: () => (/* reexport safe */ _ConversationList__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _ConversationDetailsHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConversationDetailsHeader */ "./Resources/js/app/components/conversations/ConversationDetailsHeader.jsx");
/* harmony import */ var _ConversationList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConversationList */ "./Resources/js/app/components/conversations/ConversationList.jsx");



/***/ }),

/***/ "./Resources/js/app/components/skeleton/ConversationDetailsSkeleton.jsx":
/*!******************************************************************************!*\
  !*** ./Resources/js/app/components/skeleton/ConversationDetailsSkeleton.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cn */ "./Resources/js/app/utils/cn.js");
/* harmony import */ var _HrzPositionWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HrzPositionWrapper */ "./Resources/js/app/components/HrzPositionWrapper.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




var ConversationDetailsSkeleton = function ConversationDetailsSkeleton() {
  return _toConsumableArray(Array(4)).map(function (_, i) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HrzPositionWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
        $align: "right",
        className: "my-3 gap-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('w-full rounded-[10px] px-3 py-3.5 bg-bg-1 dark:bg-dark-shade-1'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "animate-pulse w-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "h-2 w-full rounded bg-gray-2 dark:bg-gray-1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "h-2 w-full rounded bg-gray-2 dark:bg-gray-1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "h-2 w-1/2 rounded bg-gray-2 dark:bg-gray-1"
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_HrzPositionWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "my-2 !flex-row gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "flex-shrink-0 h-[42px] w-[42px] bg-bg-1 dark:bg-dark-shade-1 rounded-full"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__["default"])('w-full rounded-[10px] px-3 py-3.5 bg-bg-1 dark:bg-dark-shade-1'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "animate-pulse w-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "h-2 w-full rounded bg-gray-2 dark:bg-gray-1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "h-2 w-1/2 rounded bg-gray-2 dark:bg-gray-1"
              })]
            })
          })
        })]
      })]
    }, i);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConversationDetailsSkeleton);

/***/ }),

/***/ "./Resources/js/app/components/skeleton/ConversationItemSkeleton.jsx":
/*!***************************************************************************!*\
  !*** ./Resources/js/app/components/skeleton/ConversationItemSkeleton.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var ConversationItemSkeleton = function ConversationItemSkeleton() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "h-full max-h-[116px] w-full max-w-full px-2.5 py-[14px] rounded-lg bg-white dark:bg-dark-shade-1 border border-white dark:border-clr47",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "animate-pulse h-full w-full flex gap-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "flex-shrink-0 h-[42px] w-[42px] rounded-full bg-gray-2 dark:bg-gray-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "mt-2 flex gap-3 justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex gap-1 items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "h-3 w-3 rounded-full bg-gray-2 dark:bg-gray-1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              className: "h-2 w-[100px] rounded bg-gray-2 dark:bg-gray-1"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "h-2 w-[50px] rounded bg-gray-2 dark:bg-gray-1"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "mt-2 mb-4 h-2 w-[60px] rounded bg-gray-2 dark:bg-gray-1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "h-2 w-full rounded bg-gray-2 dark:bg-gray-1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "h-2 w-[calc(100%-50px)] rounded bg-gray-2 dark:bg-gray-1"
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConversationItemSkeleton);

/***/ }),

/***/ "./Resources/js/app/pages/Conversations.jsx":
/*!**************************************************!*\
  !*** ./Resources/js/app/pages/Conversations.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SEO */ "./Resources/js/app/components/SEO.jsx");
/* harmony import */ var _components_NoData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NoData */ "./Resources/js/app/components/NoData.jsx");
/* harmony import */ var _components_InfiniteChatScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InfiniteChatScroll */ "./Resources/js/app/components/InfiniteChatScroll.jsx");
/* harmony import */ var _components_conversations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/conversations */ "./Resources/js/app/components/conversations/index.js");
/* harmony import */ var _hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useLangTranslation */ "./Resources/js/app/hooks/useLangTranslation.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_slices_testModeSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/slices/testModeSlice */ "./Resources/js/app/store/slices/testModeSlice.js");
/* harmony import */ var _store_services_apiSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/services/apiSlice */ "./Resources/js/app/store/services/apiSlice.js");
/* harmony import */ var _store_services_userApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/services/userApi */ "./Resources/js/app/store/services/userApi.js");
/* harmony import */ var _components_skeleton_ConversationDetailsSkeleton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/skeleton/ConversationDetailsSkeleton */ "./Resources/js/app/components/skeleton/ConversationDetailsSkeleton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

// ** React


// ** Components





// ** Hooks


// ** Redux



// ** services




var ConversationsPage = function ConversationsPage() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
  var _useLangTranslation = (0,_hooks_useLangTranslation__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    trans = _useLangTranslation.trans;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useSelector)(function (state) {
      return state.testMode;
    }),
    testPage = _useSelector.testPage;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    listDrawerOpen = _useState2[0],
    setListDrawerOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedChat = _useState4[0],
    setSelectedChat = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    visitor = _useState6[0],
    setVisitor = _useState6[1];

  // get user chat by id query
  var _useGetUserChatsByIdQ = (0,_store_services_userApi__WEBPACK_IMPORTED_MODULE_8__.useGetUserChatsByIdQuery)(selectedChat === null || selectedChat === void 0 ? void 0 : selectedChat.id, {
      skip: !(selectedChat !== null && selectedChat !== void 0 && selectedChat.id)
    }),
    _useGetUserChatsByIdQ2 = _useGetUserChatsByIdQ.data,
    _useGetUserChatsByIdQ3 = _useGetUserChatsByIdQ2 === void 0 ? {} : _useGetUserChatsByIdQ2,
    _useGetUserChatsByIdQ4 = _useGetUserChatsByIdQ3.data,
    chat = _useGetUserChatsByIdQ4 === void 0 ? [] : _useGetUserChatsByIdQ4,
    pagination = _useGetUserChatsByIdQ3.pagination,
    chatIsLoading = _useGetUserChatsByIdQ.isLoading,
    chatIsFetching = _useGetUserChatsByIdQ.isFetching,
    chatIsSuccess = _useGetUserChatsByIdQ.isSuccess,
    chatIsError = _useGetUserChatsByIdQ.isError;
  var handleListDrawerOpen = function handleListDrawerOpen() {
    setListDrawerOpen(true);
  };
  var handleListDrawerClose = function handleListDrawerClose() {
    setListDrawerOpen(false);
  };
  var handleSelectConversation = function handleSelectConversation(item) {
    handleListDrawerClose();
    dispatch((0,_store_slices_testModeSlice__WEBPACK_IMPORTED_MODULE_6__.setTestPage)(1));
    setSelectedChat(item);
  };
  var patchFunc = function patchFunc(page) {
    dispatch(_store_services_apiSlice__WEBPACK_IMPORTED_MODULE_7__.apiSlice.endpoints.getMoreUserChatsById.initiate({
      id: selectedChat === null || selectedChat === void 0 ? void 0 : selectedChat.id,
      page: page
    }));
  };
  var patchPageFunc = function patchPageFunc(nextPage) {
    dispatch((0,_store_slices_testModeSlice__WEBPACK_IMPORTED_MODULE_6__.setTestPage)(nextPage));
  };

  // what to render
  var content = null;
  if (chatIsFetching) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "h-full overflow-y-auto mr-[3px]",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "max-w-[848px] w-full mx-auto px-4 py-5 flex flex-col gap-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_skeleton_ConversationDetailsSkeleton__WEBPACK_IMPORTED_MODULE_9__["default"], {})
      })
    });
  }
  if (!chatIsFetching && chatIsError) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_NoData__WEBPACK_IMPORTED_MODULE_2__["default"], {});
  }
  if (!chatIsFetching && !chatIsError && chatIsSuccess && (chat === null || chat === void 0 ? void 0 : chat.length) === 0) {
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_NoData__WEBPACK_IMPORTED_MODULE_2__["default"], {});
  }
  if (!chatIsFetching && !chatIsError && chatIsSuccess && (chat === null || chat === void 0 ? void 0 : chat.length) > 0) {
    var _selectedChat$bot_det, _selectedChat$bot_det2;
    content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_InfiniteChatScroll__WEBPACK_IMPORTED_MODULE_3__["default"], {
      chat: chat,
      image: selectedChat === null || selectedChat === void 0 || (_selectedChat$bot_det = selectedChat.bot_details) === null || _selectedChat$bot_det === void 0 || (_selectedChat$bot_det = _selectedChat$bot_det.meta) === null || _selectedChat$bot_det === void 0 || (_selectedChat$bot_det = _selectedChat$bot_det.image) === null || _selectedChat$bot_det === void 0 ? void 0 : _selectedChat$bot_det.url,
      bgColor: selectedChat === null || selectedChat === void 0 || (_selectedChat$bot_det2 = selectedChat.bot_details) === null || _selectedChat$bot_det2 === void 0 || (_selectedChat$bot_det2 = _selectedChat$bot_det2.meta) === null || _selectedChat$bot_det2 === void 0 ? void 0 : _selectedChat$bot_det2.theme_color,
      chatBgColor: "#F8EFE7",
      pagination: pagination,
      currentPage: testPage,
      patchFunc: patchFunc,
      patchPageFunc: patchPageFunc,
      chatIsError: chatIsError,
      chatIsLoading: chatIsLoading,
      chatIsFetching: chatIsFetching,
      parentClass: "mr-[3px]",
      childClass: "max-w-[848px] gap-3"
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_SEO__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "".concat(trans('Conversations'), " - ").concat(trans(/* unsupported import.meta.env.VITE_WEBSITE_NAME */ undefined.VITE_WEBSITE_NAME), " ").concat(trans('Chatbot')),
      description: "".concat(/* unsupported import.meta.env.VITE_WEBSITE_NAME */ undefined.VITE_WEBSITE_NAME, " is a chatbot builder platform. Create your own chatbot with our easy-to-use chatbot builder"),
      name: "".concat(/* unsupported import.meta.env.VITE_WEBSITE_NAME */ undefined.VITE_WEBSITE_NAME, " Chatbot"),
      type: "website"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "h-full overflow-y-hidden",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "relative flex h-full overflow-hidden",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_conversations__WEBPACK_IMPORTED_MODULE_4__.ConversationList, {
          setVisitor: setVisitor,
          listDrawerOpen: listDrawerOpen,
          handleListDrawerClose: handleListDrawerClose,
          handleSelectConversation: handleSelectConversation
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "h-full flex flex-col w-full bg-white dark:bg-dark-bg border-r border-r-gray-2 dark:border-r-clr47",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_conversations__WEBPACK_IMPORTED_MODULE_4__.ConversationDetailsHeader, {
            handleListDrawerOpen: handleListDrawerOpen,
            setSelectedChat: setSelectedChat,
            chatId: selectedChat === null || selectedChat === void 0 ? void 0 : selectedChat.id,
            visitor: visitor
          }), content]
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConversationsPage);

/***/ }),

/***/ "./Resources/js/app/store/services/userApi.js":
/*!****************************************************!*\
  !*** ./Resources/js/app/store/services/userApi.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDeleteUserChatMutation: () => (/* binding */ useDeleteUserChatMutation),
/* harmony export */   useGeTDownloadChatListQuery: () => (/* binding */ useGeTDownloadChatListQuery),
/* harmony export */   useGetUserChatsByIdQuery: () => (/* binding */ useGetUserChatsByIdQuery),
/* harmony export */   useGetUserChatsQuery: () => (/* binding */ useGetUserChatsQuery),
/* harmony export */   userApi: () => (/* binding */ userApi)
/* harmony export */ });
/* harmony import */ var _apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiSlice */ "./Resources/js/app/store/services/apiSlice.js");
/* harmony import */ var _utils_transformResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/transformResponse */ "./Resources/js/app/utils/transformResponse.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var userApi = _apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.injectEndpoints({
  endpoints: function endpoints(build) {
    return {
      getUserChats: build.query({
        query: function query(_ref) {
          var _ref$searchQuery = _ref.searchQuery,
            searchQuery = _ref$searchQuery === void 0 ? '' : _ref$searchQuery,
            _ref$bot = _ref.bot,
            bot = _ref$bot === void 0 ? '' : _ref$bot,
            _ref$sortBy = _ref.sortBy,
            sortBy = _ref$sortBy === void 0 ? '' : _ref$sortBy;
          return {
            url: "v2/user/chatbots/chats?search=".concat(searchQuery, "&orderBy=").concat(sortBy, "&chatBot=").concat(bot)
          };
        },
        providesTags: ['User']
      }),
      getMoreUserChats: build.query({
        query: function query(_ref2) {
          var _ref2$searchQuery = _ref2.searchQuery,
            searchQuery = _ref2$searchQuery === void 0 ? '' : _ref2$searchQuery,
            _ref2$bot = _ref2.bot,
            bot = _ref2$bot === void 0 ? '' : _ref2$bot,
            _ref2$sortBy = _ref2.sortBy,
            sortBy = _ref2$sortBy === void 0 ? '' : _ref2$sortBy,
            page = _ref2.page;
          return "v2/user/chatbots/chats?search=".concat(searchQuery, "&orderBy=").concat(sortBy, "&chatBot=").concat(bot, "&page=").concat(page);
        },
        onQueryStarted: function onQueryStarted(arg, _ref3) {
          return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var dispatch, queryFulfilled, result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  dispatch = _ref3.dispatch, queryFulfilled = _ref3.queryFulfilled;
                  _context.prev = 1;
                  _context.next = 4;
                  return queryFulfilled;
                case 4:
                  result = _context.sent;
                  dispatch(_apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.util.updateQueryData('getUserChats', {
                    searchQuery: arg === null || arg === void 0 ? void 0 : arg.searchQuery,
                    bot: arg === null || arg === void 0 ? void 0 : arg.bot,
                    sortBy: arg === null || arg === void 0 ? void 0 : arg.sortBy
                  }, function (draft) {
                    var _draft$data;
                    (_draft$data = draft.data).push.apply(_draft$data, _toConsumableArray(result.data.data));
                  }));
                  _context.next = 10;
                  break;
                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](1);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[1, 8]]);
          }))();
        }
      }),
      getUserChatsById: build.query({
        query: function query(id) {
          return {
            url: "v2/user/chatbots/chats/".concat(id)
          };
        },
        transformResponse: function transformResponse(response) {
          return (0,_utils_transformResponse__WEBPACK_IMPORTED_MODULE_1__.transformChatResponse)(response);
        }
      }),
      getMoreUserChatsById: build.query({
        query: function query(_ref4) {
          var id = _ref4.id,
            page = _ref4.page;
          return {
            url: "v2/user/chatbots/chats/".concat(id, "?page=").concat(page)
          };
        },
        transformResponse: function transformResponse(response) {
          return (0,_utils_transformResponse__WEBPACK_IMPORTED_MODULE_1__.transformChatResponse)(response);
        },
        onQueryStarted: function onQueryStarted(arg, _ref5) {
          return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var dispatch, queryFulfilled, result;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  dispatch = _ref5.dispatch, queryFulfilled = _ref5.queryFulfilled;
                  _context2.prev = 1;
                  _context2.next = 4;
                  return queryFulfilled;
                case 4:
                  result = _context2.sent;
                  dispatch(_apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.util.updateQueryData('getUserChatsById', arg === null || arg === void 0 ? void 0 : arg.id, function (draft) {
                    var _draft$data2;
                    (_draft$data2 = draft.data).push.apply(_draft$data2, _toConsumableArray(result.data.data));
                    draft.pagination.nextPage = result.data.pagination.nextPage;
                    draft.pagination.next_page_url = result.data.pagination.next_page_url;
                    draft.pagination.currentPage = result.data.pagination.currentPage;
                  }));
                  _context2.next = 10;
                  break;
                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2["catch"](1);
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[1, 8]]);
          }))();
        },
        forceRefetch: function forceRefetch(_ref6) {
          var currentArg = _ref6.currentArg,
            previousArg = _ref6.previousArg;
          return currentArg !== previousArg;
        }
      }),
      deleteUserChat: build.mutation({
        query: function query(id) {
          return {
            url: "v2/user/chatbots/chats/".concat(id),
            method: 'DELETE'
          };
        },
        invalidatesTags: ['User']
      }),
      geTDownloadChatList: build.query({
        query: function query() {
          return {
            url: 'v2/user/chatbots/download/csv'
          };
        }
      })
    };
  },
  overrideExisting: false
});
var useGetUserChatsQuery = userApi.useGetUserChatsQuery,
  useGetUserChatsByIdQuery = userApi.useGetUserChatsByIdQuery,
  useDeleteUserChatMutation = userApi.useDeleteUserChatMutation,
  useGeTDownloadChatListQuery = userApi.useGeTDownloadChatListQuery;


/***/ }),

/***/ "./Resources/js/app/utils/debounce.js":
/*!********************************************!*\
  !*** ./Resources/js/app/utils/debounce.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce)
/* harmony export */ });
/*
 * Utility function to debounce a function call.
 */

function debounce(func) {
  var _this = this;
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(_this, args);
    }, timeout);
  };
}

/***/ }),

/***/ "./Resources/js/app/utils/transformResponse.js":
/*!*****************************************************!*\
  !*** ./Resources/js/app/utils/transformResponse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformChatResponse: () => (/* binding */ transformChatResponse)
/* harmony export */ });
var transformChatResponse = function transformChatResponse(response) {
  var _response$links, _response$meta, _response$links3, _response$meta2, _response$meta3, _response$meta4;
  var nextPage = null;
  if (response !== null && response !== void 0 && (_response$links = response.links) !== null && _response$links !== void 0 && _response$links.next) {
    var _response$links2;
    nextPage = parseInt(response === null || response === void 0 || (_response$links2 = response.links) === null || _response$links2 === void 0 || (_response$links2 = _response$links2.next) === null || _response$links2 === void 0 ? void 0 : _response$links2.split('=')[1]);
  } else {
    nextPage = null;
  }
  return {
    data: response === null || response === void 0 ? void 0 : response.data,
    pagination: {
      currentPage: response === null || response === void 0 || (_response$meta = response.meta) === null || _response$meta === void 0 ? void 0 : _response$meta.current_page,
      next_page_url: response === null || response === void 0 || (_response$links3 = response.links) === null || _response$links3 === void 0 ? void 0 : _response$links3.next,
      lastPage: response === null || response === void 0 || (_response$meta2 = response.meta) === null || _response$meta2 === void 0 ? void 0 : _response$meta2.last_page,
      perPage: response === null || response === void 0 || (_response$meta3 = response.meta) === null || _response$meta3 === void 0 ? void 0 : _response$meta3.per_page,
      total: response === null || response === void 0 || (_response$meta4 = response.meta) === null || _response$meta4 === void 0 ? void 0 : _response$meta4.total,
      nextPage: nextPage
    }
  };
};

/***/ }),

/***/ "./node_modules/react-csv/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-csv/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/index.js */ "./node_modules/react-csv/lib/index.js");


/***/ }),

/***/ "./node_modules/react-csv/lib/components/Download.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-csv/lib/components/Download.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! ../core */ "./node_modules/react-csv/lib/core.js");

var _metaProps = __webpack_require__(/*! ../metaProps */ "./node_modules/react-csv/lib/metaProps.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  target: '_blank'
};

var CSVDownload = function (_React$Component) {
  _inherits(CSVDownload, _React$Component);

  function CSVDownload(props) {
    _classCallCheck(this, CSVDownload);

    var _this = _possibleConstructorReturn(this, (CSVDownload.__proto__ || Object.getPrototypeOf(CSVDownload)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(CSVDownload, [{
    key: 'buildURI',
    value: function buildURI() {
      return _core.buildURI.apply(undefined, arguments);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          data = _props.data,
          headers = _props.headers,
          separator = _props.separator,
          enclosingCharacter = _props.enclosingCharacter,
          uFEFF = _props.uFEFF,
          target = _props.target,
          specs = _props.specs,
          replace = _props.replace;

      this.state.page = window.open(this.buildURI(data, uFEFF, headers, separator, enclosingCharacter), target, specs, replace);
    }
  }, {
    key: 'getWindow',
    value: function getWindow() {
      return this.state.page;
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return CSVDownload;
}(_react2.default.Component);

CSVDownload.defaultProps = Object.assign(_metaProps.defaultProps, defaultProps);
CSVDownload.propTypes = _metaProps.propTypes;
exports["default"] = CSVDownload;

/***/ }),

/***/ "./node_modules/react-csv/lib/components/Link.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-csv/lib/components/Link.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(/*! ../core */ "./node_modules/react-csv/lib/core.js");

var _metaProps = __webpack_require__(/*! ../metaProps */ "./node_modules/react-csv/lib/metaProps.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CSVLink = function (_React$Component) {
  _inherits(CSVLink, _React$Component);

  function CSVLink(props) {
    _classCallCheck(this, CSVLink);

    var _this = _possibleConstructorReturn(this, (CSVLink.__proto__ || Object.getPrototypeOf(CSVLink)).call(this, props));

    _this.buildURI = _this.buildURI.bind(_this);
    return _this;
  }

  _createClass(CSVLink, [{
    key: 'buildURI',
    value: function buildURI() {
      return _core.buildURI.apply(undefined, arguments);
    }
  }, {
    key: 'handleLegacy',
    value: function handleLegacy(event) {
      var isAsync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (window.navigator.msSaveOrOpenBlob) {
        event.preventDefault();

        var _props = this.props,
            data = _props.data,
            headers = _props.headers,
            separator = _props.separator,
            filename = _props.filename,
            enclosingCharacter = _props.enclosingCharacter,
            uFEFF = _props.uFEFF;


        var csvData = isAsync && typeof data === 'function' ? data() : data;

        var blob = new Blob([uFEFF ? '\uFEFF' : '', (0, _core.toCSV)(csvData, headers, separator, enclosingCharacter)]);
        window.navigator.msSaveBlob(blob, filename);

        return false;
      }
    }
  }, {
    key: 'handleAsyncClick',
    value: function handleAsyncClick(event) {
      var _this2 = this;

      var done = function done(proceed) {
        if (proceed === false) {
          event.preventDefault();
          return;
        }
        _this2.handleLegacy(event, true);
      };

      this.props.onClick(event, done);
    }
  }, {
    key: 'handleSyncClick',
    value: function handleSyncClick(event) {
      var stopEvent = this.props.onClick(event) === false;
      if (stopEvent) {
        event.preventDefault();
        return;
      }
      this.handleLegacy(event);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _this3 = this;

      return function (event) {
        if (typeof _this3.props.onClick === 'function') {
          return _this3.props.asyncOnClick ? _this3.handleAsyncClick(event) : _this3.handleSyncClick(event);
        }
        _this3.handleLegacy(event);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          data = _props2.data,
          headers = _props2.headers,
          separator = _props2.separator,
          filename = _props2.filename,
          uFEFF = _props2.uFEFF,
          children = _props2.children,
          onClick = _props2.onClick,
          asyncOnClick = _props2.asyncOnClick,
          enclosingCharacter = _props2.enclosingCharacter,
          rest = _objectWithoutProperties(_props2, ['data', 'headers', 'separator', 'filename', 'uFEFF', 'children', 'onClick', 'asyncOnClick', 'enclosingCharacter']);

      var isNodeEnvironment = typeof window === 'undefined';
      var href = isNodeEnvironment ? '' : this.buildURI(data, uFEFF, headers, separator, enclosingCharacter);

      return _react2.default.createElement(
        'a',
        _extends({
          download: filename
        }, rest, {
          ref: function ref(link) {
            return _this4.link = link;
          },
          target: '_self',
          href: href,
          onClick: this.handleClick()
        }),
        children
      );
    }
  }]);

  return CSVLink;
}(_react2.default.Component);

CSVLink.defaultProps = _metaProps.defaultProps;
CSVLink.propTypes = _metaProps.propTypes;
exports["default"] = CSVLink;

/***/ }),

/***/ "./node_modules/react-csv/lib/core.js":
/*!********************************************!*\
  !*** ./node_modules/react-csv/lib/core.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isSafari = exports.isSafari = function isSafari() {
  return (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  );
};

var isJsons = exports.isJsons = function isJsons(array) {
  return Array.isArray(array) && array.every(function (row) {
    return (typeof row === "undefined" ? "undefined" : _typeof(row)) === 'object' && !(row instanceof Array);
  });
};

var isArrays = exports.isArrays = function isArrays(array) {
  return Array.isArray(array) && array.every(function (row) {
    return Array.isArray(row);
  });
};

var jsonsHeaders = exports.jsonsHeaders = function jsonsHeaders(array) {
  return Array.from(array.map(function (json) {
    return Object.keys(json);
  }).reduce(function (a, b) {
    return new Set([].concat(_toConsumableArray(a), _toConsumableArray(b)));
  }, []));
};

var jsons2arrays = exports.jsons2arrays = function jsons2arrays(jsons, headers) {
  headers = headers || jsonsHeaders(jsons);

  var headerLabels = headers;
  var headerKeys = headers;
  if (isJsons(headers)) {
    headerLabels = headers.map(function (header) {
      return header.label;
    });
    headerKeys = headers.map(function (header) {
      return header.key;
    });
  }

  var data = jsons.map(function (object) {
    return headerKeys.map(function (header) {
      return getHeaderValue(header, object);
    });
  });
  return [headerLabels].concat(_toConsumableArray(data));
};

var getHeaderValue = exports.getHeaderValue = function getHeaderValue(property, obj) {
  var foundValue = property.replace(/\[([^\]]+)]/g, ".$1").split(".").reduce(function (o, p, i, arr) {
    var value = o[p];
    if (value === undefined || value === null) {
      arr.splice(1);
    } else {
      return value;
    }
  }, obj);

  return foundValue === undefined ? property in obj ? obj[property] : '' : foundValue;
};

var elementOrEmpty = exports.elementOrEmpty = function elementOrEmpty(element) {
  return typeof element === 'undefined' || element === null ? '' : element;
};

var joiner = exports.joiner = function joiner(data) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
  var enclosingCharacter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '"';

  return data.filter(function (e) {
    return e;
  }).map(function (row) {
    return row.map(function (element) {
      return elementOrEmpty(element);
    }).map(function (column) {
      return "" + enclosingCharacter + column + enclosingCharacter;
    }).join(separator);
  }).join("\n");
};

var arrays2csv = exports.arrays2csv = function arrays2csv(data, headers, separator, enclosingCharacter) {
  return joiner(headers ? [headers].concat(_toConsumableArray(data)) : data, separator, enclosingCharacter);
};

var jsons2csv = exports.jsons2csv = function jsons2csv(data, headers, separator, enclosingCharacter) {
  return joiner(jsons2arrays(data, headers), separator, enclosingCharacter);
};

var string2csv = exports.string2csv = function string2csv(data, headers, separator, enclosingCharacter) {
  return headers ? headers.join(separator) + "\n" + data : data.replace(/"/g, '""');
};

var toCSV = exports.toCSV = function toCSV(data, headers, separator, enclosingCharacter) {
  if (isJsons(data)) return jsons2csv(data, headers, separator, enclosingCharacter);
  if (isArrays(data)) return arrays2csv(data, headers, separator, enclosingCharacter);
  if (typeof data === 'string') return string2csv(data, headers, separator);
  throw new TypeError("Data should be a \"String\", \"Array of arrays\" OR \"Array of objects\" ");
};

var buildURI = exports.buildURI = function buildURI(data, uFEFF, headers, separator, enclosingCharacter) {
  var csv = toCSV(data, headers, separator, enclosingCharacter);
  var type = isSafari() ? 'application/csv' : 'text/csv';
  var blob = new Blob([uFEFF ? "\uFEFF" : '', csv], { type: type });
  var dataURI = "data:" + type + ";charset=utf-8," + (uFEFF ? "\uFEFF" : '') + csv;

  var URL = window.URL || window.webkitURL;

  return typeof URL.createObjectURL === 'undefined' ? dataURI : URL.createObjectURL(blob);
};

/***/ }),

/***/ "./node_modules/react-csv/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-csv/lib/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CSVLink = exports.CSVDownload = undefined;

var _Download = __webpack_require__(/*! ./components/Download */ "./node_modules/react-csv/lib/components/Download.js");

var _Download2 = _interopRequireDefault(_Download);

var _Link = __webpack_require__(/*! ./components/Link */ "./node_modules/react-csv/lib/components/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSVDownload = exports.CSVDownload = _Download2.default;
var CSVLink = exports.CSVLink = _Link2.default;

/***/ }),

/***/ "./node_modules/react-csv/lib/metaProps.js":
/*!*************************************************!*\
  !*** ./node_modules/react-csv/lib/metaProps.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PropsNotForwarded = exports.defaultProps = exports.propTypes = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = exports.propTypes = {
  data: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.array, _propTypes.func]).isRequired,
  headers: _propTypes.array,
  target: _propTypes.string,
  separator: _propTypes.string,
  filename: _propTypes.string,
  uFEFF: _propTypes.bool,
  onClick: _propTypes.func,
  asyncOnClick: _propTypes.bool,
  enclosingCharacter: _propTypes.string
};

var defaultProps = exports.defaultProps = {
  separator: ',',
  filename: 'generatedBy_react-csv.csv',
  uFEFF: true,
  asyncOnClick: false,
  enclosingCharacter: '"'
};

var PropsNotForwarded = exports.PropsNotForwarded = ['data', 'headers'];

/***/ }),

/***/ "./node_modules/react-infinite-scroll-component/dist/index.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-infinite-scroll-component/dist/index.es.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

var ThresholdUnits = {
    Pixel: 'Pixel',
    Percent: 'Percent',
};
var defaultThreshold = {
    unit: ThresholdUnits.Percent,
    value: 0.8,
};
function parseThreshold(scrollThreshold) {
    if (typeof scrollThreshold === 'number') {
        return {
            unit: ThresholdUnits.Percent,
            value: scrollThreshold * 100,
        };
    }
    if (typeof scrollThreshold === 'string') {
        if (scrollThreshold.match(/^(\d*(\.\d+)?)px$/)) {
            return {
                unit: ThresholdUnits.Pixel,
                value: parseFloat(scrollThreshold),
            };
        }
        if (scrollThreshold.match(/^(\d*(\.\d+)?)%$/)) {
            return {
                unit: ThresholdUnits.Percent,
                value: parseFloat(scrollThreshold),
            };
        }
        console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...');
        return defaultThreshold;
    }
    console.warn('scrollThreshold should be string or number');
    return defaultThreshold;
}

var InfiniteScroll = /** @class */ (function (_super) {
    __extends(InfiniteScroll, _super);
    function InfiniteScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.lastScrollTop = 0;
        _this.actionTriggered = false;
        // variables to keep track of pull down behaviour
        _this.startY = 0;
        _this.currentY = 0;
        _this.dragging = false;
        // will be populated in componentDidMount
        // based on the height of the pull down element
        _this.maxPullDownDistance = 0;
        _this.getScrollableTarget = function () {
            if (_this.props.scrollableTarget instanceof HTMLElement)
                return _this.props.scrollableTarget;
            if (typeof _this.props.scrollableTarget === 'string') {
                return document.getElementById(_this.props.scrollableTarget);
            }
            if (_this.props.scrollableTarget === null) {
                console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      ");
            }
            return null;
        };
        _this.onStart = function (evt) {
            if (_this.lastScrollTop)
                return;
            _this.dragging = true;
            if (evt instanceof MouseEvent) {
                _this.startY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.startY = evt.touches[0].pageY;
            }
            _this.currentY = _this.startY;
            if (_this._infScroll) {
                _this._infScroll.style.willChange = 'transform';
                _this._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
            }
        };
        _this.onMove = function (evt) {
            if (!_this.dragging)
                return;
            if (evt instanceof MouseEvent) {
                _this.currentY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.currentY = evt.touches[0].pageY;
            }
            // user is scrolling down to up
            if (_this.currentY < _this.startY)
                return;
            if (_this.currentY - _this.startY >=
                Number(_this.props.pullDownToRefreshThreshold)) {
                _this.setState({
                    pullToRefreshThresholdBreached: true,
                });
            }
            // so you can drag upto 1.5 times of the maxPullDownDistance
            if (_this.currentY - _this.startY > _this.maxPullDownDistance * 1.5)
                return;
            if (_this._infScroll) {
                _this._infScroll.style.overflow = 'visible';
                _this._infScroll.style.transform = "translate3d(0px, " + (_this.currentY -
                    _this.startY) + "px, 0px)";
            }
        };
        _this.onEnd = function () {
            _this.startY = 0;
            _this.currentY = 0;
            _this.dragging = false;
            if (_this.state.pullToRefreshThresholdBreached) {
                _this.props.refreshFunction && _this.props.refreshFunction();
                _this.setState({
                    pullToRefreshThresholdBreached: false,
                });
            }
            requestAnimationFrame(function () {
                // this._infScroll
                if (_this._infScroll) {
                    _this._infScroll.style.overflow = 'auto';
                    _this._infScroll.style.transform = 'none';
                    _this._infScroll.style.willChange = 'unset';
                }
            });
        };
        _this.onScrollListener = function (event) {
            if (typeof _this.props.onScroll === 'function') {
                // Execute this callback in next tick so that it does not affect the
                // functionality of the library.
                setTimeout(function () { return _this.props.onScroll && _this.props.onScroll(event); }, 0);
            }
            var target = _this.props.height || _this._scrollableNode
                ? event.target
                : document.documentElement.scrollTop
                    ? document.documentElement
                    : document.body;
            // return immediately if the action has already been triggered,
            // prevents multiple triggers.
            if (_this.actionTriggered)
                return;
            var atBottom = _this.props.inverse
                ? _this.isElementAtTop(target, _this.props.scrollThreshold)
                : _this.isElementAtBottom(target, _this.props.scrollThreshold);
            // call the `next` function in the props to trigger the next data fetch
            if (atBottom && _this.props.hasMore) {
                _this.actionTriggered = true;
                _this.setState({ showLoader: true });
                _this.props.next && _this.props.next();
            }
            _this.lastScrollTop = target.scrollTop;
        };
        _this.state = {
            showLoader: false,
            pullToRefreshThresholdBreached: false,
            prevDataLength: props.dataLength,
        };
        _this.throttledOnScrollListener = throttle(150, _this.onScrollListener).bind(_this);
        _this.onStart = _this.onStart.bind(_this);
        _this.onMove = _this.onMove.bind(_this);
        _this.onEnd = _this.onEnd.bind(_this);
        return _this;
    }
    InfiniteScroll.prototype.componentDidMount = function () {
        if (typeof this.props.dataLength === 'undefined') {
            throw new Error("mandatory prop \"dataLength\" is missing. The prop is needed" +
                " when loading more content. Check README.md for usage");
        }
        this._scrollableNode = this.getScrollableTarget();
        this.el = this.props.height
            ? this._infScroll
            : this._scrollableNode || window;
        if (this.el) {
            this.el.addEventListener('scroll', this
                .throttledOnScrollListener);
        }
        if (typeof this.props.initialScrollY === 'number' &&
            this.el &&
            this.el instanceof HTMLElement &&
            this.el.scrollHeight > this.props.initialScrollY) {
            this.el.scrollTo(0, this.props.initialScrollY);
        }
        if (this.props.pullDownToRefresh && this.el) {
            this.el.addEventListener('touchstart', this.onStart);
            this.el.addEventListener('touchmove', this.onMove);
            this.el.addEventListener('touchend', this.onEnd);
            this.el.addEventListener('mousedown', this.onStart);
            this.el.addEventListener('mousemove', this.onMove);
            this.el.addEventListener('mouseup', this.onEnd);
            // get BCR of pullDown element to position it above
            this.maxPullDownDistance =
                (this._pullDown &&
                    this._pullDown.firstChild &&
                    this._pullDown.firstChild.getBoundingClientRect()
                        .height) ||
                    0;
            this.forceUpdate();
            if (typeof this.props.refreshFunction !== 'function') {
                throw new Error("Mandatory prop \"refreshFunction\" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage'");
            }
        }
    };
    InfiniteScroll.prototype.componentWillUnmount = function () {
        if (this.el) {
            this.el.removeEventListener('scroll', this
                .throttledOnScrollListener);
            if (this.props.pullDownToRefresh) {
                this.el.removeEventListener('touchstart', this.onStart);
                this.el.removeEventListener('touchmove', this.onMove);
                this.el.removeEventListener('touchend', this.onEnd);
                this.el.removeEventListener('mousedown', this.onStart);
                this.el.removeEventListener('mousemove', this.onMove);
                this.el.removeEventListener('mouseup', this.onEnd);
            }
        }
    };
    InfiniteScroll.prototype.componentDidUpdate = function (prevProps) {
        // do nothing when dataLength is unchanged
        if (this.props.dataLength === prevProps.dataLength)
            return;
        this.actionTriggered = false;
        // update state when new data was sent in
        this.setState({
            showLoader: false,
        });
    };
    InfiniteScroll.getDerivedStateFromProps = function (nextProps, prevState) {
        var dataLengthChanged = nextProps.dataLength !== prevState.prevDataLength;
        // reset when data changes
        if (dataLengthChanged) {
            return __assign(__assign({}, prevState), { prevDataLength: nextProps.dataLength });
        }
        return null;
    };
    InfiniteScroll.prototype.isElementAtTop = function (target, scrollThreshold) {
        if (scrollThreshold === void 0) { scrollThreshold = 0.8; }
        var clientHeight = target === document.body || target === document.documentElement
            ? window.screen.availHeight
            : target.clientHeight;
        var threshold = parseThreshold(scrollThreshold);
        if (threshold.unit === ThresholdUnits.Pixel) {
            return (target.scrollTop <=
                threshold.value + clientHeight - target.scrollHeight + 1);
        }
        return (target.scrollTop <=
            threshold.value / 100 + clientHeight - target.scrollHeight + 1);
    };
    InfiniteScroll.prototype.isElementAtBottom = function (target, scrollThreshold) {
        if (scrollThreshold === void 0) { scrollThreshold = 0.8; }
        var clientHeight = target === document.body || target === document.documentElement
            ? window.screen.availHeight
            : target.clientHeight;
        var threshold = parseThreshold(scrollThreshold);
        if (threshold.unit === ThresholdUnits.Pixel) {
            return (target.scrollTop + clientHeight >= target.scrollHeight - threshold.value);
        }
        return (target.scrollTop + clientHeight >=
            (threshold.value / 100) * target.scrollHeight);
    };
    InfiniteScroll.prototype.render = function () {
        var _this = this;
        var style = __assign({ height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' }, this.props.style);
        var hasChildren = this.props.hasChildren ||
            !!(this.props.children &&
                this.props.children instanceof Array &&
                this.props.children.length);
        // because heighted infiniteScroll visualy breaks
        // on drag down as overflow becomes visible
        var outerDivStyle = this.props.pullDownToRefresh && this.props.height
            ? { overflow: 'auto' }
            : {};
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: outerDivStyle, className: "infinite-scroll-component__outerdiv" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "infinite-scroll-component " + (this.props.className || ''), ref: function (infScroll) { return (_this._infScroll = infScroll); }, style: style },
                this.props.pullDownToRefresh && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { position: 'relative' }, ref: function (pullDown) { return (_this._pullDown = pullDown); } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: -1 * this.maxPullDownDistance,
                        } }, this.state.pullToRefreshThresholdBreached
                        ? this.props.releaseToRefreshContent
                        : this.props.pullDownToRefreshContent))),
                this.props.children,
                !this.state.showLoader &&
                    !hasChildren &&
                    this.props.hasMore &&
                    this.props.loader,
                this.state.showLoader && this.props.hasMore && this.props.loader,
                !this.props.hasMore && this.props.endMessage)));
    };
    return InfiniteScroll;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfiniteScroll);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/react-infinite-scroll-hook/dist/react-infinite-scroll-hook.esm.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-infinite-scroll-hook/dist/react-infinite-scroll-hook.esm.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intersection_observer_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intersection-observer-hook */ "./node_modules/react-intersection-observer-hook/dist/react-intersection-observer-hook.esm.js");



var DEFAULT_DELAY_IN_MS = 100;

function useInfiniteScroll(_ref) {
  var loading = _ref.loading,
      hasNextPage = _ref.hasNextPage,
      onLoadMore = _ref.onLoadMore,
      rootMargin = _ref.rootMargin,
      disabled = _ref.disabled,
      _ref$delayInMs = _ref.delayInMs,
      delayInMs = _ref$delayInMs === void 0 ? DEFAULT_DELAY_IN_MS : _ref$delayInMs;

  var _useTrackVisibility = (0,react_intersection_observer_hook__WEBPACK_IMPORTED_MODULE_1__.useTrackVisibility)({
    rootMargin: rootMargin
  }),
      ref = _useTrackVisibility[0],
      _useTrackVisibility$ = _useTrackVisibility[1],
      rootRef = _useTrackVisibility$.rootRef,
      isVisible = _useTrackVisibility$.isVisible;

  var shouldLoadMore = !disabled && !loading && isVisible && hasNextPage; // eslint-disable-next-line consistent-return

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (shouldLoadMore) {
      // When we trigger 'onLoadMore' and new items are added to the list,
      // right before they become rendered on the screen, 'loading' becomes false
      // and 'isVisible' can be true for a brief time, based on the scroll position.
      // So, it triggers 'onLoadMore' just after the first one is finished.
      // We use a small delay here to prevent this kind of situations.
      // It can be configured by hook args.
      var timer = setTimeout(function () {
        onLoadMore();
      }, delayInMs);
      return function () {
        clearTimeout(timer);
      };
    }
  }, [onLoadMore, shouldLoadMore, delayInMs]);
  return [ref, {
    rootRef: rootRef
  }];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);
//# sourceMappingURL=react-infinite-scroll-hook.esm.js.map


/***/ }),

/***/ "./node_modules/react-intersection-observer-hook/dist/react-intersection-observer-hook.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-intersection-observer-hook/dist/react-intersection-observer-hook.esm.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIntersectionObserver: () => (/* binding */ useIntersectionObserver),
/* harmony export */   useTrackVisibility: () => (/* binding */ useTrackVisibility)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function createObserverCache() {
  var cachesByRoot = new Map();

  function getObserver(_ref) {
    var root = _ref.root,
        rootMargin = _ref.rootMargin,
        threshold = _ref.threshold;
    var cacheByRoot = cachesByRoot.get(root);

    if (!cacheByRoot) {
      cacheByRoot = new Map();
      cachesByRoot.set(root, cacheByRoot);
    }

    var cacheKey = JSON.stringify({
      rootMargin: rootMargin,
      threshold: threshold
    });
    var cachedObserver = cacheByRoot.get(cacheKey);

    if (!cachedObserver) {
      var entryCallbacks = new Map();
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var callback = entryCallbacks.get(entry.target);
          callback == null ? void 0 : callback(entry);
        });
      }, {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold
      });
      cachedObserver = {
        observer: observer,
        entryCallbacks: entryCallbacks
      };
      cacheByRoot.set(cacheKey, cachedObserver);
    }

    return {
      observe: function observe(node, callback) {
        var _cachedObserver, _cachedObserver2;

        (_cachedObserver = cachedObserver) == null ? void 0 : _cachedObserver.entryCallbacks.set(node, callback);
        (_cachedObserver2 = cachedObserver) == null ? void 0 : _cachedObserver2.observer.observe(node);
      },
      unobserve: function unobserve(node) {
        var _cachedObserver3, _cachedObserver4;

        (_cachedObserver3 = cachedObserver) == null ? void 0 : _cachedObserver3.entryCallbacks["delete"](node);
        (_cachedObserver4 = cachedObserver) == null ? void 0 : _cachedObserver4.observer.unobserve(node);
      }
    };
  }

  return {
    getObserver: getObserver
  };
}

var DEFAULT_ROOT_MARGIN = '0px';
var DEFAULT_THRESHOLD = [0];
var observerCache = /*#__PURE__*/createObserverCache(); // For more info:
// https://developers.google.com/web/updates/2016/04/intersectionobserver
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

function useIntersectionObserver(args) {
  var _args$rootMargin, _args$threshold;

  var rootMargin = (_args$rootMargin = args == null ? void 0 : args.rootMargin) != null ? _args$rootMargin : DEFAULT_ROOT_MARGIN;
  var threshold = (_args$threshold = args == null ? void 0 : args.threshold) != null ? _args$threshold : DEFAULT_THRESHOLD;
  var nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var rootRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      entry = _useState[0],
      setEntry = _useState[1];

  var observe = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var node = nodeRef.current;

    if (!node) {
      setEntry(undefined);
      return;
    }

    var observer = observerCache.getObserver({
      root: rootRef.current,
      rootMargin: rootMargin,
      threshold: threshold
    });
    observer.observe(node, function (observedEntry) {
      setEntry(observedEntry);
    });
    observerRef.current = observer;
  }, [rootMargin, threshold]);
  var unobserve = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var currentObserver = observerRef.current;
    var node = nodeRef.current;

    if (node) {
      currentObserver == null ? void 0 : currentObserver.unobserve(node);
    }

    observerRef.current = null;
  }, []); // React will call the ref callback with the DOM element when the component mounts,
  // and call it with null when it unmounts.
  // So, we don't need an useEffect etc to unobserve nodes.
  // When nodeRef.current is null, it will be unobserved and observe function
  // won't do anything.

  var refCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (node) {
    unobserve();
    nodeRef.current = node;
    observe();
  }, [observe, unobserve]);
  var rootRefCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (rootNode) {
    unobserve();
    rootRef.current = rootNode;
    observe();
  }, [observe, unobserve]);
  return [refCallback, {
    entry: entry,
    rootRef: rootRefCallback
  }];
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function useTrackVisibility(args) {
  var _result$entry;

  var _useIntersectionObser = useIntersectionObserver(args),
      ref = _useIntersectionObser[0],
      result = _useIntersectionObser[1];

  var isVisible = Boolean((_result$entry = result.entry) == null ? void 0 : _result$entry.isIntersecting);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isVisible),
      wasEverVisible = _useState[0],
      setWasEverVisible = _useState[1];

  if (isVisible && !wasEverVisible) {
    setWasEverVisible(true);
  }

  return [ref, _extends({}, result, {
    isVisible: isVisible,
    wasEverVisible: wasEverVisible
  })];
}


//# sourceMappingURL=react-intersection-observer-hook.esm.js.map


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/listbox/listbox.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/listbox/listbox.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Listbox: () => (/* binding */ It)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-computed.js */ "./node_modules/@headlessui/react/dist/hooks/use-computed.js");
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-controllable.js */ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_text_value_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../hooks/use-text-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-text-value.js");
/* harmony import */ var _hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../hooks/use-tracked-pointer.js */ "./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculate-active-index.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
var Be=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(Be||{}),He=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(He||{}),Ge=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(Ge||{}),Ne=(i=>(i[i.OpenListbox=0]="OpenListbox",i[i.CloseListbox=1]="CloseListbox",i[i.GoToOption=2]="GoToOption",i[i.Search=3]="Search",i[i.ClearSearch=4]="ClearSearch",i[i.RegisterOption=5]="RegisterOption",i[i.UnregisterOption=6]="UnregisterOption",i[i.RegisterLabel=7]="RegisterLabel",i))(Ne||{});function z(e,a=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)(a(e.options.slice()),t=>t.dataRef.current.domRef.current),l=n?r.indexOf(n):null;return l===-1&&(l=null),{options:r,activeOptionIndex:l}}let je={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let a=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(l=>n(l.dataRef.current.value));return r!==-1&&(a=r),{...e,listboxState:0,activeOptionIndex:a}},[2](e,a){var l;if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=z(e),r=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.calculateActiveIndex)(a,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeOptionIndex:r,activationTrigger:(l=a.trigger)!=null?l:1}},[3]:(e,a)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,l=e.searchQuery+a.value.toLowerCase(),p=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(i=>{var b;return!i.dataRef.current.disabled&&((b=i.dataRef.current.textValue)==null?void 0:b.startsWith(l))}),u=p?e.options.indexOf(p):-1;return u===-1||u===e.activeOptionIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeOptionIndex:u,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,a)=>{let n={id:a.id,dataRef:a.dataRef},r=z(e,l=>[...l,n]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(a.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},[6]:(e,a)=>{let n=z(e,r=>{let l=r.findIndex(t=>t.id===a.id);return l!==-1&&r.splice(l,1),r});return{...e,...n,activationTrigger:1}},[7]:(e,a)=>({...e,labelId:a.id})},J=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);J.displayName="ListboxActionsContext";function k(e){let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(J);if(a===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,k),n}return a}let q=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);q.displayName="ListboxDataContext";function w(e){let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(q);if(a===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}return a}function Ve(e,a){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(a.type,je,e,a)}let Ke=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Qe(e,a){let{value:n,defaultValue:r,form:l,name:t,onChange:p,by:u=(s,c)=>s===c,disabled:i=!1,horizontal:b=!1,multiple:R=!1,...m}=e;const P=b?"horizontal":"vertical";let S=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(a),[g=R?[]:void 0,x]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_5__.useControllable)(n,p,r),[T,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ve,{dataRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),L=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({static:!1,hold:!1}),U=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(typeof u=="string"?(s,c)=>{let O=u;return(s==null?void 0:s[O])===(c==null?void 0:c[O])}:u),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(s=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(d.mode,{[1]:()=>g.some(c=>I(c,s)),[0]:()=>I(g,s)}),[g]),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({...T,value:g,disabled:i,mode:R?1:0,orientation:P,compare:I,isSelected:A,optionsPropsRef:L,labelRef:U,buttonRef:B,optionsRef:W}),[g,i,R,T]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(()=>{T.dataRef.current=d},[d]),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_8__.useOutsideClick)([d.buttonRef,d.optionsRef],(s,c)=>{var O;o({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.isFocusableElement)(c,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusableMode.Loose)||(s.preventDefault(),(O=d.buttonRef.current)==null||O.focus())},d.listboxState===0);let H=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:d.listboxState===0,disabled:i,value:g}),[d,i,g]),ie=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(s=>{let c=d.options.find(O=>O.id===s);c&&X(c.dataRef.current.value)}),re=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{if(d.activeOptionIndex!==null){let{dataRef:s,id:c}=d.options[d.activeOptionIndex];X(s.current.value),o({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,id:c})}}),ae=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>o({type:0})),le=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>o({type:1})),se=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)((s,c,O)=>s===_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific?o({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,id:c,trigger:O}):o({type:2,focus:s,trigger:O})),pe=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)((s,c)=>(o({type:5,id:s,dataRef:c}),()=>o({type:6,id:s}))),ue=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(s=>(o({type:7,id:s}),()=>o({type:7,id:null}))),X=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(s=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(d.mode,{[0](){return x==null?void 0:x(s)},[1](){let c=d.value.slice(),O=c.findIndex(C=>I(C,s));return O===-1?c.push(s):c.splice(O,1),x==null?void 0:x(c)}})),de=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(s=>o({type:3,value:s})),ce=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>o({type:4})),fe=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({onChange:X,registerOption:pe,registerLabel:ue,goToOption:se,closeListbox:le,openListbox:ae,selectActiveOption:re,selectOption:ie,search:de,clearSearch:ce}),[]),Te={ref:S},G=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),be=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__.useDisposables)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{G.current&&r!==void 0&&be.addEventListener(G.current,"reset",()=>{x==null||x(r)})},[G,x]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(J.Provider,{value:fe},react__WEBPACK_IMPORTED_MODULE_0__.createElement(q.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(d.listboxState,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Closed})},t!=null&&g!=null&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_11__.objectToFormEntries)({[t]:g}).map(([s,c],O)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_12__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_12__.Features.Hidden,ref:O===0?C=>{var Y;G.current=(Y=C==null?void 0:C.closest("form"))!=null?Y:null}:void 0,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.compact)({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,disabled:i,name:s,value:c})})),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:Te,theirProps:m,slot:H,defaultTag:Ke,name:"Listbox"}))))}let We="button";function Xe(e,a){var x;let n=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_14__.useId)(),{id:r=`headlessui-listbox-button-${n}`,...l}=e,t=w("Listbox.Button"),p=k("Listbox.Button"),u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(t.buttonRef,a),i=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__.useDisposables)(),b=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(T=>{switch(T.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.Enter:case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.ArrowDown:T.preventDefault(),p.openListbox(),i.nextFrame(()=>{t.value||p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First)});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.ArrowUp:T.preventDefault(),p.openListbox(),i.nextFrame(()=>{t.value||p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last)});break}}),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(T=>{switch(T.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.Space:T.preventDefault();break}}),m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(T=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_16__.isDisabledReactIssue7711)(T.currentTarget))return T.preventDefault();t.listboxState===0?(p.closeListbox(),i.nextFrame(()=>{var o;return(o=t.buttonRef.current)==null?void 0:o.focus({preventScroll:!0})})):(T.preventDefault(),p.openListbox())}),P=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_17__.useComputed)(()=>{if(t.labelId)return[t.labelId,r].join(" ")},[t.labelId,r]),S=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),g={ref:u,id:r,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_18__.useResolveButtonType)(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(x=t.optionsRef.current)==null?void 0:x.id,"aria-expanded":t.listboxState===0,"aria-labelledby":P,disabled:t.disabled,onKeyDown:b,onKeyUp:R,onClick:m};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:g,theirProps:l,slot:S,defaultTag:We,name:"Listbox.Button"})}let $e="label";function ze(e,a){let n=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_14__.useId)(),{id:r=`headlessui-listbox-label-${n}`,...l}=e,t=w("Listbox.Label"),p=k("Listbox.Label"),u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(t.labelRef,a);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(()=>p.registerLabel(r),[r]);let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{var m;return(m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}),b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.listboxState===0,disabled:t.disabled}),[t]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:{ref:u,id:r,onClick:i},theirProps:l,slot:b,defaultTag:$e,name:"Listbox.Label"})}let Je="ul",qe=_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.Features.Static;function Ye(e,a){var T;let n=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_14__.useId)(),{id:r=`headlessui-listbox-options-${n}`,...l}=e,t=w("Listbox.Options"),p=k("Listbox.Options"),u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(t.optionsRef,a),i=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__.useDisposables)(),b=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_9__.useDisposables)(),R=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.useOpenClosed)(),m=(()=>R!==null?(R&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_10__.State.Open:t.listboxState===0)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var L;let o=t.optionsRef.current;o&&t.listboxState===0&&o!==((L=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_19__.getOwnerDocument)(o))==null?void 0:L.activeElement)&&o.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(o=>{switch(b.dispose(),o.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.Space:if(t.searchQuery!=="")return o.preventDefault(),o.stopPropagation(),p.search(o.key);case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:L}=t.options[t.activeOptionIndex];p.onChange(L.current.value)}t.mode===0&&(p.closeListbox(),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_20__.disposables)().nextFrame(()=>{var L;return(L=t.buttonRef.current)==null?void 0:L.focus({preventScroll:!0})}));break;case (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(t.orientation,{vertical:_keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.ArrowDown,horizontal:_keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.ArrowRight}):return o.preventDefault(),o.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Next);case (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(t.orientation,{vertical:_keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.ArrowUp,horizontal:_keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Previous);case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.Home:case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.PageUp:return o.preventDefault(),o.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First);case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.End:case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.PageDown:return o.preventDefault(),o.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last);case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.Escape:return o.preventDefault(),o.stopPropagation(),p.closeListbox(),i.nextFrame(()=>{var L;return(L=t.buttonRef.current)==null?void 0:L.focus({preventScroll:!0})});case _keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.Tab:o.preventDefault(),o.stopPropagation();break;default:o.key.length===1&&(p.search(o.key),b.setTimeout(()=>p.clearSearch(),350));break}}),S=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_17__.useComputed)(()=>{var o;return(o=t.buttonRef.current)==null?void 0:o.id},[t.buttonRef.current]),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.listboxState===0}),[t]),x={"aria-activedescendant":t.activeOptionIndex===null||(T=t.options[t.activeOptionIndex])==null?void 0:T.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":S,"aria-orientation":t.orientation,id:r,onKeyDown:P,role:"listbox",tabIndex:0,ref:u};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:x,theirProps:l,slot:g,defaultTag:Je,features:qe,visible:m,name:"Listbox.Options"})}let Ze="li";function et(e,a){let n=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_14__.useId)(),{id:r=`headlessui-listbox-option-${n}`,disabled:l=!1,value:t,...p}=e,u=w("Listbox.Option"),i=k("Listbox.Option"),b=u.activeOptionIndex!==null?u.options[u.activeOptionIndex].id===r:!1,R=u.isSelected(t),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),P=(0,_hooks_use_text_value_js__WEBPACK_IMPORTED_MODULE_21__.useTextValue)(m),S=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_22__.useLatestValue)({disabled:l,value:t,domRef:m,get textValue(){return P()}}),g=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(a,m);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(()=>{if(u.listboxState!==0||!b||u.activationTrigger===0)return;let A=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_20__.disposables)();return A.requestAnimationFrame(()=>{var d,H;(H=(d=m.current)==null?void 0:d.scrollIntoView)==null||H.call(d,{block:"nearest"})}),A.dispose},[m,b,u.listboxState,u.activationTrigger,u.activeOptionIndex]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(()=>i.registerOption(r,S),[S,r]);let x=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(A=>{if(l)return A.preventDefault();i.onChange(t),u.mode===0&&(i.closeListbox(),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_20__.disposables)().nextFrame(()=>{var d;return(d=u.buttonRef.current)==null?void 0:d.focus({preventScroll:!0})}))}),T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{if(l)return i.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing);i.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,r)}),o=(0,_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_23__.useTrackedPointer)(),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(A=>o.update(A)),U=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(A=>{o.wasMoved(A)&&(l||b||i.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,r,0))}),B=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(A=>{o.wasMoved(A)&&(l||b&&i.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing))}),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:b,selected:R,disabled:l}),[b,R,l]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.render)({ourProps:{id:r,ref:g,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":R,disabled:void 0,onClick:x,onFocus:T,onPointerEnter:L,onMouseEnter:L,onPointerMove:U,onMouseMove:U,onPointerLeave:B,onMouseLeave:B},theirProps:p,slot:W,defaultTag:Ze,name:"Listbox.Option"})}let tt=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(Qe),ot=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(Xe),nt=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(ze),it=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(Ye),rt=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_13__.forwardRefWithAs)(et),It=Object.assign(tt,{Button:ot,Label:nt,Options:it,Option:rt});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-computed.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-computed.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useComputed: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function i(e,o){let[u,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),r=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(()=>t(r.current),[r,t,...o]),u}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-controllable.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useControllable: () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=l!==void 0,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return e&&!t.current&&!u.current?(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(n=>(e||s(n),r==null?void 0:r(n)))]}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/form.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/form.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attemptSubmit: () => (/* binding */ p),
/* harmony export */   objectToFormEntries: () => (/* binding */ e)
/* harmony export */ });
function e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):typeof t=="boolean"?i.push([s,t?"1":"0"]):typeof t=="string"?i.push([s,t]):typeof t=="number"?i.push([s,`${t}`]):t==null?i.push([s,""]):e(t,s,i)}function p(i){var t,r;let s=(t=i==null?void 0:i.form)!=null?t:i.closest("form");if(s){for(let n of s.elements)if(n!==i&&(n.tagName==="INPUT"&&n.type==="submit"||n.tagName==="BUTTON"&&n.type==="submit"||n.nodeName==="INPUT"&&n.type==="image")){n.click();return}(r=s.requestSubmit)==null||r.call(s)}}


/***/ })

}]);