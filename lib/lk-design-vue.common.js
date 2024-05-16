module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "03d7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b089");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7b613a36", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "06e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_41b61626_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5585");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_41b61626_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_id_41b61626_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1ab3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_058df44c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("03d7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_058df44c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_058df44c_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5585":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6aed");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("52b92531", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "6aed":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lk_button[data-v-41b61626]{display:inline-block}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b089":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lk_copy[data-v-058df44c]{display:inline-block}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./packages/directive/clickOutside.js
// 创建一个全局的点击事件处理函数
const handleClickOutside = (event, el, binding) => {
  // 检查点击的元素是否在绑定的元素内部
  let include = [];
  if (binding.value && binding.value.include) {
    include = binding.value.include().filter(_ => _);
  }
  let isInclude = false;
  if (include.length) {
    const arr = include.map(_ => _.contains(event.target));
    isInclude = arr.indexOf(true) > -1;
  }
  if (!(el === event.target || el.contains(event.target) || isInclude)) {
    // 如果点击的元素不在绑定的元素内部，则触发绑定的回调函数
    if (binding.value && binding.value.handler) {
      if (binding.value.handler) {
        binding.value.handler();
      }
    } else {
      binding.value();
    }
  }
};
/**
 * @description: 外部点击

方式一：
  <div v-click-outside="handleClickOutside"></div>

方式二：指定元素之外生效
  <div
    v-click-outside="{
      handler: handleClickOutside,
      include: include
    }"
  >
  </div>

include() {
    return [document.querySelector('.current_info')]
},
handleClickOutside() {
    this.$store.commit('updateOrgListVisible', false)
},

 */
// Vue.directive('clickOutside', )
const obj = {
  name: 'clickOutside',
  // 指令的绑定函数，在元素插入到 DOM 中时调用
  bind: function (el, binding) {
    // 创建一个点击事件处理函数，并将它保存在元素的属性中
    const handleClick = event => handleClickOutside(event, el, binding);
    el.__vueClickOutside__ = handleClick;

    // 在 document 上监听点击事件
    document.addEventListener('click', handleClick);
  },
  // 指令的解绑函数，在元素从 DOM 中移除时调用
  unbind(el) {
    // 移除之前保存在元素属性中的点击事件处理函数
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};
obj.install = function (Vue) {
  Vue.directive(obj.name, obj);
};
/* harmony default export */ var clickOutside = (obj);
// CONCATENATED MODULE: ./packages/directive/watchResize.js
const watchResize_obj = {
  name: 'watchResize',
  bind(el, binding) {
    // el为绑定的元素，binding为绑定给指令的对象
    let width = '';
    let height = '';
    function isReize() {
      const style = document.defaultView.getComputedStyle(el);
      if (width !== style.width || height !== style.height) {
        binding.value({
          width: style.width,
          height: style.height
        }); // 关键(这传入的是函数,所以执行此函数)
      }
      width = style.width;
      height = style.height;
    }
    el.__vueSetInterval__ = setInterval(isReize, 300);
  },
  unbind(el) {
    clearInterval(el.__vueSetInterval__);
  }
};
watchResize_obj.install = function (Vue) {
  Vue.directive(watchResize_obj.name, watchResize_obj);
};
/* harmony default export */ var watchResize = (watchResize_obj);
// CONCATENATED MODULE: ./packages/directive/drag.js
const drag_obj = {
  name: 'drag',
  bind: function (el, binding, vnode) {
    const odiv = el; // 获取当前元素
    odiv.onmousedown = e => {
      // 算出鼠标相对元素的位置
      const disX = e.clientX - odiv.offsetLeft;
      const disY = e.clientY - odiv.offsetTop;
      document.onmousemove = e => {
        // * 防止拖动结束触发点击事件
        // vnode.context.$emit('dragging', true)
        el.classList.add('dragging');
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        const left = e.clientX - disX;
        const top = e.clientY - disY;

        // 绑定元素位置到positionX和positionY上面
        e.positionX = top;
        e.positionY = left;

        // 移动当前元素
        odiv.style.left = left + 'px';
        odiv.style.top = top + 'px';
        odiv.style.right = 'auto';
        odiv.style.bottom = 'auto';
        e.stopPropagation();
      };
      document.onmouseup = e => {
        setTimeout(() => {
          el.classList.remove('dragging');
        }, 0);
        // vnode.context.$emit('dragging', false)
        if (binding.value && binding.value.viewer) {
          // * 限制在窗口内
          const left = e.clientX - disX;
          const top = e.clientY - disY;
          if (top < 0) {
            odiv.style.top = odiv.offsetHeight / 2 + 'px';
          }
          if (left > window.innerWidth - odiv.offsetWidth / 2) {
            odiv.style.left = window.innerWidth - odiv.offsetWidth / 2 + 'px';
          }
          if (top > window.innerHeight) {
            odiv.style.top = window.innerHeight - odiv.offsetHeight / 2 + 'px';
          }
          if (left < odiv.offsetHeight / 2) {
            odiv.style.left = odiv.offsetHeight / 2 + 'px';
          }
        }
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
    odiv.ontouchstart = e => {
      const disX = e.touches[0].clientX - odiv.offsetLeft;
      const disY = e.touches[0].clientY - odiv.offsetTop;
      document.ontouchmove = e => {
        el.classList.add('dragging');
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        const left = e.touches[0].clientX - disX;
        const top = e.touches[0].clientY - disY;

        // 绑定元素位置到positionX和positionY上面
        e.touches[0].positionX = top;
        e.touches[0].positionY = left;

        // 移动当前元素
        odiv.style.left = left + 'px';
        odiv.style.top = top + 'px';
        odiv.style.right = 'auto';
        odiv.style.bottom = 'auto';
        if (binding.value && binding.value.viewer) {
          // * 限制在窗口内
          const left = e.touches[0].clientX - disX;
          const top = e.touches[0].clientY - disY;
          if (top < 0) {
            odiv.style.top = odiv.offsetHeight / 2 + 'px';
          }
          if (left > window.innerWidth - odiv.offsetWidth / 2) {
            odiv.style.left = window.innerWidth - odiv.offsetWidth / 2 + 'px';
          }
          if (top > window.innerHeight) {
            odiv.style.top = window.innerHeight - odiv.offsetHeight / 2 + 'px';
          }
          if (left < odiv.offsetHeight / 2) {
            odiv.style.left = odiv.offsetHeight / 2 + 'px';
          }
        }
        e.stopPropagation();
      };
      document.ontouchend = () => {
        setTimeout(() => {
          el.classList.remove('dragging');
        }, 0);
        document.ontouchend = null;
        document.ontouchmove = null;
      };
    };
  }
};
drag_obj.install = function (Vue) {
  Vue.directive(drag_obj.name, drag_obj);
};
/* harmony default export */ var drag = (drag_obj);
// CONCATENATED MODULE: ./packages/directive/stop.js
const stop_obj = {
  name: 'stop',
  bind(el) {
    el.onmousedown = e => {
      e.stopPropagation();
    };
    el.ontouchstart = e => {
      e.stopPropagation();
    };
  }
};
stop_obj.install = function (Vue) {
  Vue.directive(stop_obj.name, stop_obj);
};
/* harmony default export */ var stop = (stop_obj);
// CONCATENATED MODULE: ./packages/directive/scrollBottom.js
const scrollBottom_obj = {
  name: 'scrollBottom',
  bind(el, binding) {
    const handleScroll = () => {
      const scrollHeight = el.scrollHeight;
      const scrollTop = el.scrollTop;
      const clientHeight = el.clientHeight;

      // 判断是否滚动到底部
      if (scrollTop + clientHeight >= scrollHeight) {
        // 执行触发函数
        binding.value();
      }
    };

    // 添加滚动事件监听
    el.addEventListener('scroll', handleScroll);

    // 在元素销毁时移除事件监听
    el._scrollBottomHandler = handleScroll;
  },
  unbind(el) {
    // 移除事件监听
    el.removeEventListener('scroll', el._scrollBottomHandler);
    delete el._scrollBottomHandler;
  }
};
scrollBottom_obj.install = function (Vue) {
  Vue.directive(scrollBottom_obj.name, scrollBottom_obj);
};
/* harmony default export */ var scrollBottom = (scrollBottom_obj);
// CONCATENATED MODULE: ./packages/directive/index.js






// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1757f61a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=template&id=41b61626&scoped=true
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"lk_button"},[_c('button',[_vm._t("default")],2)])
}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=template&id=41b61626&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=script&lang=js
/* harmony default export */ var buttonvue_type_script_lang_js = ({
  name: 'LkButton',
  components: {},
  props: {
    name: {
      type: String,
      default: ''
    },
    obj: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {
    obj: {
      handler(val, oldVal) {},
      deep: false,
      immediate: false
    }
  },
  mounted() {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=js
 /* harmony default export */ var src_buttonvue_type_script_lang_js = (buttonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./packages/button/src/button.vue?vue&type=style&index=0&id=41b61626&prod&lang=scss&scoped=true
var buttonvue_type_style_index_0_id_41b61626_prod_lang_scss_scoped_true = __webpack_require__("06e3");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/button/src/button.vue






/* normalize component */

var component = normalizeComponent(
  src_buttonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "41b61626",
  null
  
)

/* harmony default export */ var src_button = (component.exports);
// CONCATENATED MODULE: ./packages/button/index.js

src_button.install = function (Vue) {
  Vue.component(src_button.name, src_button);
};
/* harmony default export */ var packages_button = (src_button);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"1757f61a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/copy/src/index.vue?vue&type=template&id=058df44c&scoped=true
var srcvue_type_template_id_058df44c_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"lk_copy",on:{"click":function($event){return _vm.handleClick(_vm.value)}}},[_vm._t("default")],2)
}
var srcvue_type_template_id_058df44c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/copy/src/index.vue?vue&type=template&id=058df44c&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/copy/src/index.vue?vue&type=script&lang=js
/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: 'LkCopy',
  components: {},
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {
    obj: {
      handler(val, oldVal) {},
      deep: false,
      immediate: false
    }
  },
  mounted() {},
  methods: {
    handleClick() {
      const input = document.createElement('textarea');
      input.value = this.value;
      document.body.appendChild(input);
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand('copy');
      document.body.removeChild(input);
      alert('复制成功！');
    }
  }
});
// CONCATENATED MODULE: ./packages/copy/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var copy_srcvue_type_script_lang_js = (srcvue_type_script_lang_js); 
// EXTERNAL MODULE: ./packages/copy/src/index.vue?vue&type=style&index=0&id=058df44c&prod&lang=scss&scoped=true
var srcvue_type_style_index_0_id_058df44c_prod_lang_scss_scoped_true = __webpack_require__("1ab3");

// CONCATENATED MODULE: ./packages/copy/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  copy_srcvue_type_script_lang_js,
  srcvue_type_template_id_058df44c_scoped_true_render,
  srcvue_type_template_id_058df44c_scoped_true_staticRenderFns,
  false,
  null,
  "058df44c",
  null
  
)

/* harmony default export */ var copy_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/copy/index.js

copy_src.install = function (Vue) {
  Vue.component(copy_src.name, copy_src);
};
/* harmony default export */ var copy = (copy_src);
// CONCATENATED MODULE: ./packages/index.js
// * 指令


// * 组件


const components = [packages_button, copy];
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
  Vue.use(clickOutside);
  Vue.use(watchResize);
  Vue.use(drag);
  Vue.use(stop);
  Vue.use(scrollBottom);
};

// 如果是直接引用，就不调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var packages_0 = ({
  install,
  clickOutside: clickOutside,
  watchResize: watchResize,
  drag: drag,
  stop: stop,
  scrollBottom: scrollBottom,
  Button: packages_button,
  Copy: copy
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=lk-design-vue.common.js.map