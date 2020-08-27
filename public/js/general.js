!function (e, t) {
    "use strict";
    var i;
    e.fn.extend({
        revolution: function (a) {
            return this.each(function () {
                for (var o = document.getElementsByClassName("rs-p-wp-fix"); o[0];) o[0].parentNode.removeChild(o[0]);
                var s = this.id = this.id === t ? "rs_module_" + Math.round(1e7 * Math.random()) : this.id;
                e.fn.revolution[s] = W(a), (i = e.fn.revolution)[s].c = e(this), i[s].cpar = i[s].c.parent(), i[s].canvas = i[s].c.find("rs-slides"), i[s].dimensionReCheck = {}, i[s].stopAfterLoops != t && i[s].stopAfterLoops > -1 ? i[s].looptogo = i[s].stopAfterLoops : i[s].looptogo = "disabled", window._T = i[s], i[s].BUG_safari_clipPath = "Safari" === i.get_browser() && i.get_browser_version() > "12", i[s].BUG_ie_clipPath = "Edge" === i.get_browser() || "IE" === i.get_browser(), i[s].anyid = [], i[s].indexhelper = 0, i[s].level = 0, i[s].rtl = e("body").hasClass("rtl"), i[s].minHeight = i[s].minHeight != t && "" !== i[s].minHeight ? parseInt(i[s].minHeight, 0) : 0, i[s].isEdge = "Edge" === i.get_browser(), r(s), "hero" == i[s].sliderType && i[s].c.find("rs-slide").each(function (t) {
                    t > 0 && e(this).remove()
                }), i[s].navigation.use = "hero" !== i[s].sliderType && ("carousel" == i[s].sliderType || i[s].navigation.keyboardNavigation || "on" == i[s].navigation.mouseScrollNavigation || "carousel" == i[s].navigation.mouseScrollNavigation || i[s].navigation.touch.touchenabled || i[s].navigation.arrows.enable || i[s].navigation.bullets.enable || i[s].navigation.thumbnails.enable || i[s].navigation.tabs.enable), i[s].c.find("rs-bgvideo").each(function () {
                    "RS-BGVIDEO" !== this.tagName || this.id !== t && "" !== this.id || (this.id = "rs-bg-video-" + Math.round(1e6 * Math.random()))
                }), punchgs.force3D = "auto", c(s)
            })
        }, getRSVersion: function (e) {
            var t, i, a = window.SliderRevolutionVersion;
            if (!e) {
                for (var r in t = i = "---------------------------------------------------------\n", t += "    Currently Loaded Slider Revolution & SR Modules :\n" + i, a) a.hasOwnProperty(r) && (t += a[r].alias + ": " + a[r].ver + "\n");
                t += i
            }
            return e ? a : t
        }, revremoveslide: function (t) {
            return this.each(function () {
                var a = this.id;
                if (!(t < 0 || t > i[a].slideamount) && i[a] && i[a].slides.length > 0 && (t > 0 || t <= i[a].slides.length)) {
                    var r = i.gA(i[a].slides[t], "key");
                    i[a].slideamount = i[a].slideamount - 1, i[a].realslideamount = i[a].realslideamount - 1, s("rs-bullet", r, a), s("rs-tab", r, a), s("rs-thumb", r, a), e(i[a].slides[t]).remove(), i[a].slides = o(i[a].slides, t), i[a].carousel && i[a].carousel.slides && (i[a].carousel.slides = o(i[a].carousel.slides, t)), i[a].thumbs = o(i[a].thumbs, t), i.updateNavIndexes && i.updateNavIndexes(a), t <= i[a].pr_active_key && (i[a].pr_active_key = i[a].pr_active_key - 1)
                }
            })
        }, revaddcallback: function (e) {
            return this.each(function () {
                i[this.id] && (i[this.id].callBackArray === t && (i[this.id].callBackArray = []), i[this.id].callBackArray.push(e))
            })
        }, revgetparallaxproc: function () {
            if (i[this[0].id]) return i[this[0].id].scrollproc
        }, revdebugmode: function () {
        }, revscroll: function (t) {
            return this.each(function () {
                var i = e(this);
                e("body,html").animate({scrollTop: i.offset().top + i.height() - t + "px"}, {duration: 400})
            })
        }, revredraw: function () {
            return this.each(function () {
                m(this.id)
            })
        }, revkill: function () {
            return this.each(function () {
                var a = this.id;
                punchgs.TweenMax.killDelayedCallsTo(i.showHideNavElements), i[a].c.data("conthover", 1), i[a].c.data("conthoverchanged", 1), i[a].c.trigger("revolution.slide.onpause");
                var r = i[a].cpar.find("rs-progress");
                i[a].c[0].opt;
                i[a].tonpause = !0, i[a].c.trigger("stoptimer"), i[a].sliderisrunning = !1;
                var o = "resize.revslider-" + i[a].c.attr("id");
                e(window).unbind(o), punchgs.TweenMax.killTweensOf(i[a].c.find("*"), !1), punchgs.TweenMax.killTweensOf(i[a].c, !1), i[a].c.unbind("hover, mouseover, mouseenter,mouseleave, resize"), o = "resize.revslider-" + i[a].c.attr("id"), e(window).off(o), i[a].c.find("*").each(function () {
                    var i = e(this);
                    i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != t && i.data("tween").kill(), i.data("pztl") != t && i.data("pztl").kill(), i.data("timeline_out") != t && i.data("timeline_out").kill(), i.data("timeline") != t && i.data("timeline").kill(), i.remove(), i.empty(), i = null
                }), punchgs.TweenMax.killTweensOf(i[a].c.find("*"), !1), punchgs.TweenMax.killTweensOf(i[a].c, !1), r.remove();
                try {
                    i[a].c.closest("rs-fullwidth-wrap").remove()
                } catch (e) {
                }
                try {
                    i[a].c.closest("rs-module-wrap").remove()
                } catch (e) {
                }
                try {
                    i[a].c.remove()
                } catch (e) {
                }
                i[a].c.empty(), i[a].c.html(), i[a].c = null
            })
        }, revpause: function () {
            return this.each(function () {
                var a = e(this);
                a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0 && (a.data("conthover", 1), a.data("conthoverchanged", 1), a.trigger("revolution.slide.onpause"), i[this.id].tonpause = !0, a.trigger("stoptimer"))
            })
        }, revresume: function () {
            return this.each(function () {
                if (i[this.id] !== t) {
                    var a = e(this);
                    a.data("conthover", 0), a.data("conthoverchanged", 1), a.trigger("revolution.slide.onresume"), i[this.id].tonpause = !1, a.trigger("starttimer")
                }
            })
        }, revmodal: function (a) {
            var r = this instanceof e ? this[0] : this, o = r.id;
            i[r.id] !== t && i.revModal(o, a)
        }, revstart: function () {
            var a = this instanceof e ? this[0] : this;
            return i[a.id] === t ? (console.log("Slider is Not Existing"), !1) : i[a.id].sliderisrunning ? (console.log("Slider Is Running Already"), !1) : (i[a.id].c = e(a), i[a.id].canvas = i[a.id].c.find("rs-slides"), h(a.id), !0)
        }, revnext: function () {
            return this.each(function () {
                i[this.id] !== t && i.callingNewSlide(this.id, 1, "carousel" === i[this.id].sliderType)
            })
        }, revprev: function () {
            return this.each(function () {
                i[this.id] !== t && i.callingNewSlide(this.id, -1, "carousel" === i[this.id].sliderType)
            })
        }, revmaxslide: function () {
            return e(this).find("rs-slide").length
        }, revcurrentslide: function () {
            if (i[e(this)[0].id] !== t) return parseInt(i[e(this)[0].id].pr_active_key, 0) + 1
        }, revlastslide: function () {
            return e(this).find("rs-slide").length
        }, revshowslide: function (e) {
            return this.each(function () {
                i[this.id] !== t && e !== t && i.callingNewSlide(this.id, "to" + (e - 1))
            })
        }, revcallslidewithid: function (e) {
            return this.each(function () {
                i[this.id] !== t && i.callingNewSlide(this.id, e, "carousel" === i[this.id].sliderType)
            })
        }
    }), i = e.fn.revolution, e.extend(!0, i, {
        sA: function (e, t, i) {
            e && e.setAttribute && e.setAttribute("data-" + t, i)
        }, gA: function (e, i, a) {
            return e.hasAttribute && e.hasAttribute("data-" + i) && e.getAttribute("data-" + i) !== t && null !== e.getAttribute("data-" + i) ? e.getAttribute("data-" + i) : a !== t ? a : t
        }, updateFixedScrollTimes: function (e) {
            !0 === i[e].sbtimeline.set && !0 === i[e].sbtimeline.fixed && "auto" !== i[e].sliderLayout && (i[e].sbtimeline.rest = i[e].duration - i[e].sbtimeline.fixEnd, i[e].sbtimeline.time = i[e].duration - (i[e].sbtimeline.fixStart + i[e].sbtimeline.rest), i[e].sbtimeline.extended = i[e].sbtimeline.time / 10)
        }, callContWidthManager: function (e) {
            g(e)
        }, showModalCover: function (a, r, o) {
            switch (o) {
                case"show":
                    var s;
                    r.spin !== t && "off" !== r.spin && (s = i.buildSpinner(a, "spinner" + r.spin, r.spinc, "modalspinner")), r.bg !== t && !1 !== r.bg && "false" !== r.bg && "transparent" !== r.bg ? (i[a].modalLoader = e('<rs-modal-cover data-rid="' + a + '" id="' + a + '_modal_bg"></rs-modal-cover>'), e("body").append(i[a].modalLoader), punchgs.TweenMax.set(i[a].modalLoader, {
                        display: "none",
                        background: r.bg,
                        opacity: 0
                    }), punchgs.TweenMax.to(i[a].modalLoader, .5, {
                        display: "block",
                        opacity: 1,
                        ease: punchgs.Power3.easeInOut
                    }), s !== t && i[a].modalLoader.append(s)) : s !== t && i[a].c.append(s);
                    break;
                case"hide":
                    i[a].modalLoader !== t ? (i[a].modalLoader.find(".modalspinner").remove(), punchgs.TweenMax.to(i[a].modalLoader, 2, {
                        delay: 1,
                        display: "none",
                        opacity: 0,
                        ease: punchgs.Power3.easeIn
                    })) : i[a].c.find(".modalspinner").remove()
            }
        }, revModal: function (a, r) {
            if (a !== t && i[a] !== t) switch (r.mode) {
                case"show":
                    r.slide = r.slide === t ? "to0" : r.slide, i[a].modal.bodyclass !== t && i[a].modal.bodyclass.length >= 0 && document.body.classList.add(i[a].modal.bodyclass), punchgs.TweenMax.to(i[a].modal.bg, 2, {
                        display: "block",
                        opacity: 1,
                        ease: punchgs.Power3.easeInOut
                    }), punchgs.TweenMax.set(i[a].modal.c, {
                        display: "auto" === i[a].sliderLayout ? "inline-block" : "block",
                        opacity: 0
                    }), punchgs.TweenMax.set(i[a].cpar, {display: "block", opacity: 1});
                    punchgs.TweenMax.fromTo({a: 0}, .01, {a: 0}, {
                        a: 10,
                        ease: punchgs.Power3.easeInOut,
                        onComplete: function () {
                            i[a].sliderisrunning ? i.callingNewSlide(a, r.slide) : ("to0" !== r.slide && (i[a].startWithSlideKey = r.slide), h(a))
                        }
                    }), punchgs.TweenMax.fromTo([i[a].modal.c], .01, {opacity: 0}, {
                        opacity: 1,
                        delay: .5,
                        ease: punchgs.Power3.easeInOut,
                        onComplete: function () {
                        }
                    }), window.overscrollhistory = document.body.style.overflow, document.body.style.overflow = "hidden";
                    break;
                case"close":
                    O(a), document.body.style.overflow = window.overscrollhistory, i[a].modal.bodyclass !== t && i[a].modal.bodyclass.length >= 0 && document.body.classList.remove(i[a].modal.bodyclass), punchgs.TweenMax.to(i[a].modal.bg, 2, {
                        display: "none",
                        opacity: 0,
                        ease: punchgs.Power3.easeInOut
                    }), punchgs.TweenMax.to(i[a].modal.c, .3, {
                        display: "none",
                        delay: .5,
                        opacity: 0,
                        onComplete: function () {
                            punchgs.TweenMax.set(i[a].cpar, {
                                display: "none",
                                opacity: 0
                            }), e(document).trigger("revolution.all.resize")
                        }
                    });
                    break;
                case"init":
                    if (window.RS_60_MODALS = window.RS_60_MODALS === t ? [] : window.RS_60_MODALS, -1 === e.inArray(i[a].modal.alias, window.RS_60_MODALS) && window.RS_60_MODALS.push(i[a].modal.alias), i[a].modal.listener === t) {
                        i[a].modal.c = e("#" + a + "_modal"), i[a].modal.bg = e('<rs-modal-cover data-rid="' + a + '" id="' + a + '_modal_bg"></rs-modal-cover>'), "auto" === i[a].sliderLayout && i[a].modal.cover ? e("body").append(i[a].modal.bg) : i[a].modal.c.append(i[a].modal.bg), i[a].modal.c[0].className += "rs-modal-" + i[a].sliderLayout;
                        var o = {
                            left: "auto" === i[a].sliderLayout ? "center" === i[a].modal.horizontal ? "50%" : "left" === i[a].modal.horizontal ? "0px" : "auto" : "0px",
                            right: "auto" === i[a].sliderLayout ? "center" === i[a].modal.horizontal ? "auto" : "left" === i[a].modal.horizontal ? "auto" : "0px" : "0px",
                            top: "auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout ? "middle" === i[a].modal.vertical ? "50%" : "top" === i[a].modal.vertical ? "0px" : "auto" : "0px",
                            bottom: "auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout ? "middle" === i[a].modal.vertical ? "auto" : "top" === i[a].modal.vertical ? "auto" : "0px" : "0px",
                            y: ("auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout) && "middle" === i[a].modal.vertical ? "-50%" : 0,
                            x: "auto" === i[a].sliderLayout && "center" === i[a].modal.horizontal ? "-50%" : 0
                        };
                        "-50%" === o.y && (o.filter = "blur(0px)"), punchgs.TweenMax.set(i[a].modal.c, "auto" === i[a].sliderLayout || "fullscreen" === i[a].sliderLayout ? e.extend(!0, o, {
                            opacity: 0,
                            display: "none"
                        }) : {
                            opacity: 0,
                            display: "none"
                        }), "fullwidth" === i[a].sliderLayout && punchgs.TweenMax.set(i[a].modal.c.find("rs-module-wrap"), o), !1 !== i[a].modal.cover && "false" !== i[a].modal.cover || (i[a].modal.coverColor = "transparent"), punchgs.TweenMax.set(i[a].modal.bg, {
                            display: "none",
                            background: i[a].modal.coverColor,
                            opacity: 0
                        }), e(document).on("RS_OPENMODAL_" + i[a].modal.alias, function (e, t) {
                            i.revModal(a, {mode: "show", slide: t})
                        }), e(document).on("click", "rs-modal-cover", function () {
                            i.revModal(i.gA(this, "rid"), {mode: "close"})
                        }), i[a].modal.listener = !0
                    }
            }
        }, smartConvertDivs: function (e) {
            var t = "";
            if ("string" == typeof e && e.indexOf("#") >= 0) {
                var i = e.split(","), a = i.length - 1;
                for (var r in i) t = "string" == typeof i[r] && "#" === i[r][0] ? t + i[r][1] / i[r][3] * 100 + "%" + (r < a ? "," : "") : t + i[r] + (r < a ? "," : "")
            } else t = e;
            return t
        }, revToResp: function (e, i, a, r) {
            if ((e = e === t ? a : e) !== t) {
                if (r = r === t ? "," : r, "boolean" != typeof e && ("object" != typeof e || Array.isArray(e))) {
                    try {
                        e = e.replace(/[[\]]/g, "").replace(/\'/g, "").split(r)
                    } catch (e) {
                    }
                    for (e = Array.isArray(e) ? e : [e]; e.length < i;) e[e.length] = e[e.length - 1]
                }
                return e
            }
        }, updateVisibleArea: function (a) {
            for (var r in i[a].viewPort.visible_area = i.revToResp(i[a].viewPort.visible_area, i[a].rle, "200px"), i[a].viewPort.vaType = new Array(4), i[a].viewPort.visible_area) i[a].viewPort.visible_area.hasOwnProperty(r) && (e.isNumeric(i[a].viewPort.visible_area[r]) && (i[a].viewPort.visible_area[r] += "%"), i[a].viewPort.visible_area[r] !== t && (i[a].viewPort.vaType[r] = i[a].viewPort.visible_area[r].indexOf("%") >= 0 ? "%" : "px"), i[a].viewPort.visible_area[r] = parseInt(i[a].viewPort.visible_area[r], 0), i[a].viewPort.visible_area[r] = "%" == i[a].viewPort.vaType[r] ? i[a].viewPort.visible_area[r] / 100 : i[a].viewPort.visible_area[r])
        }, fontLoaded: function (e) {
            return i.monoWidth = i.monoWidth === t ? n("monospace") : i.monoWidth, i.sansWidth = i.sansWidth === t ? n("sans-serif") : i.sansWidth, i.serifWidth = i.serifWidth === t ? n("serif") : i.serifWidth, i.monoWidth !== n(e + ",monospace") || i.sansWidth !== n(e + ",sans-serif") || i.serifWidth !== n(e + ",serif")
        }, getversion: function () {
            return "Slider Revolution 6.1.1"
        }, currentSlideIndex: function (e) {
            return i[e].pr_active_key
        }, simp: function (e, t, i) {
            var a = Math.abs(e) - Math.floor(Math.abs(e / t)) * t;
            return i ? a : e < 0 ? -1 * a : a
        }, iOSVersion: function () {
            return !!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) && navigator.userAgent.match(/OS 4_\d like Mac OS X/i)
        }, isIE: function (t, i) {
            var a = e('<div style="display:none;"/>').appendTo(e("body"));
            a.html("\x3c!--[if " + (i || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]--\x3e");
            var r = a.find("a").length;
            return a.remove(), r
        }, is_mobile: function () {
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                t = !1;
            for (var i in e) e.hasOwnProperty(i) && (t = !!(t || navigator.userAgent.split(e[i]).length > 1) || t);
            return t
        }, is_android: function () {
            var e = ["android", "Android"], t = !1;
            for (var i in e) e.hasOwnProperty(i) && (t = !!(t || navigator.userAgent.split(e[i]).length > 1) || t);
            return t
        }, callBackHandling: function (t, a, r) {
            i[t].callBackArray && e.each(i[t].callBackArray, function (e, t) {
                t && t.inmodule && t.inmodule === a && t.atposition && t.atposition === r && t.callback && t.callback.call()
            })
        }, get_browser: function () {
            var e, t = navigator.userAgent,
                i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(i[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], "IE") : "Chrome" === i[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e[1].replace("OPR", "Opera") : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), i[0])
        }, get_browser_version: function () {
            var e, t = navigator.appName, i = navigator.userAgent,
                a = i.match(/(edge|opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"])[1]
        }, isFirefox: function (e) {
            return i[e].isFirefox = i[e].isFirefox === t ? "Firefox" === i.get_browser() : i[e].isFirefox, i[e].isFirefox
        }, isSafari11: function () {
            return "safari" === e.trim(i.get_browser().toLowerCase()) && parseFloat(i.get_browser_version()) >= 11
        }, getHorizontalOffset: function (e, t) {
            var i = d(e, ".outer-left"), a = d(e, ".outer-right");
            return "left" == t ? i : "right" == t ? a : i + a
        }, getComingSlide: function (a, r) {
            var o = i[a].pr_next_key !== t ? i[a].pr_next_key : i[a].pr_processing_key !== t ? i[a].pr_processing_key : i[a].pr_active_key,
                s = 0;
            if (s = 0, i[a].pr_active_slide !== t && i[a].pr_active_slide.hasClass("not-in-nav") && (o = i[a].pr_lastshown_key), r !== t && e.isNumeric(r) || r !== t && r.match(/to/g)) s = 1 === r || -1 === r ? parseInt(o, 0) + r < 0 ? i[a].slideamount - 1 : parseInt(o, 0) + r >= i[a].slideamount ? 0 : parseInt(o, 0) + r : (r = e.isNumeric(r) ? r : parseInt(r.split("to")[1], 0)) < 0 ? 0 : r > i[a].slideamount - 1 ? i[a].slideamount - 1 : r; else if (r) for (var n in i[a].slides) i[a].slides.hasOwnProperty(n) && (s = i[a].slides && i[a].slides[n] && i.gA(i[a].slides[n], "key") === r ? n : s);
            return {nindex: s, aindex: o}
        }, callingNewSlide: function (e, a, r) {
            var o = i.getComingSlide(e, a);
            i[e].pr_next_key = o.nindex, i[e].sdir = i[e].pr_next_key < i[e].pr_active_key ? 1 : 0, r && i[e].carousel !== t && (i[e].carousel.focused = i[e].pr_next_key), i[e].ctNavElement ? i[e].ctNavElement = !1 : i[e].c.trigger("revolution.nextslide.waiting"), (o.aindex === i[e].pr_next_key && o.aindex === i[e].pr_lastshown_key || i[e].pr_next_key !== o.aindex && -1 != i[e].pr_next_key) && M(e, r)
        }, getLoadObj: function (e, a) {
            var r = i[e].loadqueue.filter(function (e) {
                return e.src === a
            })[0];
            return r === t ? {src: a} : r
        }, updateDimensions: function (e) {
            i[e].lastconw = i[e].conw, i[e].lastconh = i[e].conh, i[e].conw = i[e].c.width(), i[e].conh = i[e].infullscreenmode ? i[e].minHeight : i[e].c.height(), i[e].ulw = i[e].canvas.width(), i[e].ulh = i[e].canvas.height()
        }, setSize: function (a, r) {
            var o, s = parseInt(i[a].top_outer || 0) + parseInt(i[a].bottom_outer || 0),
                n = "carousel" == i[a].sliderType ? parseInt(i[a].carousel.padding_top || 0, 0) : 0,
                l = "carousel" == i[a].sliderType ? parseInt(i[a].carousel.padding_bottom || 0, 0) : 0, d = 0, c = 0,
                p = 0, u = i[a].pr_processing_key || i[a].pr_active_key || 0, h = i[a].pr_active_key || 0;
            if (i[a].minHeight = i[a].minHeight === t ? 0 : i[a].minHeight || 0, i[a].paddings = i[a].paddings === t ? {
                top: parseInt(i[a].cpar.css("paddingTop"), 0) || 0,
                bottom: parseInt(i[a].cpar.css("paddingBottom"), 0) || 0
            } : i[a].paddings, i[a].rowzones && i[a].rowzones.length > 0) {
                if (i[a].rowzones[u] !== t) for (o = 0; o < i[a].rowzones[u].length; o++) d += i[a].rowzones[u][o][0].offsetHeight;
                if (h !== u) for (o = 0; o < i[a].rowzones[h].length; o++) c += i[a].rowzones[h][o][0].offsetHeight
            }
            if (i[a].srowzones && i[a].srowzones.length > 0) for (o = 0; o < i[a].srowzones.length; o++) p += i[a].srowzones[o][0].offsetHeight;
            d = d < p ? p : d;
            var g = Math.max(Math.max(i[a].minHeight, i[a].gridheight[i[a].level]), d);
            if (g = 0 !== i[a].maxHeight ? Math.min(i[a].maxHeight, g) : g, "fullwidth" != i[a].sliderLayout || i[a].autoHeight || punchgs.TweenMax.set(i[a].c, {maxHeight: g + "px"}), i[a].c.css({
                marginTop: n,
                marginBottom: l
            }), i[a].width = i[a].canvas.width(), i[a].height = i[a].canvas.height(), "fullscreen" == i[a].sliderLayout || i[a].infullscreenmode) {
                var f = e(window).height();
                if (i[a].fullScreenOffsetContainer != t) {
                    var m = ("" + i[a].fullScreenOffsetContainer).split(",");
                    for (var v in m) m.hasOwnProperty(v) && (f -= e(m[v]).outerHeight(!0) || 0)
                }
                i[a].fullScreenOffset != t && !e.isNumeric(i[a].fullScreenOffset) && i[a].fullScreenOffset.split("%").length > 1 ? f -= e(window).height() * parseInt(i[a].fullScreenOffset, 0) / 100 : i[a].fullScreenOffset != t && i[a].fullScreenOffset.length > 0 && e.isNumeric(parseInt(i[a].fullScreenOffset, 0)) && (f -= parseInt(i[a].fullScreenOffset, 0)), i[a].height = Math.max(d, Math.max(f - s, i[a].minHeight)), h !== u && (i[a].currentSlideHeight = Math.max(c, Math.max(f - s, i[a].minHeight)), i[a].slides[h].style.maxHeight = i[a].currentSlideHeight !== i[a].height ? i[a].currentSlideHeight + "px" : "none"), i[a].cpar.height(i[a].height), i[a].c.css({height: "100%"})
            } else i[a].height = Math.round(i[a].gridheight[i[a].level] * (i[a].keepBPHeight ? 1 : i[a].width / i[a].gridwidth[i[a].level])), i[a].height = Math.max(d, Math.max(i[a].autoHeight ? i[a].height : Math.min(i[a].height, i[a].gridheight[i[a].level]), i[a].minHeight)), !1 !== r && i[a].c.height(i[a].height);
            var b = n + l + s + i[a].height + i[a].paddings.top + i[a].paddings.bottom, w = {height: b};
            if (!1 !== r && (i[a].c.closest("rs-fullwidth-wrap").find("rs-fw-forcer").css(w), i[a].c.closest("rs-module-wrap").css(w)), i[a].sbtimeline.set && i[a].sbtimeline.fixed && (i[a].curheight = b, i[a].sbtimeline.extended === t && i.updateFixedScrollTimes(a), punchgs.TweenMax.set(i[a].forcer, {height: 2 * b + i[a].sbtimeline.extended})), i[a].middleZones && i[a].middleZones.length > 0 && i[a].middleZones[u] !== t) for (o = 0; o < i[a].middleZones[u].length; o++) i[a].middleZones[u][o].style.top = Math.round(b / 2 - i[a].middleZones[u][o].offsetHeight / 2) + "px";
            if (i[a].smiddleZones && i[a].smiddleZones.length > 0) for (o = 0; o < i[a].smiddleZones.length; o++) i[a].smiddleZones[o].style.top = Math.round(b / 2 - i[a].smiddleZones[o].offsetHeight / 2) + "px";
            y(a)
        }, enterInViewPort: function (a) {
            i[a].waitForCountDown && (j(a), i[a].waitForCountDown = !1), i[a].waitForFirstSlide && (M(a), i[a].waitForFirstSlide = !1, setTimeout(function () {
                i[a].c.removeClass("tp-waitforfirststart")
            }, 500)), "playing" != i[a].sliderlaststatus && i[a].sliderlaststatus != t || i[a].c.trigger("starttimer"), i[a].lastplayedvideos != t && i[a].lastplayedvideos.length > 0 && e.each(i[a].lastplayedvideos, function (e, t) {
                i.playVideo(t, a)
            })
        }, leaveViewPort: function (a) {
            i[a].sliderlaststatus = i[a].sliderstatus, i[a].c.trigger("stoptimer"), i[a].playingvideos != t && i[a].playingvideos.length > 0 && (i[a].lastplayedvideos = e.extend(!0, [], i[a].playingvideos), i[a].playingvideos && e.each(i[a].playingvideos, function (e, t) {
                i[a].leaveViewPortBasedStop = !0, i.stopVideo && i.stopVideo(t, a)
            }))
        }, unToggleState: function (e) {
            if (e !== t) for (var i = 0; i < e.length; i++) try {
                document.getElementById(e[i]).classList.remove("rs-tc-active")
            } catch (e) {
            }
        }, toggleState: function (e) {
            if (e !== t) for (var i = 0; i < e.length; i++) try {
                document.getElementById(e[i]).classList.add("rs-tc-active")
            } catch (e) {
            }
        }, swaptoggleState: function (e) {
            if (e != t && e.length > 0) for (var a = 0; a < e.length; a++) {
                var r = document.getElementById(e[a]);
                if (i.gA(r, "toggletimestamp") !== t && (new Date).getTime() - i.gA(r, "toggletimestamp") < 250) return;
                i.sA(r, "toggletimestamp", (new Date).getTime()), null !== r && (r.className.indexOf("rs-tc-active") >= 0 ? r.classList.remove("rs-tc-active") : r.classList.add("rs-tc-active"))
            }
        }, lastToggleState: function (e) {
            var i;
            if (e !== t) for (var a = 0; a < e.length; a++) {
                var r = document.getElementById(e[a]);
                i = !0 === i || null !== r && r.className.indexOf("rs-tc-active") >= 0 || i
            }
            return i
        }, revCheckIDS: function (a, r) {
            if (i.gA(r, "idcheck") === t) {
                for (; -1 != e.inArray(r.id, i[a].anyid);) console.log("Warning !! Double Id in Slider " + a + ": " + r.id), r.id = r.id + "_" + Math.round(9999 * Math.random());
                i[a].anyid.push(r.id)
            }
            i.sA(r, "idcheck", !0)
        }, buildSpinner: function (i, a, r, o) {
            var s;
            if ("off" !== a) {
                o = o === t ? "" : o, r = r === t ? "#ffffff" : r;
                var n = parseInt(a.replace("spinner", ""), 10);
                if (isNaN(n) || n < 6) {
                    var l = 'style="background-color:' + r + '"', d = o === t || 3 !== n && 4 != n ? "" : l;
                    s = e("<rs-loader " + (o === t || 1 !== n && 2 != n ? "" : l) + ' class="' + a + " " + o + '"><div ' + d + ' class="dot1"></div><div ' + d + ' class="dot2"></div><div ' + d + ' class="bounce1"></div><div ' + d + ' class="bounce2"></div><div ' + d + ' class="bounce3"></div></rs-loader>')
                } else {
                    var c, p = '<div class="rs-spinner-inner"';
                    if (7 === n) -1 !== r.search("#") ? (c = r.replace("#", ""), c = "rgba(" + parseInt(c.substring(0, 2), 16) + ", " + parseInt(c.substring(2, 4), 16) + ", " + parseInt(c.substring(4, 6), 16) + ", ") : -1 !== r.search("rgb") && (c = r.substring(r.indexOf("(") + 1, r.lastIndexOf(")")).split(",")).length > 2 && (c = "rgba(" + c[0].trim() + ", " + c[1].trim() + ", " + c[2].trim() + ", "), c && "string" == typeof c && (p += ' style="border-top-color: ' + c + "0.65); border-bottom-color: " + c + "0.15); border-left-color: " + c + "0.65); border-right-color: " + c + '0.15)"'); else 12 === n && (p += ' style="background:' + r + '"');
                    p += ">";
                    for (var u = [10, 0, 4, 2, 5, 9, 0, 4, 4, 2][n - 6], h = 0; h < u; h++) h > 0 && (p += " "), p += '<span style="background:' + r + '"></span>';
                    s = e('<rs-loader class="' + a + " " + o + '">' + (p += "</div>") + "</div></rs-loader>")
                }
                return s
            }
        }
    });
    var a = i.is_mobile(), r = (i.is_android(), function (e) {
        i[e].responsiveLevels = i.revToResp(i[e].responsiveLevels, i[e].rle), i[e].visibilityLevels = i.revToResp(i[e].visibilityLevels, i[e].rle), i[e].responsiveLevels[0] = 9999, i[e].rle = i[e].responsiveLevels.length || 1, i[e].gridwidth = i.revToResp(i[e].gridwidth, i[e].rle), i[e].gridheight = i.revToResp(i[e].gridheight, i[e].rle), i[e].editorheight !== t && (i[e].editorheight = i.revToResp(i[e].editorheight, i[e].rle)), l(e), y(e);
        var a = Math.max(i[e].minHeight, i[e].gridheight[i[e].level] * i[e].bw);
        i[e].editorheight !== t && (a = Math.max(a, i[e].editorheight[i[e].level] * i[e].bw)), punchgs.TweenMax.set(i[e].c, {height: a})
    }), o = function (t, i) {
        var a = [];
        return e.each(t, function (e, t) {
            e != i && a.push(t)
        }), a
    }, s = function (t, a, r) {
        i[r].c.find(t).each(function () {
            var t = e(this);
            t.data("key") === a && t.remove()
        })
    }, n = function (e) {
        window.revFontTestcontainer == t && (window.revFontTestcontainer = document.createElement("span"), window.revFontTestcontainer.innerHTML = Array(100).join("wi"), window.revFontTestcontainer.style.cssText = ["position:absolute", "width:auto", "font-size:128px", "left:-99999px"].join(" !important;")), window.revFontTestcontainer.style.fontFamily = e, document.body.appendChild(window.revFontTestcontainer);
        var i = window.revFontTestcontainer.clientWidth;
        return document.body.removeChild(window.revFontTestcontainer), i
    }, l = function (t, a) {
        var r = 9999, o = 0, s = 0, n = e(window).width(),
            l = a && 9999 == i[t].responsiveLevels ? i[t].visibilityLevels : i[t].responsiveLevels;
        l && l.length && e.each(l, function (e, a) {
            n < a && (0 == o || o > parseInt(a)) && (r = parseInt(a), i[t].level = e, o = parseInt(a)), n > a && o < a && (o = parseInt(a), s = e)
        }), o < r && (i[t].level = s), i[t].levelForced = i[t].level
    }, d = function (t, i) {
        var a = 0;
        return t.find(i).each(function () {
            var t = e(this);
            !t.hasClass("tp-forcenotvisible") && a < t.outerWidth() && (a = t.outerWidth())
        }), a
    }, c = function (r) {
        if (r === t || i[r] === t || i[r].c === t) return !1;
        window._rs_firefox13 = !1, window._rs_ie = window._rs_ie === t ? !e.support.opacity : window._rs_ie, window._rs_ie9 = window._rs_ie9 === t ? 9 == document.documentMode : window._rs_ie9;
        var o = e.fn.jquery.split("."), s = parseFloat(o[0]), n = parseFloat(o[1]);
        1 == s && n < 7 && i[r].c.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + o + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), s > 1 && (window._rs_ie = !1), i[r].cpar !== t && i[r].cpar.data("aimg") != t && ("enabled" == i[r].cpar.data("aie8") && i.isIE(8) || "enabled" == i[r].cpar.data("amobile") && a) && i[r].c.html('<img class="tp-slider-alternative-image" src="' + i[r].cpar.data("aimg") + '">'), i[r].realslideamount = i[r].slideamount = 0;
        var l = i[r].canvas[0].getElementsByTagName("rs-slide");
        for (var d in l) l.hasOwnProperty(d) && ("on" == i.gA(l[d], "hsom") && a ? l[d].classList.add("removeslidenow") : (i.gA(l[d], "invisible") || 1 == i.gA(l[d], "invisible") ? l[d].classList.add("not-in-nav") : i[r].slideamount++, i[r].realslideamount++, i.sA(l[d], "originalindex", i[r].realslideamount), i.sA(l[d], "origindex", i[r].realslideamount - 1)));
        i[r].canvas.find(".removeslidenow").each(function () {
            e(this).remove()
        }), i[r].canvas.find(".not-in-nav").each(function () {
            e(this).appendTo(i[r].canvas)
        }), i[r].canvas.css({visibility: "visible"}), i[r].slayers = i[r].c.find("rs-static-layers"), i[r].slayers.length > 0 && i.sA(i[r].slayers[0], "key", "staticlayers"), !0 === i[r].modal.useAsModal && (i[r].cpar.wrap('<rs-modal id="' + i[r].c[0].id + '_modal"></rs-modal>'), i[r].modal.c = i[r].cpar.closest("rs-modal"), i[r].modal.c.appendTo(e("body")), i[r].modal !== t && i[r].modal.alias !== t && i.revModal(r, {mode: "init"})), 1 != i[r].waitForInit && 1 != i[r].modal.useAsModal && h(r)
    }, p = function () {
        e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function () {
            e(window).trigger("resize")
        }, 200)
    }, u = function (e, a, r) {
        return i.gA(e, "lazyload") !== t ? i.gA(e, "lazyload") : i[r].lazyloaddata !== t && i[r].lazyloaddata.length > 0 && i.gA(e, i[r].lazyloaddata) !== t ? i.gA(e, i[r].lazyloaddata) : i.gA(e, "lazy-src") !== t ? i.gA(e, "lazy-src") : i.gA(e, "lazy-wpfc-original-src") !== t ? i.gA(e, "lazy-wpfc-original-src") : i.gA(e, "lazy") !== t ? i.gA(e, "lazy") : a
    }, h = function (r) {
        if (i[r] !== t) {
            if (i[r].sliderisrunning = !0, e(document).on("revolution.all.resize", function () {
                i[r].sliderisrunning && m(r)
            }), i[r].shuffle) {
                for (var o = i[r].canvas.find("rs-slide:first-child"), s = i.gA(o[0], "firstanim"), n = 0; n < i[r].slideamount; n++) i[r].canvas.find("rs-slide:eq(" + Math.round(Math.random() * i[r].slideamount) + ")").prependTo(i[r].canvas);
                i.sA(i[r].canvas.find("rs-slide:first-child")[0], "firstanim", s)
            }
            i[r].slides = i[r].canvas[0].getElementsByTagName("rs-slide"), i[r].thumbs = new Array(i[r].slides.length), i[r].slots = 4, i[r].firststart = 1, i[r].loadqueue = [], i[r].syncload = 0, i.updateDimensions(r);
            var d = 0;
            for (var c in i[r].slides) if (i[r].slides.hasOwnProperty(c) && "length" !== c) {
                var h = i[r].slides[c], v = h.getElementsByClassName(".rev-slidebg");
                v = 0 === v.length ? h.getElementsByTagName("img")[0] : v, i.gA(h, "key") === t && i.sA(h, "key", "rs-" + Math.round(999999 * Math.random()));
                var y = {
                    params: Array(12),
                    id: i.gA(h, "key"),
                    src: i.gA(h, "thumb") !== t ? i.gA(h, "thumb") : u(v, v.src, r)
                };
                i.gA(h, "title") === t && i.sA(h, "title", ""), i.gA(h, "description") === t && i.sA(h, "description", ""), y.params[0] = {
                    from: RegExp("\\{\\{title\\}\\}", "g"),
                    to: i.gA(h, "title")
                }, y.params[1] = {from: RegExp("\\{\\{description\\}\\}", "g"), to: i.gA(h, "description")};
                for (var w = 1; w <= 10; w++) i.gA(h, "p" + w) !== t ? y.params[w + 1] = {
                    from: RegExp("\\{\\{param" + w + "\\}\\}", "g"),
                    to: i.gA(h, "p" + w)
                } : y.params[w + 1] = {from: RegExp("\\{\\{param" + w + "\\}\\}", "g"), to: ""};
                if (i[r].thumbs[d] = e.extend({}, !0, y), i.gA(h, "link") != t || i.gA(h, "linktoslide") !== t) {
                    var _ = i.gA(h, "link") !== t ? i.gA(h, "link") : "slide",
                        x = "slide" != _ ? "no" : i.gA(h, "linktoslide"), k = i.gA(h, "seoz");
                    if (x != t && "no" != x && "next" != x && "prev" != x) for (var T in i[r].slides) i[r].slides.hasOwnProperty(T) && parseInt(i.gA(i[r].slides[T], "origindex"), 0) + 1 == i.gA(h, "linktoslide") && (x = i.gA(i[r].slides[T], "key"));
                    e(h).append('<rs-layer class="rs-layer slidelink" style="z-index:' + ("back" === k ? 0 : "front" === k ? 60 : k !== t ? parseInt(k, 0) : 100) + ';" dataxy="x:c;y:c" data-dim="w:100%;h:100%" data-basealign="slide"' + ("no" == x ? "" : "  data-actions='" + ("scroll_under" === x ? "o:click;a:scrollbelow;offset:100px;" : "prev" === x ? "o:click;a:jumptoslide;slide:prev;d:0.2;" : "next" === x ? "o:click;a:jumptoslide;slide:next;d:0.2;" : "o:click;a:jumptoslide;slide:" + x + ";d:0.2;") + "'") + " data-frame_1='e:Power3.easeInOut;st:100;sp:100' data-frame_999='e:Power3.easeInOut;o:0;st:w;sp:100'><a " + ("slide" != _ ? ' target="' + (i.gA(h, "target") || "_self") + '" href="' + _ + '"' : "") + "><span></span></a></rs-layer>")
                }
                d++
            }
            if (i[r].simplifyAll && (i.isIE(8) || i.iOSVersion()) && (i[r].c.find(".rs-layer").each(function () {
                var t = e(this);
                t.removeClass("customin customout").addClass("fadein fadeout"), t.data("splitin", ""), t.data("speed", 400)
            }), i[r].slides.each(function () {
                var t = e(this);
                t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1), (t.find(".rev-slidebg") || t.find(">img").first()).data("panzoom", null)
            })), window._rs_desktop = window._rs_desktop === t ? !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i) : window._rs_desktop, i[r].autoHeight = "fullscreen" == i[r].sliderLayout || i[r].autoHeight, "fullwidth" != i[r].sliderLayout || i[r].autoHeight || i[r].c.css({maxHeight: i[r].gridheight[i[r].level] + "px"}), "auto" == i[r].sliderLayout || 0 != i[r].c.closest("rs-fullwidth-wrap").length || "fullscreen" === i[r].sliderLayout && 1 == i[r].disableForceFullWidth) i[r].topc = i[r].cpar; else {
                var L = i[r].cpar[0].style.marginTop, R = i[r].cpar[0].style.marginBottom;
                L = L === t || "" === L ? "" : "margin-top:" + L + ";", R = R === t || "" === R ? "" : "margin-bottom:" + R + ";", i[r].topc = e('<rs-fullwidth-wrap id="' + i[r].c[0].id + '_forcefullwidth" style="' + L + R + '"></rs-fullwidth-wrap>'), i[r].forcer = e('<rs-fw-forcer style="height:' + i[r].cpar.height() + 'px"></rs-fw-forcer>'), i[r].topc.append(i[r].forcer), i[r].topc.insertBefore(i[r].cpar), i[r].cpar.detach(), i[r].cpar.css({
                    marginTop: "0px",
                    marginBottom: "0px",
                    position: "absolute"
                }), i[r].cpar.prependTo(i[r].topc)
            }
            if (i[r].forceOverflow && i[r].topc[0].classList.add("rs-forceoverflow"), "carousel" === i[r].sliderType && i[r].c.css({overflow: "visible"}), 0 !== i[r].maxHeight && punchgs.TweenMax.set([i[r].cpar, i[r].c, i[r].topc], {maxHeight: i[r].maxHeight + "px"}), i[r].fixedOnTop && punchgs.TweenMax.set(i[r].topc, {
                position: "fixed",
                top: "0px",
                left: "0px",
                pointerEvents: "none",
                zIndex: 5e3
            }), i[r].shadow !== t && i[r].shadow > 0 && i[r].cpar.addClass("tp-shadow" + i[r].shadow).append('<div class="tp-shadowcover" style="background-color:' + i[r].cpar.css("backgroundColor") + ";background-image:" + i[r].cpar.css("backgroundImage") + '"></div>'), l(r), !i[r].c.hasClass("revslider-initialised")) {
                i[r].c[0].classList.add("revslider-initialised"), i[r].c[0].id = i[r].c[0].id === t ? "revslider-" + Math.round(1e3 * Math.random() + 5) : i[r].c[0].id, i.revCheckIDS(r, i[r].c[0]), i[r].origcd = parseInt(i[r].duration, 0), i[r].scrolleffect._L = [], i[r].sbas = i[r].sbas === t ? {} : i[r].sbas, i[r].layers = i[r].layers || {}, i[r].sortedLayers = i[r].sortedLayers || {}, i[r].c.detach(), i[r].c.find("rs-layer, rs-row, rs-column, rs-group,  rs-bgvideo, .rs-layer").each(function () {
                    var a, o, s = e(this), n = s.data();
                    if (n.startclasses = this.className, n.startclasses = n.startclasses === t || null === n.startclasses ? "" : n.startclasses, n.animationonscroll = !!i[r].sbtimeline.set && i[r].sbtimeline.layers, n.animationonscroll = !0 === n.animationonscroll || "true" == n.animationonscroll, n.filteronscroll = !!i[r].scrolleffect.set && i[r].scrolleffect.layers, n.pxundermask = n.startclasses.indexOf("rs-pxmask") >= 0 && "off" !== i[r].parallax.type && n.startclasses.indexOf("rs-pxl-") >= 0, n.noPevents = n.startclasses.indexOf("rs-noevents") >= 0, n.sba) for (var l in a = n.sba.split(";")) a.hasOwnProperty(l) && ("t" == (o = a[l].split(":"))[0] && (n.animationonscroll = o[1], "false" == o[1] && (n.animOnScrollForceDisable = !0)), "e" == o[0] && (n.filteronscroll = o[1]), "so" == o[0] && (n.scrollBasedOffset = parseInt(o[1]) / 1e3));
                    if ("true" != n.animationonscroll && 1 != n.animationonscroll || (n.startclasses += " rs-sba", s[0].className += " rs-sba"), n.startclasses.indexOf("rs-layer-static") >= 0 && i.handleStaticLayers && i.handleStaticLayers(s, r), "RS-BGVIDEO" !== s[0].tagName) {
                        if (s[0].classList.add("rs-layer"), "column" === n.type && (n.columnwidth = "33.33%", n.verticalalign = "top", n.column !== t)) for (var d in a = n.column.split(";")) a.hasOwnProperty(d) && ("w" === (o = a[d].split(":"))[0] && (n.columnwidth = o[1]), "a" === o[0] && (n.verticalalign = o[1]));
                        var c = n.startclasses.indexOf("slidelink") >= 0 ? "width:100% !important;height:100% !important;" : "",
                            p = "column" !== n.type ? "" : n.verticalalign === t ? " vertical-align:top;" : " vertical-align:" + n.verticalalign + ";",
                            u = "row" === n.type || "column" === n.type ? "position:relative;" : "position:absolute;",
                            h = "",
                            g = "row" === n.type ? "rs-row-wrap" : "column" === n.type ? "rs-column-wrap" : "group" === n.type ? "rs-group-wrap" : "rs-layer-wrap",
                            f = "", m = "", v = (n.noPevents, ";pointer-events:none");
                        for (var y in "row" === n.type || "column" === n.type || "group" === n.type ? (s[0].classList.remove("tp-resizeme"), "column" === n.type && (n.width = "auto", s[0].group = "row", punchgs.TweenMax.set(s, {width: "auto"}), n.filteronscroll = !1)) : (f = "display:" + ("inline-block" === s[0].style.display ? "inline-block" : "block") + ";", s.closest("rs-column").length > 0 ? (s[0].group = "column", n.filteronscroll = !1) : s.closest("rs-group-wrap").length > 0 && (s[0].group = "group", n.filteronscroll = !1)), n.wrpcls !== t && (h = h + " " + n.wrpcls), n.wrpid !== t && (m = 'id="' + n.wrpid + '"'), n.maskinuse = !1, n) n.maskinuse && n.hasOwnProperty(y) && (n.maskinuse = y.indexOf("_mask") > 0);
                        s.wrap("<" + g + " " + m + ' class="rs-parallax-wrap ' + h + '" style="' + p + " " + c + u + f + v + '"><rs-loop-wrap style="' + c + u + f + '"><rs-mask-wrap style="' + c + u + f + '">' + (n.pxundermask ? "<rs-px-mask></rs-px-mask>" : "") + "</rs-mask-wrap></rs-loop-wrap></" + g + ">"), !0 !== n.filteronscroll && "true" != n.filteronscroll || i[r].scrolleffect._L.push(s.parent()), s[0].id = s[0].id === t ? "layer-" + Math.round(999999999 * Math.random()) : s[0].id, i.revCheckIDS(r, s[0]), "column" === n.type && s.closest(".rs-parallax-wrap").append('<rs-cbg-mask-wrap><rs-column-bg id="' + s[0].id + '_rs_cbg"></rs-column-bg></rs-cbg-mask-wrap>'), "text" === n.type && s[0].getElementsByTagName("iframe").length > 0 && s[0].classList.add("rs-ii-o"), punchgs.TweenMax.set(s, {visibility: "hidden"}), i[r].BUG_safari_clipPath && s[0].classList.add("rs-pelock")
                    }
                    i.gA(s[0], "actions") && i.checkActions && i.checkActions(s, r, i[r]), !i.checkVideoApis || window.rs_addedvim && window.rs_addedyt || i[r].youtubeapineeded && i[r].vimeoapineeded || i.checkVideoApis(s, r)
                }), i.checkActions && i.checkActions(t, r), i[r].c.prependTo(i[r].cpar), i[r].c[0].addEventListener("mouseenter", function () {
                    i[r].c.trigger("tp-mouseenter"), i[r].overcontainer = !0
                }, {passive: !0}), i[r].c[0].addEventListener("mouseover", function () {
                    i[r].c.trigger("tp-mouseover"), i[r].overcontainer = !0
                }, {passive: !0}), i[r].c[0].addEventListener("mouseleave", function () {
                    i[r].c.trigger("tp-mouseleft"), i[r].overcontainer = !1
                }, {passive: !0}), i[r].c.find(".rs-layer video").each(function (t) {
                    var i = e(this);
                    i.removeClass("video-js vjs-default-skin"), i.attr("preload", ""), i.css({display: "none"})
                }), "standard" !== i[r].sliderType && (i[r].lazyType = "all"), i[r].rs_static_layer = i[r].c[0].getElementsByTagName("rs-static-layers"), i.preLoadAudio && i[r].rs_static_layer.length > 0 && i.preLoadAudio(e(i[r].rs_static_layer), r, 1), i[r].rs_static_layer.length > 0 && (I(i[r].rs_static_layer[0], r, 0, !0), S(i[r].rs_static_layer[0], r, function () {
                    i[r] !== t && i[r].c.find("rs-static-layers img").each(function () {
                        this.src = i.getLoadObj(r, i.gA(this, "src") != t ? i.gA(this, "src") : this.src).src
                    })
                })), i[r].rowzones = [], i[r].middleZones = [];
                var A = B("#")[0];
                if (A.length < 9 && A.split("slide").length > 1 && -1 == A.indexOf("slider")) {
                    var z = parseInt(A.split("slide")[1], 0);
                    e.isNumeric(parseInt(z, 0)) && ((z = parseInt(z, 0)) < 1 && (z = 1), z > i[r].slideamount && (z = i[r].slideamount), i[r].startWithSlide = z - 1)
                }
                i[r].loader = i.buildSpinner(r, i[r].spinner, i[r].spinnerclr), i[r].c.append(i[r].loader);
                var O = window.getComputedStyle(i[r].c[0].parentNode, null);
                i[r].c.height(O.height), 0 === i[r].c.find("rs-progress").length && i[r].c.append('<rs-progress style="visibility:hidden"></rs-progress>'), i[r].c.find("rs-progress").css({width: "0%"}), i[r].canvas.css({display: "block"}), b(r), i[r].slides = i[r].canvas.find("rs-slide").not(".rs-not-in-nav"), i[r].inli = i[r].canvas.find("rs-slide.rs-not-in-nav"), ("off" !== i[r].parallax.type || i[r].scrolleffect.set || i[r].sbtimeline.set) && i.checkForParallax && i.checkForParallax(r), i.setSize(r, !1), "hero" !== i[r].sliderType && i.createNavigation && i[r].navigation.use && i.createNavigation(r), i.resizeThumbsTabs && i.resizeThumbsTabs && i[r].navigation.use && i.resizeThumbsTabs(r), g(r);
                var C = i[r].viewPort;
                i[r].inviewport = !1, C != t && C.enable && i.scrollTicker && i.scrollTicker(r), i[r].slides.each(function (t) {
                    var a = e(this);
                    i[r].rowzones[t] = [], i[r].middleZones[t] = [], a.find("rs-zone").each(function () {
                        i[r].rowzones[t].push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && i[r].middleZones[t].push(this)
                    }), ((C.enable && i[r].inviewport || !C.enable) && "all" == i[r].lazyType || "smart" == i[r].lazyType && (0 == t || 1 == t || t == i[r].slideamount || t == i[r].slideamount - 1)) && (I(a[0], r, t), S(a[0], r, function () {
                    }))
                }), i[r].srowzones = [], i[r].smiddleZones = [], i[r].slayers.find("rs-zone").each(function () {
                    i[r].srowzones.push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && i[r].smiddleZones.push(this)
                }), "carousel" === i[r].sliderType && i.prepareCarousel && (punchgs.TweenMax.set(i[r].canvas, {
                    scale: 1,
                    perspective: 1200,
                    transformStyle: "flat",
                    opacity: 0
                }), i.prepareCarousel(r, new punchgs.TimelineLite, t, 0), i[r].onlyPreparedSlide = !0), setTimeout(function () {
                    !C.enable || C.enable && i[r].inviewport || C.enable && !i[r].inviewport && "wait" !== C.outof ? M(r) : (i[r].c.addClass("tp-waitforfirststart"), i[r].waitForFirstSlide = !0, C.presize && (i[r].pr_next_slide = e(i[r].slides[0]), I(i[r].pr_next_slide[0], r, 0, !0), S(i[r].pr_next_slide.find(".tp-layers"), r, function () {
                        i.animateTheLayers && i.animateTheLayers({slide: i[r].pr_next_key, id: r, mode: "preset"})
                    }))), i.manageNavigation && i[r].navigation.use && i.manageNavigation(r), i[r].slideamount > 1 && (!C.enable || C.enable && i[r].inviewport ? j(r) : i[r].waitForCountDown = !0), setTimeout(function () {
                        i[r] !== t && i[r].c.trigger("revolution.slide.onloaded")
                    }, 50)
                }, i[r].startDelay), i[r].startDelay = 0, e("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", p, {passive: !0}), window.addEventListener("mozfullscreenchange", p, {passive: !0}), window.addEventListener("webkitfullscreenchange", p, {passive: !0});
                var P = "resize.revslider-" + i[r].c.attr("id");
                e(window).on(P, function () {
                    if (i[r] !== t) {
                        if (i[r].c == t) return !1;
                        0 != e("body").find(i[r].c) && (l(r), g(r));
                        var o = !1;
                        if ("fullscreen" == i[r].sliderLayout) {
                            var s = e(window).height();
                            "mobile" == i[r].fallbacks.ignoreHeightChanges && a || "always" == i[r].fallbacks.ignoreHeightChanges ? (i[r].fallbacks.ignoreHeightChangesSize = i[r].fallbacks.ignoreHeightChangesSize == t ? 0 : i[r].fallbacks.ignoreHeightChangesSize, o = s != i[r].lastwindowheight && Math.abs(s - i[r].lastwindowheight) > i[r].fallbacks.ignoreHeightChangesSize) : o = s != i[r].lastwindowheight
                        }
                        (i[r].c.outerWidth(!0) != i[r].width || i[r].c.is(":hidden") || o) && (i[r].lastwindowheight = e(window).height(), m(r))
                    }
                }), f(r), g(r), i[r].fallbacks.disableFocusListener || "true" == i[r].fallbacks.disableFocusListener || !0 === i[r].fallbacks.disableFocusListener || (i[r].c.addClass("rev_redraw_on_blurfocus"), N())
            }
        }
    }, g = function (a) {
        var r = i.getHorizontalOffset(i[a].c, "left");
        if ("auto" === i[a].sliderLayout || "fullscreen" === i[a].sliderLayout && !0 === i[a].disableForceFullWidth ? "fullscreen" == i[a].sliderLayout && 1 == i[a].disableForceFullWidth ? punchgs.TweenMax.set(i[a].cpar, {
            left: 0,
            width: "auto"
        }) : punchgs.TweenMax.set(i[a].canvas, {
            left: "carousel" === i[a].sliderType ? 0 : r,
            width: i[a].c.width() - i.getHorizontalOffset(i[a].c, "both")
        }) : punchgs.TweenMax.set(i[a].cpar, {
            left: 0 - Math.ceil(i[a].c.closest("rs-fullwidth-wrap").offset().left - r) + "px",
            width: e(window).width() - i.getHorizontalOffset(i[a].c, "both")
        }), "auto" === i[a].sliderLayout && i[a].modal !== t && i[a].modal.useAsModal) {
            var o = Math.min(i[a].gridwidth[i[a].level], window.innerWidth);
            punchgs.TweenMax.set([i[a].modal.c, i[a].canvas], {width: o})
        }
        i[a].slayers && "fullwidth" != i[a].sliderLayout && "fullscreen" != i[a].sliderLayout && punchgs.TweenMax.set(i[a].slayers, {left: r})
    }, f = function (a, r) {
        e(window).width() < i[a].hideSliderAtLimit ? (i[a].c.trigger("stoptimer"), i.sA(i[a].cpar[0], "displaycache", "none" != i[a].cpar.css("display") ? i[a].cpar.css("display") : i.gA(i[a].cpar[0], "displaycache")), i[a].cpar.css({display: "none"})) : i[a].c.is(":hidden") && r && (i.gA(i[a].cpar[0], "displaycache") != t && "none" != i.gA(i[a].cpar[0], "displaycache") ? i[a].cpar.css({display: i.gA(i[a].cpar[0], "displaycache")}) : i[a].cpar.css({display: "block"}), i[a].c.trigger("restarttimer"), setTimeout(function () {
            m(a, !0)
        }, 150)), i.hideUnHideNav && i[a].navigation.use && i.hideUnHideNav(a)
    }, m = function (r, o) {
        if (i[r].c === t) return !1;
        i[r].dimensionReCheck = {}, i[r].c.trigger("revolution.slide.beforeredraw"), 1 == i[r].infullscreenmode && (i[r].minHeight = e(window).height()), a && (i[r].lastMobileHeight = window.innerHeight), l(r), i.resizeThumbsTabs && !0 !== i.resizeThumbsTabs(r) || (f(r, !0 !== o), g(r), "carousel" == i[r].sliderType && i.prepareCarousel(r, !0), i.setSize(r), i.updateDimensions(r), "standard" === i[r].sliderType && i[r].mtl !== t && i.animateSlide({
            recall: !0,
            id: r
        }), "carousel" === i[r].sliderType && i[r].lastconw != i[r].conw && (clearTimeout(i[r].pcartimer), i[r].pcartimer = setTimeout(function () {
            i.prepareCarousel(r, !0), "carousel" == i[r].sliderType && i[r].carousel.showLayersAllTime && e.each(i[r].slides, function (e) {
                i.animateTheLayers && i.animateTheLayers({slide: e, id: r, mode: "rebuild"})
            })
        }, 100), i[r].lastconw = i[r].conw), i.animateTheLayers && (i[r].pr_processing_key !== t ? i.animateTheLayers({
            slide: i[r].pr_processing_key,
            id: r,
            mode: "rebuild"
        }) : i[r].pr_active_key !== t && i.animateTheLayers({
            slide: i[r].pr_active_key,
            id: r,
            mode: "rebuild"
        }), i.scrollHandling && i.scrollHandling(r, !0)), v(r, i[r].pr_next_bg), "carousel" !== i[r].sliderType && v(r, i[r].pr_active_bg), i.manageNavigation && i.manageNavigation(r)), i[r].c.trigger("revolution.slide.afterdraw"), setTimeout(function () {
            g(r)
        }, 19)
    }, v = function (e, a) {
        a && a.data("panzoom") !== t && i.startPanZoom(a, e, a.data("pztl") !== t ? a.data("pztl").progress() : 0)
    }, y = function (e) {
        i[e].bw = i[e].width / i[e].gridwidth[i[e].level], i[e].bh = i[e].height / i[e].gridheight[i[e].level], i[e].bw = isNaN(i[e].bw) ? 1 : i[e].bw, i[e].bh = isNaN(i[e].bh) ? 1 : i[e].bh, i[e].bh > i[e].bw ? i[e].bh = i[e].bw : i[e].bw = i[e].bh, (i[e].bh > 1 || i[e].bw > 1) && (i[e].bw = 1, i[e].bh = 1)
    }, b = function (a) {
        i[a].autoHeight && punchgs.TweenMax.set([i[a].c, i[a].cpar], {maxHeight: "none"}), punchgs.TweenMax.set(i[a].canvas, {
            overflow: "hidden",
            width: "100%",
            height: "100%",
            maxHeight: i[a].autoHeight ? "none" : i[a].cpar.css("maxHeight")
        }), "carousel" === i[a].sliderType && (i[a].canvas.css({overflow: "visible"}).wrap("<rs-carousel-wrap></rs-carousel-wrap>"), i[a].cpar.prepend("<rs-carousel-space></rs-carousel-space>").append("<rs-carousel-space></rs-carousel-space>"), i.prepareCarousel(a)), i[a].startWithSlide = i[a].startWithSlide === t ? t : "carousel" === i[a].sliderType ? parseInt(i[a].startWithSlide) : parseInt(i[a].startWithSlide) + 1, i[a].cpar.css({overflow: "visible"}), i[a].scrolleffect.bgs = [];
        for (var r = 0; r < i[a].slides.length; r++) {
            var o = e(i[a].slides[r]), s = o.find(">img"), n = o.find("rs-bgvideo");
            s.detach(), n.detach(), (i[a].startWithSlide != t && i.gA(i[a].slides[r], "originalindex") == i[a].startWithSlide || i[a].startWithSlide === t && 0 == r) && (i[a].pr_next_key = o.index()), punchgs.TweenMax.set(o, {
                width: "100%",
                height: "100%",
                overflow: "hidden"
            }), s.wrap("<rs-sbg-px><rs-sbg-wrap></rs-sbg-wrap></rs-sbg-px>");
            var l = s.closest("rs-sbg-wrap"), d = o.data("mediafilter"), c = w(s.data(), a, s[0].style.backgroundColor),
                p = c.bgcolor !== t && c.bgcolor.indexOf("gradient") >= 0,
                h = c.bgcolor !== t && c.bgcolor.indexOf("gradient") >= 0 ? "background:" + c.bgcolor + ";" : "background-color:" + c.bgcolor + ";";
            c.src = s[0].src, c.lazyload = u(s[0], t, a), c.slidebgimage = !0, d = "none" === d || d === t ? "" : d, n.length > 0 && (n.addClass("defaultvid").css({zIndex: 30}), n.appendTo(l), d !== t && "" !== d && "none" !== d && n.addClass(d), c.parallax != t && (n.data("parallax", c.parallax), n.data("showcoveronpause", "on"), n.data("mediafilter", d))), "none" != i[a].dottedOverlay && i[a].dottedOverlay != t && l.append('<rs-dotted class="' + i[a].dottedOverlay + '"></rs-dotted>'), h += (p ? "" : "background-repeat:" + c.bgrepeat + ";background-image:url(" + c.src + ");background-size:" + c.bgfit + ";background-position:" + c.bgposition + ";") + "width:100%;height:100%;", h += "standard" === i[a].sliderType || "undefined" === i[a].sliderType ? "opacity:0;" : "", s.data("mediafilter", d), d = s.data("panzoom") !== t ? "" : d;
            var g = e("<rs-sbg " + (c.lazyload !== t ? 'data-lazyload="' + c.lazyload + '"' : "") + ' src="' + c.src + '" class="' + d + '" data-bgcolor="' + c.bgcolor + '" style="' + h + '"></rs-sbg>');
            l.append(g);
            var f = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + s.get(0).outerHTML);
            s.replaceWith(f), l.data(c), g.data(c), i.gA(o[0], "sba") === t && i.sA(o[0], "sba", "");
            var m = {}, v = i.gA(o[0], "sba").split(";");
            for (var y in v) if (v.hasOwnProperty(y)) {
                var b = v[y].split(":");
                switch (b[0]) {
                    case"f":
                        m.f = b[1];
                        break;
                    case"b":
                        m.b = b[1];
                        break;
                    case"g":
                        m.g = b[1];
                        break;
                    case"t":
                        m.s = b[1]
                }
            }
            i.sA(o[0], "scroll-based", !!i[a].sbtimeline.set && (m.s !== t && m.s)), i[a].scrolleffect.set ? (i[a].scrolleffect.bgs.push({
                fade: m.f !== t ? m.f : !!i[a].scrolleffect.slide && i[a].scrolleffect.fade,
                blur: m.b !== t ? m.b : !!i[a].scrolleffect.slide && i[a].scrolleffect.blur,
                grayscale: m.g !== t ? m.g : !!i[a].scrolleffect.slide && i[a].scrolleffect.grayscale,
                c: l.wrap("<rs-sbg-effectwrap></rs-sbg-effectwrap>").parent()
            }), o.prepend(l.parent().parent())) : o.prepend(l.parent())
        }
    }, w = function (r, o, s) {
        r.bg = r.bg === t ? "" : r.bg;
        var n = r.bg.split(";"),
            l = {bgposition: "50% 50%", bgfit: "cover", bgrepeat: "no-repeat", bgcolor: s || "transparent"};
        for (var d in n) if (n.hasOwnProperty(d)) {
            var c = n[d].split(":"), p = c[0], u = c[1], h = "";
            switch (p) {
                case"p":
                    h = "bgposition";
                    break;
                case"f":
                    h = "bgfit";
                    break;
                case"r":
                    h = "bgrepeat";
                    break;
                case"c":
                    h = "bgcolor"
            }
            h !== t && (l[h] = u)
        }
        return i[o].fallbacks.panZoomDisableOnMobile && a && (l.panzoom = null, l.bgfit = "cover"), e.extend(!0, r, l)
    }, _ = function (e, t) {
        t.find(".slot, .slot-circle-wrapper").each(function () {
        }), i[e].transition = 0
    }, x = function (e) {
        var i = e;
        return e != t && e.length > 0 && (i = e.split("?")[0]), i
    }, k = function (e) {
        var i = e;
        return e != t && e.length > 0 && (i = i.replace(document.location.protocol, "")), i
    }, T = function (e, t) {
        var i = e.split("/"), a = t.split("/");
        i.pop();
        for (var r = 0; r < a.length; r++) "." != a[r] && (".." == a[r] ? i.pop() : i.push(a[r]));
        return i.join("/")
    }, L = function (e, a, r) {
        if (i[a] !== t) {
            for (var o in i[a].syncload--, i[a].loadqueue) if (i[a].loadqueue.hasOwnProperty(o) && "loaded" !== i[a].loadqueue[o].progress) {
                var s = i[a].loadqueue[o].src !== t ? i[a].loadqueue[o].src.replace(/\.\.\/\.\.\//gi, "") : i[a].loadqueue[o].src;
                (s === e.src || k(s) === k(e.src) || x(document.location.protocol + s) === x(decodeURIComponent(e.src)) || x(document.location.origin + s) === x(decodeURIComponent(e.src)) || x(self.location.href.substring(0, self.location.href.length - 1) + s) === x(decodeURIComponent(e.src)) || x(T(self.location.href, i[a].loadqueue[o].src)) === x(decodeURIComponent(e.src)) || x(document.location.origin + "/" + s) === x(decodeURIComponent(e.src)) || x(self.location.href.substring(0, self.location.href.length - 1) + "/" + s) === x(decodeURIComponent(e.src)) || x(i[a].loadqueue[o].src) === x(decodeURIComponent(e.src)) || "file://" === window.location.origin && x(e.src).match(new RegExp(s))) && (i[a].loadqueue[o].img = e, i[a].loadqueue[o].progress = r, i[a].loadqueue[o].width = e.width, i[a].loadqueue[o].height = e.height)
            }
            R(a)
        }
    }, R = function (a) {
        4 != i[a].syncload && i[a].loadqueue && e.each(i[a].loadqueue, function (r, o) {
            if ("prepared" == o.progress && i[a].syncload <= 4) {
                if (i[a].syncload++, "img" == o.type) {
                    var s = new Image;
                    /^([\w]+\:)?\/\//.test(o.src) && -1 === o.src.indexOf(location.host) && "" !== i[a].imgCrossOrigin && i[a].imgCrossOrigin !== t && (s.crossOrigin = i[a].imgCrossOrigin), s.onload = function () {
                        L(this, a, "loaded"), o.error = !1
                    }, s.onerror = function () {
                        L(this, a, "failed"), o.error = !0
                    }, s.src = o.src, o.starttoload = e.now()
                } else e.get(o.src, function (e) {
                    o.innerHTML = (new XMLSerializer).serializeToString(e.documentElement), o.progress = "loaded", i[a].syncload--, R(a)
                }).fail(function () {
                    o.progress = "failed", i[a].syncload--, R(a)
                });
                o.progress = "inload"
            }
        })
    }, I = function (a, r, o, s) {
        if (a !== t && 0 !== a.length) {
            var n = a.querySelectorAll("img, rs-sbg, .rs-svg");
            for (var l in n) if (n.hasOwnProperty(l)) {
                var d = u(n[l], t, r),
                    c = d !== t ? d : i.gA(n[l], "svg_src") != t ? i.gA(n[l], "svg_src") : n[l].src === t ? e(n[l]).data("src") : n[l].src,
                    p = i.gA(n[l], "svg_src") != t ? "svg" : "img";
                c !== t && 0 == i[r].loadqueue.filter(function (e) {
                    return e.src === c
                }).length && i[r].loadqueue.push({
                    src: c,
                    index: l,
                    starttoload: e.now(),
                    type: p || "img",
                    prio: o,
                    progress: n[l].complete && c === n[l].src ? "loaded" : "prepared",
                    static: s,
                    width: n[l].complete && c === n[l].src ? n[l].width : t,
                    height: n[l].complete && c === n[l].src ? n[l].height : t
                })
            }
            R(r)
        }
    }, S = function (r, o, s) {
        if (r !== t && 0 !== r.length && i[o] !== t) {
            var n = !1, l = r.querySelectorAll("img, rs-sbg, .rs-svg");
            for (var d in l) if (l.hasOwnProperty(d) && "length" !== d && !(l[d].className.indexOf("rs-pzimg") >= 0)) {
                var c = e(l[d]).data(), p = u(l[d], t, o),
                    h = p !== t ? p : i.gA(l[d], "svg_src") != t ? i.gA(l[d], "svg_src") : l[d].src === t ? e(l[d]).data("src") : l[d].src,
                    g = i.getLoadObj(o, h);
                if (i.sA(l[d], "src-rs-ref", h), c.loaded === t && g !== t && g.progress && "loaded" == g.progress) {
                    if (l[d].src = g.src, "img" == g.type) {
                        if (c.slidebgimage) {
                            -1 == g.src.indexOf("images/transparent.png") && -1 == g.src.indexOf("assets/transparent.png") || c.bgcolor === t ? l[d].style.backgroundImage = 'url("' + g.src + '")' : c.bgcolor !== t && (l[d].style.background = c.bgcolor), i.sA(r, "owidth", g.width), i.sA(r, "oheight", g.height);
                            var f = r.getElementsByTagName("rs-sbg-wrap");
                            f.length > 0 && (i.sA(f[0], "owidth", g.width), i.sA(f[0], "oheight", g.height))
                        }
                    } else "svg" == g.type && "loaded" == g.progress && (l[d].innerHTML = g.innerHTML);
                    c.loaded = !0
                }
                g && g.progress && g.progress.match(/inprogress|inload|prepared/g) && (!g.error && e.now() - g.starttoload < 3e3 ? n = !0 : (g.progress = "failed", g.reported_img || (g.reported_img = !0, console.log(h + "  Could not be loaded !")))), 1 != i[o].youtubeapineeded || window.YT && YT.Player != t || (n = z("youtube", o)), 1 != i[o].vimeoapineeded || window.Vimeo || (n = z("vimeo", o))
            }
            !a && i[o].audioqueue && i[o].audioqueue.length > 0 && e.each(i[o].audioqueue, function (t, i) {
                i.status && "prepared" === i.status && e.now() - i.start < i.waittime && (n = !0)
            }), e.each(i[o].loadqueue, function (t, i) {
                !0 === i.static && ("loaded" != i.progress && "done" !== i.progress || "failed" === i.progress) && ("failed" != i.progress || i.reported ? !i.error && e.now() - i.starttoload < 5e3 ? n = !0 : i.reported || (i.reported = A(i.src, i.error)) : i.reported = A(i.src, i.error))
            }), n ? punchgs.TweenMax.delayedCall(.18, S, [r, o, s]) : punchgs.TweenMax.delayedCall(.18, s)
        }
    }, A = function (e, t) {
        return console.log("Static Image " + e + "  Could not be loaded in time. Error Exists:" + t), !0
    }, z = function (t, a) {
        if (e.now() - i[a][t + "starttime"] > 5e3 && 1 != i[a][t + "warning"]) {
            i[a][t + "warning"] = !0;
            var r = t + " Api Could not be loaded !";
            "https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), i[a].c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>")
        }
        return !0
    }, O = function (a) {
        i[a] !== t && (i[a].pr_active_slide = e(i[a].slides[i[a].pr_active_key]), i[a].pr_next_slide = e(i[a].slides[i[a].pr_processing_key]), i[a].pr_active_bg = i[a].pr_active_slide.find("rs-sbg-wrap"), i[a].pr_next_bg = i[a].pr_next_slide.find("rs-sbg-wrap"), punchgs.TweenMax.to([i[a].pr_active_bg, i[a].pr_next_bg], .5, {opacity: 0}), punchgs.TweenMax.set(i[a].pr_active_slide, {zIndex: 18}), punchgs.TweenMax.set(i[a].pr_next_slide, {
            autoAlpha: 0,
            zIndex: 20
        }), i[a].tonpause = !1, i.removeTheLayers && i[a].pr_active_key !== t && i.removeTheLayers(i[a].pr_active_slide, a, !0), i[a].firststart = 1, setTimeout(function () {
            delete i[a].pr_active_key, delete i[a].pr_processing_key
        }, 200))
    }, M = function (a, r) {
        if (i[a] !== t) if (clearTimeout(i[a].waitWithSwapSlide), i[a].pr_processing_key === t) {
            if (i[a].startWithSlideKey !== t && (i[a].pr_next_key = i.getComingSlide(a, i[a].startWithSlideKey).nindex, delete i[a].startWithSlideKey), i[a].pr_active_slide = e(i[a].slides[i[a].pr_active_key]), i[a].pr_next_slide = e(i[a].slides[i[a].pr_next_key]), i[a].pr_next_key == i[a].pr_active_key && !0 !== i[a].onlyPreparedSlide) return delete i[a].pr_next_key;
            !0 === i[a].onlyPreparedSlide && (i[a].onlyPreparedSlide = !1), i[a].pr_processing_key = i[a].pr_next_key, i[a].pr_cache_pr_next_key = i[a].pr_next_key, delete i[a].pr_next_key, i[a].pr_next_slide !== t && i[a].pr_next_slide[0] !== t && i.gA(i[a].pr_next_slide[0], "hal") !== t && i.sA(i[a].pr_next_slide[0], "sofacounter", i.gA(i[a].pr_next_slide[0], "sofacounter") === t ? 1 : parseInt(i.gA(i[a].pr_next_slide[0], "sofacounter"), 0) + 1), i[a].stopLoop && i[a].pr_processing_key == i[a].lastslidetoshow - 1 && (i[a].c.find("rs-progress").css({visibility: "hidden"}), i[a].c.trigger("revolution.slide.onstop"), i[a].noloopanymore = 1), i[a].pr_next_slide.index() === i[a].slideamount - 1 && i[a].looptogo > 0 && "disabled" !== i[a].looptogo && (i[a].looptogo--, i[a].looptogo <= 0 && (i[a].stopLoop = !0)), i[a].tonpause = !0, i[a].c.trigger("stoptimer"), "off" === i[a].spinner && (i[a].loader !== t ? i[a].loader.css({display: "none"}) : i[a].loadertimer = setTimeout(function () {
                i[a].loader !== t && i[a].loader.css({display: "block"})
            }, 18)), I(i[a].pr_next_slide[0], a, 1), i.preLoadAudio && i.preLoadAudio(i[a].pr_next_slide, a, 1), S(i[a].pr_next_slide[0], a, function () {
                i[a] !== t && (i[a].pr_next_slide.find("rs-bgvideo").each(function () {
                    var t = e(this);
                    t.hasClass("HasListener") || (t.data("bgvideo", 1), i.manageVideoLayer && i.manageVideoLayer(t, a)), 0 == t.find(".rs-fullvideo-cover").length && t.append('<div class="rs-fullvideo-cover"></div>')
                }), C(i[a].pr_next_slide.find("rs-sbg"), a, r))
            }), g(a)
        } else i[a].waitWithSwapSlide = setTimeout(function () {
            M(a, r)
        }, 18)
    }, C = function (a, r, o) {
        if (i[r] !== t) {
            if (i[r].pr_active_slide = e(i[r].slides[i[r].pr_active_key]), i[r].pr_next_slide = e(i[r].slides[i[r].pr_processing_key]), i[r].pr_active_bg = i[r].pr_active_slide.find("rs-sbg-wrap"), i[r].pr_next_bg = i[r].pr_next_slide.find("rs-sbg-wrap"), i[r].tonpause = !1, clearTimeout(i[r].loadertimer), i[r].loader !== t && i[r].loader.css({display: "none"}), i.setSize(r), i.manageNavigation && i[r].navigation.use && i.manageNavigation(r, !1), i[r].c.trigger("revolution.slide.onbeforeswap", {
                slider: r,
                slideIndex: parseInt(i[r].pr_active_key, 0) + 1,
                slideLIIndex: i[r].pr_active_key,
                nextSlideIndex: parseInt(i[r].pr_processing_key, 0) + 1,
                nextSlideLIIndex: i[r].pr_processing_key,
                nextslide: i[r].pr_next_slide,
                slide: i[r].pr_active_slide,
                currentslide: i[r].pr_active_slide,
                prevslide: i[r].pr_lastshown_key !== t ? i[r].slides[i[r].pr_lastshown_key] : ""
            }), i[r].transition = 1, i[r].stopByVideo = !1, i[r].pr_next_slide[0] !== t && i.gA(i[r].pr_next_slide[0], "duration") != t && "" != i.gA(i[r].pr_next_slide[0], "duration") ? i[r].duration = parseInt(i.gA(i[r].pr_next_slide[0], "duration"), 0) : i[r].duration = i[r].origcd, i[r].pr_next_slide[0] === t || "true" != i.gA(i[r].pr_next_slide[0], "ssop") && !0 !== i.gA(i[r].pr_next_slide[0], "ssop") ? i[r].ssop = !1 : i[r].ssop = !0, i[r].sbtimeline.set && i[r].sbtimeline.fixed && i.updateFixedScrollTimes(r), i[r].c.trigger("nulltimer"), i[r].sdir = i[r].pr_processing_key < i[r].pr_active_key ? 1 : 0, "arrow" == i[r].sc_indicator && (0 == i[r].pr_active_key && i[r].pr_processing_key == i[r].slideamount - 1 && (i[r].sdir = 1), i[r].pr_active_key == i[r].slideamount - 1 && 0 == i[r].pr_processing_key && (i[r].sdir = 0)), i[r].lsdir = i[r].sdir, i[r].pr_active_key != i[r].pr_processing_key && 1 != i[r].firststart && "carousel" !== i[r].sliderType && i.removeTheLayers && i.removeTheLayers(i[r].pr_active_slide, r), i[r].pr_next_slide.hasClass("rs-pause-timer-once") || i[r].pr_next_slide.hasClass("rs-pause-timer-always") ? i[r].stopByVideo = !0 : i[r].c.trigger("restarttimer"), i[r].pr_next_slide.removeClass("rs-pause-timer-once"), i[r].pr_next_slide[0] !== t && i.sA(i[r].c[0], "slideactive", i.gA(i[r].pr_next_slide[0], "key")), "carousel" == i[r].sliderType) i[r].mtl = new punchgs.TimelineLite, i.prepareCarousel(r, i[r].mtl), P(r), i[r].transition = 0; else {
                i[r].mtl = new punchgs.TimelineLite({
                    onComplete: function () {
                        P(r)
                    }
                }), i[r].mtl.add(punchgs.TweenMax.set(i[r].pr_next_bg.find("rs-sbg"), {opacity: 0})), i[r].mtl.pause(), i.animateTheLayers && (i[r].pr_next_key !== t ? i.animateTheLayers({
                    slide: i[r].pr_next_key,
                    id: r,
                    mode: "preset"
                }) : i[r].pr_processing_key !== t ? i.animateTheLayers({
                    slide: i[r].pr_processing_key,
                    id: r,
                    mode: "preset"
                }) : i[r].pr_active_key !== t && i.animateTheLayers({
                    slide: i[r].pr_active_key,
                    id: r,
                    mode: "preset"
                })), 1 == i[r].firststart && (punchgs.TweenMax.set(i[r].pr_active_slide, {autoAlpha: 0}), i[r].firststart = 0), punchgs.TweenMax.set(i[r].pr_active_slide, {zIndex: 18}), punchgs.TweenMax.set(i[r].pr_next_slide, {
                    autoAlpha: 0,
                    zIndex: 20
                }), "prepared" == i.gA(i[r].pr_next_slide[0], "differentissplayed") && (i.sA(i[r].pr_next_slide[0], "differentissplayed", "done"), i.sA(i[r].pr_next_slide[0], "anim", i.gA(i[r].pr_next_slide[0], "savedanim"))), i.gA(i[r].pr_next_slide[0], "firstanim") != t && "done" != i.gA(i[r].pr_next_slide[0], "differentissplayed") && (i.sA(i[r].pr_next_slide[0], "savedanim", i.gA(i[r].pr_next_slide[0], "anim")), i.sA(i[r].pr_next_slide[0], "anim", i.gA(i[r].pr_next_slide[0], "firstanim")), i.sA(i[r].pr_next_slide[0], "differentissplayed", "prepared"));
                var s = function (e) {
                    var i = (e = e === t ? "t:random" : e).split(";"), a = {};
                    for (var r in i) if (i.hasOwnProperty(r)) {
                        var o = i[r].split(":"), s = o[0], n = o[1], l = "transition";
                        switch (s) {
                            case"ei":
                                l = "easein";
                                break;
                            case"eo":
                                l = "easeout";
                                break;
                            case"s":
                                l = "masterspeed";
                                break;
                            case"sl":
                                l = "slotamount";
                                break;
                            case"r":
                                l = "rotate"
                        }
                        s !== t && n !== t && (a[l] = n.split(","))
                    }
                    a.transition === t && (a = {transition: ["fade"]});
                    return a
                }(i.gA(i[r].pr_next_slide[0], "anim"));
                i.sA(i[r].pr_next_slide[0], "ntrid", "on" == i.gA(i[r].pr_next_slide[0], "rndtrans") ? Math.round(80 * Math.random()) : parseInt(i.gA(i[r].pr_next_slide[0], "ntrid"), 0) + 1 || 0), i.sA(i[r].pr_next_slide[0], "ntrid", s.transition === t || i.gA(i[r].pr_next_slide[0], "ntrid") == s.transition.length ? 0 : i.gA(i[r].pr_next_slide[0], "ntrid")), i.animateSlide({
                    animation: s,
                    ntrid: i.gA(i[r].pr_next_slide[0], "ntrid"),
                    id: r
                }), i[r].pr_next_bg.data("panzoom") !== t && (i.startPanZoom(i[r].pr_next_bg, r), i[r].mtl.add(punchgs.TweenMax.set(i[r].pr_next_bg, {
                    autoAlpha: 0,
                    immediateRender: !0
                }), 0)), i[r].mtl.pause()
            }
            i.scrollHandling && i[r].mtl !== t && (i.scrollHandling(r, !0, 0), i[r].mtl.eventCallback("onUpdate", function () {
                i.scrollHandling(r, !0, 0, !0)
            })), "off" != i[r].parallax.type && i[r].parallax.firstgo == t && i.scrollHandling && (i[r].parallax.firstgo = !0, i[r].lastscrolltop = -999, i.scrollHandling(r, !0, 0), setTimeout(function () {
                i[r] !== t && (i[r].lastscrolltop = -999, i.scrollHandling(r, !0, 0))
            }, 70), setTimeout(function () {
                i[r] !== t && (i[r].lastscrolltop = -999, i.scrollHandling(r, !0, 0))
            }, 100)), i.animateTheLayers ? "carousel" === i[r].sliderType ? i[r].carousel.showLayersAllTime ? (e.each(i[r].slides, function (e) {
                i[r].carousel.allLayersStarted ? i.animateTheLayers({
                    slide: e,
                    id: r,
                    mode: "rebuild"
                }) : i.animateTheLayers({slide: e, id: r, mode: "start"})
            }), i[r].carousel.allLayersStarted = !0) : (0 !== i[r].firststart ? i.animateTheLayers({
                slide: 0,
                id: r,
                mode: "start"
            }) : !0 !== o && i.animateTheLayers({
                slide: i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key,
                id: r,
                mode: "start"
            }), i[r].firststart = 0) : i.animateTheLayers({
                slide: i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key,
                id: r,
                mode: "start"
            }) : i[r].mtl != t && setTimeout(function () {
                i[r].mtl.resume()
            }, 18), punchgs.TweenMax.to(i[r].pr_next_slide, .001, {autoAlpha: 1})
        }
    };
    var P = function (r) {
        if (i[r] !== t && (i[r].firstSlideAvailable === t && (i[r].firstSlideAvailable = !0, i.showFirstTime !== t && i.showFirstTime(r)), "carousel" === i[r].sliderType || (punchgs.TweenMax.to(i[r].pr_next_bg.find("rs-sbg"), .001, {
            zIndex: 20,
            autoAlpha: 1,
            onComplete: function () {
                _(r, i[r].pr_next_slide)
            }
        }), i[r].pr_next_slide.index() != i[r].pr_active_slide.index() && punchgs.TweenMax.to(i[r].pr_active_slide, .2, {
            zIndex: 18,
            autoAlpha: 0,
            onComplete: function () {
                _(r, i[r].pr_active_slide)
            }
        })), i[r].pr_active_key = i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key, delete i[r].pr_processing_key, "scroll" != i[r].parallax.type && "scroll+mouse" != i[r].parallax.type && "mouse+scroll" != i[r].parallax.type || (i[r].lastscrolltop = -999, i.scrollHandling(r)), i[r].mtldiff = i[r].mtl.time(), delete i[r].mtl, i[r].pr_active_key !== t)) {
            i.gA(i[r].slides[i[r].pr_active_key], "sloop") !== t && function (e) {
                if (i[e] !== t) {
                    i[e].sloops = i[e].sloops === t ? {} : i[e].sloops;
                    var a = i.gA(i[e].slides[i[e].pr_active_key], "key"), r = i[e].sloops[a];
                    if (r === t) {
                        r = {s: 2500, e: 4500, r: "unlimited"};
                        var o = i.gA(i[e].slides[i[e].pr_active_key], "sloop").split(";");
                        for (var s in o) if (o.hasOwnProperty(s)) {
                            var n = o[s].split(":");
                            switch (n[0]) {
                                case"s":
                                    r.s = parseInt(n[1], 0) / 1e3;
                                    break;
                                case"e":
                                    r.e = parseInt(n[1], 0) / 1e3;
                                    break;
                                case"r":
                                    r.r = n[1]
                            }
                        }
                        r.r = "unlimited" === r.r ? -1 : parseInt(r.r, 0), i[e].sloops[a] = r, r.key = a
                    }
                    r.ct = {time: r.s}, r.tl = new punchgs.TimelineMax({}), r.timer = punchgs.TweenMax.fromTo(r.ct, r.e - r.s, {time: r.s}, {
                        time: r.e,
                        ease: punchgs.Linear.easeNone,
                        onRepeat: function () {
                            for (var a in i[e].layers[r.key]) i[e].layers[r.key].hasOwnProperty(a) && i[e]._L[a].timeline.play(r.s);
                            var o = i[e].c.find("rs-progress");
                            o !== t && o[0] !== t && o[0].tween !== t && o[0].tween.time(r.s)
                        },
                        onUpdate: function () {
                        },
                        onComplete: function () {
                        }
                    }).repeat(r.r), r.tl.add(r.timer, r.s), r.tl.time(i[e].mtldiff)
                }
            }(r), i[r].c.find(".active-rs-slide").removeClass("active-rs-slide"), e(i[r].slides[i[r].pr_active_key]).addClass("active-rs-slide"), i.sA(i[r].c[0], "slideactive", i.gA(i[r].slides[i[r].pr_active_key], "key")), i[r].pr_active_bg.data("pztl") != t && (i[r].pr_active_bg.data("pztl").reverse(), i[r].pr_active_bg.data("pztl").timeScale(25)), i[r].pr_next_bg.data("panzoom") !== t && (i[r].pr_next_bg.data("pztl") != t ? (i[r].pr_next_bg.data("pztl").timeScale(1), i[r].pr_next_bg.data("pztl").play()) : i.startPanZoom(i[r].pr_next_bg, r)), i[r].pr_next_slide.find("rs-bgvideo").each(function (t) {
                if (a && !i[r].fallbacks.allowHTML5AutoPlayOnAndroid) return !1;
                var o = e(this);
                i.resetVideo(o, r, !1, !0), punchgs.TweenMax.fromTo(o, .25, {autoAlpha: 0}, {
                    autoAlpha: 1,
                    ease: punchgs.Power3.easeInOut,
                    delay: .05,
                    onComplete: function () {
                        i.animcompleted && i.animcompleted(o, r)
                    }
                })
            }), i[r].pr_active_bg.find("rs-bgvideo").each(function (t) {
                if (a && !i[r].fallbacks.allowHTML5AutoPlayOnAndroid) return !1;
                var o = e(this);
                i.stopVideo && (i.resetVideo(o, r), i.stopVideo(o, r)), punchgs.TweenMax.to(o, 1, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2
                })
            });
            var o = {
                slider: r,
                slideIndex: parseInt(i[r].pr_active_key, 0) + 1,
                slideLIIndex: i[r].pr_active_key,
                slide: i[r].pr_next_slide,
                currentslide: i[r].pr_next_slide,
                prevSlideIndex: i[r].pr_lastshown_key !== t && parseInt(i[r].pr_lastshown_key, 0) + 1,
                prevSlideLIIndex: i[r].pr_lastshown_key !== t && parseInt(i[r].pr_lastshown_key, 0),
                prevSlide: i[r].pr_lastshown_key !== t && i[r].slides[i[r].pr_lastshown_key]
            };
            if (i[r].c.trigger("revolution.slide.onchange", o), i[r].c.trigger("revolution.slide.onafterswap", o), i[r].pr_lastshown_key = i[r].pr_active_key, i[r].startWithSlide !== t && "done" !== i[r].startWithSlide && "carousel" === i[r].sliderType) {
                for (var s = i[r].startWithSlide, n = 0; n <= i[r].slides.length - 1; n++) i[r].slides[n] !== t && i[r].slides[n][0] !== t && i.gA(i[r].slides[n][0], "originalindex") === i[r].startWithSlide && (s = n);
                0 !== s && i.callingNewSlide(r, s), i[r].startWithSlide = "done"
            }
            i[r].duringslidechange = !1, i[r].pr_active_slide.length > 0 && 0 != i.gA(i[r].pr_active_slide[0], "hal") && i.gA(i[r].pr_active_slide[0], "hal") <= i.gA(i[r].pr_active_slide[0], "sofacounter") && i[r].c.revremoveslide(i[r].pr_active_slide.index());
            var l = i[r].pr_processing_key || i[r].pr_active_key || 0;
            i[r].rowzones != t && (l = l > i[r].rowzones.length ? i[r].rowzones.length : l), i[r].rowzones != t && i[r].rowzones.length > 0 && i[r].rowzones[l] != t && l >= 0 && l <= i[r].rowzones.length && i[r].rowzones[l].length > 0 && i.setSize(r), delete i[r].sc_indicator, delete i[r].sc_indicator_dir, i[r].firstLetItFree === t && (i.scrollHandling && i.scrollHandling(r, !0), i[r].firstLetItFree = !0)
        }
    }, j = function (r) {
        i[r].loop = 0, i[r].stopAtSlide != t && i[r].stopAtSlide > -1 ? i[r].lastslidetoshow = i[r].stopAtSlide : i[r].lastslidetoshow = 999, i[r].stopLoop = !1, 0 == i[r].looptogo && (i[r].stopLoop = !0);
        var o = i[r].c.find("rs-progress");
        i[r].c.on("stoptimer", function () {
            var t = e(this).find("rs-progress");
            t[0].tween.pause(), i[r].disableProgressBar && t.css({visibility: "hidden"}), i[r].sliderstatus = "paused", i.unToggleState(i[r].slidertoggledby)
        }), i[r].c.on("starttimer", function () {
            i[r].forcepaused || (1 != i[r].conthover && 1 != i[r].stopByVideo && i[r].width > i[r].hideSliderAtLimit && 1 != i[r].tonpause && 1 != i[r].overnav && 1 != i[r].ssop && (1 === i[r].noloopanymore || i[r].viewPort.enable && !i[r].inviewport || (o.css({visibility: "visible"}), o[0].tween.resume(), i[r].sliderstatus = "playing")), i[r].disableProgressBar && o.css({visibility: "hidden"}), i.toggleState(i[r].slidertoggledby))
        }), i[r].c.on("restarttimer", function () {
            if (!i[r].forcepaused) {
                var t = e(this).find("rs-progress");
                if (i[r].mouseoncontainer && "on" == i[r].navigation.onHoverStop && !a) return !1;
                1 === i[r].noloopanymore || i[r].viewPort.enable && !i[r].inviewport || 1 == i[r].ssop || (t.css({visibility: "visible"}), t[0].tween.kill(), t[0].tween = punchgs.TweenMax.fromTo(t, i[r].duration / 1e3, {width: "0%"}, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: s,
                    delay: 1
                }), i[r].sliderstatus = "playing"), i[r].disableProgressBar && t.css({visibility: "hidden"}), i.toggleState(i[r].slidertoggledby), i[r].mouseoncontainer && 1 == i[r].navigation.onHoverStop && !a && (i[r].c.trigger("stoptimer"), i[r].c.trigger("revolution.slide.onpause"))
            }
        }), i[r].c.on("nulltimer", function () {
            o[0].tween.kill(), o[0].tween = punchgs.TweenMax.fromTo(o, i[r].duration / 1e3, {width: "0%"}, {
                force3D: "auto",
                width: "100%",
                ease: punchgs.Linear.easeNone,
                onComplete: s,
                delay: 1
            }), o[0].tween.pause(0), i[r].disableProgressBar && o.css({visibility: "hidden"}), i[r].sliderstatus = "paused"
        });
        var s = function () {
            0 == e("body").find(i[r].c).length && (!function (t) {
                i[t].c.children().each(function () {
                    try {
                        e(this).die("click")
                    } catch (e) {
                    }
                    try {
                        e(this).die("mouseenter")
                    } catch (e) {
                    }
                    try {
                        e(this).die("mouseleave")
                    } catch (e) {
                    }
                    try {
                        e(this).unbind("hover")
                    } catch (e) {
                    }
                });
                try {
                    i[t].c.die("click", "mouseenter", "mouseleave")
                } catch (e) {
                }
                clearInterval(i[t].cdint), i[t].c = null
            }(r), clearInterval(i[r].cdint)), i[r].c.trigger("revolution.slide.slideatend"), 1 == i[r].c.data("conthoverchanged") && (i[r].conthover = i[r].c.data("conthover"), i[r].c.data("conthoverchanged", 0)), i.callingNewSlide(r, 1)
        };
        o[0].tween = punchgs.TweenMax.fromTo(o, i[r].duration / 1e3, {width: "0%"}, {
            force3D: "auto",
            width: "100%",
            ease: punchgs.Linear.easeNone,
            onComplete: s,
            delay: 1
        }), i[r].slideamount > 1 && (0 != i[r].stopAfterLoops || 1 != i[r].stopAtSlide) ? i[r].c.trigger("starttimer") : (i[r].noloopanymore = 1, i[r].c.trigger("nulltimer")), i[r].c.on("tp-mouseenter", function () {
            i[r].mouseoncontainer = !0, 1 != i[r].navigation.onHoverStop || a || (i[r].c.trigger("stoptimer"), i[r].c.trigger("revolution.slide.onpause"))
        }), i[r].c.on("tp-mouseleft", function () {
            i[r].mouseoncontainer = !1, 1 != i[r].c.data("conthover") && 1 == i[r].navigation.onHoverStop && (1 == i[r].viewPort.enable && i[r].inviewport || 0 == i[r].viewPort.enable) && (i[r].c.trigger("revolution.slide.onresume"), i[r].c.trigger("starttimer"))
        })
    }, Q = function () {
        e(".rev_redraw_on_blurfocus").each(function () {
            var e = this.id;
            if (i[e] == t || i[e].c == t || 0 === i[e].c.length) return !1;
            1 != i[e].windowfocused && (i[e].windowfocused = !0, punchgs.TweenMax.delayedCall(.3, function () {
                i[e].fallbacks.nextSlideOnWindowFocus && i[e].c.revnext(), i[e].c.revredraw(), "playing" == i[e].lastsliderstatus && i[e].c.revresume(), i[e].c.trigger("revolution.slide.tabfocused")
            }))
        })
    }, H = function () {
        document.hasFocus() || e(".rev_redraw_on_blurfocus").each(function () {
            i[this.id].windowfocused = !1, i[this.id].lastsliderstatus = i[this.id].sliderstatus, i[this.id].c.revpause(), i[this.id].pr_next_bg !== t && i[this.id].pr_next_bg.data("panzoom") !== t && i.stopPanZoom(i[this.id].pr_next_bg, i[this.id]), i[this.id].pr_active_bg !== t && i[this.id].pr_active_bg.data("panzoom") !== t && i.stopPanZoom(i[this.id].pr_active_bg, i[this.id]), i[this.id].c.trigger("revolution.slide.tabblured")
        })
    }, N = function () {
        var i = document.documentMode === t, a = window.chrome;
        1 !== e("body").data("revslider_focus_blur_listener") && (e("body").data("revslider_focus_blur_listener", 1), i && !a ? e(window).on("focusin", function () {
            Q()
        }).on("focusout", function () {
            H()
        }) : window.addEventListener ? (window.addEventListener("focus", function (e) {
            Q()
        }, {capture: !1, passive: !0}), window.addEventListener("blur", function (e) {
            H()
        }, {capture: !1, passive: !0})) : (window.attachEvent("focus", function (e) {
            Q()
        }), window.attachEvent("blur", function (e) {
            H()
        })))
    }, B = function (e) {
        for (var t, i = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), r = 0; r < a.length; r++) a[r] = a[r].replace("%3D", "="), t = a[r].split("="), i.push(t[0]), i[t[0]] = t[1];
        return i
    }, D = function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }, W = function (i) {
        return function (i) {
            for (var a in i.minHeight = i.minHeight !== t ? "none" === i.minHeight || "0" === i.minHeight || "0px" === i.minHeight || "" == i.minHeight || " " == i.minHeight ? 0 : parseInt(i.minHeight, 0) : 0, i.maxHeight = "none" === i.maxHeight || "0" === i.maxHeight ? 0 : parseInt(i.maxHeight, 0), i.carousel.maxVisibleItems = i.carousel.maxVisibleItems < 1 ? 999 : i.carousel.maxVisibleItems, i.carousel.vertical_align = "top" === i.carousel.vertical_align ? "0%" : "bottom" === i.carousel.vertical_align ? "100%" : "50%", i.carousel.space = parseInt(i.carousel.space, 0), i.carousel.maxOpacity = parseInt(i.carousel.maxOpacity, 0), i.carousel.maxOpacity = i.carousel.maxOpacity > 1 ? i.carousel.maxOpacity / 100 : i.carousel.maxOpacity, i.carousel.maxRotation = parseInt(i.carousel.maxRotation, 0), i.carousel.minScale = parseInt(i.carousel.minScale, 0), i.carousel.minScale = i.carousel.minScale > .9 ? i.carousel.minScale / 100 : i.carousel.minScale, i.carousel.speed = parseInt(i.carousel.speed, 0), i.navigation.maintypes = ["arrows", "tabs", "thumbnails", "bullets"], i.navigation.maintypes) i.navigation.maintypes.hasOwnProperty(a) && i.navigation[i.navigation.maintypes[a]] !== t && (i.navigation[i.navigation.maintypes[a]].animDelay = parseInt(i.navigation[i.navigation.maintypes[a]].animDelay, 0) / 1e3, i.navigation[i.navigation.maintypes[a]].animSpeed = parseInt(i.navigation[i.navigation.maintypes[a]].animSpeed, 0) / 1e3);
            if (e.isNumeric(i.scrolleffect.tilt) || -1 !== i.scrolleffect.tilt.indexOf("%") && (i.scrolleffect.tilt = parseInt(i.scrolleffect.tilt)), i.scrolleffect.tilt = i.scrolleffect.tilt / 100, i.navigation.thumbnails.position = "outer-horizontal" == i.navigation.thumbnails.position ? "bottom" == i.navigation.thumbnails.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == i.navigation.thumbnails.position ? "left" == i.navigation.thumbnails.h_align ? "outer-left" : "outer-right" : i.navigation.thumbnails.position, i.navigation.tabs.position = "outer-horizontal" == i.navigation.tabs.position ? "bottom" == i.navigation.tabs.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == i.navigation.tabs.position ? "left" == i.navigation.tabs.h_align ? "outer-left" : "outer-right" : i.navigation.tabs.position, i.sbtimeline.speed = parseInt(i.sbtimeline.speed, 0) / 1e3 || .5, !0 === i.sbtimeline.set && !0 === i.sbtimeline.fixed && "auto" !== i.sliderLayout ? (i.sbtimeline.fixStart = parseInt(i.sbtimeline.fixStart), i.sbtimeline.fixEnd = parseInt(i.sbtimeline.fixEnd)) : i.sbtimeline.fixed = !1, i.startDelay = parseInt(i.startDelay, 0) || 0, i.navigation !== t && i.navigation.arrows != t && i.navigation.arrows.hide_under != t && (i.navigation.arrows.hide_under = parseInt(i.navigation.arrows.hide_under)), i.navigation !== t && i.navigation.bullets != t && i.navigation.bullets.hide_under != t && (i.navigation.bullets.hide_under = parseInt(i.navigation.bullets.hide_under)), i.navigation !== t && i.navigation.thumbnails != t && i.navigation.thumbnails.hide_under != t && (i.navigation.thumbnails.hide_under = parseInt(i.navigation.thumbnails.hide_under)), i.navigation !== t && i.navigation.tabs != t && i.navigation.tabs.hide_under != t && (i.navigation.tabs.hide_under = parseInt(i.navigation.tabs.hide_under)), i.navigation !== t && i.navigation.arrows != t && i.navigation.arrows.hide_over != t && (i.navigation.arrows.hide_over = parseInt(i.navigation.arrows.hide_over)), i.navigation !== t && i.navigation.bullets != t && i.navigation.bullets.hide_over != t && (i.navigation.bullets.hide_over = parseInt(i.navigation.bullets.hide_over)), i.navigation !== t && i.navigation.thumbnails != t && i.navigation.thumbnails.hide_over != t && (i.navigation.thumbnails.hide_over = parseInt(i.navigation.thumbnails.hide_over)), i.navigation !== t && i.navigation.tabs != t && i.navigation.tabs.hide_over != t && (i.navigation.tabs.hide_over = parseInt(i.navigation.tabs.hide_over)), i.lazyloaddata !== t && i.lazyloaddata.length > 0 && i.lazyloaddata.indexOf("-") > 0) {
                var r = i.lazyloaddata.split("-");
                for (i.lazyloaddata = r[0], a = 1; a < r.length; a++) i.lazyloaddata += D(r[a])
            }
            return i.duration = parseInt(i.duration), i
        }(e.extend(!0, {
            sliderType: "standard",
            sliderLayout: "auto",
            dottedOverlay: "none",
            duration: 9e3,
            imgCrossOrigin: "",
            modal: {useAsModal: !1, cover: !0, coverColor: "rgba(0,0,0,0.5)", horizontal: "center", vertical: "middle"},
            navigation: {
                keyboardNavigation: !1,
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: !0,
                mouseScrollReverse: "default",
                touch: {
                    touchenabled: !1,
                    touchOnDesktop: !1,
                    swipe_treshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: !1
                },
                arrows: {
                    style: "",
                    enable: !1,
                    hide_onmobile: !1,
                    hide_under: 0,
                    hide_onleave: !1,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_over: 9999,
                    tmp: "",
                    rtl: !1,
                    left: {h_align: "left", v_align: "center", h_offset: 20, v_offset: 0, container: "slider"},
                    right: {h_align: "right", v_align: "center", h_offset: 20, v_offset: 0, container: "slider"}
                },
                bullets: {
                    enable: !1,
                    hide_onmobile: !1,
                    hide_onleave: !1,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    space: 5,
                    h_offset: 0,
                    v_offset: 20,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',
                    container: "slider",
                    rtl: !1,
                    style: ""
                },
                thumbnails: {
                    container: "slider",
                    rtl: !1,
                    style: "",
                    enable: !1,
                    width: 100,
                    height: 50,
                    min_width: 100,
                    wrapper_padding: 2,
                    wrapper_color: "transparent",
                    tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                    visibleAmount: 5,
                    hide_onmobile: !1,
                    hide_onleave: !1,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    span: !1,
                    position: "inner",
                    space: 2,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20
                },
                tabs: {
                    container: "slider",
                    rtl: !1,
                    style: "",
                    enable: !1,
                    width: 100,
                    min_width: 100,
                    height: 50,
                    wrapper_padding: 10,
                    wrapper_color: "transparent",
                    tmp: '<span class="tp-tab-image"></span>',
                    visibleAmount: 5,
                    hide_onmobile: !1,
                    hide_onleave: !1,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_under: 0,
                    hide_over: 9999,
                    direction: "horizontal",
                    span: !1,
                    space: 0,
                    position: "inner",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20
                }
            },
            responsiveLevels: 4064,
            visibilityLevels: [2048, 1024, 778, 480],
            gridwidth: 960,
            gridheight: 500,
            minHeight: 0,
            maxHeight: 0,
            keepBPHeight: !1,
            forceOverflow: !1,
            fixedOnTop: !1,
            autoHeight: !1,
            gridEQModule: !1,
            disableForceFullWidth: !1,
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0",
            hideLayerAtLimit: 0,
            hideAllLayerAtLimit: 0,
            hideSliderAtLimit: 0,
            disableProgressBar: !1,
            stopAtSlide: -1,
            stopAfterLoops: 0,
            shadow: 0,
            startDelay: 0,
            lazyType: "smart",
            spinner: "off",
            shuffle: !1,
            viewPort: {enable: !1, outof: "wait", visible_area: "200px", presize: !1},
            fallbacks: {
                isJoomla: !1,
                panZoomDisableOnMobile: !1,
                simplifyAll: !0,
                nextSlideOnWindowFocus: !1,
                disableFocusListener: !1,
                ignoreHeightChanges: "off",
                ignoreHeightChangesSize: 0,
                allowHTML5AutoPlayOnAndroid: !0
            },
            parallax: {
                type: "off",
                levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                origo: "enterpoint",
                disable_onmobile: !1,
                ddd_shadow: !1,
                ddd_bgfreeze: !1,
                ddd_overflow: "visible",
                ddd_layer_overflow: "visible",
                ddd_z_correction: 65,
                speed: 400,
                speedbg: 0,
                speedls: 0
            },
            scrolleffect: {
                set: !1,
                fade: !1,
                blur: !1,
                scale: !1,
                grayscale: !1,
                maxblur: 10,
                layers: !1,
                slide: !1,
                direction: "both",
                multiplicator: 1.35,
                multiplicator_layers: .5,
                tilt: 30,
                mobile: !1
            },
            sbtimeline: {
                set: !1,
                fixed: !1,
                fixStart: 0,
                fixEnd: 0,
                layers: !1,
                slide: !1,
                ease: "Linear.easeNone",
                speed: 500
            },
            carousel: {
                easing: punchgs.Power3.easeInOut,
                speed: 800,
                showLayersAllTime: !1,
                horizontal_align: "center",
                vertical_align: "center",
                infinity: !1,
                space: 0,
                maxVisibleItems: 3,
                stretch: !1,
                fadeout: !0,
                maxRotation: 0,
                maxOpacity: 100,
                minScale: 0,
                vary_fade: !1,
                vary_rotation: !1,
                vary_scale: !1,
                border_radius: "0px",
                padding_top: 0,
                padding_bottom: 0
            },
            extensions: "extensions/",
            extensions_suffix: ".min.js",
            stopLoop: !1,
            waitForInit: !1
        }, i))
    }
}(jQuery), function ($, undefined) {
    "use strict";
    var _R = jQuery.fn.revolution;
    jQuery.extend(!0, _R, {
        checkActions: function (e, t) {
            e === undefined ? moduleEnterLeaveActions(t) : checkActions_intern(e, t)
        }
    });
    var moduleEnterLeaveActions = function (e) {
        !_R[e].moduleActionsPrepared && _R[e].c[0].getElementsByClassName("rs-on-sh").length > 0 && (_R[e].c.on("tp-mouseenter", function () {
            _R[e].mouseoncontainer = !0;
            var t,
                i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
            if ("none" !== i && i !== undefined) {
                if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i]) for (t in _R[e].layers[i]) _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                    layer: jQuery(_R[e].layers[i][t]),
                    frame: "frame_1",
                    mode: "trigger",
                    id: e
                });
                for (t in _R[e].layers.static) _R[e].layers.static[t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                    layer: jQuery(_R[e].layers.static[t]),
                    frame: "frame_1",
                    mode: "trigger",
                    id: e
                })
            }
        }), _R[e].c.on("tp-mouseleft", function () {
            _R[e].mouseoncontainer = !0;
            var t,
                i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
            if ("none" !== i && i !== undefined) {
                if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i]) for (t in _R[e].layers[i]) _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                    layer: jQuery(_R[e].layers[i][t]),
                    frame: "frame_999",
                    mode: "trigger",
                    id: e
                });
                for (t in _R[e].layers.static) _R[e].layers.static[t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                    layer: jQuery(_R[e].layers.static[t]),
                    frame: "frame_999",
                    mode: "trigger",
                    id: e
                })
            }
        })), _R[e].moduleActionsPrepared = !0
    }, checkActions_intern = function (layer, id) {
        var actions = _R.gA(layer[0], "actions"), _L = layer.data();
        for (var ei in actions = actions.split("||"), layer.addClass("rs-waction"), _L.events = _L.events === undefined ? [] : _L.events, actions) if (actions.hasOwnProperty(ei)) {
            var event = getEventParams(actions[ei].split(";"));
            _L.events.push(event), _R[id].fullscreen_esclistener || "exitfullscreen" != event.action && "togglefullscreen" != event.action || (jQuery(document).keyup(function (e) {
                27 == e.keyCode && jQuery("#rs-go-fullscreen").length > 0 && layer.trigger(event.on)
            }), _R[id].fullscreen_esclistener = !0);
            var targetlayer = "backgroundvideo" == event.layer ? jQuery("rs-bgvideo") : "firstvideo" == event.layer ? jQuery("rs-slide").find(".rs-layer-video") : jQuery("#" + event.layer);
            switch (-1 != jQuery.inArray(event.action, ["toggleslider", "toggle_mute_video", "toggle_global_mute_video", "togglefullscreen"]) && (_L._togglelisteners = !0), event.action) {
                case"togglevideo":
                    jQuery.each(targetlayer, function () {
                        updateToggleByList(jQuery(this), "videotoggledby", layer[0].id)
                    });
                    break;
                case"togglelayer":
                    jQuery.each(targetlayer, function () {
                        updateToggleByList(jQuery(this), "layertoggledby", layer[0].id), jQuery(this).data("triggered_startstatus", event.togglestate)
                    });
                    break;
                case"toggle_global_mute_video":
                case"toggle_mute_video":
                    jQuery.each(targetlayer, function () {
                        updateToggleByList(jQuery(this), "videomutetoggledby", layer[0].id)
                    });
                    break;
                case"toggleslider":
                    _R[id].slidertoggledby == undefined && (_R[id].slidertoggledby = []), _R[id].slidertoggledby.push(layer[0].id);
                    break;
                case"togglefullscreen":
                    _R[id].fullscreentoggledby == undefined && (_R[id].fullscreentoggledby = []), _R[id].fullscreentoggledby.push(layer[0].id)
            }
        }
        _R[id].actionsPrepared = !0, layer.on("click mouseenter mouseleave", function (e) {
            for (var i in _L.events) if (_L.events.hasOwnProperty(i) && _L.events[i].on === e.type) {
                var event = _L.events[i];
                if ("click" === event.on && layer.hasClass("tp-temporarydisabled")) return !1;
                var targetlayer = "backgroundvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find("rs-sbg-wrap rs-bgvideo") : "firstvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find(".rs-layer-video").first() : jQuery("#" + event.layer),
                    tex = targetlayer.length > 0;
                switch (event.action) {
                    case"nextframe":
                    case"prevframe":
                    case"gotoframe":
                    case"togglelayer":
                    case"toggleframes":
                    case"startlayer":
                    case"stoplayer":
                        if (targetlayer[0] === undefined) continue;
                        var _ = _R[id]._L[targetlayer[0].id], frame = event.frame, tou = "triggerdelay";
                        if ("click" === e.type && _.clicked_time_stamp !== undefined && (new Date).getTime() - _.clicked_time_stamp < 300) return;
                        if ("mouseenter" === e.type && _.mouseentered_time_stamp !== undefined && (new Date).getTime() - _.mouseentered_time_stamp < 300) return;
                        if ("mouseleave" === e.type && _.mouseleaveed_time_stamp !== undefined && (new Date).getTime() - _.mouseleaveed_time_stamp < 300) return;
                        if (clearTimeout(_.triggerdelayIn), clearTimeout(_.triggerdelayOut), clearTimeout(_.triggerdelay), "click" === e.type && (_.clicked_time_stamp = (new Date).getTime()), "mouseenter" === e.type && (_.mouseentered_time_stamp = (new Date).getTime()), "mouseleave" === e.type && (_.mouseleaveed_time_stamp = (new Date).getTime()), "nextframe" === event.action || "prevframe" === event.action) {
                            _.forda = _.forda === undefined ? getFordWithAction(_) : _.forda;
                            var inx = jQuery.inArray(_.currentframe, _.ford);
                            for ("nextframe" === event.action && inx++, "prevframe" === event.action && inx--; "skip" !== _.forda[inx] && inx > 0 && inx < _.forda.length - 1;) "nextframe" === event.action && inx++, "prevframe" === event.action && inx--, inx = Math.min(Math.max(0, inx), _.forda.length - 1);
                            frame = _.ford[inx]
                        }
                        jQuery.inArray(event.action, ["toggleframes", "togglelayer", "startlayer", "stoplayer"]) >= 0 && (_.triggeredstate = "startlayer" === event.action || "togglelayer" === event.action && "frame_1" !== _.currentframe || "toggleframes" === event.action && _.currentframe !== event.frameN, frame = _.triggeredstate ? "toggleframes" === event.action ? event.frameN : "frame_1" : "toggleframes" === event.action ? event.frameM : "frame_999", tou = _.triggeredstate ? "triggerdelayIn" : "triggerdelayOut", _.triggeredstate ? _R.toggleState(_.layertoggledby) : (_R.stopVideo && _R.stopVideo(targetlayer, id), _R.unToggleState(_.layertoggledby)));
                        var pars = {layer: targetlayer, frame: frame, mode: "trigger", id: id};
                        !0 === event.children && (pars.updateChildren = !0, pars.fastforward = !0), _R.renderLayerAnimation && (clearTimeout(_[tou]), _[tou] = setTimeout(function (e) {
                            _R.renderLayerAnimation(e)
                        }, 1e3 * event.delay, pars));
                        break;
                    case"playvideo":
                        tex && _R.playVideo(targetlayer, id);
                        break;
                    case"stopvideo":
                        tex && _R.stopVideo && _R.stopVideo(targetlayer, id);
                        break;
                    case"togglevideo":
                        tex && (_R.isVideoPlaying(targetlayer, id) ? _R.stopVideo && _R.stopVideo(targetlayer, id) : _R.playVideo(targetlayer, id));
                        break;
                    case"mutevideo":
                        tex && _R.Mute(targetlayer, id, !0);
                        break;
                    case"unmutevideo":
                        tex && _R.Mute && _R.Mute(targetlayer, id, !1);
                        break;
                    case"toggle_mute_video":
                        tex && (_R.Mute(targetlayer, id) ? _R.Mute(targetlayer, id, !1) : _R.Mute && _R.Mute(targetlayer, id, !0));
                        break;
                    case"toggle_global_mute_video":
                        var pvl = _R[id].playingvideos != undefined && _R[id].playingvideos.length > 0;
                        pvl && (_R[id].globalmute ? jQuery.each(_R[id].playingvideos, function (e, t) {
                            _R.Mute && _R.Mute(t, id, !1)
                        }) : jQuery.each(_R[id].playingvideos, function (e, t) {
                            _R.Mute && _R.Mute(t, id, !0)
                        })), _R[id].globalmute = !_R[id].globalmute;
                        break;
                    default:
                        punchgs.TweenLite.delayedCall(event.delay, function (targetlayer, id, event, layer) {
                            switch (event.action) {
                                case"openmodal":
                                    if (event.modalslide = event.modalslide === undefined ? 0 : event.modalslide, window.RS_60_MODALS === undefined || -1 == jQuery.inArray(event.modal, window.RS_60_MODALS)) {
                                        _R.showModalCover(id, event, "show");
                                        var data = {
                                            action: "revslider_ajax_call_front",
                                            client_action: "get_slider_html",
                                            token: _R[id].ajaxNonce,
                                            alias: event.modal,
                                            usage: "modal"
                                        };
                                        jQuery.ajax({
                                            type: "post",
                                            url: _R[id].ajaxUrl,
                                            dataType: "json",
                                            data: data,
                                            success: function (e, t, i) {
                                                1 == e.success && (jQuery("body").append(e.data), setTimeout(function () {
                                                    _R.showModalCover(id, event, "hide"), jQuery(document).trigger("RS_OPENMODAL_" + event.modal, event.modalslide)
                                                }, 49))
                                            },
                                            error: function (e) {
                                                console.log("Modal Can not be Loaded"), console.log(e)
                                            }
                                        })
                                    } else jQuery(document).trigger("RS_OPENMODAL_" + event.modal, event.modalslide);
                                    break;
                                case"closemodal":
                                    _R.revModal(id, {mode: "close"});
                                    break;
                                case"callback":
                                    eval(event.callback);
                                    break;
                                case"simplelink":
                                    window.open(event.url, event.target);
                                    break;
                                case"simulateclick":
                                    targetlayer.length > 0 && targetlayer.click();
                                    break;
                                case"toggleclass":
                                    targetlayer.length > 0 && targetlayer.toggleClass(event.classname);
                                    break;
                                case"scrollbelow":
                                case"scrollto":
                                    layer.addClass("tp-scrollbelowslider");
                                    var doc = jQuery(document),
                                        off = "scrollbelow" === event.action ? (getOffContH(_R[id].fullScreenOffsetContainer) || 0) - (parseInt(event.offset, 0) || 0) || 0 : 0 - (parseInt(event.offset, 0) || 0),
                                        c = "scrollbelow" === event.action ? _R[id].c : jQuery("#" + event.id),
                                        ctop = c.length > 0 ? c.offset().top : 0,
                                        sobj = {_y: window.pageYOffset !== document.documentElement.scrollTop ? 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop : window.pageYOffset};
                                    ctop += "scrollbelow" === event.action ? jQuery(_R[id].slides[0]).height() : 0, punchgs.TweenLite.to(sobj, event.speed / 1e3, {
                                        _y: ctop - off,
                                        ease: event.ease,
                                        onUpdate: function () {
                                            doc.scrollTop(sobj._y)
                                        }
                                    });
                                    break;
                                case"jumptoslide":
                                    switch (event.slide.toLowerCase()) {
                                        case"+1":
                                        case"next":
                                            _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, 1, "carousel" === _R[id].sliderType);
                                            break;
                                        case"previous":
                                        case"prev":
                                        case"-1":
                                            _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, -1, "carousel" === _R[id].sliderType);
                                            break;
                                        case"first":
                                            _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, 0, "carousel" === _R[id].sliderType);
                                            break;
                                        case"last":
                                            _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, _R[id].slideamount - 1, "carousel" === _R[id].sliderType);
                                            break;
                                        default:
                                            var ts = jQuery.isNumeric(event.slide) ? parseInt(event.slide, 0) : event.slide;
                                            _R.callingNewSlide(id, ts, "carousel" === _R[id].sliderType)
                                    }
                                    break;
                                case"toggleslider":
                                    _R[id].noloopanymore = 0, "playing" == _R[id].sliderstatus ? (_R[id].c.revpause(), _R[id].forcepaused = !0, _R.unToggleState(_R[id].slidertoggledby)) : (_R[id].forcepaused = !1, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby));
                                    break;
                                case"pauseslider":
                                    _R[id].c.revpause(), _R.unToggleState(_R[id].slidertoggledby);
                                    break;
                                case"playslider":
                                    _R[id].noloopanymore = 0, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby);
                                    break;
                                case"gofullscreen":
                                case"exitfullscreen":
                                case"togglefullscreen":
                                    var gf;
                                    jQuery(".rs-go-fullscreen").length > 0 && ("togglefullscreen" == event.action || "exitfullscreen" == event.action) ? (jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen"), gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), _R[id].minHeight = _R[id].oldminheight, _R[id].infullscreenmode = !1, _R[id].c.revredraw(), jQuery(window).trigger("resize"), _R.unToggleState(_R[id].fullscreentoggledby)) : 0 != jQuery(".rs-go-fullscreen").length || "togglefullscreen" != event.action && "gofullscreen" != event.action || (gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), gf.addClass("rs-go-fullscreen"), _R[id].oldminheight = _R[id].minHeight, _R[id].minHeight = jQuery(window).height(), _R[id].infullscreenmode = !0, _R[id].c.revredraw(), jQuery(window).trigger("resize"), _R.toggleState(_R[id].fullscreentoggledby));
                                    break;
                                default:
                                    _R[id].c.trigger("layeraction", [event.action, layer, event])
                            }
                        }, [targetlayer, id, event, layer])
                }
            }
        })
    };

    function getFordWithAction(e) {
        var t = [];
        for (var i in e.ford) e.frames[e.ford[i]].timeline.waitoncall ? t.push(e.ford[i]) : t.push("skip");
        return t
    }

    function updateToggleByList(e, t, i) {
        var a = e.data(t);
        a === undefined && (a = []), a.push(i), e.data(t, a)
    }

    function getEventParams(e) {
        var t = {on: "click", delay: 0, ease: "Power2.easeOut", speed: 400};
        for (var i in e) if (e.hasOwnProperty(i)) {
            var a = e[i].split(":");
            switch (a[0]) {
                case"modal":
                    t.modal = a[1];
                    break;
                case"ms":
                    t.modalslide = a[1];
                    break;
                case"m":
                    t.frameM = a[1];
                    break;
                case"n":
                    t.frameN = a[1];
                    break;
                case"o":
                    t.on = "click" === a[1] || "c" === a[1] ? "click" : "ml" === a[1] || "mouseleave" === a[1] ? "mouseleave" : "mouseenter" === a[1] || "me" === a[1] ? "mouseenter" : a[1];
                    break;
                case"d":
                    t.delay = parseInt(a[1], 0) / 1e3, t.delay = "NaN" === t.delay || isNaN(t.delay) ? 0 : t.delay;
                    break;
                case"a":
                    t.action = a[1];
                    break;
                case"f":
                    t.frame = a[1];
                    break;
                case"slide":
                    t.slide = a[1];
                    break;
                case"layer":
                    t.layer = a[1];
                    break;
                case"sp":
                    t.speed = parseInt(a[1], 0);
                    break;
                case"e":
                    t.ease = a[1];
                    break;
                case"ls":
                    t.togglestate = a[1];
                    break;
                case"offset":
                    t.offset = a[1];
                    break;
                case"call":
                    t.callback = a[1];
                    break;
                case"url":
                    t.url = "";
                    for (var r = 1; r < a.length; r++) t.url += a[r] + (r === a.length - 1 ? "" : ":");
                    break;
                case"target":
                    t.target = a[1];
                    break;
                case"class":
                    t.classname = a[1];
                    break;
                case"ch":
                    t.children = "true" == a[1] || 1 == a[1] || "t" == a[1];
                    break;
                default:
                    a[0].length > 0 && "" !== a[0] && (t[a[0]] = a[1])
            }
        }
        return t
    }

    var getOffContH = function (e) {
        if (e == undefined) return 0;
        if (e.split(",").length > 1) {
            var t = e.split(","), i = 0;
            return t && jQuery.each(t, function (e, t) {
                jQuery(t).length > 0 && (i += jQuery(t).outerHeight(!0))
            }), i
        }
        return jQuery(e).height()
    }
}(jQuery), function (e) {
    "use strict";
    var t = jQuery.fn.revolution;
    jQuery.extend(!0, t, {
        prepareCarousel: function (e, o, n, l) {
            void 0 !== e && (n = t[e].carousel.lastdirection = a(n, t[e].carousel.lastdirection), i(e), t[e].carousel.slide_offset_target = s(e), void 0 !== l ? r(e, n, !1, 0) : null == o ? t.carouselToEvalPosition(e, n) : r(e, n, !1))
        }, carouselToEvalPosition: function (e, i) {
            var o = t[e].carousel;
            i = o.lastdirection = a(i, o.lastdirection);
            var s = "center" === o.horizontal_align ? (o.wrapwidth / 2 - o.slide_width / 2 - o.slide_globaloffset) / o.slide_width : (0 - o.slide_globaloffset) / o.slide_width,
                n = t.simp(s, t[e].slideamount, !1), l = n - Math.floor(n), d = 0, c = -1 * (Math.ceil(n) - n),
                p = -1 * (Math.floor(n) - n);
            d = l >= .3 && "left" === i || l >= .7 && "right" === i ? c : l < .3 && "left" === i || l < .7 && "right" === i ? p : d, d = o.infinity ? d : n < 0 ? n : s > t[e].slideamount - 1 ? s - (t[e].slideamount - 1) : d, o.slide_offset_target = d * o.slide_width, o.slide_offset_target !== o.slide_offset_targetCACHE && (0 !== Math.abs(o.slide_offset_target) ? r(e, i, !0) : t.organiseCarousel(e, i), o.slide_offset_targetCACHE = o.slide_offset_target)
        }, organiseCarousel: function (e, i, a, r) {
            i = void 0 === i || "down" == i || "up" == i || null === i || jQuery.isEmptyObject(i) ? "left" : i;
            for (var o = t[e].carousel, s = [], n = t[e].slides.length, l = 0; l < n; l++) {
                var d = l * o.slide_width + o.slide_offset;
                o.infinity && (d = (d = d > o.wrapwidth - o.inneroffset && "right" == i ? o.slide_offset - (t[e].slides.length - l) * o.slide_width : d) < 0 - o.inneroffset - o.slide_width && "left" == i ? d + o.maxwidth : d), s[l] = d
            }
            var c = 999, p = 0, u = t[e].ulw;
            t[e].slides && jQuery.each(t[e].slides, function (r, l) {
                var d = s[r], h = {};
                o.infinity && (d = (d = d > o.wrapwidth - o.inneroffset + o.slide_width && "left" === i ? s[0] - (n - r) * o.slide_width : d) < 0 - o.inneroffset - 3 * o.slide_width ? "left" == i ? d + o.maxwidth : "right" === i ? s[n - 1] + (r + 1) * o.slide_width : d : d, (u = u > d ? d : u) > 0 && d > o.wrapwidth && (d = o.slide_offset - (t[e].slides.length - r) * o.slide_width)), h.left = d + o.inneroffset;
                var g = "center" === o.horizontal_align ? (Math.abs(o.wrapwidth / 2) - (h.left + o.slide_width / 2)) / o.slide_width : (o.inneroffset - h.left) / o.slide_width,
                    f = "center" === o.horizontal_align ? 2 : 1;
                (a && Math.abs(g) < c || 0 === g) && (c = Math.abs(g), o.focused = r), h.width = o.slide_width, h.x = 0, h.transformPerspective = 1200, h.transformOrigin = "50% " + o.vertical_align, o.fadeout ? o.vary_fade ? h.autoAlpha = 1 - Math.abs(o.maxOpacity / Math.ceil(o.maxVisibleItems / f) * g) : h.autoAlpha = g >= 1 || g <= -1 ? o.maxOpacity : o.maxOpacity + (1 - o.maxOpacity) * (1 - Math.abs(g)) : h.autoAlpha = Math.abs(g) < Math.ceil(o.maxVisibleItems / f) ? 1 : 0, void 0 !== o.minScale && o.minScale > 0 && (o.vary_scale ? h.scale = 1 - Math.abs((1 - o.minScale) / Math.ceil(o.maxVisibleItems / f) * g) : h.scale = g >= 1 || g <= -1 ? o.minScale : o.minScale + (1 - o.minScale) * (1 - Math.abs(g)), p = (p = g * (h.width - h.width * h.scale) / 2) > 300 ? 300 : p), void 0 !== o.maxRotation && 0 != Math.abs(o.maxRotation) && (o.vary_rotation ? (h.rotationY = Math.abs(o.maxRotation) - Math.abs((1 - Math.abs(1 / Math.ceil(o.maxVisibleItems / f) * g)) * o.maxRotation), h.autoAlpha = Math.abs(h.rotationY) > 90 ? 0 : h.autoAlpha) : h.rotationY = g >= 1 || g <= -1 ? o.maxRotation : Math.abs(g) * o.maxRotation, h.rotationY = g < 0 ? -1 * h.rotationY : h.rotationY), h.x = -1 * o.space * g, h.left = Math.floor(h.left), h.x = Math.floor(h.x), void 0 !== h.scale && (h.x = h.x + p), h.zIndex = Math.round(100 - Math.abs(5 * g)), h.force3D = !0, h.transformStyle = "3D" != t[e].parallax.type && "3d" != t[e].parallax.type ? "flat" : "preserve-3d", punchgs.TweenLite.set(l, h)
            }), r && (o.focused = void 0 === o.focused ? 0 : o.focused, o.oldfocused = void 0 === o.oldfocused ? 0 : o.oldfocused, t[e].pr_next_key = o.focused, o.focused !== o.oldfocused && t.animateTheLayers && (t.removeTheLayers(jQuery(t[e].slides[o.oldfocused]), e), t.animateTheLayers({
                slide: o.focused,
                id: e,
                mode: t[e].carousel.allLayersStarted ? "rebuild" : "start"
            })), o.oldfocused = o.focused, t[e].c.trigger("revolution.nextslide.waiting"))
        }
    });
    var i = function (e) {
        void 0 === t[e].bw && t.setSize(e);
        var i = t[e].carousel, a = t.getHorizontalOffset(t[e].c, "left"), r = t.getHorizontalOffset(t[e].c, "right");
        void 0 === i.wrap && function (e) {
            var i = t[e].carousel;
            i.infbackup = i.infinity, i.maxVisiblebackup = i.maxVisibleItems, i.slide_globaloffset = "none", i.slide_offset = 0, i.wrap = t[e].c.find("rs-carousel-wrap"), 0 !== i.maxRotation && ("3D" !== t[e].parallax.type && "3d" !== t[e].parallax.type || punchgs.TweenLite.set(i.wrap, {
                perspective: "1600px",
                transformStyle: "preserve-3d"
            })), void 0 !== i.border_radius && parseInt(i.border_radius, 0) > 0 && punchgs.TweenLite.set(t[e].c.find("rs-slide"), {borderRadius: i.border_radius})
        }(e), i.slide_width = !0 !== i.stretch ? t[e].gridwidth[t[e].level] * (0 === t[e].bw ? 1 : t[e].bw) : t[e].c.width(), i.slide_height = !0 !== i.stretch ? t[e].gridheight[t[e].level] * (0 === t[e].bw ? 1 : t[e].bw) : t[e].c.height(), i.maxwidth = t[e].slideamount * i.slide_width, i.maxVisiblebackup > t[e].slides.length + 1 && (i.maxVisibleItems = t[e].slides.length + 2), i.wrapwidth = i.maxVisibleItems * i.slide_width + (i.maxVisibleItems - 1) * i.space, i.wrapwidth = "auto" != t[e].sliderLayout ? i.wrapwidth > t[e].c.width() ? t[e].c.width() : i.wrapwidth : i.wrapwidth > t[e].canvas.width() ? t[e].canvas.width() : i.wrapwidth, i.infinity = !(i.wrapwidth >= i.maxwidth) && i.infbackup, i.wrapoffset = "center" === i.horizontal_align ? (t[e].c.width() - r - a - i.wrapwidth) / 2 : 0, i.wrapoffset = "auto" != t[e].sliderLayout && t[e].outernav ? 0 : i.wrapoffset < a ? a : i.wrapoffset;
        var o = "3D" == t[e].parallax.type || "3d" == t[e].parallax.type ? "visible" : "hidden";
        "right" === i.horizontal_align ? punchgs.TweenLite.set(i.wrap, {
            left: "auto",
            right: i.wrapoffset + "px",
            width: i.wrapwidth,
            overflow: o
        }) : punchgs.TweenLite.set(i.wrap, {
            right: "auto",
            left: i.wrapoffset + "px",
            width: i.wrapwidth,
            overflow: o
        }), i.inneroffset = "right" === i.horizontal_align ? i.wrapwidth - i.slide_width : 0, i.realoffset = Math.abs(i.wrap.position().left), i.windhalf = jQuery(window).width() / 2
    }, a = function (e, t) {
        return null === e || jQuery.isEmptyObject(e) ? t : void 0 === e ? "right" : e
    }, r = function (e, i, r, o) {
        var s = t[e].carousel;
        i = s.lastdirection = a(i, s.lastdirection);
        var n = {}, l = r ? punchgs.Power2.easeOut : s.easing;
        n.from = 0, n.to = s.slide_offset_target, o = void 0 === o ? s.speed / 1e3 : o, 0 !== (o = r ? o * (Math.abs(n.to) / s.wrapwidth) : o) && o < .1 && Math.abs(n.to) > 25 && (o = .3), void 0 !== s.positionanim && s.positionanim.pause(), s.positionanim = punchgs.TweenLite.to(n, o, {
            from: n.to, onUpdate: function () {
                s.slide_offset = s.slide_globaloffset + n.from, s.slide_offset = t.simp(s.slide_offset, s.maxwidth), t.organiseCarousel(e, i, !1, !1)
            }, onComplete: function () {
                s.slide_globaloffset = s.infinity ? t.simp(s.slide_globaloffset + s.slide_offset_target, s.maxwidth) : s.slide_globaloffset + s.slide_offset_target, s.slide_offset = t.simp(s.slide_offset, s.maxwidth), t.organiseCarousel(e, i, !1, !0), void 0 !== s.focused && r && t.callingNewSlide(e, jQuery(t[e].slides[s.focused]).data("key"), !0), "carousel" !== t[e].sliderType || t[e].carousel.fadein || (punchgs.TweenLite.to(t[e].canvas, 1, {
                    scale: 1,
                    opacity: 1
                }), t[e].carousel.fadein = !0), t[e].c.trigger("revolution.slide.carouselchange", {
                    slider: e,
                    slideIndex: parseInt(t[e].pr_active_key, 0) + 1,
                    slideLIIndex: t[e].pr_active_key,
                    slide: t[e].pr_next_slide,
                    currentslide: t[e].pr_next_slide,
                    prevSlideIndex: void 0 !== t[e].pr_lastshown_key && parseInt(t[e].pr_lastshown_key, 0) + 1,
                    prevSlideLIIndex: void 0 !== t[e].pr_lastshown_key && parseInt(t[e].pr_lastshown_key, 0),
                    prevSlide: void 0 !== t[e].pr_lastshown_key && t[e].slides[t[e].pr_lastshown_key]
                })
            }, ease: l
        })
    }, o = function (e, t) {
        return Math.abs(e) > Math.abs(t) ? e > 0 ? e - Math.abs(Math.floor(e / t) * t) : e + Math.abs(Math.floor(e / t) * t) : e
    }, s = function (e) {
        var i, a, r, s, n, l = 0, d = t[e].carousel;
        if (void 0 !== d.positionanim && d.positionanim.kill(), "none" == d.slide_globaloffset) d.slide_globaloffset = l = "center" === d.horizontal_align ? d.wrapwidth / 2 - d.slide_width / 2 : 0; else {
            d.slide_globaloffset = d.slide_offset, d.slide_offset = 0;
            var c = t[e].pr_processing_key,
                p = "center" === d.horizontal_align ? (d.wrapwidth / 2 - d.slide_width / 2 - d.slide_globaloffset) / d.slide_width : (0 - d.slide_globaloffset) / d.slide_width;
            p = t.simp(p, t[e].slideamount, !1), c = (c = c >= 0 ? c : t[e].pr_active_key) >= 0 ? c : 0, l = d.infinity ? (i = p, a = c, r = t[e].slideamount, n = a - r - i, s = o(s = a - i, r), n = o(n, r), -(Math.abs(s) > Math.abs(n) ? n : s)) : p - c, l *= d.slide_width
        }
        return l
    }
}(jQuery), function (e) {
    "use strict";
    var t = ["chars", "words", "lines"], i = jQuery.fn.revolution;
    i.is_mobile(), i.is_android();
    jQuery.extend(!0, i, {
        checkLayerDimensions: function (e) {
            var t = !1;
            for (var a in i[e.id].layers[e.skey]) if (i[e.id].layers[e.skey].hasOwnProperty(a) && !t) {
                var r = i[e.id].layers[e.skey][a], o = i[e.id]._L[r.id];
                o.eow !== r.offsetWidth && "true" !== i.gA(r, "vary-layer-dims") && (t = !0), o.lastknownwidth = o.eow, o.lastknownheight = o.eoh
            }
            return t
        }, initLayer: function (e) {
            var t, a, r, o = e.id, s = e.skey;
            for (var n in i[o]._L = void 0 === i[o]._L ? {} : i[o]._L, i[o].layers[s]) if (i[o].layers[s].hasOwnProperty(n)) {
                var l = "carousel" === i[o].sliderType ? 0 : i[o].width / 2 - i[o].gridwidth[i[o].level] * i[o].bw / 2,
                    d = 0, c = i[o].layers[s][n], h = jQuery(c), g = i.gA(c, "initialised") ? i[o]._L[c.id] : h.data();
                if (void 0 === i.gA(c, "initialised")) {
                    if (i.revCheckIDS(o, c), i[o]._L[c.id] = g, g.ford = void 0 === g.ford ? "frame_0;frame_1;frame_999" : g.ford, g.ford = ";" == g.ford[g.ford.length - 1] ? g.ford.substring(0, g.ford.length - 1) : g.ford, g.ford = g.ford.split(";"), void 0 !== g.clip) for (t in g.clipPath = {
                        use: !1,
                        origin: "l",
                        type: "rectangle"
                    }, g.clip = g.clip.split(";"), g.clip) g.clip.hasOwnProperty(t) && ("u" == (a = g.clip[t].split(":"))[0] && (g.clipPath.use = "true" == a[1]), "o" == a[0] && (g.clipPath.origin = a[1]), "t" == a[0] && (g.clipPath.type = a[1]));
                    if (g.frames = w(g, o), g.c = h, g.p = h.closest(".rs-parallax-wrap"), g.lp = h.closest("rs-loop-wrap"), g.m = h.closest("rs-mask-wrap"), g.triggercache = void 0 === g.triggercache ? "reset" : g.triggercache, g.rsp_bd = void 0 === g.rsp_bd ? "column" === g.type || "row" === g.type ? "off" : "on" : g.rsp_bd, g.rsp_o = void 0 === g.rsp_o ? "on" : g.rsp_o, g.basealign = void 0 === g.basealign ? "grid" : g.basealign, g.group = "group" !== g.type && h.closest("rs-group-wrap").length > 0 ? "group" : "column" !== g.type && h.closest("rs-column").length > 0 ? "column" : "row" !== g.type && h.closest("rs-row").length > 0 ? "row" : void 0, g._lig = "group" === g.group ? h.closest("rs-group") : "column" === g.group ? h.closest("rs-column") : "row" === g.group ? h.closest("rs-row") : void 0, g._ligid = void 0 !== g._lig ? g._lig[0].id : void 0, g._column = "RS-COLUMN" === h[0].tagName ? h.closest("rs-column-wrap") : "none", g._row = "RS-COLUMN" === h[0].tagName && h.closest("rs-row"), g._ingroup = "group" === g.group, g._incolumn = "column" === g.group, g._inrow = "row" === g.group, (g._ingroup || g._incolumn) && g._lig[0].className.indexOf("rs-sba") >= 0 && (!1 !== g.animationonscroll || void 0 === g.frames.loop) && !0 !== g.animOnScrollForceDisable && (g.animationonscroll = !0, h[0].className += " rs-sba", i[o].sbas[s][c.id] = h[0]), g.animOnScrollRepeats = 0, g._isgroup = "RS-GROUP" === h[0].tagName, g.type = g.type || "none", "row" === g.type && void 0 === g.cbreak && (g.cbreak = 2), g._isnotext = -1 !== jQuery.inArray(g.type, ["video", "image", "audio", "shape", "row", "group"]), g._mediatag = "html5" == g.audio ? "audio" : "video", g.img = h.find("img"), g.deepiframe = h[0].getElementsByTagName("iframe"), g.deepmedia = h[0].getElementsByTagName(g._mediatag), g.layertype = "image" === g.type ? "image" : h[0].className.indexOf("rs-layer-video") >= 0 || h[0].className.indexOf("rs-layer-audio") >= 0 || g.deepiframe.length > 0 && (g.deepiframe[0].src.toLowerCase().indexOf("youtube") > 0 || g.deepiframe[0].src.toLowerCase().indexOf("vimeo") > 0) || g.deepmedia.length > 0 ? "video" : "html", g.deepiframe.length > 0 && i.sA(g.deepiframe[0], "layertype", g.layertype), "column" === g.type && (g.cbg = g.p.find("rs-column-bg"), g.cbgmask = g.p.find("rs-cbg-mask-wrap")), g._slidelink = h[0].className.indexOf("slidelink") >= 0, g._isstatic = h[0].className.indexOf("rs-layer-static") >= 0, g.slidekey = g._isstatic ? "staticlayers" : s, g._togglelisteners = h.find(".rs-toggled-content").length > 0, g.bgcol = void 0 === g.bgcol ? h[0].style.background.indexOf("gradient") >= 0 ? h[0].style.background : h.css("backgroundColor") : g.bgcol, g.bgcol = 0 === g.bgcol.indexOf("rgba(0, 0, 0, 0)") && g.bgcol.length > 18 ? g.bgcol.replace("rgba(0, 0, 0, 0)", "") : g.bgcol, g.zindex = h.css("z-Index"), g._togglelisteners && h.click(function () {
                        i.swaptoggleState([this.id])
                    }), void 0 !== g.border) for (t in g.border = g.border.split(";"), g.bordercolor = "transparent", g.border) if (g.border.hasOwnProperty(t)) switch ((a = g.border[t].split(":"))[0]) {
                        case"boc":
                            g.bordercolor = a[1];
                            break;
                        case"bow":
                            g.borderwidth = i.revToResp(a[1], 4, 0);
                            break;
                        case"bos":
                            g.borderstyle = i.revToResp(a[1], 4, 0);
                            break;
                        case"bor":
                            g.borderradius = i.revToResp(a[1], 4, 0)
                    }
                    if ("svg" === g.type && (g.svg = h.find("svg"), g.svgPath = g.svg.find("path"), g.svgI = p(g.svgi, o), g.svgH = p(g.svgh, o)), void 0 !== g.btrans) {
                        var f = g.btrans;
                        for (t in g.btrans = {
                            rX: 0,
                            rY: 0,
                            rZ: 0,
                            o: 1
                        }, f = f.split(";")) if (f.hasOwnProperty(t)) switch ((a = f[t].split(":"))[0]) {
                            case"rX":
                                g.btrans.rX = a[1];
                                break;
                            case"rY":
                                g.btrans.rY = a[1];
                                break;
                            case"rZ":
                                g.btrans.rZ = a[1];
                                break;
                            case"o":
                                g.btrans.o = a[1]
                        }
                    }
                    if (void 0 !== g.tsh) for (t in g.tshadow = {
                        c: "rgba(0,0,0,0.25)",
                        v: 0,
                        h: 0,
                        b: 0
                    }, g.tsh = g.tsh.split(";"), g.tsh) if (g.tsh.hasOwnProperty(t)) switch ((a = g.tsh[t].split(":"))[0]) {
                        case"c":
                            g.tshadow.c = a[1];
                            break;
                        case"h":
                            g.tshadow.h = a[1];
                            break;
                        case"v":
                            g.tshadow.v = a[1];
                            break;
                        case"b":
                            g.tshadow.b = a[1]
                    }
                    if (void 0 !== g.tst) for (t in g.tstroke = {
                        c: "rgba(0,0,0,0.25)",
                        w: 1
                    }, g.tst = g.tst.split(";"), g.tst) if (g.tst.hasOwnProperty(t)) switch ((a = g.tst[t].split(":"))[0]) {
                        case"c":
                            g.tstroke.c = a[1];
                            break;
                        case"w":
                            g.tstroke.w = a[1]
                    }
                    if (void 0 !== g.bsh) for (t in g.bshadow = {
                        e: "c",
                        c: "rgba(0,0,0,0.25)",
                        v: 0,
                        h: 0,
                        b: 0,
                        s: 0
                    }, g.bsh = g.bsh.split(";"), g.bsh) if (g.bsh.hasOwnProperty(t)) switch ((a = g.bsh[t].split(":"))[0]) {
                        case"c":
                            g.bshadow.c = a[1];
                            break;
                        case"h":
                            g.bshadow.h = a[1];
                            break;
                        case"v":
                            g.bshadow.v = a[1];
                            break;
                        case"b":
                            g.bshadow.b = a[1];
                            break;
                        case"s":
                            g.bshadow.s = a[1];
                            break;
                        case"e":
                            g.bshadow.e = a[1]
                    }
                    if (void 0 !== g.dim) for (t in g.dim = g.dim.split(";"), g.dim) if (g.dim.hasOwnProperty(t)) switch ((a = g.dim[t].split(":"))[0]) {
                        case"w":
                            g.width = a[1];
                            break;
                        case"h":
                            g.height = a[1];
                            break;
                        case"maxw":
                            g.maxwidth = a[1];
                            break;
                        case"maxh":
                            g.maxheight = a[1];
                            break;
                        case"minw":
                            g.minwidth = a[1];
                            break;
                        case"minh":
                            g.minheight = a[1]
                    }
                    if (void 0 !== g.xy) for (t in g.xy = g.xy.split(";"), g.xy) if (g.xy.hasOwnProperty(t)) switch ((a = g.xy[t].split(":"))[0]) {
                        case"x":
                            g.x = a[1].replace("px", "");
                            break;
                        case"y":
                            g.y = a[1].replace("px", "");
                            break;
                        case"xo":
                            g.hoffset = a[1].replace("px", "");
                            break;
                        case"yo":
                            g.voffset = a[1].replace("px", "")
                    }
                    if (!g._isnotext && void 0 !== g.text) for (t in g.text = g.text.split(";"), g.text) if (g.text.hasOwnProperty(t)) switch ((a = g.text[t].split(":"))[0]) {
                        case"w":
                            g.whitespace = a[1];
                            break;
                        case"td":
                            g.textDecoration = a[1];
                            break;
                        case"c":
                            g.clear = a[1];
                            break;
                        case"f":
                            g.float = a[1];
                            break;
                        case"s":
                            g.fontsize = a[1];
                            break;
                        case"l":
                            g.lineheight = a[1];
                            break;
                        case"ls":
                            g.letterspacing = a[1];
                            break;
                        case"fw":
                            g.fontweight = a[1];
                            break;
                        case"a":
                            g.textalign = a[1]
                    }
                    if (void 0 !== g.flcr) for (t in g.flcr = g.flcr.split(";"), g.flcr) if (g.flcr.hasOwnProperty(t)) switch ((a = g.flcr[t].split(":"))[0]) {
                        case"c":
                            g.clear = a[1];
                            break;
                        case"f":
                            g.float = a[1]
                    }
                    if (void 0 !== g.padding) for (t in g.padding = g.padding.split(";"), g.padding) if (g.padding.hasOwnProperty(t)) switch ((a = g.padding[t].split(":"))[0]) {
                        case"t":
                            g.paddingtop = a[1];
                            break;
                        case"b":
                            g.paddingbottom = a[1];
                            break;
                        case"l":
                            g.paddingleft = a[1];
                            break;
                        case"r":
                            g.paddingright = a[1]
                    }
                    if (void 0 !== g.margin) for (t in g.margin = g.margin.split(";"), g.margin) if (g.margin.hasOwnProperty(t)) switch ((a = g.margin[t].split(":"))[0]) {
                        case"t":
                            g.margintop = a[1];
                            break;
                        case"b":
                            g.marginbottom = a[1];
                            break;
                        case"l":
                            g.marginleft = a[1];
                            break;
                        case"r":
                            g.marginright = a[1]
                    }
                    if (void 0 !== g.spike && (g.spike = I(g.spike)), void 0 !== g.corners) for (t in r = g.corners.split(";"), g.corners = {}, r) r.hasOwnProperty(t) && r[t].length > 0 && (g.corners[r[t]] = jQuery("<" + r[t] + "></" + r[t] + ">"), g.c.append(g.corners[r[t]]));
                    g.textalign = u(g.textalign), g.vbility = i.revToResp(g.vbility, i[o].rle, !0), g.hoffset = i.revToResp(g.hoffset, i[o].rle, 0), g.voffset = i.revToResp(g.voffset, i[o].rle, 0), g.x = i.revToResp(g.x, i[o].rle, "l"), g.y = i.revToResp(g.y, i[o].rle, "t"), k(h, 0, o), i.sA(c, "initialised", !0)
                }
                var m = "grid" === g.basealign ? i[o].width : "carousel" !== i[o].sliderType || g._isstatic ? i[o].ulw : i[o].carousel.slide_width,
                    v = "grid" === g.basealign ? i[o].height : ("carousel" !== i[o].sliderType || g._isstatic, i[o].ulh),
                    y = g.x[i[o].level], b = g.y[i[o].level];
                if (d = "slide" === g.basealign ? 0 : Math.max(0, "fullscreen" == i[o].sliderLayout ? v / 2 - i[o].gridheight[i[o].level] * (i[o].keepBPHeight ? 1 : i[o].bh) / 2 : i[o].autoHeight || null != i[o].minHeight && i[o].minHeight > 0 ? i[o].conh / 2 - i[o].gridheight[i[o].level] * i[o].bh / 2 : d), l = "slide" === g.basealign ? 0 : Math.max(0, l), "slide" !== g.basealign && "carousel" === i[o].sliderType && g._isstatic && void 0 !== i[o].carousel && void 0 !== i[o].carousel.horizontal_align && (l = Math.max(0, "center" === i[o].carousel.horizontal_align ? 0 + (i[o].ulw - i[o].gridwidth[i[o].level] * i[o].bw) / 2 : "right" === i[o].carousel.horizontal_align ? i[o].ulw - i[o].gridwidth[i[o].level] * i[o].bw : l)), "updateposition" !== e.mode) {
                    if (0 == g.vbility[i[o].levelForced] || "f" == g.vbility[i[o].levelForced] || m < i[o].hideLayerAtLimit && "on" == g.layeronlimit || m < i[o].hideAllLayerAtLimit ? g.p[0].classList.add("rs-layer-hidden") : g.p[0].classList.remove("rs-layer-hidden"), g.poster = null == g.poster && void 0 !== g.thumbimage ? g.thumbimage : g.poster, "image" === g.layertype) if ("cover-proportional" === g.img.data("c")) {
                        i.sA(g.img[0], "owidth", i.gA(g.img[0], "owidth", g.img[0].width)), i.sA(g.img[0], "oheight", i.gA(g.img[0], "oheight", g.img[0].height));
                        var _ = i.gA(g.img[0], "owidth") / i.gA(g.img[0], "oheight"), x = m / v;
                        _ > x && _ <= 1 || _ < x && _ > 1 ? punchgs.TweenMax.set(g.img, {
                            width: "100%",
                            height: "auto",
                            left: "c" === y || "center" === y ? "50%" : "left" === y || "l" === y ? "0" : "auto",
                            right: "r" === y || "right" === y ? "0" : "auto",
                            top: "c" === b || "center" === b ? "50%" : "top" === b || "t" === b ? "0" : "auto",
                            bottom: "b" === b || "bottom" === b ? "0" : "auto",
                            x: "c" === y || "center" === y ? "-50%" : "0",
                            y: "c" === b || "center" === y ? "-50%" : "0",
                            position: "absolute"
                        }) : punchgs.TweenMax.set(g.img, {
                            height: "100%",
                            width: "auto",
                            left: "c" === y || "center" === y ? "50%" : "left" === y || "l" === y ? "0" : "auto",
                            right: "r" === y || "right" === y ? "0" : "auto",
                            top: "c" === b || "center" === b ? "50%" : "top" === b || "t" === b ? "0" : "auto",
                            bottom: "b" === b || "bottom" === b ? "0" : "auto",
                            x: "c" === y || "center" === y ? "-50%" : "0",
                            y: "c" === b || "center" === y ? "-50%" : "0",
                            position: "absolute"
                        })
                    } else {
                        var L = "auto" !== g.width[i[o].level] || isNaN(g.width[i[o].level]) && g.width[i[o].level].indexOf("%") >= 0 ? "100%" : "auto",
                            S = "auto" !== g.height[i[o].level] || isNaN(g.height[i[o].level]) && g.height[i[o].level].indexOf("%") >= 0 ? "100%" : "auto";
                        punchgs.TweenMax.set(g.img, {width: L, height: S})
                    } else if ("video" === g.layertype) {
                        i.manageVideoLayer && !g.videoLayerManaged && i.manageVideoLayer(h, o), "rebuild" !== e.mode && i.resetVideo && i.resetVideo(h, o, e.mode), null != g.aspectratio && g.aspectratio.split(":").length > 1 && (1 == g.bgvideo || 1 == g.forcecover) && i.prepareCoveredVideo(o, h), g.media = void 0 === g.media ? g.deepiframe.length > 0 ? jQuery(g.deepiframe[0]) : jQuery(g.deepmedia[0]) : g.media, g.html5vid = void 0 === g.html5vid ? !(g.deepiframe.length > 0) : g.html5vid;
                        var A = h[0].className.indexOf("coverscreenvideo") >= 0;
                        g.media.css({display: "block"});
                        var z = g.width[i[o].level], O = g.height[i[o].level];
                        z = "auto" === z ? z : !jQuery.isNumeric(z) && z.indexOf("%") > 0 ? g._incolumn || g._ingroup ? "100%" : "grid" === g.basealign ? i[o].gridwidth[i[o].level] * i[o].bw : m : "off" !== g.rsp_bd ? parseFloat(z) * i[o].bw + "px" : parseFloat(z) + "px", O = "auto" === O ? O : !jQuery.isNumeric(O) && O.indexOf("%") > 0 ? "grid" === g.basealign ? i[o].gridheight[i[o].level] * i[o].bw : v : "off" !== g.rsp_bd ? parseFloat(O) * i[o].bh + "px" : parseFloat(O) + "px";
                        var M = T(h, o);
                        if (g._incolumn && "100%" === z && "auto" === O && void 0 !== g.ytid) {
                            g.vd = void 0 === g.vd ? i[o].videos[h[0].id].ratio.split(":").length > 1 ? i[o].videos[h[0].id].ratio.split(":")[0] / i[o].videos[h[0].id].ratio.split(":")[1] : 1 : g.vd;
                            var C = h.width() / g.vd;
                            punchgs.TweenLite.set(h, {height: C + "px"}), g.heightSetByVideo = !0
                        } else -1 != h[0].className.indexOf("rs-fsv") || A ? (l = 0, d = 0, g.x = i.revToResp(0, i[o].rle, 0), g.y = i.revToResp(0, i[o].rle, 0), h.css({
                            width: m,
                            height: i[o].autoHeight ? i[o].conh : v
                        })) : punchgs.TweenMax.set(h, {
                            paddingTop: Math.round(M.paddingTop * i[o].bh) + "px",
                            paddingBottom: Math.round(M.paddingBottom * i[o].bh) + "px",
                            paddingLeft: Math.round(M.paddingLeft * i[o].bw) + "px",
                            paddingRight: Math.round(M.paddingRight * i[o].bw) + "px",
                            marginTop: M.marginTop * i[o].bh + "px",
                            marginBottom: M.marginBottom * i[o].bh + "px",
                            marginLeft: M.marginLeft * i[o].bw + "px",
                            marginRight: M.marginRight * i[o].bw + "px",
                            borderTopWidth: Math.round(M.borderTopWidth * i[o].bh) + "px",
                            borderBottomWidth: Math.round(M.borderBottomWidth * i[o].bh) + "px",
                            borderLeftWidth: Math.round(M.borderLeftWidth * i[o].bw) + "px",
                            borderRightWidth: Math.round(M.borderRightWidth * i[o].bw) + "px",
                            width: z,
                            height: O
                        }), (0 == g.html5vid && !A || 1 != g.forcecover && !h.hasClass("rs-fsv") && !A) && (g.media.width(z), g.media.height(O)), g._ingroup && null != z && !jQuery.isNumeric(z) && z.indexOf("%") > 0 && punchgs.TweenMax.set([g.lp, g.p, g.m], {minWidth: z})
                    }
                    g._slidelink || R(h, o, 0, g.rsp_bd), "on" === g.rsp_ch && "row" !== g.type && "column" !== g.type && "group" !== g.type && h.find("*").each(function () {
                        var e = jQuery(this);
                        "true" !== i.gA(this, "stylerecorder") && !0 !== i.gA(this, "stylerecorder") && k(e, "rekursive", o), R(e, o, "rekursive", g.rsp_bd)
                    })
                }
                if ("preset" !== e.mode) {
                    if (g.eow = h.outerWidth(!0), g.eoh = h.outerHeight(!0), g.eow <= 0 && void 0 !== g.lastknownwidth && (g.eow = g.lastknownwidth), g.eoh <= 0 && void 0 !== g.lastknownheight && (g.eoh = g.lastknownheight), ("text" === g.type || "button" === g.type) && void 0 !== g.corners) {
                        for (r in g.corners) if (g.corners.hasOwnProperty(r)) {
                            g.corners[r].css("borderWidth", g.eoh + "px");
                            var P = "rs-fcrt" === r || "rs-fcr" === r;
                            g.corners[r].css("border" + (P ? "Right" : "Left"), "0px solid transparent"), g.corners[r].css("border" + ("rs-fcrt" == r || "rs-bcr" == r ? "Bottom" : "Top") + "Color", g.bgcol)
                        }
                        g.eow = h.outerWidth(!0)
                    }
                    0 == g.eow && 0 == g.eoh && (g.eow = i[o].ulw, g.eoh = i[o].ulh);
                    var j = "on" === g.rsp_o ? parseInt(g.voffset[i[o].level], 0) * i[o].bw : parseInt(g.voffset[i[o].level], 0),
                        Q = "on" === g.rsp_o ? parseInt(g.hoffset[i[o].level], 0) * i[o].bw : parseInt(g.hoffset[i[o].level], 0),
                        H = "grid" === g.basealign ? i[o].gridwidth[i[o].level] * i[o].bw : m,
                        N = "grid" === g.basealign ? i[o].gridheight[i[o].level] * (i[o].keepBPHeight ? 1 : i[o].bh) : v;
                    (1 == i[o].gridEQModule || void 0 !== g._lig && "row" !== g.type && "column" !== g.type && "group" !== g.type) && (H = void 0 !== g._lig ? g._lig.width() : i[o].ulw, N = void 0 !== g._lig ? g._lig.height() : i[o].ulh, l = 0, d = 0), y = "c" === y || "m" === y || "center" === y || "middle" === y ? H / 2 - g.eow / 2 + Q : "l" === y || "left" === y ? Q : "r" === y || "right" === y ? H - g.eow - Q : "off" !== g.rsp_o ? y * i[o].bw : y, b = "m" === b || "c" === b || "center" === b || "middle" === b ? N / 2 - g.eoh / 2 + j : "t" === b || "top" == b ? j : "b" === b || "bottom" == b ? N - g.eoh - j : "off" !== g.rsp_o ? b * i[o].bw : b, y = g._slidelink ? 0 : i[o].rtl && "100%" !== g.width[i[o].level] ? y + g.eow : y, g.calcx = parseInt(y, 0) + l, g.calcy = parseInt(b, 0) + d, "row" !== g.type && "column" !== g.type ? punchgs.TweenMax.set(g.p, {
                        zIndex: g.zindex,
                        top: g.calcy,
                        left: g.calcx,
                        overwrite: "auto"
                    }) : "row" !== g.type ? punchgs.TweenMax.set(g.p, {
                        zIndex: g.zindex,
                        width: g.columnwidth,
                        top: 0,
                        left: 0,
                        overwrite: "auto"
                    }) : "row" === g.type && (punchgs.TweenMax.set(g.p, {
                        zIndex: g.zindex,
                        width: "grid" === g.basealign ? H + "px" : "100%",
                        top: 0,
                        left: l,
                        overwrite: "auto"
                    }), g.cbreak <= i[o].level ? h[0].classList.add("rev_break_columns") : h[0].classList.remove("rev_break_columns")), void 0 !== g.blendmode && punchgs.TweenMax.set(g.p, {mixBlendMode: g.blendmode}), void 0 !== g.frames.loop && punchgs.TweenMax.set(g.lp, {
                        width: g.eow,
                        height: g.eoh
                    }), g._ingroup && (void 0 !== g._groupw && !jQuery.isNumeric(g._groupw) && g._groupw.indexOf("%") > 0 && punchgs.TweenMax.set([g.lp, g.p, g.m], {minWidth: g._groupw}), void 0 !== g._grouph && !jQuery.isNumeric(g._grouph) && g._grouph.indexOf("%") > 0 && punchgs.TweenMax.set([g.lp, g.p, g.m], {minHeight: g._grouph})), e.animcompleted && i.animcompleted(h, o)
                }
            }
        }, animcompleted: function (e, t) {
            if (void 0 !== i[t].videos) {
                var a = i[t].videos[e[0].id];
                null != a && null != a.type && "none" != a.type && (1 == a.aplay || "true" == a.aplay || "on" == a.aplay || "1sttime" == a.aplay ? ("carousel" === i[t].sliderType && e.closest("rs-slide").index() != i[t].pr_active_key || i.playVideo(e, t), i.toggleState(e.data("videotoggledby")), (a.aplay1 || "1sttime" == a.aplay) && (a.aplay1 = !1, a.aplay = !1)) : ("no1sttime" == a.aplay && (a.aplay = !0), i.unToggleState(e.data("videotoggledby"))))
            }
        }, handleStaticLayers: function (e, t) {
            var a = 0, r = i[t].realslideamount + 1;
            if (void 0 !== i.gA(e[0], "onslides")) {
                var o = i.gA(e[0], "onslides").split(";");
                for (var s in o) if (o.hasOwnProperty(s)) {
                    var n = o[s].split(":");
                    "s" === n[0] && (a = parseInt(n[1], 0)), "e" === n[0] && (r = parseInt(n[1], 0))
                }
            }
            a = Math.max(0, a), r = Math.min(i[t].realslideamount, r < 0 ? i[t].realslideamount : r), r = 1 !== a && 0 !== a || r !== i[t].realslideamount ? r : i[t].realslideamount + 1, e.data("startslide", a), e.data("endslide", r), i.sA(e[0], "startslide", a), i.sA(e[0], "endslide", r)
        }, animateTheLayers: function (e) {
            if (void 0 === e.slide) return !1;
            var t = e.id;
            if (void 0 === i[t].slides[e.slide]) return !1;
            if ("carousel" === i[t].sliderType) {
                if ("start" === e.mode && "start" === i[t].lastATLmode) {
                    if (e.slide === i[t].lastATLslide && (new Date).getTime() - i[t].lastATLtime < 1500) return;
                    i[t].lastATLtime = (new Date).getTime()
                }
                i[t].lastATLmode = e.mode, i[t].lastATLslide = e.slide
            }
            var a = i.gA(i[t].slides[e.slide], "key"), r = i[t].pr_processing_key || i[t].pr_active_key || 0;
            if (i[t].layers = i[t].layers || {}, i[t].layers[a] = void 0 === i[t].layers[a] ? x(jQuery(i[t].slides[e.slide]), "rs-layer") : i[t].layers[a], i[t].layers.static = void 0 === i[t].layers.static ? x(jQuery(i[t].c.find("rs-static-layers")), "rs-layer") : i[t].layers.static, i[t].sbas[a] = void 0 === i[t].sbas[a] ? x(jQuery(i[t].slides[e.slide]), "rs-sba") : i[t].sbas[a], i.updateDimensions(t), void 0 !== a && i[t].layers[a] && i.initLayer({
                id: t,
                skey: a,
                mode: e.mode,
                animcompleted: "rebuild" === e.mode && "carousel" === i[t].sliderType && i[t].carousel.showLayersAllTime
            }), i[t].layers.static && i.initLayer({
                id: t,
                skey: "static",
                mode: e.mode,
                animcompleted: "rebuild" === e.mode && "carousel" === i[t].sliderType && i[t].carousel.showLayersAllTime
            }), void 0 === i[t].dimensionReCheck[a] && (setTimeout(function () {
                void 0 !== a && i[t].layers[a] && i.checkLayerDimensions({id: t, skey: a}) && i.initLayer({
                    id: t,
                    skey: a,
                    mode: "updateposition"
                }), i[t].layers.static && i.checkLayerDimensions({id: t, skey: "static"}) && i.initLayer({
                    id: t,
                    skey: "static",
                    mode: "updateposition"
                })
            }, 200), i[t].dimensionReCheck[a] = !0), (void 0 !== i[t].rowzones && i[t].rowzones.length > 0 && r >= 0 && i[t].rowzones[Math.min(r, i[t].rowzones.length)].length > 0 || void 0 !== i[t].srowzones && i[t].srowzones.length > 0 || void 0 !== i[t].smiddleZones && i[t].smiddleZones.length > 0) && (i.setSize(t), i.updateDimensions(t), i.initLayer({
                id: t,
                skey: a,
                mode: "updateposition"
            }), i.initLayer({
                id: t,
                skey: "static",
                mode: "updateposition"
            }), "start" !== e.mode && "preset" !== e.mode || i.manageNavigation(t)), void 0 !== a && i[t].layers[a]) for (var o in i[t].layers[a]) i[t].layers[a].hasOwnProperty(o) && i.renderLayerAnimation({
                layer: jQuery(i[t].layers[a][o]),
                id: t,
                mode: e.mode
            });
            if (i[t].layers.static) for (var o in i[t].layers.static) i[t].layers.static.hasOwnProperty(o) && i.renderLayerAnimation({
                layer: jQuery(i[t].layers.static[o]),
                id: t,
                mode: e.mode
            });
            null != i[t].mtl && setTimeout(function () {
                null != i[t].mtl && i[t].mtl.resume()
            }, 30)
        }, removeTheLayers: function (e, t, a) {
            var r = i.gA(e[0], "key");
            if (i[t].sloops && i[t].sloops[r] && i[t].sloops[r].tl && i[t].sloops[r].tl.stop(), "carousel" === i[t].sliderType && i[t].carousel.showLayersAllTime) ; else {
                for (var o in i[t].layers[r]) i[t].layers[r].hasOwnProperty(o) && i.renderLayerAnimation({
                    layer: jQuery(i[t].layers[r][o]),
                    frame: "frame_999",
                    mode: "continue",
                    remove: !0,
                    id: t,
                    allforce: a
                });
                for (var o in i[t].layers.static) i[t].layers.static.hasOwnProperty(o) && i.renderLayerAnimation({
                    layer: jQuery(i[t].layers.static[o]),
                    frame: "frame_999",
                    mode: "continue",
                    remove: !0,
                    id: t,
                    allforce: a
                })
            }
        }, renderLayerAnimation: function (e) {
            var d = e.layer, c = e.id, p = i[c].level, u = i[c]._L[d[0].id],
                f = void 0 !== u.timeline ? u.timeline.time() : void 0, b = !1, w = !1, _ = "none";
            if ("preset" !== e.mode || !0 === u.frames.frame_1.timeline.waitoncall || void 0 !== u.scrollBasedOffset || !0 === u.forceRender) {
                if ("trigger" == e.mode && (u.triggeredFrame = e.frame), u._isstatic) {
                    var x = "carousel" === i[c].sliderType && void 0 !== i[c].carousel.oldfocused ? i[c].carousel.oldfocused : void 0 === i[c].pr_lastshown_key ? 1 : parseInt(i[c].pr_lastshown_key, 0) + 1,
                        k = "carousel" === i[c].sliderType ? void 0 === i[c].pr_next_key ? 0 === x ? 1 : x : parseInt(i[c].pr_next_key, 0) + 1 : void 0 === i[c].pr_processing_key ? x : parseInt(i[c].pr_processing_key, 0) + 1,
                        T = x >= u.startslide && x <= u.endslide, L = k >= u.startslide && k <= u.endslide;
                    if (_ = x === u.endslide && "continue" === e.mode || ("continue" === e.mode || x === u.endslide) && "none", !0 === e.allforce || !0 === _) ; else {
                        if ("preset" === e.mode && (u.elementHovered || !L)) return;
                        if ("rebuild" === e.mode && !T && !L) return;
                        if ("start" === e.mode && L && "frame_1" === u.lastRequestedMainFrame) return;
                        if ("continue" === e.mode && "frame_999" === e.frame && L) return;
                        if ("start" === e.mode && !L) return
                    }
                } else "start" === e.mode && "keep" !== u.triggercache && (u.triggeredFrame = void 0);
                for (var R in "start" === e.mode && void 0 !== u.layerLoop && (u.layerLoop.count = 0), "start" === e.mode && (e.frame = void 0 === u.triggeredFrame ? 0 : u.triggeredFrame), "continue" !== e.mode && "trigger" !== e.mode && void 0 !== u.timeline && u.timeline.pause(0), "continue" !== e.mode && "trigger" !== e.mode || void 0 === u.timeline || u.timeline.pause(), u.timeline = new punchgs.TimelineMax({paused: !0}), "text" !== u.type && "button" !== u.type || void 0 !== u.splitText && (void 0 !== u.splitTextFix || "start" !== e.mode && "preset" !== e.mode) || (h({
                    layer: d,
                    id: c
                }), "start" === e.mode && (u.splitTextFix = !0)), u.ford) if (u.ford.hasOwnProperty(R)) {
                    var I = u.ford[R], S = !1;
                    if ("frame_0" !== I && "frame_hover" !== I && "loop" !== I) {
                        if ("frame_999" === I && !u.frames[I].timeline.waitoncall && u.frames[I].timeline.start >= i[c].duration && !0 !== e.remove && (u.frames[I].timeline.waitoncall = !0), "start" === e.mode && "keep" !== u.triggercache && (u.frames[I].timeline.callstate = u.frames[I].timeline.waitoncall ? "waiting" : ""), "trigger" === e.mode && u.frames[I].timeline.waitoncall && (I === e.frame ? (u.frames[I].timeline.triggered = !0, u.frames[I].timeline.callstate = "called") : u.frames[I].timeline.triggered = !1), "rebuild" === e.mode || u.frames[I].timeline.triggered || (u.frames[I].timeline.callstate = u.frames[I].timeline.waitoncall ? "waiting" : ""), !1 !== e.fastforward) {
                            if (("continue" === e.mode || "trigger" === e.mode) && !1 === w && I !== e.frame) continue;
                            if (("rebuild" === e.mode || "preset" === e.mode) && !1 === w && void 0 !== u.triggeredFrame && I !== u.triggeredFrame) continue;
                            (I === e.frame || "rebuild" === e.mode && I === u.triggeredFrame) && (w = !0)
                        } else I === e.frame && (w = !0);
                        if (I !== e.frame && u.frames[I].timeline.waitoncall && "called" !== u.frames[I].timeline.callstate && (b = !0), I !== e.frame && w && (b = !0 === b && u.frames[I].timeline.waitoncall ? "skiprest" : !0 !== b && b), void 0 === u.hideonfirststart && "frame_1" === I && u.frames[I].timeline.waitoncall && (u.hideonfirststart = !0), b && "waiting" === u.frames[I].timeline.callstate && "preset" === e.mode && 1 != u.firstTimeRendered) S = !0, u.firstTimeRendered = !0; else if ("skiprest" === b || "called" !== u.frames[I].timeline.callstate && b && e.toframe !== I) continue;
                        if ("frame_999" !== I || !1 !== _ || "continue" !== e.mode && "start" !== e.mode && "rebuild" !== e.mode) {
                            u.fff = "frame_1" === I && ("trigger" !== e.mode || "frame_999" === u.currentframe || "frame_0" === u.currentframe || void 0 === u.currentframe), S || (u.frames[I].timeline.callstate = "called", u.currentframe = I);
                            var A = u.frames[I], z = u.fff ? u.frames.frame_0 : void 0, O = new punchgs.TimelineMax,
                                M = new punchgs.TimelineMax, C = u.c,
                                P = void 0 !== A.sfx && g(A.sfx.effect, u.m, A.timeline.ease),
                                j = A.timeline.speed / 1e3, Q = 0, H = m({
                                    id: c,
                                    frame: A,
                                    layer: d,
                                    ease: A.timeline.ease,
                                    splitAmount: C.length,
                                    target: I,
                                    forcefilter: void 0 !== u.frames.frame_hover && void 0 !== u.frames.frame_hover.filter
                                }), N = u.fff ? m({
                                    id: c,
                                    frame: z,
                                    layer: d,
                                    ease: A.timeline.ease,
                                    splitAmount: C.length,
                                    target: "frame_0"
                                }) : void 0, B = void 0 !== A.mask ? m({
                                    id: c,
                                    frame: {transform: {x: A.mask.x, y: A.mask.y}},
                                    layer: d,
                                    ease: H.ease,
                                    target: "mask"
                                }) : void 0, D = void 0 !== B && u.fff ? m({
                                    id: c,
                                    frame: {transform: {x: z.mask.x, y: z.mask.y}},
                                    layer: d,
                                    ease: H.ease,
                                    target: "frommask"
                                }) : void 0, W = H.ease;
                            "block" === P.type && (P.ft[0].background = A.sfx.fxc, O.add(punchgs.TweenMax.fromTo(P.bmask_in, j / 2, P.ft[0], P.ft[1], 0)), O.add(punchgs.TweenMax.fromTo(P.bmask_in, j / 2, P.ft[1], P.t, j / 2)), "frame_0" === I || "frame_1" === I ? N.opacity = 0 : "frame_999" === I && O.add(M.staggerFromTo(C, .05, {autoAlpha: 1}, {
                                autoAlpha: 0,
                                delay: j / 2
                            }, 0), .001)), void 0 !== A.color ? H.color = A.color : void 0 !== u.color && "npc" !== u.color[p] && (H.color = u.color[p]), void 0 !== z && void 0 !== z.color ? N.color = z.color : void 0 !== z && void 0 !== u.color && "npc" !== u.color[p] && (N.color = u.color[p]), void 0 !== A.bgcolor ? A.bgcolor.indexOf("gradient") >= 0 ? H.background = A.bgcolor : H.backgroundColor = A.bgcolor : !0 === u.bgcolinuse && (u.bgcol.indexOf("gradient") >= 0 ? H.background = u.bgcol : H.backgroundColor = u.bgcol), void 0 !== z && (void 0 !== z.bgcolor ? z.bgcolor.indexOf("gradient") >= 0 ? N.background = z.bgcolor : N.backgroundColor = z.bgcolor : !0 === u.bgcolinuse && (u.bgcol.indexOf("gradient") >= 0 ? N.background = u.bgcol : N.backgroundColor = u.bgcol));
                            var Y = 0;
                            if (void 0 !== u.splitText && !1 !== u.splitText) for (var F in t) if (void 0 === A[t[F]] || u.quickRendering) u.fff ? O.add(M.fromTo(u.splitText[t[F]], j, {
                                immediateRender: !1,
                                color: N.color
                            }, {color: H.color}, 0), 0) : O.add(M.to(u.splitText[t[F]], j, {color: H.color}, 0), 0); else {
                                var V = y(u.splitText[t[F]], A[t[F]].dir), E = m({
                                    id: c,
                                    frame: A,
                                    source: t[F],
                                    ease: W,
                                    layer: d,
                                    splitAmount: V.length,
                                    target: I + "_" + t[F]
                                }), X = u.fff ? m({
                                    id: c,
                                    frame: z,
                                    ease: E.ease,
                                    source: t[F],
                                    layer: d,
                                    splitAmount: V.length,
                                    target: "frame_0_" + t[F]
                                }) : void 0;
                                Q = void 0 === A[t[F]].delay ? .05 : A[t[F]].delay / 100, E.color = H.color, void 0 !== N && (X.color = N.color);
                                var Z = v(jQuery.extend(!0, {}, E)), q = u.fff ? v(jQuery.extend(!0, {}, X)) : void 0;
                                delete Z.dir, Z.data = {splitted: !0}, void 0 !== q && delete q.dir, u.fff ? O.add(M.staggerFromTo(V, j, q, Z, u.frames[I].split ? Q : 0, 0), 0) : O.add(M.staggerTo(V, j, Z, u.frames[I].split ? Q : 0, 0), 0), Y = V.length > Y ? V.length : Y
                            }
                            j += u.frames[I].split ? Q * Y : 0, u.pxundermask || void 0 !== B && (void 0 !== z && "hidden" === z.mask.overflow || "hidden" === A.mask.overflow) ? (O.add(punchgs.TweenMax.to(u.m, .001, {overflow: "hidden"}), 0), "column" === u.type && O.add(punchgs.TweenMax.to(u.cbgmask, .001, {overflow: "hidden"}), 0), u.btrans && (D && (D.rotationX = u.btrans.rX, D.rotationY = u.btrans.rY, D.rotationZ = u.btrans.rZ, D.opacity = u.btrans.o), B.rotationX = u.btrans.rX, B.rotationY = u.btrans.rY, B.rotationZ = u.btrans.rZ, B.opacity = u.btrans.o), u.fff ? O.add(punchgs.TweenMax.fromTo([u.m, u.cbgmask], j, jQuery.extend(!0, {}, D), jQuery.extend(!0, {}, B)), .001) : O.add(punchgs.TweenMax.to([u.m, u.cbgmask], j, jQuery.extend(!0, {}, B)), .001)) : void 0 !== u.btrans ? O.add(punchgs.TweenMax.to(u.m, .001, {
                                x: 0,
                                y: 0,
                                filter: "none",
                                opacity: u.btrans.o,
                                rotationX: u.btrans.rX,
                                rotationY: u.btrans.rY,
                                rotationZ: u.btrans.rZ,
                                overflow: "visible"
                            }), 0) : O.add(punchgs.TweenMax.to(u.m, .001, {
                                clearProps: "transform",
                                overflow: "visible"
                            }), 0), H.force3D = "auto", u.fff ? (H.visibility = "visible", void 0 !== u.cbg && O.fromTo(u.cbg, j, N, H, 0), i[c].BUG_safari_clipPath && (N.clipPath || H.clipPath || u.spike) && (N.z && parseInt(N.z, 10) || (N.z = -1e-4), H.z && parseInt(H.z, 10) || (H.z = 0)), void 0 !== u.cbg && "column" === u.type ? O.fromTo(C, j, a(N), a(H), 0) : O.fromTo(C, j, N, H, 0)) : (void 0 !== u.cbg && O.to(u.cbg, j, H, 0), !i[c].BUG_safari_clipPath || !H.clipPath && !u.spike || H.z && parseInt(H.z, 10) || (H.z = 0 - .01 * Math.random()), void 0 !== u.cbg && "column" === u.type ? O.to(C, j, a(H), 0) : O.to(C, j, H, 0)), void 0 !== W && "object" != typeof W && W.indexOf("SFXBounce") >= 0 && O.to(C, j, {
                                scaleY: .5,
                                scaleX: 1.3,
                                ease: H.ease + "-squash",
                                transformOrigin: "bottom"
                            }, 1e-4);
                            var G = "trigger" !== e.mode && (!0 !== b && "skiprest" !== b || "rebuild" !== e.mode) || e.frame === I || void 0 === A.timeline.start || !jQuery.isNumeric(A.timeline.start) ? "+=0" === A.timeline.start || void 0 === A.timeline.start ? "+=0.005" : parseInt(A.timeline.start, 0) / 1e3 : "+=" + parseInt(A.timeline.startRelative, 0) / 1e3;
                            u.timeline.addLabel(I, G), u.timeline.add(O, G), u.timeline.addLabel(I + "_end", "+=0.01"), O.eventCallback("onStart", o, [{
                                id: c,
                                frame: I,
                                L: d
                            }]), "true" == u.animationonscroll || 1 == u.animationonscroll ? (O.eventCallback("onUpdate", s, [{
                                id: c,
                                frame: I,
                                L: d
                            }]), O.smoothChildTiming = !0) : O.eventCallback("onUpdate", s, [{
                                id: c,
                                frame: I,
                                L: d
                            }]), O.eventCallback("onComplete", n, [{id: c, frame: I, L: d}])
                        }
                    }
                }
                if (void 0 !== u.frames.loop) {
                    var U = u.frames.loop.frame_0, J = u.frames.loop.frame_999, K = new punchgs.TimelineMax({}),
                        $ = new punchgs.TimelineMax({repeat: -1, yoyo: u.frames.loop.timeline.yoyo_move}),
                        ee = new punchgs.TimelineMax({repeat: -1, yoyo: u.frames.loop.timeline.yoyo_rotate}),
                        te = new punchgs.TimelineMax({repeat: -1, yoyo: u.frames.loop.timeline.yoyo_scale}),
                        ie = new punchgs.TimelineMax({repeat: -1, yoyo: u.frames.loop.timeline.yoyo_filter}),
                        ae = parseInt(u.frames.loop.timeline.speed, 0) / 1e3,
                        re = parseInt(u.frames.loop.timeline.start) / 1e3 || 0, oe = re + .2;
                    if (K.add($, 0), K.add(ee, 0), K.add(te, 0), K.add(ie, 0), J.originX = U.originX, J.originY = U.originY, J.originZ = U.originZ, u.frames.loop.timeline.curved) {
                        var se = parseInt(u.frames.loop.timeline.radiusAngle, 0) || 0,
                            ne = [{x: (U.x - U.xr) * i[c].bw, y: 0, z: (U.z - U.zr) * i[c].bw}, {
                                x: 0,
                                y: (U.y + U.yr) * i[c].bw,
                                z: 0
                            }, {x: (J.x + J.xr) * i[c].bw, y: 0, z: (J.z + J.zr) * i[c].bw}, {
                                x: 0,
                                y: (J.y - J.yr) * i[c].bw,
                                z: 0
                            }], le = {
                                type: "thru",
                                curviness: u.frames.loop.timeline.curviness,
                                values: [],
                                autoRotate: u.frames.loop.timeline.autoRotate
                            };
                        for (var de in ne) ne.hasOwnProperty(de) && (le.values[de] = ne[se], se = ++se == ne.length ? 0 : se);
                        u.timeline.fromTo(u.lp, .2, {
                            "-webkit-filter": "blur(" + (U.blur || 0) + "px) grayscale(" + (U.grayscale || 0) + "%) brightness(" + (U.brightness || 100) + "%)",
                            filter: "blur(" + (U.blur || 0) + "px) grayscale(" + (U.grayscale || 0) + "%) brightness(" + (U.brightness || 100) + "%)",
                            x: 0,
                            y: 0,
                            z: 0,
                            minWidth: u._incolumn || u._ingroup ? "100%" : void 0 === u.eow ? 0 : u.eow,
                            minHeight: u._incolumn || u._ingroup ? "100%" : void 0 === u.eoh ? 0 : u.eoh,
                            scaleX: 1,
                            scaleY: 1,
                            skew: 0,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            transformPerspective: 600,
                            transformOrigin: J.originX + " " + J.originY + " " + J.originZ,
                            opacity: 1
                        }, {
                            x: le.values[3].x,
                            y: le.values[3].y,
                            z: le.values[3].z,
                            scaleX: U.scaleX,
                            skewX: U.skewX,
                            skewY: U.skewY,
                            scaleY: U.scaleY,
                            rotationX: U.rotationX,
                            rotationY: U.rotationY,
                            rotationZ: U.rotationZ,
                            "-webkit-filter": "blur(" + parseInt(U.blur, 0) + "px) grayscale(" + parseInt(U.grayscale, 0) + "%) brightness(" + parseInt(U.brightness, 0) + "%)",
                            filter: "blur(" + parseInt(U.blur, 0) + "px) grayscale(" + parseInt(U.grayscale, 0) + "%) brightness(" + parseInt(U.brightness, 0) + "%)",
                            ease: punchgs.Sine.easeInOut,
                            opacity: U.opacity
                        }, re), $.to(u.lp, u.frames.loop.timeline.yoyo_move ? ae / 2 : ae, {
                            bezier: le,
                            ease: u.frames.loop.timeline.ease
                        })
                    } else u.timeline.fromTo(u.lp, .2, {
                        "-webkit-filter": "blur(" + (U.blur || 0) + "px) grayscale(" + (U.grayscale || 0) + "%) brightness(" + (U.brightness || 100) + "%)",
                        filter: "blur(" + (U.blur || 0) + "px) grayscale(" + (U.grayscale || 0) + "%) brightness(" + (U.brightness || 100) + "%)",
                        x: 0,
                        y: 0,
                        z: 0,
                        minWidth: u._incolumn || u._ingroup ? "100%" : void 0 === u.eow ? 0 : u.eow,
                        minHeight: u._incolumn || u._ingroup ? "100%" : void 0 === u.eoh ? 0 : u.eoh,
                        scaleX: 1,
                        scaleY: 1,
                        skew: 0,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        transformPerspective: 600,
                        transformOrigin: J.originX + " " + J.originY + " " + J.originZ,
                        opacity: 1
                    }, {
                        x: U.x * i[c].bw,
                        y: U.y * i[c].bw,
                        z: U.z * i[c].bw,
                        scaleX: U.scaleX,
                        skewX: U.skewX,
                        skewY: U.skewY,
                        scaleY: U.scaleY,
                        rotationX: U.rotationX,
                        rotationY: U.rotationY,
                        rotationZ: U.rotationZ,
                        ease: punchgs.Sine.easeOut,
                        opacity: U.opacity,
                        "-webkit-filter": "blur(" + parseInt(U.blur || 0, 0) + "px) grayscale(" + parseInt(U.grayscale || 0, 0) + "%) brightness(" + parseInt(U.brightness || 100, 0) + "%)",
                        filter: "blur(" + parseInt(U.blur || 0, 0) + "px) grayscale(" + parseInt(U.grayscale || 0, 0) + "%) brightness(" + parseInt(U.brightness || 100, 0) + "%)"
                    }, re), $.to(u.lp, u.frames.loop.timeline.yoyo_move ? ae / 2 : ae, {
                        x: J.x * i[c].bw,
                        y: J.y * i[c].bw,
                        z: J.z * i[c].bw,
                        ease: u.frames.loop.timeline.ease
                    });
                    ee.to(u.lp, u.frames.loop.timeline.yoyo_rotate ? ae / 2 : ae, {
                        rotationX: J.rotationX,
                        rotationY: J.rotationY,
                        rotationZ: J.rotationZ,
                        ease: u.frames.loop.timeline.ease
                    }), te.to(u.lp, u.frames.loop.timeline.yoyo_scale ? ae / 2 : ae, {
                        scaleX: J.scaleX,
                        scaleY: J.scaleY,
                        skewX: J.skewX,
                        skewY: J.skewY,
                        ease: u.frames.loop.timeline.ease
                    });
                    var ce = {
                        opacity: J.opacity || 1,
                        ease: u.frames.loop.timeline.ease,
                        "-webkit-filter": "blur(" + (J.blur || 0) + "px) grayscale(" + (J.grayscale || 0) + "%) brightness(" + (J.brightness || 100) + "%)",
                        filter: "blur(" + (J.blur || 0) + "px) grayscale(" + (J.grayscale || 0) + "%) brightness(" + (J.brightness || 100) + "%)"
                    };
                    ie.to(u.lp, u.frames.loop.timeline.yoyo_filter ? ae / 2 : ae, ce), u.timeline.add(K, oe)
                }
                if (void 0 !== u.frames.frame_hover && ("start" === e.mode || void 0 === u.hoverframeadded)) {
                    u.hoverframeadded = !0;
                    var pe = u.frames.frame_hover.timeline.speed / 1e3;
                    pe = 0 === pe ? 1e-5 : pe, u.hoverlistener || (u.hoverlistener = !0, jQuery(document).on("mouseenter mousemove", ("column" === u.type ? "#" + u.cbg[0].id + "," : "") + "#" + u.c[0].id, function (e) {
                        if (("mousemove" !== e.type || !0 !== u.ignoremousemove) && u.readyForHover) {
                            if (u.ignoremousemove = !0, u.elementHovered = !0, u.hovertimeline || (u.hovertimeline = new punchgs.TimelineMax), u.hovertimeline.to([u.m, u.cbgmask], pe, {overflow: u.frames.frame_hover.mask ? "hidden" : "visible"}, 0), "column" === u.type && u.hovertimeline.to(u.cbg, pe, jQuery.extend(!0, {}, l(u.frames.frame_hover, u.cbg)), 0), u.hovertimeline.pause(), "text" !== u.type && "button" !== u.type || void 0 === u.splitText || !1 === u.splitText || u.hovertimeline.to([u.splitText.lines, u.splitText.words, u.splitText.chars], pe, {
                                color: u.frames.frame_hover.color,
                                ease: u.frames.frame_hover.transform.ease
                            }, 0), "column" === u.type ? u.hovertimeline.to(u.c, pe, a(jQuery.extend(!0, {}, l(u.frames.frame_hover, u.c))), 0) : u.hovertimeline.to(u.c, pe, jQuery.extend(!0, {}, l(u.frames.frame_hover, u.c)), 0), "svg" === u.type) {
                                u.svgHTemp = jQuery.extend(!0, {}, u.svgH);
                                var t = Array.isArray(u.svgHTemp.fill) ? u.svgHTemp.fill[i[c].level] : u.svgHTemp.fill;
                                u.svgHTemp.fill = t, u.hovertimeline.to(u.svg, pe, u.svgHTemp, 0), u.hovertimeline.to(u.svgPath, pe, {fill: t}, 0)
                            }
                            u.hovertimeline.play()
                        }
                    }), jQuery(document).on("mouseleave", ("column" === u.type ? "#" + u.cbg[0].id + "," : "") + "#" + u.c[0].id, function () {
                        u.elementHovered = !1, u.readyForHover && void 0 !== u.hovertimeline && (u.hovertimeline.reverse(), u.hovertimeline.eventCallback("onReverseComplete", r, [{
                            id: c,
                            L: d
                        }]))
                    }))
                }
                if (S || (u.lastRequestedMainFrame = "start" === e.mode ? "frame_1" : "continue" === e.mode ? e.frame : u.lastRequestedMainFrame), void 0 !== e.totime ? u.tSTART = e.totime : void 0 !== f && void 0 === e.frame ? u.tSTART = f : void 0 !== e.frame ? u.tSTART = e.frame : u.tSTART = 0, 0 === u.tSTART && void 0 === u.startedAnimOnce && void 0 === u.leftstage && void 0 === u.startedAnimOnce && !0 === u.hideonfirststart && "preset" === e.mode && (i[c]._L[d[0].id].p[0].classList.add("rs-forcehidden"), u.hideonfirststart = !1), "frame_999" !== u.tSTART && "frame_999" !== u.triggeredFrame || !u.leftstage && void 0 !== u.startedAnimOnce) {
                    if ("true" != u.animationonscroll && 1 != u.animationonscroll ? u.timeline.play(u.tSTART) : u.timeline.time(u.tSTART), jQuery.inArray(u.type, ["group", "row", "column"]) >= 0 && void 0 !== e.frame) {
                        if (void 0 === u.childrenJS) for (var F in u.childrenJS = {}, i[c]._L) void 0 !== i[c]._L[F]._lig && void 0 !== i[c]._L[F]._lig[0] && i[c]._L[F]._lig[0].id === d[0].id && i[c]._L[F]._lig[0].id !== i[c]._L[F].c[0].id && (u.childrenJS[i[c]._L[F].c[0].id] = i[c]._L[F].c);
                        e.frame = "0" == e.frame ? "frame_0" : e.frame, e.frame = "1" == e.frame ? "frame_1" : e.frame, e.frame = "999" == e.frame ? "frame_999" : e.frame;
                        var ue = void 0 === e.totime ? void 0 !== u.frames[e.frame].timeline.startAbsolute ? parseInt(u.frames[e.frame].timeline.startAbsolute, 0) / 1e3 : void 0 !== u.frames[e.frame].timeline.start ? jQuery.isNumeric(u.frames[e.frame].timeline.start) ? parseInt(u.frames[e.frame].timeline.start, 0) / 1e3 : e.totime : .001 : e.totime;
                        if (!0 === e.updateChildren) for (var F in u.childrenJS) u.childrenJS.hasOwnProperty(F) && i.renderLayerAnimation({
                            layer: u.childrenJS[F],
                            fastforward: !1,
                            id: c,
                            mode: "continue",
                            updateChildren: !0,
                            totime: ue
                        }); else for (var F in u.childrenJS) u.childrenJS.hasOwnProperty(F) && i[c]._L[F].pausedTrueParrent && (i.renderLayerAnimation({
                            layer: u.childrenJS[F],
                            fastforward: !1,
                            id: c,
                            mode: "continue",
                            updateChildren: !0,
                            totime: ue
                        }), i[c]._L[F].pausedTrueParrent = !1)
                    }
                } else ;
            }
        }
    });
    var a = function (e) {
        var t = jQuery.extend(!0, {}, e);
        return delete t.backgroundColor, delete t.background, delete t.backgroundImage, delete t.borderSize, delete t.borderStyle, t
    }, r = function (e) {
        i[e.id]._L[e.L[0].id].textDecoration && punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c, {textDecoration: i[e.id]._L[e.L[0].id].textDecoration})
    }, o = function (e) {
        i[e.id].BUG_safari_clipPath && e.L[0].classList.remove("rs-pelock"), (i[e.id]._L[e.L[0].id]._ingroup || i[e.id]._L[e.L[0].id]._incolumn || i[e.id]._L[e.L[0].id]._inrow) && void 0 !== i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid] && void 0 !== i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timeline && (i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timeline.isActive() || void 0 === i[e.id]._L[e.L[0].id] || void 0 === i[e.id]._L[e.L[0].id].frames[i[e.id]._L[e.L[0].id].timeline.currentLabel()] || (null == i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timezone || i[e.id]._L[i[e.id]._L[e.L[0].id]._ligid].timezone.to <= parseInt(i[e.id]._L[e.L[0].id].frames[i[e.id]._L[e.L[0].id].timeline.currentLabel()].timeline.start, 0)) && !0 !== i[e.id]._L[e.L[0].id].animOnScrollForceDisable && (i[e.id]._L[e.L[0].id].pausedTrueParrent = !0, i[e.id]._L[e.L[0].id].timeline.pause()));
        var t = i[e.id]._L[e.L[0].id], a = t.hovertimeline;
        a && a.time() > 0 && (a.pause(), a.time(0), a.kill(), delete t.hovertimeline), i[e.id]._L[e.L[0].id].p[0].classList.remove("rs-forcehidden");
        var r = {};
        if (i[e.id]._L[e.L[0].id].ignoremousemove = !1, i[e.id]._L[e.L[0].id].leftstage = !1, i[e.id]._L[e.L[0].id].readyForHover = !1, r.layer = e.L, void 0 !== i[e.id]._L[e.L[0].id].layerLoop && i[e.id]._L[e.L[0].id].layerLoop.from === e.frame && i[e.id]._L[e.L[0].id].layerLoop.count++, "frame_999" !== e.frame && (i[e.id]._L[e.L[0].id].startedAnimOnce = !0, punchgs.TweenMax.set([i[e.id]._L[e.L[0].id].c, i[e.id]._L[e.L[0].id].l, i[e.id]._L[e.L[0].id].m], {visibility: "visible"}), punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p, {
            pointerEvents: i[e.id]._L[e.L[0].id].noPevents ? "none" : "auto",
            visibility: "visible"
        })), r.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enterstage" : "frame_999" === e.frame ? "leavestage" : "framestarted", "enterstage" === r.eventtype) {
            var o = i[e.id].pr_processing_key || i[e.id].pr_active_key || 0, s = 0;
            if (i[e.id].middleZones && i[e.id].middleZones.length > 0 && void 0 !== i[e.id].middleZones[o]) for (s = 0; s < i[e.id].middleZones[o].length; s++) i[e.id].middleZones[o][s].style.top = Math.round(i[e.id].height / 2 - i[e.id].middleZones[o][s].offsetHeight / 2) + "px";
            if (i[e.id].smiddleZones && i[e.id].smiddleZones.length > 0) for (s = 0; s < i[e.id].smiddleZones.length; s++) i[e.id].smiddleZones[s].style.top = Math.round(i[e.id].height / 2 - i[e.id].smiddleZones[s].offsetHeight / 2) + "px"
        }
        r.layertype = i[e.id]._L[e.L[0].id].type, r.frame_index = e.frame, r.layersettings = i[e.id]._L[e.L[0].id], i[e.id].c.trigger("revolution.layeraction", [r]), "enterstage" === r.eventtype && i.toggleState(i[e.id]._L[e.L[0].id].layertoggledby), "frame_1" === e.frame && i.animcompleted(e.L, e.id)
    }, s = function (e) {
        "frame_999" === e.frame && (i[e.id]._L[e.L[0].id].leftstage && i[e.id]._L[e.L[0].id].p[0].classList.remove("rs-forcehidden"), i[e.id]._L[e.L[0].id].leftstage = !1, punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c, {visibility: "visible"}), punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p, {
            pointerEvents: i[e.id]._L[e.L[0].id].noPevents ? "none" : "auto",
            visibility: "visible"
        }))
    }, n = function (e) {
        var t = !0;
        if ("column" === i[e.id]._L[e.L[0].id].type || "row" === i[e.id]._L[e.L[0].id].type || "group" === i[e.id]._L[e.L[0].id].type) {
            var a = i[e.id]._L[e.L[0].id].timeline.currentLabel(), r = jQuery.inArray(a, i[e.id]._L[e.L[0].id].ford);
            r++, r = i[e.id]._L[e.L[0].id].ford.length > r ? i[e.id]._L[e.L[0].id].ford[r] : a, void 0 !== i[e.id]._L[e.L[0].id].frames[r] && void 0 !== i[e.id]._L[e.L[0].id].frames[a] && (i[e.id]._L[e.L[0].id].timezone = {
                from: parseInt(i[e.id]._L[e.L[0].id].frames[a].timeline.startAbsolute, 0),
                to: parseInt(i[e.id]._L[e.L[0].id].frames[r].timeline.startAbsolute, 0)
            })
        }
        if ("frame_999" === e.frame) punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].c, {visibility: "hidden"}), punchgs.TweenMax.set(i[e.id]._L[e.L[0].id].p, {
            pointerEvents: "none",
            visibility: "hidden"
        }), t = !1; else if (i[e.id].isEdge && "shape" === i[e.id]._L[e.L[0].id].type) {
            var o = i[e.id]._L[e.L[0].id].c[0].style.opacity;
            i[e.id]._L[e.L[0].id].c[0].style.opacity = o - 1e-4, punchgs.TweenLite.set(i[e.id]._L[e.L[0].id].c[0], {
                opacity: o - .001,
                delay: .05
            }), punchgs.TweenLite.set(i[e.id]._L[e.L[0].id].c[0], {opacity: o, delay: .1})
        }
        var s = {};
        s.layer = e.L, s.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enteredstage" : "frame_999" === e.frame ? "leftstage" : "frameended", i[e.id]._L[e.L[0].id].readyForHover = !0, s.layertype = i[e.id]._L[e.L[0].id].type, s.frame_index = e.frame, s.layersettings = i[e.id]._L[e.L[0].id], i[e.id].c.trigger("revolution.layeraction", [s]), "frame_999" === e.frame && "leftstage" === s.eventtype && (i[e.id]._L[e.L[0].id].leftstage = !0, i[e.id]._L[e.L[0].id].p[0].classList.add("rs-forcehidden")), "leftstage" === s.eventtype && void 0 !== i[e.id].videos && void 0 !== i[e.id].videos[e.L[0].id] && i.stopVideo && i.stopVideo(e.L, e.id), "column" === i[e.id]._L[e.L[0].id].type && punchgs.TweenMax.to(i[e.id]._L[e.L[0].id].cbg, .01, {visibility: "visible"}), "leftstage" === s.eventtype && (i.unToggleState(e.layertoggledby), "video" === i[e.id]._L[e.L[0].id].type && i.resetVideo && setTimeout(function () {
            i.resetVideo(e.L, e.id)
        }, 100)), i[e.id].BUG_safari_clipPath && !t && e.L[0].classList.add("rs-pelock"), void 0 !== i[e.id]._L[e.L[0].id].layerLoop && i[e.id]._L[e.L[0].id].layerLoop.to === e.frame && (-1 == i[e.id]._L[e.L[0].id].layerLoop.repeat || i[e.id]._L[e.L[0].id].layerLoop.repeat > i[e.id]._L[e.L[0].id].layerLoop.count) && i.renderLayerAnimation({
            layer: i[e.id]._L[e.L[0].id].c,
            frame: i[e.id]._L[e.L[0].id].layerLoop.from,
            updateChildren: i[e.id]._L[e.L[0].id].layerLoop.children,
            mode: "continue",
            fastforward: !0 === i[e.id]._L[e.L[0].id].layerLoop.keep,
            id: e.id
        })
    }, l = function (e, t) {
        var i = jQuery.extend(!0, {}, e.transform);
        return (i.originX || i.originY || i.originZ) && (i.transformOrigin = (void 0 === i.originX ? "50%" : i.originX) + " " + (void 0 === i.originY ? "50%" : i.originY) + " " + (void 0 === i.originZ ? "50%" : i.originZ), delete i.originX, delete i.originY, delete i.originZ), void 0 !== e && void 0 !== e.filter && (i["-webkit-filter"] = "blur(" + (e.filter.blur || 0) + "px) grayscale(" + (e.filter.grayscale || 0) + "%) brightness(" + (e.filter.brightness || 100) + "%)", i.filter = "blur(" + (e.filter.blur || 0) + "px) grayscale(" + (e.filter.grayscale || 0) + "%) brightness(" + (e.filter.brightness || 100) + "%)"), i.color = void 0 === i.color ? "rgba(255,255,255,1)" : i.color, i.force3D = "auto", i.backgroundImage && "string" == typeof i.backgroundImage && -1 !== i.backgroundImage.search("gradient") && 180 !== c(t.css("backgroundImage")) && 180 === c(i.backgroundImage) && (i.backgroundImage = d(i.backgroundImage, 180)), i
    }, d = function (e, t) {
        var i = (e = e.split("("))[0];
        return e.shift(), i + "(" + t + "deg, " + e.join("(")
    }, c = function (e) {
        if (-1 !== e.search("deg,")) {
            var t = e.split("deg,")[0];
            if (-1 !== t.search(/\(/)) return parseInt(t.split("(")[1], 10)
        }
        return 180
    }, p = function (e, t) {
        e = void 0 === e ? "" : e.split(";");
        var a = {
            fill: i.revToResp("#ffffff", i[t].rle),
            stroke: "transparent",
            "stroke-width": "0px",
            "stroke-dasharray": "0",
            "stroke-dashoffset": "0"
        };
        for (var r in e) if (e.hasOwnProperty(r)) {
            var o = e[r].split(":");
            switch (o[0]) {
                case"c":
                    a.fill = i.revToResp(o[1], i[t].rle, void 0, "||");
                    break;
                case"sw":
                    a["stroke-width"] = o[1];
                    break;
                case"sc":
                    a.stroke = o[1];
                    break;
                case"so":
                    a["stroke-dashoffset"] = o[1];
                    break;
                case"sa":
                    a["stroke-dasharray"] = o[1]
            }
        }
        return a
    }, u = function (e) {
        return "c" === e ? "center" : "l" === e ? "left" : "r" === e ? "right" : e
    }, h = function (e) {
        var t = i[e.id]._L[e.layer[0].id], a = !1;
        if (t.splitText && !1 !== t.splitText && t.splitText.revert(), "text" === t.type || "button" === t.type) {
            for (var r in t.frames) if (void 0 !== t.frames[r].chars || void 0 !== t.frames[r].words || void 0 !== t.frames[r].lines) {
                a = !0;
                break
            }
            t.splitText = !!a && new punchgs.SplitText(t.c, {
                type: "lines,words,chars",
                wordsClass: "rs_splitted_words",
                linesClass: "rs_splitted_lines",
                charsClass: "rs_splitted_chars"
            })
        } else t.splitText = !1
    }, g = function (e, t, i) {
        if (void 0 !== e && e.indexOf("block") >= 0) {
            var a = {};
            switch (0 === t.find(".tp-blockmask_in").length && (t.append('<div class="tp-blockmask_in"></div>'), t.append('<div class="tp-blockmask_out"></div>')), i = void 0 === i ? punchgs.Power3.easeInOut : i, a.ft = [{
                scaleY: 1,
                scaleX: 0,
                transformOrigin: "0% 50%"
            }, {scaleY: 1, scaleX: 1, ease: i, immediateRender: !1}], a.t = {
                scaleY: 1,
                scaleX: 0,
                transformOrigin: "100% 50%",
                ease: i,
                immediateRender: !1
            }, a.bmask_in = t.find(".tp-blockmask_in"), a.bmask_out = t.find(".tp-blockmask_out"), a.type = "block", e) {
                case"blocktoleft":
                case"blockfromright":
                    a.ft[0].transformOrigin = "100% 50%", a.t.transformOrigin = "0% 50%";
                    break;
                case"blockfromtop":
                case"blocktobottom":
                    a.ft = [{scaleX: 1, scaleY: 0, transformOrigin: "50% 0%"}, {
                        scaleX: 1,
                        scaleY: 1,
                        ease: i,
                        immediateRender: !1
                    }], a.t = {scaleX: 1, scaleY: 0, transformOrigin: "50% 100%", ease: i, immediateRender: !1};
                    break;
                case"blocktotop":
                case"blockfrombottom":
                    a.ft = [{scaleX: 1, scaleY: 0, transformOrigin: "50% 100%"}, {
                        scaleX: 1,
                        scaleY: 1,
                        ease: i,
                        immediateRender: !1
                    }], a.t = {scaleX: 1, scaleY: 0, transformOrigin: "50% 0%", ease: i, immediateRender: !1}
            }
            return a.ft[1].overwrite = "auto", a.t.overwrite = "auto", a
        }
        return !1
    }, f = function (e, t, a, r, o) {
        return 0 === i[o].sdir || void 0 === t ? e : ("mask" === a ? r = "x" === r ? "mX" : "y" === r ? "mY" : r : "chars" === a ? r = "x" === r ? "cX" : "y" === r ? "cY" : "dir" === r ? "cD" : r : "words" === a ? r = "x" === r ? "wX" : "y" === r ? "wY" : "dir" === r ? "wD" : r : "lines" === a && (r = "x" === r ? "lX" : "y" === r ? "lY" : "dir" === r ? "lD" : r), void 0 === t[r] || !1 === t[r] ? e : void 0 !== t && !0 === t[r] ? "t" === e || "top" === e ? "b" : "b" === e || "bottom" === e ? "t" : "l" === e || "left" === e ? "r" : "r" === e || "right" === e ? "l" : -1 * e : void 0)
    }, m = function (e) {
        var t = i[e.id]._L[e.layer[0].id],
            a = void 0 === e.source ? jQuery.extend(!0, {}, e.frame.transform) : jQuery.extend(!0, {}, e.frame[e.source]),
            r = {originX: "50%", originY: "50%", originZ: "0"}, o = i[e.id].conw, s = i[e.id].conh;
        for (var n in a) if (a.hasOwnProperty(n)) if (a[n] = "object" == typeof a[n] ? a[n][i[e.id].level] : a[n], "inherit" === a[n] || "delay" === n || "direction" === n || "use" === n) delete a[n]; else if ("originX" === n || "originY" === n || "originZ" === n) r[n] = a[n], delete a[n]; else if (jQuery.isNumeric(a[n], 0)) a[n] = f(a[n], e.frame.reverse, e.target, n, e.id, e.id); else if ("r" === a[n][0] && "a" === a[n][1] && "random" !== a[n]) {
            a[n] = a[n].replace("ran(", "").replace(")", "");
            var l = a[n].indexOf("%") >= 0 ? "%" : "", d = a[n].split("|");
            if (d[0] = parseFloat(d[0]), d[1] = parseFloat(d[1]), void 0 !== e.splitAmount && e.splitAmount > 1) {
                a[n] = "[" + (Math.random() * (d[1] - d[0]) + d[0]) + l;
                for (var c = 0; c < e.splitAmount; c++) a[n] = a[n] + "|" + (Math.random() * (d[1] - d[0]) + d[0]) + l;
                a[n] = a[n] + "]"
            } else a[n] = Math.random() * (d[1] - d[0]) + d[0] + l
        } else {
            a[n] = a[n].replace("[", "").replace("]", ""), a[n] = a[n].replace("cyc(", "").replace(")", "");
            var p = parseInt(a[n], 0);
            if (a[n].indexOf("%") >= 0 && jQuery.isNumeric(p)) "x" == n ? a[n] = f(t.eow * p / 100, e.frame.reverse, e.target, n, e.id) : "y" == n && (a[n] = f(t.eoh * p / 100, e.frame.reverse, e.target, n, e.id)); else switch (a[n] = f(a[n], e.frame.reverse, e.target, n, e.id, e.id), a[n]) {
                case"t":
                case"top":
                    a[n] = 0 - t.eoh - ("column" === t.type ? 0 : t.calcy);
                    break;
                case"b":
                case"bottom":
                    a[n] = s - ("column" === t.type ? 0 : t.calcy);
                    break;
                case"l":
                case"left":
                    a[n] = 0 - t.eow - ("column" === t.type ? 0 : t.calcx);
                    break;
                case"r":
                case"right":
                    a[n] = o - ("column" === t.type ? 0 : t.calcx);
                    break;
                case"m":
                case"c":
                case"middle":
                case"center":
                    "x" === n && (a[n] = f(o / 2 - ("column" === t.type ? 0 : t.calcx) - t.eow / 2, e.frame.reverse, e.target, n, e.id)), "y" === n && (a[n] = f(s / 2 - ("column" === t.type ? 0 : t.calcy) - t.eoh / 2, e.frame.reverse, e.target, n, e.id))
            }
        }
        if (a.transformOrigin = r.originX + " " + r.originY + " " + r.originZ, !i[e.id].BUG_ie_clipPath && void 0 !== a.clip && void 0 !== t.clipPath && t.clipPath.use) {
            var u = "rectangle" == t.clipPath.type, h = parseInt(a.clip, 0), g = 100 - parseInt(a.clipB, 0),
                m = Math.round(h / 2);
            switch (t.clipPath.origin) {
                case"invh":
                    a.clipPath = "polygon(0% 0%, 0% 100%, " + h + "% 100%, " + h + "% 0%, 100% 0%, 100% 100%, " + g + "% 100%, " + g + "% 0%, 0% 0%)";
                    break;
                case"invv":
                    a.clipPath = "polygon(100% 0%, 0% 0%, 0% " + h + "%, 100% " + h + "%, 100% 100%, 0% 100%, 0% " + g + "%, 100% " + g + "%, 100% 0%)";
                    break;
                case"cv":
                    a.clipPath = u ? "polygon(" + (50 - m) + "% 0%, " + (50 + m) + "% 0%, " + (50 + m) + "% 100%, " + (50 - m) + "% 100%)" : "circle(" + h + "% at 50% 50%)";
                    break;
                case"ch":
                    a.clipPath = u ? "polygon(0% " + (50 - m) + "%, 0% " + (50 + m) + "%, 100% " + (50 + m) + "%, 100% " + (50 - m) + "%)" : "circle(" + h + "% at 50% 50%)";
                    break;
                case"l":
                    a.clipPath = u ? "polygon(0% 0%, " + h + "% 0%, " + h + "% 100%, 0% 100%)" : "circle(" + h + "% at 0% 50%)";
                    break;
                case"r":
                    a.clipPath = u ? "polygon(" + (100 - h) + "% 0%, 100% 0%, 100% 100%, " + (100 - h) + "% 100%)" : "circle(" + h + "% at 100% 50%)";
                    break;
                case"t":
                    a.clipPath = u ? "polygon(0% 0%, 100% 0%, 100% " + h + "%, 0% " + h + "%)" : "circle(" + h + "% at 50% 0%)";
                    break;
                case"b":
                    a.clipPath = u ? "polygon(0% 100%, 100% 100%, 100% " + (100 - h) + "%, 0% " + (100 - h) + "%)" : "circle(" + h + "% at 50% 100%)";
                    break;
                case"lt":
                    a.clipPath = u ? "polygon(0% 0%," + 2 * h + "% 0%, 0% " + 2 * h + "%)" : "circle(" + h + "% at 0% 0%)";
                    break;
                case"lb":
                    a.clipPath = u ? "polygon(0% " + (100 - 2 * h) + "%, 0% 100%," + 2 * h + "% 100%)" : "circle(" + h + "% at 0% 100%)";
                    break;
                case"rt":
                    a.clipPath = u ? "polygon(" + (100 - 2 * h) + "% 0%, 100% 0%, 100% " + 2 * h + "%)" : "circle(" + h + "% at 100% 0%)";
                    break;
                case"rb":
                    a.clipPath = u ? "polygon(" + (100 - 2 * h) + "% 100%, 100% 100%, 100% " + (100 - 2 * h) + "%)" : "circle(" + h + "% at 100% 100%)";
                    break;
                case"clr":
                    a.clipPath = u ? "polygon(0% 0%, 0% " + h + "%, " + (100 - h) + "% 100%, 100% 100%, 100% " + (100 - h) + "%, " + h + "% 0%)" : "circle(" + h + "% at 50% 50%)";
                    break;
                case"crl":
                    a.clipPath = u ? "polygon(0% " + (100 - h) + "%, 0% 100%, " + h + "% 100%, 100% " + h + "%, 100% 0%, " + (100 - h) + "% 0%)" : "circle(" + h + "% at 50% 50%)"
            }
            !0 !== i.isFirefox(e.id) && (a["-webkit-clip-path"] = a.clipPath), a["clip-path"] = a.clipPath, delete a.clip
        } else delete a.clip;
        return "mask" !== e.target && (void 0 === e.frame || void 0 === e.frame.filter && !e.forcefilter || (a["-webkit-filter"] = "blur(" + (null == e.frame.filter ? 0 : e.frame.filter.blur || 0) + "px) grayscale(" + (null == e.frame.filter ? 0 : e.frame.filter.grayscale || 0) + "%) brightness(" + (null == e.frame.filter ? 100 : e.frame.filter.brightness || 100) + "%)", a.filter = "blur(" + (null == e.frame.filter ? 0 : e.frame.filter.blur || 0) + "px) grayscale(" + (null == e.frame.filter ? 0 : e.frame.filter.grayscale || 0) + "%) brightness(" + (null == e.frame.filter ? 100 : e.frame.filter.brightness || 100) + "%)"), jQuery.inArray(e.source, ["chars", "words", "lines"]) >= 0 && (void 0 !== e.frame[e.source].blur || e.forcefilter) && (a["-webkit-filter"] = "blur(" + (parseInt(e.frame[e.source].blur, 0) || 0) + "px) grayscale(" + (parseInt(e.frame[e.source].grayscale, 0) || 0) + "%) brightness(" + (parseInt(e.frame[e.source].brightness, 0) || 100) + "%)", a.filter = "blur(" + (parseInt(e.frame[e.source].blur, 0) || 0) + "px) grayscale(" + (parseInt(e.frame[e.source].grayscale, 0) || 0) + "%) brightness(" + (parseInt(e.frame[e.source].brightness, 0) || 100) + "%)")), a.ease = void 0 !== a.ease ? a.ease : void 0 === a.ease && void 0 !== e.ease || void 0 !== a.ease && void 0 !== e.ease && "inherit" === a.ease ? e.ease : e.frame.timeline.ease, a.ease = void 0 === a.ease || "default" === a.ease ? punchgs.Power3.easeInOut : a.ease, a
    }, v = function (e) {
        var t;
        for (var i in e) "string" == typeof e[i] && e[i].indexOf("|") >= 0 && ((t = void 0 === t ? {} : t)[i] = e[i].replace("[", "").replace("]", "").split("|"), delete e[i]);
        return void 0 !== t && (e.cycle = t), e
    }, y = function (e, t) {
        var i, a, r, o = e.length - 1, s = [];
        switch (t) {
            case"forward":
            case"f":
            case"random":
            case"r":
                for (i = 0; i <= o; i++) s.push(i);
                "random" !== t && "r" !== t || (s = function (e) {
                    for (var t, i, a = e.length; 0 !== a;) i = Math.floor(Math.random() * a), t = e[a -= 1], e[a] = e[i], e[i] = t;
                    return e
                }(s));
                break;
            case"b":
            case"backward":
                for (i = 0; i <= o; i++) s.push(o - i);
                break;
            case"m":
            case"middletoedge":
                var n = Math.ceil(o / 2);
                for (r = n - 1, a = n + 1, s.push(n), i = 0; i < n; i++) r >= 0 && s.push(r), a <= o && s.push(a), r--, a++;
                break;
            case"e":
            case"edgetomiddle":
                for (r = o, a = 0, i = 0; i <= Math.floor(o / 2); i++) s.push(r), a < r && s.push(a), r--, a++;
                break;
            default:
                for (i = 0; i <= o; i++) s.push(i)
        }
        var l = [];
        for (var d in s) s.hasOwnProperty(d) && l.push(e[s[d]]);
        return l
    }, b = function (e, t, a, r, o) {
        var s, n, l = {}, d = {}, c = {};
        for (var p in r = void 0 === r ? "transform" : r, "loop" === o ? (c.autoRotate = !1, c.yoyo_filter = !1, c.yoyo_rotate = !1, c.yoyo_move = !1, c.yoyo_scale = !1, c.curved = !1, c.curviness = 2, c.ease = "Linear.easeNone", c.speed = 1e3, c.st = 0, l.x = 0, l.y = 0, l.z = 0, l.xr = 0, l.yr = 0, l.zr = 0, l.scaleX = 1, l.scaleY = 1, l.originX = "50%", l.originY = "50%", l.originZ = "0", l.rotationX = "0deg", l.rotationY = "0deg", l.rotationZ = "0deg") : (c.speed = 300, a ? c.ease = "default" : l.ease = "default"), "sfx" === o && (l.fxc = "#ffffff"), e = e.split(";")) if (e.hasOwnProperty(p)) {
            var u = e[p].split(":");
            switch (u[0]) {
                case"u":
                    l.use = "true" === u[1] || "t" === u[1] || fasle;
                    break;
                case"c":
                    s = u[1];
                    break;
                case"fxc":
                    l.fxc = u[1];
                    break;
                case"bgc":
                    n = u[1];
                    break;
                case"auto":
                    l.auto = "t" === u[1] || void 0 === u[1] || "true" === u[1];
                    break;
                case"o":
                    l.opacity = u[1];
                    break;
                case"oX":
                    l.originX = u[1];
                    break;
                case"oY":
                    l.originY = u[1];
                    break;
                case"oZ":
                    l.originZ = u[1];
                    break;
                case"sX":
                    l.scaleX = u[1];
                    break;
                case"sY":
                    l.scaleY = u[1];
                    break;
                case"skX":
                    l.skewX = u[1];
                    break;
                case"skY":
                    l.skewY = u[1];
                    break;
                case"rX":
                    l.rotationX = u[1];
                    break;
                case"rY":
                    l.rotationY = u[1];
                    break;
                case"rZ":
                    l.rotationZ = u[1];
                    break;
                case"sc":
                    l.color = u[1];
                    break;
                case"se":
                    l.effect = u[1];
                    break;
                case"bos":
                    l.borderStyle = u[1];
                    break;
                case"boc":
                    l.borderColor = u[1];
                    break;
                case"td":
                    l.textDecoration = u[1];
                    break;
                case"zI":
                    l.zIndex = u[1];
                    break;
                case"tp":
                    l.transformPerspective = u[1];
                    break;
                case"cp":
                    l.clip = parseInt(u[1], 0);
                    break;
                case"cpb":
                    l.clipB = parseInt(u[1], 0);
                    break;
                case"fpr":
                    l.fpr = "t" === u[1] || "true" === u[1] || !0 === u[1];
                    break;
                case"aR":
                    c.autoRotate = "t" == u[1];
                    break;
                case"rA":
                    c.radiusAngle = u[1];
                    break;
                case"yyf":
                    c.yoyo_filter = "t" == u[1];
                    break;
                case"yym":
                    c.yoyo_move = "t" == u[1];
                    break;
                case"yyr":
                    c.yoyo_rotate = "t" == u[1];
                    break;
                case"yys":
                    c.yoyo_scale = "t" == u[1];
                    break;
                case"crd":
                    c.curved = "t" == u[1];
                    break;
                case"x":
                    l.x = "reverse" === o ? "t" === u[1] || !0 === u[1] || "true" == u[1] : "loop" === o ? parseInt(u[1], 0) : i.revToResp(u[1], i[t].rle);
                    break;
                case"y":
                    l.y = "reverse" === o ? "t" === u[1] || !0 === u[1] || "true" == u[1] : "loop" === o ? parseInt(u[1], 0) : i.revToResp(u[1], i[t].rle);
                    break;
                case"z":
                    l.z = "loop" === o ? parseInt(u[1], 0) : i.revToResp(u[1], i[t].rle);
                    break;
                case"bow":
                    l.borderWidth = i.revToResp(u[1], 4, 0).toString().replace(/,/g, " ");
                    break;
                case"bor":
                    l.borderRadius = i.revToResp(u[1], 4, 0).toString().replace(/,/g, " ");
                    break;
                case"m":
                    l.mask = "t" === u[1] || "f" !== u[1] && u[1];
                    break;
                case"xR":
                    l.xr = parseInt(u[1], 0);
                    break;
                case"yR":
                    l.yr = parseInt(u[1], 0);
                    break;
                case"zR":
                    l.zr = parseInt(u[1], 0);
                    break;
                case"blu":
                    "loop" === o ? l.blur = parseInt(u[1], 0) : d.blur = parseInt(u[1], 0);
                    break;
                case"gra":
                    "loop" === o ? l.grayscale = parseInt(u[1], 0) : d.grayscale = parseInt(u[1], 0);
                    break;
                case"bri":
                    "loop" === o ? l.brightness = parseInt(u[1], 0) : d.brightness = parseInt(u[1], 0);
                    break;
                case"sp":
                    c.speed = parseInt(u[1], 0);
                    break;
                case"d":
                    l.delay = parseInt(u[1], 0);
                    break;
                case"crns":
                    c.curviness = parseInt(u[1], 0);
                    break;
                case"st":
                    c.start = "w" === u[1] || "a" === u[1] ? "+=0" : u[1], c.waitoncall = "w" === u[1] || "a" === u[1];
                    break;
                case"sA":
                    c.startAbsolute = u[1];
                    break;
                case"sR":
                    c.startRelative = u[1];
                    break;
                case"e":
                    a ? c.ease = u[1] : l.ease = u[1];
                    break;
                default:
                    u[0].length > 0 && (l[u[0]] = "t" === u[1] || "f" !== u[1] && u[1])
            }
        }
        var h = {timeline: c};
        return jQuery.isEmptyObject(d) || ("split" === o ? l = jQuery.extend(!0, l, d) : h.filter = d), "split" === o && void 0 === l.dir && (l.dir = "forward"), jQuery.isEmptyObject(s) || (h.color = s), jQuery.isEmptyObject(n) || (h.bgcolor = n), h[r] = l, h
    }, w = function (e, t) {
        var a = {}, r = 0;
        if (void 0 === window.rdF0) {
            var o = b("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;dir:forward;d:5", t).transform;
            window.rdF0 = window.rdF1 = {
                transform: b("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;tp:600px", t, !0).transform,
                mask: b("x:0;y:0", t, !0).transform,
                chars: jQuery.extend(!0, {blur: 0, grayscale: 0, brightness: 100}, o),
                words: jQuery.extend(!0, {blur: 0, grayscale: 0, brightness: 100}, o),
                lines: jQuery.extend(!0, {blur: 0, grayscale: 0, brightness: 100}, o)
            }, window.rdF1.transform.opacity = window.rdF1.chars.opacity = window.rdF1.words.opacity = window.rdF1.lines.opacity = window.rdF1.transform.scaleX = window.rdF1.chars.scaleX = window.rdF1.words.scaleX = window.rdF1.lines.scaleX = window.rdF1.transform.scaleY = window.rdF1.chars.scaleY = window.rdF1.words.scaleY = window.rdF1.lines.scaleY = 1
        }
        for (var r in void 0 === e.frame_0 && (e.frame_0 = "x:0"), void 0 === e.frame_1 && (e.frame_1 = "x:0"), e.ford) if (e.ford.hasOwnProperty(r)) {
            var s = e.ford[r];
            if (e[s]) {
                if (a[s] = b(e[s], t, !0), void 0 !== a[s].bgcolor && (e.bgcolinuse = !0), i[t].BUG_ie_clipPath && void 0 !== e.clipPath && e.clipPath.use && void 0 !== a[s].transform.clip) {
                    var n = "rectangle" === e.clipPath.type ? 100 - parseInt(a[s].transform.clip) : 100 - Math.min(100, 2 * parseInt(a[s].transform.clip));
                    switch (e.clipPath.origin) {
                        case"clr":
                        case"rb":
                        case"rt":
                        case"r":
                            e[s + "_mask"] = "u:t;x:" + n + "%;y:0px;", a[s].transform.x = i.revToResp("-" + n + "%", i[t].rle);
                            break;
                        case"crl":
                        case"lb":
                        case"lt":
                        case"cv":
                        case"l":
                            e[s + "_mask"] = "u:t;x:-" + n + "%;y:0px;", a[s].transform.x = i.revToResp(n + "%", i[t].rle);
                            break;
                        case"ch":
                        case"t":
                            e[s + "_mask"] = "u:t;y:-" + n + "%;y:0px;", a[s].transform.y = i.revToResp(n + "%", i[t].rle);
                            break;
                        case"b":
                            e[s + "_mask"] = "u:t;y:" + n + "%;y:0px;", a[s].transform.y = i.revToResp("-" + n + "%", i[t].rle)
                    }
                    delete a[s].transform.clip, delete a[s].transform.clipB, e.maskinuse = !0
                }
                e[s + "_mask"] && (a[s].mask = b(e[s + "_mask"], t).transform), null != a[s].mask && a[s].mask.use ? (a[s].mask.x = void 0 === a[s].mask.x ? 0 : a[s].mask.x, a[s].mask.y = void 0 === a[s].mask.y ? 0 : a[s].mask.y, delete a[s].mask.use, a[s].mask.overflow = "hidden") : a[s].mask = {
                    ease: "default",
                    overflow: "visible"
                }, e[s + "_chars"] && (a[s].chars = b(e[s + "_chars"], t, void 0, void 0, "split").transform), e[s + "_words"] && (a[s].words = b(e[s + "_words"], t, void 0, void 0, "split").transform), e[s + "_lines"] && (a[s].lines = b(e[s + "_lines"], t, void 0, void 0, "split").transform), (e[s + "_chars"] || e[s + "_words"] || e[s + "_lines"]) && (a[s].split = !0), a.frame_0 = void 0 === a.frame_0 ? {transform: {}} : a.frame_0, a[s].transform.auto && (a[s].transform = jQuery.extend(!0, {}, a.frame_0.transform), a[s].transform.opacity = void 0 === a[s].transform.opacity ? 0 : a[s].transform.opacity, void 0 !== a.frame_0.filter && (a[s].filter = jQuery.extend(!0, {}, a.frame_0.filter)), void 0 !== a.frame_0.mask && (a[s].mask = jQuery.extend(!0, {}, a.frame_0.mask)), void 0 !== a.frame_0.chars && (a[s].chars = jQuery.extend(!0, {}, a.frame_0.chars)), void 0 !== a.frame_0.words && (a[s].words = jQuery.extend(!0, {}, a.frame_0.words)), void 0 !== a.frame_0.lines && (a[s].lines = jQuery.extend(!0, {}, a.frame_0.lines))), e[s + "_sfx"] && (a[s].sfx = b(e[s + "_sfx"], t, !1, void 0, "sfx").transform), e[s + "_reverse"] && (a[s].reverse = b(e[s + "_reverse"], t, !1, void 0, "reverse").transform)
            }
        }
        if (a.frame_0.split && (a.frame_1.split = !0), void 0 !== a.frame_0.transform.fpr && (e.forceRender = a.frame_0.transform.fpr, delete a.frame_0.transform.fpr), void 0 === e.frame_hover && void 0 === e.svgh || (a.frame_hover = b(void 0 === e.frame_hover ? "" : e.frame_hover, t), a.frame_hover.transform.color = a.frame_hover.color, void 0 === a.frame_hover.transform.color && delete a.frame_hover.transform.color, void 0 !== a.frame_hover.bgcolor && a.frame_hover.bgcolor.indexOf("gradient") >= 0 ? a.frame_hover.transform.backgroundImage = a.frame_hover.bgcolor : void 0 !== a.frame_hover.bgcolor && (a.frame_hover.transform.backgroundColor = a.frame_hover.bgcolor), void 0 !== a.frame_hover.bgcolor && (e.bgcolinuse = !0), a.frame_hover.transform.opacity = void 0 === a.frame_hover.transform.opacity ? 1 : a.frame_hover.transform.opacity, a.frame_hover.mask = void 0 !== a.frame_hover.transform.mask && a.frame_hover.transform.mask, delete a.frame_hover.transform.mask, void 0 !== a.frame_hover.transform && ((a.frame_hover.transform.borderWidth || a.frame_hover.transform.borderStyle) && (a.frame_hover.transform.borderColor = void 0 === a.frame_hover.transform.borderColor ? "transparent" : a.frame_hover.transform.borderColor), "none" !== a.frame_hover.transform.borderStyle && void 0 === a.frame_hover.transform.borderWidth && (a.frame_hover.transform.borderWidth = i.revToResp(0, 4, 0).toString().replace(/,/g, " ")), void 0 === e.bordercolor && void 0 !== a.frame_hover.transform.borderColor && (e.bordercolor = "transparent"), void 0 === e.borderwidth && void 0 !== a.frame_hover.transform.borderWidth && (e.borderwidth = i.revToResp(a.frame_hover.transform.borderWidth, 4, 0)), void 0 === e.borderstyle && void 0 !== a.frame_hover.transform.borderStyle && (e.borderstyle = i.revToResp(a.frame_hover.transform.borderStyle, 4, 0)))), void 0 !== e.tloop) {
            e.layerLoop = {from: "frame_1", to: "frame_999", repeat: -1, keep: !0, children: !0};
            var l = e.tloop.split(";");
            for (var r in l) if (l.hasOwnProperty(r)) {
                var d = l[r].split(":");
                switch (d[0]) {
                    case"f":
                        e.layerLoop.from = d[1];
                        break;
                    case"t":
                        e.layerLoop.to = d[1];
                        break;
                    case"k":
                        e.layerLoop.keep = d[1];
                        break;
                    case"r":
                        e.layerLoop.repeat = parseInt(d[1], 0);
                        break;
                    case"c":
                        e.layerLoop.children = d[1]
                }
            }
            e.layerLoop.count = 0
        }
        for (var r in (e.loop_0 || e.loop_999) && (a.loop = b(e.loop_999, t, !0, "frame_999", "loop"), a.loop.frame_0 = b(e.loop_0 || "", t, !1, void 0, "loop").transform), a.frame_0.transform.opacity = void 0 === a.frame_0.transform.opacity ? 0 : a.frame_0.transform.opacity, a.frame_1.transform.opacity = void 0 === a.frame_1.transform.opacity ? 1 : a.frame_1.transform.opacity, a.frame_999.transform.opacity = void 0 === a.frame_999.transform.opacity ? "inherit" : a.frame_999.transform.opacity, a.frame_0.transform.transformPerspective = void 0 === a.frame_0.transform.transformPerspective ? "600px" : a.frame_0.transform.transformPerspective, e.clipPath && e.clipPath.use && (a.frame_0.transform.clip = void 0 === a.frame_0.transform.clip ? 100 : parseInt(a.frame_0.transform.clip), a.frame_1.transform.clip = void 0 === a.frame_1.transform.clip ? 100 : parseInt(a.frame_1.transform.clip)), e.resetfilter = !1, a) void 0 !== a[r].filter && (e.resetfilter = !0);
        return e.resetfilter && (a.frame_0.filter = jQuery.extend(!0, {}, a.frame_0.filter), a.frame_0.filter.blur = void 0 === a.frame_0.filter.blur ? 0 : a.frame_0.filter.blur, a.frame_0.filter.brightness = void 0 === a.frame_0.filter.brightness ? 100 : a.frame_0.filter.brightness, a.frame_0.filter.grayscale = void 0 === a.frame_0.filter.grayscale ? 0 : a.frame_0.filter.grayscale), void 0 !== a.frame_0.filter && (a.frame_1.filter = jQuery.extend(!0, {}, a.frame_1.filter), void 0 !== a.frame_0.filter.blur && 0 !== a.frame_1.filter.blur && (a.frame_1.filter.blur = void 0 === a.frame_1.filter.blur ? 0 : a.frame_1.filter.blur), void 0 !== a.frame_0.filter.brightness && 100 !== a.frame_1.filter.brightness && (a.frame_1.filter.brightness = void 0 === a.frame_1.filter.brightness ? 100 : a.frame_1.filter.brightness), void 0 !== a.frame_0.filter.grayscale && 0 !== a.frame_1.filter.grayscale && (a.frame_1.filter.grayscale = void 0 === a.frame_1.filter.grayscale ? 0 : a.frame_1.filter.grayscale)), _(a)
    }, _ = function (e) {
        var t, i = {}, a = ["transform", "words", "chars", "lines", "mask"];
        for (var r in e) "loop" !== r && "frame_hover" !== r && (i = jQuery.extend(!0, i, e[r]));
        for (var r in e) if (e.hasOwnProperty(r) && "loop" !== r && "frame_hover" !== r) {
            for (t in i.transform) i.transform.hasOwnProperty(t) && (i.transform[t] = void 0 === e[r].transform[t] ? "frame_0" === r ? window.rdF0.transform[t] : "frame_1" === r ? window.rdF1.transform[t] : i.transform[t] : e[r].transform[t], e[r].transform[t] = void 0 === e[r].transform[t] ? i.transform[t] : e[r].transform[t]);
            for (var o = 1; o <= 4; o++) for (t in i[a[o]]) i[a[o]].hasOwnProperty(t) && (e[r][a[o]] = void 0 === e[r][a[o]] ? {} : e[r][a[o]], i[a[o]][t] = void 0 === e[r][a[o]][t] ? "frame_0" === r ? window.rdF0[a[o]][t] : "frame_1" === r ? window.rdF1[a[o]][t] : i[a[o]][t] : e[r][a[o]][t], e[r][a[o]][t] = void 0 === e[r][a[o]][t] ? i[a[o]][t] : e[r][a[o]][t])
        }
        return e
    }, x = function (e, t) {
        if (0 === e.length) return {};
        for (var i = e[0].getElementsByClassName(t), a = {}, r = 0; r < i.length; r++) a[i[r].id] = i[r];
        return a
    }, k = function (e, t, a) {
        if ("BR" == e[0].nodeName || "br" == e[0].tagName || "object" != typeof e[0].className && e[0].className.indexOf("rs_splitted_") >= 0) return !1;
        i.sA(e[0], "stylerecorder", !0);
        var r = window.getComputedStyle(e[0], null),
            o = void 0 !== e[0].id && void 0 !== i[a]._L[e[0].id] ? i[a]._L[e[0].id] : e.data(),
            s = "rekursive" === t ? e.closest(".rs-layer") : void 0,
            n = void 0 !== s && r.fontSize === s.css("fontSize") && r.fontWeight === s.css("fontWeight") && r.lineHeight === s.css("lineHeight"),
            l = n ? void 0 !== s[0].id && void 0 !== i[a]._L[s[0].id] ? i[a]._L[s[0].id] : s.data() : void 0, d = 0;
        o.basealign = void 0 === o.basealign ? "grid" : o.basealign, o._isnotext || (o.fontSize = i.revToResp(n ? void 0 === l.fontsize ? parseInt(s.css("fontSize"), 0) || 20 : l.fontsize : void 0 === o.fontsize ? "rekursive" !== t ? 20 : "inherit" : o.fontsize, i[a].rle), o.fontWeight = i.revToResp(n ? void 0 === l.fontweight ? s.css("fontWeight") || "inherit" : l.fontweight : void 0 === o.fontweight ? e.css("fontWeight") || "inherit" : o.fontweight, i[a].rle), o.whiteSpace = i.revToResp(n ? void 0 === l.whitespace ? "nowrap" : l.whitespace : void 0 === o.whitespace ? "nowrap" : o.whitespace, i[a].rle), o.textAlign = i.revToResp(n ? void 0 === l.textalign ? "left" : l.textalign : void 0 === o.textalign ? "left" : o.textalign, i[a].rle), o.letterSpacing = i.revToResp(n ? void 0 === l.letterspacing ? parseInt(s.css("letterSpacing"), 0) || "inherit" : l.letterspacing : void 0 === o.letterspacing ? parseInt(e.css("letterSpacing"), 0) || "inherit" : o.letterspacing, i[a].rle), o.textDecoration = n ? void 0 === l.textDecoration ? "none" : l.textDecoration : void 0 === o.textDecoration ? "none" : o.textDecoration, d = 25, d = void 0 !== s && "I" === e[0].tagName ? "inherit" : d, void 0 !== o.tshadow && (o.tshadow.b = i.revToResp(o.tshadow.b, i[a].rle), o.tshadow.h = i.revToResp(o.tshadow.h, i[a].rle), o.tshadow.v = i.revToResp(o.tshadow.v, i[a].rle))), void 0 !== o.bshadow && (o.bshadow.b = i.revToResp(o.bshadow.b, i[a].rle), o.bshadow.h = i.revToResp(o.bshadow.h, i[a].rle), o.bshadow.v = i.revToResp(o.bshadow.v, i[a].rle), o.bshadow.s = i.revToResp(o.bshadow.s, i[a].rle)), o.display = n ? void 0 === l.display ? s.css("display") : l.display : void 0 === o.display ? e.css("display") : o.display, o.float = i.revToResp(n ? void 0 === l.float ? s.css("float") || "none" : l.float : void 0 === o.float ? "none" : o.float, i[a].rle), o.clear = i.revToResp(n ? void 0 === l.clear ? s.css("clear") || "none" : l.clear : void 0 === o.clear ? "none" : o.clear, i[a].rle), o.lineHeight = i.revToResp(e.is("img") || -1 != jQuery.inArray(o.layertype, ["video", "image", "audio"]) ? d : n ? void 0 === l.lineheight ? parseInt(s.css("lineHeight"), 0) || d : l.lineheight : void 0 === o.lineheight ? d : o.lineheight, i[a].rle), o.zIndex = n ? void 0 === l.zindex ? parseInt(s.css("zIndex"), 0) || "inherit" : l.zindex : void 0 === o.zindex ? parseInt(e.css("zIndex"), 0) || "inherit" : o.zindex, o.paddingTop = i.revToResp(void 0 === o.paddingtop ? parseInt(r.paddingTop, 0) || 0 : o.paddingtop, i[a].rle), o.paddingBottom = i.revToResp(void 0 === o.paddingbottom ? parseInt(r.paddingBottom, 0) || 0 : o.paddingbottom, i[a].rle), o.paddingLeft = i.revToResp(void 0 === o.paddingleft ? parseInt(r.paddingLeft, 0) || 0 : o.paddingleft, i[a].rle), o.paddingRight = i.revToResp(void 0 === o.paddingright ? parseInt(r.paddingRight, 0) || 0 : o.paddingright, i[a].rle), o.marginTop = i.revToResp(void 0 === o.margintop ? parseInt(r.marginTop, 0) || 0 : o.margintop, i[a].rle), o.marginBottom = i.revToResp(void 0 === o.marginbottom ? parseInt(r.marginBottom, 0) || 0 : o.marginbottom, i[a].rle), o.marginLeft = i.revToResp(void 0 === o.marginleft ? parseInt(r.marginLeft, 0) || 0 : o.marginleft, i[a].rle), o.marginRight = i.revToResp(void 0 === o.marginright ? parseInt(r.marginRight, 0) || 0 : o.marginright, i[a].rle), o.borderTopWidth = void 0 === o.borderwidth ? parseInt(r.borderTopWidth, 0) || 0 : o.borderwidth[0], o.borderBottomWidth = void 0 === o.borderwidth ? parseInt(r.borderBottomWidth, 0) || 0 : o.borderwidth[2], o.borderLeftWidth = void 0 === o.borderwidth ? parseInt(r.borderLeftWidth, 0) || 0 : o.borderwidth[3], o.borderRightWidth = void 0 === o.borderwidth ? parseInt(r.borderRightWidth, 0) || 0 : o.borderwidth[1], o.borderTopLeftRadius = i.revToResp(void 0 === o.borderradius ? r.borderTopLeftRadius || 0 : o.borderradius[0], i[a].rle), o.borderTopRightRadius = i.revToResp(void 0 === o.borderradius ? r.borderTopRightRadius || 0 : o.borderradius[1], i[a].rle), o.borderBottomLeftRadius = i.revToResp(void 0 === o.borderradius ? r.borderBottomLeftRadius || 0 : o.borderradius[3], i[a].rle), o.borderBottomRightRadius = i.revToResp(void 0 === o.borderradius ? r.borderBottomRightRadius || 0 : o.borderradius[2], i[a].rle), o.borderStyle = i.revToResp(void 0 === o.borderstyle ? r.borderStyle || 0 : o.borderstyle, i[a].rle), o.borderBottomColor = void 0 === o.bordercolor ? r["border-bottom-color"] : o.bordercolor, o.borderTopColor = void 0 === o.bordercolor ? r["border-top-color"] : o.bordercolor, o.borderLeftColor = void 0 === o.bordercolor ? r["border-left-color"] : o.bordercolor, o.borderRightColor = void 0 === o.bordercolor ? r["border-right-color"] : o.bordercolor, "rekursive" !== t ? (o.color = i.revToResp(void 0 === o.color ? "#ffffff" : o.color, i[a].rle, void 0, "||"), o.minWidth = i.revToResp(void 0 === o.minwidth ? parseInt(r.minWidth, 0) || 0 : o.minwidth, i[a].rle), o.minHeight = i.revToResp(void 0 === o.minheight ? parseInt(r.minHeight, 0) || 0 : o.minheight, i[a].rle), o.width = i.revToResp(void 0 === o.width ? "auto" : i.smartConvertDivs(o.width), i[a].rle), o.height = i.revToResp(void 0 === o.height ? "auto" : i.smartConvertDivs(o.height), i[a].rle), o.maxWidth = i.revToResp(void 0 === o.maxwidth ? parseInt(r.maxWidth, 0) || "none" : o.maxwidth, i[a].rle), o.maxHeight = i.revToResp(-1 !== jQuery.inArray(o.type, ["column", "row"]) ? "none" : void 0 !== o.maxheight ? parseInt(r.maxHeight, 0) || "none" : o.maxheight, i[a].rle)) : "html" === o.layertype && (o.width = i.revToResp(e[0].width, i[a].rle), o.height = i.revToResp(e[0].height, i[a].rle)), o.styleProps = {
            background: e[0].style.background,
            "background-color": e[0].style["background-color"],
            color: e[0].style.color,
            cursor: e[0].style.cursor,
            "font-style": e[0].style["font-style"]
        }, null == o.bshadow && (o.styleProps.boxShadow = e[0].style.boxShadow), "" !== o.styleProps.background && void 0 !== o.styleProps.background && o.styleProps.background !== o.styleProps["background-color"] || delete o.styleProps.background, "" == o.styleProps.color && (o.styleProps.color = r.color)
    }, T = function (e, t) {
        if (void 0 !== e) {
            if ("BR" == e[0].nodeName || "br" == e[0].tagName) return !1;
            var a = i[t].level,
                r = void 0 !== e[0] && void 0 !== e[0].id && void 0 !== i[t]._L[e[0].id] ? i[t]._L[e[0].id] : e.data();
            if (void 0 === (r = void 0 === r.basealign ? e.closest("rs-layer").data() : r)._isnotext) {
                var o = e.closest("rs-layer")[0];
                r._isnotext = void 0 !== o && o.length > 0 ? i.gA(o, "_isnotext") : r._isnotext
            }
            var s = {
                basealign: void 0 === r.basealign ? "grid" : r.basealign,
                lineHeight: void 0 === r.basealign ? "inherit" : parseInt(r.lineHeight[a]),
                color: void 0 === r.color ? void 0 : r.color[a],
                width: void 0 === r.width ? void 0 : "a" === r.width[a] ? "auto" : r.width[a],
                height: void 0 === r.height ? void 0 : "a" === r.height[a] ? "auto" : r.height[a],
                minWidth: void 0 === r.minWidth ? void 0 : "n" === r.minWidth[a] ? "none" : r.minWidth[a],
                minHeight: void 0 === r.minHeight ? void 0 : "n" == r.minHeight[a] ? "none" : r.minHeight[a],
                maxWidth: void 0 === r.maxWidth ? void 0 : "n" == r.maxWidth[a] ? "none" : r.maxWidth[a],
                maxHeight: void 0 === r.maxHeight ? void 0 : "n" == r.maxHeight[a] ? "none" : r.maxHeight[a],
                paddingTop: r.paddingTop[a],
                paddingBottom: parseInt(r.paddingBottom[a]),
                paddingLeft: parseInt(r.paddingLeft[a]),
                paddingRight: parseInt(r.paddingRight[a]),
                marginTop: parseInt(r.marginTop[a]),
                marginBottom: parseInt(r.marginBottom[a]),
                marginLeft: parseInt(r.marginLeft[a]),
                marginRight: parseInt(r.marginRight[a]),
                borderTopWidth: parseInt(r.borderTopWidth),
                borderBottomWidth: parseInt(r.borderBottomWidth),
                borderLeftWidth: parseInt(r.borderLeftWidth),
                borderRightWidth: parseInt(r.borderRightWidth),
                borderTopLeftRadius: r.borderTopLeftRadius[a],
                borderTopRightRadius: r.borderTopRightRadius[a],
                borderBottomLeftRadius: r.borderBottomLeftRadius[a],
                borderBottomRightRadius: r.borderBottomRightRadius[a],
                borderStyle: r.borderStyle[a],
                float: r.float[a],
                clear: r.clear[a]
            };
            return s.borderTopColor = r.borderTopColor, s.borderBottomColor = r.borderBottomColor, s.borderLeftColor = r.borderLeftColor, s.borderRightColor = r.borderRightColor, r._isnotext || (s.textDecoration = r.textDecoration, s.fontSize = parseInt(r.fontSize[a]), s.fontWeight = parseInt(r.fontWeight[a]), s.letterSpacing = parseInt(r.letterSpacing[a]) || 0, s.textAlign = r.textAlign[a], s.whiteSpace = r.whiteSpace[a], s.whiteSpace = "normal" === s.whiteSpace && "auto" === s.width && !0 !== r._incolumn ? "nowrap" : s.whiteSpace, s.display = r.display, void 0 !== r.tshadow && (s.textShadow = parseInt(r.tshadow.h[a], 0) + "px " + parseInt(r.tshadow.v[a], 0) + "px " + r.tshadow.b[a] + " " + r.tshadow.c), void 0 !== r.tstroke && (s.textStroke = parseInt(r.tstroke.w, 0) + "px " + r.tstroke.c)), void 0 !== r.bshadow && (s.boxShadow = parseInt(r.bshadow.h[a], 0) + "px " + parseInt(r.bshadow.v[a], 0) + "px " + parseInt(r.bshadow.b[a], 0) + "px " + parseInt(r.bshadow.s[a], 0) + "px " + r.bshadow.c), s
        }
    }, L = function (e, t, i, a, r) {
        var o = jQuery.isNumeric(e) || void 0 === e ? "" : e.indexOf("px") >= 0 ? "px" : e.indexOf("%") >= 0 ? "%" : "";
        return e = jQuery.isNumeric(parseInt(e)) ? parseInt(e) : e, e = null == (e = "full" === (e = jQuery.isNumeric(e) ? e * t + o : e) ? a : "auto" === e || "none" === e ? i : e) ? r : e
    }, R = function (e, t, a, r) {
        var o = i[t]._L[e[0].id];
        o = void 0 === o ? {} : o;
        var s = e[0].className;
        if ("object" == typeof s && (s = ""), void 0 !== e && void 0 !== e[0] && (s.indexOf("rs_splitted") >= 0 || "BR" == e[0].nodeName || "br" == e[0].tagName || e[0].tagName.indexOf("FCR") > 0 || e[0].tagName.indexOf("BCR") > 0)) return !1;
        var n, l, d, c, p = T(e, t), u = "off" === r ? 1 : i[t].bw, h = "off" === r ? 1 : i[t].bh,
            g = "column" !== o.type ? {t: p.marginTop, b: p.marginBottom, l: p.marginLeft, r: p.marginRight} : {
                t: 0,
                b: 0,
                l: 0,
                r: 0
            };
        if (void 0 === o._isnotext) {
            var f = e.closest("rs-layer")[0];
            o._isnotext = void 0 !== f && f.length > 0 ? i.gA(f, "_isnotext") : o._isnotext
        }
        if ("column" === o.type && punchgs.TweenMax.set(o._column, {
            paddingTop: Math.round(p.marginTop * h) + "px",
            paddingBottom: Math.round(p.marginBottom * h) + "px",
            paddingLeft: Math.round(p.marginLeft * u) + "px",
            paddingRight: Math.round(p.marginRight * u) + "px"
        }), -1 === s.indexOf("rs_splitted_")) {
            var m = {
                paddingTop: Math.round(p.paddingTop * h) + "px",
                paddingBottom: Math.round(p.paddingBottom * h) + "px",
                paddingLeft: Math.round(p.paddingLeft * u) + "px",
                paddingRight: Math.round(p.paddingRight * u) + "px",
                borderTopLeftRadius: p.borderTopLeftRadius,
                borderTopRightRadius: p.borderTopRightRadius,
                borderBottomLeftRadius: p.borderBottomLeftRadius,
                borderBottomRightRadius: p.borderBottomRightRadius,
                overwrite: "auto"
            };
            if (o._incolumn || (m.marginTop = "row" === o.type ? 0 : g.t * h + "px", m.marginBottom = "row" === o.type ? 0 : g.b * h + "px", m.marginLeft = "row" === o.type ? 0 : g.l * u + "px", m.marginRight = "row" === o.type ? 0 : g.r * u + "px"), void 0 !== o.spike && (m["clip-path"] = m["-webkit-clip-path"] = o.spike), p.boxShadow && (m.boxShadow = p.boxShadow), "column" !== o.type && (void 0 !== p.borderStyle && "none" !== p.borderStyle && (0 !== p.borderTopWidth || p.borderBottomWidth > 0 || p.borderLeftWidth > 0 || p.borderRightWidth > 0) ? (m.borderTopWidth = Math.round(p.borderTopWidth * h) + "px", m.borderBottomWidth = Math.round(p.borderBottomWidth * h) + "px", m.borderLeftWidth = Math.round(p.borderLeftWidth * u) + "px", m.borderRightWidth = Math.round(p.borderRightWidth * u) + "px", m.borderStyle = p.borderStyle, m.borderTopColor = p.borderTopColor, m.borderBottomColor = p.borderBottomColor, m.borderLeftColor = p.borderLeftColor, m.borderRightColor = p.borderRightColor) : ("none" === p.borderStyle && (m.borderStyle = "none"), m.borderTopColor = p.borderTopColor, m.borderBottomColor = p.borderBottomColor, m.borderLeftColor = p.borderLeftColor, m.borderRightColor = p.borderRightColor)), "shape" !== o.type && "image" !== o.type || 0 === p.borderTopLeftRadius && 0 === p.borderTopRightRadius && 0 === p.borderBottomLeftRadius && 0 === p.borderBottomRightRadius || (m.overflow = "hidden"), o._isnotext || ("column" !== o.type && (m.fontSize = Math.round(p.fontSize * u) + "px", m.fontWeight = p.fontWeight, m.letterSpacing = p.letterSpacing * u + "px", p.textShadow && (m.textShadow = p.textShadow), p.textStroke && (m["-webkit-text-stroke"] = p.textStroke)), m.lineHeight = Math.round(p.lineHeight * h) + "px", m.textAlign = p.textAlign), "column" === o.type && (void 0 === o.cbg_set && (o.cbg_set = o.styleProps["background-color"], o.cbg_set = "" == o.cbg_set || void 0 === o.cbg_set || 0 == o.cbg_set.length ? "transparent" : o.cbg_set, o.cbg_img = e.css("backgroundImage"), o.cbg_img_r = e.css("backgroundRepeat"), o.cbg_img_p = e.css("backgroundPosition"), o.cbg_img_s = e.css("backgroundSize"), o.cbg_o = o.bgopacity ? 1 : o.bgopacity, punchgs.TweenMax.set(e, {
                backgroundColor: "transparent",
                backgroundImage: ""
            })), m.backgroundColor = "transparent", m.backgroundImage = "none"), o._isstatic && o.elementHovered && (n = e.data("frames")) && n.frame_hover && n.frame_hover.transform) for (l in m) m.hasOwnProperty(l) && n.frame_hover.transform.hasOwnProperty(l) && delete m[l];
            if ("IFRAME" == e[0].nodeName && "html" === i.gA(e[0], "layertype") && (d = "slide" == p.basealign ? i[t].ulw : i[t].gridwidth[i[t].level], c = "slide" == p.basealign ? i[t].ulh : i[t].gridheight[i[t].level], m.width = !jQuery.isNumeric(p.width) && p.width.indexOf("%") >= 0 ? !o._isstatic || o._incolumn || o._ingroup ? p.width : d * parseInt(p.width, 0) / 100 : L(p.width, u, "auto", d, "auto"), m.height = !jQuery.isNumeric(p.height) && p.height.indexOf("%") >= 0 ? !o._isstatic || o._incolumn || o._ingroup ? p.height : c * parseInt(p.height, 0) / 100 : L(p.height, h, "auto", d, "auto")), punchgs.TweenMax.set(e, m), "rekursive" != a) {
                d = "slide" == p.basealign ? i[t].ulw : i[t].gridwidth[i[t].level], c = "slide" == p.basealign ? i[t].ulh : i[t].gridheight[i[t].level];
                var v = !jQuery.isNumeric(p.width) && p.width.indexOf("%") >= 0 ? !o._isstatic || o._incolumn || o._ingroup ? p.width : d * parseInt(p.width, 0) / 100 : L(p.width, u, "auto", d, "auto"),
                    y = !jQuery.isNumeric(p.height) && p.height.indexOf("%") >= 0 ? !o._isstatic || o._incolumn || o._ingroup ? p.height : c * parseInt(p.height, 0) / 100 : L(p.height, h, "auto", d, "auto"),
                    b = {
                        maxWidth: L(p.maxWidth, u, "none", d, "none"),
                        maxHeight: L(p.maxHeight, h, "none", c, "none"),
                        minWidth: L(p.minWidth, u, "0px", d, 0),
                        minHeight: L(p.minHeight, h, "0px", c, 0),
                        height: y,
                        width: v,
                        overwrite: "auto"
                    };
                if (1 == o.heightSetByVideo && delete b.height, o._incolumn ? (punchgs.TweenMax.set([o.p], {
                    minWidth: v,
                    maxWidth: v,
                    marginTop: g.t * h + "px",
                    marginBottom: g.b * h + "px",
                    marginLeft: g.l * u + "px",
                    marginRight: g.r * u + "px",
                    float: p.float,
                    clear: p.clear
                }), punchgs.TweenMax.set("block" === p.display ? [o.lp] : [o.lp, o.m], {width: "100%"}), b.width = !jQuery.isNumeric(p.width) && p.width.indexOf("%") >= 0 ? "100%" : v, "image" === o.type && punchgs.TweenMax.set(o.img, {width: b.width})) : !jQuery.isNumeric(p.width) && p.width.indexOf("%") >= 0 && (punchgs.TweenMax.set([o.p], {minWidth: "slide" === o.basealign || !0 === o._ingroup ? v : i[t].gridwidth[i[t].level] * i[t].bw + "px"}), punchgs.TweenMax.set([o.lp, o.m], {width: "100%"})), !jQuery.isNumeric(p.height) && p.height.indexOf("%") >= 0 && (punchgs.TweenMax.set([o.p], {minHeight: "slide" === o.basealign || !0 === o._ingroup ? y : i[t].gridheight[i[t].level] * i[t].bw + "px"}), punchgs.TweenMax.set([o.lp, o.m], {height: "100%"})), o._isnotext || (b.whiteSpace = p.whiteSpace, b.textAlign = p.textAlign, b.textDecoration = p.textDecoration), "npc" != p.color && void 0 !== p.color && (b.color = p.color), o._ingroup && (o._groupw = b.minWidth, o._grouph = b.minHeight), "row" === o.type && (jQuery.isNumeric(b.minHeight) || b.minHeight.indexOf("px") >= 0) && "0px" !== b.minHeight && 0 !== b.minHeight && "0" !== b.minHeight && "none" !== b.minHeight ? b.height = b.minHeight : "row" === o.type && (b.height = "auto"), o._isstatic && o.elementHovered && (n = e.data("frames")) && n.frame_hover && n.frame_hover.transform) for (l in b) b.hasOwnProperty(l) && n.frame_hover.transform.hasOwnProperty(l) && delete b[l];
                "image" === o.type && (!jQuery.isNumeric(b.width) && b.width.indexOf("%") >= 0 && (b.width = "100%"), !jQuery.isNumeric(b.height) && b.height.indexOf("%") >= 0 && (b.height = "100%")), o._isgroup && (!jQuery.isNumeric(b.width) && b.width.indexOf("%") >= 0 && (b.width = "100%"), punchgs.TweenMax.set(o.p, {height: b.height})), punchgs.TweenMax.set(e, b), null != o.svg_src && void 0 !== o.svgI && ("string" == typeof o.svgI.fill && (o.svgI.fill = [o.svgI.fill]), o.svgTemp = jQuery.extend(!0, {}, o.svgI), o.svgTemp.fill = o.svgTemp.fill[i[t].level], punchgs.TweenMax.set(o.svg, o.svgTemp), punchgs.TweenMax.set(o.svgPath, {fill: o.svgI.fill[i[t].level]}))
            }
            "row" === o.type && (m = {
                paddingTop: g.t * h + "px",
                paddingBottom: g.b * h + "px",
                paddingLeft: g.l * u + "px",
                paddingRight: g.r * u + "px"
            }, punchgs.TweenMax.set(o.p, m)), "column" === o.type && o.cbg && o.cbg.length > 0 && (o.cbg[0].style.backgroundSize = o.cbg_img_s, punchgs.TweenMax.set(o.cbg, {
                cursor: o.styleProps.cursor,
                borderTopWidth: Math.round(p.borderTopWidth * h) + "px",
                borderBottomWidth: Math.round(p.borderBottomWidth * h) + "px",
                borderLeftWidth: Math.round(p.borderLeftWidth * u) + "px",
                borderRightWidth: Math.round(p.borderRightWidth * u) + "px",
                borderStyle: p.borderStyle,
                borderTopColor: p.borderTopColor,
                borderBottomColor: p.borderBottomColor,
                borderLeftColor: p.borderLeftColor,
                borderRightColor: p.borderRightColor,
                borderTopLeftRadius: p.borderTopLeftRadius,
                borderTopRightRadius: p.borderTopRightRadius,
                borderBottomLeftRadius: p.borderBottomLeftRadius,
                borderBottomRightRadius: p.borderBottomRightRadius,
                backgroundColor: o.cbg_set,
                backgroundImage: o.cbg_img,
                backgroundRepeat: o.cbg_img_r,
                backgroundPosition: o.cbg_img_p,
                opacity: o.cbg_o
            }), punchgs.TweenMax.set(o.cbgmask, {
                top: p.marginTop * h + "px",
                left: p.marginLeft * u + "px",
                right: p.marginRight * u + "px",
                bottom: p.marginBottom * h + "px"
            }))
        }
    }, I = function (e) {
        var t = {l: "none", lw: 10, r: "none", rw: 10};
        for (var i in e = e.split(";")) if (e.hasOwnProperty(i)) {
            var a = e[i].split(":");
            switch (a[0]) {
                case"l":
                    t.l = a[1];
                    break;
                case"r":
                    t.r = a[1];
                    break;
                case"lw":
                    t.lw = a[1];
                    break;
                case"rw":
                    t.rw = a[1]
            }
        }
        return "polygon(" + S(t.l, 0, parseFloat(t.lw)) + "," + S(t.r, 100, 100 - parseFloat(t.rw), !0) + ")"
    }, S = function (e, t, i, a) {
        var r;
        switch (e) {
            case"none":
                r = t + "% 100%," + t + "% 0%";
                break;
            case"top":
                r = i + "% 100%," + t + "% 0%";
                break;
            case"middle":
                r = i + "% 100%," + t + "% 50%," + i + "% 0%";
                break;
            case"bottom":
                r = t + "% 100%," + i + "% 0%";
                break;
            case"two":
                r = i + "% 100%," + t + "% 75%," + i + "% 50%," + t + "% 25%," + i + "% 0%";
                break;
            case"three":
                r = t + "% 100%," + i + "% 75%," + t + "% 50%," + i + "% 25%," + t + "% 0%";
                break;
            case"four":
                r = t + "% 100%," + i + "% 87.5%," + t + "% 75%," + i + "% 62.5%," + t + "% 50%," + i + "% 37.5%," + t + "% 25%," + i + "% 12.5%," + t + "% 0%";
                break;
            case"five":
                r = t + "% 100%," + i + "% 90%," + t + "% 80%," + i + "% 70%," + t + "% 60%," + i + "% 50%," + t + "% 40%," + i + "% 30%," + t + "% 20%," + i + "% 10%," + t + "% 0%"
        }
        if (a) {
            var o = r.split(",");
            for (var i in r = "", o) o.hasOwnProperty(i) && (r += o[o.length - 1 - i] + (i < o.length - 1 ? "," : ""))
        }
        return r
    }
}(jQuery), function (e) {
    "use strict";
    var t = jQuery.fn.revolution, i = t.is_mobile();

    function a(e, i) {
        var a = new Object({single: ".tp-" + i, c: t[e].cpar.find(".tp-" + i + "s")});
        return a.mask = a.c.find(".tp-" + i + "-mask"), a.wrap = a.c.find(".tp-" + i + "s-inner-wrapper"), a
    }

    jQuery.extend(!0, t, {
        hideUnHideNav: function (e) {
            var i = t[e].c.width(), a = t[e].navigation.arrows, r = t[e].navigation.bullets,
                o = t[e].navigation.thumbnails, s = t[e].navigation.tabs;
            p(a) && k(t[e].c.find(".tparrows"), a.hide_under, i, a.hide_over), p(r) && k(t[e].c.find(".tp-bullets"), r.hide_under, i, r.hide_over), p(o) && k(o.c, o.hide_under, i, o.hide_over), p(s) && k(s.c, s.hide_under, i, s.hide_over), x(e)
        }, resizeThumbsTabs: function (e, i) {
            if (void 0 !== t[e] && t[e].navigation.use && (t[e].navigation && t[e].navigation.bullets.enable || t[e].navigation && t[e].navigation.tabs.enable || t[e].navigation && t[e].navigation.thumbnails.enable)) {
                var a = (jQuery(window).width() - 480) / 500, r = new punchgs.TimelineLite, s = t[e].navigation.tabs,
                    n = t[e].navigation.thumbnails, l = t[e].navigation.bullets;
                if (r.pause(), a = a > 1 ? 1 : a < 0 ? 0 : a, p(s) && (i || s.width > s.min_width) && o(a, r, t[e].c, s, t[e].slideamount, "tab"), p(n) && (i || n.width > n.min_width) && o(a, r, t[e].c, n, t[e].slideamount, "thumb"), p(l) && i) {
                    var d = t[e].c.find(".tp-bullets");
                    d.find(".tp-bullet").each(function (e) {
                        var t = jQuery(this), i = e + 1,
                            a = t.outerWidth() + parseInt(void 0 === l.space ? 0 : l.space, 0),
                            r = t.outerHeight() + parseInt(void 0 === l.space ? 0 : l.space, 0);
                        "vertical" === l.direction ? (t.css({
                            top: (i - 1) * r + "px",
                            left: "0px"
                        }), d.css({
                            height: (i - 1) * r + t.outerHeight(),
                            width: t.outerWidth()
                        })) : (t.css({
                            left: (i - 1) * a + "px",
                            top: "0px"
                        }), d.css({width: (i - 1) * a + t.outerWidth(), height: t.outerHeight()}))
                    })
                }
                r.play(), x(e)
            }
            return !0
        }, updateNavIndexes: function (e) {
            var i = t[e].c;

            function a(e) {
                i.find(e).lenght > 0 && i.find(e).each(function (e) {
                    jQuery(this).data("liindex", e)
                })
            }

            a("rs-tab"), a("rs-bullet"), a("rs-thumb"), t.resizeThumbsTabs(e, !0), t.manageNavigation(e)
        }, manageNavigation: function (e, i) {
            if (t[e].navigation.use) {
                var a = t.getHorizontalOffset(t[e].cpar, "left"), o = t.getHorizontalOffset(t[e].cpar, "right");
                p(t[e].navigation.bullets) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.bullets.h_offset_old = void 0 === t[e].navigation.bullets.h_offset_old ? parseInt(t[e].navigation.bullets.h_offset, 0) : t[e].navigation.bullets.h_offset_old, t[e].navigation.bullets.h_offset = "center" === t[e].navigation.bullets.h_align ? t[e].navigation.bullets.h_offset_old + a / 2 - o / 2 : t[e].navigation.bullets.h_offset_old + a - o), b(t[e].c.find(".tp-bullets"), t[e].navigation.bullets, e)), p(t[e].navigation.thumbnails) && b(t[e].navigation.thumbnails.c, t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && b(t[e].navigation.tabs.c, t[e].navigation.tabs, e), p(t[e].navigation.arrows) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.arrows.left.h_offset_old = void 0 === t[e].navigation.arrows.left.h_offset_old ? parseInt(t[e].navigation.arrows.left.h_offset, 0) : t[e].navigation.arrows.left.h_offset_old, t[e].navigation.arrows.left.h_offset = "right" === t[e].navigation.arrows.left.h_align ? t[e].navigation.arrows.left.h_offset_old + o : t[e].navigation.arrows.left.h_offset_old + a, t[e].navigation.arrows.right.h_offset_old = void 0 === t[e].navigation.arrows.right.h_offset_old ? parseInt(t[e].navigation.arrows.right.h_offset, 0) : t[e].navigation.arrows.right.h_offset_old, t[e].navigation.arrows.right.h_offset = "right" === t[e].navigation.arrows.right.h_align ? t[e].navigation.arrows.right.h_offset_old + o : t[e].navigation.arrows.right.h_offset_old + a), b(t[e].c.find(".tp-leftarrow.tparrows"), t[e].navigation.arrows.left, e), b(t[e].c.find(".tp-rightarrow.tparrows"), t[e].navigation.arrows.right, e)), !1 !== i && (p(t[e].navigation.thumbnails) && r(t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && r(t[e].navigation.tabs, e))
            }
        }, showFirstTime: function (e) {
            h(e), t.callContWidthManager(e)
        }, createNavigation: function (e) {
            var o = t[e].navigation.arrows, l = t[e].navigation.bullets, f = t[e].navigation.thumbnails,
                v = t[e].navigation.tabs, y = p(o), b = p(l), x = p(f), k = p(v);
            s(e), n(e), y && (m(o, e), o.c = t[e].cpar.find(".tparrows")), t[e].slides.each(function (i) {
                if (-1 === this.className.indexOf("not-in-nav")) {
                    var a = jQuery(t[e].slides[t[e].slides.length - 1 - i]), r = jQuery(this);
                    b && (t[e].navigation.bullets.rtl ? w(t[e].c, l, a, e) : w(t[e].c, l, r, e)), x && (t[e].navigation.thumbnails.rtl ? _(t[e].c, f, a, "tp-thumb", e) : _(t[e].c, f, r, "tp-thumb", e)), k && (t[e].navigation.tabs.rtl ? _(t[e].c, v, a, "tp-tab", e) : _(t[e].c, v, r, "tp-tab", e))
                }
            }), b && (l.c = t[e].cpar.find(".tp-bullets")), x && jQuery.extend(!0, f, a(e, "thumb")), k && jQuery.extend(!0, v, a(e, "tab")), t[e].c.bind("revolution.slide.onafterswap revolution.nextslide.waiting", function (i) {
                if (void 0 !== t[e].pr_next_key || void 0 !== t[e].pr_active_key) {
                    var a = void 0 === t[e].pr_next_key ? void 0 === t[e].pr_cache_pr_next_key ? t[e].pr_active_key : t[e].pr_cache_pr_next_key : t[e].pr_next_key,
                        s = t.gA(t[e].slides[a], "key");
                    t[e].c.find(".tp-bullet").each(function () {
                        t.gA(this, "key") === s ? this.classList.add("selected") : this.classList.remove("selected")
                    }), t[e].cpar.find(".tp-thumb, .tp-tab").each(function () {
                        t.gA(this, "key") === s ? (this.classList.add("selected"), "RS-TAB" === this.nodeName ? r(v, e) : r(f, e)) : this.classList.remove("selected")
                    });
                    var n = 0, l = !1;
                    t[e].thumbs && jQuery.each(t[e].thumbs, function (e, t) {
                        n = !1 === l ? e : n, l = void 0 !== t && t.id === s || e === s || l
                    });
                    var d = n > 0 ? n - 1 : t[e].slideamount - 1, c = n + 1 == t[e].slideamount ? 0 : n + 1;
                    if (!0 === o.enable) {
                        var p = o.tmp;
                        if (null != t[e].thumbs[d] && jQuery.each(t[e].thumbs[d].params, function (e, t) {
                            p = p.replace(t.from, t.to)
                        }), o.left.j.html(p), p = o.tmp, c > t[e].slideamount) return;
                        void 0 !== t[e].thumbs[c] && (jQuery.each(t[e].thumbs[c].params, function (e, t) {
                            p = p.replace(t.from, t.to)
                        }), o.right.j.html(p), o.rtl ? (punchgs.TweenLite.set(o.left.j.find(".tp-arr-imgholder"), {backgroundImage: "url(" + t[e].thumbs[c].src + ")"}), void 0 !== t[e].thumbs[d] && punchgs.TweenLite.set(o.right.j.find(".tp-arr-imgholder"), {backgroundImage: "url(" + t[e].thumbs[d].src + ")"})) : (void 0 !== t[e].thumbs[d] && punchgs.TweenLite.set(o.left.j.find(".tp-arr-imgholder"), {backgroundImage: "url(" + t[e].thumbs[d].src + ")"}), punchgs.TweenLite.set(o.right.j.find(".tp-arr-imgholder"), {backgroundImage: "url(" + t[e].thumbs[c].src + ")"})))
                    }
                }
            }), c(o), c(l), c(f), c(v), t[e].cpar.on("mouseenter mousemove", function (a) {
                t[e].cpar.hasClass("tp-mouseover") || (t[e].cpar.addClass("tp-mouseover"), t[e].firstSlideAvailable && (h(e), i && (u(t[e].hideAllNavElementTimer), t[e].hideAllNavElementTimer = setTimeout(function () {
                    t[e].cpar.removeClass("tp-mouseover"), g(e)
                }, 150))))
            }), t[e].cpar.on("mouseleave ", function () {
                t[e].cpar.removeClass("tp-mouseover"), g(e)
            }), x && d(f.c, e), k && d(v.c, e), "carousel" === t[e].sliderType && d(t[e].c, e, !0), (t[e].navigation.touch.touchOnDesktop || t[e].navigation.touch.touchenabled && i) && d(t[e].c, e, "swipebased")
        }
    });
    var r = function (e, i) {
        var a = "vertical" === e.direction ? e.mask.find(e.single).first().outerHeight(!0) + e.space : e.mask.find(e.single).first().outerWidth(!0) + e.space,
            r = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
            o = e.mask.find(e.single + ".selected").data("liindex");
        o = (o = void 0 === o ? 0 : o) > 0 && 1 === t[i].sdir ? o - 1 : o;
        var s = r / a, n = "vertical" === e.direction ? e.mask.height() : e.mask.width(), l = 0 - o * a,
            d = "vertical" === e.direction ? e.wrap.height() : e.wrap.width(), c = l < 0 - (d - n) ? 0 - (d - n) : l,
            p = t.gA(e.wrap[0], "offset");
        s > 2 && (c = l - (p + a) <= 0 ? l - (p + a) < 0 - a ? p : c + a : c, c = l - a + p + r < a && l + (Math.round(s) - 2) * a < p ? l + (Math.round(s) - 2) * a : c), c = "vertical" !== e.direction && e.mask.width() >= e.wrap.width() || "vertical" === e.direction && e.mask.height() >= e.wrap.height() ? 0 : c < 0 - (d - n) ? 0 - (d - n) : c > 0 ? 0 : c, e.c.hasClass("dragged") || ("vertical" === e.direction ? e.wrap.data("tmmove", punchgs.TweenLite.to(e.wrap, .5, {
            top: c + "px",
            ease: punchgs.Power3.easeInOut
        })) : e.wrap.data("tmmove", punchgs.TweenLite.to(e.wrap, .5, {
            left: c + "px",
            ease: punchgs.Power3.easeInOut
        })), e.wrap.data("offset", c))
    }, o = function (e, t, i, a, r, o) {
        var s = i.parent().find(".tp-" + o + "s"), n = s.find(".tp-" + o + "s-inner-wrapper"),
            l = s.find(".tp-" + o + "-mask"), d = a.width * e < a.min_width ? a.min_width : Math.round(a.width * e),
            c = Math.round(d / a.width * a.height), p = "vertical" === a.direction ? d : d * r + a.space * (r - 1),
            u = "vertical" === a.direction ? c * r + a.space * (r - 1) : c,
            h = "vertical" === a.direction ? {width: d + "px"} : {height: c + "px"};
        t.add(punchgs.TweenLite.set(s, h)), t.add(punchgs.TweenLite.set(n, {
            width: p + "px",
            height: u + "px"
        })), t.add(punchgs.TweenLite.set(l, {width: p + "px", height: u + "px"}));
        var g = n.find(".tp-" + o);
        return g && jQuery.each(g, function (e, i) {
            "vertical" === a.direction ? t.add(punchgs.TweenLite.set(i, {
                top: e * (c + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                width: d + "px",
                height: c + "px"
            })) : "horizontal" === a.direction && t.add(punchgs.TweenLite.set(i, {
                left: e * (d + parseInt(void 0 === a.space ? 0 : a.space, 0)),
                width: d + "px",
                height: c + "px"
            }))
        }), t
    }, s = function (e) {
        !0 === t[e].navigation.keyboardNavigation && jQuery(document).keydown(function (i) {
            ("horizontal" == t[e].navigation.keyboard_direction && 39 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 40 == i.keyCode) && (t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 0, t.callingNewSlide(e, 1)), ("horizontal" == t[e].navigation.keyboard_direction && 37 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 38 == i.keyCode) && (t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 1, t.callingNewSlide(e, -1))
        })
    }, n = function (e) {
        if (!0 === t[e].navigation.mouseScrollNavigation || "on" === t[e].navigation.mouseScrollNavigation || "carousel" === t[e].navigation.mouseScrollNavigation) {
            t[e].isIEEleven = !!navigator.userAgent.match(/Trident.*rv\:11\./), t[e].isSafari = !!navigator.userAgent.match(/safari/i), t[e].ischrome = !!navigator.userAgent.match(/chrome/i);
            var i = t[e].ischrome ? -49 : t[e].isIEEleven || t[e].isSafari ? -9 : navigator.userAgent.match(/mozilla/i) ? -29 : -49,
                a = t[e].ischrome ? 49 : t[e].isIEEleven || t[e].isSafari ? 9 : navigator.userAgent.match(/mozilla/i) ? 29 : 49;
            t[e].c.on("mousewheel DOMMouseScroll", function (r) {
                var o, s, n, l, d,
                    c = (o = r.originalEvent, s = 0, n = 0, l = 0, d = 0, "detail" in o && (n = o.detail), "wheelDelta" in o && (n = -o.wheelDelta / 120), "wheelDeltaY" in o && (n = -o.wheelDeltaY / 120), "wheelDeltaX" in o && (s = -o.wheelDeltaX / 120), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (s = n, n = 0), l = 1 * s, d = 1 * n, "deltaY" in o && (d = o.deltaY), "deltaX" in o && (l = o.deltaX), (l || d) && o.deltaMode && (o.deltaMode, l *= 1, d *= 1), l && !s && (s = l < 1 ? -1 : 1), d && !n && (n = d < 1 ? -1 : 1), ((d = navigator.userAgent.match(/mozilla/i) ? 10 * d : d) > 300 || d < -300) && (d /= 10), {
                        spinX: s,
                        spinY: n,
                        pixelX: l,
                        pixelY: d
                    }), p = !0, u = 0 == t[e].pr_active_key || 0 == t[e].pr_processing_key,
                    h = t[e].pr_active_key == t[e].slideamount - 1 || t[e].pr_processing_key == t[e].slideamount - 1;
                if (t[e].isSafari) {
                    var g = c.pixelY < 0 ? -1 : 1;
                    if (void 0 !== t[e].doubleScrollEventTimeStamp && r.timeStamp - t[e].doubleScrollEventTimeStamp < 750 && t[e].doubleScrollEventDir === g) return void r.preventDefault(r);
                    t[e].doubleScrollEventTimeStamp = r.timeStamp, t[e].doubleScrollEventDir = g
                }
                "carousel" == t[e].navigation.mouseScrollNavigation && (u = h = !1), void 0 === t[e].pr_processing_key ? c.pixelY < i ? (u || (t[e].sc_indicator = "arrow", "reverse" !== t[e].navigation.mouseScrollReverse && (t[e].sc_indicator_dir = 1, t.callingNewSlide(e, -1)), p = !1), h || (t[e].sc_indicator = "arrow", "reverse" === t[e].navigation.mouseScrollReverse && (t[e].sc_indicator_dir = 0, t.callingNewSlide(e, 1)), p = !1)) : c.pixelY > a && (h || (t[e].sc_indicator = "arrow", "reverse" !== t[e].navigation.mouseScrollReverse && (t[e].sc_indicator_dir = 0, t.callingNewSlide(e, 1)), p = !1), u || (t[e].sc_indicator = "arrow", "reverse" === t[e].navigation.mouseScrollReverse && (t[e].sc_indicator_dir = 1, t.callingNewSlide(e, -1)), p = !1)) : p = !1;
                var f = t[e].c.offset().top - jQuery("body").scrollTop(), m = f + t[e].c.height();
                return "carousel" != t[e].navigation.mouseScrollNavigation ? ("reverse" !== t[e].navigation.mouseScrollReverse && (f > 0 && c.pixelY > 0 || m < jQuery(window).height() && c.pixelY < 0) && (p = !0), "reverse" === t[e].navigation.mouseScrollReverse && (f < 0 && c.pixelY < 0 || m > jQuery(window).height() && c.pixelY > 0) && (p = !0)) : p = !1, p ? void 0 : (r.preventDefault(r), !1)
            })
        }
    }, l = function (e, t, a) {
        return !0 === (e = i ? jQuery(a.target).closest(e).length || jQuery(a.srcElement).closest(e).length : jQuery(a.toElement).closest(e).length || jQuery(a.originalTarget).closest(e).length) || 1 === e ? 1 : 0
    }, d = function (e, a, r) {
        var o = t[a].carousel;
        jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), o.Limit = "endless";
        var s = e,
            n = "vertical" === t[a].navigation.thumbnails.direction || "vertical" === t[a].navigation.tabs.direction ? "none" : "vertical",
            d = t[a].navigation.touch.swipe_direction || "horizontal";
        n = "swipebased" == r && "vertical" == d ? "none" : r ? "vertical" : n, jQuery.fn.swipetp || (jQuery.fn.swipetp = jQuery.fn.swipe), jQuery.fn.swipetp.defaults && jQuery.fn.swipetp.defaults.excludedElements || jQuery.fn.swipetp.defaults || (jQuery.fn.swipetp.defaults = {}), jQuery.fn.swipetp.defaults.excludedElements = "label, button, input, select, textarea, .noSwipe", s.swipetp({
            allowPageScroll: n,
            triggerOnTouchLeave: !0,
            treshold: t[a].navigation.touch.swipe_treshold,
            fingers: t[a].navigation.touch.swipe_min_touches > 5 ? 1 : t[a].navigation.touch.swipe_min_touches,
            excludeElements: jQuery.fn.swipetp.defaults.excludedElements,
            swipeStatus: function (r, s, n, c, p, u, h) {
                var g = l("rs-module-wrap", 0, r), f = l(".tp-thumbs", 0, r), m = l(".tp-tabs", 0, r),
                    v = !!jQuery(this).attr("class").match(/tp-tabs|tp-thumb/gi);
                if ("carousel" === t[a].sliderType && (("move" === s || "end" === s || "cancel" == s) && t[a].dragStartedOverSlider && !t[a].dragStartedOverThumbs && !t[a].dragStartedOverTabs || "start" === s && g > 0 && 0 === f && 0 === m)) {
                    if (i && ("up" === n || "down" === n)) return;
                    switch (void 0 !== o.positionanim && o.positionanim.pause(), t[a].dragStartedOverSlider = !0, c = n && n.match(/left|up/g) ? Math.round(-1 * c) : c = Math.round(1 * c), s) {
                        case"start":
                            void 0 !== o.positionanim && (o.positionanim.kill(), o.slide_globaloffset = "off" === o.infinity ? o.slide_offset : t.simp(o.slide_offset, o.maxwidth)), o.overpull = "none", o.wrap.addClass("dragged");
                            break;
                        case"move":
                            if (Math.abs(c) >= 10 || t[a].carousel.isDragged) {
                                if (t[a].carousel.isDragged = !0, t[a].c.find(".rs-waction").addClass("tp-temporarydisabled"), o.slide_offset = "off" === o.infinity ? o.slide_globaloffset + c : t.simp(o.slide_globaloffset + c, o.maxwidth), "off" === o.infinity) {
                                    var y = "center" === o.horizontal_align ? (o.wrapwidth / 2 - o.slide_width / 2 - o.slide_offset) / o.slide_width : (0 - o.slide_offset) / o.slide_width;
                                    "none" !== o.overpull && 0 !== o.overpull || !(y < 0 || y > t[a].slideamount - 1) ? y >= 0 && y <= t[a].slideamount - 1 && (y >= 0 && c > o.overpull || y <= t[a].slideamount - 1 && c < o.overpull) && (o.overpull = 0) : o.overpull = c, o.slide_offset = y < 0 ? o.slide_offset + (o.overpull - c) / 1.1 + Math.sqrt(Math.abs((o.overpull - c) / 1.1)) : y > t[a].slideamount - 1 ? o.slide_offset + (o.overpull - c) / 1.1 - Math.sqrt(Math.abs((o.overpull - c) / 1.1)) : o.slide_offset
                                }
                                t.organiseCarousel(a, n, !0, !0)
                            }
                            break;
                        case"end":
                        case"cancel":
                            t[a].carousel.isDragged = !1, o.slide_globaloffset = o.slide_offset, o.wrap.removeClass("dragged"), t.carouselToEvalPosition(a, n), t[a].dragStartedOverSlider = !1, t[a].dragStartedOverThumbs = !1, t[a].dragStartedOverTabs = !1, setTimeout(function () {
                                t[a].c.find(".rs-waction").removeClass("tp-temporarydisabled")
                            }, 19)
                    }
                } else {
                    if (("move" !== s && "end" !== s && "cancel" != s || t[a].dragStartedOverSlider || !t[a].dragStartedOverThumbs && !t[a].dragStartedOverTabs) && !("start" === s && g > 0 && (f > 0 || m > 0))) {
                        if ("end" == s && !v) {
                            if (t[a].sc_indicator = "arrow", "horizontal" == d && "left" == n || "vertical" == d && "up" == n) return t[a].sc_indicator_dir = 0, t.callingNewSlide(a, 1), !1;
                            if ("horizontal" == d && "right" == n || "vertical" == d && "down" == n) return t[a].sc_indicator_dir = 1, t.callingNewSlide(a, -1), !1
                        }
                        return t[a].dragStartedOverSlider = !1, t[a].dragStartedOverThumbs = !1, t[a].dragStartedOverTabs = !1, !0
                    }
                    f > 0 && (t[a].dragStartedOverThumbs = !0), m > 0 && (t[a].dragStartedOverTabs = !0);
                    var b = t[a].dragStartedOverThumbs ? ".tp-thumbs" : ".tp-tabs",
                        w = t[a].dragStartedOverThumbs ? ".tp-thumb-mask" : ".tp-tab-mask",
                        _ = t[a].dragStartedOverThumbs ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                        x = t[a].dragStartedOverThumbs ? ".tp-thumb" : ".tp-tab",
                        k = t[a].dragStartedOverThumbs ? t[a].navigation.thumbnails : t[a].navigation.tabs;
                    c = n && n.match(/left|up/g) ? Math.round(-1 * c) : c = Math.round(1 * c);
                    var T = e.parent().find(w), L = T.find(_), R = k.direction,
                        I = "vertical" === R ? L.height() : L.width(), S = "vertical" === R ? T.height() : T.width(),
                        A = "vertical" === R ? T.find(x).first().outerHeight(!0) + k.space : T.find(x).first().outerWidth(!0) + k.space,
                        z = void 0 === L.data("offset") ? 0 : parseInt(L.data("offset"), 0), O = 0;
                    switch (s) {
                        case"start":
                            e.parent().find(b).addClass("dragged"), z = "vertical" === R ? L.position().top : L.position().left, L.data("offset", z), L.data("tmmove") && L.data("tmmove").pause();
                            break;
                        case"move":
                            if (I <= S) return !1;
                            O = (O = z + c) > 0 ? "horizontal" === R ? O - L.width() * (O / L.width() * O / L.width()) : O - L.height() * (O / L.height() * O / L.height()) : O;
                            var M = "vertical" === R ? 0 - (L.height() - T.height()) : 0 - (L.width() - T.width());
                            O = O < M ? "horizontal" === R ? O + L.width() * (O - M) / L.width() * (O - M) / L.width() : O + L.height() * (O - M) / L.height() * (O - M) / L.height() : O, "vertical" === R ? punchgs.TweenLite.set(L, {top: O + "px"}) : punchgs.TweenLite.set(L, {left: O + "px"});
                            break;
                        case"end":
                        case"cancel":
                            if (v) return O = z + c, O = (O = "vertical" === R ? O < 0 - (L.height() - T.height()) ? 0 - (L.height() - T.height()) : O : O < 0 - (L.width() - T.width()) ? 0 - (L.width() - T.width()) : O) > 0 ? 0 : O, O = Math.abs(c) > A / 10 ? c <= 0 ? Math.floor(O / A) * A : Math.ceil(O / A) * A : c < 0 ? Math.ceil(O / A) * A : Math.floor(O / A) * A, O = (O = "vertical" === R ? O < 0 - (L.height() - T.height()) ? 0 - (L.height() - T.height()) : O : O < 0 - (L.width() - T.width()) ? 0 - (L.width() - T.width()) : O) > 0 ? 0 : O, "vertical" === R ? punchgs.TweenLite.to(L, .5, {
                                top: O + "px",
                                ease: punchgs.Power3.easeOut
                            }) : punchgs.TweenLite.to(L, .5, {
                                left: O + "px",
                                ease: punchgs.Power3.easeOut
                            }), O = O || ("vertical" === R ? L.position().top : L.position().left), L.data("offset", O), L.data("distance", c), setTimeout(function () {
                                t[a].dragStartedOverSlider = !1, t[a].dragStartedOverThumbs = !1, t[a].dragStartedOverTabs = !1
                            }, 100), e.parent().find(b).removeClass("dragged"), !1
                    }
                }
            }
        })
    }, c = function (e) {
        e.hide_delay = jQuery.isNumeric(parseInt(e.hide_delay, 0)) ? e.hide_delay : .2, e.hide_delay_mobile = jQuery.isNumeric(parseInt(e.hide_delay_mobile, 0)) ? e.hide_delay_mobile : .2
    }, p = function (e) {
        return e && e.enable
    }, u = function (e) {
        clearTimeout(e)
    }, h = function (e) {
        var i = t[e].navigation.maintypes;
        for (var a in i) i.hasOwnProperty(a) && p(t[e].navigation[i[a]]) && (u(t[e].navigation[i[a]].showCall), t[e].navigation[i[a]].showCall = setTimeout(function (i) {
            u(i.hideCall), i.hide_onleave && !t[e].cpar.hasClass("tp-mouseover") || (void 0 === i.tween ? i.tween = f(i) : i.tween.play())
        }, t[e].navigation[i[a]].hide_onleave && !t[e].cpar.hasClass("tp-mouseover") ? 0 : parseInt(t[e].navigation[i[a]].animDelay), t[e].navigation[i[a]]))
    }, g = function (e, a) {
        var r = t[e].navigation.maintypes;
        for (var o in r) r.hasOwnProperty(o) && void 0 !== t[e].navigation[r[o]] && t[e].navigation[r[o]].hide_onleave && p(t[e].navigation[r[o]]) && (u(t[e].navigation[r[o]].hideCall), t[e].navigation[r[o]].hideCall = setTimeout(function (e) {
            u(e.showCall), e.tween && e.tween.reverse()
        }, i ? parseInt(t[e].navigation[r[o]].hide_delay_mobile, 0) : parseInt(t[e].navigation[r[o]].hide_delay, 0), t[e].navigation[r[o]]))
    }, f = function (e) {
        e.speed = void 0 === e.speed ? .5 : e.speed, e.anims = [], void 0 !== e.anim && void 0 === e.left && e.anims.push(e.anim), void 0 !== e.left && e.anims.push(e.left.anim), void 0 !== e.right && e.anims.push(e.right.anim);
        var t = new punchgs.TimelineLite;
        for (var i in t.add(punchgs.TweenLite.to(e.c, e.speed, {
            autoAlpha: 1,
            opacity: 1,
            ease: punchgs.Power3.easeInOut
        }), 0), e.anims) if (e.anims.hasOwnProperty(i)) switch (e.anims[i]) {
            case"left":
                t.add(punchgs.TweenLite.fromTo(e.c[i], e.speed, {marginLeft: -50}, {
                    marginLeft: 0,
                    ease: punchgs.Power3.easeInOut
                }), 0);
                break;
            case"right":
                t.add(punchgs.TweenLite.fromTo(e.c[i], e.speed, {marginLeft: 50}, {
                    marginLeft: 0,
                    ease: punchgs.Power3.easeInOut
                }), 0);
                break;
            case"top":
                t.add(punchgs.TweenLite.fromTo(e.c[i], e.speed, {marginTop: -50}, {
                    marginTop: 0,
                    ease: punchgs.Power3.easeInOut
                }), 0);
                break;
            case"bottom":
                t.add(punchgs.TweenLite.fromTo(e.c[i], e.speed, {marginTop: 50}, {
                    marginTop: 0,
                    ease: punchgs.Power3.easeInOut
                }), 0);
                break;
            case"zoomin":
                t.add(punchgs.TweenLite.fromTo(e.c[i], e.speed, {scale: .5}, {
                    scale: 1,
                    ease: punchgs.Power3.easeInOut
                }), 0);
                break;
            case"zoomout":
                t.add(punchgs.TweenLite.fromTo(e.c[i], e.speed, {scale: 1.2}, {
                    scale: 1,
                    ease: punchgs.Power3.easeInOut
                }), 0)
        }
        return t.play(), t
    }, m = function (e, i) {
        e.style = void 0 === e.style ? "" : e.style, e.left.style = void 0 === e.left.style ? "" : e.left.style, e.right.style = void 0 === e.right.style ? "" : e.right.style, 0 === t[i].c.find(".tp-leftarrow.tparrows").length && t[i].c.append('<rs-arrow style="opacity:0" class="tp-leftarrow tparrows ' + e.style + " " + e.left.style + '">' + e.tmp + "</rs-arrow>"), 0 === t[i].c.find(".tp-rightarrow.tparrows").length && t[i].c.append('<rs-arrow style="opacity:0"  class="tp-rightarrow tparrows ' + e.style + " " + e.right.style + '">' + e.tmp + "</rs-arrow>");
        var a = t[i].c.find(".tp-leftarrow.tparrows"), r = t[i].c.find(".tp-rightarrow.tparrows");
        e.rtl ? (a.click(function () {
            "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 0, t[i].c.revnext()
        }), r.click(function () {
            "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 1, t[i].c.revprev()
        })) : (r.click(function () {
            "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 0, t[i].c.revnext()
        }), a.click(function () {
            "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 1, t[i].c.revprev()
        })), e.right.j = t[i].c.find(".tp-rightarrow.tparrows"), e.left.j = t[i].c.find(".tp-leftarrow.tparrows"), e.padding_top = parseInt(t[i].carousel.padding_top || 0, 0), e.padding_bottom = parseInt(t[i].carousel.padding_bottom || 0, 0), b(a, e.left, i), b(r, e.right, i), "outer-left" != e.position && "outer-right" != e.position || (t[i].outernav = !0)
    }, v = function (e, i, a) {
        var r = e.outerHeight(!0), o = null == t[a] ? 0 : 0 == t[a].conh ? t[a].height : t[a].conh,
            s = "layergrid" == i.container ? "fullscreen" == t[a].sliderLayout ? t[a].height / 2 - t[a].gridheight[t[a].level] * t[a].bh / 2 : t[a].autoHeight || null != t[a].minHeight && t[a].minHeight > 0 ? o / 2 - t[a].gridheight[t[a].level] * t[a].bh / 2 : 0 : 0,
            n = "top" === i.v_align ? {
                top: "0px",
                y: Math.round(i.v_offset + s) + "px"
            } : "center" === i.v_align ? {top: "50%", y: Math.round(0 - r / 2 + i.v_offset) + "px"} : {
                top: "100%",
                y: Math.round(0 - (r + i.v_offset + s)) + "px"
            };
        e.hasClass("outer-bottom") || punchgs.TweenLite.set(e, n)
    }, y = function (e, i, a) {
        var r = e.outerWidth(!0),
            o = "layergrid" === i.container ? t[a].width / 2 - t[a].gridwidth[t[a].level] * t[a].bw / 2 : 0,
            s = "left" === i.h_align ? {
                left: "0px",
                x: Math.round(i.h_offset + o) + "px"
            } : "center" === i.h_align ? {left: "50%", x: Math.round(0 - r / 2 + i.h_offset) + "px"} : {
                left: "100%",
                x: Math.round(0 - (r + i.h_offset + o)) + "px"
            };
        punchgs.TweenLite.set(e, s)
    }, b = function (e, i, a) {
        var r = "fullwidth" == t[a].sliderLayout || "fullscreen" == t[a].sliderLayout,
            o = r ? t[a].c.width() : t[a].topc.width(), s = t[a].c.height();
        if (v(e, i, a), y(e, i, a), "outer-left" === i.position && r ? punchgs.TweenLite.set(e, {
            left: 0 - e.outerWidth() + "px",
            x: i.h_offset + "px"
        }) : "outer-right" === i.position && r && punchgs.TweenLite.set(e, {
            right: 0 - e.outerWidth() + "px",
            x: i.h_offset + "px"
        }), e.hasClass("tp-thumbs") || e.hasClass("tp-tabs")) {
            var n = e.data("wr_padding"), l = e.data("maxw"), d = e.data("maxh"),
                c = e.hasClass("tp-thumbs") ? e.find(".tp-thumb-mask") : e.find(".tp-tab-mask"),
                p = parseInt(i.padding_top || 0, 0), u = parseInt(i.padding_bottom || 0, 0), h = {}, g = {};
            l > o && "outer-left" !== i.position && "outer-right" !== i.position ? (h.left = "0px", h.x = 0, h.maxWidth = o - 2 * n + "px", g.maxWidth = o - 2 * n + "px") : (h.maxWidth = l, g.maxWidth = o + "px"), d + 2 * n > s && "outer-bottom" !== i.position && "outer-top" !== i.position ? (h.top = "0px", h.y = 0, h.maxHeight = p + u + (s - 2 * n) + "px", g.maxHeight = p + u + (s - 2 * n) + "px") : (h.maxHeight = d + "px", g.maxHeight = d + "px"), i.span ? ("layergrid" == i.container && "outer-left" !== i.position && "outer-right" !== i.position && (p = u = 0), "vertical" === i.direction ? (h.maxHeight = p + u + (s - 2 * n) + "px", h.height = p + u + (s - 2 * n) + "px", h.top = 0 - p, h.y = 0, g.maxHeight = p + u + Math.min(d, s - 2 * n) + "px", punchgs.TweenLite.set(e, h), punchgs.TweenLite.set(c, g), v(c, i, a)) : "horizontal" === i.direction && (h.maxWidth = "100%", h.width = o - 2 * n + "px", h.left = 0, h.x = 0, g.maxWidth = l >= o ? "100%" : Math.min(l, o) + "px", punchgs.TweenLite.set(e, h), punchgs.TweenLite.set(c, g), y(c, i, a))) : (punchgs.TweenLite.set(e, h), punchgs.TweenLite.set(c, g))
        }
    }, w = function (e, i, a, r) {
        0 === e.find(".tp-bullets").length && (i.style = void 0 === i.style ? "" : i.style, e.append('<rs-bullets style="opacity:0"  class="tp-bullets ' + i.style + " " + i.direction + '"></rs-bullets>'));
        var o = e.find(".tp-bullets"), s = a.data("key"), n = i.tmp;
        void 0 !== t[r].thumbs[a.index()] && jQuery.each(t[r].thumbs[a.index()].params, function (e, t) {
            n = n.replace(t.from, t.to)
        }), o.append('<rs-bullet data-key="' + s + '" class="justaddedbullet tp-bullet">' + n + "</rs-bullet>");
        var l = e.find(".justaddedbullet"), d = e.find(".tp-bullet").length,
            c = l.outerWidth() + parseInt(void 0 === i.space ? 0 : i.space, 0),
            p = l.outerHeight() + parseInt(void 0 === i.space ? 0 : i.space, 0);
        "vertical" === i.direction ? (l.css({
            top: (d - 1) * p + "px",
            left: "0px"
        }), o.css({height: (d - 1) * p + l.outerHeight(), width: l.outerWidth()})) : (l.css({
            left: (d - 1) * c + "px",
            top: "0px"
        }), o.css({
            width: (d - 1) * c + l.outerWidth(),
            height: l.outerHeight()
        })), void 0 !== t[r].thumbs[a.index()] && l.find(".tp-bullet-image").css({backgroundImage: "url(" + t[r].thumbs[a.index()].src + ")"}), l.click(function () {
            t[r].sc_indicator = "bullet", e.revcallslidewithid(s), e.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
        }), l.removeClass("justaddedbullet"), i.padding_top = parseInt(t[r].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[r].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[r].outernav = !0), o.addClass("nav-pos-hor-" + i.h_align), o.addClass("nav-pos-ver-" + i.v_align), o.addClass("nav-dir-" + i.direction), b(o, i, r)
    }, _ = function (e, i, a, r, o) {
        var s = "tp-thumb" === r ? ".tp-thumbs" : ".tp-tabs", n = "tp-thumb" === r ? ".tp-thumb-mask" : ".tp-tab-mask",
            l = "tp-thumb" === r ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
            d = "tp-thumb" === r ? ".tp-thumb" : ".tp-tab", c = "tp-thumb" === r ? ".tp-thumb-image" : ".tp-tab-image",
            p = "tp-thumb" === r ? "rs-thumb" : "rs-tab";
        if (i.visibleAmount = i.visibleAmount > t[o].slideamount ? t[o].slideamount : i.visibleAmount, i.sliderLayout = t[o].sliderLayout, 0 === e.parent().find(s).length) {
            i.style = void 0 === i.style ? "" : i.style;
            var u = "<" + p + 's style="opacity:0" class="' + r + "s " + (!0 === i.span ? "tp-span-wrapper" : "") + " " + i.position + " " + i.style + '"><rs-navmask class="' + r + '-mask"><' + p + 's-wrap class="' + r + 's-inner-wrapper" style="position:relative;"></' + p + "s-wrap></rs-navmask></" + p + "s>";
            "outer-top" === i.position ? e.parent().prepend(u) : "outer-bottom" === i.position ? e.after(u) : e.append(u), "outer-left" !== i.position && "outer-right" !== i.position || punchgs.TweenLite.set(t[o].c, {overflow: "visible"}), i.padding_top = parseInt(t[o].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[o].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[o].outernav = !0)
        }
        var h = a.data("key"), g = e.parent().find(s), f = g.find(n), m = f.find(l),
            v = "horizontal" === i.direction ? i.width * i.visibleAmount + i.space * (i.visibleAmount - 1) : i.width,
            y = "horizontal" === i.direction ? i.height : i.height * i.visibleAmount + i.space * (i.visibleAmount - 1),
            w = i.tmp;
        void 0 !== t[o].thumbs[a.index()] && jQuery.each(t[o].thumbs[a.index()].params, function (e, t) {
            w = w.replace(t.from, t.to)
        }), m.append("<" + p + ' data-liindex="' + a.index() + '" data-key="' + h + '" class="justaddedthumb ' + r + '" style="width:' + i.width + "px;height:" + i.height + 'px;">' + w + "<" + p + ">");
        var _ = g.find(".justaddedthumb"), x = g.find(d).length,
            k = _.outerWidth() + parseInt(void 0 === i.space ? 0 : i.space, 0),
            T = _.outerHeight() + parseInt(void 0 === i.space ? 0 : i.space, 0);
        void 0 !== t[o].thumbs[a.index()] && _.find(c).css({backgroundImage: "url(" + t[o].thumbs[a.index()].src + ")"}), "vertical" === i.direction ? (_.css({
            top: (x - 1) * T + "px",
            left: "0px"
        }), m.css({height: (x - 1) * T + _.outerHeight(), width: _.outerWidth()})) : (_.css({
            left: (x - 1) * k + "px",
            top: "0px"
        }), m.css({
            width: (x - 1) * k + _.outerWidth(),
            height: _.outerHeight()
        })), g.data("maxw", v), g.data("maxh", y), g.data("wr_padding", i.wrapper_padding);
        var L = "outer-top" === i.position || "outer-bottom" === i.position ? "relative" : "absolute";
        f.css({
            maxWidth: v + "px",
            maxHeight: y + "px",
            overflow: "hidden",
            position: "relative"
        }), g.css({
            maxWidth: v + "px",
            maxHeight: y + "px",
            overflow: "visible",
            position: L,
            background: i.wrapper_color,
            padding: i.wrapper_padding + "px",
            boxSizing: "contet-box"
        }), _.click(function () {
            t[o].sc_indicator = "bullet";
            var i = e.parent().find(l).data("distance");
            i = void 0 === i ? 0 : i, Math.abs(i) < 10 && (e.revcallslidewithid(h), e.parent().find(s).removeClass("selected"), jQuery(this).addClass("selected"))
        }), _.removeClass("justaddedthumb"), g.addClass("nav-pos-hor-" + i.h_align), g.addClass("nav-pos-ver-" + i.v_align), g.addClass("nav-dir-" + i.direction), b(g, i, o), t.callContWidthManager(o)
    }, x = function (e) {
        var i = t[e].cpar.find(".outer-top"), a = t[e].cpar.find(".outer-bottom");
        t[e].top_outer = i.hasClass("tp-forcenotvisible") ? 0 : i.outerHeight() || 0, t[e].bottom_outer = a.hasClass("tp-forcenotvisible") ? 0 : a.outerHeight() || 0
    }, k = function (e, t, i, a) {
        t > i || i > a ? e.addClass("tp-forcenotvisible") : e.removeClass("tp-forcenotvisible")
    }
}(jQuery), function (e) {
    "use strict";
    var t = jQuery.fn.revolution;
    jQuery.extend(!0, t, {
        stopPanZoom: function (e) {
            null != e.data("pztl") && e.data("pztl").pause()
        }, startPanZoom: function (e, i, a) {
            var r = e.data(), o = e.find("rs-sbg"), s = o.data("lazyload") || o.data("src"),
                n = (r.owidth, r.oheight, "carousel" === t[i].sliderType ? t[i].carousel.slide_width : t[i].canvas.width()),
                l = t[i].canvas.height();
            if (void 0 !== r.panzoom && null !== r.panzoom) {
                if (e.data("pztl") && e.data("pztl").kill(), a = a || 0, 0 == e.find(".rs-pzimg").length) {
                    var d = o.data("mediafilter");
                    d = void 0 === d ? "" : d, e.append('<rs-pzimg-wrap class="' + d + '" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;display:block"><img class="rs-pzimg" src="' + s + '" style="position:absolute;" width="' + r.owidth + '" height="' + r.oheight + '"></rs-pzimg-wrap>'), e.data("pzimg", e.find(".rs-pzimg"))
                }
                var c = function (e, t, i, a, r, o, s) {
                    var n = e * i, l = t * i, d = Math.abs(a - n), c = Math.abs(r - l), p = new Object;
                    return p.l = (0 - o) * d, p.r = p.l + n, p.t = (0 - s) * c, p.b = p.t + l, p.h = o, p.v = s, p
                };
                null != e.data("pztl") && (e.data("pztl").kill(), e.removeData("pztl"));
                var p = e.data("pzimg"), u = p.parent(), h = function (e, t, i) {
                    var a = void 0 === i.panvalues ? jQuery.extend(!0, {}, function (e) {
                        var t = e.panzoom.split(";"), i = {
                            duration: 10,
                            ease: "Linear.easeNone",
                            scalestart: 1,
                            scaleend: 1,
                            rotatestart: .01,
                            rotateend: 0,
                            blurstart: 0,
                            blurend: 0,
                            offsetstart: "0/0",
                            offsetend: "0/0"
                        };
                        for (var a in t) if (t.hasOwnProperty(a)) {
                            var r = t[a].split(":"), o = r[0], s = r[1];
                            switch (o) {
                                case"d":
                                    i.duration = parseInt(s, 0) / 1e3;
                                    break;
                                case"e":
                                    i.ease = s;
                                    break;
                                case"ss":
                                    i.scalestart = parseInt(s, 0) / 100;
                                    break;
                                case"se":
                                    i.scaleend = parseInt(s, 0) / 100;
                                    break;
                                case"rs":
                                    i.rotatestart = parseInt(s, 0);
                                    break;
                                case"re":
                                    i.rotateend = parseInt(s, 0);
                                    break;
                                case"bs":
                                    i.blurstart = parseInt(s, 0);
                                    break;
                                case"be":
                                    i.blurend = parseInt(s, 0);
                                    break;
                                case"os":
                                    i.offsetstart = s;
                                    break;
                                case"oe":
                                    i.offsetend = s
                            }
                        }
                        return i.offsetstart = i.offsetstart.split("/") || [0, 0], i.offsetend = i.offsetend.split("/") || [0, 0], i.rotatestart = 0 === i.rotatestart ? .01 : i.rotatestart, e.panvalues = i, e.bgposition = "center center" == e.bgposition ? "50% 50%" : e.bgposition, i
                    }(i)) : jQuery.extend(!0, {}, i.panvalues), r = a.offsetstart, o = a.offsetend, s = {
                        start: {
                            width: e,
                            height: e / i.owidth * i.oheight,
                            rotation: a.rotatestart + "deg",
                            scale: a.scalestart,
                            transformOrigin: i.bgposition
                        }, starto: {}, end: {rotation: a.rotateend + "deg", scale: a.scaleend}, endo: {}
                    };
                    a.scalestart, i.owidth, i.oheight, a.scaleend, i.owidth, i.oheight;
                    if (s.start.height < t) {
                        var n = t / s.start.height;
                        s.start.height = t, s.start.width = s.start.width * n
                    }
                    var l = function (e, t, i, a) {
                        var r = e.bgposition.split(" ") || "center center",
                            o = "center" == r[0] ? "50%" : "left" == r[0] || "left" == r[1] ? "0%" : "right" == r[0] || "right" == r[1] ? "100%" : r[0],
                            s = "center" == r[1] ? "50%" : "top" == r[0] || "top" == r[1] ? "0%" : "bottom" == r[0] || "bottom" == r[1] ? "100%" : r[1];
                        o = parseInt(o, 0) / 100 || 0, s = parseInt(s, 0) / 100 || 0;
                        var n = new Object;
                        return n.start = c(a.start.width, a.start.height, a.start.scale, t, i, o, s), n.end = c(a.start.width, a.start.height, a.end.scale, t, i, o, s), n
                    }(i, e, t, s);
                    r[0] = parseFloat(r[0]) + l.start.l, o[0] = parseFloat(o[0]) + l.end.l, r[1] = parseFloat(r[1]) + l.start.t, o[1] = parseFloat(o[1]) + l.end.t;
                    var d = l.start.r - l.start.l, p = l.start.b - l.start.t, u = l.end.r - l.end.l,
                        h = l.end.b - l.end.t;
                    return r[0] = r[0] > 0 ? 0 : d + r[0] < e ? e - d : r[0], o[0] = o[0] > 0 ? 0 : u + o[0] < e ? e - u : o[0], r[1] = r[1] > 0 ? 0 : p + r[1] < t ? t - p : r[1], o[1] = o[1] > 0 ? 0 : h + o[1] < t ? t - h : o[1], s.starto.x = r[0] + "px", s.starto.y = r[1] + "px", s.endo.x = o[0] + "px", s.endo.y = o[1] + "px", s.end.ease = s.endo.ease = a.ease, s.end.force3D = s.endo.force3D = !0, s
                }(n, l, r), g = new punchgs.TimelineLite;
                if (g.pause(), h.start.transformOrigin = "0% 0%", h.starto.transformOrigin = "0% 0%", r.panvalues.duration = NaN === r.panvalues.duration || void 0 === r.panvalues.duration ? 10 : r.panvalues.duration, g.add(punchgs.TweenLite.fromTo(p, r.panvalues.duration, h.start, h.end), 0), g.add(punchgs.TweenLite.fromTo(u, r.panvalues.duration, h.starto, h.endo), 0), void 0 !== r.panvalues.blurstart && void 0 !== r.panvalues.blurend && (0 !== r.panvalues.blurstart || 0 !== r.panvalues.blurend)) {
                    var f = {a: r.panvalues.blurstart}, m = {a: r.panvalues.blurend, ease: h.endo.ease},
                        v = new punchgs.TweenLite(f, r.panvalues.duration, m);
                    v.eventCallback("onUpdate", function (e) {
                        punchgs.TweenLite.set(e, {filter: "blur(" + f.a + "px)", webkitFilter: "blur(" + f.a + "px)"})
                    }, [u]), g.add(v, 0)
                }
                g.progress(a), g.play(), e.data("pztl", g)
            }
        }
    })
}(jQuery), function (e) {
    "use strict";
    var t = jQuery.fn.revolution, i = t.is_mobile();
    jQuery.extend(!0, t, {
        checkForParallax: function (e) {
            var a = t[e].parallax;
            if (!a.done) {
                if (a.done = !0, i && a.disable_onmobile) return !1;
                if (("3D" == a.type || "3d" == a.type) && (punchgs.TweenLite.set(t[e].c, {overflow: a.ddd_overflow}), punchgs.TweenLite.set(t[e].canvas, {overflow: a.ddd_overflow}), "carousel" != t[e].sliderType && a.ddd_shadow)) {
                    var r = jQuery('<div class="dddwrappershadow"></div>');
                    punchgs.TweenLite.set(r, {
                        force3D: "auto",
                        transformPerspective: 1600,
                        transformOrigin: "50% 50%",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 0
                    }), t[e].c.prepend(r)
                }
                t[e].slides.each(function () {
                    n(jQuery(this))
                }), ("3D" == a.type || "3d" == a.type) && t[e].c.find("rs-static-layers").length > 0 && (punchgs.TweenLite.set(t[e].c.find("rs-static-layers"), {
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }), n(t[e].c.find("rs-static-layers"))), a.pcontainers = [], a.pcontainer_depths = [], a.bgcontainers = [], a.bgcontainer_depths = [], a.speed = void 0 === a.speed ? 0 : parseInt(a.speed, 0), a.speedbg = void 0 === a.speedbg ? 0 : parseInt(a.speedbg, 0), a.speedls = void 0 === a.speedls ? 0 : parseInt(a.speedls, 0), t[e].c.find("rs-slide rs-sbg-wrap, rs-slide rs-bgvideo").each(function () {
                    var i = jQuery(this), r = i.data("parallax");
                    void 0 !== (r = "on" == r || !0 === r ? 1 : r) && "off" !== r && !1 !== r && (a.bgcontainers.push(i.closest("rs-sbg-px")), a.bgcontainer_depths.push(t[e].parallax.levels[parseInt(r, 0) - 1] / 100))
                });
                for (var o = 1; o <= a.levels.length; o++) t[e].c.find(".rs-pxl-" + o).each(function () {
                    var e = jQuery(this),
                        t = this.className.indexOf("rs-pxmask") >= 0 ? e.closest("rs-px-mask") : e.closest(".rs-parallax-wrap");
                    t.data("parallaxlevel", a.levels[o - 1]), t.addClass("tp-parallax-container"), a.pcontainers.push(t), a.pcontainer_depths.push(a.levels[o - 1])
                });
                "mouse" != a.type && "mousescroll" != a.type && "3D" != a.type && "3d" != a.type || (t[e].c.mouseenter(function (i) {
                    var a = t[e].c.offset().top, r = t[e].c.offset().left;
                    void 0 !== t[e].pr_active_key && (t.sA(t[e].slides[t[e].pr_active_key], "enterx", i.pageX - r), t.sA(t[e].slides[t[e].pr_active_key], "entery", i.pageY - a))
                }), t[e].c.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function (i, r) {
                    var o = r && r.li ? r.li : jQuery(t[e].slides[t[e].pr_active_key]);
                    if ("enterpoint" == a.origo) {
                        var s = t[e].c.offset().top, n = t[e].c.offset().left;
                        null == o.data("enterx") && o.data("enterx", i.pageX - n), null == o.data("entery") && o.data("entery", i.pageY - s);
                        var l = o.data("enterx") || i.pageX - n, d = o.data("entery") || i.pageY - s,
                            c = l - (i.pageX - n), p = d - (i.pageY - s), u = a.speed / 1e3 || .4
                    } else s = t[e].c.offset().top, n = t[e].c.offset().left, c = t[e].conw / 2 - (i.pageX - n), p = t[e].conh / 2 - (i.pageY - s), u = a.speed / 1e3 || 3;
                    "mouseleave" == i.type && (c = a.ddd_lasth || 0, p = a.ddd_lastv || 0, u = 1.5);
                    for (var h = 0; h < a.pcontainers.length; h++) {
                        var g = a.pcontainers[h], f = a.pcontainer_depths[h],
                            m = "3D" == a.type || "3d" == a.type ? f / 200 : f / 100, v = c * m, y = p * m;
                        "mousescroll" == a.type ? punchgs.TweenLite.to(g, u, {
                            force3D: "auto",
                            x: v,
                            ease: punchgs.Power3.easeOut,
                            overwrite: "all"
                        }) : punchgs.TweenLite.to(g, u, {
                            force3D: "auto",
                            x: v,
                            y: y,
                            ease: punchgs.Power3.easeOut,
                            overwrite: "all"
                        })
                    }
                    if ("3D" == a.type || "3d" == a.type) {
                        var b = "rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";
                        "carousel" === t[e].sliderType && (b = "rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"), t[e].c.find(b).each(function () {
                            var r = jQuery(this), o = a.levels[a.levels.length - 1] / 200, s = c * o, n = p * o,
                                l = 0 == t[e].conw ? 0 : Math.round(c / t[e].conw * o * 100) || 0,
                                d = 0 == t[e].conh ? 0 : Math.round(p / t[e].conh * o * 100) || 0,
                                h = r.closest("rs-slide"), g = 0, f = !1;
                            r.hasClass("dddwrapper-layer") && (g = a.ddd_z_correction || 65, f = !0), r.hasClass("dddwrapper-layer") && (s = 0, n = 0), h.index() === t[e].pr_active_key || "carousel" != t[e].sliderType ? !a.ddd_bgfreeze || f ? punchgs.TweenLite.to(r, u, {
                                rotationX: d,
                                rotationY: -l,
                                x: s,
                                z: g,
                                y: n,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(r, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(r, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }), "mouseleave" == i.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                                z: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                    }
                }), i && (window.ondeviceorientation = function (i) {
                    var r = Math.round(i.beta || 0) - 70, o = Math.round(i.gamma || 0),
                        s = jQuery(t[e].slides[t[e].pr_active_key]);
                    if (jQuery(window).width() > jQuery(window).height()) {
                        var n = o;
                        o = r, r = n
                    }
                    var l = t[e].c.width(), d = t[e].c.height(), c = 360 / l * o, p = 180 / d * r,
                        u = a.speed / 1e3 || 3, h = [];
                    if (s.find(".tp-parallax-container").each(function (e) {
                        h.push(jQuery(this))
                    }), t[e].c.find("rs-static-layers .tp-parallax-container").each(function () {
                        h.push(jQuery(this))
                    }), jQuery.each(h, function () {
                        var e = jQuery(this), t = parseInt(e.data("parallaxlevel"), 0) / 100, i = c * t * 2,
                            a = p * t * 4;
                        punchgs.TweenLite.to(e, u, {
                            force3D: "auto",
                            x: i,
                            y: a,
                            ease: punchgs.Power3.easeOut,
                            overwrite: "all"
                        })
                    }), "3D" == a.type || "3d" == a.type) {
                        var g = "rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";
                        "carousel" === t[e].sliderType && (g = "rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"), t[e].c.find(g).each(function () {
                            var r = jQuery(this), o = a.levels[a.levels.length - 1] / 200, s = c * o, n = p * o * 3,
                                l = 0 == t[e].conw ? 0 : Math.round(c / t[e].conw * o * 500) || 0,
                                d = 0 == t[e].conh ? 0 : Math.round(p / t[e].conh * o * 700) || 0,
                                h = r.closest("rs-slide"), g = 0, f = !1;
                            r.hasClass("dddwrapper-layer") && (g = a.ddd_z_correction || 65, f = !0), r.hasClass("dddwrapper-layer") && (s = 0, n = 0), h.hasClass("active-rs-slide") || "carousel" != t[e].sliderType ? !a.ddd_bgfreeze || f ? punchgs.TweenLite.to(r, u, {
                                rotationX: d,
                                rotationY: -l,
                                x: s,
                                z: g,
                                y: n,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(r, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                rotationX: 0,
                                z: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(r, .5, {
                                force3D: "auto",
                                rotationY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }), "mouseleave" == i.type && punchgs.TweenLite.to(jQuery(this), 3.8, {
                                z: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                    }
                }));
                var s = t[e].scrolleffect;
                s.set && (s.multiplicator_layers = parseFloat(s.multiplicator_layers), s.multiplicator = parseFloat(s.multiplicator)), void 0 !== s._L && 0 === s._L.length && (s._L = !1), void 0 !== s.bgs && 0 === s.bgs.length && (s.bgs = !1), t.scrollTicker(e)
            }

            function n(i) {
                if ("3D" == a.type || "3d" == a.type) {
                    i.find("rs-sbg-wrap").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'), i.find(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:' + a.ddd_layer_overflow + ';"></div>'), i.find(".rs-pxl-tobggroup").closest(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
                    var r = i.find(".dddwrapper"), o = i.find(".dddwrapper-layer");
                    i.find(".dddwrapper-layertobggroup").appendTo(r), "carousel" == t[e].sliderType && (a.ddd_shadow && r.addClass("dddwrappershadow"), punchgs.TweenLite.set(r, {borderRadius: t[e].carousel.border_radius})), punchgs.TweenLite.set(i, {
                        overflow: "visible",
                        transformStyle: "preserve-3d",
                        perspective: 1600
                    }), punchgs.TweenLite.set(r, {
                        force3D: "auto",
                        transformOrigin: "50% 50%",
                        transformStyle: "preserve-3d",
                        transformPerspective: 1600
                    }), punchgs.TweenLite.set(o, {
                        force3D: "auto",
                        transformOrigin: "50% 50%",
                        zIndex: 5,
                        transformStyle: "flat",
                        transformPerspective: 1600
                    }), punchgs.TweenLite.set(t[e].canvas, {transformStyle: "preserve-3d", transformPerspective: 1600})
                }
            }
        }, scrollTicker: function (e) {
            1 != t[e].scrollTicker && (t[e].scrollTicker = !0, i ? (punchgs.TweenLite.ticker.fps(150), punchgs.TweenLite.ticker.addEventListener("tick", function () {
                t.scrollHandling(e)
            }, t[e].c, !1, 1)) : document.addEventListener("scroll", function (i) {
                t.scrollHandling(e, !0)
            }, {passive: !0})), t.scrollHandling(e, !0)
        }, scrollHandling: function (e, a, r, o) {
            if (void 0 !== t[e]) {
                if (t[e].lastwindowheight = t[e].lastwindowheight || window.innerHeight, t[e].conh = 0 === t[e].conh || void 0 === t[e].conh ? t[e].infullscreenmode ? t[e].minHeight : t[e].c.height() : t[e].conh, t[e].lastscrolltop == window.scrollY && !t[e].duringslidechange && !a) return !1;
                punchgs.TweenLite.delayedCall(.2, function (e, i) {
                    t[e].lastscrolltop = i
                }, [e, window.scrollY]);
                var s = void 0 !== t[e].topc ? t[e].topc[0].getBoundingClientRect() : 0 === t[e].c.height() ? t[e].cpar[0].getBoundingClientRect() : t[e].c[0].getBoundingClientRect(),
                    n = t[e].viewPort, l = t[e].parallax,
                    d = t[e].slides[void 0 === t[e].pr_active_key ? 0 : t[e].pr_active_key];
                s.hheight = 0 === s.height ? 0 === t[e].c.height() ? t[e].cpar.height() : t[e].c.height() : s.height;
                var c = s.top < 0 || s.hheight > t[e].lastwindowheight ? s.top / s.hheight : s.bottom > t[e].lastwindowheight ? (s.bottom - t[e].lastwindowheight) / s.hheight : 0,
                    p = t[e].fixedOnTop ? Math.min(1, Math.max(0, window.scrollY / t[e].lastwindowheight)) : Math.min(1, Math.max(0, 1 - (s.top + s.hheight) / (s.hheight + t[e].lastwindowheight))),
                    u = s.top >= 0 && s.top <= t[e].lastwindowheight || s.top <= 0 && s.bottom >= 0 || s.top <= 0 && s.bottom >= 0;
                t[e].scrollproc = c, t.callBackHandling && t.callBackHandling(e, "parallax", "start");
                var h = Math.max(0, 1 - Math.abs(c));
                if (u ? t[e].sbtimeline.fixed ? (t[e].curheight = void 0 === t[e].curheight ? t[e].cpar.height() : t[e].curheight, void 0 === t[e].sbtimeline.rest && t.updateFixedScrollTimes(e), s.top >= 0 && s.top <= t[e].lastwindowheight ? (p = t[e].sbtimeline.fixStart * (1 - s.top / t[e].lastwindowheight) / 1e3, t[e].topc.removeClass("rs-fixedscrollon"), punchgs.TweenLite.set(t[e].cpar, {top: 0})) : s.top <= 0 && s.bottom >= t[e].curheight ? (t[e].topc.addClass("rs-fixedscrollon"), punchgs.TweenLite.set(t[e].cpar, {top: 0}), p = (t[e].sbtimeline.fixStart + t[e].sbtimeline.time * (Math.abs(s.top) / (s.hheight - t[e].curheight))) / 1e3) : (punchgs.TweenLite.set(t[e].cpar, {top: s.height - t[e].curheight}), t[e].topc.removeClass("rs-fixedscrollon"), p = (t[e].sbtimeline.fixEnd + t[e].sbtimeline.rest * (1 - s.bottom / t[e].curheight)) / 1e3)) : p = t[e].duration * p / 1e3 : t[e].sbtimeline.fixed && (t[e].topc.removeClass("rs-fixedscrollon"), punchgs.TweenLite.set(t[e].cpar, {top: 0})), n.enable && (void 0 === t[e].viewPort.vaType && t.updateVisibleArea(e), "%" === n.vaType[t[e].level] && n.visible_area[t[e].level] <= h || "px" === n.vaType[t[e].level] && (s.top <= 0 && s.bottom >= t[e].lastwindowheight || s.top >= 0 && s.bottom <= t[e].lastwindowheight || s.top >= 0 && s.top < t[e].lastwindowheight - n.visible_area[t[e].level] || s.bottom >= n.visible_area[t[e].level] && s.bottom < t[e].lastwindowheight) ? t[e].inviewport || (t[e].inviewport = !0, t.enterInViewPort(e)) : t[e].inviewport && (t[e].inviewport = !1, t.leaveViewPort(e))), u && void 0 !== d && void 0 !== t.gA(d, "key") && !0 !== o) for (var g in t[e].sbas[t.gA(d, "key")]) void 0 === t[e]._L[g] || void 0 === t[e]._L[g].timeline || 1 != t[e]._L[g].animationonscroll && "true" != t[e]._L[g].animationonscroll || (void 0 !== t[e]._L[g].scrollBasedOffset && (p += t[e]._L[g].scrollBasedOffset), p > 0 && t[e]._L[g].animOnScrollRepeats < 5 ? (t[e]._L[g].timeline.time(p), t[e]._L[g].animOnScrollRepeats++) : punchgs.TweenMax.to(t[e]._L[g].timeline, t[e].sbtimeline.speed, {
                    time: p,
                    ease: t[e].sbtimeline.ease
                }));
                if (i && l.disable_onmobile) return !1;
                if ("3d" != l.type && "3D" != l.type) {
                    if (("scroll" == l.type || "mousescroll" == l.type) && l.pcontainers) for (var f = 0; f < l.pcontainers.length; f++) if (l.pcontainers[f].length > 0) {
                        var m = l.pcontainers[f], v = l.pcontainer_depths[f] / 100,
                            y = Math.round(c * (-v * t[e].conh) * 10) / 10 || 0,
                            b = void 0 !== r ? r : l.speedls / 1e3 || 0;
                        m.data("parallaxoffset", y), punchgs.TweenLite.to(m, b, {
                            overwrite: "auto",
                            force3D: "auto",
                            y: y
                        })
                    }
                    if (l.bgcontainers) for (f = 0; f < l.bgcontainers.length; f++) {
                        var w = l.bgcontainers[f];
                        y = c * (-l.bgcontainer_depths[f] * t[e].conh) || 0, b = void 0 !== r ? r : l.speedbg / 1e3 || .015;
                        b = void 0 !== t[e].parallax.lastBGY && 0 === b && Math.abs(y - t[e].parallax.lastBGY) > 50 ? .15 : b, punchgs.TweenLite.to(w, b, {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            backfaceVisibility: "hidden",
                            force3D: "true",
                            y: y + "px"
                        }), t[e].parallax.lastBGY = y
                    }
                }
                var _ = t[e].scrolleffect;
                if (_.set && (!_.mobile || !i)) {
                    var x = Math.abs(c) - _.tilt / 100;
                    if (x = x < 0 ? 0 : x, !1 !== _._L) {
                        var k = 1 - x * _.multiplicator_layers, T = {force3D: "true"};
                        if ("top" == _.direction && c >= 0 && (k = 1), "bottom" == _.direction && c <= 0 && (k = 1), k = k > 1 ? 1 : k < 0 ? 0 : k, _.fade && (T.opacity = k), _.scale) {
                            var L = k;
                            T.scale = 1 - L + 1
                        }
                        if (_.blur) {
                            var R = (1 - k) * _.maxblur;
                            T["-webkit-filter"] = "blur(" + R + "px)", T.filter = "blur(" + R + "px)"
                        }
                        if (_.grayscale) {
                            var I = "grayscale(" + 100 * (1 - k) + "%)";
                            T["-webkit-filter"] = void 0 === T["-webkit-filter"] ? I : T["-webkit-filter"] + " " + I, T.filter = void 0 === T.filter ? I : T.filter + " " + I
                        }
                        punchgs.TweenLite.set(_._L, T)
                    }
                    if (!1 !== _.bgs) {
                        k = 1 - x * _.multiplicator, T = {backfaceVisibility: "hidden", force3D: "true"};
                        for (var S in "top" == _.direction && c >= 0 && (k = 1), "bottom" == _.direction && c <= 0 && (k = 1), k = k > 1 ? 1 : k < 0 ? 0 : k, _.bgs) if (_.bgs.hasOwnProperty(S)) {
                            if (_.bgs[S].fade && (T.opacity = k), _.bgs[S].blur) {
                                R = (1 - k) * _.maxblur;
                                T["-webkit-filter"] = "blur(" + R + "px)", T.filter = "blur(" + R + "px)"
                            }
                            if (_.bgs[S].grayscale) {
                                I = "grayscale(" + 100 * (1 - k) + "%)";
                                T["-webkit-filter"] = void 0 === T["-webkit-filter"] ? I : T["-webkit-filter"] + " " + I, T.filter = void 0 === T.filter ? I : T.filter + " " + I
                            }
                            punchgs.TweenLite.set(_.bgs[S].c, T)
                        }
                    }
                }
                t.callBackHandling && t.callBackHandling(e, "parallax", "end")
            }
        }
    })
}(jQuery), function (e) {
    "use strict";
    var t = jQuery.fn.revolution;
    jQuery.extend(!0, t, {
        animateSlide: function (e) {
            return a(e)
        }
    });
    var i = function (e, t) {
        var i;
        return void 0 !== (i = jQuery.isArray(e) ? e.length >= t ? e[t] : e[e.length - 1] : e) && jQuery.isNumeric(i) ? parseInt(e, 0) : i
    }, a = function (e) {
        var a = e.id,
            n = "arrow" == t[a].sc_indicator ? void 0 === t[a].sc_indicator_dir ? t[a].sdir : t[a].sc_indicator_dir : t[a].sdir,
            l = !0 === e.recall ? jQuery.extend(!0, {}, t[a].lastSliderTransition) : function (e, i, a) {
                var r = "Power1.easeIn", o = "Power1.easeOut", s = "Power1.easeInOut", n = "Power2.easeIn",
                    l = "Power2.easeOut", d = "Power2.easeInOut", c = "Power3.easeInOut",
                    p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                    u = [17, 18, 19, 20, 21, 22, 23, 24, 25, 27], h = 0, g = 1, f = 0,
                    m = [["boxslide", 0, 0, 10, "box", !1, null, 0, o, o, 1e3, 6], ["boxrandomrotate", 0, 1, 10, "box", !1, null, 60, o, o, 1e3, 6], ["boxfade", 1, 0, 10, "box", !1, null, 1, s, s, 1e3, 5], ["slotslide-horizontal", 2, 0, 0, "horizontal", !0, !1, 2, d, d, 1e3, 3], ["slotslide-vertical", 3, 0, 0, "vertical", !0, !1, 3, d, d, 1e3, 3], ["curtain-1", 4, 3, 0, "horizontal", !0, !0, 4, o, o, 900, 5], ["curtain-2", 5, 3, 0, "horizontal", !0, !0, 5, o, o, 900, 5], ["curtain-3", 6, 3, 25, "horizontal", !0, !0, 6, o, o, 900, 5], ["slotzoom-horizontal", 7, 0, 0, "horizontal", !0, !0, 7, o, o, 1e3, 7], ["slotzoom-vertical", 8, 0, 0, "vertical", !0, !0, 8, l, l, 1e3, 8], ["slotzoom-mixed", 8, 1, 0, "vertical", !0, !0, 59, l, l, 1e3, 8], ["slotfade-horizontal", 9, 0, 0, "horizontal", !0, null, 9, d, d, 1500, 10], ["slotfade-vertical", 10, 0, 0, "vertical", !0, null, 10, d, d, 1500, 10], ["crossfade-horizontal", 9, 0, 0, "horizontal", !0, null, 9, d, d, 0, 10], ["crossfade-vertical", 10, 0, 0, "vertical", !0, null, 10, d, d, 0, 10], ["fade", 11, 0, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["crossfade", 11, 1, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["fadethroughdark", 11, 2, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["fadethroughlight", 11, 3, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["fadethroughtransparent", 11, 4, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["slideleft", 12, 0, 1, "horizontal", !0, !0, 12, c, c, 1e3, 1], ["slideup", 13, 0, 1, "horizontal", !0, !0, 13, c, c, 1e3, 1], ["slidedown", 14, 0, 1, "horizontal", !0, !0, 14, c, c, 1e3, 1], ["slideright", 15, 0, 1, "horizontal", !0, !0, 15, c, c, 1e3, 1], ["slideoverleft", 12, 7, 1, "horizontal", !0, !0, 12, c, c, 1e3, 1], ["slideoverup", 13, 7, 1, "horizontal", !0, !0, 13, c, c, 1e3, 1], ["slideoverdown", 14, 7, 1, "horizontal", !0, !0, 14, c, c, 1e3, 1], ["slideoverright", 15, 7, 1, "horizontal", !0, !0, 15, c, c, 1e3, 1], ["slideremoveleft", 12, 8, 1, "horizontal", !0, !0, 12, c, c, 1e3, 1], ["slideremoveup", 13, 8, 1, "horizontal", !0, !0, 13, c, c, 1e3, 1], ["slideremovedown", 14, 8, 1, "horizontal", !0, !0, 14, c, c, 1e3, 1], ["slideremoveright", 15, 8, 1, "horizontal", !0, !0, 15, c, c, 1e3, 1], ["papercut", 16, 0, 0, "vertical", null, !0, 16, c, c, 1e3, 2], ["3dcurtain-horizontal", 17, 0, 20, "vertical", !0, !0, 17, s, s, 2e3, 7], ["3dcurtain-vertical", 18, 0, 10, "horizontal", !0, !0, 18, s, s, 2e3, 7], ["cubic", 19, 0, 20, "horizontal", !1, !0, 19, d, d, 1e3, 1], ["cube", 19, 0, 20, "horizontal", !1, !0, 20, d, d, 1e3, 1], ["flyin", 20, 0, 4, "vertical", !1, !0, 21, "Power3.easeOut", c, 1e3, 1], ["turnoff", 21, 0, 1, "horizontal", !1, !0, 22, c, c, 1e3, 1], ["incube", 22, 0, 20, "horizontal", !1, !0, 23, d, d, 1e3, 1], ["cubic-horizontal", 23, 0, 20, "vertical", !1, !0, 24, d, d, 1e3, 1], ["cube-horizontal", 23, 0, 20, "vertical", !1, !0, 25, d, d, 1e3, 1], ["incube-horizontal", 24, 0, 20, "vertical", !1, !0, 26, d, d, 1e3, 1], ["turnoff-vertical", 25, 0, 1, "horizontal", !1, !0, 27, d, d, 1e3, 1], ["fadefromright", 12, 1, 1, "horizontal", !0, !0, 28, d, d, 1e3, 1], ["fadefromleft", 15, 1, 1, "horizontal", !0, !0, 29, d, d, 1e3, 1], ["fadefromtop", 14, 1, 1, "horizontal", !0, !0, 30, d, d, 1e3, 1], ["fadefrombottom", 13, 1, 1, "horizontal", !0, !0, 31, d, d, 1e3, 1], ["fadetoleftfadefromright", 12, 2, 1, "horizontal", !0, !0, 32, d, d, 1e3, 1], ["fadetorightfadefromleft", 15, 2, 1, "horizontal", !0, !0, 33, d, d, 1e3, 1], ["fadetobottomfadefromtop", 14, 2, 1, "horizontal", !0, !0, 34, d, d, 1e3, 1], ["fadetotopfadefrombottom", 13, 2, 1, "horizontal", !0, !0, 35, d, d, 1e3, 1], ["parallaxtoright", 15, 3, 1, "horizontal", !0, !0, 36, d, d, 1500, 1], ["parallaxtoleft", 12, 3, 1, "horizontal", !0, !0, 37, d, d, 1500, 1], ["parallaxtotop", 14, 3, 1, "horizontal", !0, !0, 38, d, d, 1500, 1], ["parallaxtobottom", 13, 3, 1, "horizontal", !0, !0, 39, d, d, 1500, 1], ["scaledownfromright", 12, 4, 1, "horizontal", !0, !0, 40, d, n, 1e3, 1], ["scaledownfromleft", 15, 4, 1, "horizontal", !0, !0, 41, d, n, 1e3, 1], ["scaledownfromtop", 14, 4, 1, "horizontal", !0, !0, 42, d, n, 1e3, 1], ["scaledownfrombottom", 13, 4, 1, "horizontal", !0, !0, 43, d, n, 1e3, 1], ["zoomout", 13, 5, 1, "horizontal", !0, !0, 44, d, d, 1e3, 1], ["zoomin", 13, 6, 1, "horizontal", !0, !0, 45, d, d, 1e3, 1], ["slidingoverlayup", 27, 0, 1, "horizontal", !0, !0, 47, s, o, 2e3, 1], ["slidingoverlaydown", 28, 0, 1, "horizontal", !0, !0, 48, s, o, 2e3, 1], ["slidingoverlayright", 30, 0, 1, "horizontal", !0, !0, 49, s, o, 2e3, 1], ["slidingoverlayleft", 29, 0, 1, "horizontal", !0, !0, 50, s, o, 2e3, 1], ["parallaxcirclesup", 31, 0, 1, "horizontal", !0, !0, 51, d, r, 1500, 1], ["parallaxcirclesdown", 32, 0, 1, "horizontal", !0, !0, 52, d, r, 1500, 1], ["parallaxcirclesright", 33, 0, 1, "horizontal", !0, !0, 53, d, r, 1500, 1], ["parallaxcirclesleft", 34, 0, 1, "horizontal", !0, !0, 54, d, r, 1500, 1], ["notransition", 26, 0, 1, "horizontal", !0, null, 46, d, n, 1e3, 1], ["parallaxright", 15, 3, 1, "horizontal", !0, !0, 55, d, n, 1500, 1], ["parallaxleft", 12, 3, 1, "horizontal", !0, !0, 56, d, n, 1500, 1], ["parallaxup", 14, 3, 1, "horizontal", !0, !0, 57, d, r, 1500, 1], ["parallaxdown", 13, 3, 1, "horizontal", !0, !0, 58, d, r, 1500, 1], ["grayscale", 11, 5, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["grayscalecross", 11, 6, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["brightness", 11, 7, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["brightnesscross", 11, 8, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["blurlight", 11, 9, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["blurlightcross", 11, 10, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["blurstrong", 11, 9, 1, "horizontal", !0, null, 11, d, d, 1e3, 1], ["blurstrongcross", 11, 10, 1, "horizontal", !0, null, 11, d, d, 1e3, 1]];
                return t[e].duringslidechange = !0, jQuery.each(["parallaxcircles", "slidingoverlay", "slide", "slideover", "slideremove", "parallax", "parralaxto"], function (e, t) {
                    i == t + "horizontal" && (i = 1 != a ? t + "left" : t + "right"), i == t + "vertical" && (i = 1 != a ? t + "up" : t + "down")
                }), "random" == i ? i = Math.min(Math.round(Math.random() * (m.length - 1)), m.length - 1) : "random-static" == i ? i = p[Math.min(Math.round(Math.random() * p.length - 1), p.length - 1)] : "random-premium" == i && (i = u[Math.min(Math.round(Math.random() * u.length - 1), u.length - 1)]), 1 == t[e].isJoomla && null != window.MooTools && -1 != [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45].indexOf(i) && (i = u[Math.max(0, Math.min(u.length - 1, Math.round(Math.random() * (u.length - 2)) + 1))]), jQuery.each(m, function (e, t) {
                    t[0] != i && t[7] != i || (h = t[1], g = t[2], f = e)
                }), {nTR: h = Math.max(0, Math.min(30, h)), TR: m[f], trC: g}
            }(a, e.animation.transition[e.ntrid], n),
            d = t[a].pr_next_bg && void 0 !== t[a].pr_next_bg.data("panzoom") && (l.nTR < 11 || 17 == l.nTR || 18 === l.nTR || l.nTR >= 27 && l.nTR <= 30) ? 11 : l.nTR;
        !0 !== e.recall ? (t[a].lastSliderAnimation = jQuery.extend(!0, {}, e.animation), t[a].lastSliderTransition = jQuery.extend(!0, {}, l)) : e.animation = jQuery.extend(!0, {}, t[a].lastSliderAnimation);
        var c = !0 === e.recall ? l.ntrid : e.ntrid || 0, p = i(e.animation.masterspeed, c);
        p = (p = "default" === p || "d" === p ? l.TR[10] : "random" === p ? Math.round(1e3 * Math.random() + 300) : null != p ? parseInt(p, 0) : l.TR[10]) > t[a].duration ? t[a].duration : p, t[a].rotate = i(e.animation.rotate, c), t[a].rotate = null == t[a].rotate || "default" == t[a].rotate || "d" == t[a].rotate ? 0 : 999 == t[a].rotate || "random" == t[a].rotate ? Math.round(360 * Math.random()) : t[a].rotate, t[a].rotate = window._rs_ie || window._rs_ie9 ? 0 : t[a].rotate, (d < 11 || 16 === d || 17 === d || 18 === d || l.nTR >= 27 && l.nTR <= 30) && (t[a].slots = i(e.animation.slotamount, c), t[a].slots = null == t[a].slots || "default" == t[a].slots || "d" == t[a].slots ? l.TR[11] : "random" == t[a].slots ? Math.round(12 * Math.random() + 4) : t[a].slots, t[a].slots = t[a].slots < 1 ? "boxslide" == l.TR[0] ? Math.round(6 * Math.random() + 3) : "boxslide" == l.TR[0] || "flyin" == l.TR[0] ? Math.round(4 * Math.random() + 1) : t[a].slots : t[a].slots, t[a].slots = (4 == d || 5 == d || 6 == d) && t[a].slots < 3 ? 3 : t[a].slots, t[a].slots = 0 != l.TR[3] ? Math.min(t[a].slots, l.TR[3]) : t[a].slots, t[a].slots = 9 == d ? t[a].width / t[a].slots : 10 == d ? t[a].height / t[a].slots : t[a].slots, t[a].slots = jQuery.inArray(d, [19, 20, 21, 22, 23, 24, 25, 27]) >= 0 ? 1 : t[a].slots, t[a].slots = 3 != d && 8 != d && 10 != d || "vertical" !== l.TR[4] ? t[a].slots : t[a].slots + 2, null != l.TR[6] && s(t[a].pr_active_bg, a, l.TR[6], l.TR[4]), null != l.TR[5] && s(t[a].pr_next_bg, a, l.TR[5], l.TR[4]), t[a].mtl.delay(.075));
        var u = 7 === d || 16 === d || 8 === d || 17 === d || 18 === d ? 0 : 1,
            h = d < 11 || 17 === d || 18 === d ? 0 : 1;
        t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"), {
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            z: 0,
            top: 0,
            left: 0,
            x: 0,
            y: 0,
            clearProps: "filter, transform",
            opacity: u
        }), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"), {
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            z: 0,
            top: 0,
            left: 0,
            x: 0,
            y: 0,
            clearProps: "filter, transform",
            opacity: h
        }), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg, {
            transformOrigin: "50% 50% 0",
            transformPerspective: 600,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            z: 0,
            autoAlpha: 1,
            top: 0,
            left: 0,
            x: 0,
            y: 0,
            clearProps: "filter, transform"
        }), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg, {
            transformOrigin: "50% 50% 0",
            transformPerspective: 600,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            z: 0,
            autoAlpha: 1,
            top: 0,
            left: 0,
            x: 0,
            y: 0,
            clearProps: "filter, transform"
        }), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.parent(), {backgroundColor: "transparent"}), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.parent(), {backgroundColor: "transparent"}), 0);
        var g = i(e.animation.easein, c), f = i(e.animation.easeout, c);
        if (g = "default" === g || "d" === g ? l.TR[8] || punchgs.Power2.easeInOut : g || l.TR[8] || punchgs.Power2.easeInOut, f = "default" === f || "d" === f ? l.TR[9] || punchgs.Power2.easeInOut : f || l.TR[9] || punchgs.Power2.easeInOut, d >= 31) {
            var m = {canvas: t[a].pr_next_bg[0].getElementsByClassName("bgcanvas")[0]};
            if (m.ctx = m.canvas.getContext("2d"), m.oBG_next = t[a].pr_next_bg[0].getElementsByTagName("rs-sbg")[0], m.img_next = t.getLoadObj(a, t.gA(m.oBG_next, "src-rs-ref")), m.col_next = t.gA(m.oBG_next, "bgcolor"), void 0 !== t[a].pr_active_bg[0] && (m.oBG_act = t[a].pr_active_bg[0].getElementsByTagName("rs-sbg")[0], m.img_act = t.getLoadObj(a, t.gA(m.oBG_act, "src-rs-ref")), m.col_act = t.gA(m.oBG_act, "bgcolor")), m.ctx.clearRect(0, 0, m.canvas.width, m.canvas.height), m.canvas.width = t[a].width, m.canvas.height = t[a].height, m.canvas.style.background = "transparent", m.canvas.style.display = "block", m.oBG_next.style.display = "none", void 0 !== m.col_next && m.col_next.indexOf("gradient") >= 0 && (m.col_next = "transparent"), void 0 !== m.col_act && m.col_act.indexOf("gradient") >= 0 && (m.col_act = "transparent"), 31 === d) {
                for (var v = "transparent" !== m.col_next && void 0 !== m.col_next ? {
                    x: 0,
                    y: 0,
                    width: t[a].width,
                    height: t[a].height
                } : r("contain" === m.oBG_next.style.backgroundSize, t[a].width, t[a].height, m.img_next.width, m.img_next.height), y = void 0 === m.oBG_act ? void 0 : "transparent" !== m.col_act && void 0 !== m.col_act ? {
                    x: 0,
                    y: 0,
                    width: t[a].width,
                    height: t[a].height
                } : r("contain" === m.oBG_act.style.backgroundSize, t[a].width, t[a].height, m.img_act.width, m.img_act.height), b = t[a].width / t[a].slots, w = b / 2, _ = t[a].height, x = [], k = 0; k < t[a].slots + 1; k++) x.push({
                    mt: _,
                    it: _ / 4,
                    ml: 0,
                    o: 2
                });
                t[a].mtl.add(punchgs.TweenMax.staggerTo(x, 2 * p / 1e3, {
                    mt: 0,
                    it: 0,
                    ml: w,
                    o: 0,
                    ease: punchgs.Power3.easeOut,
                    onUpdate: function () {
                        var e = 0;
                        m.ctx.clearRect(0, 0, m.canvas.width, m.canvas.height);
                        for (var i = 0; i < t[a].slots + 1; i++) {
                            var r = x[i].mt, s = x[i].ml, n = x[i].it, l = x[i].mt - _, d = x[i].ml + w,
                                c = x[i].it - _ / 4;
                            o({
                                ctx: m.ctx,
                                poly: [[e - w + s, 0 + r], [e + w + 1 + s, 0 + r], [e + 1 + s, _ + r], [e - b + s, _ + r]],
                                bg: {
                                    overlay: "rgba(0,0,0," + x[i].o + ")",
                                    img: m.img_next.img,
                                    col: m.col_next,
                                    offsetx: v.x,
                                    offsety: v.y + n,
                                    width: v.width,
                                    height: v.height
                                }
                            }), void 0 !== m.col_act && (m.oBG_act.style.display = "none", o({
                                ctx: m.ctx,
                                poly: [[e - w + d, 0 + l], [e + w + 1 + d, 0 + l], [e + 1 + d, _ + l], [e - b + d, _ + l]],
                                bg: {
                                    overlay: "rgba(0,0,0," + (1 - x[i].o) + ")",
                                    img: m.img_act.img,
                                    col: m.col_act,
                                    offsetx: y.x,
                                    offsety: y.y + c,
                                    width: y.width,
                                    height: y.height
                                }
                            })), e += b
                        }
                    }
                }, .2, function () {
                    m.ctx.clearRect(0, 0, m.canvas.width, m.canvas.height), m.canvas.style.display = "none", m.oBG_next.style.display = "block"
                }), 0)
            }
        }
        if (0 == d) {
            var T = Math.ceil(t[a].height / t[a].sloth), L = 0;
            t[a].pr_next_bg.find(".slotslide").each(function (e) {
                L = ++L === T ? 0 : L, t[a].rotate = 1 === l.trC ? 45 : t[a].rotate, t[a].mtl.add(punchgs.TweenLite.from(this, p / 2e3, {
                    opacity: 0,
                    transformStyle: "flat",
                    transformPerspective: 600,
                    scale: 0,
                    rotationZ: 0 !== t[a].rotate ? Math.random() * t[a].rotate - t[a].rotate / 2 : 0,
                    force3D: "auto",
                    ease: g
                }), (10 * e + 30 * L) / 3e3)
            })
        } else if (1 == d) t[a].pr_next_bg.find(".slotslide").each(function (e) {
            t[a].mtl.add(punchgs.TweenLite.from(this, (Math.random() * p + 300) / 1e3, {
                autoAlpha: 0,
                force3D: "auto",
                rotation: t[a].rotate,
                ease: g
            }), (500 * Math.random() + 200) / 1e3)
        }); else if (2 == d || 3 == d) t[a].pr_active_bg.find(".slotslide").each(function () {
            t[a].mtl.add(punchgs.TweenLite.to(this, p / 1e3, {
                top: 3 === d ? t[a].sloth : 0,
                left: 2 === d ? t[a].slotw : 0,
                ease: g,
                force3D: "auto",
                rotation: 0 - t[a].rotate
            }), 0)
        }), t[a].pr_next_bg.find(".slotslide").each(function () {
            t[a].mtl.add(punchgs.TweenLite.from(this, p / 1e3, {
                top: 3 == d ? 1 === n ? 0 - t[a].sloth : t[a].sloth : 0,
                left: 2 == d ? 1 === n ? 0 - t[a].slotw : t[a].slotw : 0,
                ease: g,
                force3D: "auto",
                rotation: t[a].rotate
            }), 0)
        }); else if (4 == d || 5 == d || 6 == d) {
            var R = new punchgs.TimelineLite, I = p / 1e3 - p / 1e3 / t[a].slots;
            t[a].slots -= t[a].slots % 2 == 1 ? 1 : 0, t[a].pr_active_bg.find(".slotslide").each(function (e) {
                var i = 6 !== d ? e : e > t[a].slots / 2 ? t[a].slots - e : e;
                R.add(punchgs.TweenLite.to(this, I, {
                    transformPerspective: 600,
                    force3D: "auto",
                    top: 1 !== n ? t[a].height : -t[a].height,
                    opacity: .75,
                    rotation: t[a].rotate,
                    ease: g,
                    delay: (5 !== d ? i : t[a].slots - i) * (I / t[a].slots) / (6 === d ? 1.3 : 1)
                }), 0), t[a].mtl.add(R, 0)
            }), t[a].pr_next_bg.find(".slotslide").each(function (e) {
                var i = 6 !== d ? e : e > t[a].slots / 2 ? t[a].slots - e : e;
                R.add(punchgs.TweenLite.from(this, I, {
                    top: 1 == n ? t[a].height : -t[a].height,
                    opacity: .75,
                    rotation: t[a].rotate,
                    force3D: "auto",
                    ease: punchgs.eo,
                    delay: (5 !== d ? i : t[a].slots - i) * (I / t[a].slots) / (6 === d ? 1.3 : 1)
                }), 0), t[a].mtl.add(R, 0)
            })
        } else if (7 == d || 8 == d) p = Math.min(t[a].duration || p, p), t[a].pr_active_bg.find(".slotslide").each(function (e) {
            var i = e > t[a].slots / 2 ? t[a].slots - e : e;
            t[a].mtl.add(punchgs.TweenLite.to(this.getElementsByTagName("div"), p / 1e3, {
                x: 8 === d && 0 === l.trC ? 0 : i * t[a].slotw / 3,
                y: 8 === d && 0 === l.trC ? i * t[a].sloth / 3 : 0,
                ease: g,
                transformPerspective: 600,
                force3D: "auto",
                filter: "blur(2px)",
                scale: 1.2,
                opacity: 0
            }), 0)
        }), t[a].pr_next_bg.find(".slotslide").each(function (e) {
            var i = e > t[a].slots / 2 ? t[a].slots - e : e;
            t[a].mtl.add(punchgs.TweenLite.fromTo(this.getElementsByTagName("div"), p / 1e3, {
                x: 8 === d && 0 === l.trC ? 0 : 0 - i * t[a].slotw / 3,
                y: 8 === d && 0 === l.trC ? 0 - i * t[a].sloth / 3 : 0,
                filter: "blur(2px)",
                opacity: 0,
                transformPerspective: 600,
                scale: 1.2
            }, {x: 0, y: 0, ease: f, force3D: "auto", scale: 1, filter: "blur(0px)", opacity: 1, rotation: 0}), 0)
        }); else if (9 == d || 10 == d) {
            var S = t[a].pr_next_bg[0].getElementsByClassName("slotslide"), A = p - p / 1.8;
            for (k = 0; k < S.length; k++) t[a].mtl.add(punchgs.TweenLite.fromTo(S[k], (p - k * (A / t[a].slots)) / 1e3, {
                opacity: 0,
                force3D: "auto",
                transformPerspective: 600
            }, {opacity: 1, ease: "Linear.easeNone", delay: k * (A / t[a].slots) / 1e3}), 0)
        } else if (11 == d) {
            l.trC = Math.min(12, l.trC);
            var z = 2 == l.trC ? "#000000" : 3 == l.trC ? "#ffffff" : "transparent";
            switch (l.trC) {
                case 0:
                    t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg, p / 1e3, {autoAlpha: 0}, {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: g
                    }), 0);
                    break;
                case 1:
                    t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg, p / 1e3, {autoAlpha: 0}, {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: g
                    }), 0), t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg, p / 1e3, {autoAlpha: 1}, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: g
                    }), 0);
                    break;
                case 2:
                case 3:
                case 4:
                    t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.parent(), {
                        backgroundColor: z,
                        force3D: "auto"
                    }), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.parent(), {
                        backgroundColor: "transparent",
                        force3D: "auto"
                    }), 0), t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg, p / 2e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: g
                    }), 0), t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg, p / 2e3, {autoAlpha: 0}, {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: g
                    }), p / 2e3);
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    var O = "blur(" + (jQuery.inArray(l.trC, [9, 10]) >= 0 ? 5 : jQuery.inArray(l.trC, [11, 12]) >= 0 ? 10 : 0) + "px) grayscale(" + (jQuery.inArray(l.trC, [5, 6, 7, 8]) >= 0 ? 100 : 0) + "%) brightness(" + (jQuery.inArray(l.trC, [7, 8]) >= 0 ? 300 : 0) + "%)",
                        M = "blur(0px) grayscale(0%) brightness(100%)";
                    t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg, p / 1e3, {
                        autoAlpha: 0,
                        filter: O,
                        "-webkit-filter": O
                    }, {
                        autoAlpha: 1,
                        filter: M,
                        "-webkit-filter": M,
                        force3D: "auto",
                        ease: g
                    }), 0), jQuery.inArray(l.trC, [6, 8, 10]) >= 0 && t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg, p / 1e3, {
                        autoAlpha: 1,
                        filter: M,
                        "-webkit-filter": M
                    }, {autoAlpha: 0, force3D: "auto", ease: g, filter: O, "-webkit-filter": O}), 0)
            }
            t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"), {autoAlpha: 1}), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"), {autoAlpha: 1}), 0)
        } else if (12 == d || 13 == d || 14 == d || 15 == d) {
            var C = 3 == l.trC ? p / 1300 : p / 1e3, P = p / 1e3, j = 5 == l.trC || 6 == l.trC ? 0 : t[a].width,
                Q = 5 == l.trC || 6 == l.trC ? 0 : t[a].currentSlideHeight, H = 12 == d ? j : 15 == d ? 0 - j : 0,
                N = 13 == d ? 5 == l.trC || 6 == l.trC ? 0 : t[a].height : 14 == d ? 5 == l.trC || 6 == l.trC ? 0 : 0 - t[a].height : 0,
                B = 1 == l.trC || 2 == l.trC || 5 == l.trC || 6 == l.trC ? 0 : 1,
                D = 4 == l.trC || 5 == l.trC ? .6 : 6 == l.trC ? 1.4 : 1, W = 5 == l.trC ? 1.4 : 6 == l.trC ? .6 : 1;
            if (7 != l.trC && 4 != l.trC || (j = 0, Q = 0), 8 == l.trC ? (t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide, {zIndex: 20}), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide, {zIndex: 15}), 0), t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_next_bg, .01, {
                overflow: "hidden",
                left: 0,
                top: 0,
                x: 0,
                y: 0,
                scale: 1,
                autoAlpha: 1,
                rotation: 0,
                overwrite: !0,
                immediateRender: !0,
                force3D: "auto"
            }), 0)) : (t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide, {zIndex: 15}), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide, {zIndex: 20}), 0), t[a].mtl.add(punchgs.TweenLite.from(t[a].pr_next_bg, C, {
                left: H,
                top: N,
                overflow: "hidden",
                scale: W,
                autoAlpha: B,
                rotation: t[a].rotate,
                ease: g,
                force3D: "auto"
            }), 0)), 1 != l.trC) switch (d) {
                case 12:
                    t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg, P, {
                        left: 0 - j + "px",
                        overflow: "hidden",
                        force3D: "auto",
                        scale: D,
                        autoAlpha: B,
                        rotation: t[a].rotate,
                        ease: f
                    }), 0);
                    break;
                case 15:
                    t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg, P, {
                        left: j + "px",
                        overflow: "hidden",
                        force3D: "auto",
                        scale: D,
                        autoAlpha: B,
                        rotation: t[a].rotate,
                        ease: f
                    }), 0);
                    break;
                case 13:
                    t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg, P, {
                        top: 0 - Q + "px",
                        overflow: "hidden",
                        force3D: "auto",
                        scale: D,
                        autoAlpha: B,
                        rotation: t[a].rotate,
                        ease: f
                    }), 0);
                    break;
                case 14:
                    t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg, P, {
                        top: Q + "px",
                        overflow: "hidden",
                        force3D: "auto",
                        scale: D,
                        autoAlpha: B,
                        rotation: t[a].rotate,
                        ease: f
                    }), 0)
            }
        } else if (16 == d) {
            var Y = 1 === n ? "80% 50% 0" : "20%  50% 0";
            t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide, {zIndex: 20}), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide, {zIndex: 15}), 0), t[a].pr_active_bg.find(".slotslide").each(function (e) {
                t[a].mtl.add(punchgs.TweenLite.fromTo(this, p / 1e3, {
                    left: 0,
                    rotationZ: 0,
                    opacity: 1,
                    top: 0,
                    z: 0,
                    scale: 1
                }, {
                    opacity: 1,
                    left: 1 === n ? 0 == e ? -t[a].width / 1.6 : -t[a].width / 1.8 : 0 === e ? t[a].width / 1.6 : t[a].width / 1.8,
                    rotationZ: 1 === n ? 0 === e ? -35 : 25 : 0 === e ? 25 : -35,
                    z: 0,
                    top: 0 == e ? "-120%" : "140%",
                    scale: .8,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: Y,
                    delay: 0,
                    ease: g
                }), 0), t[a].mtl.add(punchgs.TweenLite.fromTo(this, p / 2e3, {opacity: 1}, {
                    opacity: 0,
                    delay: p / 2e3
                }), 0)
            }), t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg, p / 1e3 - p / 7e3, {
                x: 100 * Math.random() - 50,
                opacity: 1,
                scale: .9,
                rotationZ: 10 * Math.random() - 5
            }, {x: 0, opacity: 1, scale: 1, rotationZ: 0, ease: g, force3D: "auto", delay: p / 7e3}), 0)
        } else if (17 == d || 18 == d) t[a].pr_next_bg.find(".slotslide").each(function (e) {
            t[a].mtl.add(punchgs.TweenLite.fromTo(this, p / t[a].slots / 1e3, {
                opacity: 0,
                top: 0,
                left: 0,
                rotationY: 17 === d ? 0 : 90,
                scale: 1,
                rotationX: 17 === d ? -90 : 0,
                force3D: "auto",
                transformPerspective: 600,
                transformOrigin: 17 === d ? "top center" : "center left"
            }, {
                opacity: 1,
                top: 0,
                left: 0,
                rotationX: 0,
                rotationY: 0,
                force3D: "auto",
                ease: f,
                delay: e * (p / t[a].slots / 2e3)
            }), 0)
        }), t[a].pr_active_bg.find(".slotslide").each(function (e) {
            t[a].mtl.add(punchgs.TweenLite.fromTo(this, p / t[a].slots / 1e3, {
                opacity: 1,
                rotationY: 0,
                scale: 1,
                rotationX: 0,
                force3D: "auto",
                transformPerspective: 600,
                transformOrigin: 17 === d ? "bottom center" : "center right"
            }, {
                opacity: 0,
                rotationX: 17 === d ? 110 : 0,
                rotationY: 17 === d ? 0 : 110,
                force3D: "auto",
                ease: g,
                delay: e * (p / t[a].slots / 2e3)
            }), 0)
        }); else if (19 == d || 22 == d || 23 == d || 24 == d) {
            t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_slide, {zIndex: 20}), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_slide, {zIndex: 10}), 0);
            Y = 19 === d ? "center center -" + t[a].height / 2 : 22 === d ? "center center " + t[a].height / 2 : 23 === d ? "center center -" + t[a].width / 2 : "center center " + t[a].width / 2;
            punchgs.TweenLite.set(t[a].c, {
                transformStyle: "flat",
                backfaceVisibility: "hidden",
                transformPerspective: 600
            }), t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg, p / 1e3, {
                rotationX: 19 == d || 22 === d ? 1 == n ? -90 : 90 : 0,
                rotationY: 23 == d || 24 === d ? 1 == n ? -90 : 90 : 0,
                left: 0,
                top: 0,
                scale: 1,
                x: 0,
                y: 0,
                overflow: "hidden",
                autoAlpha: 1,
                transformStyle: "flat",
                backfaceVisibility: "hidden",
                force3D: "auto",
                transformPerspective: 1200,
                transformOrigin: Y
            }, {
                overflow: "hidden",
                left: 0,
                autoAlpha: 1,
                rotationX: 0,
                rotationY: 0,
                top: 0,
                scale: 1,
                delay: 0,
                ease: g,
                transformStyle: "flat",
                backfaceVisibility: "hidden",
                force3D: "auto",
                transformPerspective: 1200,
                transformOrigin: Y
            }), 0), t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg, p / 2e3, {z: 19 == d || 23 === d ? -200 : 0}, {
                z: 19 === d || 23 === d ? 0 : -200,
                ease: "Power3.easeInOut",
                delay: 19 === d || 23 === d ? p / 2e3 : 0
            }), 0), 22 !== d && 24 !== d || t[a].mtl.add(punchgs.TweenLite.fromTo([t[a].pr_active_bg, t[a].pr_next_bg], p / 2e3, {z: -200}, {
                z: 0,
                ease: "Power2.easeIn",
                delay: p / 2e3
            }), 0), t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg, p / 2e3, {z: 0}, {
                z: -200,
                ease: "Power3.easeInOut",
                delay: 0,
                force3D: "auto"
            }), 0), 19 !== d && 23 !== d || t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg, p / 2e3, {autoAlpha: 1}, {
                autoAlpha: 0,
                ease: "LinearEase.none",
                delay: p / 2e3,
                force3D: "auto"
            }), 0), t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg, p / 1e3, {
                overflow: "hidden",
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                top: 0,
                left: 0,
                scale: 1,
                transformStyle: "flat",
                backfaceVisibility: "hidden",
                force3D: "auto",
                transformPerspective: 1200,
                transformOrigin: Y
            }, {
                rotationX: 19 === d || 22 === d ? 1 == n ? 90 : -90 : 0,
                rotationY: 23 === d || 24 === d ? 1 == n ? 90 : -90 : 0,
                overflow: "hidden",
                top: 0,
                scale: 1,
                delay: 0,
                force3D: "auto",
                ease: g,
                transformStyle: "flat",
                backfaceVisibility: "hidden",
                transformPerspective: 1200,
                transformOrigin: Y
            }), 0)
        } else if (20 == d) {
            Y = 1 === n ? "20% " : "80% ";
            Y += "60% -50%", t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg, p / 1e3, {
                left: 1 === n ? -t[a].width : t[a].width,
                rotationX: 20,
                z: -t[a].width,
                autoAlpha: 0,
                top: 0,
                scale: 1,
                force3D: "auto",
                transformPerspective: 600,
                transformOrigin: Y,
                rotationY: 1 === n ? 50 : -50
            }, {
                left: 0,
                rotationX: 0,
                autoAlpha: 1,
                top: 0,
                z: 0,
                scale: 1,
                rotationY: 0,
                delay: 0,
                ease: g
            }), 0), Y = 1 != n ? "20% " : "80% ", Y += "60% -50%", t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg, p / 1e3, {
                autoAlpha: 1,
                rotationX: 0,
                top: 0,
                z: 0,
                scale: 1,
                left: 0,
                force3D: "auto",
                transformPerspective: 600,
                transformOrigin: Y,
                rotationY: 0
            }, {
                autoAlpha: 1,
                rotationX: 20,
                top: 0,
                z: -t[a].width,
                left: 1 != n ? -t[a].width / 1.2 : t[a].width / 1.2,
                force3D: "auto",
                rotationY: 1 === n ? -50 : 50,
                delay: 0,
                ease: "Power2.easeInOut"
            }), 0)
        } else if (21 == d || 25 == d) {
            var F = 25 === d ? t[a].rotate : 1 === n ? 90 : -90, V = 25 === d ? 1 === n ? -90 : 90 : t[a].rotate;
            Y = 1 === n ? 25 === d ? "center top 0" : "left center 0" : 25 === d ? "center bottom 0" : "right center 0";
            t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg, p / 1e3, {
                transformStyle: "flat",
                rotationX: V,
                top: 0,
                left: 0,
                autoAlpha: 0,
                force3D: "auto",
                transformPerspective: 1200,
                transformOrigin: Y,
                rotationY: F
            }, {
                autoAlpha: 1,
                rotationX: 0,
                rotationY: 0,
                ease: g
            }), 0), Y = 1 === n ? 25 === d ? "center bottom 0" : "right center 0" : 25 === d ? "center top 0" : "left center 0", F = 25 !== d ? -F : F, V = 25 !== d ? V : -V, t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg, p / 1e3, {
                rotationX: 0,
                rotationY: 0,
                transformStyle: "flat",
                transformPerspective: 1200,
                force3D: "auto"
            }, {immediateRender: !0, rotationX: V, transformOrigin: Y, rotationY: F, ease: f}), 0)
        } else if (26 == d) p = 0, t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg, .001, {autoAlpha: 0}, {
            autoAlpha: 1,
            force3D: "auto",
            ease: g
        }), 0), t[a].mtl.add(punchgs.TweenLite.to(t[a].pr_active_bg, .001, {
            autoAlpha: 0,
            force3D: "auto",
            ease: g
        }), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_next_bg.find("rs-sbg"), {autoAlpha: 1}), 0), t[a].mtl.add(punchgs.TweenLite.set(t[a].pr_active_bg.find("rs-sbg"), {autoAlpha: 1}), 0); else if (27 == d || 28 == d || 29 == d || 30 == d) {
            var E = t[a].pr_next_bg.find(".slot"), X = 27 == d || 29 == d ? "-100%" : "+100%",
                Z = 27 == d || 29 == d ? "+100%" : "-100%", q = 27 == d || 29 == d ? "-80%" : "80%",
                G = 27 == d || 29 == d ? "+80%" : "-80%", U = 27 == d || 29 == d ? "+10%" : "-10%",
                J = {overwrite: "all"}, K = {autoAlpha: 0, zIndex: 1, force3D: "auto", ease: g},
                $ = {position: "inherit", autoAlpha: 0, overwrite: "all", zIndex: 1},
                ee = {autoAlpha: 1, force3D: "auto", ease: f},
                te = {overwrite: "all", zIndex: 2, opacity: 1, autoAlpha: 1},
                ie = {autoAlpha: 1, force3D: "auto", overwrite: "all", ease: g},
                ae = {overwrite: "all", zIndex: 2, autoAlpha: 1}, re = {autoAlpha: 1, force3D: "auto", ease: g},
                oe = 1 == (27 == d || 28 == d ? 1 : 2) ? "y" : "x";
            J[oe] = "0px", K[oe] = X, $[oe] = U, ee[oe] = "0%", te[oe] = Z, ie[oe] = X, ae[oe] = q, re[oe] = G, E.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'), t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_active_bg, p / 1e3, J, K), 0), t[a].mtl.add(punchgs.TweenLite.fromTo(t[a].pr_next_bg.find("rs-sbg"), p / 2e3, $, ee), p / 2e3), t[a].mtl.add(punchgs.TweenLite.fromTo(E, p / 1e3, te, ie), 0), t[a].mtl.add(punchgs.TweenLite.fromTo(E.find(".slotslide div"), p / 1e3, ae, re), 0)
        }
    }, r = function (e, t, i, a, r) {
        var o = a / r, s = t / i, n = t, l = i;
        return (e ? o > s : o < s) ? l = n / o : n = l * o, {width: n, height: l, x: (t - n) / 2, y: (i - l) / 2}
    }, o = function (e) {
        e.ctx.save(), e.ctx.beginPath(), e.ctx.moveTo(e.poly[0][0], e.poly[0][1]);
        for (var t = 1; t < e.poly.length; t++) e.ctx.lineTo(e.poly[t][0], e.poly[t][1]);
        e.ctx.closePath(), e.ctx.lineWidth = 2, e.ctx.stroke(), e.ctx.clip(), void 0 !== e.bg.img && e.ctx.drawImage(e.bg.img, e.bg.offsetx, e.bg.offsety, e.bg.width, e.bg.height), "transparent" !== e.bg.col && void 0 !== e.bg.col && (e.ctx.fillStyle = e.bg.col, e.ctx.fillRect(e.bg.offsetx, e.bg.offsety, e.bg.width, e.bg.height)), void 0 !== e.bg.overlay && (e.ctx.fillStyle = e.bg.overlay, e.ctx.fillRect(e.bg.offsetx, e.bg.offsety, e.bg.width, e.bg.height)), e.ctx.restore()
    }, s = function (e, i, a, r) {
        var o = e.find("rs-sbg"), s = o.data("mediafilter"), n = e.data("zoomstart"), l = e.data("rotationstart");
        null != o.data("currotate") && (l = o.data("currotate")), null != o.data("curscale") && "box" == r ? n = 100 * o.data("curscale") : null != o.data("curscale") && (n = o.data("curscale")), function (e, i) {
            t[i].slotw = Math.ceil(t[i].width / t[i].slots), "fullscreen" == t[i].sliderLayout ? t[i].sloth = Math.ceil(jQuery(window).height() / t[i].slots) : t[i].sloth = Math.ceil(t[i].height / t[i].slots), t[i].autoHeight && void 0 !== e && "" !== e && (t[i].sloth = Math.ceil(e.height() / t[i].slots))
        }(o, i);
        var d = void 0 !== o[0] && void 0 !== o[0].dataset && void 0 !== o[0].dataset.lazyload ? o[0].dataset.lazyload : o.attr("src"),
            c = t[i].width, p = t[i].autoHeight ? t[i].c.height() : t[i].height, u = o.data("fxof"), h = 0,
            g = e.data("bgcolor") || o.css("backgroundColor"), f = e.data("bgfit") || "cover",
            m = e.data("bgrepeat") || "no-repeat", v = e.data("bgposition") || "center center",
            y = void 0 !== g && g.indexOf("gradient") >= 0 ? "background:" + g : "background-color:" + g + ";background-image:url(" + d + ");background-repeat:" + m + ";background-size:" + f + ";background-position:" + v,
            b = "";
        if (u = null == u ? 0 : u, e.find(".slot").each(function () {
            jQuery(this).remove()
        }), "box" === r) for (var w = 0, _ = 0, x = 0; x < t[i].slots; x++) {
            _ = 0;
            for (var k = 0; k < t[i].slots; k++) b += '<div class="slot" style="' + (null != n && null != l ? "transform:rotateZ(" + l + "deg)" : "") + ";position:absolute;overflow:hidden;top:" + (0 + _) + "px;left:" + (u + w) + "px;width:" + t[i].slotw + "px;height:" + t[i].sloth + 'px;"><div class="slotslide ' + s + '" data-x="' + w + '" data-y="' + _ + '" style="position:absolute;top:0px;left:0px;width:' + t[i].slotw + "px;height:" + t[i].sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - _) + "px;left:" + (0 - w) + "px;width:" + c + "px;height:" + p + "px;" + y + ';"></div></div></div>', _ += t[i].sloth;
            w += t[i].slotw
        } else if ("horizontal" === r) {
            if (!a) h = 0 - t[i].slotw;
            for (k = 0; k < t[i].slots; k++) b += '<div class="slot" style="' + (null != n && null != l ? "transform:rotateZ(" + l + "deg)" : "") + ";position:absolute;overflow:hidden;top:0px;left:" + (u + k * t[i].slotw) + "px;width:" + (t[i].slotw + .3) + "px;height:" + p + 'px"><div class="slotslide ' + s + '" style="position:absolute;top:0px;left:' + h + "px;width:" + (t[i].slotw + .6) + "px;height:" + p + 'px;overflow:hidden;"><div style="position:absolute;top:0px;left:' + (0 - k * t[i].slotw) + "px;width:" + c + "px;height:" + p + "px;" + y + ';"></div></div></div>'
        }
        if ("vertical" === r) {
            if (!a) h = 0 - t[i].sloth;
            for (k = 0; k < t[i].slots; k++) b += '<div class="slot" style="' + (null != n && null != l ? "transform:rotateZ(" + l + "deg)" : "") + ";position:absolute;overflow:hidden;top:" + (0 + k * t[i].sloth) + "px;left:" + u + "px;width:" + c + "px;height:" + t[i].sloth + 'px"><div class="slotslide ' + s + '" style="position:absolute;top:' + h + "px;left:0px;width:" + c + "px;height:" + t[i].sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - k * t[i].sloth) + "px;left:0px;width:" + c + "px;height:" + p + "px;" + y + ';"></div></div></div>'
        }
        e.append(b)
    }
}(jQuery), function (e) {
    "use strict";
    var t = jQuery.fn.revolution, i = t.is_mobile();
    t.is_android();

    function a(e) {
        return null == e ? -1 : jQuery.isNumeric(e) ? e : e.split(":").length > 1 ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0) : e
    }

    jQuery.extend(!0, t, {
        preLoadAudio: function (e, i) {
            t[i].videos = void 0 === t[i].videos ? {} : t[i].videos, e.find(".rs-layer-audio").each(function () {
                var e = jQuery(this),
                    a = t[i].videos[e[0].id] = void 0 === t[i].videos[e[0].id] ? y(e.data(), "audio") : t[i].videos[e[0].id],
                    r = {};
                0 === e.find("audio").length && (r.src = null != a.mp4 ? a.mp4 : "", r.pre = a.pload || "", this.id = void 0 === this.id || "" === this.id ? e.attr("audio-layer-" + Math.round(199999 * Math.random())) : this.id, r.id = this.id, r.status = "prepared", r.start = jQuery.now(), r.waittime = void 0 !== a.ploadwait ? 1e3 * a.ploadwait : 5e3, "auto" != r.pre && "canplaythrough" != r.pre && "canplay" != r.pre && "progress" != r.pre || (void 0 === t[i].audioqueue && (t[i].audioqueue = []), t[i].audioqueue.push(r), t.manageVideoLayer(e, i)))
            })
        }, preLoadAudioDone: function (e, i, a) {
            var r = t[i].videos[e[0].id];
            t[i].audioqueue && t[i].audioqueue.length > 0 && jQuery.each(t[i].audioqueue, function (e, t) {
                r.mp4 !== t.src || t.pre !== a && "auto" !== t.pre || (t.status = "loaded")
            })
        }, resetVideo: function (e, a, r, o) {
            var s = t[a].videos[e[0].id];
            switch (s.type) {
                case"youtube":
                    s.rwd && null != s.player && void 0 !== s.player.seekTo && (s.player.seekTo(-1 == s.ssec ? 0 : s.ssec), s.player.pauseVideo()), 0 != e.find("rs-poster").length || s.bgvideo || "preset" === r || punchgs.TweenLite.to(e.find("iframe"), .3, {
                        opacity: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    });
                    break;
                case"vimeo":
                    void 0 !== s.vimeoplayer && !o && s.rwd && (0 !== s.ssec && -1 !== s.ssec || s.bgvideo || e.find("rs-poster").length > 0) && (s.vimeoplayer.setCurrentTime(-1 == s.ssec ? 0 : s.ssec), s.vimeoplayer.pause()), 0 != e.find("rs-poster").length || s.bgvideo || "preset" === r || punchgs.TweenLite.to(e.find("iframe"), .3, {
                        opacity: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    });
                    break;
                case"html5":
                    if (i && s.notonmobile) return !1;
                    punchgs.TweenLite.to(s.jvideo, .3, {
                        opacity: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut
                    }), !s.rwd || e.hasClass("videoisplaying") || isNaN(s.video.duration) || (s.video.currentTime = -1 == s.ssec ? 0 : s.ssec), ("mute" == s.volume || t.lastToggleState(e.videomutetoggledby) || !0 === t[a].globalmute) && (s.video.muted = !0)
            }
        }, Mute: function (e, i, a) {
            var r = !1, o = t[i].videos[e[0].id];
            switch (o.type) {
                case"youtube":
                    o.player && (!0 === a && o.player.mute(), !1 === a && l(o, parseInt(o.volcache, 0)), r = o.player.isMuted());
                    break;
                case"vimeo":
                    o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.volume = !0 === a ? "mute" : !1 === a ? o.volcache : o.volume, void 0 !== a && null != o.vimeoplayer && n(o, !0 === a ? 0 : o.volcache), r = "mute" == o.volume || 0 === o.volume;
                    break;
                case"html5":
                    o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.video.volume = o.volcache, void 0 !== a && o.video && (o.video.muted = a), r = void 0 !== o.video ? o.video.muted : r
            }
            if (void 0 === a) return r
        }, stopVideo: function (e, i) {
            if (void 0 !== t[i] && void 0 !== t[i]) {
                var a = t[i].videos[e[0].id];
                if (void 0 !== a) switch (t[i].leaveViewPortBasedStop || (t[i].lastplayedvideos = []), t[i].leaveViewPortBasedStop = !1, a.type) {
                    case"youtube":
                        if (void 0 === a.player || 2 === a.player.getPlayerState() || 5 === a.player.getPlayerState()) return;
                        a.player.pauseVideo(), a.youtubepausecalled = !0, setTimeout(function () {
                            a.youtubepausecalled = !1
                        }, 80);
                        break;
                    case"vimeo":
                        if (void 0 === a.vimeoplayer) return;
                        a.vimeoplayer.pause(), a.vimeopausecalled = !0, setTimeout(function () {
                            a.vimeopausecalled = !1
                        }, 80);
                        break;
                    case"html5":
                        a.video && a.video.pause()
                }
            }
        }, playVideo: function (e, i) {
            var a = t[i].videos[e[0].id];
            switch (clearTimeout(a.videoplaywait), a.type) {
                case"youtube":
                    if (0 == e.find("iframe").length) e.append(a.videomarkup), h(e, i, !0); else if (null != a.player.playVideo) {
                        var o = a.player.getCurrentTime();
                        a.nseTriggered && (o = -1, a.nseTriggered = !1), -1 != a.ssec && a.ssec > o && a.player.seekTo(a.ssec), !0 !== a.youtubepausecalled && p(a)
                    } else a.videoplaywait = setTimeout(function () {
                        !0 !== a.youtubepausecalled && t.playVideo(e, i)
                    }, 50);
                    break;
                case"vimeo":
                    0 == e.find("iframe").length ? (delete a.vimeoplayer, e.append(a.videomarkup), h(e, i, !0)) : e.hasClass("rs-apiready") ? (a.vimeoplayer = null == a.vimeoplayer ? new Vimeo.Player(e.find("iframe").attr("id")) : a.vimeoplayer, a.vimeoplayer.getPaused() ? setTimeout(function () {
                        var r = void 0 === a.currenttime ? 0 : a.currenttime;
                        a.nseTriggered && (r = -1, a.nseTriggered = !1), -1 != a.ssec && a.ssec > r && a.vimeoplayer.setCurrentTime(a.ssec), ("mute" == a.volume || 0 === a.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[i].globalmute) && (a.volumetoken = !0, a.vimeoplayer.setVolume(0)), c(a.vimeoplayer)
                    }, 510) : a.videoplaywait = setTimeout(function () {
                        !0 !== a.vimeopausecalled && t.playVideo(e, i)
                    }, 50)) : a.videoplaywait = setTimeout(function () {
                        !0 !== a.vimeopausecalled && t.playVideo(e, i)
                    }, 100);
                    break;
                case"html5":
                    if (a.metaloaded) {
                        d(a.video);
                        o = a.video.currentTime;
                        a.nseTriggered && (o = -1, a.nseTriggered = !1), -1 != a.ssec && a.ssec > o && (a.video.currentTime = a.ssec)
                    } else r(a.video, "loadedmetadata", function (e) {
                        t.resetVideo(e, i), a.video.play();
                        var r = a.video.currentTime;
                        a.nseTriggered && (r = -1, a.nseTriggered = !1), -1 != a.ssec && a.ssec > r && (a.video.currentTime = a.ssec)
                    }(e))
            }
        }, isVideoPlaying: function (e, i) {
            var a = !1;
            return null != t[i].playingvideos && jQuery.each(t[i].playingvideos, function (t, i) {
                e.attr("id") == i.attr("id") && (a = !0)
            }), a
        }, removeMediaFromList: function (e, t) {
            w(e, t)
        }, prepareCoveredVideo: function (e, i) {
            var a = t[e].videos[i[0].id];
            if (t.updateDimensions(e), void 0 === a.vimeoid || void 0 !== a.vimeoplayerloaded) {
                if (a.ifr = i.find("iframe, video"), a.vd = a.ratio.split(":").length > 1 ? a.ratio.split(":")[0] / a.ratio.split(":")[1] : 1, 0 === t[e].conw || 0 === t[e].conh) return t.setSize(e), clearTimeout(a.resizelistener), void (a.resizelistener = setTimeout(function () {
                    t.prepareCoveredVideo(e, i)
                }, 100));
                var r = t[e].conw / t[e].conh, o = r / a.vd * 100, s = a.vd / r * 100;
                "html5" === a.type && "Edge" !== t.get_browser() && "IE" !== t.get_browser() && (s = 100, o = 100), "Edge" === t.get_browser() ? r > a.vd ? punchgs.TweenLite.set(a.ifr, {
                    minWidth: "100%",
                    height: o + "%",
                    x: "-50%",
                    y: "-50%",
                    top: "50%",
                    left: "50%",
                    position: "absolute"
                }) : punchgs.TweenLite.set(a.ifr, {
                    minHeight: "100%",
                    width: s + "%",
                    x: "-50%",
                    y: "-50%",
                    top: "50%",
                    left: "50%",
                    position: "absolute"
                }) : r > a.vd ? punchgs.TweenLite.set(a.ifr, {
                    height: o + "%",
                    width: "100%",
                    top: -(o - 100) / 2 + "%",
                    left: "0px",
                    position: "absolute"
                }) : punchgs.TweenLite.set(a.ifr, {
                    width: s + "%",
                    height: "100%",
                    left: -(s - 100) / 2 + "%",
                    top: "0px",
                    position: "absolute"
                }), a.ifr.hasClass("resizelistener") || (a.ifr.addClass("resizelistener"), jQuery(window).resize(function () {
                    t.prepareCoveredVideo(e, i), clearTimeout(a.resizelistener), a.resizelistener = setTimeout(function () {
                        t.prepareCoveredVideo(e, i)
                    }, 90)
                }))
            }
        }, checkVideoApis: function (e, i) {
            location.protocol;
            if (!t[i].youtubeapineeded && ((null != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (t[i].youtubeapineeded = !0), t[i].youtubeapineeded && !window.rs_addedyt)) {
                t[i].youtubestarttime = jQuery.now(), window.rs_addedyt = !0;
                var a = document.createElement("script"), r = document.getElementsByTagName("script")[0], o = !0;
                a.src = "https://www.youtube.com/iframe_api", jQuery("head").find("*").each(function () {
                    "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (o = !1)
                }), o && r.parentNode.insertBefore(a, r)
            }
            if (!t[i].vimeoapineeded && ((null != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (t[i].vimeoapineeded = !0), t[i].vimeoapineeded && !window.rs_addedvim)) {
                t[i].vimeostarttime = jQuery.now(), window.rs_addedvim = !0;
                var s = document.createElement("script");
                r = document.getElementsByTagName("script")[0], o = !0;
                s.src = "https://player.vimeo.com/api/player.js", jQuery("head").find("*").each(function () {
                    "https://player.vimeo.com/api/player.js" == jQuery(this).attr("src") && (o = !1)
                }), o && r.parentNode.insertBefore(s, r)
            }
        }, manageVideoLayer: function (e, a) {
            if (!0 === t.gA(e[0], "videoLayerManaged") || "true" === t.gA(e[0], "videoLayerManaged")) return !1;
            t[a].videos = void 0 === t[a].videos ? {} : t[a].videos;
            var o = t[a].videos[e[0].id] = void 0 === t[a].videos[e[0].id] ? y(e.data()) : t[a].videos[e[0].id];
            if (o.audio = void 0 !== o.audio && o.audio, i && o.opom) 0 == e.find("rs-poster").length && e.append('<rs-poster class="noSwipe" style="background-image:url(' + o.poster + ');"></rs-poster>'); else {
                switch (o.id = e[0].id, o.pload = "auto" === o.pload || "canplay" === o.pload || "canplaythrough" === o.pload || "progress" === o.pload ? "auto" : o.pload, o.type = null != o.mp4 || null != o.webm ? "html5" : null != o.ytid && String(o.ytid).length > 1 ? "youtube" : null != o.vimeoid && String(o.vimeoid).length > 1 ? "vimeo" : "none", o.newtype = "html5" == o.type && 0 == e.find(o.audio ? "audio" : "video").length ? "html5" : "youtube" == o.type && 0 == e.find("iframe").length ? "youtube" : "vimeo" == o.type && 0 == e.find("iframe").length ? "vimeo" : "none", !o.audio && "1sttime" == o.aplay && o.pausetimer && o.bgvideo && e.closest("rs-slide").addClass("rs-pause-timer-once"), o.audio || !o.bgvideo || !o.pausetimer || 1 != o.aplay && "true" != o.aplay && "no1sttime" != o.aplay || e.closest("rs-slide").addClass("rs-pause-timer-always"), o.noInt && e.addClass("rs-nointeraction"), o.newtype) {
                    case"html5":
                        o.audio && e.addClass("rs-audio"), o.tag = o.audio ? "audio" : "video";
                        var s = "video" === o.tag && (t.is_mobile() || t.isSafari11()) ? o.aplay || "true" === o.aplay ? "muted playsinline autoplay" : o.inline ? " playsinline" : "" : "",
                            n = "<" + o.tag + " " + s + " " + (o.controls ? " controls " : "") + ' style="' + ("Edge" !== t.get_browser() ? "object-fit:cover;background-size:cover;opacity:0;width:100%; height:100%" : "") + '" class="" ' + (o.loop ? "loop" : "") + ' preload="' + o.pload + '">';
                        "video" === o.tag && null != o.webm && "firefox" == t.get_browser().toLowerCase() && (n = n + '<source src="' + o.webm + '" type="video/webm" />'), null != o.mp4 && (n = n + '<source src="' + o.mp4 + '" type="' + ("video" === o.tag ? "video/mp4" : "audio/mpeg") + '" />'), null != o.ogv && (n = n + '<source src="' + o.mp4 + '" type="' + o.tag + '/ogg" />'), n += "</" + o.tag + ">", o.videomarkup = n, i && o.notonmobile || t.isIE(8) || e.append(n), e.find(o.tag).parent().hasClass("html5vid") || e.find(o.tag).wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'), o.jvideo = e.find(o.tag), o.video = o.jvideo[0], o.html5vid = o.jvideo.parent(), o.metaloaded || r(o.video, "loadedmetadata", function (e) {
                            m(e, a), t.resetVideo(e, a)
                        }(e));
                        break;
                    case"youtube":
                        o.controls || (o.vatr = o.vatr.replace("controls=1", "controls=0"), -1 == o.vatr.toLowerCase().indexOf("controls") && (o.vatr = o.vatr + "&controls=0")), (o.inline || "RS-BGVIDEO" === e[0].tagName) && (o.vatr = o.vatr + "&playsinline=1"), -1 != o.ssec && (o.vatr += "&start=" + o.ssec), -1 != o.esec && (o.vatr += "&end=" + o.esec);
                        var l = o.vatr.split("origin=https://");
                        o.vatrnew = l.length > 1 ? l[0] + "origin=https://" + (self.location.href.match(/www/gi) && !l[1].match(/www/gi) ? "www." + l[1] : l[1]) : o.vatr, o.videomarkup = '<iframe allow="autoplay; fullscreen" type="text/html" src="https://www.youtube-nocookie.com/embed/' + o.ytid + "?" + o.vatrnew + '" ' + (!0 === o.afs ? "allowfullscreen" : "") + ' width="100%" height="100%" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>';
                        break;
                    case"vimeo":
                        o.controls ? (o.vatr = o.vatr.replace("background=0", "background=1"), -1 == o.vatr.toLowerCase().indexOf("background") && (o.vatr = o.vatr + "&background=1")) : (o.vatr = o.vatr.replace("background=1", "background=0"), -1 == o.vatr.toLowerCase().indexOf("background") && (o.vatr = o.vatr + "&background=0")), o.vatr = "autoplay=" + (!0 === o.aplay ? 1 : 0) + "&" + o.vatr, i && (o.vatr = "muted=1&" + o.vatr), o.loop && (o.vatr = "loop=1&" + o.vatr), o.videomarkup = '<iframe  allow="autoplay; fullscreen" src="https://player.vimeo.com/video/' + o.vimeoid + "?" + o.vatr + '" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:visible;100%;height:100%"></iframe>'
                }
                if (!(null != o.poster && o.poster.length > 2) || i && o.npom) {
                    if (i && o.notonmobile) return !1;
                    0 != e.find("iframe").length || "youtube" != o.type && "vimeo" != o.type || (delete o.vimeoplayer, e.append(o.videomarkup), h(e, a, !1))
                } else 0 == e.find("rs-poster").length && e.append('<rs-poster class="noSwipe" style="background-image:url(' + o.poster + ');"></rs-poster>'), 0 == e.find("iframe").length && e.find("rs-poster").click(function () {
                    if (t.playVideo(e, a), i) {
                        if (o.notonmobile) return !1;
                        punchgs.TweenLite.to(e.find("rs-poster"), .3, {
                            opacity: 0,
                            visibility: "hidden",
                            force3D: "auto",
                            ease: punchgs.Power3.easeInOut
                        }), punchgs.TweenLite.to(e.find("iframe"), .3, {
                            opacity: 1,
                            display: "block",
                            ease: punchgs.Power3.easeInOut
                        })
                    }
                });
                "none" !== o.doverlay && void 0 !== o.doverlay && (o.bgvideo ? 1 != e.closest("rs-sbg-wrap").find("rs-dotted").length && e.closest("rs-sbg-wrap").append('<rs-dotted class="' + o.doverlay + '"></rs-dotted>') : 1 != e.find("rs-dotted").length && e.append('<rs-dotted class="' + o.doverlay + '"></rs-dotted>')), t.sA(e[0], "videoLayerManaged", !0), o.bgvideo && punchgs.TweenLite.set(e.find("video, iframe"), {opacity: 0})
            }
        }
    });
    var r = function (e, t, i) {
        e.addEventListener ? e.addEventListener(t, i, {capture: !1, passive: !0}) : e.attachEvent(t, i, {
            capture: !1,
            passive: !0
        })
    }, o = function (e, t, i) {
        var a = {};
        return a.video = e, a.type = t, a.settings = i, a
    }, s = function (e, i) {
        var a = t[e].videos[i[0].id];
        (a.bgvideo || a.fcover) && (a.fcover && i.removeClass("rs-fsv").addClass("coverscreenvideo"), (void 0 === a.ratio || a.ratio.split(":").length <= 1) && (a.ratio = "16:9"), t.prepareCoveredVideo(e, i))
    }, n = function (e, t) {
        var i = e.vimeoplayer;
        i.getPaused().then(function (a) {
            e.volumetoken = !0;
            var r = !a, o = i.setVolume(t);
            void 0 !== o && o.then(function (t) {
                i.getPaused().then(function (t) {
                    r === t && (e.volume = "mute", e.volumetoken = !0, i.setVolume(0), i.play())
                }).catch(function (e) {
                    console.log("Get Paused Function Failed for Vimeo Volume Changes Inside the Promise")
                })
            }).catch(function (t) {
                r && (e.volume = "mute", e.volumetoken = !0, i.setVolume(0), i.play())
            })
        }).catch(function () {
            console.log("Get Paused Function Failed for Vimeo Volume Changes")
        })
    }, l = function (e, t) {
        var i = e.player.getPlayerState();
        "mute" === t ? e.player.mute() : (e.player.unMute(), e.player.setVolume(t)), setTimeout(function () {
            1 === i && 1 !== e.player.getPlayerState() && (e.player.mute(), e.player.playVideo())
        }, 39)
    }, d = function (e) {
        var t = e.play();
        void 0 !== t && t.then(function (e) {
        }).catch(function (t) {
            e.pause()
        })
    }, c = function (e) {
        var t = e.play();
        void 0 !== t && t.then(function (e) {
        }).catch(function (t) {
            _.volumetoken = !0, e.setVolume(0), e.play()
        })
    }, p = function (e) {
        e.player.playVideo(), setTimeout(function () {
            1 !== e.player.getPlayerState() && 3 !== e.player.getPlayerState() && (e.volume = "mute", e.player.mute(), e.player.playVideo())
        }, 39)
    }, u = function (e, i, a) {
        e.vimeostarted = !0, e.nextslidecalled = !1, punchgs.TweenLite.to(i.find("rs-poster"), .3, {
            opacity: 0,
            visibility: "hidden",
            force3D: "auto",
            ease: punchgs.Power3.easeInOut
        }), punchgs.TweenLite.to(i.find("iframe"), .3, {
            opacity: 1,
            display: "block",
            ease: punchgs.Power3.easeInOut
        }), t[a].c.trigger("revolution.slide.onvideoplay", o(e.vimeoplayer, "vimeo", e)), t[a].stopByVideo = e.pausetimer, b(i, a), "mute" == e.volume || 0 === e.volume || t.lastToggleState(i.data("videomutetoggledby")) || !0 === t[a].globalmute ? (e.volumetoken = !0, e.vimeoplayer.setVolume(0)) : n(e, parseInt(e.volcache, 0) / 100 || .75), t.toggleState(e.videotoggledby)
    }, h = function (e, a, r) {
        var n = t[a].videos[e[0].id], d = "iframe" + Math.round(1e5 * Math.random() + 1);
        if (n.ifr = e.find("iframe"), s(a, e), n.ifr.attr("id", d), n.startvideonow = r, n.videolistenerexist) {
            if (r) switch (n.type) {
                case"youtube":
                    p(n), -1 != n.ssec && n.player.seekTo(n.ssec);
                    break;
                case"vimeo":
                    c(n.vimeoplayer), -1 != n.ssec && n.vimeoplayer.seekTo(n.ssec)
            }
        } else switch (n.type) {
            case"youtube":
                n.player = new YT.Player(d, {
                    events: {
                        onStateChange: function (i) {
                            i.data == YT.PlayerState.PLAYING ? (punchgs.TweenLite.to(e.find("rs-poster"), .3, {
                                opacity: 0,
                                visibility: "hidden",
                                force3D: "auto",
                                ease: punchgs.Power3.easeInOut
                            }), punchgs.TweenLite.to(n.ifr, .3, {
                                opacity: 1,
                                display: "block",
                                ease: punchgs.Power3.easeInOut
                            }), "mute" == n.volume || 0 === n.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[a].globalmute ? n.player.mute() : l(n, parseInt(n.volcache, 0) || 75), t[a].stopByVideo = !0, b(e, a), n.pausetimer ? t[a].c.trigger("stoptimer") : t[a].stopByVideo = !1, t[a].c.trigger("revolution.slide.onvideoplay", o(n.player, "youtube", n)), t.toggleState(n.videotoggledby)) : (0 == i.data && n.loop && (-1 != n.ssec && n.player.seekTo(n.ssec), p(n), t.toggleState(n.videotoggledby)), f() || 0 != i.data && 2 != i.data || !(n.scop && e.find("rs-poster").length > 0 || n.bgvideo && e.find(".rs-fullvideo-cover").length > 0) || (n.bgvideo ? punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"), .1, {
                                opacity: 1,
                                force3D: "auto",
                                ease: punchgs.Power3.easeInOut
                            }) : punchgs.TweenLite.to(e.find("rs-poster"), .1, {
                                opacity: 1,
                                visibility: "visible",
                                force3D: "auto",
                                ease: punchgs.Power3.easeInOut
                            }), punchgs.TweenLite.to(n.ifr, .1, {
                                opacity: 0,
                                ease: punchgs.Power3.easeInOut
                            })), -1 != i.data && 3 != i.data && (t[a].stopByVideo = !1, t[a].tonpause = !1, w(e, a), t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.player, "youtube", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)), 0 == i.data && n.nse ? (g(), n.nseTriggered = !0, t[a].c.revnext(), w(e, a)) : (w(e, a), t[a].stopByVideo = !1, 3 !== i.data && (-1 != n.lasteventdata && 3 != n.lasteventdata && void 0 !== n.lasteventdata || -1 != i.data && 3 != i.data) && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.player, "youtube", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby))), n.lasteventdata = i.data
                        }, onReady: function (a) {
                            var r, o = t.is_mobile(), s = e.hasClass("rs-layer-video");
                            !o && (!t.isSafari11() || o && s) || "RS-BGVIDEO" !== e[0].tagName && (!s || !0 !== n.aplay && "true" !== n.aplay) || (r = !0, n.player.setVolume(0), n.volume = "mute", n.player.mute(), clearTimeout(e.data("mobilevideotimr")), 2 !== n.player.getPlayerState() && -1 !== n.player.getPlayerState() || e.data("mobilevideotimr", setTimeout(function () {
                                p(n)
                            }, 500))), r || "mute" != n.volume || (n.player.setVolume(0), n.player.mute()), e.addClass("rs-apiready"), null == n.speed && 1 === n.speed || a.target.setPlaybackRate(parseFloat(n.speed)), e.find("rs-poster").unbind("click"), e.find("rs-poster").click(function () {
                                i || p(n)
                            }), n.startvideonow && (p(n), -1 != n.ssec && n.player.seekTo(n.ssec)), n.videolistenerexist = !0
                        }
                    }
                });
                break;
            case"vimeo":
                for (var h, m = n.ifr.attr("src"), v = {}, y = m, _ = /([^&=]+)=([^&]*)/g; h = _.exec(y);) v[decodeURIComponent(h[1])] = decodeURIComponent(h[2]);
                m = (m = null != v.player_id ? m.replace(v.player_id, d) : m + "&player_id=" + d).replace(/&api=0|&api=1/g, "");
                var x, k = t.is_mobile(), T = k || t.isSafari11(), L = "RS-BGVIDEO" === e[0].tagName;
                if (T && L && (m += "&background=1"), n.ifr.attr("src", m), n.vimeoplayer = void 0 === n.vimeoplayer || !1 === n.vimeoplayer ? new Vimeo.Player(d) : n.vimeoplayer, T) L ? x = !0 : (n.aplay || "true" === n.aplay) && (k && (n.aplay = !1), x = !0), x && (n.volumetoken = !0, n.vimeoplayer.setVolume(0), n.volume = "mute");
                n.vimeoplayer.on("play", function (t) {
                    n.vimeostarted || u(n, e, a)
                }), n.vimeoplayer.on("loaded", function (t) {
                    var i = {};
                    n.vimeoplayer.getVideoWidth().then(function (t) {
                        i.width = t, void 0 !== i.width && void 0 !== i.height && (n.ratio = i.width + ":" + i.height, n.vimeoplayerloaded = !0, s(a, e))
                    }), n.vimeoplayer.getVideoHeight().then(function (t) {
                        i.height = t, void 0 !== i.width && void 0 !== i.height && (n.ratio = i.width + ":" + i.height, n.vimeoplayerloaded = !0, s(a, e))
                    }), n.startvideonow && ("mute" === n.volume && (n.volumetoken = !0, n.vimeoplayer.setVolume(0)), c(n.vimeoplayer), -1 != n.ssec && n.vimeoplayer.setCurrentTime(n.ssec))
                }), e.addClass("rs-apiready"), n.vimeoplayer.on("volumechange", function (e) {
                    n.volumetoken && (n.volume = e.volume), n.volumetoken = !1
                }), n.vimeoplayer.on("timeupdate", function (i) {
                    n.vimeostarted || u(n, e, a), n.pausetimer && "playing" == t[a].sliderstatus && (t[a].stopByVideo = !0, t[a].c.trigger("stoptimer")), n.currenttime = i.seconds, 0 != n.esec && -1 !== n.esec && n.esec < i.seconds && !0 !== n.nextslidecalled && (n.loop ? (c(n.vimeoplayer), n.vimeoplayer.setCurrentTime(-1 !== n.ssec ? n.ssec : 0)) : (n.nse && (n.nseTriggered = !0, n.nextslidecalled = !0, t[a].c.revnext()), n.vimeoplayer.pause()))
                }), n.vimeoplayer.on("ended", function (i) {
                    n.vimeostarted = !1, w(e, a), t[a].stopByVideo = !1, t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.vimeoplayer, "vimeo", n)), n.nse && (n.nseTriggered = !0, t[a].c.revnext()), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)
                }), n.vimeoplayer.on("pause", function (i) {
                    n.vimeostarted = !1, (n.scop && e.find("rs-poster").length > 0 || n.bgvideo && e.find(".rs-fullvideo-cover").length > 0) && (n.bgvideo ? punchgs.TweenLite.to(e.find(".rs-fullvideo-cover"), .1, {
                        opacity: 1,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    }) : punchgs.TweenLite.to(e.find("rs-poster"), .1, {
                        opacity: 1,
                        visibility: "visible",
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    }), punchgs.TweenLite.to(e.find("iframe"), .1, {
                        opacity: 0,
                        ease: punchgs.Power3.easeInOut
                    })), t[a].stopByVideo = !1, t[a].tonpause = !1, w(e, a), t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.vimeoplayer, "vimeo", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)
                }), e.find("rs-poster").unbind("click"), e.find("rs-poster").click(function () {
                    if (!i) return c(n.vimeoplayer), !1
                }), n.videolistenerexist = !0
        }
    }, g = function () {
        document.exitFullscreen && document.fullscreen ? document.exitFullscreen() : document.mozCancelFullScreen && document.mozFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitIsFullScreen && document.webkitExitFullscreen()
    }, f = function () {
        if (void 0 !== window.fullScreen) return window.fullScreen;
        if (void 0 !== document.fullscreen) return document.fullscreen;
        if (void 0 !== document.mozFullScreen) return document.mozFullScreen;
        if (void 0 !== document.webkitIsFullScreen) return document.webkitIsFullScreen;
        var e = jQuery.browser.webkit && /Apple Computer/.test(navigator.vendor) ? 42 : 5;
        return screen.width == window.innerWidth && Math.abs(screen.height - window.innerHeight) < e
    }, m = function (e, a, s) {
        var n = t[a].videos[e[0].id];
        if (i && n.notonmobile) return !1;
        n.metaloaded = !0, n.control && !n.audio || (0 != e.find(".tp-video-play-button").length || i || e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), e.find("video, rs-poster, .tp-video-play-button").click(function () {
            e.hasClass("videoisplaying") ? n.video.pause() : n.video.play()
        })), (n.fcover || e.hasClass("rs-fsv") || n.bgvideo) && (n.fcover || n.bgvideo ? (n.html5vid.addClass("fullcoveredvideo"), void 0 !== n.ratio && 1 != n.ratio.split(":").length || (n.ratio = "16:9"), t.prepareCoveredVideo(a, e)) : n.html5vid.addClass("rs-fsv")), r(n.video, "canplaythrough", function () {
            t.preLoadAudioDone(e, a, "canplaythrough")
        }), r(n.video, "canplay", function () {
            t.preLoadAudioDone(e, a, "canplay")
        }), r(n.video, "progress", function () {
            t.preLoadAudioDone(e, a, "progress")
        }), r(n.video, "timeupdate", function (e) {
            0 != n.esec && -1 != n.esec && n.esec < n.video.currentTime && !n.nextslidecalled && (n.loop ? (n.video.play(), n.video.currentTime = -1 === n.ssec ? 0 : n.ssec) : (n.nse && (n.nseTriggered = !0, n.nextslidecalled = !0, t[a].jcnah = !0, t[a].c.revnext(), setTimeout(function () {
                t[a].jcnah = !1
            }, 1e3)), n.video.pause()))
        }), r(n.video, "play", function () {
            n.nextslidecalled = !1, n.volume = null != n.volume && "mute" != n.volume ? parseFloat(n.volcache) : n.volume, n.volcache = null != n.volcache && "mute" != n.volcache ? parseFloat(n.volcache) : n.volcache, t.is_mobile() || t.isSafari11() || (!0 === t[a].globalmute ? n.video.muted = !0 : n.video.muted = "mute" == n.volume, n.volcache = jQuery.isNumeric(n.volcache) && n.volcache > 1 ? n.volcache / 100 : n.volcache, "mute" == n.volume ? n.video.muted = !0 : null != n.volcache && (n.video.volume = n.volcache)), e.addClass("videoisplaying"), b(e, a), !0 !== n.pausetimer || "audio" == n.tag ? (t[a].stopByVideo = !1, t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", n))) : (t[a].stopByVideo = !0, t[a].c.trigger("revolution.slide.onvideoplay", o(n.video, "html5", n))), n.pausetimer && "playing" == t[a].sliderstatus && (t[a].stopByVideo = !0, t[a].c.trigger("stoptimer")), punchgs.TweenLite.to(e.find("rs-poster"), .3, {
                opacity: 0,
                visibility: "hidden",
                force3D: "auto",
                ease: punchgs.Power3.easeInOut
            }), punchgs.TweenLite.to(e.find(n.tag), .3, {
                opacity: 1,
                display: "block",
                ease: punchgs.Power3.easeInOut
            }), t.toggleState(n.videotoggledby)
        }), r(n.video, "pause", function (i) {
            !f() && e.find("rs-poster").length > 0 && n.scop && (punchgs.TweenLite.to(e.find("rs-poster"), .3, {
                opacity: 1,
                visibility: "visible",
                force3D: "auto",
                ease: punchgs.Power3.easeInOut
            }), punchgs.TweenLite.to(e.find(n.tag), .3, {
                opacity: 0,
                ease: punchgs.Power3.easeInOut
            })), e.removeClass("videoisplaying"), t[a].stopByVideo = !1, w(e, a), "audio" != n.tag && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)
        }), r(n.video, "ended", function () {
            g(), w(e, a), t[a].stopByVideo = !1, w(e, a), "audio" != n.tag && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", e.data())), n.nse && n.video.currentTime > 0 && (1 == !t[a].jcnah && (n.nseTriggered = !0, t[a].c.revnext(), t[a].jcnah = !0), setTimeout(function () {
                t[a].jcnah = !1
            }, 1500)), e.removeClass("videoisplaying"), !0 !== t[a].inviewport && void 0 !== t[a].inviewport || (t[a].lastplayedvideos = [])
        })
    }, v = function (e) {
        return "t" === e || !0 === e || "true" === e || "f" !== e && !1 !== e && "false" !== e && e
    }, y = function (e, t) {
        e.audio = "audio" === t;
        var i = void 0 === e.video ? [] : e.video.split(";"), r = {
            volume: e.audio ? 1 : "mute",
            pload: "auto",
            ratio: "16:9",
            loop: !0,
            aplay: "true",
            fcover: 1 === e.bgvideo,
            afs: !0,
            controls: !1,
            nse: !0,
            npom: !1,
            opom: !1,
            inline: !0,
            notonmobile: !1,
            start: -1,
            end: -1,
            doverlay: "none",
            scop: !1,
            rwd: !0,
            speed: 1,
            ploadwait: 5,
            stopAV: 1 !== e.bgvideo,
            noInt: !1,
            volcache: 75
        };
        for (var o in i) if (i.hasOwnProperty(o)) {
            var s = i[o].split(":");
            switch (s[0]) {
                case"v":
                    r.volume = s[1];
                    break;
                case"vd":
                    r.volcache = s[1];
                    break;
                case"p":
                    r.pload = s[1];
                    break;
                case"ar":
                    r.ratio = s[1] + (void 0 !== s[2] ? ":" + s[2] : "");
                    break;
                case"ap":
                    r.aplay = v(s[1]);
                    break;
                case"fc":
                    r.fcover = v(s[1]);
                    break;
                case"afs":
                    r.afs = v(s[1]);
                    break;
                case"vc":
                    r.controls = s[1];
                    break;
                case"nse":
                    r.nse = v(s[1]);
                    break;
                case"npom":
                    r.npom = v(s[1]);
                    break;
                case"opom":
                    r.opom = v(s[1]);
                    break;
                case"t":
                    r.vtype = s[1];
                    break;
                case"inl":
                    r.inline = v(s[1]);
                    break;
                case"nomo":
                    r.notonmobile = v(s[1]);
                    break;
                case"sta":
                    r.start = s[1] + (void 0 !== s[2] ? ":" + s[2] : "");
                    break;
                case"end":
                    r.end = s[1] + (void 0 !== s[2] ? ":" + s[2] : "");
                    break;
                case"do":
                    r.doverlay = s[1];
                    break;
                case"scop":
                    r.scop = v(s[1]);
                    break;
                case"rwd":
                    r.rwd = v(s[1]);
                    break;
                case"sp":
                    r.speed = s[1];
                    break;
                case"vw":
                    r.ploadwait = parseInt(s[1], 0) || 5;
                    break;
                case"sav":
                    r.stopAV = v(s[1]);
                    break;
                case"noint":
                    r.noInt = v(s[1]);
                    break;
                case"l":
                    r.loopcache = s[1], r.loop = "loop" === s[1] || "loopandnoslidestop" === s[1] || "none" !== s[1] && v(s[1]);
                    break;
                case"ptimer":
                    r.pausetimer = v(s[1])
            }
        }
        return void 0 !== e.bgvideo && (r.bgvideo = e.bgvideo), void 0 === e.bgvideo || !1 !== r.fcover && "false" !== r.fcover || (r.doverlay = "none"), r.noInt && (r.controls = !1), void 0 !== e.mp4 && (r.mp4 = e.mp4), void 0 !== e.videomp4 && (r.mp4 = e.videomp4), void 0 !== e.ytid && (r.ytid = e.ytid), void 0 !== e.ogv && (r.ogv = e.ogv), void 0 !== e.webm && (r.webm = e.webm), void 0 !== e.vimeoid && (r.vimeoid = e.vimeoid), void 0 !== e.vatr && (r.vatr = e.vatr), void 0 !== e.videoattributes && (r.vatr = e.videoattributes), void 0 !== e.poster && (r.poster = e.poster), r.aplay = "true" === r.aplay || r.aplay, r.aplay = 1 != e.audio && r.aplay, 1 === r.bgvideo && (r.volume = "mute"), r.ssec = a(r.start), r.esec = a(r.end), r.pausetimer = void 0 === r.pausetimer ? "loopandnoslidestop" !== r.loopcache : r.pausetimer, r.inColumn = e._incolumn, r.audio = e.audio, !0 !== r.loop && "true" !== r.loop || !0 !== r.nse && "true" !== r.nse || (r.loop = !1), r
    }, b = function (e, i) {
        if (t[i].playingvideos = void 0 === t[i].playingvideos ? new Array : t[i].playingvideos, t[i].videos[e[0].id].stopAV && void 0 !== t[i].playingvideos && t[i].playingvideos.length > 0) for (var a in t[i].lastplayedvideos = jQuery.extend(!0, [], t[i].playingvideos), t[i].playingvideos) t[i].playingvideos.hasOwnProperty(a) && t.stopVideo(t[i].playingvideos[a], i);
        t[i].playingvideos.push(e), t[i].videoIsPlaying = e
    }, w = function (e, i) {
        void 0 !== t[i] && void 0 !== t[i] && null != t[i].playingvideos && jQuery.inArray(e, t[i].playingvideos) >= 0 && t[i].playingvideos.splice(jQuery.inArray(e, t[i].playingvideos), 1)
    }
}(jQuery);