!
function(e) {
	function n(i) {
		if (t[i]) return t[i].exports;
		var a = t[i] = {
			exports: {},
			id: i,
			loaded: !1
		};
		return e[i].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports
	}
	var t = {};
	return n.m = e, n.c = t, n.p = "./", n(0)
}([function(e, n, t) {
	e.exports = t(1)
}, function(e, n, t) {
	(function(e) {
		function n() {
			var n = e("#video");
			n.attr("x5-video-player-type", "h5"), n.attr("x5-video-player-fullscreen", "true")
		}
		function i() {
			window.localStorage && window.localStorage.setItem(k, "1")
		}
		function a() {
			var e = !1;
			return window.localStorage && (e = window.localStorage.getItem(k)), !! e
		}
		function r() {
			var n = 9,
				t = 16,
				i = window.innerWidth,
				a = window.innerHeight,
				r = a - i * t / n;
			r = Math.round(r), r < -2 ? S.$wrapper.css("marginTop", r / 2 + "px") : S.$wrapper.css("marginTop", "0");
			var o = 375 / 590;
			if (i / a > o) {
				var s = a / (i / o);
				s -= .05, e(".end-header").css({
					transform: "scale(" + s + ")",
					"-webkit-transform": "scale(" + s + ")"
				}), e(".end-btns").addClass("end-fixed-bottom")
			} else e(".end-header").css({
				transform: "scale(1)",
				"-webkit-transform": "scale(1)"
			}), e(".end-btns").removeClass("end-fixed-bottom")
		}
		function o() {
			E.update(), window.requestAnimationFrame(o)
		}
		function s() {
			e(".loading-bg-ing").removeClass("loading-bg-ing-ani"), e(".loading-bg-bubble").fadeOut("fast", function() {
				$.show(), C.fadeIn(), D.show(), O.show(), setTimeout(function() {
					e(".loading").on("touchstart", function() {
						window.JD_report("MShengdian_Start"), O.addClass("leave"), e(".loading .loading-mask").fadeIn(function() {
							j.hide()
						}), S.start()
					})
				}, 800)
			})
		}
		t(5), t(6), t(7), t(8), t(9);
		var l = t(10),
			c = t(11),
			d = t(12);
		t(15), t(16), t(17);
		var u = t(18),
			f = new window.Landscape;
		f.init({
			zIndex: 1e4,
			bgcolor: "#100810"
		}), t(19);
		var p = "//m.360buyimg.com/babel/jfs/t3832/325/2990499421/8478/b79d1736/5873b383N42940561.jpg",
			h = {
				img: "http:" + p,
				link: window.location.href,
				desc: "皇上都说好的超级品牌，你能数出几个？",
				title: "这是我见过最硬的广告植入"
			};
		u("friend", h), u("timeline", h), u("qq", h), mqq && mqq.data && mqq.data.setShareInfo({
			title: h.title,
			desc: h.desc,
			image_url: h.img,
			share_url: h.link
		});
		var m = window.navigator.userAgent,
			g = m.match(/TBS\/([\d.]+)/),
			v = "036849",
			y = "036900",
			b = m.match(/MQQBrowser\/([\d.]+)/),
			A = "7.1",
			x = "7.2",
			w = {};
		g ? (w.isTBS = !0, w.isRightEvent = g[1] >= y, g[1] >= v && n()) : b && (w.isTBS = !0, w.isRightEvent = b[1] >= x, b[1] >= A && n());
		var k = "see",
			S = {};
		S.el = document.getElementById("video"), S.$el = e(S.el), S.$main = e(".main"), S.$wrapper = e(".main .wrapper"), S.$poster = e(".main .poster"), S.$controls = e(".main .controls"), S.$skipBtn = e(".main .controls-skip"), S.$continueBtn = e(".main .controls-continue"), S.isCanPlay = !1, S.isFirst = !0, S.callback = function() {}, S.show = function() {
			S.isFirst = !1, S.$el.removeClass("min"), S.$el.addClass("show"), S.$poster.fadeOut("slow")
		}, S.hide = function() {}, S.start = function() {
			S.$main.show(), S.$poster.show(), S.el.play(), S.$controls.hide(), S.isCanPlay ? S.show() : S.callback = S.show
		}, e.os.ios && d(S.el), S.el.addEventListener("timeupdate", function(e) {
			S.isFirst && S.callback.call(), S.isCanPlay = !0, S.isFirst = !1
		}), S.el.addEventListener("ended", function(e) {
			E.enter(), S.$main.fadeOut()
		}), w.isTBS && (w.isRightEvent ? S.el.addEventListener("x5videoexitfullscreen", function() {
			S.$controls.show()
		}) : S.el.addEventListener("x5videoenterfullscreen", function() {
			S.$controls.show()
		})), e(".test-skip").on("touchstart", function() {
			S.el.pause(), setTimeout(function() {
				S.el.currentTime = 0, S.el.play()
			}, 100)
		}), S.$continueBtn.on("touchstart", function() {
			S.el.play(), S.$controls.hide()
		}), r(), window.addEventListener("resize", function() {
			r()
		});
		var E = {};
		E.$ = e("#o2_end"), E.$stars = e("#o2_end .end-stars"), E.$sun = e("#o2_end .end-sun"), E.$joy = e("#o2_end .end-joy"), E.isEnter = !1, E.ori = null, E.x = 0, E.y = 0, E.xOri = 0, E.yOri = 0, E.xOffset = 0, E.yOffset = 0, E.enter = function() {
			i(), E.isEnter = !0, E.$.fadeIn(), E.ori ? E.ori.
			continue () : (E.ori = new l({
				onChange: function(e) {
					E.xOri = -e.leftSlant, E.yOri = e.relativeForwardSlant
				}
			}), E.ori.init())
		}, E.leave = function() {
			E.isEnter = !1, E.$.fadeOut(), E.ori && E.ori.pause()
		}, E.update = function() {
			if (E.isEnter) {
				if (Math.abs(E.xOri - E.x) > 10) {
					var e = .1 * (E.xOri - E.x);
					E.x += e
				}
				if (Math.abs(E.yOri - E.y) > 10) {
					var e = .1 * (E.yOri - E.y);
					E.y += e
				}
				E.$stars.css({
					transform: "translate3d(" + E.x + "px," + E.y + "px, 0)"
				}), E.$sun.css({
					transform: "translate3d(" + E.x / 2 + "px," + E.y / 2 + "px, 0)"
				}), E.$joy.css({
					transform: "translate3d(" + -E.x + "px," + -E.y + "px, 0)"
				})
			}
		}, o();
		var T = {};
		T.$ = e("#o2_share");
		var j = e("#o2_loading"),
			$ = (e("#o2_loading .loading-bg"), e("#o2_loading .loading-bg-ok")),
			C = e("#o2_loading .loading-moon"),
			P = e("#o2_loading .loading-ok-skip"),
			I = e("#o2_loading .loading-ok-skip-row"),
			O = e("#o2_loading .loading-ok-dialog"),
			D = e("#o2_loading .loading-ok-next");
		a() && I.show(), P.on("touchstart", function(n) {
			n.preventDefault(), n.stopPropagation(), e(".loading .loading-mask").fadeIn(function() {
				j.hide(), E.enter()
			})
		});
		var R = new c({
			resources: ["//m.360buyimg.com/babel/jfs/t3295/287/5601145573/20509/1a82e30b/5873b383Ncb110593.png", "//m.360buyimg.com/babel/jfs/t3208/24/5557693093/9220/631baf7f/5873b382N625565d8.png", "//m.360buyimg.com/babel/jfs/t3049/79/5563154406/3649/d832072/5873b383Ndac7f766.png", "//m.360buyimg.com/babel/jfs/t3205/23/5483543965/3441/ae794f87/5873b383N239a5124.png", "//m.360buyimg.com/babel/jfs/t4045/17/1373143062/1467/674b1d09/5873b382N9742eea8.png", "//m.360buyimg.com/babel/jfs/t3055/263/5542441253/5306/56740650/5873b382N954ed716.png", "//m.360buyimg.com/babel/jfs/t3952/3/1339635982/85508/28192bcf/5873b382N1c83ec7c.png", "//m.360buyimg.com/babel/jfs/t3970/340/1363188659/4467/809efd68/5873b383N6939f2f7.png", "//m.360buyimg.com/babel/jfs/t4000/333/1356708436/21487/a47bb897/5873b382N78e5ce29.png", "//m.360buyimg.com/babel/jfs/t3226/211/5484697794/50861/d248d9de/5873b382N34cc5631.png"],
			concurrency: 2,
			perMinTime: 50
		}),
			z = e(".loading-bg-number");
		R.addProgressListener(function(e, n, t) {
			console.log("loaded", e, n, e / n, t);
			var i = Math.floor(100 * e / n);
			z.text(i + "%")
		}), R.addCompletionListener(function() {
			s()
		}), R.start();
		var L = 800;
		e("body").on("touchstart", function(e) {
			e.preventDefault()
		}), e(".end-btn-gyg").on("touchstart", function() {
			window.JD_report("MShengdian_JD"), setTimeout(function() {
				window.location.href = "https://h5.m.jd.com/dev/qqm4hw8zMjZjspYuimTBaFt7QYk/index.html"
			}, L)
		}), e(".end-btn-qsd").on("touchstart", function() {
			window.JD_report("MShengdian_Main"), setTimeout(function() {
				window.location.href = "https://h5.m.jd.com/active/2kPKqytEaNqxKG1a5vvwbR48tVuZ/index.html"
			}, L)
		}), e(".end-btn-share").on("touchstart", function() {
			window.JD_report("MShengdian_Share"), T.$.show()
		}), T.$.on("touchstart", function() {
			T.$.hide()
		}), e(".end-btn-fpz").on("touchstart", function() {
			window.JD_report("MShengdian_Research"), setTimeout(function() {
				window.location.href = "http://answer.jd.com/answer/dSPdWXGMjcG/1513505.htm"
			}, L)
		}), e(".end-btn-replay").on("touchstart", function() {
			window.JD_report("MShengdian_Again"), E.leave(), S.start()
		})
	}).call(n, t(2))
}, function(e, n, t) {
	t(3)(t(4)), e.exports = window.$
}, function(e, n) {
	e.exports = function(e) {
		"undefined" != typeof execScript ? execScript(e) : eval.call(null, e)
	}
}, function(e, n) {
	e.exports = "/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */\n(function(global, factory) {\n  if (typeof define === 'function' && define.amd)\n    define(function() { return factory(global) })\n  else\n    factory(global)\n}(this, function(window) {\n  var Zepto = (function() {\n  var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,\n    document = window.document,\n    elementDisplay = {}, classCache = {},\n    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },\n    fragmentRE = /^\\s*<(\\w+|!)[^>]*>/,\n    singleTagRE = /^<(\\w+)\\s*\\/?>(?:<\\/\\1>|)$/,\n    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\\w:]+)[^>]*)\\/>/ig,\n    rootNodeRE = /^(?:body|html)$/i,\n    capitalRE = /([A-Z])/g,\n\n    // special attributes that should be get/set via method calls\n    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],\n\n    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],\n    table = document.createElement('table'),\n    tableRow = document.createElement('tr'),\n    containers = {\n      'tr': document.createElement('tbody'),\n      'tbody': table, 'thead': table, 'tfoot': table,\n      'td': tableRow, 'th': tableRow,\n      '*': document.createElement('div')\n    },\n    readyRE = /complete|loaded|interactive/,\n    simpleSelectorRE = /^[\\w-]*$/,\n    class2type = {},\n    toString = class2type.toString,\n    zepto = {},\n    camelize, uniq,\n    tempParent = document.createElement('div'),\n    propMap = {\n      'tabindex': 'tabIndex',\n      'readonly': 'readOnly',\n      'for': 'htmlFor',\n      'class': 'className',\n      'maxlength': 'maxLength',\n      'cellspacing': 'cellSpacing',\n      'cellpadding': 'cellPadding',\n      'rowspan': 'rowSpan',\n      'colspan': 'colSpan',\n      'usemap': 'useMap',\n      'frameborder': 'frameBorder',\n      'contenteditable': 'contentEditable'\n    },\n    isArray = Array.isArray ||\n      function(object){ return object instanceof Array }\n\n  zepto.matches = function(element, selector) {\n    if (!selector || !element || element.nodeType !== 1) return false\n    var matchesSelector = element.matches || element.webkitMatchesSelector ||\n                          element.mozMatchesSelector || element.oMatchesSelector ||\n                          element.matchesSelector\n    if (matchesSelector) return matchesSelector.call(element, selector)\n    // fall back to performing a selector:\n    var match, parent = element.parentNode, temp = !parent\n    if (temp) (parent = tempParent).appendChild(element)\n    match = ~zepto.qsa(parent, selector).indexOf(element)\n    temp && tempParent.removeChild(element)\n    return match\n  }\n\n  function type(obj) {\n    return obj == null ? String(obj) :\n      class2type[toString.call(obj)] || \"object\"\n  }\n\n  function isFunction(value) { return type(value) == \"function\" }\n  function isWindow(obj)     { return obj != null && obj == obj.window }\n  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }\n  function isObject(obj)     { return type(obj) == \"object\" }\n  function isPlainObject(obj) {\n    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype\n  }\n\n  function likeArray(obj) {\n    var length = !!obj && 'length' in obj && obj.length,\n      type = $.type(obj)\n\n    return 'function' != type && !isWindow(obj) && (\n      'array' == type || length === 0 ||\n        (typeof length == 'number' && length > 0 && (length - 1) in obj)\n    )\n  }\n\n  function compact(array) { return filter.call(array, function(item){ return item != null }) }\n  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }\n  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }\n  function dasherize(str) {\n    return str.replace(/::/g, '/')\n           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')\n           .replace(/([a-z\\d])([A-Z])/g, '$1_$2')\n           .replace(/_/g, '-')\n           .toLowerCase()\n  }\n  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }\n\n  function classRE(name) {\n    return name in classCache ?\n      classCache[name] : (classCache[name] = new RegExp('(^|\\\\s)' + name + '(\\\\s|$)'))\n  }\n\n  function maybeAddPx(name, value) {\n    return (typeof value == \"number\" && !cssNumber[dasherize(name)]) ? value + \"px\" : value\n  }\n\n  function defaultDisplay(nodeName) {\n    var element, display\n    if (!elementDisplay[nodeName]) {\n      element = document.createElement(nodeName)\n      document.body.appendChild(element)\n      display = getComputedStyle(element, '').getPropertyValue(\"display\")\n      element.parentNode.removeChild(element)\n      display == \"none\" && (display = \"block\")\n      elementDisplay[nodeName] = display\n    }\n    return elementDisplay[nodeName]\n  }\n\n  function children(element) {\n    return 'children' in element ?\n      slice.call(element.children) :\n      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })\n  }\n\n  function Z(dom, selector) {\n    var i, len = dom ? dom.length : 0\n    for (i = 0; i < len; i++) this[i] = dom[i]\n    this.length = len\n    this.selector = selector || ''\n  }\n\n  // `$.zepto.fragment` takes a html string and an optional tag name\n  // to generate DOM nodes from the given html string.\n  // The generated DOM nodes are returned as an array.\n  // This function can be overridden in plugins for example to make\n  // it compatible with browsers that don't support the DOM fully.\n  zepto.fragment = function(html, name, properties) {\n    var dom, nodes, container\n\n    // A special case optimization for a single tag\n    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))\n\n    if (!dom) {\n      if (html.replace) html = html.replace(tagExpanderRE, \"<$1></$2>\")\n      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1\n      if (!(name in containers)) name = '*'\n\n      container = containers[name]\n      container.innerHTML = '' + html\n      dom = $.each(slice.call(container.childNodes), function(){\n        container.removeChild(this)\n      })\n    }\n\n    if (isPlainObject(properties)) {\n      nodes = $(dom)\n      $.each(properties, function(key, value) {\n        if (methodAttributes.indexOf(key) > -1) nodes[key](value)\n        else nodes.attr(key, value)\n      })\n    }\n\n    return dom\n  }\n\n  // `$.zepto.Z` swaps out the prototype of the given `dom` array\n  // of nodes with `$.fn` and thus supplying all the Zepto functions\n  // to the array. This method can be overridden in plugins.\n  zepto.Z = function(dom, selector) {\n    return new Z(dom, selector)\n  }\n\n  // `$.zepto.isZ` should return `true` if the given object is a Zepto\n  // collection. This method can be overridden in plugins.\n  zepto.isZ = function(object) {\n    return object instanceof zepto.Z\n  }\n\n  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and\n  // takes a CSS selector and an optional context (and handles various\n  // special cases).\n  // This method can be overridden in plugins.\n  zepto.init = function(selector, context) {\n    var dom\n    // If nothing given, return an empty Zepto collection\n    if (!selector) return zepto.Z()\n    // Optimize for string selectors\n    else if (typeof selector == 'string') {\n      selector = selector.trim()\n      // If it's a html fragment, create nodes from it\n      // Note: In both Chrome 21 and Firefox 15, DOM error 12\n      // is thrown if the fragment doesn't begin with <\n      if (selector[0] == '<' && fragmentRE.test(selector))\n        dom = zepto.fragment(selector, RegExp.$1, context), selector = null\n      // If there's a context, create a collection on that context first, and select\n      // nodes from there\n      else if (context !== undefined) return $(context).find(selector)\n      // If it's a CSS selector, use it to select nodes.\n      else dom = zepto.qsa(document, selector)\n    }\n    // If a function is given, call it when the DOM is ready\n    else if (isFunction(selector)) return $(document).ready(selector)\n    // If a Zepto collection is given, just return it\n    else if (zepto.isZ(selector)) return selector\n    else {\n      // normalize array if an array of nodes is given\n      if (isArray(selector)) dom = compact(selector)\n      // Wrap DOM nodes.\n      else if (isObject(selector))\n        dom = [selector], selector = null\n      // If it's a html fragment, create nodes from it\n      else if (fragmentRE.test(selector))\n        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null\n      // If there's a context, create a collection on that context first, and select\n      // nodes from there\n      else if (context !== undefined) return $(context).find(selector)\n      // And last but no least, if it's a CSS selector, use it to select nodes.\n      else dom = zepto.qsa(document, selector)\n    }\n    // create a new Zepto collection from the nodes found\n    return zepto.Z(dom, selector)\n  }\n\n  // `$` will be the base `Zepto` object. When calling this\n  // function just call `$.zepto.init, which makes the implementation\n  // details of selecting nodes and creating Zepto collections\n  // patchable in plugins.\n  $ = function(selector, context){\n    return zepto.init(selector, context)\n  }\n\n  function extend(target, source, deep) {\n    for (key in source)\n      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {\n        if (isPlainObject(source[key]) && !isPlainObject(target[key]))\n          target[key] = {}\n        if (isArray(source[key]) && !isArray(target[key]))\n          target[key] = []\n        extend(target[key], source[key], deep)\n      }\n      else if (source[key] !== undefined) target[key] = source[key]\n  }\n\n  // Copy all but undefined properties from one or more\n  // objects to the `target` object.\n  $.extend = function(target){\n    var deep, args = slice.call(arguments, 1)\n    if (typeof target == 'boolean') {\n      deep = target\n      target = args.shift()\n    }\n    args.forEach(function(arg){ extend(target, arg, deep) })\n    return target\n  }\n\n  // `$.zepto.qsa` is Zepto's CSS selector implementation which\n  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.\n  // This method can be overridden in plugins.\n  zepto.qsa = function(element, selector){\n    var found,\n        maybeID = selector[0] == '#',\n        maybeClass = !maybeID && selector[0] == '.',\n        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked\n        isSimple = simpleSelectorRE.test(nameOnly)\n    return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById\n      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :\n      (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :\n      slice.call(\n        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName\n          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class\n          element.getElementsByTagName(selector) : // Or a tag\n          element.querySelectorAll(selector) // Or it's not simple, and we need to query all\n      )\n  }\n\n  function filtered(nodes, selector) {\n    return selector == null ? $(nodes) : $(nodes).filter(selector)\n  }\n\n  $.contains = document.documentElement.contains ?\n    function(parent, node) {\n      return parent !== node && parent.contains(node)\n    } :\n    function(parent, node) {\n      while (node && (node = node.parentNode))\n        if (node === parent) return true\n      return false\n    }\n\n  function funcArg(context, arg, idx, payload) {\n    return isFunction(arg) ? arg.call(context, idx, payload) : arg\n  }\n\n  function setAttribute(node, name, value) {\n    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)\n  }\n\n  // access className property while respecting SVGAnimatedString\n  function className(node, value){\n    var klass = node.className || '',\n        svg   = klass && klass.baseVal !== undefined\n\n    if (value === undefined) return svg ? klass.baseVal : klass\n    svg ? (klass.baseVal = value) : (node.className = value)\n  }\n\n  // \"true\"  => true\n  // \"false\" => false\n  // \"null\"  => null\n  // \"42\"    => 42\n  // \"42.5\"  => 42.5\n  // \"08\"    => \"08\"\n  // JSON    => parse if valid\n  // String  => self\n  function deserializeValue(value) {\n    try {\n      return value ?\n        value == \"true\" ||\n        ( value == \"false\" ? false :\n          value == \"null\" ? null :\n          +value + \"\" == value ? +value :\n          /^[\\[\\{]/.test(value) ? $.parseJSON(value) :\n          value )\n        : value\n    } catch(e) {\n      return value\n    }\n  }\n\n  $.type = type\n  $.isFunction = isFunction\n  $.isWindow = isWindow\n  $.isArray = isArray\n  $.isPlainObject = isPlainObject\n\n  $.isEmptyObject = function(obj) {\n    var name\n    for (name in obj) return false\n    return true\n  }\n\n  $.isNumeric = function(val) {\n    var num = Number(val), type = typeof val\n    return val != null && type != 'boolean' &&\n      (type != 'string' || val.length) &&\n      !isNaN(num) && isFinite(num) || false\n  }\n\n  $.inArray = function(elem, array, i){\n    return emptyArray.indexOf.call(array, elem, i)\n  }\n\n  $.camelCase = camelize\n  $.trim = function(str) {\n    return str == null ? \"\" : String.prototype.trim.call(str)\n  }\n\n  // plugin compatibility\n  $.uuid = 0\n  $.support = { }\n  $.expr = { }\n  $.noop = function() {}\n\n  $.map = function(elements, callback){\n    var value, values = [], i, key\n    if (likeArray(elements))\n      for (i = 0; i < elements.length; i++) {\n        value = callback(elements[i], i)\n        if (value != null) values.push(value)\n      }\n    else\n      for (key in elements) {\n        value = callback(elements[key], key)\n        if (value != null) values.push(value)\n      }\n    return flatten(values)\n  }\n\n  $.each = function(elements, callback){\n    var i, key\n    if (likeArray(elements)) {\n      for (i = 0; i < elements.length; i++)\n        if (callback.call(elements[i], i, elements[i]) === false) return elements\n    } else {\n      for (key in elements)\n        if (callback.call(elements[key], key, elements[key]) === false) return elements\n    }\n\n    return elements\n  }\n\n  $.grep = function(elements, callback){\n    return filter.call(elements, callback)\n  }\n\n  if (window.JSON) $.parseJSON = JSON.parse\n\n  // Populate the class2type map\n  $.each(\"Boolean Number String Function Array Date RegExp Object Error\".split(\" \"), function(i, name) {\n    class2type[ \"[object \" + name + \"]\" ] = name.toLowerCase()\n  })\n\n  // Define methods that will be available on all\n  // Zepto collections\n  $.fn = {\n    constructor: zepto.Z,\n    length: 0,\n\n    // Because a collection acts like an array\n    // copy over these useful array functions.\n    forEach: emptyArray.forEach,\n    reduce: emptyArray.reduce,\n    push: emptyArray.push,\n    sort: emptyArray.sort,\n    splice: emptyArray.splice,\n    indexOf: emptyArray.indexOf,\n    concat: function(){\n      var i, value, args = []\n      for (i = 0; i < arguments.length; i++) {\n        value = arguments[i]\n        args[i] = zepto.isZ(value) ? value.toArray() : value\n      }\n      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)\n    },\n\n    // `map` and `slice` in the jQuery API work differently\n    // from their array counterparts\n    map: function(fn){\n      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))\n    },\n    slice: function(){\n      return $(slice.apply(this, arguments))\n    },\n\n    ready: function(callback){\n      // need to check if document.body exists for IE as that browser reports\n      // document ready when it hasn't yet created the body element\n      if (readyRE.test(document.readyState) && document.body) callback($)\n      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)\n      return this\n    },\n    get: function(idx){\n      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]\n    },\n    toArray: function(){ return this.get() },\n    size: function(){\n      return this.length\n    },\n    remove: function(){\n      return this.each(function(){\n        if (this.parentNode != null)\n          this.parentNode.removeChild(this)\n      })\n    },\n    each: function(callback){\n      emptyArray.every.call(this, function(el, idx){\n        return callback.call(el, idx, el) !== false\n      })\n      return this\n    },\n    filter: function(selector){\n      if (isFunction(selector)) return this.not(this.not(selector))\n      return $(filter.call(this, function(element){\n        return zepto.matches(element, selector)\n      }))\n    },\n    add: function(selector,context){\n      return $(uniq(this.concat($(selector,context))))\n    },\n    is: function(selector){\n      return this.length > 0 && zepto.matches(this[0], selector)\n    },\n    not: function(selector){\n      var nodes=[]\n      if (isFunction(selector) && selector.call !== undefined)\n        this.each(function(idx){\n          if (!selector.call(this,idx)) nodes.push(this)\n        })\n      else {\n        var excludes = typeof selector == 'string' ? this.filter(selector) :\n          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)\n        this.forEach(function(el){\n          if (excludes.indexOf(el) < 0) nodes.push(el)\n        })\n      }\n      return $(nodes)\n    },\n    has: function(selector){\n      return this.filter(function(){\n        return isObject(selector) ?\n          $.contains(this, selector) :\n          $(this).find(selector).size()\n      })\n    },\n    eq: function(idx){\n      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)\n    },\n    first: function(){\n      var el = this[0]\n      return el && !isObject(el) ? el : $(el)\n    },\n    last: function(){\n      var el = this[this.length - 1]\n      return el && !isObject(el) ? el : $(el)\n    },\n    find: function(selector){\n      var result, $this = this\n      if (!selector) result = $()\n      else if (typeof selector == 'object')\n        result = $(selector).filter(function(){\n          var node = this\n          return emptyArray.some.call($this, function(parent){\n            return $.contains(parent, node)\n          })\n        })\n      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))\n      else result = this.map(function(){ return zepto.qsa(this, selector) })\n      return result\n    },\n    closest: function(selector, context){\n      var nodes = [], collection = typeof selector == 'object' && $(selector)\n      this.each(function(_, node){\n        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))\n          node = node !== context && !isDocument(node) && node.parentNode\n        if (node && nodes.indexOf(node) < 0) nodes.push(node)\n      })\n      return $(nodes)\n    },\n    parents: function(selector){\n      var ancestors = [], nodes = this\n      while (nodes.length > 0)\n        nodes = $.map(nodes, function(node){\n          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {\n            ancestors.push(node)\n            return node\n          }\n        })\n      return filtered(ancestors, selector)\n    },\n    parent: function(selector){\n      return filtered(uniq(this.pluck('parentNode')), selector)\n    },\n    children: function(selector){\n      return filtered(this.map(function(){ return children(this) }), selector)\n    },\n    contents: function() {\n      return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })\n    },\n    siblings: function(selector){\n      return filtered(this.map(function(i, el){\n        return filter.call(children(el.parentNode), function(child){ return child!==el })\n      }), selector)\n    },\n    empty: function(){\n      return this.each(function(){ this.innerHTML = '' })\n    },\n    // `pluck` is borrowed from Prototype.js\n    pluck: function(property){\n      return $.map(this, function(el){ return el[property] })\n    },\n    show: function(){\n      return this.each(function(){\n        this.style.display == \"none\" && (this.style.display = '')\n        if (getComputedStyle(this, '').getPropertyValue(\"display\") == \"none\")\n          this.style.display = defaultDisplay(this.nodeName)\n      })\n    },\n    replaceWith: function(newContent){\n      return this.before(newContent).remove()\n    },\n    wrap: function(structure){\n      var func = isFunction(structure)\n      if (this[0] && !func)\n        var dom   = $(structure).get(0),\n            clone = dom.parentNode || this.length > 1\n\n      return this.each(function(index){\n        $(this).wrapAll(\n          func ? structure.call(this, index) :\n            clone ? dom.cloneNode(true) : dom\n        )\n      })\n    },\n    wrapAll: function(structure){\n      if (this[0]) {\n        $(this[0]).before(structure = $(structure))\n        var children\n        // drill down to the inmost element\n        while ((children = structure.children()).length) structure = children.first()\n        $(structure).append(this)\n      }\n      return this\n    },\n    wrapInner: function(structure){\n      var func = isFunction(structure)\n      return this.each(function(index){\n        var self = $(this), contents = self.contents(),\n            dom  = func ? structure.call(this, index) : structure\n        contents.length ? contents.wrapAll(dom) : self.append(dom)\n      })\n    },\n    unwrap: function(){\n      this.parent().each(function(){\n        $(this).replaceWith($(this).children())\n      })\n      return this\n    },\n    clone: function(){\n      return this.map(function(){ return this.cloneNode(true) })\n    },\n    hide: function(){\n      return this.css(\"display\", \"none\")\n    },\n    toggle: function(setting){\n      return this.each(function(){\n        var el = $(this)\n        ;(setting === undefined ? el.css(\"display\") == \"none\" : setting) ? el.show() : el.hide()\n      })\n    },\n    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },\n    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },\n    html: function(html){\n      return 0 in arguments ?\n        this.each(function(idx){\n          var originHtml = this.innerHTML\n          $(this).empty().append( funcArg(this, html, idx, originHtml) )\n        }) :\n        (0 in this ? this[0].innerHTML : null)\n    },\n    text: function(text){\n      return 0 in arguments ?\n        this.each(function(idx){\n          var newText = funcArg(this, text, idx, this.textContent)\n          this.textContent = newText == null ? '' : ''+newText\n        }) :\n        (0 in this ? this.pluck('textContent').join(\"\") : null)\n    },\n    attr: function(name, value){\n      var result\n      return (typeof name == 'string' && !(1 in arguments)) ?\n        (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined) :\n        this.each(function(idx){\n          if (this.nodeType !== 1) return\n          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])\n          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))\n        })\n    },\n    removeAttr: function(name){\n      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){\n        setAttribute(this, attribute)\n      }, this)})\n    },\n    prop: function(name, value){\n      name = propMap[name] || name\n      return (1 in arguments) ?\n        this.each(function(idx){\n          this[name] = funcArg(this, value, idx, this[name])\n        }) :\n        (this[0] && this[0][name])\n    },\n    removeProp: function(name){\n      name = propMap[name] || name\n      return this.each(function(){ delete this[name] })\n    },\n    data: function(name, value){\n      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()\n\n      var data = (1 in arguments) ?\n        this.attr(attrName, value) :\n        this.attr(attrName)\n\n      return data !== null ? deserializeValue(data) : undefined\n    },\n    val: function(value){\n      if (0 in arguments) {\n        if (value == null) value = \"\"\n        return this.each(function(idx){\n          this.value = funcArg(this, value, idx, this.value)\n        })\n      } else {\n        return this[0] && (this[0].multiple ?\n           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :\n           this[0].value)\n      }\n    },\n    offset: function(coordinates){\n      if (coordinates) return this.each(function(index){\n        var $this = $(this),\n            coords = funcArg(this, coordinates, index, $this.offset()),\n            parentOffset = $this.offsetParent().offset(),\n            props = {\n              top:  coords.top  - parentOffset.top,\n              left: coords.left - parentOffset.left\n            }\n\n        if ($this.css('position') == 'static') props['position'] = 'relative'\n        $this.css(props)\n      })\n      if (!this.length) return null\n      if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0]))\n        return {top: 0, left: 0}\n      var obj = this[0].getBoundingClientRect()\n      return {\n        left: obj.left + window.pageXOffset,\n        top: obj.top + window.pageYOffset,\n        width: Math.round(obj.width),\n        height: Math.round(obj.height)\n      }\n    },\n    css: function(property, value){\n      if (arguments.length < 2) {\n        var element = this[0]\n        if (typeof property == 'string') {\n          if (!element) return\n          return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property)\n        } else if (isArray(property)) {\n          if (!element) return\n          var props = {}\n          var computedStyle = getComputedStyle(element, '')\n          $.each(property, function(_, prop){\n            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))\n          })\n          return props\n        }\n      }\n\n      var css = ''\n      if (type(property) == 'string') {\n        if (!value && value !== 0)\n          this.each(function(){ this.style.removeProperty(dasherize(property)) })\n        else\n          css = dasherize(property) + \":\" + maybeAddPx(property, value)\n      } else {\n        for (key in property)\n          if (!property[key] && property[key] !== 0)\n            this.each(function(){ this.style.removeProperty(dasherize(key)) })\n          else\n            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'\n      }\n\n      return this.each(function(){ this.style.cssText += ';' + css })\n    },\n    index: function(element){\n      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])\n    },\n    hasClass: function(name){\n      if (!name) return false\n      return emptyArray.some.call(this, function(el){\n        return this.test(className(el))\n      }, classRE(name))\n    },\n    addClass: function(name){\n      if (!name) return this\n      return this.each(function(idx){\n        if (!('className' in this)) return\n        classList = []\n        var cls = className(this), newName = funcArg(this, name, idx, cls)\n        newName.split(/\\s+/g).forEach(function(klass){\n          if (!$(this).hasClass(klass)) classList.push(klass)\n        }, this)\n        classList.length && className(this, cls + (cls ? \" \" : \"\") + classList.join(\" \"))\n      })\n    },\n    removeClass: function(name){\n      return this.each(function(idx){\n        if (!('className' in this)) return\n        if (name === undefined) return className(this, '')\n        classList = className(this)\n        funcArg(this, name, idx, classList).split(/\\s+/g).forEach(function(klass){\n          classList = classList.replace(classRE(klass), \" \")\n        })\n        className(this, classList.trim())\n      })\n    },\n    toggleClass: function(name, when){\n      if (!name) return this\n      return this.each(function(idx){\n        var $this = $(this), names = funcArg(this, name, idx, className(this))\n        names.split(/\\s+/g).forEach(function(klass){\n          (when === undefined ? !$this.hasClass(klass) : when) ?\n            $this.addClass(klass) : $this.removeClass(klass)\n        })\n      })\n    },\n    scrollTop: function(value){\n      if (!this.length) return\n      var hasScrollTop = 'scrollTop' in this[0]\n      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset\n      return this.each(hasScrollTop ?\n        function(){ this.scrollTop = value } :\n        function(){ this.scrollTo(this.scrollX, value) })\n    },\n    scrollLeft: function(value){\n      if (!this.length) return\n      var hasScrollLeft = 'scrollLeft' in this[0]\n      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset\n      return this.each(hasScrollLeft ?\n        function(){ this.scrollLeft = value } :\n        function(){ this.scrollTo(value, this.scrollY) })\n    },\n    position: function() {\n      if (!this.length) return\n\n      var elem = this[0],\n        // Get *real* offsetParent\n        offsetParent = this.offsetParent(),\n        // Get correct offsets\n        offset       = this.offset(),\n        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()\n\n      // Subtract element margins\n      // note: when an element has margin: auto the offsetLeft and marginLeft\n      // are the same in Safari causing offset.left to incorrectly be 0\n      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0\n      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0\n\n      // Add offsetParent borders\n      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0\n      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0\n\n      // Subtract the two offsets\n      return {\n        top:  offset.top  - parentOffset.top,\n        left: offset.left - parentOffset.left\n      }\n    },\n    offsetParent: function() {\n      return this.map(function(){\n        var parent = this.offsetParent || document.body\n        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css(\"position\") == \"static\")\n          parent = parent.offsetParent\n        return parent\n      })\n    }\n  }\n\n  // for now\n  $.fn.detach = $.fn.remove\n\n  // Generate the `width` and `height` functions\n  ;['width', 'height'].forEach(function(dimension){\n    var dimensionProperty =\n      dimension.replace(/./, function(m){ return m[0].toUpperCase() })\n\n    $.fn[dimension] = function(value){\n      var offset, el = this[0]\n      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :\n        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :\n        (offset = this.offset()) && offset[dimension]\n      else return this.each(function(idx){\n        el = $(this)\n        el.css(dimension, funcArg(this, value, idx, el[dimension]()))\n      })\n    }\n  })\n\n  function traverseNode(node, fun) {\n    fun(node)\n    for (var i = 0, len = node.childNodes.length; i < len; i++)\n      traverseNode(node.childNodes[i], fun)\n  }\n\n  // Generate the `after`, `prepend`, `before`, `append`,\n  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.\n  adjacencyOperators.forEach(function(operator, operatorIndex) {\n    var inside = operatorIndex % 2 //=> prepend, append\n\n    $.fn[operator] = function(){\n      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings\n      var argType, nodes = $.map(arguments, function(arg) {\n            var arr = []\n            argType = type(arg)\n            if (argType == \"array\") {\n              arg.forEach(function(el) {\n                if (el.nodeType !== undefined) return arr.push(el)\n                else if ($.zepto.isZ(el)) return arr = arr.concat(el.get())\n                arr = arr.concat(zepto.fragment(el))\n              })\n              return arr\n            }\n            return argType == \"object\" || arg == null ?\n              arg : zepto.fragment(arg)\n          }),\n          parent, copyByClone = this.length > 1\n      if (nodes.length < 1) return this\n\n      return this.each(function(_, target){\n        parent = inside ? target : target.parentNode\n\n        // convert all methods to a \"before\" operation\n        target = operatorIndex == 0 ? target.nextSibling :\n                 operatorIndex == 1 ? target.firstChild :\n                 operatorIndex == 2 ? target :\n                 null\n\n        var parentInDocument = $.contains(document.documentElement, parent)\n\n        nodes.forEach(function(node){\n          if (copyByClone) node = node.cloneNode(true)\n          else if (!parent) return $(node).remove()\n\n          parent.insertBefore(node, target)\n          if (parentInDocument) traverseNode(node, function(el){\n            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&\n               (!el.type || el.type === 'text/javascript') && !el.src){\n              var target = el.ownerDocument ? el.ownerDocument.defaultView : window\n              target['eval'].call(target, el.innerHTML)\n            }\n          })\n        })\n      })\n    }\n\n    // after    => insertAfter\n    // prepend  => prependTo\n    // before   => insertBefore\n    // append   => appendTo\n    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){\n      $(html)[operator](this)\n      return this\n    }\n  })\n\n  zepto.Z.prototype = Z.prototype = $.fn\n\n  // Export internal API functions in the `$.zepto` namespace\n  zepto.uniq = uniq\n  zepto.deserializeValue = deserializeValue\n  $.zepto = zepto\n\n  return $\n})()\n\nwindow.Zepto = Zepto\nwindow.$ === undefined && (window.$ = Zepto)\n\n;(function($){\n  var _zid = 1, undefined,\n      slice = Array.prototype.slice,\n      isFunction = $.isFunction,\n      isString = function(obj){ return typeof obj == 'string' },\n      handlers = {},\n      specialEvents={},\n      focusinSupported = 'onfocusin' in window,\n      focus = { focus: 'focusin', blur: 'focusout' },\n      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }\n\n  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'\n\n  function zid(element) {\n    return element._zid || (element._zid = _zid++)\n  }\n  function findHandlers(element, event, fn, selector) {\n    event = parse(event)\n    if (event.ns) var matcher = matcherFor(event.ns)\n    return (handlers[zid(element)] || []).filter(function(handler) {\n      return handler\n        && (!event.e  || handler.e == event.e)\n        && (!event.ns || matcher.test(handler.ns))\n        && (!fn       || zid(handler.fn) === zid(fn))\n        && (!selector || handler.sel == selector)\n    })\n  }\n  function parse(event) {\n    var parts = ('' + event).split('.')\n    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}\n  }\n  function matcherFor(ns) {\n    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')\n  }\n\n  function eventCapture(handler, captureSetting) {\n    return handler.del &&\n      (!focusinSupported && (handler.e in focus)) ||\n      !!captureSetting\n  }\n\n  function realEvent(type) {\n    return hover[type] || (focusinSupported && focus[type]) || type\n  }\n\n  function add(element, events, fn, data, selector, delegator, capture){\n    var id = zid(element), set = (handlers[id] || (handlers[id] = []))\n    events.split(/\\s/).forEach(function(event){\n      if (event == 'ready') return $(document).ready(fn)\n      var handler   = parse(event)\n      handler.fn    = fn\n      handler.sel   = selector\n      // emulate mouseenter, mouseleave\n      if (handler.e in hover) fn = function(e){\n        var related = e.relatedTarget\n        if (!related || (related !== this && !$.contains(this, related)))\n          return handler.fn.apply(this, arguments)\n      }\n      handler.del   = delegator\n      var callback  = delegator || fn\n      handler.proxy = function(e){\n        e = compatible(e)\n        if (e.isImmediatePropagationStopped()) return\n        e.data = data\n        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))\n        if (result === false) e.preventDefault(), e.stopPropagation()\n        return result\n      }\n      handler.i = set.length\n      set.push(handler)\n      if ('addEventListener' in element)\n        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))\n    })\n  }\n  function remove(element, events, fn, selector, capture){\n    var id = zid(element)\n    ;(events || '').split(/\\s/).forEach(function(event){\n      findHandlers(element, event, fn, selector).forEach(function(handler){\n        delete handlers[id][handler.i]\n      if ('removeEventListener' in element)\n        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))\n      })\n    })\n  }\n\n  $.event = { add: add, remove: remove }\n\n  $.proxy = function(fn, context) {\n    var args = (2 in arguments) && slice.call(arguments, 2)\n    if (isFunction(fn)) {\n      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }\n      proxyFn._zid = zid(fn)\n      return proxyFn\n    } else if (isString(context)) {\n      if (args) {\n        args.unshift(fn[context], fn)\n        return $.proxy.apply(null, args)\n      } else {\n        return $.proxy(fn[context], fn)\n      }\n    } else {\n      throw new TypeError(\"expected function\")\n    }\n  }\n\n  $.fn.bind = function(event, data, callback){\n    return this.on(event, data, callback)\n  }\n  $.fn.unbind = function(event, callback){\n    return this.off(event, callback)\n  }\n  $.fn.one = function(event, selector, data, callback){\n    return this.on(event, selector, data, callback, 1)\n  }\n\n  var returnTrue = function(){return true},\n      returnFalse = function(){return false},\n      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,\n      eventMethods = {\n        preventDefault: 'isDefaultPrevented',\n        stopImmediatePropagation: 'isImmediatePropagationStopped',\n        stopPropagation: 'isPropagationStopped'\n      }\n\n  function compatible(event, source) {\n    if (source || !event.isDefaultPrevented) {\n      source || (source = event)\n\n      $.each(eventMethods, function(name, predicate) {\n        var sourceMethod = source[name]\n        event[name] = function(){\n          this[predicate] = returnTrue\n          return sourceMethod && sourceMethod.apply(source, arguments)\n        }\n        event[predicate] = returnFalse\n      })\n\n      event.timeStamp || (event.timeStamp = Date.now())\n\n      if (source.defaultPrevented !== undefined ? source.defaultPrevented :\n          'returnValue' in source ? source.returnValue === false :\n          source.getPreventDefault && source.getPreventDefault())\n        event.isDefaultPrevented = returnTrue\n    }\n    return event\n  }\n\n  function createProxy(event) {\n    var key, proxy = { originalEvent: event }\n    for (key in event)\n      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]\n\n    return compatible(proxy, event)\n  }\n\n  $.fn.delegate = function(selector, event, callback){\n    return this.on(event, selector, callback)\n  }\n  $.fn.undelegate = function(selector, event, callback){\n    return this.off(event, selector, callback)\n  }\n\n  $.fn.live = function(event, callback){\n    $(document.body).delegate(this.selector, event, callback)\n    return this\n  }\n  $.fn.die = function(event, callback){\n    $(document.body).undelegate(this.selector, event, callback)\n    return this\n  }\n\n  $.fn.on = function(event, selector, data, callback, one){\n    var autoRemove, delegator, $this = this\n    if (event && !isString(event)) {\n      $.each(event, function(type, fn){\n        $this.on(type, selector, data, fn, one)\n      })\n      return $this\n    }\n\n    if (!isString(selector) && !isFunction(callback) && callback !== false)\n      callback = data, data = selector, selector = undefined\n    if (callback === undefined || data === false)\n      callback = data, data = undefined\n\n    if (callback === false) callback = returnFalse\n\n    return $this.each(function(_, element){\n      if (one) autoRemove = function(e){\n        remove(element, e.type, callback)\n        return callback.apply(this, arguments)\n      }\n\n      if (selector) delegator = function(e){\n        var evt, match = $(e.target).closest(selector, element).get(0)\n        if (match && match !== element) {\n          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})\n          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))\n        }\n      }\n\n      add(element, event, callback, data, selector, delegator || autoRemove)\n    })\n  }\n  $.fn.off = function(event, selector, callback){\n    var $this = this\n    if (event && !isString(event)) {\n      $.each(event, function(type, fn){\n        $this.off(type, selector, fn)\n      })\n      return $this\n    }\n\n    if (!isString(selector) && !isFunction(callback) && callback !== false)\n      callback = selector, selector = undefined\n\n    if (callback === false) callback = returnFalse\n\n    return $this.each(function(){\n      remove(this, event, callback, selector)\n    })\n  }\n\n  $.fn.trigger = function(event, args){\n    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)\n    event._args = args\n    return this.each(function(){\n      // handle focus(), blur() by calling them directly\n      if (event.type in focus && typeof this[event.type] == \"function\") this[event.type]()\n      // items in the collection might not be DOM elements\n      else if ('dispatchEvent' in this) this.dispatchEvent(event)\n      else $(this).triggerHandler(event, args)\n    })\n  }\n\n  // triggers event handlers on current element just as if an event occurred,\n  // doesn't trigger an actual event, doesn't bubble\n  $.fn.triggerHandler = function(event, args){\n    var e, result\n    this.each(function(i, element){\n      e = createProxy(isString(event) ? $.Event(event) : event)\n      e._args = args\n      e.target = element\n      $.each(findHandlers(element, event.type || event), function(i, handler){\n        result = handler.proxy(e)\n        if (e.isImmediatePropagationStopped()) return false\n      })\n    })\n    return result\n  }\n\n  // shortcut methods for `.bind(event, fn)` for each event type\n  ;('focusin focusout focus blur load resize scroll unload click dblclick '+\n  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+\n  'change select keydown keypress keyup error').split(' ').forEach(function(event) {\n    $.fn[event] = function(callback) {\n      return (0 in arguments) ?\n        this.bind(event, callback) :\n        this.trigger(event)\n    }\n  })\n\n  $.Event = function(type, props) {\n    if (!isString(type)) props = type, type = props.type\n    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true\n    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])\n    event.initEvent(type, bubbles, true)\n    return compatible(event)\n  }\n\n})(Zepto)\n\n;(function($){\n  var jsonpID = +new Date(),\n      document = window.document,\n      key,\n      name,\n      rscript = /<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi,\n      scriptTypeRE = /^(?:text|application)\\/javascript/i,\n      xmlTypeRE = /^(?:text|application)\\/xml/i,\n      jsonType = 'application/json',\n      htmlType = 'text/html',\n      blankRE = /^\\s*$/,\n      originAnchor = document.createElement('a')\n\n  originAnchor.href = window.location.href\n\n  // trigger a custom event and return false if it was cancelled\n  function triggerAndReturn(context, eventName, data) {\n    var event = $.Event(eventName)\n    $(context).trigger(event, data)\n    return !event.isDefaultPrevented()\n  }\n\n  // trigger an Ajax \"global\" event\n  function triggerGlobal(settings, context, eventName, data) {\n    if (settings.global) return triggerAndReturn(context || document, eventName, data)\n  }\n\n  // Number of active Ajax requests\n  $.active = 0\n\n  function ajaxStart(settings) {\n    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')\n  }\n  function ajaxStop(settings) {\n    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')\n  }\n\n  // triggers an extra global event \"ajaxBeforeSend\" that's like \"ajaxSend\" but cancelable\n  function ajaxBeforeSend(xhr, settings) {\n    var context = settings.context\n    if (settings.beforeSend.call(context, xhr, settings) === false ||\n        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)\n      return false\n\n    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])\n  }\n  function ajaxSuccess(data, xhr, settings, deferred) {\n    var context = settings.context, status = 'success'\n    settings.success.call(context, data, status, xhr)\n    if (deferred) deferred.resolveWith(context, [data, status, xhr])\n    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])\n    ajaxComplete(status, xhr, settings)\n  }\n  // type: \"timeout\", \"error\", \"abort\", \"parsererror\"\n  function ajaxError(error, type, xhr, settings, deferred) {\n    var context = settings.context\n    settings.error.call(context, xhr, type, error)\n    if (deferred) deferred.rejectWith(context, [xhr, type, error])\n    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])\n    ajaxComplete(type, xhr, settings)\n  }\n  // status: \"success\", \"notmodified\", \"error\", \"timeout\", \"abort\", \"parsererror\"\n  function ajaxComplete(status, xhr, settings) {\n    var context = settings.context\n    settings.complete.call(context, xhr, status)\n    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])\n    ajaxStop(settings)\n  }\n\n  function ajaxDataFilter(data, type, settings) {\n    if (settings.dataFilter == empty) return data\n    var context = settings.context\n    return settings.dataFilter.call(context, data, type)\n  }\n\n  // Empty function, used as default callback\n  function empty() {}\n\n  $.ajaxJSONP = function(options, deferred){\n    if (!('type' in options)) return $.ajax(options)\n\n    var _callbackName = options.jsonpCallback,\n      callbackName = ($.isFunction(_callbackName) ?\n        _callbackName() : _callbackName) || ('Zepto' + (jsonpID++)),\n      script = document.createElement('script'),\n      originalCallback = window[callbackName],\n      responseData,\n      abort = function(errorType) {\n        $(script).triggerHandler('error', errorType || 'abort')\n      },\n      xhr = { abort: abort }, abortTimeout\n\n    if (deferred) deferred.promise(xhr)\n\n    $(script).on('load error', function(e, errorType){\n      clearTimeout(abortTimeout)\n      $(script).off().remove()\n\n      if (e.type == 'error' || !responseData) {\n        ajaxError(null, errorType || 'error', xhr, options, deferred)\n      } else {\n        ajaxSuccess(responseData[0], xhr, options, deferred)\n      }\n\n      window[callbackName] = originalCallback\n      if (responseData && $.isFunction(originalCallback))\n        originalCallback(responseData[0])\n\n      originalCallback = responseData = undefined\n    })\n\n    if (ajaxBeforeSend(xhr, options) === false) {\n      abort('abort')\n      return xhr\n    }\n\n    window[callbackName] = function(){\n      responseData = arguments\n    }\n\n    script.src = options.url.replace(/\\?(.+)=\\?/, '?$1=' + callbackName)\n    document.head.appendChild(script)\n\n    if (options.timeout > 0) abortTimeout = setTimeout(function(){\n      abort('timeout')\n    }, options.timeout)\n\n    return xhr\n  }\n\n  $.ajaxSettings = {\n    // Default type of request\n    type: 'GET',\n    // Callback that is executed before request\n    beforeSend: empty,\n    // Callback that is executed if the request succeeds\n    success: empty,\n    // Callback that is executed the the server drops error\n    error: empty,\n    // Callback that is executed on request complete (both: error and success)\n    complete: empty,\n    // The context for the callbacks\n    context: null,\n    // Whether to trigger \"global\" Ajax events\n    global: true,\n    // Transport\n    xhr: function () {\n      return new window.XMLHttpRequest()\n    },\n    // MIME types mapping\n    // IIS returns Javascript as \"application/x-javascript\"\n    accepts: {\n      script: 'text/javascript, application/javascript, application/x-javascript',\n      json:   jsonType,\n      xml:    'application/xml, text/xml',\n      html:   htmlType,\n      text:   'text/plain'\n    },\n    // Whether the request is to another domain\n    crossDomain: false,\n    // Default timeout\n    timeout: 0,\n    // Whether data should be serialized to string\n    processData: true,\n    // Whether the browser should be allowed to cache GET responses\n    cache: true,\n    //Used to handle the raw response data of XMLHttpRequest.\n    //This is a pre-filtering function to sanitize the response.\n    //The sanitized response should be returned\n    dataFilter: empty\n  }\n\n  function mimeToDataType(mime) {\n    if (mime) mime = mime.split(';', 2)[0]\n    return mime && ( mime == htmlType ? 'html' :\n      mime == jsonType ? 'json' :\n      scriptTypeRE.test(mime) ? 'script' :\n      xmlTypeRE.test(mime) && 'xml' ) || 'text'\n  }\n\n  function appendQuery(url, query) {\n    if (query == '') return url\n    return (url + '&' + query).replace(/[&?]{1,2}/, '?')\n  }\n\n  // serialize payload and append it to the URL for GET requests\n  function serializeData(options) {\n    if (options.processData && options.data && $.type(options.data) != \"string\")\n      options.data = $.param(options.data, options.traditional)\n    if (options.data && (!options.type || options.type.toUpperCase() == 'GET' || 'jsonp' == options.dataType))\n      options.url = appendQuery(options.url, options.data), options.data = undefined\n  }\n\n  $.ajax = function(options){\n    var settings = $.extend({}, options || {}),\n        deferred = $.Deferred && $.Deferred(),\n        urlAnchor, hashIndex\n    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]\n\n    ajaxStart(settings)\n\n    if (!settings.crossDomain) {\n      urlAnchor = document.createElement('a')\n      urlAnchor.href = settings.url\n      // cleans up URL for .href (IE only), see https://github.com/madrobby/zepto/pull/1049\n      urlAnchor.href = urlAnchor.href\n      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)\n    }\n\n    if (!settings.url) settings.url = window.location.toString()\n    if ((hashIndex = settings.url.indexOf('#')) > -1) settings.url = settings.url.slice(0, hashIndex)\n    serializeData(settings)\n\n    var dataType = settings.dataType, hasPlaceholder = /\\?.+=\\?/.test(settings.url)\n    if (hasPlaceholder) dataType = 'jsonp'\n\n    if (settings.cache === false || (\n         (!options || options.cache !== true) &&\n         ('script' == dataType || 'jsonp' == dataType)\n        ))\n      settings.url = appendQuery(settings.url, '_=' + Date.now())\n\n    if ('jsonp' == dataType) {\n      if (!hasPlaceholder)\n        settings.url = appendQuery(settings.url,\n          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')\n      return $.ajaxJSONP(settings, deferred)\n    }\n\n    var mime = settings.accepts[dataType],\n        headers = { },\n        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },\n        protocol = /^([\\w-]+:)\\/\\//.test(settings.url) ? RegExp.$1 : window.location.protocol,\n        xhr = settings.xhr(),\n        nativeSetHeader = xhr.setRequestHeader,\n        abortTimeout\n\n    if (deferred) deferred.promise(xhr)\n\n    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')\n    setHeader('Accept', mime || '*/*')\n    if (mime = settings.mimeType || mime) {\n      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]\n      xhr.overrideMimeType && xhr.overrideMimeType(mime)\n    }\n    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))\n      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')\n\n    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])\n    xhr.setRequestHeader = setHeader\n\n    xhr.onreadystatechange = function(){\n      if (xhr.readyState == 4) {\n        xhr.onreadystatechange = empty\n        clearTimeout(abortTimeout)\n        var result, error = false\n        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {\n          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))\n\n          if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob')\n            result = xhr.response\n          else {\n            result = xhr.responseText\n\n            try {\n              // http://perfectionkills.com/global-eval-what-are-the-options/\n              // sanitize response accordingly if data filter callback provided\n              result = ajaxDataFilter(result, dataType, settings)\n              if (dataType == 'script')    (1,eval)(result)\n              else if (dataType == 'xml')  result = xhr.responseXML\n              else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)\n            } catch (e) { error = e }\n\n            if (error) return ajaxError(error, 'parsererror', xhr, settings, deferred)\n          }\n\n          ajaxSuccess(result, xhr, settings, deferred)\n        } else {\n          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)\n        }\n      }\n    }\n\n    if (ajaxBeforeSend(xhr, settings) === false) {\n      xhr.abort()\n      ajaxError(null, 'abort', xhr, settings, deferred)\n      return xhr\n    }\n\n    var async = 'async' in settings ? settings.async : true\n    xhr.open(settings.type, settings.url, async, settings.username, settings.password)\n\n    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]\n\n    for (name in headers) nativeSetHeader.apply(xhr, headers[name])\n\n    if (settings.timeout > 0) abortTimeout = setTimeout(function(){\n        xhr.onreadystatechange = empty\n        xhr.abort()\n        ajaxError(null, 'timeout', xhr, settings, deferred)\n      }, settings.timeout)\n\n    // avoid sending empty string (#319)\n    xhr.send(settings.data ? settings.data : null)\n    return xhr\n  }\n\n  // handle optional data/success arguments\n  function parseArguments(url, data, success, dataType) {\n    if ($.isFunction(data)) dataType = success, success = data, data = undefined\n    if (!$.isFunction(success)) dataType = success, success = undefined\n    return {\n      url: url\n    , data: data\n    , success: success\n    , dataType: dataType\n    }\n  }\n\n  $.get = function(/* url, data, success, dataType */){\n    return $.ajax(parseArguments.apply(null, arguments))\n  }\n\n  $.post = function(/* url, data, success, dataType */){\n    var options = parseArguments.apply(null, arguments)\n    options.type = 'POST'\n    return $.ajax(options)\n  }\n\n  $.getJSON = function(/* url, data, success */){\n    var options = parseArguments.apply(null, arguments)\n    options.dataType = 'json'\n    return $.ajax(options)\n  }\n\n  $.fn.load = function(url, data, success){\n    if (!this.length) return this\n    var self = this, parts = url.split(/\\s/), selector,\n        options = parseArguments(url, data, success),\n        callback = options.success\n    if (parts.length > 1) options.url = parts[0], selector = parts[1]\n    options.success = function(response){\n      self.html(selector ?\n        $('<div>').html(response.replace(rscript, \"\")).find(selector)\n        : response)\n      callback && callback.apply(self, arguments)\n    }\n    $.ajax(options)\n    return this\n  }\n\n  var escape = encodeURIComponent\n\n  function serialize(params, obj, traditional, scope){\n    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)\n    $.each(obj, function(key, value) {\n      type = $.type(value)\n      if (scope) key = traditional ? scope :\n        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'\n      // handle data in serializeArray() format\n      if (!scope && array) params.add(value.name, value.value)\n      // recurse into nested objects\n      else if (type == \"array\" || (!traditional && type == \"object\"))\n        serialize(params, value, traditional, key)\n      else params.add(key, value)\n    })\n  }\n\n  $.param = function(obj, traditional){\n    var params = []\n    params.add = function(key, value) {\n      if ($.isFunction(value)) value = value()\n      if (value == null) value = \"\"\n      this.push(escape(key) + '=' + escape(value))\n    }\n    serialize(params, obj, traditional)\n    return params.join('&').replace(/%20/g, '+')\n  }\n})(Zepto)\n\n;(function($){\n  $.fn.serializeArray = function() {\n    var name, type, result = [],\n      add = function(value) {\n        if (value.forEach) return value.forEach(add)\n        result.push({ name: name, value: value })\n      }\n    if (this[0]) $.each(this[0].elements, function(_, field){\n      type = field.type, name = field.name\n      if (name && field.nodeName.toLowerCase() != 'fieldset' &&\n        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&\n        ((type != 'radio' && type != 'checkbox') || field.checked))\n          add($(field).val())\n    })\n    return result\n  }\n\n  $.fn.serialize = function(){\n    var result = []\n    this.serializeArray().forEach(function(elm){\n      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))\n    })\n    return result.join('&')\n  }\n\n  $.fn.submit = function(callback) {\n    if (0 in arguments) this.bind('submit', callback)\n    else if (this.length) {\n      var event = $.Event('submit')\n      this.eq(0).trigger(event)\n      if (!event.isDefaultPrevented()) this.get(0).submit()\n    }\n    return this\n  }\n\n})(Zepto)\n\n;(function(){\n  // getComputedStyle shouldn't freak out when called\n  // without a valid element as argument\n  try {\n    getComputedStyle(undefined)\n  } catch(e) {\n    var nativeGetComputedStyle = getComputedStyle\n    window.getComputedStyle = function(element, pseudoElement){\n      try {\n        return nativeGetComputedStyle(element, pseudoElement)\n      } catch(e) {\n        return null\n      }\n    }\n  }\n})()\n  return Zepto\n}))\n";
}, function(e, n) {
	e.exports = '<!DOCTYPE html> <html lang=zh-CN> <head> <meta charset=UTF-8> <meta name=viewport content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no"> <meta name=format-detection content="telephone=no"> <title>1月10日京东超级盛典</title> {{{__HEAD_JAVASCRIPT__}}} <script>var _hmt=_hmt||[];!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?b14c563b4f72a775a01d2a8bf0872d2c";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script> </head> <body> <div id=o2_loading class=loading> <div class=loading-moon></div> <div class=loading-bg> <div class=loading-bg-ing> <div class=loading-bg-bubble> <span class=loading-bg-number>0%</span> </div> </div> </div> <div class=loading-ok-pic> <div class="loading-ok-dialog animated bounceInLeft"></div> </div> <div class="loading-ok-next animated fadeInUp"> <a class=loading-ok-btn></a> <div class=loading-ok-text></div> <div class=loading-ok-skip-row> <a class=loading-ok-skip></a> </div> </div> <div class=loading-mask></div> </div> <div id=o2_main class=main> <div class=wrapper> <video id=video class="video min" preload=auto playsinline src=http://wqs.jd.com/promote/superfestival/superfestival.mp4 width=1 height=1 type=video/mp4></video> </div> <div class=poster> </div> <div class=controls> <div class=controls-btn> <a class=controls-continue></a> </div> </div> </div> <div id=o2_end class=end> <div class=end-stars></div> <div class=end-logo></div> <div class=end-sun></div> <div class=end-header> <div class=end-star></div> <div class=end-joy></div> </div> <div class="end-btns end-1 end-fixed-bottom"> <a class="end-btn end-btn-gyg"></a> <a class="end-btn end-btn-fpz"></a> <div class=end-line-btns> <a class="end-line-btn end-btn-replay"></a> </div> </div> <div class="end-btns end-2 hide"> <a class="end-btn end-btn-qsd"></a> <div class=end-line-btns> <a class="end-line-btn end-btn-fpz"></a> <a class="end-line-btn end-btn-split"></a> <a class="end-line-btn end-btn-replay"></a> </div> </div> </div> <div id=o2_share class=share> <div class=share-guide></div> </div> <script src=//wl.jd.com/unify.min.js></script> <script>try{(new MPing).send(new MPing.inputs.PV)}catch(n){}</script> <script src="//pub.idqqimg.com/qqmobile/qqapi.js?_bid=152"></script> </body> </html> '
}, function(e, n) {}, function(e, n, t) {
	(function(e) {
		!
		function(e) {
			function n(e, n) {
				var t = this.os = {},
					i = this.browser = {},
					a = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
					r = e.match(/(Android);?[\s\/]+([\d.]+)?/),
					o = !! e.match(/\(Macintosh\; Intel /),
					s = e.match(/(iPad).*OS\s([\d_]+)/),
					l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
					c = !s && e.match(/(iPhone\sOS)\s([\d_]+)/),
					d = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
					u = /Win\d{2}|Windows/.test(n),
					f = e.match(/Windows Phone ([\d.]+)/),
					p = d && e.match(/TouchPad/),
					h = e.match(/Kindle\/([\d.]+)/),
					m = e.match(/Silk\/([\d._]+)/),
					g = e.match(/(BlackBerry).*Version\/([\d.]+)/),
					v = e.match(/(BB10).*Version\/([\d.]+)/),
					y = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
					b = e.match(/PlayBook/),
					A = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
					x = e.match(/Firefox\/([\d.]+)/),
					w = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
					k = !A && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
					S = k || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
				(i.webkit = !! a) && (i.version = a[1]), r && (t.android = !0, t.version = r[2]), c && !l && (t.ios = t.iphone = !0, t.version = c[2].replace(/_/g, ".")), s && (t.ios = t.ipad = !0, t.version = s[2].replace(/_/g, ".")), l && (t.ios = t.ipod = !0, t.version = l[3] ? l[3].replace(/_/g, ".") : null), f && (t.wp = !0, t.version = f[1]), d && (t.webos = !0, t.version = d[2]), p && (t.touchpad = !0), g && (t.blackberry = !0, t.version = g[2]), v && (t.bb10 = !0, t.version = v[2]), y && (t.rimtabletos = !0, t.version = y[2]), b && (i.playbook = !0), h && (t.kindle = !0, t.version = h[1]), m && (i.silk = !0, i.version = m[1]), !m && t.android && e.match(/Kindle Fire/) && (i.silk = !0), A && (i.chrome = !0, i.version = A[1]), x && (i.firefox = !0, i.version = x[1]), w && (i.ie = !0, i.version = w[1]), S && (o || t.ios || u) && (i.safari = !0, t.ios || (i.version = S[1])), k && (i.webview = !0), t.tablet = !! (s || b || r && !e.match(/Mobile/) || x && e.match(/Tablet/) || w && !e.match(/Phone/) && e.match(/Touch/)), t.phone = !(t.tablet || t.ipod || !(r || c || d || g || v || A && e.match(/Android/) || A && e.match(/CriOS\/([\d.]+)/) || x && e.match(/Mobile/) || w && e.match(/Touch/)))
			}
			n.call(e, navigator.userAgent, navigator.platform), e.__detect = n
		}(e)
	}).call(n, t(2))
}, function(e, n, t) {
	(function(e) {
		!
		function(e, n) {
			function t(e) {
				return e.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
			}
			function i(e) {
				return a ? a + e : e.toLowerCase()
			}
			var a, r, o, s, l, c, d, u, f, p, h = "",
				m = {
					Webkit: "webkit",
					Moz: "",
					O: "o"
				},
				g = window.document,
				v = g.createElement("div"),
				y = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
				b = {};
			e.each(m, function(e, t) {
				if (v.style[e + "TransitionProperty"] !== n) return h = "-" + e.toLowerCase() + "-", a = t, !1
			}), r = h + "transform", b[o = h + "transition-property"] = b[s = h + "transition-duration"] = b[c = h + "transition-delay"] = b[l = h + "transition-timing-function"] = b[d = h + "animation-name"] = b[u = h + "animation-duration"] = b[p = h + "animation-delay"] = b[f = h + "animation-timing-function"] = "", e.fx = {
				off: a === n && v.style.transitionProperty === n,
				speeds: {
					_default: 400,
					fast: 200,
					slow: 600
				},
				cssPrefix: h,
				transitionEnd: i("TransitionEnd"),
				animationEnd: i("AnimationEnd")
			}, e.fn.animate = function(t, i, a, r, o) {
				return e.isFunction(i) && (r = i, a = n, i = n), e.isFunction(a) && (r = a, a = n), e.isPlainObject(i) && (a = i.easing, r = i.complete, o = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : e.fx.speeds[i] || e.fx.speeds._default) / 1e3), o && (o = parseFloat(o) / 1e3), this.anim(t, i, a, r, o)
			}, e.fn.anim = function(i, a, h, m, g) {
				var v, A, x, w = {},
					k = "",
					S = this,
					E = e.fx.transitionEnd,
					T = !1;
				if (a === n && (a = e.fx.speeds._default / 1e3), g === n && (g = 0), e.fx.off && (a = 0), "string" == typeof i) w[d] = i, w[u] = a + "s", w[p] = g + "s", w[f] = h || "linear", E = e.fx.animationEnd;
				else {
					A = [];
					for (v in i) y.test(v) ? k += v + "(" + i[v] + ") " : (w[v] = i[v], A.push(t(v)));
					k && (w[r] = k, A.push(r)), a > 0 && "object" == typeof i && (w[o] = A.join(", "), w[s] = a + "s", w[c] = g + "s", w[l] = h || "linear")
				}
				return x = function(n) {
					if ("undefined" != typeof n) {
						if (n.target !== n.currentTarget) return;
						e(n.target).unbind(E, x)
					} else e(this).unbind(E, x);
					T = !0, e(this).css(b), m && m.call(this)
				}, a > 0 && (this.bind(E, x), setTimeout(function() {
					T || x.call(S)
				}, 1e3 * (a + g) + 25)), this.size() && this.get(0).clientLeft, this.css(w), a <= 0 && setTimeout(function() {
					S.each(function() {
						x.call(this)
					})
				}, 0), this
			}, v = null
		}(e)
	}).call(n, t(2))
}, function(e, n, t) {
	(function(e) {
		!
		function(e, n) {
			function t(t, i, a, r, o) {
				"function" != typeof i || o || (o = i, i = n);
				var s = {
					opacity: a
				};
				return r && (s.scale = r, t.css(e.fx.cssPrefix + "transform-origin", "0 0")), t.animate(s, i, null, o)
			}
			function i(n, i, a, r) {
				return t(n, i, 0, a, function() {
					o.call(e(this)), r && r.call(this)
				})
			}
			var a = window.document,
				r = (a.documentElement, e.fn.show),
				o = e.fn.hide,
				s = e.fn.toggle;
			e.fn.show = function(e, i) {
				return r.call(this), e === n ? e = 0 : this.css("opacity", 0), t(this, e, 1, "1,1", i)
			}, e.fn.hide = function(e, t) {
				return e === n ? o.call(this) : i(this, e, "0,0", t)
			}, e.fn.toggle = function(t, i) {
				return t === n || "boolean" == typeof t ? s.call(this, t) : this.each(function() {
					var n = e(this);
					n["none" == n.css("display") ? "show" : "hide"](t, i)
				})
			}, e.fn.fadeTo = function(e, n, i) {
				return t(this, e, n, null, i)
			}, e.fn.fadeIn = function(e, n) {
				var t = this.css("opacity");
				return t > 0 ? this.css("opacity", 0) : t = 1, r.call(this).fadeTo(e, t, n)
			}, e.fn.fadeOut = function(e, n) {
				return i(this, e, null, n)
			}, e.fn.fadeToggle = function(n, t) {
				return this.each(function() {
					var i = e(this);
					i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](n, t)
				})
			}
		}(e)
	}).call(n, t(2))
}, function(e, n, t) {
	var i, a, r;
	!
	function(t, o) {
		a = [], i = o, r = "function" == typeof i ? i.apply(n, a) : i, !(void 0 !== r && (e.exports = r))
	}(this, function() {
		var e = Object.assign ||
		function(e) {
			"use strict";
			if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
			for (var n = Object(e), t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				if (void 0 !== i && null !== i) for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a])
			}
			return n
		}, n = function(n) {
			this.opts = {
				onChange: function() {}
			}, "function" == typeof n ? this.opts.onChange = n : this.opts = e(this.opts, n), this.data = {
				initLeftRotate: void 0,
				initForwardSlant: this.opts.initForwardSlant,
				lon: void 0,
				lat: void 0,
				orientation: window.orientation || 0
			}, this.data.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, this.handleDeviceOrientation = function(n) {
				if (this._isListening) {
					var t = n.alpha,
						i = n.beta,
						a = n.gamma;
					switch (void 0 === this.data.initLeftRotate && (this.data.initLeftRotate = this.data.isIOS ? n.webkitCompassHeading : t), this.data.isIOS || ((t > 0 || t < this.data.initLeftRotate) && (t += 360), t -= this.data.initLeftRotate), this.data.leftRotate = t < 180 ? t : t - 360, this.data.rightRotate = -this.data.leftRotate, this.data.orientation) {
					case 0:
						this.data.forwardSlant = i;
						break;
					case 90:
						this.data.forwardSlant = a < 0 ? -a : 180 - a;
						break;
					case -90:
						this.data.forwardSlant = a < 0 ? 180 + a : a
					}
					switch (this.data.backwardSlant = -this.data.forwardSlant, this.data.isForward = this.data.forwardSlant > 0, this.data.isBackward = !this.data.isForward, void 0 === this.data.initForwardSlant && (this.data.initForwardSlant = this.data.forwardSlant), this.data.orientation) {
					case 0:
						this.data.forwardThreshold = this.data.initForwardSlant > 0 ? -180 + this.data.initForwardSlant : 180 + this.data.initForwardSlant, this.data.initForwardSlant > 0 && i < this.data.forwardThreshold ? this.data.relativeForwardSlant = i + 360 - this.data.initForwardSlant : this.data.initForwardSlant < 0 && i > this.data.forwardThreshold ? this.data.relativeForwardSlant = i - 180 - this.data.initForwardSlant : this.data.relativeForwardSlant = i - this.data.initForwardSlant;
						break;
					case 90:
					case -90:
						this.data.relativeForwardSlant = this.data.forwardSlant - this.data.initForwardSlant
					}
					switch (this.data.relativeBackwardSlant = -this.data.relativeForwardSlant, this.data.isRelativeForward = this.data.relativeForwardSlant > 0, this.data.isRelativeBackward = !this.data.isRelativeForward, this.data.orientation) {
					case 0:
						this.data.leftSlant = -a;
						break;
					case 90:
						this.data.leftSlant = -i;
						break;
					case -90:
						this.data.leftSlant = i
					}
					this.data.rightSlant = -this.data.leftSlant, this.data.isLeft = this.data.leftSlant > 0, this.data.isRight = !this.data.isLeft;
					var r = this.data.leftRotate + this.data.rightSlant;
					r = r < 0 ? r + 360 : r;
					var o = this.data.forwardSlant - 90;
					this.data.offsetLon = void 0 === this.data.lon ? 0 : r - this.data.lon, this.data.offsetLat = void 0 === this.data.lat ? 0 : o - this.data.lat, this.data.lon = r, this.data.lat = o, this.opts.onChange(e(n, this.data))
				}
			}, this.handleOrientationChange = function(e) {
				this.data.orientation = window.orientation, this.data.initForwardSlant = this.opts.initForwardSlant
			}
		};
		return n.prototype.init = function() {
			this._isListening && (window.removeEventListener("deviceorientation", this._handleDeviceOrientation, !1), window.removeEventListener("orientationchange", this._handleOrientationChange, !1)), this._isListening = !0, this.data.initLeftRotate = void 0, this.data.initForwardSlant = this.opts.initForwardSlant, this.data.lon = void 0, this.data.lat = void 0, this._handleDeviceOrientation = this.handleDeviceOrientation.bind(this), this._handleOrientationChange = this.handleOrientationChange.bind(this), window.addEventListener("deviceorientation", this._handleDeviceOrientation, !1), window.addEventListener("orientationchange", this._handleOrientationChange, !1)
		}, n.prototype.pause = function() {
			this._isListening = !1
		}, n.prototype.
		continue = function() {
			this._isListening = !0
		}, n.prototype.destory = function() {
			this._isListening = !1, window.removeEventListener("deviceorientation", this._handleDeviceOrientation, !1), window.removeEventListener("orientationchange", this._handleOrientationChange, !1)
		}, n
	})
}, function(e, n, t) {
	var i, a, r;
	!
	function(t, o) {
		a = [], i = o, r = "function" == typeof i ? i.apply(n, a) : i, !(void 0 !== r && (e.exports = r))
	}(this, function() {
		function e(e) {
			var n = document.createElement("a");
			return n.href = e, n.pathname.split(".").pop().toLowerCase()
		}
		var n = Object.assign ||
		function(e) {
			"use strict";
			if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
			for (var n = Object(e), t = 1; t < arguments.length; t++) {
				var i = arguments[t];
				if (void 0 !== i && null !== i) for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a])
			}
			return n
		}, t = function(t) {
			this.opts = n({
				resources: [],
				concurrency: 0,
				perMinTime: 0,
				attr: "data-preload",
				onProgress: null,
				onCompletion: null
			}, t);
			for (var i = document.querySelectorAll("[" + this.opts.attr + "]"), a = 0; a < i.length; a++) {
				var r = i[a];
				r.src && this.opts.resources.push(r.src)
			}
			this.length = this.opts.resources.length, this.completedCount = 0, this.loadingIndex = 0, this.resourceMap = {}, this.done = function(e, n) {
				this.completedCount += 1, this.resourceMap[e] = n, this.onProgress && this.onProgress(this.completedCount, this.length, e), this.completedCount >= this.length ? this.onCompletion && this.onCompletion(this.length) : this.opts.concurrency > 0 && this.loader()
			}, this.loader = function() {
				if (!(this.loadingIndex >= this.length)) {
					var n = this.opts.resources[this.loadingIndex];
					this.loadingIndex++, ~ ["mp3", "ogg", "wav"].indexOf(e(n)) ? this.audioLoader(n) : this.imageLoader(n)
				}
			}, this.imageLoader = function(e) {
				var n = this,
					t = new Image,
					i = new Date;
				t.onload = t.onerror = function() {
					var a = new Date - i,
						r = n.opts.perMinTime - a;
					r > 0 ? setTimeout(function() {
						n.done(e, t)
					}, r) : n.done(e, t)
				}, t.src = e
			}, this.audioLoader = function(e) {
				var n = this,
					t = new Audio,
					i = new Date,
					a = function() {
						var a = new Date - i,
							r = n.opts.perMinTime - a;
						r > 0 ? setTimeout(function() {
							n.done(e, t)
						}, r) : n.done(e, t)
					};
				t.addEventListener("canplaythrough", a), t.addEventListener("error", a), t.preload = "auto", t.src = e, t.load()
			}
		};
		return t.prototype.addProgressListener = function(e) {
			this.onProgress = e
		}, t.prototype.addCompletionListener = function(e) {
			this.onCompletion = e
		}, t.prototype.get = function(e) {
			return this.resourceMap[e]
		}, t.prototype.start = function() {
			if (!this.length) return this.done(null, null);
			if (0 === this.opts.concurrency) for (; this.loadingIndex < this.length;) this.loader();
			else for (var e = 0; e < this.opts.concurrency; e++) this.loader()
		}, t
	})
}, function(e, n, t) { /*! npm.im/iphone-inline-video */
	"use strict";

	function i(e) {
		return e && "object" == typeof e && "default" in e ? e.
	default:
		e
	}
	function a(e, n, t, i) {
		function a(n) {
			Boolean(e[t]) === Boolean(i) && n.stopImmediatePropagation(), delete e[t]
		}
		return e.addEventListener(n, a, !1), a
	}
	function r(e, n, t, i) {
		function a() {
			return t[n]
		}
		function r(e) {
			t[n] = e
		}
		i && r(e[n]), Object.defineProperty(e, n, {
			get: a,
			set: r
		})
	}
	function o(e, n, t) {
		t.addEventListener(n, function() {
			return e.dispatchEvent(new Event(n))
		})
	}
	function s(e, n) {
		Promise.resolve().then(function() {
			e.dispatchEvent(new Event(n))
		})
	}
	function l(e) {
		var n = new Audio;
		return o(e, "play", n), o(e, "playing", n), o(e, "pause", n), n.crossOrigin = e.crossOrigin, n.src = e.src || e.currentSrc || "data:", n
	}
	function c(e, n, t) {
		(v || 0) + 200 < Date.now() && (e[w] = !0, v = Date.now()), t || (e.currentTime = n), E[++T % 3] = 100 * n | 0
	}
	function d(e) {
		return e.driver.currentTime >= e.video.duration
	}
	function u(e) {
		var n = this;
		n.video.readyState >= n.video.HAVE_FUTURE_DATA ? (n.hasAudio || (n.driver.currentTime = n.video.currentTime + e * n.video.playbackRate / 1e3, n.video.loop && d(n) && (n.driver.currentTime = 0)), c(n.video, n.driver.currentTime)) : n.video.networkState !== n.video.NETWORK_IDLE || n.video.buffered.length || n.video.load(), n.video.ended && (delete n.video[w], n.video.pause(!0))
	}
	function f() {
		var e = this,
			n = e[x];
		return e.webkitDisplayingFullscreen ? void e[k]() : ("data:" !== n.driver.src && n.driver.src !== e.src && (c(e, 0, !0), n.driver.src = e.src), void(e.paused && (n.paused = !1, e.buffered.length || e.load(), n.driver.play(), n.updater.start(), n.hasAudio || (s(e, "play"), n.video.readyState >= n.video.HAVE_ENOUGH_DATA && s(e, "playing")))))
	}
	function p(e) {
		var n = this,
			t = n[x];
		t.driver.pause(), t.updater.stop(), n.webkitDisplayingFullscreen && n[S](), t.paused && !e || (t.paused = !0, t.hasAudio || s(n, "pause"), n.ended && (n[w] = !0, s(n, "ended")))
	}
	function h(e, n) {
		var t = e[x] = {};
		t.paused = !0, t.hasAudio = n, t.video = e, t.updater = b.frameIntervalometer(u.bind(t)), n ? t.driver = l(e) : (e.addEventListener("canplay", function() {
			e.paused || s(e, "playing")
		}), t.driver = {
			src: e.src || e.currentSrc || "data:",
			muted: !0,
			paused: !0,
			pause: function() {
				t.driver.paused = !0
			},
			play: function() {
				t.driver.paused = !1, d(t) && c(e, 0)
			},
			get ended() {
				return d(t)
			}
		}), e.addEventListener("emptied", function() {
			var n = !t.driver.src || "data:" === t.driver.src;
			t.driver.src && t.driver.src !== e.src && (c(e, 0, !0), t.driver.src = e.src, n ? t.driver.play() : t.updater.stop())
		}, !1), e.addEventListener("webkitbeginfullscreen", function() {
			e.paused ? n && !t.driver.buffered.length && t.driver.load() : (e.pause(), e[k]())
		}), n && (e.addEventListener("webkitendfullscreen", function() {
			t.driver.currentTime = e.currentTime
		}), e.addEventListener("seeking", function() {
			E.indexOf(100 * e.currentTime | 0) < 0 && (t.driver.currentTime = e.currentTime)
		}))
	}
	function m(e) {
		var n = e[x];
		e[k] = e.play, e[S] = e.pause, e.play = f, e.pause = p, r(e, "paused", n.driver), r(e, "muted", n.driver, !0), r(e, "playbackRate", n.driver, !0), r(e, "ended", n.driver), r(e, "loop", n.driver, !0), a(e, "seeking"), a(e, "seeked"), a(e, "timeupdate", w, !1), a(e, "ended", w, !1)
	}
	function g(e, n, t) {
		void 0 === n && (n = !0), void 0 === t && (t = !0), t && !A || e[x] || (h(e, n), m(e), e.classList.add("IIV"), !n && e.autoplay && e.play(), /iPhone|iPod|iPad/.test(navigator.platform) || console.warn("iphone-inline-video is not guaranteed to work in emulated environments"))
	}
	var v, y = i(t(13)),
		b = t(14),
		A = /iPhone|iPod/i.test(navigator.userAgent) && !matchMedia("(-webkit-video-playable-inline)").matches,
		x = y(),
		w = y(),
		k = y("nativeplay"),
		S = y("nativepause"),
		E = [],
		T = 0;
	g.isWhitelisted = A, e.exports = g
}, function(e, n) {
	"use strict";
	var t = "undefined" == typeof Symbol ?
	function(e) {
		return "@" + (e || "@") + Math.random()
	} : Symbol;
	e.exports = t
}, function(e, n) { /*! npm.im/intervalometer */
	"use strict";

	function t(e, n, t, i) {
		function a(t) {
			r = n(a, i), e(t - (o || t)), o = t
		}
		var r, o;
		return {
			start: function() {
				r || a(0)
			},
			stop: function() {
				t(r), r = null, o = 0
			}
		}
	}
	function i(e) {
		return t(e, requestAnimationFrame, cancelAnimationFrame)
	}
	function a(e, n) {
		return t(e, setTimeout, clearTimeout, n)
	}
	Object.defineProperty(n, "__esModule", {
		value: !0
	}), n.intervalometer = t, n.frameIntervalometer = i, n.timerIntervalometer = a
}, function(e, n, t) {
	(function(e) {
		!
		function() {
			function n() {
				var n = this,
					t = this.constructor;
				t.config = {
					pic: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAGECAMAAADujQ6aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUU3RTZCMTVGMjA5MTFFMzk2MTM5MzA1MEQ1NDk5QkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUU3RTZCMTZGMjA5MTFFMzk2MTM5MzA1MEQ1NDk5QkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RTdFNkIxM0YyMDkxMUUzOTYxMzkzMDUwRDU0OTlCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RTdFNkIxNEYyMDkxMUUzOTYxMzkzMDUwRDU0OTlCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjSrkmgAAAMAUExURfDw8JydnbS1tYp7Jri5uYJ0KMTFxf/kAHt+gfvbRf7WHPrpStzc3PHv5vHv5PjODPLuy/jhdP7nF5iFI/vRC7+jGfrpUlVSM2NnaklNUfTorFpVMsvLy9/f37/AwvreWqOOIP3ZMt26EvngbW5ydTU5Ov/eAP7VFv/ZALi6u//QAP/OAF5ZMOvFDzk9OdGxFfXnokpJNffigf7mC//iAP/UDnpuKv/UDK+xs+3GDredG+O+EbKZHPHu4XFnLGpiLsKlGWVeL/vbQX9yKf/UCuTAELSbHPDw7a2VHvLry45+JfToss+vFs3NzfrdU/nfYp2JIUZGNv///25lLUJDNzY6OlFPNOfn5//mALugGnZrK56fn/Dw7v7TCv39/frcT9PT0+bm5qOkpLq7u/Xmn+fCEOXl5fzSC6eoqPPLDe7u7ti2E/Ls0PTptcXGxv7+/vvcSzQ5Pf7WHvLs0aWmpq2urvLv172/wP/mAry9vfv7+/zaOPzaOf/EAE9NNOPk5Orq6v7XIfT09MnKyvHx8fvpQP/FAO/IDsrLzKanp/XmoPj4+OTk5KSlpffODOLi4tjY2PLv0f7nD66wsf/UAJWDI/Lv0p2entDR0ffshv3YKv/HAD9BOKqrq6usrNzd3v/UC9SzFPfrgPDIDqeRH/3nIpSXmf7nDbO0tJKVl9vc3NLS0s/Pz/XNDKqTHtTU1NXV1f3nIP/WANKyFbO0tsytFvLy89DQ0PHy8nJoLNfX1+Xm5mBaMHp9f/f398epF/z8/PPz8zg7Ojw+OePj4/Dv6saoGMbGxre5u93e3rGysuS/Ebm7vJ+goHNpK9a1FMvMzf3TCujCEPDw7+zs7PvpPod4J8usFv/TAPLt1vbNDENEN3RpK9TV1f3SC/r6+v/gAP3XIeC9EWxjLbq6ure4uPLKDfvcT7qfG/Ls0/PrxfHu3sDCw/zaPPHJDXx/gkxLNfTpufLszf7WG8iqF+jDD/Tpt/jie2dgLvPqu/Pqv//VEUBCOP3XI/PqwAAAAAAPH/AAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAK3klEQVR42uzdeVxU5RoH8Dkhi3qJTAoIJFJA3KWSm2uhr2bbTZ68zdgwIKCyKURGBIUgImIsWmqaaWCapZVZmvuW2mL7avtyU7r75e77vW8z4nIO68zhnDnved/n+QtmnuFzfl/Oec/7vjOfz1io23XDAsphWdxvJcHTjokNQMiwBMEBCBkRLjgA+WDqdLEBCPnhZIzYAIT0TxQcgJAZ8YIDkKC+wzkHiL/eJ2rqr2bIiihr9lf8Avx30pRhpOv6NIRPgOsvCybuVeamdfwB7H2PeFBLfGP4Ahi6g3hYuQc4Avh51DfE43KMSeIFIH4HUVXP38wHQOJGdfmJqTcKLgBMCFIX//tTfIwBEzJVnv5H+RgEE+vVxHeMS6KUC4A7s9Xk3zCUl5ng0VwV8Uf78rAv0AKwqZ18wbdu85l0l6xaTYOj1lHKC8BQR5uL+68JxzpdDh8OoZQbgJg2F8DL4Z3vB7z1Llc7Qr6t4tf7dr4hUr9qOOUJIGasMv+HIZ3vCI2Jp5QrgARl/rHxnW6J5SZSyhnACOUKv8OJvevZjVxtibcALFDcAhx30I4BMrdNp5Q7gL6KE2Bcx63t3xvMD6C4BwZ1MsAlUB7L8qXiCoiiopVlgmJ+myQewCo5wGtUPIApcgAfAQEUG6HhAgJ8KJ8EHBMQQL4VtIQKCCC/C04WEUA+BPQXHWA2AiAAAggNsFF0gGwEQACxAepFByAIICCA6lcWhG4p2rrnWzC2vt2ztWhLaIH3AaLfAJbqjWjvAhysBsgvX1NcmP6OZGy9k15YvKY8H6D6oPcAwooAKiKyJHYqK6ICIDLMSwABFqjJs0tslT2vBioDvAKwAuBEncRe1Z0AWOEFgJ2Q4iexWX4psFN3gBVQclpitU6XeH4OeAjQDCkZEruVkQLNugKEVYKfxHL5wa4wPQEi4YTEdjXA73QECICaOsYB0g95eBF4BPA+4xdAy0Xwvm4A0fCKnXkA+ysQrRfAIIiQ2K8IGKQTQAHkZ5kAICsfCvQBCIVyyQxVDqH6AGyG3aYAWANb9AEoguLuHNe9M+dY58y8V3+AYijSB6ABCrtzXDOtrnrhLEVn1U2mQmjQB6AS0rtzXC2h085TdFYvdGsuBJX6AJRAt2YBZ7M5fyrrEmBOt2YCUKIPAIBkijNAAmASwP0xIK2bQyWjAK7Yad64C7AK4L1CAARAAARAAARAAARAAATwBoC9x8z9ORYj6uPjM3vYDQdoqrUYWbVNxgKsXmQxuhatNhLA+PxOAQMBmiwsVJNhAHYrEwBWu1EAGRY2KsMogK8ZAdhuFEAaIwBpRgHkMAKQYxSAhZVCAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAP0Bkh9K7UV6pT6UrGmreQDmP3D26wwfmK9hq3kA5t9z/gsd75mvWat5AJIflH2l5YPJGrWaCGCW4ks9Z2nUaiKAuxWp7tao1UQAvRSpFmrUaiIARSgySqNWEwEEBs77pSyWRq0mmwle7X6qq7kEsKS6nyqVS4B57qeaxyXAxe6nuphLAIsHqbgECHQ/VSCOAXgXwHkAVwDO6V2q+zPBVP5mgsKvBYRfDQq/HyD8jpDwe4KWubKt3rmatZppHjD3/Gb/XA1bTfbO0C9GLUydlaxpK743iAAIgAAIgADsAzz6WO+nHrE98lTvxx7VoZ15gPsuv992ru6//D6N29kHuORSm7wuvUTTdhMALLbZ/G2274astPkPHuw/2H9xF+3OFmefbeWQ7868cLHpAa6xxZVeG1e6siru8SGPlw62XdNV++BSZ2Nc1crSuGtL47pqN8MZ4F8V+1lVrO2l0pds/rE22yddnjCx/meaY6s+i63y/4SLMcDfX80Y4HoVB2OA8HcBZz38ZO8Xn7Y9/WLvJx/WoR1nggiAAAiAAAhgNoBb+nyufOBfff4sEsD4/5CfKR648S/k9yIB/JqQqxQP/JaQtSIBBDaSgTfKH/g3IROFGgOuIuRPrT4WM0AogD6NikEg8H+E3CIUwE2NpPGKC78OcA4ByWLNA24nZOA5gY/+QQgZKdhEaPxaQn56u+sd8OS/93Tmv1K4meBNC10fAljbc+KZz0X1DBRvKvz5xPOfBWkc8KqIa4GPRvYc5Yo/8Mr/C7sYGj9v5BW/edViERYAl8MIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAIgAAsAHzMSP4cowDKGAFIMwrga0YAthsFkMEIQIZRAHYrE/mtdqMApB5MAPSQDAOQFjGQf5FkIMDq2wzPf9tqIwEkqanW0Pi1Te0ck1cBJHvG9v05xsx/9m/PsEuGAzBYCIAACIAApgBYn7ev35x++/LWiwmw9DnruXpuqYAAbx63XqjjbwoH8EyaVV5pzwgGkFVmVVZZllgAzzoz56RAS6XkOH97ViiAJ1z/9HP5nQKuX58QCeB1V2KAs6d/yw95IgHsawdguUgA/doBWCYSQFo7AFaRAJaZ8gwoAbtWh7hczzHADiX6AFRCuinuAulQqQ9AAxSaYh5QCA36ABRBsT4zwSPazgSLoUgfgM2wW7+1QK12a4E1sEUfgFAoN8VqsBxC9QEogHwNl2wXyc+Bsos0XGjmQ4E+AHQQRJhgRygCBlGdAKKhwq7hkUrr85Yvsy5bru2eoL0CovUCoNWQJ7FeflBNdQM4CDXpjOdPr4EA/QBoJDQwDvATiKQ6AoTtAT/GL4CKMD0BaDOkZDCcPyMFmqmuAPQ6KOnBbP7TJXAd1RmA7oQUVq8CvxTYSXUHcJ4D0FDHYPy6BvD8/68GgDbvgUN+dsbi2/0Owa5m6hUAGhYJUFG9lKH4S6srACLDqJcAKA2oBsgv311cmG70mWBPLyzeXZ4PUB2gKolKAOe64G1gqd6OVplDNYBzdRy6uWjrriMGJz+ya2vR5tAC1Sm6AcBJIYCAmYm8EEBAgC9EB8hGAAQQG+APogPMRgAEQAChAfqLDjBZdIAlsvzZAgIcc8gA/iYgQLj8ChghIICPHGCKgACvyQFWiQeQlCkH2CseQJQ8v+NLPgESOn4qPkgOkMvlpmj4y6TjJ8cpdgSncQgwfZvzIu/w2TscCoAQ7gBiTp6Z53X09ILRivwbuHtfIDG3JVlHA8BYRX6SwBlA/Jhzydp/PmSyMv/YGK4Ahq+6sOHfboNvvTI/8aU8Abz7lixa+/eGVpUbwxFAyGFFtjYrwITDjtb5HQcoNwDrojKV4e6S1SSfbbcGk7a1ifICEOM7mnheuUd5ARi6QUV8kn0n5QMgaZxDTf6gf1IuAI7e/Lya+CRzAuUC4NT3quKToPP5TQ2w4AZ18cnGRMoFgMrTn2yIp3wA0KQxKgbAb6KOUl4AKD2Q62n+HUOVf8Hst8EY3yWexH9vb+s/YP6J0LpNmW6mD77sVNuX8zAVDvnUjfTDpkya3t6L+VgMfTW7VdwZ8poa5XPqjx29lJPl8PC+QZ0uhzsubjZE4mcIDkBpYn/BAWjMyR/EBqB0+tQPxAagNHyE4ACUJgwTHIAemxYsNoBro8D93h8FGAD8cAbifAULJAAAAABJRU5ErkJggi8qICB8eEd2MDB8ZDM5OGQ4ODdiN2I4MjQ3MmJjMzkyOTRjZjNhNjJhMTUgKi8=",
					mode: "portrait",
					bgcolor: "#32373b",
					txtColor: "#ffd40a",
					prefix: "Shine",
					picZoom: 2,
					zIndex: 99,
					init: !1,
					landback: !1
				}, n.init = function(n) {
					function i() {
						var e = "." + n.prefix + "_landscape{width:100%; height:100%; background:" + n.bgcolor + ";position: fixed; left:0;top: 0;z-index:" + n.zIndex + "; display:none; text-align: center;}." + n.prefix + "_landscape_box{position: relative; margin-left: auto; margin-right: auto; top: 50%; transform:translateY(-50%); -webkit-transform:translateY(-50%);}." + n.prefix + "_landscape span{font-size:18px;display:block;color:" + n.txtColor + "; text-align:center;width: 100%;padding-top: 10px; line-height:2;}." + n.prefix + "_landscape img{-webkit-animation: Shine_landscapeAni 1.5s ease infinite;animation: Shine_landscapeAni 1.5s ease infinite;}@-webkit-keyframes " + n.prefix + "_landscapeAni{0% {-webkit-transform:rotate(0deg);}30% {-webkit-transform:rotate(90deg);}70%{-webkit-transform:rotate(90deg);}100% {-webkit-transform:rotate(0deg);}}@keyframes " + n.prefix + "_landscapeAni{0% {transform:rotate(0deg);}30% {transform:rotate(90deg);}70%{transform:rotate(90deg);}100% {transform:rotate(0deg);}}",
							t = document.createElement("style");
						t.type = "text/css", t.textContent = e, document.getElementsByTagName("HEAD").item(0).appendChild(t)
					}
					function a() {
						var e = document.createElement("div");
						e.className = n.prefix + "_landscape", e.id = n.prefix + "_landscape", e.innerHTML = '<div class="' + n.prefix + '_landscape_box"><img src="' + n.pic + '" id="' + n.prefix + '_landscape_pic" /><span>' + n.txt + "</span></div>", document.getElementsByTagName("body")[0].appendChild(e);
						var t = (o.pic, new Image);
						t.src = n.pic, t.onload = function() {
							document.getElementById(n.prefix + "_landscape_pic").width = parseInt(t.width / n.picZoom), document.getElementById(n.prefix + "_landscape_pic").height = parseInt(t.height / n.picZoom)
						}
					}
					function r() {
						document.documentElement.clientWidth > document.documentElement.clientHeight ? document.getElementById(o.config.prefix + "_landscape").style.display = "portrait" == o.config.mode ? "block" : "none" : document.getElementById(o.config.prefix + "_landscape").style.display = "portrait" == o.config.mode ? "none" : "block"
					}
					this.config = e.extend(!0, {}, t.config, n);
					var o = this,
						n = this.config;
					"portrait" == n.mode || "" == n.mode ? n.txt = "为了更好的体验，请将手机/平板竖过来" : n.txt = "横屏体验更佳哟！<br/>1. 手机打开自动横屏！<br/>2. 微信->设置->开启横屏模式！", i(), a(), window.addEventListener("DOMContentLoaded", function() {
						setTimeout(function() {
							r(), o.config.init && o.config.init()
						}, 50)
					}), window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
						180 != window.orientation && 0 != window.orientation && 90 != window.orientation && window.orientation != -90 || setTimeout(function() {
							r(), o.config.landback && o.config.landback()
						}, 300)
					}, !1)
				}
			}
			window.Landscape = n
		}()
	}).call(n, t(2))
}, function(e, n) {
	!
	function() {
		var e = function(e, n, t) {
				try {
					var i = new MPing.inputs.Click(e || "");
					n && (i.event_param = n), t && (i.event_level = t), i.updateEventSeries(), (new MPing).send(i)
				} catch (e) {}
			};
		window.JD_report = e
	}()
}, function(e, n) {
	for (var t = 0, i = ["ms", "moz", "webkit", "o"], a = 0; a < i.length && !window.requestAnimationFrame; ++a) window.requestAnimationFrame = window[i[a] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[a] + "CancelAnimationFrame"] || window[i[a] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
		var i = (new Date).getTime(),
			a = Math.max(0, 16 - (i - t)),
			r = window.setTimeout(function() {
				e(i + a)
			}, a);
		return t = i + a, r
	}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
		clearTimeout(e)
	})
}, function(e, n, t) {
	var i;
	!
	function(a, r) {
		var o = function() {},
			s = function() {
				this.calls = [], this.map = {
					events: {
						friend: "menu:share:appmessage",
						timeline: "menu:share:timeline",
						qq: "menu:share:qq",
						weibo: "menu:share:weibo",
						email: "email"
					},
					actions: {
						friend: "sendAppMessage",
						timeline: "shareTimeline",
						qq: "shareQQ",
						weibo: "shareWeibo",
						email: "email"
					},
					direct: {
						network: "getNetworkType",
						hideToolbar: "hideToolbar",
						hideOptionMenu: "hideOptionMenu",
						showOptionMenu: "showOptionMenu",
						closeWebView: "closeWindow",
						scanQRCode: "scanQRCode",
						imagePreview: "imagePreview"
					}
				}
			};
		s.prototype._data = function(e, n) {
			if (!e) return {};
			var t = {};
			for (var i in e) {
				if (!e.hasOwnProperty(i)) return;
				t[i] = "function" == typeof e[i] ? e[i]() : e[i]
			}
			return t.appid = t.app, t.img_url = t.img, delete t.app, delete t.img, "weibo" === n ? (t.content = t.desc, t.url = t.link) : "timeline" === n ? t.title = t.title : "email" === n && (t.content = t.desc + " " + t.link), t
		}, s.prototype._make = function(e) {
			if ("undefined" == typeof WeixinJSBridge) return this.calls.push(e);
			var n = e.name,
				t = this.map.direct[n],
				i = e.data,
				a = e.callback;
			if (t) return "network" === n ? WeixinJSBridge.invoke(t, {}, a) : "imagePreview" === n ? WeixinJSBridge.invoke(t, i, a) : WeixinJSBridge.call(t, a);
			if ("email" === n) return WeixinJSBridge.invoke("sendEmail", this._data(i, n), a);
			var r = this;
			WeixinJSBridge.on(this.map.events[n], function() {
				WeixinJSBridge.invoke(r.map.actions[n], r._data(i, n), a)
			})
		}, s.prototype.on = function(e, n, t) {
			if (e) return "function" == typeof n && (t = n, n = null), this._make({
				name: e,
				data: n,
				callback: t || o
			}), this
		};
		var l = function() {
				for (var e = 0, n = c.calls.length; e < n; e++) c._make(c.calls[e])
			},
			c = new s,
			d = function() {
				return c.on.apply(c, arguments)
			};
		"undefined" != typeof n && e.exports ? e.exports = n = d : (i = function(e, n, t) {
			t.exports = n = d
		}.call(n, t, n, e), !(void 0 !== i && (e.exports = i))), "undefined" == typeof WeixinJSBridge ? r.addEventListener ? r.addEventListener("WeixinJSBridgeReady", l, !1) : (r.attachEvent("WeixinJSBridgeReady", l), r.attachEvent("onWeixinJSBridgeReady", l)) : l()
	}(window, document)
}, function(e, n, t) {
	e.exports = t.p + "//m.360buyimg.com/babel/jfs/t3832/325/2990499421/8478/b79d1736/5873b383N42940561.jpg"
}]);