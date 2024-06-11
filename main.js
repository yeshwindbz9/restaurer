(() => {
  "use strict";
  var e = {
      208: (e, n, t) => {
        t.d(n, { A: () => c });
        var r = t(601),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o());
        i.push([
          e.id,
          'body {\n  font-family: "Pixelify Sans", sans-serif;\n  font-weight: 100;\n}\n\nnav {\n  display: flex; /* Enables Flexbox */\n  justify-content: space-around; /* Aligns items with space between */\n  margin: 2%;\n}\n\n#content-item {\n  display: flex; /* Enables Flexbox */\n  flex-direction: column; /* Stacks items vertically */\n  align-items: center; /* Centers items horizontally */\n  padding: 20px; /* Padding around the content */\n  border-radius: 20px; /* Rounded corners for the card */\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */\n  max-width: 300px; /* Maximum width of the card */\n  margin: auto; /* Center the card on the page */\n  margin-bottom: 20px;\n}\n#content-item:hover {\n  background-color: #e0b030; /* Darker shade on hover */\n}\n#content-menu {\n  display: flex;\n  flex-wrap: wrap;\n}\n#title {\n  font-size: 28px; /* Title font size */\n  margin: 20px; /* Space below the title */\n}\n\n#subheading {\n  font-size: 16px; /* Subheading font size */\n  margin: 20px; /* Space below the subheading */\n}\n\nimg {\n  width: 100%; /* Full width of the card */\n  height: auto; /* Maintain aspect ratio */\n  margin-bottom: 20px; /* Space below the image */\n  border-radius: 20%;\n}\n\n#menuDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\nbutton {\n  font-family: "Pixelify Sans", sans-serif;\n  color: #000; /* Text color */\n  padding: 10px 20px; /* Padding inside the button */\n  border: none; /* No border */\n  border-radius: 8px; /* Rounded corners */\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */\n  font-size: 16px; /* Font size */\n  font-weight: bold; /* Font weight */\n  text-transform: uppercase; /* Uppercase text */\n  cursor: pointer; /* Pointer cursor on hover */\n  transition: background-color 0.3s ease; /* Smooth background color transition */\n}\n\nbutton:hover {\n  background-color: #e0b030; /* Darker shade on hover */\n}\n',
          "",
        ]);
        const c = i;
      },
      314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  n.push(l));
              }
            }),
            n
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              d = r.base ? s[0] + r.base : s[0],
              l = a[d] || 0,
              u = "".concat(d, " ").concat(l);
            a[d] = l + 1;
            var p = t(u),
              h = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(h);
            else {
              var m = o(h, r);
              (r.byIndex = c),
                n.splice(c, 0, { identifier: u, updater: m, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              n[c].references--;
            }
            for (var s = r(e, o), d = 0; d < a.length; d++) {
              var l = t(a[d]);
              0 === n[l].references && (n[l].updater(), n.splice(l, 1));
            }
            a = s;
          };
        };
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0),
    (() => {
      const e = (e, n, t) => {
          const r = document.createElement("div");
          r.setAttribute("id", "content-item");
          const o = document.createElement("h1");
          (o.innerHTML = e), o.setAttribute("id", "title");
          const a = document.createElement("h3");
          (a.innerHTML = n), a.setAttribute("id", "subheading");
          const i = document.createElement("img");
          return (
            i.setAttribute("src", t),
            i.setAttribute("width", "360"),
            i.setAttribute("height", "360"),
            i.setAttribute("alt", "bear-eating.gif"),
            r.append(o, a, i),
            r
          );
        },
        n = e,
        r = () =>
          n(
            "Restaurer",
            "The word 'restaurant' originated from the French verb 'restaurer,' meaning 'to restore' or 'renew,' emphasizing the idea of providing food that rejuvenates health.",
            "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzAxeGl4eGVjanZhMm11a3FibGIyYWhieXl0OGRicDdnMmxtY295bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gj5bkqZGmr0Jkn5trF/giphy.webp"
          );
      var o = t(72),
        a = t.n(o),
        i = t(825),
        c = t.n(i),
        s = t(659),
        d = t.n(s),
        l = t(56),
        u = t.n(l),
        p = t(540),
        h = t.n(p),
        m = t(113),
        f = t.n(m),
        b = t(208),
        v = {};
      (v.styleTagTransform = f()),
        (v.setAttributes = u()),
        (v.insert = d().bind(null, "head")),
        (v.domAPI = c()),
        (v.insertStyleElement = h()),
        a()(b.A, v),
        b.A && b.A.locals && b.A.locals,
        document.querySelector("#content").appendChild(r());
      const g = (e) => {
        (() => {
          const e = document.querySelector("#content");
          e.removeChild(e.firstChild);
        })(),
          document.querySelector("#content").appendChild(e);
      };
      document.querySelector("#home").addEventListener("click", () => g(r())),
        document.querySelector("#menu").addEventListener("click", () =>
          g(
            (() => {
              const n = document.createElement("div");
              return (
                n.setAttribute("id", "content-menu"),
                n.appendChild(
                  e(
                    "Burger",
                    "Savor the Classic Taste of Indulgence with Our Signature Burgers , Flavor in Every Bite!",
                    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHlwODk2czNhbTl2dHAybGZtMmo1bW5nenhvOXVsaXRrY2txZnd5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1qWN9dtmeSD25DCBq9/giphy.webp"
                  )
                ),
                n.appendChild(
                  e(
                    "Pizza",
                    "Experience the Slice of Heaven , Our Pizzas: A Symphony of Fresh Ingredients and Melting Flavors!",
                    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHR4OWFzam5qbnpoNXU0Z2dvd2I0aGI1cWVxNTRmanJucGY0eml0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5vt9MLYzcB3OYAAgMy/giphy.webp"
                  )
                ),
                n.appendChild(
                  e(
                    "Fries",
                    "French fries: crispy, golden batons of delight!",
                    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGt4OXliYW13ZzE3OG9vMjFjMWJkNnl6aGdja3o0NWkzaXZmZzd3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FxljZEE7ebLj2/giphy.webp"
                  )
                ),
                n.appendChild(
                  e(
                    "IceCream",
                    "Indulge in the Creamy Delight! Our Ice Creams: A Symphony of Chilled Bliss and Irresistible Flavors! ",
                    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2pkNHlxcWlkbm5zZGd5N3c0aG16OWEzdzRtMmNpNW5rNnlrZzN1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cX3qC7ixQVqWQ/giphy.webp"
                  )
                ),
                n
              );
            })()
          )
        ),
        document
          .querySelector("#about")
          .addEventListener("click", () =>
            g(
              n(
                "This is us!",
                "A Hearty Thanks for checking out us , Refreshed yet? Our Meal Feels Like Home. Wishing You a Delightful Visit and a Memorable Time!",
                "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnczdm15ZzhhcGtxYnF6cWVzNm1pZnh4MXBrMDJxbzdhZGFlcXJ1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hUL5R6B4HYoXADpnvJ/giphy.webp"
              )
            )
          );
    })();
})();
