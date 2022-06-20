!function (e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var r = n[i] = {i: i, l: !1, exports: {}};
    return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
  }

  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, i) {
    t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: i})
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "/assets/", t(t.s = 1)
}([function (e, t) {
  e.exports = jQuery
}, function (e, t, n) {
  n(2), e.exports = n(26)
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: !0}), function (e) {
    var t = n(3), i = (n.n(t), n(4)), r = (n.n(i), n(5)), o = (n.n(r), n(6)), s = (n.n(o), n(8)), a = (n.n(s), n(9)),
      l = n(11), c = n(16), u = n(18), d = n(24), h = n(25),
      p = new a.a({common: l.a, home: c.a, isArticle: u.a, isVideo: d.a, isAudio: h.a});
    e(document).on("ready", function () {
      return p.loadEvents()
    })
  }.call(t, n(0))
}, function (e, t, n) {
  (function (t) {
    !function () {
      var n = function (e, i) {
        function r() {
          this.q = [], this.add = function (e) {
            this.q.push(e)
          };
          var e, t;
          this.call = function () {
            for (e = 0, t = this.q.length; e < t; e++) this.q[e].call()
          }
        }

        function o(e, t) {
          return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
        }

        function s(e, t) {
          if (e.resizedAttached) {
            if (e.resizedAttached) return void e.resizedAttached.add(t)
          } else e.resizedAttached = new r, e.resizedAttached.add(t);
          e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor";
          var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
            i = "position: absolute; left: 0; top: 0; transition: 0s;";
          e.resizeSensor.style.cssText = n, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + n + '"><div style="' + i + '"></div></div><div class="resize-sensor-shrink" style="' + n + '"><div style="' + i + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), {
            fixed: 1,
            absolute: 1
          }[o(e, "position")] || (e.style.position = "relative");
          var s, a, l = e.resizeSensor.childNodes[0], c = l.childNodes[0], u = e.resizeSensor.childNodes[1],
            d = (u.childNodes[0], function () {
              c.style.width = l.offsetWidth + 10 + "px", c.style.height = l.offsetHeight + 10 + "px", l.scrollLeft = l.scrollWidth, l.scrollTop = l.scrollHeight, u.scrollLeft = u.scrollWidth, u.scrollTop = u.scrollHeight, s = e.offsetWidth, a = e.offsetHeight
            });
          d();
          var h = function () {
            e.resizedAttached && e.resizedAttached.call()
          }, p = function (e, t, n) {
            e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
          }, f = function () {
            e.offsetWidth == s && e.offsetHeight == a || h(), d()
          };
          p(l, "scroll", f), p(u, "scroll", f)
        }

        var a = Object.prototype.toString.call(e),
          l = "[object Array]" === a || "[object NodeList]" === a || "[object HTMLCollection]" === a || void 0 !== t && e instanceof t || "undefined" != typeof Elements && e instanceof Elements;
        if (l) for (var c = 0, u = e.length; c < u; c++) s(e[c], i); else s(e, i);
        this.detach = function () {
          if (l) for (var t = 0, i = e.length; t < i; t++) n.detach(e[t]); else n.detach(e)
        }
      };
      n.detach = function (e) {
        e.resizeSensor && (e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached)
      }, void 0 !== e && void 0 !== e.exports ? e.exports = n : window.ResizeSensor = n
    }()
  }).call(t, n(0))
}, function (e, t, n) {
  (function (e) {/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */
    !function (e) {
      e.fn.theiaStickySidebar = function (t) {
        function n(t, n) {
          return !0 === t.initialized || !(e("body").width() < t.minWidth) && (i(t, n), !0)
        }

        function i(t, n) {
          t.initialized = !0, 0 === e("#theia-sticky-sidebar-stylesheet-" + t.namespace).length && e("head").append(e('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), n.each(function () {
            function n() {
              o.fixedScrollTop = 0, o.sidebar.css({"min-height": "1px"}), o.stickySidebar.css({
                position: "static",
                width: "",
                transform: "none"
              })
            }

            function i(t) {
              var n = t.height();
              return t.children().each(function () {
                n = Math.max(n, e(this).height())
              }), n
            }

            var o = {};
            if (o.sidebar = e(this), o.options = t || {}, o.container = e(o.options.containerSelector), 0 == o.container.length && (o.container = o.sidebar.parent()), o.sidebar.parents().css("-webkit-transform", "none"), o.sidebar.css({
                position: o.options.defaultPosition,
                overflow: "visible",
                "-webkit-box-sizing": "border-box",
                "-moz-box-sizing": "border-box",
                "box-sizing": "border-box"
              }), o.stickySidebar = o.sidebar.find(".theiaStickySidebar"), 0 == o.stickySidebar.length) {
              var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
              o.sidebar.find("script").filter(function (e, t) {
                return 0 === t.type.length || t.type.match(s)
              }).remove(), o.stickySidebar = e("<div>").addClass("theiaStickySidebar").append(o.sidebar.children()), o.sidebar.append(o.stickySidebar)
            }
            o.marginBottom = parseInt(o.sidebar.css("margin-bottom")), o.paddingTop = parseInt(o.sidebar.css("padding-top")), o.paddingBottom = parseInt(o.sidebar.css("padding-bottom"));
            var a = o.stickySidebar.offset().top, l = o.stickySidebar.outerHeight();
            o.stickySidebar.css("padding-top", 1), o.stickySidebar.css("padding-bottom", 1), a -= o.stickySidebar.offset().top, l = o.stickySidebar.outerHeight() - l - a, 0 == a ? (o.stickySidebar.css("padding-top", 0), o.stickySidebarPaddingTop = 0) : o.stickySidebarPaddingTop = 1, 0 == l ? (o.stickySidebar.css("padding-bottom", 0), o.stickySidebarPaddingBottom = 0) : o.stickySidebarPaddingBottom = 1, o.previousScrollTop = null, o.fixedScrollTop = 0, n(), o.onScroll = function (o) {
              if (o.stickySidebar.is(":visible")) {
                if (e("body").width() < o.options.minWidth) return void n();
                if (o.options.disableOnResponsiveLayouts && o.sidebar.outerWidth("none" == o.sidebar.css("float")) + 50 > o.container.width()) return void n();
                var s = e(document).scrollTop(), a = "static";
                if (s >= o.sidebar.offset().top + (o.paddingTop - o.options.additionalMarginTop)) {
                  var l, c = o.paddingTop + t.additionalMarginTop,
                    u = o.paddingBottom + o.marginBottom + t.additionalMarginBottom, d = o.sidebar.offset().top,
                    h = o.sidebar.offset().top + i(o.container), p = 0 + t.additionalMarginTop;
                  l = o.stickySidebar.outerHeight() + c + u < e(window).height() ? p + o.stickySidebar.outerHeight() : e(window).height() - o.marginBottom - o.paddingBottom - t.additionalMarginBottom;
                  var f = d - s + o.paddingTop, g = h - s - o.paddingBottom - o.marginBottom,
                    m = o.stickySidebar.offset().top - s, y = o.previousScrollTop - s;
                  "fixed" == o.stickySidebar.css("position") && "modern" == o.options.sidebarBehavior && (m += y), "stick-to-top" == o.options.sidebarBehavior && (m = t.additionalMarginTop), "stick-to-bottom" == o.options.sidebarBehavior && (m = l - o.stickySidebar.outerHeight()), m = y > 0 ? Math.min(m, p) : Math.max(m, l - o.stickySidebar.outerHeight()), m = Math.max(m, f), m = Math.min(m, g - o.stickySidebar.outerHeight());
                  var v = o.container.height() == o.stickySidebar.outerHeight();
                  a = !v && m == p || !v && m == l - o.stickySidebar.outerHeight() ? "fixed" : s + m - o.sidebar.offset().top - o.paddingTop <= t.additionalMarginTop ? "static" : "absolute"
                }
                if ("fixed" == a) {
                  var b = e(document).scrollLeft();
                  o.stickySidebar.css({
                    position: "fixed",
                    width: r(o.stickySidebar) + "px",
                    transform: "translateY(" + m + "px)",
                    left: o.sidebar.offset().left + parseInt(o.sidebar.css("padding-left")) - b + "px",
                    top: "0px"
                  })
                } else if ("absolute" == a) {
                  var k = {};
                  "absolute" != o.stickySidebar.css("position") && (k.position = "absolute", k.transform = "translateY(" + (s + m - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom) + "px)", k.top = "0px"), k.width = r(o.stickySidebar) + "px", k.left = "", o.stickySidebar.css(k)
                } else "static" == a && n();
                "static" != a && 1 == o.options.updateSidebarHeight && o.sidebar.css({"min-height": o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom}), o.previousScrollTop = s
              }
            }, o.onScroll(o), e(document).on("scroll." + o.options.namespace, function (e) {
              return function () {
                e.onScroll(e)
              }
            }(o)), e(window).on("resize." + o.options.namespace, function (e) {
              return function () {
                e.stickySidebar.css({position: "static"}), e.onScroll(e)
              }
            }(o)), "undefined" != typeof ResizeSensor && new ResizeSensor(o.stickySidebar[0], function (e) {
              return function () {
                e.onScroll(e)
              }
            }(o))
          })
        }

        function r(e) {
          var t;
          try {
            t = e[0].getBoundingClientRect().width
          } catch (e) {
          }
          return void 0 === t && (t = e.width()), t
        }

        var o = {
          containerSelector: "",
          additionalMarginTop: 0,
          additionalMarginBottom: 0,
          updateSidebarHeight: !0,
          minWidth: 0,
          disableOnResponsiveLayouts: !0,
          sidebarBehavior: "modern",
          defaultPosition: "relative",
          namespace: "TSS"
        };
        return t = e.extend(o, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, function (t, i) {
          n(t, i) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), e(document).on("scroll." + t.namespace, function (t, i) {
            return function (r) {
              n(t, i) && e(this).unbind(r)
            }
          }(t, i)), e(window).on("resize." + t.namespace, function (t, i) {
            return function (r) {
              n(t, i) && e(this).unbind(r)
            }
          }(t, i)))
        }(t, this), this
      }
    }(e)
  }).call(t, n(0))
}, function (e, t, n) {
  (function (e) {/*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */
    !function (e, t, n, i) {
      var r = e(t);
      e.fn.lazyload = function (i) {
        function o() {
          var t = 0;
          a.each(function () {
            var n = e(this);
            if (!l.skip_invisible || n.is(":visible")) if (e.abovethetop(this, l) || e.leftofbegin(this, l)) ; else if (e.belowthefold(this, l) || e.rightoffold(this, l)) {
              if (++t > l.failure_limit) return !1
            } else n.trigger("appear"), t = 0
          })
        }

        var s, a = this, l = {
          threshold: 0,
          failure_limit: 0,
          event: "scroll",
          effect: "show",
          container: t,
          data_attribute: "original",
          skip_invisible: !1,
          appear: null,
          load: null,
          placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        /*!
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2015 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.7
 *
 */
        return i && (void 0 !== i.failurelimit && (i.failure_limit = i.failurelimit, delete i.failurelimit), void 0 !== i.effectspeed && (i.effect_speed = i.effectspeed, delete i.effectspeed), e.extend(l, i)), s = void 0 === l.container || l.container === t ? r : e(l.container), 0 === l.event.indexOf("scroll") && s.bind(l.event, function () {
          return o()
        }), this.each(function () {
          var t = this, n = e(t);
          t.loaded = !1, void 0 !== n.attr("src") && !1 !== n.attr("src") || n.is("img") && n.attr("src", l.placeholder), n.one("appear", function () {
            if (!this.loaded) {
              if (l.appear) {
                var i = a.length;
                l.appear.call(t, i, l)
              }
              e("<img />").bind("load", function () {
                var i = n.attr("data-" + l.data_attribute);
                n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[l.effect](l.effect_speed), t.loaded = !0;
                var r = e.grep(a, function (e) {
                  return !e.loaded
                });
                if (a = e(r), l.load) {
                  var o = a.length;
                  l.load.call(t, o, l)
                }
              }).attr("src", n.attr("data-" + l.data_attribute))
            }
          }), 0 !== l.event.indexOf("scroll") && n.bind(l.event, function () {
            t.loaded || n.trigger("appear")
          })
        }), r.bind("resize", function () {
          o()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function (t) {
          t.originalEvent && t.originalEvent.persisted && a.each(function () {
            e(this).trigger("appear")
          })
        }), e(n).ready(function () {
          o()
        }), this
      }, e.belowthefold = function (n, i) {
        return (void 0 === i.container || i.container === t ? (t.innerHeight ? t.innerHeight : r.height()) + r.scrollTop() : e(i.container).offset().top + e(i.container).height()) <= e(n).offset().top - i.threshold
      }, e.rightoffold = function (n, i) {
        return (void 0 === i.container || i.container === t ? r.width() + r.scrollLeft() : e(i.container).offset().left + e(i.container).width()) <= e(n).offset().left - i.threshold
      }, e.abovethetop = function (n, i) {
        return (void 0 === i.container || i.container === t ? r.scrollTop() : e(i.container).offset().top) >= e(n).offset().top + i.threshold + e(n).height()
      }, e.leftofbegin = function (n, i) {
        return (void 0 === i.container || i.container === t ? r.scrollLeft() : e(i.container).offset().left) >= e(n).offset().left + i.threshold + e(n).width()
      }, e.inviewport = function (t, n) {
        return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
      }, e.extend(e.expr[":"], {
        "below-the-fold": function (t) {
          return e.belowthefold(t, {threshold: 0})
        }, "above-the-top": function (t) {
          return !e.belowthefold(t, {threshold: 0})
        }, "right-of-screen": function (t) {
          return e.rightoffold(t, {threshold: 0})
        }, "left-of-screen": function (t) {
          return !e.rightoffold(t, {threshold: 0})
        }, "in-viewport": function (t) {
          return e.inviewport(t, {threshold: 0})
        }, "above-the-fold": function (t) {
          return !e.belowthefold(t, {threshold: 0})
        }, "right-of-fold": function (t) {
          return e.rightoffold(t, {threshold: 0})
        }, "left-of-fold": function (t) {
          return !e.rightoffold(t, {threshold: 0})
        }
      })
    }(e, window, document)
  }).call(t, n(0))
}, function (e, t, n) {
  (function (e) {
    /**
     * ghostHunter - 0.3.5
     * Copyright (C) 2014 Jamal Neufeld (jamal@i11u.me)
     * MIT Licensed
     * @license
     */
    !function (e) {
      var t = n(7);
      e.fn.ghostHunter = function (t) {
        var n = e.extend({}, e.fn.ghostHunter.defaults, t);
        if (n.results) return r.init(this, n), r
      }, e.fn.ghostHunter.defaults = {
        resultsData: !1,
        onPageLoad: !1,
        onKeyUp: !1,
        result_template: "<a href='{{link}}'><p><h2>{{title}}</h2><h4>{{prettyPubDate}}</h4></p></a>",
        info_template: "<p>Number of posts found: {{amount}}</p>",
        displaySearchInfo: !0,
        zeroResultsInfo: !0,
        before: !1,
        onComplete: !1,
        includepages: !1,
        filterfields: !1
      };
      var i = function (e) {
        var t = new Date(e),
          n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return t.getDate() + " " + n[t.getMonth()] + " " + t.getFullYear()
      }, r = {
        isInit: !1, init: function (e, n) {
          var i = this;
          this.target = e, this.results = n.results, this.blogData = {}, this.result_template = n.result_template, this.info_template = n.info_template, this.zeroResultsInfo = n.zeroResultsInfo, this.displaySearchInfo = n.displaySearchInfo, this.before = n.before, this.onComplete = n.onComplete, this.includepages = n.includepages, this.filterfields = n.filterfields, this.index = t(function () {
            this.field("title", {boost: 10}), this.field("description"), this.field("link"), this.field("markdown", {boost: 5}), this.field("pubDate"), this.field("tag"), this.ref("id")
          }), n.onPageLoad ? i.loadAPI() : e.focus(function () {
            i.loadAPI()
          }), e.closest("form").submit(function (t) {
            t.preventDefault(), i.find(e.val())
          }), n.onKeyUp && e.keyup(function () {
            i.find(e.val())
          })
        }, loadAPI: function () {
          if (this.isInit) return !1;
          var t = this.index, n = this.blogData;
          obj = {
            limit: "all",
            include: "tags"
          }, this.includepages && (obj.filter = "(page:true,page:false)"), e.get(ghost.url.api("posts", obj)).done(function (e) {
            searchData = e.posts, searchData.forEach(function (e) {
              var r = e.tags.map(function (e) {
                return e.name
              });
              null == e.meta_description && (e.meta_description = "");
              var o = r.join(", ");
              o.length < 1 && (o = "undefined");
              var s = {
                id: String(e.id),
                title: String(e.title),
                description: String(e.meta_description),
                markdown: String(e.markdown),
                pubDate: String(e.created_at),
                tag: o,
                link: String(e.url)
              };
              s.prettyPubDate = i(s.pubDate);
              var a = i(s.pubDate);
              t.add(s), n[e.id] = {title: e.title, description: e.meta_description, pubDate: a, link: e.url}
            })
          }), this.isInit = !0
        }, find: function (t) {
          var n = this, i = this.index.search(t), r = e(this.results), o = [];
          r.empty(), this.before && this.before(), (this.zeroResultsInfo || i.length > 0) && this.displaySearchInfo && r.append(this.format(this.info_template, {amount: i.length}));
          for (var s = 0; s < i.length; s++) {
            var a = i[s].ref, l = n.blogData[a];
            r.append(n.format(n.result_template, l)), o.push(l)
          }
          this.onComplete && this.onComplete(o)
        }, clear: function () {
          e(this.results).empty(), this.target.val("")
        }, format: function (e, t) {
          return e.replace(/{{([^{}]*)}}/g, function (e, n) {
            var i = t[n];
            return "string" == typeof i || "number" == typeof i ? i : e
          })
        }
      }
    }(e)
  }).call(t, n(0))
}, function (e, t, n) {
  var i, r;
  !function () {
    var o = function (e) {
      var t = new o.Index;
      return t.pipeline.add(o.trimmer, o.stopWordFilter, o.stemmer), e && e.call(t, t), t
    };
    o.version = "0.7.2", /*!
 * lunr.utils
 * Copyright (C) 2016 Oliver Nightingale
 */
      o.utils = {}, o.utils.warn = function (e) {
      return function (t) {
        e.console && console.warn && console.warn(t)
      }
    }(this), o.utils.asString = function (e) {
      return void 0 === e || null === e ? "" : e.toString()
    }, /*!
 * lunr.EventEmitter
 * Copyright (C) 2016 Oliver Nightingale
 */
      o.EventEmitter = function () {
        this.events = {}
      }, o.EventEmitter.prototype.addListener = function () {
      var e = Array.prototype.slice.call(arguments), t = e.pop(), n = e;
      if ("function" != typeof t) throw new TypeError("last argument must be a function");
      n.forEach(function (e) {
        this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t)
      }, this)
    }, o.EventEmitter.prototype.removeListener = function (e, t) {
      if (this.hasHandler(e)) {
        var n = this.events[e].indexOf(t);
        this.events[e].splice(n, 1), this.events[e].length || delete this.events[e]
      }
    }, o.EventEmitter.prototype.emit = function (e) {
      if (this.hasHandler(e)) {
        var t = Array.prototype.slice.call(arguments, 1);
        this.events[e].forEach(function (e) {
          e.apply(void 0, t)
        })
      }
    }, o.EventEmitter.prototype.hasHandler = function (e) {
      return e in this.events
    }, /*!
 * lunr.tokenizer
 * Copyright (C) 2016 Oliver Nightingale
 */
      o.tokenizer = function (e) {
        if (!arguments.length || null == e || void 0 == e) return [];
        if (Array.isArray(e)) return e.map(function (e) {
          return o.utils.asString(e).toLowerCase()
        });
        var t = o.tokenizer.seperator || o.tokenizer.separator;
        return e.toString().trim().toLowerCase().split(t)
      }, o.tokenizer.seperator = !1, o.tokenizer.separator = /[\s\-]+/, o.tokenizer.load = function (e) {
      var t = this.registeredFunctions[e];
      if (!t) throw new Error("Cannot load un-registered function: " + e);
      return t
    }, o.tokenizer.label = "default", o.tokenizer.registeredFunctions = {default: o.tokenizer}, o.tokenizer.registerFunction = function (e, t) {
      t in this.registeredFunctions && o.utils.warn("Overwriting existing tokenizer: " + t), e.label = t, this.registeredFunctions[t] = e
    }, /*!
 * lunr.Pipeline
 * Copyright (C) 2016 Oliver Nightingale
 */
      o.Pipeline = function () {
        this._stack = []
      }, o.Pipeline.registeredFunctions = {}, o.Pipeline.registerFunction = function (e, t) {
      t in this.registeredFunctions && o.utils.warn("Overwriting existing registered function: " + t), e.label = t, o.Pipeline.registeredFunctions[e.label] = e
    }, o.Pipeline.warnIfFunctionNotRegistered = function (e) {
      e.label && e.label in this.registeredFunctions || o.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e)
    }, o.Pipeline.load = function (e) {
      var t = new o.Pipeline;
      return e.forEach(function (e) {
        var n = o.Pipeline.registeredFunctions[e];
        if (!n) throw new Error("Cannot load un-registered function: " + e);
        t.add(n)
      }), t
    }, o.Pipeline.prototype.add = function () {
      Array.prototype.slice.call(arguments).forEach(function (e) {
        o.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e)
      }, this)
    }, o.Pipeline.prototype.after = function (e, t) {
      o.Pipeline.warnIfFunctionNotRegistered(t);
      var n = this._stack.indexOf(e);
      if (-1 == n) throw new Error("Cannot find existingFn");
      n += 1, this._stack.splice(n, 0, t)
    }, o.Pipeline.prototype.before = function (e, t) {
      o.Pipeline.warnIfFunctionNotRegistered(t);
      var n = this._stack.indexOf(e);
      if (-1 == n) throw new Error("Cannot find existingFn");
      this._stack.splice(n, 0, t)
    }, o.Pipeline.prototype.remove = function (e) {
      var t = this._stack.indexOf(e);
      -1 != t && this._stack.splice(t, 1)
    }, o.Pipeline.prototype.run = function (e) {
      for (var t = [], n = e.length, i = this._stack.length, r = 0; r < n; r++) {
        for (var o = e[r], s = 0; s < i && (void 0 !== (o = this._stack[s](o, r, e)) && "" !== o); s++) ;
        void 0 !== o && "" !== o && t.push(o)
      }
      return t
    }, o.Pipeline.prototype.reset = function () {
      this._stack = []
    }, o.Pipeline.prototype.toJSON = function () {
      return this._stack.map(function (e) {
        return o.Pipeline.warnIfFunctionNotRegistered(e), e.label
      })
    }, /*!
 * lunr.Vector
 * Copyright (C) 2016 Oliver Nightingale
 */
      o.Vector = function () {
        this._magnitude = null, this.list = void 0, this.length = 0
      }, o.Vector.Node = function (e, t, n) {
      this.idx = e, this.val = t, this.next = n
    }, o.Vector.prototype.insert = function (e, t) {
      this._magnitude = void 0;
      var n = this.list;
      if (!n) return this.list = new o.Vector.Node(e, t, n), this.length++;
      if (e < n.idx) return this.list = new o.Vector.Node(e, t, n), this.length++;
      for (var i = n, r = n.next; void 0 != r;) {
        if (e < r.idx) return i.next = new o.Vector.Node(e, t, r), this.length++;
        i = r, r = r.next
      }
      return i.next = new o.Vector.Node(e, t, r), this.length++
    }, o.Vector.prototype.magnitude = function () {
      if (this._magnitude) return this._magnitude;
      for (var e, t = this.list, n = 0; t;) e = t.val, n += e * e, t = t.next;
      return this._magnitude = Math.sqrt(n)
    }, o.Vector.prototype.dot = function (e) {
      for (var t = this.list, n = e.list, i = 0; t && n;) t.idx < n.idx ? t = t.next : t.idx > n.idx ? n = n.next : (i += t.val * n.val, t = t.next, n = n.next);
      return i
    }, o.Vector.prototype.similarity = function (e) {
      return this.dot(e) / (this.magnitude() * e.magnitude())
    }, /*!
 * lunr.SortedSet
 * Copyright (C) 2016 Oliver Nightingale
 */
      o.SortedSet = function () {
        this.length = 0, this.elements = []
      }, o.SortedSet.load = function (e) {
      var t = new this;
      return t.elements = e, t.length = e.length, t
    }, o.SortedSet.prototype.add = function () {
      var e, t;
      for (e = 0; e < arguments.length; e++) t = arguments[e], ~this.indexOf(t) || this.elements.splice(this.locationFor(t), 0, t);
      this.length = this.elements.length
    }, o.SortedSet.prototype.toArray = function () {
      return this.elements.slice()
    }, o.SortedSet.prototype.map = function (e, t) {
      return this.elements.map(e, t)
    }, o.SortedSet.prototype.forEach = function (e, t) {
      return this.elements.forEach(e, t)
    }, o.SortedSet.prototype.indexOf = function (e) {
      for (var t = 0, n = this.elements.length, i = n - t, r = t + Math.floor(i / 2), o = this.elements[r]; i > 1;) {
        if (o === e) return r;
        o < e && (t = r), o > e && (n = r), i = n - t, r = t + Math.floor(i / 2), o = this.elements[r]
      }
      return o === e ? r : -1
    }, o.SortedSet.prototype.locationFor = function (e) {
      for (var t = 0, n = this.elements.length, i = n - t, r = t + Math.floor(i / 2), o = this.elements[r]; i > 1;) o < e && (t = r), o > e && (n = r), i = n - t, r = t + Math.floor(i / 2), o = this.elements[r];
      return o > e ? r : o < e ? r + 1 : void 0
    }, o.SortedSet.prototype.intersect = function (e) {
      for (var t = new o.SortedSet, n = 0, i = 0, r = this.length, s = e.length, a = this.elements, l = e.elements; ;) {
        if (n > r - 1 || i > s - 1) break;
        a[n] !== l[i] ? a[n] < l[i] ? n++ : a[n] > l[i] && i++ : (t.add(a[n]), n++, i++)
      }
      return t
    }, o.SortedSet.prototype.clone = function () {
      var e = new o.SortedSet;
      return e.elements = this.toArray(), e.length = e.elements.length, e
    }, o.SortedSet.prototype.union = function (e) {
      var t, n, i;
      this.length >= e.length ? (t = this, n = e) : (t = e, n = this), i = t.clone();
      for (var r = 0, o = n.toArray(); r < o.length; r++) i.add(o[r]);
      return i
    }, o.SortedSet.prototype.toJSON = function () {
      return this.toArray()
    }, /*!
 * lunr.Index
 * Copyright (C) 2016 Oliver Nightingale
 */
      o.Index = function () {
        this._fields = [], this._ref = "id", this.pipeline = new o.Pipeline, this.documentStore = new o.Store, this.tokenStore = new o.TokenStore, this.corpusTokens = new o.SortedSet, this.eventEmitter = new o.EventEmitter, this.tokenizerFn = o.tokenizer, this._idfCache = {}, this.on("add", "remove", "update", function () {
          this._idfCache = {}
        }.bind(this))
      }, o.Index.prototype.on = function () {
      var e = Array.prototype.slice.call(arguments);
      return this.eventEmitter.addListener.apply(this.eventEmitter, e)
    }, o.Index.prototype.off = function (e, t) {
      return this.eventEmitter.removeListener(e, t)
    }, o.Index.load = function (e) {
      e.version !== o.version && o.utils.warn("version mismatch: current " + o.version + " importing " + e.version);
      var t = new this;
      return t._fields = e.fields, t._ref = e.ref, t.tokenizer(o.tokenizer.load(e.tokenizer)), t.documentStore = o.Store.load(e.documentStore), t.tokenStore = o.TokenStore.load(e.tokenStore), t.corpusTokens = o.SortedSet.load(e.corpusTokens), t.pipeline = o.Pipeline.load(e.pipeline), t
    }, o.Index.prototype.field = function (e, t) {
      var t = t || {}, n = {name: e, boost: t.boost || 1};
      return this._fields.push(n), this
    }, o.Index.prototype.ref = function (e) {
      return this._ref = e, this
    }, o.Index.prototype.tokenizer = function (e) {
      return e.label && e.label in o.tokenizer.registeredFunctions || o.utils.warn("Function is not a registered tokenizer. This may cause problems when serialising the index"), this.tokenizerFn = e, this
    }, o.Index.prototype.add = function (e, t) {
      var n = {}, i = new o.SortedSet, r = e[this._ref], t = void 0 === t || t;
      this._fields.forEach(function (t) {
        var r = this.pipeline.run(this.tokenizerFn(e[t.name]));
        n[t.name] = r;
        for (var o = 0; o < r.length; o++) {
          var s = r[o];
          i.add(s), this.corpusTokens.add(s)
        }
      }, this), this.documentStore.set(r, i);
      for (var s = 0; s < i.length; s++) {
        for (var a = i.elements[s], l = 0, c = 0; c < this._fields.length; c++) {
          var u = this._fields[c], d = n[u.name], h = d.length;
          if (h) {
            for (var p = 0, f = 0; f < h; f++) d[f] === a && p++;
            l += p / h * u.boost
          }
        }
        this.tokenStore.add(a, {ref: r, tf: l})
      }
      t && this.eventEmitter.emit("add", e, this)
    }, o.Index.prototype.remove = function (e, t) {
      var n = e[this._ref], t = void 0 === t || t;
      if (this.documentStore.has(n)) {
        var i = this.documentStore.get(n);
        this.documentStore.remove(n), i.forEach(function (e) {
          this.tokenStore.remove(e, n)
        }, this), t && this.eventEmitter.emit("remove", e, this)
      }
    }, o.Index.prototype.update = function (e, t) {
      var t = void 0 === t || t;
      this.remove(e, !1), this.add(e, !1), t && this.eventEmitter.emit("update", e, this)
    }, o.Index.prototype.idf = function (e) {
      var t = "@" + e;
      if (Object.prototype.hasOwnProperty.call(this._idfCache, t)) return this._idfCache[t];
      var n = this.tokenStore.count(e), i = 1;
      return n > 0 && (i = 1 + Math.log(this.documentStore.length / n)), this._idfCache[t] = i
    }, o.Index.prototype.search = function (e) {
      var t = this.pipeline.run(this.tokenizerFn(e)), n = new o.Vector, i = [],
        r = this._fields.reduce(function (e, t) {
          return e + t.boost
        }, 0);
      return t.some(function (e) {
        return this.tokenStore.has(e)
      }, this) ? (t.forEach(function (e, t, s) {
        var a = 1 / s.length * this._fields.length * r, l = this, c = this.tokenStore.expand(e).reduce(function (t, i) {
          var r = l.corpusTokens.indexOf(i), s = l.idf(i), c = 1, u = new o.SortedSet;
          if (i !== e) {
            var d = Math.max(3, i.length - e.length);
            c = 1 / Math.log(d)
          }
          r > -1 && n.insert(r, a * s * c);
          for (var h = l.tokenStore.get(i), p = Object.keys(h), f = p.length, g = 0; g < f; g++) u.add(h[p[g]].ref);
          return t.union(u)
        }, new o.SortedSet);
        i.push(c)
      }, this), i.reduce(function (e, t) {
        return e.intersect(t)
      }).map(function (e) {
        return {ref: e, score: n.similarity(this.documentVector(e))}
      }, this).sort(function (e, t) {
        return t.score - e.score
      })) : []
    }, o.Index.prototype.documentVector = function (e) {
      for (var t = this.documentStore.get(e), n = t.length, i = new o.Vector, r = 0; r < n; r++) {
        var s = t.elements[r], a = this.tokenStore.get(s)[e].tf, l = this.idf(s);
        i.insert(this.corpusTokens.indexOf(s), a * l)
      }
      return i
    }, o.Index.prototype.toJSON = function () {
      return {
        version: o.version,
        fields: this._fields,
        ref: this._ref,
        tokenizer: this.tokenizerFn.label,
        documentStore: this.documentStore.toJSON(),
        tokenStore: this.tokenStore.toJSON(),
        corpusTokens: this.corpusTokens.toJSON(),
        pipeline: this.pipeline.toJSON()
      }
    }, o.Index.prototype.use = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      t.unshift(this), e.apply(this, t)
    }, /*!
 * lunr.Store
 * Copyright (C) 2016 Oliver Nightingale
 */
      o.Store = function () {
        this.store = {}, this.length = 0
      }, o.Store.load = function (e) {
      var t = new this;
      return t.length = e.length, t.store = Object.keys(e.store).reduce(function (t, n) {
        return t[n] = o.SortedSet.load(e.store[n]), t
      }, {}), t
    }, o.Store.prototype.set = function (e, t) {
      this.has(e) || this.length++, this.store[e] = t
    }, o.Store.prototype.get = function (e) {
      return this.store[e]
    }, o.Store.prototype.has = function (e) {
      return e in this.store
    }, o.Store.prototype.remove = function (e) {
      this.has(e) && (delete this.store[e], this.length--)
    }, o.Store.prototype.toJSON = function () {
      return {store: this.store, length: this.length}
    }, /*!
 * lunr.stemmer
 * Copyright (C) 2016 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */
      o.stemmer = function () {
        var e = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log"
          }, t = {icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: ""}, n = "[aeiouy]",
          i = "[^aeiou][^aeiouy]*", r = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),
          o = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),
          s = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),
          a = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"), l = /^(.+?)(ss|i)es$/, c = /^(.+?)([^s])s$/,
          u = /^(.+?)eed$/, d = /^(.+?)(ed|ing)$/, h = /.$/, p = /(at|bl|iz)$/, f = new RegExp("([^aeiouylsz])\\1$"),
          g = new RegExp("^" + i + n + "[^aeiouwxy]$"), m = /^(.+?[^aeiou])y$/,
          y = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
          v = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
          b = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
          k = /^(.+?)(s|t)(ion)$/, w = /^(.+?)e$/, S = /ll$/, x = new RegExp("^" + i + n + "[^aeiouwxy]$");
        return function (n) {
          var i, C, A, T, P, E, _;
          if (n.length < 3) return n;
          if (A = n.substr(0, 1), "y" == A && (n = A.toUpperCase() + n.substr(1)), T = l, P = c, T.test(n) ? n = n.replace(T, "$1$2") : P.test(n) && (n = n.replace(P, "$1$2")), T = u, P = d, T.test(n)) {
            var z = T.exec(n);
            T = r, T.test(z[1]) && (T = h, n = n.replace(T, ""))
          } else if (P.test(n)) {
            var z = P.exec(n);
            i = z[1], P = a, P.test(i) && (n = i, P = p, E = f, _ = g, P.test(n) ? n += "e" : E.test(n) ? (T = h, n = n.replace(T, "")) : _.test(n) && (n += "e"))
          }
          if (T = m, T.test(n)) {
            var z = T.exec(n);
            i = z[1], n = i + "i"
          }
          if (T = y, T.test(n)) {
            var z = T.exec(n);
            i = z[1], C = z[2], T = r, T.test(i) && (n = i + e[C])
          }
          if (T = v, T.test(n)) {
            var z = T.exec(n);
            i = z[1], C = z[2], T = r, T.test(i) && (n = i + t[C])
          }
          if (T = b, P = k, T.test(n)) {
            var z = T.exec(n);
            i = z[1], T = o, T.test(i) && (n = i)
          } else if (P.test(n)) {
            var z = P.exec(n);
            i = z[1] + z[2], P = o, P.test(i) && (n = i)
          }
          if (T = w, T.test(n)) {
            var z = T.exec(n);
            i = z[1], T = o, P = s, E = x, (T.test(i) || P.test(i) && !E.test(i)) && (n = i)
          }
          return T = S, P = o, T.test(n) && P.test(n) && (T = h, n = n.replace(T, "")), "y" == A && (n = A.toLowerCase() + n.substr(1)), n
        }
      }(), o.Pipeline.registerFunction(o.stemmer, "stemmer"), /*!
 * lunr.stopWordFilter
 * Copyright (C) 2016 Oliver Nightingale
 */
      o.generateStopWordFilter = function (e) {
        var t = e.reduce(function (e, t) {
          return e[t] = t, e
        }, {});
        return function (e) {
          if (e && t[e] !== e) return e
        }
      }, o.stopWordFilter = o.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]), o.Pipeline.registerFunction(o.stopWordFilter, "stopWordFilter"), /*!
 * lunr.trimmer
 * Copyright (C) 2016 Oliver Nightingale
 */
      o.trimmer = function (e) {
        return e.replace(/^\W+/, "").replace(/\W+$/, "")
      }, o.Pipeline.registerFunction(o.trimmer, "trimmer"), /*!
 * lunr.stemmer
 * Copyright (C) 2016 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */
      o.TokenStore = function () {
        this.root = {docs: {}}, this.length = 0
      }, o.TokenStore.load = function (e) {
      var t = new this;
      return t.root = e.root, t.length = e.length, t
    }, o.TokenStore.prototype.add = function (e, t, n) {
      var n = n || this.root, i = e.charAt(0), r = e.slice(1);
      return i in n || (n[i] = {docs: {}}), 0 === r.length ? (n[i].docs[t.ref] = t, void(this.length += 1)) : this.add(r, t, n[i])
    }, o.TokenStore.prototype.has = function (e) {
      if (!e) return !1;
      for (var t = this.root, n = 0; n < e.length; n++) {
        if (!t[e.charAt(n)]) return !1;
        t = t[e.charAt(n)]
      }
      return !0
    }, o.TokenStore.prototype.getNode = function (e) {
      if (!e) return {};
      for (var t = this.root, n = 0; n < e.length; n++) {
        if (!t[e.charAt(n)]) return {};
        t = t[e.charAt(n)]
      }
      return t
    }, o.TokenStore.prototype.get = function (e, t) {
      return this.getNode(e, t).docs || {}
    }, o.TokenStore.prototype.count = function (e, t) {
      return Object.keys(this.get(e, t)).length
    }, o.TokenStore.prototype.remove = function (e, t) {
      if (e) {
        for (var n = this.root, i = 0; i < e.length; i++) {
          if (!(e.charAt(i) in n)) return;
          n = n[e.charAt(i)]
        }
        delete n.docs[t]
      }
    }, o.TokenStore.prototype.expand = function (e, t) {
      var n = this.getNode(e), i = n.docs || {}, t = t || [];
      return Object.keys(i).length && t.push(e), Object.keys(n).forEach(function (n) {
        "docs" !== n && t.concat(this.expand(e + n, t))
      }, this), t
    }, o.TokenStore.prototype.toJSON = function () {
      return {root: this.root, length: this.length}
    }, function (o, s) {
      i = s, void 0 !== (r = "function" == typeof i ? i.call(t, n, t, e) : i) && (e.exports = r)
    }(0, function () {
      return o
    })
  }()
}, function (e, t, n) {
  (function (e) {
    !function () {
      function t() {
        void 0 !== o && a <= o && c() ? (e.ajax({
          type: "GET",
          url: i + "page/" + a,
          dataType: "html",
          beforeSend: function () {
            n.off("scroll", l), r.text("Loading...")
          },
          success: function (t) {
            var i = e(".feed-entry-wrapper", t);
            e(".feed-entry-content").append(i), r.html('Load more <i class="i-keyboard_arrow_down'), a++, e(".entry-lazy").lazyload(), n.on("scroll", l)
          }
        }), s = !1) : r.remove()
      }

      var n = e(window), i = e("link[rel=canonical]").attr("href"), r = e(".mapache-load-more"),
        o = r.attr("data-page-total"), s = !1, a = 2, l = function () {
          return s = !0
        }, c = function () {
          var e = n.scrollTop() + window.innerHeight, t = document.body.clientHeight - 2 * window.innerHeight;
          return !0 === s && e > t
        };
      n.on("scroll", l), setInterval(function () {
        t()
      }, 500)
    }()
  }).call(t, n(0))
}, function (e, t, n) {
  "use strict";
  var i = n(10), r = function (e) {
    this.routes = e
  };
  r.prototype.fire = function (e, t, n) {
    void 0 === t && (t = "init"), "" !== e && this.routes[e] && "function" == typeof this.routes[e][t] && this.routes[e][t](n)
  }, r.prototype.loadEvents = function () {
    var e = this;
    this.fire("common"), document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(i.a).forEach(function (t) {
      e.fire(t), e.fire(t, "finalize")
    }), this.fire("common", "finalize")
  }, t.a = r
}, function (e, t, n) {
  "use strict";
  t.a = function (e) {
    return "" + e.charAt(0).toLowerCase() + e.replace(/[\W_]/g, "|").split("|").map(function (e) {
      return "" + e.charAt(0).toUpperCase() + e.slice(1)
    }).join("").slice(1)
  }
}, function (e, t, n) {
  "use strict";
  (function (e) {
    function i() {
      l.on("scroll", function () {
        var t = l.scrollTop(), n = e("#cover").height() - c.height(), i = (n - t) / n;
        t >= n ? c.addClass("toolbar-shadow") : c.removeClass("toolbar-shadow"), e(".cover-wrap").css("opacity", i), e(this).scrollTop() > 100 ? h.addClass("visible") : h.removeClass("visible")
      })
    }

    var r = n(12), o = n(13), s = n(14), a = n(15), l = e(window), c = e("#header"),
      u = e("body").attr("data-page-url"), d = e(".search-field"), h = e(".scroll_top");
    t.a = {
      init: function () {
        "undefined" != typeof followSocialMedia && Object(o.a)(followSocialMedia), e(".entry-lazy").lazyload(), e(".cover-lazy").lazyload({effect: "fadeIn"}), e(".sidebar-lazy").lazyload()
      }, finalize: function () {
        e("#nav-mob-toggle").on("click", function (t) {
          t.preventDefault(), e("body").toggleClass("is-showNavMob")
        }), e("#search-mob-toggle").on("click", function (e) {
          e.preventDefault(), c.toggleClass("is-showSearchMob"), d.focus()
        }), e(".scrolltop").on("click", function (t) {
          t.preventDefault(), e("html, body").animate({scrollTop: e(e(this).attr("href")).offset().top - 50}, 500, "linear")
        }), h.on("click", function (t) {
          t.preventDefault(), e("html, body").animate({scrollTop: 0}, 500)
        }), e(".sidebar-sticky").theiaStickySidebar({additionalMarginTop: 66}), "undefined" != typeof twitterUserName && "undefined" != typeof twitterNumber && Object(a.a)(twitterUserName, twitterNumber), "undefined" != typeof fansPageName && Object(s.a)(fansPageName), Object(r.a)(c, d, u), i()
      }
    }
  }).call(t, n(0))
}, function (e, t, n) {
  "use strict";
  (function (e) {
    t.a = function (t, n, i) {
      n.focus(function () {
        t.addClass("is-showSearch"), e(".search-popout").removeClass("closed")
      }).blur(function () {
        setTimeout(function () {
          t.removeClass("is-showSearch"), e(".search-popout").addClass("closed")
        }, 200)
      }).keyup(function () {
        e(".search-suggest-results").css("display", "block")
      }).ghostHunter({
        results: "#search-results",
        zeroResultsInfo: !1,
        displaySearchInfo: !1,
        result_template: '<a href="' + i + '{{link}}">{{title}}</a>',
        onKeyUp: !0
      })
    }
  }).call(t, n(0))
}, function (e, t, n) {
  "use strict";
  (function (e) {
    t.a = function (t) {
      var n = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \+\.-]*)*\/?$/;
      return e.each(t, function (t, i) {
        if ("string" == typeof i && n.test(i)) {
          var r = '<a title="Find me on ' + t + '" href="' + i + '" target="_blank" class="i-' + t.toLowerCase() + '"></a>';
          e(".social_box").append(r)
        }
      })
    }
  }).call(t, n(0))
}, function (e, t, n) {
  "use strict";
  (function (e) {
    t.a = function (t) {
      e(".widget-facebook").parent().removeClass("u-hide");
      var n = '<div class="fb-page" data-href="https://www.facebook.com/' + t + '" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/' + t + '" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/' + t + '">GodoFredo</a></blockquote></div>';
      !1 === e("#fb-root").is("div") && e("body").append("<div id=\"fb-root\"></div>\n  <script>(function(d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s); js.id = id;\n    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, 'script', 'facebook-jssdk'));<\/script>"), e(".widget-facebook").html(n)
    }
  }).call(t, n(0))
}, function (e, t, n) {
  "use strict";
  (function (e) {
    t.a = function (t, n) {
      e(".widget-twitter").parent().removeClass("u-hide");
      var i = '<a class="twitter-timeline"  href="https://twitter.com/' + t + '" data-chrome="nofooter noborders noheader" data-tweet-limit="' + n + '">Tweets by ' + t + '</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"><\/script>';
      e(".widget-twitter").html(i)
    }
  }).call(t, n(0))
}, function (e, t, n) {
  "use strict";
  (function (e) {
    var i = n(17), r = n.n(i);
    t.a = {
      init: function () {
        if ("undefined" != typeof homeTitle && e("#title-home").html(homeTitle), "undefined" != typeof homeTitleTyped) {
          e("#title-home").addClass("u-hide"), e("#home-typed").removeClass("u-hide");
          new r.a("#home-title-typed", {
            strings: homeTitleTyped,
            typeSpeed: 100,
            loop: !0,
            startDelay: 1e3,
            backDelay: 1e3
          })
        }
        "undefined" != typeof homeBtnTitle && "undefined" != typeof homeBtnURL && e("#btn-home").attr("href", homeBtnURL).html(homeBtnTitle)
      }
    }
  }).call(t, n(0))
}, function (e, t, n) {/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.6
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
  !function (t, n) {
    e.exports = n()
  }(0, function () {
    return function (e) {
      function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {exports: {}, id: i, loaded: !1};
        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
      }

      var n = {};
      return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
      "use strict";

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      Object.defineProperty(t, "__esModule", {value: !0});
      var r = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
          }
        }

        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(), o = n(1), s = n(3), a = function () {
        function e(t, n) {
          i(this, e), o.initializer.load(this, n, t), this.begin()
        }

        return r(e, [{
          key: "toggle", value: function () {
            this.pause.status ? this.start() : this.stop()
          }
        }, {
          key: "stop", value: function () {
            this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
          }
        }, {
          key: "start", value: function () {
            this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
          }
        }, {
          key: "destroy", value: function () {
            this.reset(!1), this.options.onDestroy(this)
          }
        }, {
          key: "reset", value: function () {
            var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
            clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin())
          }
        }, {
          key: "begin", value: function () {
            var e = this;
            this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
              e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
            }, this.startDelay)
          }
        }, {
          key: "typewrite", value: function (e, t) {
            var n = this;
            this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
            var i = this.humanizer(this.typeSpeed), r = 1;
            if (!0 === this.pause.status) return void this.setPauseStatus(e, t, !0);
            this.timeout = setTimeout(function () {
              t = s.htmlParser.typeHtmlChars(e, t, n);
              var i = 0, o = e.substr(t);
              if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                var a = 1;
                o = /\d+/.exec(o)[0], a += o.length, i = parseInt(o), n.temporaryPause = !0, n.options.onTypingPaused(n.arrayPos, n), e = e.substring(0, t) + e.substring(t + a), n.toggleBlinking(!0)
              }
              if ("`" === o.charAt(0)) {
                for (; "`" !== e.substr(t + r).charAt(0) && (r++, !(t + r > e.length));) ;
                var l = e.substring(0, t), c = e.substring(l.length + 1, t + r), u = e.substring(t + r + 1);
                e = l + c + u, r--
              }
              n.timeout = setTimeout(function () {
                n.toggleBlinking(!1), t === e.length ? n.doneTyping(e, t) : n.keepTyping(e, t, r), n.temporaryPause && (n.temporaryPause = !1, n.options.onTypingResumed(n.arrayPos, n))
              }, i)
            }, i)
          }
        }, {
          key: "keepTyping", value: function (e, t, n) {
            0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), t += n;
            var i = e.substr(0, t);
            this.replaceText(i), this.typewrite(e, t)
          }
        }, {
          key: "doneTyping", value: function (e, t) {
            var n = this;
            this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
              n.backspace(e, t)
            }, this.backDelay))
          }
        }, {
          key: "backspace", value: function (e, t) {
            var n = this;
            if (!0 === this.pause.status) return void this.setPauseStatus(e, t, !0);
            if (this.fadeOut) return this.initFadeOut();
            this.toggleBlinking(!1);
            var i = this.humanizer(this.backSpeed);
            this.timeout = setTimeout(function () {
              t = s.htmlParser.backSpaceHtmlChars(e, t, n);
              var i = e.substr(0, t);
              if (n.replaceText(i), n.smartBackspace) {
                var r = n.strings[n.arrayPos + 1];
                r && i === r.substr(0, t) ? n.stopNum = t : n.stopNum = 0
              }
              t > n.stopNum ? (t--, n.backspace(e, t)) : t <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.options.onLastStringBackspaced(), n.shuffleStringsIfNeeded(), n.begin()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], t))
            }, i)
          }
        }, {
          key: "complete", value: function () {
            this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
          }
        }, {
          key: "setPauseStatus", value: function (e, t, n) {
            this.pause.typewrite = n, this.pause.curString = e, this.pause.curStrPos = t
          }
        }, {
          key: "toggleBlinking", value: function (e) {
            if (this.cursor && !this.pause.status && this.cursorBlinking !== e) {
              this.cursorBlinking = e;
              var t = e ? "infinite" : 0;
              this.cursor.style.animationIterationCount = t
            }
          }
        }, {
          key: "humanizer", value: function (e) {
            return Math.round(Math.random() * e / 2) + e
          }
        }, {
          key: "shuffleStringsIfNeeded", value: function () {
            this.shuffle && (this.sequence = this.sequence.sort(function () {
              return Math.random() - .5
            }))
          }
        }, {
          key: "initFadeOut", value: function () {
            var e = this;
            return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
              e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
            }, this.fadeOutDelay)
          }
        }, {
          key: "replaceText", value: function (e) {
            this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
          }
        }, {
          key: "bindFocusEvents", value: function () {
            var e = this;
            this.isInput && (this.el.addEventListener("focus", function (t) {
              e.stop()
            }), this.el.addEventListener("blur", function (t) {
              e.el.value && 0 !== e.el.value.length || e.start()
            }))
          }
        }, {
          key: "insertCursor", value: function () {
            this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
          }
        }]), e
      }();
      t.default = a, e.exports = t.default
    }, function (e, t, n) {
      "use strict";

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      Object.defineProperty(t, "__esModule", {value: !0});
      var r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
      }, o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
          }
        }

        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(), s = n(2), a = function (e) {
        return e && e.__esModule ? e : {default: e}
      }(s), l = function () {
        function e() {
          i(this, e)
        }

        return o(e, [{
          key: "load", value: function (e, t, n) {
            if (e.el = "string" == typeof n ? document.querySelector(n) : n, e.options = r({}, a.default, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function (e) {
                return e.trim()
              }), "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement, e.stringsElement) {
              e.strings = [], e.stringsElement.style.display = "none";
              var i = Array.prototype.slice.apply(e.stringsElement.children), o = i.length;
              if (o) for (var s = 0; s < o; s += 1) {
                var l = i[s];
                e.strings.push(l.innerHTML.trim())
              }
            }
            e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
              status: !1,
              typewrite: !0,
              curString: "",
              curStrPos: 0
            }, e.typingComplete = !1;
            for (var s in e.strings) e.sequence[s] = s;
            e.currentElContent = this.getCurrentElContent(e), e.autoInsertCss = e.options.autoInsertCss, this.appendAnimationCss(e)
          }
        }, {
          key: "getCurrentElContent", value: function (e) {
            return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
          }
        }, {
          key: "appendAnimationCss", value: function (e) {
            if (e.autoInsertCss && e.showCursor && e.fadeOut) {
              var t = document.createElement("style");
              t.type = "text/css";
              var n = "";
              e.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "), 0 !== t.length && (t.innerHTML = n, document.head.appendChild(t))
            }
          }
        }]), e
      }();
      t.default = l;
      var c = new l;
      t.initializer = c
    }, function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {value: !0});
      var n = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        smartBackspace: !0,
        shuffle: !1,
        backDelay: 700,
        fadeOut: !1,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,
        loop: !1,
        loopCount: 1 / 0,
        showCursor: !0,
        cursorChar: "|",
        autoInsertCss: !0,
        attr: null,
        bindInputFocusEvents: !1,
        contentType: "html",
        onComplete: function (e) {
        },
        preStringTyped: function (e, t) {
        },
        onStringTyped: function (e, t) {
        },
        onLastStringBackspaced: function (e) {
        },
        onTypingPaused: function (e, t) {
        },
        onTypingResumed: function (e, t) {
        },
        onReset: function (e) {
        },
        onStop: function (e, t) {
        },
        onStart: function (e, t) {
        },
        onDestroy: function (e) {
        }
      };
      t.default = n, e.exports = t.default
    }, function (e, t) {
      "use strict";

      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      Object.defineProperty(t, "__esModule", {value: !0});
      var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
          }
        }

        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(), r = function () {
        function e() {
          n(this, e)
        }

        return i(e, [{
          key: "typeHtmlChars", value: function (e, t, n) {
            if ("html" !== n.contentType) return t;
            var i = e.substr(t).charAt(0);
            if ("<" === i || "&" === i) {
              var r = "";
              for (r = "<" === i ? ">" : ";"; e.substr(t + 1).charAt(0) !== r && !(++t + 1 > e.length);) ;
              t++
            }
            return t
          }
        }, {
          key: "backSpaceHtmlChars", value: function (e, t, n) {
            if ("html" !== n.contentType) return t;
            var i = e.substr(t).charAt(0);
            if (">" === i || ";" === i) {
              var r = "";
              for (r = ">" === i ? "<" : "&"; e.substr(t - 1).charAt(0) !== r && !(--t < 0);) ;
              t--
            }
            return t
          }
        }]), e
      }();
      t.default = r;
      var o = new r;
      t.htmlParser = o
    }])
  })
}, function (e, t, n) {
  "use strict";
  (function (e) {
    var i = n(19), r = (n.n(i), n(21)), o = (n.n(r), n(22)), s = (n.n(o), n(23)), a = n.n(s),
      l = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="dailymotion.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="facebook.com/plugins/video.php"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="vid.me"]', 'iframe[src*="kickstarter.com"][src*="video.html"]'];
    t.a = {
      init: function () {
        e(".post-body").find(l.join(",")).each(function () {
          e(this).wrap('<aside class="video-responsive"></aside>').parent(".video-responsive")
        })
      }, finalize: function () {
        e(".share").bind("click", function (t) {
          t.preventDefault(), new a.a(e(this)).mapacheShare()
        }), e(".post-body").find("pre").addClass("line-numbers"), Prism.plugins.autoloader.languages_path = e("body").attr("data-page-url") + "/assets/scripts/prism-components/"
      }
    }
  }).call(t, n(0))
}, function (e, t, n) {
  (function (t) {
    var n = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
      i = function () {
        var e = /\blang(?:uage)?-(\w+)\b/i, t = 0, i = n.Prism = {
          manual: n.Prism && n.Prism.manual,
          disableWorkerMessageHandler: n.Prism && n.Prism.disableWorkerMessageHandler,
          util: {
            encode: function (e) {
              return e instanceof r ? new r(e.type, i.util.encode(e.content), e.alias) : "Array" === i.util.type(e) ? e.map(i.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            }, type: function (e) {
              return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
            }, objId: function (e) {
              return e.__id || Object.defineProperty(e, "__id", {value: ++t}), e.__id
            }, clone: function (e) {
              switch (i.util.type(e)) {
                case"Object":
                  var t = {};
                  for (var n in e) e.hasOwnProperty(n) && (t[n] = i.util.clone(e[n]));
                  return t;
                case"Array":
                  return e.map(function (e) {
                    return i.util.clone(e)
                  })
              }
              return e
            }
          },
          languages: {
            extend: function (e, t) {
              var n = i.util.clone(i.languages[e]);
              for (var r in t) n[r] = t[r];
              return n
            }, insertBefore: function (e, t, n, r) {
              r = r || i.languages;
              var o = r[e];
              if (2 == arguments.length) {
                n = arguments[1];
                for (var s in n) n.hasOwnProperty(s) && (o[s] = n[s]);
                return o
              }
              var a = {};
              for (var l in o) if (o.hasOwnProperty(l)) {
                if (l == t) for (var s in n) n.hasOwnProperty(s) && (a[s] = n[s]);
                a[l] = o[l]
              }
              return i.languages.DFS(i.languages, function (t, n) {
                n === r[e] && t != e && (this[t] = a)
              }), r[e] = a
            }, DFS: function (e, t, n, r) {
              r = r || {};
              for (var o in e) e.hasOwnProperty(o) && (t.call(e, o, e[o], n || o), "Object" !== i.util.type(e[o]) || r[i.util.objId(e[o])] ? "Array" !== i.util.type(e[o]) || r[i.util.objId(e[o])] || (r[i.util.objId(e[o])] = !0, i.languages.DFS(e[o], t, o, r)) : (r[i.util.objId(e[o])] = !0, i.languages.DFS(e[o], t, null, r)))
            }
          },
          plugins: {},
          highlightAll: function (e, t) {
            i.highlightAllUnder(document, e, t)
          },
          highlightAllUnder: function (e, t, n) {
            var r = {
              callback: n,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            i.hooks.run("before-highlightall", r);
            for (var o, s = r.elements || e.querySelectorAll(r.selector), a = 0; o = s[a++];) i.highlightElement(o, !0 === t, r.callback)
          },
          highlightElement: function (t, r, o) {
            for (var s, a, l = t; l && !e.test(l.className);) l = l.parentNode;
            l && (s = (l.className.match(e) || [, ""])[1].toLowerCase(), a = i.languages[s]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s, t.parentNode && (l = t.parentNode, /pre/i.test(l.nodeName) && (l.className = l.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s));
            var c = t.textContent, u = {element: t, language: s, grammar: a, code: c};
            if (i.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (i.hooks.run("before-highlight", u), u.element.textContent = u.code, i.hooks.run("after-highlight", u)), void i.hooks.run("complete", u);
            if (i.hooks.run("before-highlight", u), r && n.Worker) {
              var d = new Worker(i.filename);
              d.onmessage = function (e) {
                u.highlightedCode = e.data, i.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, o && o.call(u.element), i.hooks.run("after-highlight", u), i.hooks.run("complete", u)
              }, d.postMessage(JSON.stringify({language: u.language, code: u.code, immediateClose: !0}))
            } else u.highlightedCode = i.highlight(u.code, u.grammar, u.language), i.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, o && o.call(t), i.hooks.run("after-highlight", u), i.hooks.run("complete", u)
          },
          highlight: function (e, t, n) {
            var o = i.tokenize(e, t);
            return r.stringify(i.util.encode(o), n)
          },
          matchGrammar: function (e, t, n, r, o, s, a) {
            var l = i.Token;
            for (var c in n) if (n.hasOwnProperty(c) && n[c]) {
              if (c == a) return;
              var u = n[c];
              u = "Array" === i.util.type(u) ? u : [u];
              for (var d = 0; d < u.length; ++d) {
                var h = u[d], p = h.inside, f = !!h.lookbehind, g = !!h.greedy, m = 0, y = h.alias;
                if (g && !h.pattern.global) {
                  var v = h.pattern.toString().match(/[imuy]*$/)[0];
                  h.pattern = RegExp(h.pattern.source, v + "g")
                }
                h = h.pattern || h;
                for (var b = r, k = o; b < t.length; k += t[b].length, ++b) {
                  var w = t[b];
                  if (t.length > e.length) return;
                  if (!(w instanceof l)) {
                    h.lastIndex = 0;
                    var S = h.exec(w), x = 1;
                    if (!S && g && b != t.length - 1) {
                      if (h.lastIndex = k, !(S = h.exec(e))) break;
                      for (var C = S.index + (f ? S[1].length : 0), A = S.index + S[0].length, T = b, P = k, E = t.length; T < E && (P < A || !t[T].type && !t[T - 1].greedy); ++T) P += t[T].length, C >= P && (++b, k = P);
                      if (t[b] instanceof l || t[T - 1].greedy) continue;
                      x = T - b, w = e.slice(k, P), S.index -= k
                    }
                    if (S) {
                      f && (m = S[1].length);
                      var C = S.index + m, S = S[0].slice(m), A = C + S.length, _ = w.slice(0, C), z = w.slice(A),
                        j = [b, x];
                      _ && (++b, k += _.length, j.push(_));
                      var N = new l(c, p ? i.tokenize(S, p) : S, y, S, g);
                      if (j.push(N), z && j.push(z), Array.prototype.splice.apply(t, j), 1 != x && i.matchGrammar(e, t, n, b, k, !0, c), s) break
                    } else if (s) break
                  }
                }
              }
            }
          },
          tokenize: function (e, t, n) {
            var r = [e], o = t.rest;
            if (o) {
              for (var s in o) t[s] = o[s];
              delete t.rest
            }
            return i.matchGrammar(e, r, t, 0, 0, !1), r
          },
          hooks: {
            all: {}, add: function (e, t) {
              var n = i.hooks.all;
              n[e] = n[e] || [], n[e].push(t)
            }, run: function (e, t) {
              var n = i.hooks.all[e];
              if (n && n.length) for (var r, o = 0; r = n[o++];) r(t)
            }
          }
        }, r = i.Token = function (e, t, n, i, r) {
          this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length, this.greedy = !!r
        };
        if (r.stringify = function (e, t, n) {
            if ("string" == typeof e) return e;
            if ("Array" === i.util.type(e)) return e.map(function (n) {
              return r.stringify(n, t, e)
            }).join("");
            var o = {
              type: e.type,
              content: r.stringify(e.content, t, n),
              tag: "span",
              classes: ["token", e.type],
              attributes: {},
              language: t,
              parent: n
            };
            if (e.alias) {
              var s = "Array" === i.util.type(e.alias) ? e.alias : [e.alias];
              Array.prototype.push.apply(o.classes, s)
            }
            i.hooks.run("wrap", o);
            var a = Object.keys(o.attributes).map(function (e) {
              return e + '="' + (o.attributes[e] || "").replace(/"/g, "&quot;") + '"'
            }).join(" ");
            return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + o.content + "</" + o.tag + ">"
          }, !n.document) return n.addEventListener ? (i.disableWorkerMessageHandler || n.addEventListener("message", function (e) {
          var t = JSON.parse(e.data), r = t.language, o = t.code, s = t.immediateClose;
          n.postMessage(i.highlight(o, i.languages[r], r)), s && n.close()
        }, !1), n.Prism) : n.Prism;
        var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return o && (i.filename = o.src, i.manual || o.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(i.highlightAll) : window.setTimeout(i.highlightAll, 16) : document.addEventListener("DOMContentLoaded", i.highlightAll))), n.Prism
      }();
    void 0 !== e && e.exports && (e.exports = i), void 0 !== t && (t.Prism = i), i.languages.markup = {
      comment: /<!--[\s\S]*?-->/,
      prolog: /<\?[\s\S]+?\?>/,
      doctype: /<!DOCTYPE[\s\S]+?>/i,
      cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
          tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
          "attr-value": {
            pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
            inside: {punctuation: [/^=/, {pattern: /(^|[^\\])["']/, lookbehind: !0}]}
          },
          punctuation: /\/?>/,
          "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
        }
      },
      entity: /&#?[\da-z]{1,8};/i
    }, i.languages.markup.tag.inside["attr-value"].inside.entity = i.languages.markup.entity, i.hooks.add("wrap", function (e) {
      "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    }), i.languages.xml = i.languages.markup, i.languages.html = i.languages.markup, i.languages.mathml = i.languages.markup, i.languages.svg = i.languages.markup, i.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
      url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
      selector: /[^{}\s][^{};]*?(?=\s*\{)/,
      string: {pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
      property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      important: /\B!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:]/
    }, i.languages.css.atrule.inside.rest = i.util.clone(i.languages.css), i.languages.markup && (i.languages.insertBefore("markup", "tag", {
      style: {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: i.languages.css,
        alias: "language-css",
        greedy: !0
      }
    }), i.languages.insertBefore("inside", "attr-value", {
      "style-attr": {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          "attr-name": {pattern: /^\s*style/i, inside: i.languages.markup.tag.inside},
          punctuation: /^\s*=\s*['"]|['"]\s*$/,
          "attr-value": {pattern: /.+/i, inside: i.languages.css}
        },
        alias: "language-css"
      }
    }, i.languages.markup.tag)), i.languages.clike = {
      comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
      }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0}],
      string: {pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
      "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {punctuation: /[.\\]/}
      },
      keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
      boolean: /\b(?:true|false)\b/,
      function: /[a-z0-9_]+(?=\()/i,
      number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
      operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
      punctuation: /[{}[\];(),.:]/
    }, i.languages.javascript = i.languages.extend("clike", {
      keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
      number: /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
      function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
      operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
    }), i.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
      },
      "function-variable": {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
        alias: "function"
      }
    }), i.languages.insertBefore("javascript", "string", {
      "template-string": {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        greedy: !0,
        inside: {
          interpolation: {
            pattern: /\$\{[^}]+\}/,
            inside: {
              "interpolation-punctuation": {pattern: /^\$\{|\}$/, alias: "punctuation"},
              rest: i.languages.javascript
            }
          }, string: /[\s\S]+/
        }
      }
    }), i.languages.markup && i.languages.insertBefore("markup", "tag", {
      script: {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: i.languages.javascript,
        alias: "language-javascript",
        greedy: !0
      }
    }), i.languages.js = i.languages.javascript, function () {
      "undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function () {
        var e = {
          js: "javascript",
          py: "python",
          rb: "ruby",
          ps1: "powershell",
          psm1: "powershell",
          sh: "bash",
          bat: "batch",
          h: "c",
          tex: "latex"
        };
        Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function (t) {
          for (var n, r = t.getAttribute("data-src"), o = t, s = /\blang(?:uage)?-(?!\*)(\w+)\b/i; o && !s.test(o.className);) o = o.parentNode;
          if (o && (n = (t.className.match(s) || [, ""])[1]), !n) {
            var a = (r.match(/\.(\w+)$/) || [, ""])[1];
            n = e[a] || a
          }
          var l = document.createElement("code");
          l.className = "language-" + n, t.textContent = "", l.textContent = "Loading…", t.appendChild(l);
          var c = new XMLHttpRequest;
          c.open("GET", r, !0), c.onreadystatechange = function () {
            4 == c.readyState && (c.status < 400 && c.responseText ? (l.textContent = c.responseText, i.highlightElement(l)) : c.status >= 400 ? l.textContent = "✖ Error " + c.status + " while fetching file: " + c.statusText : l.textContent = "✖ Error: File does not exist or is empty")
          }, c.send(null)
        })
      }, document.addEventListener("DOMContentLoaded", self.Prism.fileHighlight))
    }()
  }).call(t, n(20))
}, function (e, t) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function (e, t) {
  !function () {
    if ("undefined" != typeof self && self.Prism && self.document && document.createElement) {
      var e = {
          javascript: "clike",
          actionscript: "javascript",
          arduino: "cpp",
          aspnet: "markup",
          bison: "c",
          c: "clike",
          csharp: "clike",
          cpp: "c",
          coffeescript: "javascript",
          crystal: "ruby",
          "css-extras": "css",
          d: "clike",
          dart: "clike",
          django: "markup",
          fsharp: "clike",
          flow: "javascript",
          glsl: "clike",
          go: "clike",
          groovy: "clike",
          haml: "ruby",
          handlebars: "markup",
          haxe: "clike",
          java: "clike",
          jolie: "clike",
          kotlin: "clike",
          less: "css",
          markdown: "markup",
          n4js: "javascript",
          nginx: "clike",
          objectivec: "c",
          opencl: "cpp",
          parser: "markup",
          php: "clike",
          "php-extras": "php",
          processing: "clike",
          protobuf: "clike",
          pug: "javascript",
          qore: "clike",
          jsx: ["markup", "javascript"],
          reason: "clike",
          ruby: "clike",
          sass: "css",
          scss: "css",
          scala: "java",
          smarty: "markup",
          swift: "clike",
          textile: "markup",
          twig: "markup",
          typescript: "javascript",
          vbnet: "basic",
          wiki: "markup"
        }, t = {}, n = Prism.plugins.autoloader = {languages_path: "components/", use_minified: !0},
        i = function (e, t, n) {
          var i = document.createElement("script");
          i.src = e, i.async = !0, i.onload = function () {
            document.body.removeChild(i), t && t()
          }, i.onerror = function () {
            document.body.removeChild(i), n && n()
          }, document.body.appendChild(i)
        }, r = function (e) {
          return n.languages_path + "prism-" + e + (n.use_minified ? ".min" : "") + ".js"
        }, o = function (e, n) {
          var i = t[e];
          i || (i = t[e] = {});
          var r = n.getAttribute("data-dependencies");
          !r && n.parentNode && "pre" === n.parentNode.tagName.toLowerCase() && (r = n.parentNode.getAttribute("data-dependencies")), r = r ? r.split(/\s*,\s*/g) : [], s(r, function () {
            a(e, function () {
              Prism.highlightElement(n)
            })
          })
        }, s = function (e, t, n) {
          "string" == typeof e && (e = [e]);
          var i = 0, r = e.length, o = function () {
            i < r ? a(e[i], function () {
              i++, o()
            }, function () {
              n && n(e[i])
            }) : i === r && t && t(e)
          };
          o()
        }, a = function (n, o, a) {
          var u = function () {
            var e = !1;
            n.indexOf("!") >= 0 && (e = !0, n = n.replace("!", ""));
            var s = t[n];
            if (s || (s = t[n] = {}), o && (s.success_callbacks || (s.success_callbacks = []), s.success_callbacks.push(o)), a && (s.error_callbacks || (s.error_callbacks = []), s.error_callbacks.push(a)), !e && Prism.languages[n]) l(n); else if (!e && s.error) c(n); else if (e || !s.loading) {
              s.loading = !0;
              var u = r(n);
              i(u, function () {
                s.loading = !1, l(n)
              }, function () {
                s.loading = !1, s.error = !0, c(n)
              })
            }
          }, d = e[n];
          d && d.length ? s(d, u) : u()
        }, l = function (e) {
          t[e] && t[e].success_callbacks && t[e].success_callbacks.length && t[e].success_callbacks.forEach(function (t) {
            t(e)
          })
        }, c = function (e) {
          t[e] && t[e].error_callbacks && t[e].error_callbacks.length && t[e].error_callbacks.forEach(function (t) {
            t(e)
          })
        };
      Prism.hooks.add("complete", function (e) {
        e.element && e.language && !e.grammar && "none" !== e.language && o(e.language, e.element)
      })
    }
  }()
}, function (e, t) {
  !function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
      var e = /\n(?!$)/g, t = function (t) {
        var i = n(t), r = i["white-space"];
        if ("pre-wrap" === r || "pre-line" === r) {
          var o = t.querySelector("code"), s = t.querySelector(".line-numbers-rows"),
            a = t.querySelector(".line-numbers-sizer"), l = o.textContent.split(e);
          a || (a = document.createElement("span"), a.className = "line-numbers-sizer", o.appendChild(a)), a.style.display = "block", l.forEach(function (e, t) {
            a.textContent = e || "\n";
            var n = a.getBoundingClientRect().height;
            s.children[t].style.height = n + "px"
          }), a.textContent = "", a.style.display = "none"
        }
      }, n = function (e) {
        return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
      };
      window.addEventListener("resize", function () {
        Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"), t)
      }), Prism.hooks.add("complete", function (n) {
        if (n.code) {
          var i = n.element.parentNode, r = /\s*\bline-numbers\b\s*/;
          if (i && /pre/i.test(i.nodeName) && (r.test(i.className) || r.test(n.element.className)) && !n.element.querySelector(".line-numbers-rows")) {
            r.test(n.element.className) && (n.element.className = n.element.className.replace(r, " ")), r.test(i.className) || (i.className += " line-numbers");
            var o, s = n.code.match(e), a = s ? s.length + 1 : 1, l = new Array(a + 1);
            l = l.join("<span></span>"), o = document.createElement("span"), o.setAttribute("aria-hidden", "true"), o.className = "line-numbers-rows", o.innerHTML = l, i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)), n.element.appendChild(o), t(i), Prism.hooks.run("line-numbers", n)
          }
        }
      }), Prism.hooks.add("line-numbers", function (e) {
        e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
      }), Prism.plugins.lineNumbers = {
        getLine: function (e, t) {
          if ("PRE" === e.tagName && e.classList.contains("line-numbers")) {
            var n = e.querySelector(".line-numbers-rows"), i = parseInt(e.getAttribute("data-start"), 10) || 1,
              r = i + (n.children.length - 1);
            t < i && (t = i), t > r && (t = r);
            var o = t - i;
            return n.children[o]
          }
        }
      }
    }
  }()
}, function (e, t) {
  var n = function (e) {
    this.elem = e
  };
  n.prototype.mapacheValue = function (e) {
    var t = this.elem.attr("mapache-" + e);
    return void 0 !== t && null !== t && t
  }, n.prototype.mapacheShare = function () {
    var e = this.mapacheValue("share").toLowerCase(), t = {
      facebook: {shareUrl: "https://www.facebook.com/sharer.php", params: {u: this.mapacheValue("url")}},
      twitter: {
        shareUrl: "https://twitter.com/intent/tweet/",
        params: {text: this.mapacheValue("title"), url: this.mapacheValue("url")}
      },
      reddit: {shareUrl: "https://www.reddit.com/submit", params: {url: this.mapacheValue("url")}},
      pinterest: {
        shareUrl: "https://www.pinterest.com/pin/create/button/",
        params: {url: this.mapacheValue("url"), description: this.mapacheValue("title")}
      },
      linkedin: {shareUrl: "https://www.linkedin.com/shareArticle", params: {url: this.mapacheValue("url"), mini: !0}},
      pocket: {shareUrl: "https://getpocket.com/save", params: {url: this.mapacheValue("url")}}
    }, n = t[e];
    return void 0 !== n && this.mapachePopup(n)
  }, n.prototype.mapachePopup = function (e) {
    var t = e.params || {}, n = Object.keys(t), i = e.shareUrl, r = n.length > 0 ? "?" : "";
    for (var o in n) "?" !== r && (r += "&"), t[n[o]] && (r += n[o] + "=" + encodeURIComponent(t[n[o]]));
    if (i += r, e.isLink) window.location.href = i; else {
      var s = window.innerWidth / 2 - 300 + window.screenX, a = window.innerHeight / 2 - 240 + window.screenY,
        l = "scrollbars=no, width=600, height=480, top=" + a + ", left=" + s, c = window.open(i, "", l);
      window.focus && c.focus()
    }
  }, e.exports = n
}, function (e, t, n) {
  "use strict";
  (function (e) {
    var n = e(".video-post-format"),
      i = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="dailymotion.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="vid.me"]', 'iframe[src*="kickstarter.com"][src*="video.html"]'];
    t.a = {
      init: function () {
        var t = e(".post-body").find(i.join(","))[0];
        if (e(t).parent(".video-responsive").appendTo(n), "undefined" != typeof youtubeChannelName && "undefined" != typeof youtubeChannelID) {
          var r = '<div class="video-subscribe u-flex u-h-b-md" style="margin-bottom:16px">\n        <span class="channel-name" style="margin-right:16px">Subscribe to ' + youtubeChannelName + '</span>\n        <div class="g-ytsubscribe" data-channelid="' + youtubeChannelID + '" data-layout="default" data-count="default"></div>\n      </div>';
          n.append(r);
          var o = document.createElement("script");
          o.type = "text/javascript", o.async = !0, o.src = "https://apis.google.com/js/platform.js";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(o, s)
        }
      }
    }
  }).call(t, n(0))
}, function (e, t, n) {
  "use strict";
  (function (e) {
    var n = e(".audio-post-format"),
      i = ['iframe[src*="w.soundcloud.com"]', 'iframe[src*="soundcloud.com"]', 'iframe[src*="embed.spotify.com"]', 'iframe[src*="spotify.com"]', 'iframe[src*="mixcloud.com"]'];
    t.a = {
      init: function () {
        var t = e(".post-body").find(i.join(","))[0];
        n.removeClass("u-hide"), e(t).appendTo(n)
      }
    }
  }).call(t, n(0))
}, function (e, t) {
}]);
