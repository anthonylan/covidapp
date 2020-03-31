(function(t) {
    function e(e) {
        for (var a, n, r = e[0], o = e[1], c = e[2], p = 0, d = []; p < r.length; p++) n = r[p], Object.prototype.hasOwnProperty.call(l, n) && l[n] && d.push(l[n][0]), l[n] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
        u && u(e);
        while (d.length) d.shift()();
        return i.push.apply(i, c || []), s()
    }

    function s() {
        for (var t, e = 0; e < i.length; e++) {
            for (var s = i[e], a = !0, r = 1; r < s.length; r++) {
                var o = s[r];
                0 !== l[o] && (a = !1)
            }
            a && (i.splice(e--, 1), t = n(n.s = s[0]))
        }
        return t
    }
    var a = {},
        l = {
            app: 0
        },
        i = [];

    function n(e) {
        if (a[e]) return a[e].exports;
        var s = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }
    n.m = t, n.c = a, n.d = function(t, e, s) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, n.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (n.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) n.d(s, a, function(e) {
                return t[e]
            }.bind(null, a));
        return s
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        o = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var c = 0; c < r.length; c++) e(r[c]);
    var u = o;
    i.push([0, "chunk-vendors"]), s()
})({
    0: function(t, e, s) {
        t.exports = s("56d7")
    },
    "31f2": function(t, e, s) {
        "use strict";
        var a = s("b278"),
            l = s.n(a);
        l.a
    },
    "56d7": function(t, e, s) {
        "use strict";
        s.r(e);
        s("e260"), s("e6cf"), s("cca6"), s("a79d");
        var a = s("2b0e"),
            l = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("v-app", [s("v-content", [s("HelloWorld")], 1)], 1)
            },
            i = [],
            n = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("v-container", [s("", {
                    staticClass: "text-center main-title"
                }, [t._v("Is there enough toilet paper?")]), s("v-row", {
                    staticClass: "text-center"
                }, [s("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [s("v-row", [s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("v-subheader-v", {
                    staticClass: "title-v"
                }, [t._v("Number of rolls")]), s("v-card-text", {
                    staticClass: "pa-0"
                }, [s("v-row", [s("v-col", {
                    staticClass: "pr-4"
                }, [s("v-slider", {
                    staticClass: "align-center",
                    attrs: {
                        max: t.max,
                        min: t.min,
                        "hide-details": ""
                    },
                    on: {
                        end: t.computeDays
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function() {
                            return [s("v-text-field", {
                                staticClass: "mt-0 pt-0",
                                staticStyle: {
                                    width: "60px"
                                },
                                attrs: {
                                    disabled: "",
                                    "hide-details": "",
                                    "single-line": "",
                                    type: "number"
                                },
                                model: {
                                    value: t.rolls,
                                    callback: function(e) {
                                        t.rolls = e
                                    },
                                    expression: "rolls"
                                }
                            })]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.rolls,
                        callback: function(e) {
                            t.rolls = e
                        },
                        expression: "rolls"
                    }
                })], 1)], 1)], 1)], 1), s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("v-subheader-v", {
                    staticClass: "title-v"
                }, [t._v("The number of trips to the toilet")]), s("v-card-text", {
                    staticClass: "pa-0"
                }, [s("v-row", [s("v-col", {
                    staticClass: "pr-4"
                }, [s("v-slider", {
                    staticClass: "align-center",
                    attrs: {
                        max: 10,
                        min: t.min,
                        "hide-details": ""
                    },
                    on: {
                        end: t.computeDays
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function() {
                            return [s("v-text-field", {
                                staticClass: "mt-0 pt-0",
                                staticStyle: {
                                    width: "60px"
                                },
                                attrs: {
                                    disabled: "",
                                    "hide-details": "",
                                    "single-line": "",
                                    type: "number"
                                },
                                model: {
                                    value: t.toilet,
                                    callback: function(e) {
                                        t.toilet = e
                                    },
                                    expression: "toilet"
                                }
                            })]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.toilet,
                        callback: function(e) {
                            t.toilet = e
                        },
                        expression: "toilet"
                    }
                })], 1)], 1)], 1)], 1), s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("v-subheader-v", {
                    staticClass: "title-v"
                }, [t._v("Number of sheets per wipe")]), s("v-card-text", {
                    staticClass: "pa-0"
                }, [s("v-row", [s("v-col", {
                    staticClass: "pr-4"
                }, [s("v-slider", {
                    staticClass: "align-center",
                    attrs: {
                        max: 10,
                        min: t.min,
                        "hide-details": ""
                    },
                    on: {
                        end: t.computeDays
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function() {
                            return [s("v-text-field", {
                                staticClass: "mt-0 pt-0",
                                staticStyle: {
                                    width: "60px"
                                },
                                attrs: {
                                    disabled: "",
                                    "hide-details": "",
                                    "single-line": "",
                                    type: "number"
                                },
                                model: {
                                    value: t.sheets,
                                    callback: function(e) {
                                        t.sheets = e
                                    },
                                    expression: "sheets"
                                }
                            })]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.sheets,
                        callback: function(e) {
                            t.sheets = e
                        },
                        expression: "sheets"
                    }
                })], 1)], 1)], 1)], 1), s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("v-subheader-v", {
                    staticClass: "title-v"
                }, [t._v("Quarantine Duration")]), s("v-card-text", {
                    staticClass: "pa-0"
                }, [s("v-row", [s("v-col", {
                    staticClass: "pr-4"
                }, [s("v-slider", {
                    staticClass: "align-center",
                    attrs: {
                        max: t.max,
                        min: t.min,
                        "hide-details": ""
                    },
                    on: {
                        end: t.computeDays
                    },
                    scopedSlots: t._u([{
                        key: "append",
                        fn: function() {
                            return [s("v-text-field", {
                                staticClass: "mt-0 pt-0 value",
                                staticStyle: {
                                    width: "60px"
                                },
                                attrs: {
                                    disabled: "",
                                    "hide-details": "",
                                    "single-line": "",
                                    type: "number"
                                },
                                model: {
                                    value: t.quarantine,
                                    callback: function(e) {
                                        t.quarantine = e
                                    },
                                    expression: "quarantine"
                                }
                            })]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: t.quarantine,
                        callback: function(e) {
                            t.quarantine = e
                        },
                        expression: "quarantine"
                    }
                })], 1)], 1)], 1)], 1)], 1)], 1), s("v-col", {
                    staticClass: "small-tx primary--text my-auto",
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [s("v-row", [s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("h3", [t._v("You will last:")]), s("div", {
                    staticClass: "days"
                }, [s("span", {
                    staticClass: "number"
                }, [t._v(" " + t._s(t.totalDays) + " ")]), s("span", {
                    staticClass: "text"
                }, [t._v(" " + t._s(t.text))])]), s("", [t._v("")])]), this.totalDays < this.quarantine && !/г/.test(this.text) ? s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("p", [t._v("Not enough toilet paper!")]), s("p", {
                    staticClass: "highlight"
                }, [t._v(" We advise you to buy more " + t._s(t.suggetion) + " " + t._s(t.rollsText) + "! ")])]) : s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("p", {
                    staticClass: "highlight"
                }, [t._v("You have enough toilet paper!")])])], 1)], 1)], 1)], 1)
            },
            r = [],
            o = (s("b680"), {
                name: "HelloWorld",
                data: function() {
                    return {
                        min: 1,
                        max: 50,
                        rolls: 2,
                        quarantine: 4,
                        toilet: 4,
                        sheets: 3,
                        totalDays: 0,
                        text: "",
                        suggetion: 0,
                        rollsText: "",
                        range: [0, 100]
                    }
                },
                methods: {
                    computeDays: function() {
                        var t, e = 250,
                            s = this.rolls,
                            a = this.quarantine,
                            l = this.toilet,
                            i = this.sheets,
                            n = i * l,
                            r = e * s;
                        if (t = Math.round(r / n), this.totalDays = t, a > t && !/г/.test(this.text) && (this.suggetion = Math.ceil((a - t) * n / e), this.rollsText = this.pluralize(this.suggetion, "roll", "roll", "rolls")), t < 365) this.text = this.pluralize(this.totalDays, "day", "days", "days");
                        else {
                            var o = (this.totalDays / 365).toFixed(1);
                            this.totalDays = o, this.text = this.pluralize(Math.round(o), "year", "years", "years")
                        }
                    },
                    pluralize: function(t, e, s, a) {
                        var l = Math.abs(t);
                        return l %= 100, l >= 5 && l <= 20 ? a : (l %= 10, 1 === l ? e : l >= 2 && l <= 4 ? s : a)
                    }
                },
                beforeMount: function() {
                    if (this.computeDays(), this.rollsText = this.pluralize(this.suggetion, "roll", "roll", "rolls"), this.totalDays < 365) this.text = this.pluralize(this.totalDays, "day", "days", "days");
                    else {
                        var t = Math.floor(this.totalDays / 365);
                        this.text = this.pluralize(t, "day", " days", "days")
                    }
                }
            }),
            c = o,
            u = (s("31f2"), s("2877")),
            p = s("6544"),
            d = s.n(p),
            v = s("99d9"),
            h = s("62ad"),
            f = s("a523"),
            x = s("0fd9"),
            m = s("ba0d"),
            y = s("e0c7"),
            b = s("8654"),
            g = Object(u["a"])(c, n, r, !1, null, null, null),
            C = g.exports;
        d()(g, {
            VCardText: v["a"],
            VCol: h["a"],
            VContainer: f["a"],
            VRow: x["a"],
            VSlider: m["a"],
            VSubheader: y["a"],
            VTextField: b["a"]
        });
        var _ = {
                name: "App",
                components: {
                    HelloWorld: C
                },
                data: function() {
                    return {}
                }
            },
            w = _,
            D = s("7496"),
            k = s("a75b"),
            S = Object(u["a"])(w, l, i, !1, null, null, null),
            O = S.exports;
        d()(S, {
            VApp: D["a"],
            VContent: k["a"]
        });
        var j = s("f309");
        a["a"].use(j["a"]);
        var M = new j["a"]({});
        a["a"].config.productionTip = !1, new a["a"]({
            vuetify: M,
            render: function(t) {
                return t(O)
            }
        }).$mount("#app")
    },
    b278: function(t, e, s) {}
});