(function() {
    var a = location.search,
    b;
    if (b = a.match(/[&|?]hmsr=([^&]+)/)) document.cookie = "c_csc=" + b[1] + ";domain=17k.com;path=/";
    void 0 !== window.ontouchstart && document.querySelector && -1 === document.cookie.indexOf("pf=pc") && ( - 1 === a.indexOf("pf=pc") ? !("Win32" === navigator.platform || -1 < navigator.userAgent.toLowerCase().indexOf("ipad")) && (b = document.getElementsByName("mobile-agent")[0], b = b.content.match(/^format=html5;url=(.+)$/)) && (location.href = b[1] + a) : document.cookie = "pf=pc;domain=17k.com;path=/")
})();
window.Q || (Q = function(a, b) {
    b = b || document;
    var c = function(d) {
        this.author = "Zhang Yongfeng";
        this[0] = document.body;
        if (d && d.substr) {
            var a;
            if (d.match(/^<.+>$/)) d.match(/^<[a-zA-Z]+>$/) ? (a = d.replace(/^<(.+)>$/, "$1"), this[0] = b.createElement(a)) : d.match(/^<([a-zA-Z]+)((.*?>.*?<\/\1>)|(.+>))$/) && (a = b.createElement("div"), a.innerHTML = "$nbsp;" + d, this[0] = a.childNodes[1]),
            this.length = 1;
            else if (d.match(/^#.+/)) this[0] = b.getElementById(d.substr(1)),
            this.length = 1;
            else if (d.match(/^\..+/)) {
                a = b.getElementsByTagName("*");
                var c = this.length = 0;
                d = RegExp("\\b" + d.substr(1) + "\\b");
                for (var g; g = a[c]; c++) String(g.className).match(d) && (this[this.length++] = g)
            } else d.match(/[a-z]+/) && (a = b.getElementsByTagName(d), Q.each(a,
            function(d, a) {
                this[a] = d
            },
            this), this.length = a.length)
        } else if (d.nodeType && 1 == d.nodeType || d == window) this[0] = d;
        else if (d.author === this.author) {
            var h = this;
            d.each(function(d, a) {
                h[a] = d
            })
        }
        return this
    };
    c.prototype = {
        each: function(d) {
            for (var a = 0,
            b; (b = this[a]) && !1 !== d.call(this, b, a); a++);
            return this
        },
        html: function(a) {
            if (void 0 === a) {
                var b = [];
                this.each(function(a) {
                    b.push(a.innerHTML)
                });
                return b.join("")
            }
            a = a.toString();
            a.match(/<script/i) && (a = "&nbsp;" + a);
            this.each(function(b) {
                b.innerHTML = a
            });
            return this
        },
        text: function(a) {
            if (void 0 === a) {
                var b = [];
                this.each(function(a) {
                    b.push(a.innerText || a.textContent)
                });
                return b.join("")
            }
            a = a.toString();
            this.each(function(b) {
                b.innerText ? b.innerText = a: b.textContent = a
            });
            return this
        },
        append: function(a) {
            "function" == typeof a && (a = a());
            if ("string" === typeof a) {
                var b = document.createElement("div");
                b.innerHTML = a;
                this.each(function(a) {
                    Q.each(b.childNodes,
                    function(b) {
                        a.appendChild(b.cloneNode(!0))
                    },
                    this)
                });
                b.innerHTML = "";
                b = null
            } else a.author === this.author ? this.each(function(b) {
                a.each(function(a) {
                    b.appendChild(a)
                })
            }) : a.appendChild && this.each(function(b) {
                b.appendChild(a.cloneNode(!0))
            });
            return this
        },
        appendto: function(a) {
            this.each(function(b) {
                a.appendChild(b)
            });
            return this
        },
        remove: function() {
            this.each(function(a) {
                a.parentNode && a.parentNode.removeChild(a)
            });
            return this
        },
        clear: function() {
            for (; this[0];) this[0].parentNode && this[0].parentNode.removeChild(this[0]),
            [].shift.call(this);
            this.length = 0;
            return this
        },
        add: function(a) {
            if ("string" == typeof a) this.each(function(b) {
                b.innerHTML = a
            });
            else if (a.appendChild) this.each(function(b) {
                b.appendChild(a)
            });
            else if ("object" == typeof a) for (var b in a) this.each(function(c) {
                a.hasOwnProperty(b) && c.setAttribute(b, a[b], 0)
            });
            return this
        },
        className: function(a, b) {
            if (null == a) this.each(function(a) {
                a.className = ""
            });
            else {
                if (void 0 == a) {
                    var c = [];
                    this.each(function(a) {
                        c.push(a.className)
                    });
                    return c
                }
                this.each(function(c) {
                    c.className = b ? a: c.className + (" " + a)
                })
            }
            return this
        },
        css: function(a, b) {
            if ("string" === typeof a) this.className(a, b);
            else {
                var c = "",
                g;
                for (g in a) a.hasOwnProperty(g) && (c += ";" + g + ":" + a[g]);
                b ? this.each(function(a) {
                    a.style.cssText = c
                }) : this.each(function(a) {
                    a.style.cssText += c
                })
            }
            return this
        },
        addTo: function(a, b) {
            "body" === a ? a = document.body: "head" === a && (a = document.getElementsByTagName("head")[0]);
            a.appendChild && (b && a.contains(b) ? this.each(function(c) {
                a.insertBefore(c, b)
            }) : this.each(function(b) {
                a.appendChild(b)
            }));
            return this
        },
        onload: function(a) {
            a && this.each(function(b, c) { [].map ? b.onload = function() {
                    a.call(b, c)
                }: b.onreadystatechange = function() {
                    "loaded" != this.readyState && "complete" != this.readyState || a.call(b, c)
                }
            });
            return this
        },
        event: function(a, b) {
            a = a.replace(/^on/i, "");
            window.addEventListener ? this.each(function(c, g) {
                c.addEventListener(a,
                function(a) {
                    b && b.call(c, a, g)
                },
                !1)
            }) : window.attachEvent && this.each(function(c, g) {
                c.attachEvent("on" + a,
                function() {
                    var a = window.event;
                    a.target = a.srcElement;
                    a.stopPropagation = function() {
                        a.cancelBubble = !0
                    };
                    a.preventDefault = function() {
                        a.returnValue = !1
                    };
                    b && b.call(c, a, g)
                })
            });
            return this
        },
        getStyle: function(a) {
            var b = this[0],
            c = null;
            return c = window.getComputedStyle ? getComputedStyle(b)[a] : b.currentStyle[a]
        }
    };
    return new c(a)
},
Q.version = 2.3, Q.fileExt = "js", Q.isDebug = function() {
    return 0 <= location.search.indexOf("debug")
} (), Q.isEmpty = function(a) {
    if ("" === a) return ! 0;
    if ("object" === typeof a) {
        if (! (a instanceof Array && 0 === a.length)) for (var b in a) return ! 1;
        return ! 0
    }
    return ! 1
},
Q.getURI = function(a) {
    for (var b = location.search.substr(1).split("&"), c = 0, d = {},
    e; e = b[c++];) e = e.split("="),
    d[e[0]] = e[1];
    return d[a] || ""
},
Q.path = function() {
    for (var a = document.getElementsByTagName("script"), b, c = a.length - 1; b = a[c];) if (c--, b = b.src.match(/(.*?)Q\.(js|jsrc)$/)) return Q.fileExt = Q.isDebug ? "jsrc": b[2],
    "jsrc" === Q.fileExt && (Q.isDebug = !0),
    b[1];
    return "http://img1.17k.com/2015/Q/"
} (), Q.each = function(a, b, c) {
    var d, e;
    if (c) for (d = 0; e = a[d]; d++) {
        if (!1 === b.call(c, e, d)) return ! 1
    } else for (d = 0; e = a[d]; d++) if (!1 === b(e, d)) return ! 1;
    return ! 0
},
Q.lastTag = function(a) {
    a = document.getElementsByTagName(a);
    return a[a.length - 1]
},
Q.ext = function(a, b) {
    Q.loadJs(Q.path + "Q." + a + "." + Q.fileExt,
    function(c) {
        Q[a].apply(Q[a], b);
        Q(c).remove()
    })
},
Q.onLogined = function() {},
Q.isLogin = function() {
    return !! Q.cookie("c_u")
},
Q.setLoginInfo = function() {
    window.Q_loginBar1 && Q.setIndexLoginInfo("Q_loginBar1")
},
Q.login = function(a) {
    "passport.17k.com" === location.host && (location.href = "http://passport.17k.com");
    Q.login.startInit || (Q.login.startInit = !0, Q.ext("login", arguments))
},
Q.loginPost = function(a, b) {
    Q.post("http://passport.17k.com/login.action?jsonp=true",
    function(b) {
        a(b)
    },
    b)
},
Q.logout = function() {
    window.location.href = "http://passport.17k.com/logout?url=" + encodeURIComponent(window.location)
},
Q.loadCss = function(a, b) {
    Q.loadCss.files = Q.loadCss.files || []; ! 0 === Q.each(Q.loadCss.files,
    function(b) {
        return b != a
    }) ? (Q.loadCss.files.push(a), Q("<link>").add({
        text: "text/css",
        rel: "stylesheet",
        href: a
    }).onload(b).addTo("head")) : b();
    return Q
},
Q.loadJs = function(a, b, c) {
    var d = Q("<script>").add({
        type: "text/javascript",
        src: a
    }).addTo(c || "head");
    d[0][[].map ? "onload": "onreadystatechange"] = function() {
        var a = this.readyState || "";
        a && "loaded" != a.toString() && "complete" != a.toString() || b && b(d)
    };
    return Q
},
Q.pop = function(a, b) {
    Q.ext("pop", arguments);
    return {
        close: function() {
            Q.pop.close()
        }
    }
},
Q.range = function(a, b) {
    Q.ext("range", arguments)
},
Q.layout = function(a, b, c) {
    Q.loadCss(Q.path + "skin/pop/pop.css",
    function() {
        var d = document.createElement("div");
        d.className = "Q_POP";
        d.innerHTML = '<div class="title">' + a + '</div><div class="content">' + b + "</div>";
        var e = Q.pop({
            content: d,
            theme: {
                closeHtml: '<div class="Q_POP_CLOSE"></div>'
            }
        },
        function() {
            c && c.call(e)
        })
    })
},
Q.alert = function(a, b) {
    var c = document.createElement("div");
    c.style.cssText = "background:#fafafa;color:#333;text-align:center;padding:30px;width:260px;border:1px solid #ccc;";
    c.innerHTML = a;
    var d = document.createElement("input");
    d.type = "button";
    d.value = "\u786e\u5b9a";
    d.style.cssText = "background:#EF5400;color:white;width:60px;height:30px;border:0;text-align:center;margin:20px auto 0;display:block";
    c.appendChild(d);
    var e = Q.pop({
        content: c,
        isClose: !1,
        bgColor: "#fff"
    });
    d.onclick = function() {
        e.close();
        b && b()
    }
},
Q.warning = function(a, b) {
    Q.loadCss(Q.path + "skin/warning/warning.css",
    function() {
        var c = document.createElement("span");
        c.className = "close";
        c.onclick = function() {
            b && b();
            document.body.removeChild(e)
        };
        var d = document.createElement("span");
        d.innerHTML = a;
        var e = document.createElement("div");
        e.className = "Q_artwc_warning";
        var f = document.createElement("div");
        f.className = "context";
        f.appendChild(c);
        f.appendChild(d);
        e.appendChild(f);
        document.body.insertBefore(e, document.body.firstChild)
    })
},
Q.scrollX = function(a) {
    Q.ext("scrollX", arguments)
},
Q.loading = function(a) {
    var b = document.createElement("div");
    b.style.cssText = "background:#eee;color:#333;text-align:center;padding:30px;width:300px;border:6px solid #666;";
    b.innerHTML = a;
    return Q.pop({
        content: b,
        isClose: !1
    })
},
Q.ajax = function(a, b, c, d) {
    a = a.match(/\?/) ? a + ("&r=" + Math.random()) : a + ("?r=" + Math.random());
    var e = window.XMLHttpRequest ? new XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP");
    e.onreadystatechange = function() {
        4 == this.readyState && 200 == this.status && b.call(this, (new Function("return" + this.responseText))(), this.responseXML)
    };
    if (c) {
        e.open("POST", a, !d);
        e.setRequestHeader("CONTENT-TYPE", "application/x-www-form-urlencoded");
        a = [];
        c = c || {};
        for (var f in c) c.hasOwnProperty(f) && a.push(f + "=" + encodeURIComponent(c[f]));
        e.send(a.join("&"))
    } else e.open("GET", a, !d),
    e.send();
    return e
},
Q.jsonp = function(a, b, c) {
    b && b.prototype && (b = [c, c = b][0]);
    var d = "jsonpCallback_" + (new Date).getTime() + Math.floor(1E3 * Math.random());
    Q[d] = function(a) {
        document.body.removeChild(e);
        e = null;
        Q[d] = null;
        c && c(a)
    };
    var e = document.createElement("script");
    a.match(/\?/) || (a += "?");
    a = (a + ("&callback=Q." + d + "&jsonp=Q." + d)).replace("?&", "?");
    for (var f in b) b.hasOwnProperty(f) && (a += "&" + encodeURIComponent(f) + "=" + encodeURIComponent(b[f]));
    e.src = a;
    document.body.appendChild(e);
    return {
        abort: function() {
            Q[d] = new Function
        }
    }
},
Q.post = function(a, b, c) {
    a += a.match(/\?/) ? "": "?&r=" + Math.random();
    Q.post_artwc_callback = b;
    document.getElementById("Q_post_artwc_iframe") || ([].map ? (b = document.createElement("iframe"), b.name = "Q_post_artwc_iframe", b.id = "Q_post_artwc_iframe") : b = document.createElement('<iframe name="Q_post_artwc_iframe" id="Q_post_artwc_iframe">'), document.body.appendChild(b), b.style.display = "none");
    b = document.createElement("form");
    b.target = "Q_post_artwc_iframe";
    b.action = a;
    b.method = "post";
    c = c || {};
    c.postCallback = "parent.Q.post_artwc_callback";
    for (var d in c) a = document.createElement("input"),
    a.type = "hidden",
    a.name = d,
    a.value = c[d],
    b.appendChild(a);
    document.body.appendChild(b);
    b.submit();
    document.body.removeChild(b);
    document.domain = "17k.com"
},
Q.cookie = function(a, b, c, d, e) {
    d = "domain=" + (d || "17k.com") + ";";
    e = "path=" + (e || "/") + ";";
    var f = new Date,
    g = RegExp(a + "=(.*?)(;|$)", "i");
    switch (b) {
    case void 0:
        b = document.cookie.match(g);
        b = null == b ? "": decodeURIComponent(b[1]);
        break;
    case null:
        b = Q.cookie(a);
        f.setTime(f.getTime() - 1E9);
        document.cookie = a + "=;" + d + e + "expires=" + f.toUTCString();
        break;
    default:
        c = "number" == typeof c ? c: 30,
        f.setTime(f.getTime() + 864E5 * c),
        f = 0 == c ? "": "expires=" + f.toUTCString(),
        document.cookie = a + "=" + encodeURIComponent(b) + ";" + d + e + f
    }
    return b
},
Q.substr = function(a, b, c) {
    c = c || "\u2026";
    b = b || 10;
    for (var d = /[\u4e00-\u9fa5]/,
    e = 0,
    f = -1; e < a.length; e++, f++) if (d.test(a[e]) && f++, f >= 2 * b) return a.substr(0, e - 2) + c;
    return a
},
Q.printNum = function(a) {
    a = a || 0;
    return 1E4 > a ? a: (a / 1E4).toFixed(1) + "\u4e07"
},
Q.showCode = function(a, b) {
    Q.showCode.status || (Q.showCode.status = !0, Q.showCode.refresh = function() {
        Q(".gt_refresh_button")[0].click()
    },
    Q.jsonp("http://passport.17k.com/frontSource?type=" + a,
    function(a) {
        var d = b || document.getElementById("VCODE_SCRIPT_INIT").parentNode;
        a = Q("<div>").html(a.html)[0].childNodes;
        for (var e = 0,
        f; f = a[e]; e++) f.tagName && ("SCRIPT" == f.tagName ? Q.loadJs(f.src,
        function() {},
        d) : d.appendChild(f.cloneNode(!0)))
    }))
},
Q.updateUserInfo = function(a) {
    Q.jsonp("http://passport.17k.com/get_info_cookie",
    function(b) {
        a && a(b)
    })
},
Q.loginInfo = function() {
    var a = {
        userId: "",
        nickName: "",
        flower: "",
        pkVote: "",
        replay: "",
        at: "",
        isAuthor: ""
    },
    b = Q.cookie("c_u");
    if (!b) return a;
    var b = b.replace('"', "").split("&"),
    c;
    c = b[0];
    var d = [];
    c = c.split("l");
    for (var e = 0; e < c.length; e++) d.push(String.fromCharCode(c[e]));
    c = d.join("");
    a.nickName = c;
    a.userId = String(b[1] || ""); (b = Q.cookie("c_i").toString().split("&")) || Q.jsonp("http://passport.17k.com/info_cookie", null, null);
    a.flower = b[0];
    a.isAuthor = !!b[1];
    a.pkVote = b[2];
    a.replay = b[3];
    a.at = b[4];
    return a
},
Q.getUserInfo = function(a, b, c) {
    Q.jsonp("//userapi.17k.com/user/getUserInfo.action?size=" + (c || 50) + "&userId=" + b,
    function(b) {
        a(b)
    })
},
Q.bookid = function() {
    var a = location.href.match(/^http.+?\.com\/(?:[a-z]+)\/(\d+).+html/i);
    return a ? a[1] : 0
} (), Q.bookmark = function(a, b) {
    a = a || Q.bookid;
    Q.login(function() {
        Q.ajax("/book/continueRead.action",
        function(b) {
            if (b) switch (b = parseInt(b.bookMarkId), b) {
            case - 1 : Q.alert("\u8bf7\u5148\u767b\u5f55!");
                break;
            case 0:
                Q.alert("\u5f88\u62b1\u6b49\uff0c\u60a8\u8fd8\u6ca1\u6709\u4e3a\u6b64\u4e66\u6dfb\u52a0\u4e66\u7b7e\u3002<br><br>\u5982\u4f55\u6dfb\u52a0\u4e66\u7b7e\uff1a\u5728\u7ae0\u8282\u9605\u8bfb\u9875\u9762\uff0c\u70b9\u51fb\u201c\u52a0\u5165\u4e66\u7b7e\u201d\uff0c\u5373\u53ef\u4fdd\u5b58\u60a8\u7684\u9605\u8bfb\u8bb0\u5f55.");
                break;
            default:
                window.location = "/chapter/" + a + "/" + b + ".html"
            }
        },
        {
            bookId: a
        })
    })
},
Q.bookshelf = function(a, b) {
    a = a || Q.bookid;
    var c = {
        bookId: a
    };
    b && (c.chapterId = b);
    Q.login(function() {
        Q.ajax("/bookShelf/bookshelf.action",
        function(b) {
            if (b) {
                var c = ["\u6536\u85cf\u6210\u529f\uff01", "\u6536\u85cf\u5931\u8d25\u3002", "\u4e66\u7b7e\u52a0\u5165\u6210\u529f\uff01", "\u672c\u4e66\u5df2\u7ecf\u6536\u85cf\u8fc7\u4e86\uff01"];
                b = Number(b.status);
                Q.alert(c[b]);
                0 === b && Q.jsonp("//passport.17k.com/sns/updateSnsStatus.action", {
                    bookId: a,
                    operation: "1"
                });
                window.sa && sa.track("Favorites", {
                    task: "www",
                    guid: Q.guid,
                    bookid: a,
                    userid: Q.loginInfo().userId,
                    username: Q.loginInfo().nickName,
                    isauthor: Q.loginInfo().isAuthor ? "\u662f": "\u5426",
                    bookname: "",
                    favstatus: c[b]
                })
            }
        },
        c)
    })
},
Q.guid = function() {
    var a = function() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
    },
    b = Q.cookie("GUID");
    b || (b = a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a(), Q.cookie("GUID", b, 365, "17k.com", "/"));
    return b
} (), Q.referrer = function() {
    var a = document.referrer; - 1 == a.indexOf("17k.com") && Q.cookie("c_referer_17k", a, 0);
    return Q.cookie("c_referer_17k")
} (), Q.setIndexLoginInfo = function(a) {
    Q.ext("setIndexLoginInfo", arguments)
},
Q.reward = function(a, b) {
    Q.ext("reward", arguments)
},
Q.comment = function(a) {
    Q.ext("comment", arguments)
},
Q.ppt = function(a, b) {
    Q.ext("ppt", arguments)
},
Q.topPage = function(a, b) {
    b = b || 10;
    for (var c = a.getElementsByTagName("li"), d = c.length - 1, e = c[d], f = [], g, h = 0; h < d;) g = document.createElement("a"),
    g.href = "javascript:void(0)",
    g.className = "page",
    g.innerHTML = 1 + h + "-" + (h += b),
    e.appendChild(g),
    g.onmouseover = function() {
        for (var a = this.innerHTML.split("-"), b = 1; b <= d; b++) c[b - 1].style.display = b < a[0] || b > a[1] ? "none": "block";
        for (b = 0; a = f[b++];) a.className = "page";
        this.className = "page hot"
    },
    f.push(g);
    f[0].onmouseover()
},
Q.tabCall = function(a, b, c, d) {
    c = c || "onclick";
    d = d || 0;
    b = b || new Function;
    Q.each(a,
    function(e, f) {
        e.rel = f;
        e.className = "";
        e[c] = function() {
            a[d].className = "";
            this.className = "now";
            b.call(this, f);
            d = this.rel
        };
        "" == e.getAttribute("href") && (e.href = "javascript:void(0)")
    });
    a[d].className = "now";
    b.call(a[d], d)
},
Q.tab = function(a, b, c, d) {
    c = c || "onmouseover";
    d = d || 0;
    Q.each(a,
    function(e, f) {
        b[f].style.display = "none";
        e.setAttribute("rel", f);
        e.className = "";
        e[c] = function() {
            a[d].className = "";
            b[d].style.display = "none";
            b[this.getAttribute("rel")].style.display = "block";
            this.className = "now";
            d = this.getAttribute("rel")
        };
        "" == e.getAttribute("href") && (e.href = "javascript:void(0)")
    });
    b[d].style.display = "block";
    a[d].className = "now"
},
Q.TABBOX = function() {
    Q(".TABBOX").each(function(a) {
        var b = Q("a", Q(".type", a)[0]),
        c = Q(".TYPE", a),
        d = Q("a", Q(".box", a)[0]);
        b.each(function(a, f) {
            a.href = "javascript:void(0)";
            a.rel = f;
            a.onmouseover = function() {
                c.each(function(a) {
                    a.style.display = "none"
                });
                b.each(function(a) {
                    a.className = ""
                });
                var a = this.rel;
                b[a].className = "now";
                c[a].style.display = "block";
                d.each(function(b, e) {
                    b.href = "javascript:void(0)";
                    b.rel = e;
                    b.onmouseover = function() {
                        var b = Q(".BOX", c[a]);
                        b.each(function(a) {
                            a.style.display = "none"
                        });
                        d.each(function(a) {
                            a.className = ""
                        });
                        var e = this.rel;
                        d[e].className = "now";
                        b[e].style.display = "block"
                    };
                    if ( - 1 != b.className.indexOf("now")) b.onmouseover()
                })
            };
            if ( - 1 != a.className.indexOf("now")) a.onmouseover()
        })
    })
},
Q.scrollTo = function(a) {
    var b = 0,
    c = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    a && a.tagName ? b = a.offsetTop: 0 < a && (b = a);
    var d = 0,
    e = b - c; (function() {
        10 > d && (d++, window.scrollTo(0, c + e * Math.pow(d / 10, 2.2)), setTimeout(arguments.callee, 10))
    })()
},
Q.floatBar = function() {
    if (window.XMLHttpRequest) {
        var a = function(a) {
            if (Q.isLogin() && window.sa) {
                var c = Q.loginInfo();
                sa.track("Help", {
                    task: "www",
                    guid: Q.guid,
                    userid: c.userId,
                    username: c.nickName,
                    isauthor: c.isAuthor ? "\u662f": "\u5426",
                    helptype: a
                })
            }
        };
        Q("<div>").className("FloatBar").html('<a class="wx" href="javascript:;"><img src="http://img.17k.com/2015/skin/img/wx.png" ></a>').append(Q('<a class="kf_a" title="\u5ba2\u670d" href="javascript:;">').event("click",
        function() {
            var a = this.nextSibling;
            a.style.display = a.clientHeight ? "none": "block"
        })).append(Q('<dl class="Kefu">').append(Q("<dd>").html("<p>\u7535\u8bdd(9:00-24:00)<br><strong>400 6175 217</strong></p>").append(Q('<a href="javascript:;">\u5728\u7ebf\u5ba2\u670d</a>').event("click",
        function() {
            this.parentNode.parentNode.style.display = "none";
            window.easemobim ? easemobim.bind({
                tenantId: 24961,
                visitor: {
                    trueName: Q.loginInfo().userId,
                    userNickname: Q.loginInfo().nickName
                }
            }) : (window.easemobim = {
                config: {
                    onready: function() {
                        var a = Q.cookie("24961"),
                        c = new Date;
                        c.setTime(c.getTime() - 1E9);
                        document.cookie = "24961=;expires=" + c.toUTCString();
                        Q.cookie("24961", a)
                    },
                    tenantId: 24961,
                    hide: !0,
                    autoConnect: !1,
                    satisfaction: !0
                }
            },
            Q.loadJs("http://kefu.easemob.com/webim/easemob.js",
            function() {
                if (Q.cookie("24961")) {
                    var a = Q.cookie("24961"),
                    c = new Date;
                    c.setTime(c.getTime() - 1E9);
                    document.cookie = "24961=;expires=" + c.toUTCString();
                    Q.cookie("24961", a)
                }
                easemobim.bind({
                    tenantId: 24961,
                    visitor: {
                        trueName: Q.loginInfo().userId,
                        userNickname: Q.loginInfo().nickName
                    }
                })
            }));
            a(this.innerHTML)
        })).append(Q('<a href="http://www.17k.com/feedback/listfeedback.action" target="_blank">\u5e2e\u52a9/\u53cd\u9988</a>').event("click",
        function() {
            this.parentNode.parentNode.style.display = "none";
            a(this.innerHTML)
        })))).append(Q('<a class="to" href="javascript:Q.scrollTo()">')).appendto(document.body)
    }
},
Q.floatNav = function(a) {
    for (var b = a.getElementsByTagName("a"), c = 0, d; d = b[c++];) if (location.href == d.href) {
        d.className = "now";
        break
    }
    if (window.XMLHttpRequest) {
        var e = document.createElement("div");
        e.innerHTML = "<div>" + a.innerHTML + "</div>";
        e.className = "Nav FloatNav"; [].map ? document.body.appendChild(e) : window.attachEvent("onload",
        function() {
            document.body.insertBefore(e, a.nextSibling)
        });
        window.onscroll = function() {
            var b = Math.max(a.scrollTop, a.offsetTop);
            e.style.display = (document.documentElement.scrollTop || document.body.scrollTop) > b ? "block": "none"
        }
    }
},
Q.notification = function(a, b, c, d) {
    if (window.Notification) {
        var e = encodeURI(a + b),
        f = function() {
            if (!Q.cookie(e)) {
                var f = new Notification(a, {
                    body: b,
                    icon: "favicon.ico"
                });
                f.reset = function() {
                    Q.cookie(e, null)
                };
                f.onclick = function() {
                    f.close();
                    c && c.call(f)
                };
                f.onclose = function() {
                    d && d.call(f)
                };
                f.onshow = function() {
                    Q.cookie(e, 1, 0)
                }
            }
        };
        "granted" === Notification.permission ? f() : "denied" !== Notification.permission && Notification.requestPermission(function(a) {
            "granted" === a && f()
        })
    } else Q.Notification = new Function
},
Q(window).event("load",
function() {
    Q.setLoginInfo();
    window.console && !Q.isDebug && setTimeout(function() {
//      console.clear();
        var a = ["17K\u5c0f\u8bf4\u7f51 \u624b\u673a\u7248\uff1ah5.17k.com"],
        b = navigator.userAgent;
        0 < b.indexOf("Chrome") && 0 > b.indexOf("Edge") && (a[0] = "%c17K\u5c0f\u8bf4\u7f51\n%c\u624b\u673a\u7248\uff1ah5.17k.com", a.push("font:2em/1.2 MicroSoft YaHei;color:#f60;"), a.push("color:white;background:#f60;padding:0 5px"));
        console.log.apply(console, a)
    },
    1E3);

}));