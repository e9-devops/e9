(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['app~00cb062a'],
    {
        1157: function (e, t, n) {
            var r, i;
            /*!
             * jQuery JavaScript Library v3.5.0
             * https://jquery.com/
             *
             * Includes Sizzle.js
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://jquery.org/license
             *
             * Date: 2020-04-10T15:07Z
             */ (function (t, n) {
                'use strict';
                'object' === typeof e.exports
                    ? (e.exports = t.document
                        ? n(t, !0)
                        : function (e) {
                            if (!e.document) throw new Error('jQuery requires a window with a document');
                            return n(e);
                        })
                    : n(t);
            })('undefined' !== typeof window ? window : this, function (n, o) {
                'use strict';
                var a = [],
                    s = Object.getPrototypeOf,
                    u = a.slice,
                    l = a.flat
                        ? function (e) {
                            return a.flat.call(e);
                        }
                        : function (e) {
                            return a.concat.apply([], e);
                        },
                    c = a.push,
                    f = a.indexOf,
                    p = {},
                    d = p.toString,
                    h = p.hasOwnProperty,
                    g = h.toString,
                    v = g.call(Object),
                    y = {},
                    m = function (e) {
                        return 'function' === typeof e && 'number' !== typeof e.nodeType;
                    },
                    x = function (e) {
                        return null != e && e === e.window;
                    },
                    b = n.document,
                    w = {type: !0, src: !0, nonce: !0, noModule: !0};
                function T(e, t, n) {
                    n = n || b;
                    var r,
                        i,
                        o = n.createElement('script');
                    if (((o.text = e), t)) for (r in w) (i = t[r] || (t.getAttribute && t.getAttribute(r))), i && o.setAttribute(r, i);
                    n.head.appendChild(o).parentNode.removeChild(o);
                }
                function C(e) {
                    return null == e ? e + '' : 'object' === typeof e || 'function' === typeof e ? p[d.call(e)] || 'object' : typeof e;
                }
                var E = '3.5.0',
                    k = function (e, t) {
                        return new k.fn.init(e, t);
                    };
                function S(e) {
                    var t = !!e && 'length' in e && e.length,
                        n = C(e);
                    return !m(e) && !x(e) && ('array' === n || 0 === t || ('number' === typeof t && t > 0 && t - 1 in e));
                }
                (k.fn = k.prototype = {
                    jquery: E,
                    constructor: k,
                    length: 0,
                    toArray: function () {
                        return u.call(this);
                    },
                    get: function (e) {
                        return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e];
                    },
                    pushStack: function (e) {
                        var t = k.merge(this.constructor(), e);
                        return (t.prevObject = this), t;
                    },
                    each: function (e) {
                        return k.each(this, e);
                    },
                    map: function (e) {
                        return this.pushStack(
                            k.map(this, function (t, n) {
                                return e.call(t, n, t);
                            })
                        );
                    },
                    slice: function () {
                        return this.pushStack(u.apply(this, arguments));
                    },
                    first: function () {
                        return this.eq(0);
                    },
                    last: function () {
                        return this.eq(-1);
                    },
                    even: function () {
                        return this.pushStack(
                            k.grep(this, function (e, t) {
                                return (t + 1) % 2;
                            })
                        );
                    },
                    odd: function () {
                        return this.pushStack(
                            k.grep(this, function (e, t) {
                                return t % 2;
                            })
                        );
                    },
                    eq: function (e) {
                        var t = this.length,
                            n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                    },
                    end: function () {
                        return this.prevObject || this.constructor();
                    },
                    push: c,
                    sort: a.sort,
                    splice: a.splice,
                }),
                (k.extend = k.fn.extend = function () {
                    var e,
                        t,
                        n,
                        r,
                        i,
                        o,
                        a = arguments[0] || {},
                        s = 1,
                        u = arguments.length,
                        l = !1;
                    for ('boolean' === typeof a && ((l = a), (a = arguments[s] || {}), s++), 'object' === typeof a || m(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                        if (null != (e = arguments[s]))
                            for (t in e)
                                (r = e[t]),
                                '__proto__' !== t &&
                                            a !== r &&
                                            (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                                                ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}), (i = !1), (a[t] = k.extend(l, o, r)))
                                                : void 0 !== r && (a[t] = r));
                    return a;
                }),
                k.extend({
                    expando: 'jQuery' + (E + Math.random()).replace(/\D/g, ''),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e);
                    },
                    noop: function () {},
                    isPlainObject: function (e) {
                        var t, n;
                        return !(!e || '[object Object]' !== d.call(e)) && ((t = s(e)), !t || ((n = h.call(t, 'constructor') && t.constructor), 'function' === typeof n && g.call(n) === v));
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    globalEval: function (e, t, n) {
                        T(e, {nonce: t && t.nonce}, n);
                    },
                    each: function (e, t) {
                        var n,
                            r = 0;
                        if (S(e)) {
                            for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                        return e;
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (S(Object(e)) ? k.merge(n, 'string' === typeof e ? [e] : e) : c.call(n, e)), n;
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : f.call(t, e, n);
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                        return (e.length = i), e;
                    },
                    grep: function (e, t, n) {
                        for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)), r !== s && i.push(e[o]);
                        return i;
                    },
                    map: function (e, t, n) {
                        var r,
                            i,
                            o = 0,
                            a = [];
                        if (S(e)) for (r = e.length; o < r; o++) (i = t(e[o], o, n)), null != i && a.push(i);
                        else for (o in e) (i = t(e[o], o, n)), null != i && a.push(i);
                        return l(a);
                    },
                    guid: 1,
                    support: y,
                }),
                'function' === typeof Symbol && (k.fn[Symbol.iterator] = a[Symbol.iterator]),
                k.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
                    p['[object ' + t + ']'] = t.toLowerCase();
                });
                var A =
                    /*!
                     * Sizzle CSS Selector Engine v2.3.5
                     * https://sizzlejs.com/
                     *
                     * Copyright JS Foundation and other contributors
                     * Released under the MIT license
                     * https://js.foundation/
                     *
                     * Date: 2020-03-14
                     */
                    (function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            g,
                            v,
                            y,
                            m,
                            x,
                            b = 'sizzle' + 1 * new Date(),
                            w = e.document,
                            T = 0,
                            C = 0,
                            E = ue(),
                            k = ue(),
                            S = ue(),
                            A = ue(),
                            N = function (e, t) {
                                return e === t && (f = !0), 0;
                            },
                            D = {}.hasOwnProperty,
                            j = [],
                            q = j.pop,
                            L = j.push,
                            H = j.push,
                            O = j.slice,
                            P = function (e, t) {
                                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                                return -1;
                            },
                            R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                            M = '[\\x20\\t\\r\\n\\f]',
                            I = '(?:\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
                            W = '\\[' + M + '*(' + I + ')(?:' + M + '*([*^$|!~]?=)' + M + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + I + '))|)' + M + '*\\]',
                            F = ':(' + I + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + W + ')*)|.*)\\)|)',
                            B = new RegExp(M + '+', 'g'),
                            $ = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
                            _ = new RegExp('^' + M + '*,' + M + '*'),
                            z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
                            U = new RegExp(M + '|>'),
                            X = new RegExp(F),
                            V = new RegExp('^' + I + '$'),
                            G = {
                                ID: new RegExp('^#(' + I + ')'),
                                CLASS: new RegExp('^\\.(' + I + ')'),
                                TAG: new RegExp('^(' + I + '|[*])'),
                                ATTR: new RegExp('^' + W),
                                PSEUDO: new RegExp('^' + F),
                                CHILD: new RegExp(
                                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)',
                                    'i'
                                ),
                                bool: new RegExp('^(?:' + R + ')$', 'i'),
                                needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i'),
                            },
                            Y = /HTML$/i,
                            J = /^(?:input|select|textarea|button)$/i,
                            Q = /^h\d$/i,
                            K = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'),
                            ne = function (e, t) {
                                var n = '0x' + e.slice(1) - 65536;
                                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                            },
                            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            ie = function (e, t) {
                                return t ? ('\0' === e ? '�' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ') : '\\' + e;
                            },
                            oe = function () {
                                p();
                            },
                            ae = be(
                                function (e) {
                                    return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
                                },
                                {dir: 'parentNode', next: 'legend'}
                            );
                        try {
                            H.apply((j = O.call(w.childNodes)), w.childNodes), j[w.childNodes.length].nodeType;
                        } catch (Ae) {
                            H = {
                                apply: j.length
                                    ? function (e, t) {
                                        L.apply(e, O.call(t));
                                    }
                                    : function (e, t) {
                                        var n = e.length,
                                            r = 0;
                                        while ((e[n++] = t[r++]));
                                        e.length = n - 1;
                                    },
                            };
                        }
                        function se(e, t, r, i) {
                            var o,
                                s,
                                l,
                                c,
                                f,
                                h,
                                y,
                                m = t && t.ownerDocument,
                                w = t ? t.nodeType : 9;
                            if (((r = r || []), 'string' !== typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return r;
                            if (!i && (p(t), (t = t || d), g)) {
                                if (11 !== w && (f = Z.exec(e)))
                                    if ((o = f[1])) {
                                        if (9 === w) {
                                            if (!(l = t.getElementById(o))) return r;
                                            if (l.id === o) return r.push(l), r;
                                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                                    } else {
                                        if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r;
                                    }
                                if (n.qsa && !A[e + ' '] && (!v || !v.test(e)) && (1 !== w || 'object' !== t.nodeName.toLowerCase())) {
                                    if (((y = e), (m = t), 1 === w && (U.test(e) || z.test(e)))) {
                                        (m = (ee.test(e) && ye(t.parentNode)) || t),
                                        (m === t && n.scope) || ((c = t.getAttribute('id')) ? (c = c.replace(re, ie)) : t.setAttribute('id', (c = b))),
                                        (h = a(e)),
                                        (s = h.length);
                                        while (s--) h[s] = (c ? '#' + c : ':scope') + ' ' + xe(h[s]);
                                        y = h.join(',');
                                    }
                                    try {
                                        return H.apply(r, m.querySelectorAll(y)), r;
                                    } catch (T) {
                                        A(e, !0);
                                    } finally {
                                        c === b && t.removeAttribute('id');
                                    }
                                }
                            }
                            return u(e.replace($, '$1'), t, r, i);
                        }
                        function ue() {
                            var e = [];
                            function t(n, i) {
                                return e.push(n + ' ') > r.cacheLength && delete t[e.shift()], (t[n + ' '] = i);
                            }
                            return t;
                        }
                        function le(e) {
                            return (e[b] = !0), e;
                        }
                        function ce(e) {
                            var t = d.createElement('fieldset');
                            try {
                                return !!e(t);
                            } catch (Ae) {
                                return !1;
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), (t = null);
                            }
                        }
                        function fe(e, t) {
                            var n = e.split('|'),
                                i = n.length;
                            while (i--) r.attrHandle[n[i]] = t;
                        }
                        function pe(e, t) {
                            var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (r) return r;
                            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
                            return e ? 1 : -1;
                        }
                        function de(e) {
                            return function (t) {
                                var n = t.nodeName.toLowerCase();
                                return 'input' === n && t.type === e;
                            };
                        }
                        function he(e) {
                            return function (t) {
                                var n = t.nodeName.toLowerCase();
                                return ('input' === n || 'button' === n) && t.type === e;
                            };
                        }
                        function ge(e) {
                            return function (t) {
                                return 'form' in t
                                    ? t.parentNode && !1 === t.disabled
                                        ? 'label' in t
                                            ? 'label' in t.parentNode
                                                ? t.parentNode.disabled === e
                                                : t.disabled === e
                                            : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                                        : t.disabled === e
                                    : 'label' in t && t.disabled === e;
                            };
                        }
                        function ve(e) {
                            return le(function (t) {
                                return (
                                    (t = +t),
                                    le(function (n, r) {
                                        var i,
                                            o = e([], n.length, t),
                                            a = o.length;
                                        while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                                    })
                                );
                            });
                        }
                        function ye(e) {
                            return e && 'undefined' !== typeof e.getElementsByTagName && e;
                        }
                        for (t in ((n = se.support = {}),
                        (o = se.isXML = function (e) {
                            var t = e.namespaceURI,
                                n = (e.ownerDocument || e).documentElement;
                            return !Y.test(t || (n && n.nodeName) || 'HTML');
                        }),
                        (p = se.setDocument = function (e) {
                            var t,
                                i,
                                a = e ? e.ownerDocument || e : w;
                            return a != d && 9 === a.nodeType && a.documentElement
                                ? ((d = a),
                                (h = d.documentElement),
                                (g = !o(d)),
                                w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener('unload', oe, !1) : i.attachEvent && i.attachEvent('onunload', oe)),
                                (n.scope = ce(function (e) {
                                    return h.appendChild(e).appendChild(d.createElement('div')), 'undefined' !== typeof e.querySelectorAll && !e.querySelectorAll(':scope fieldset div').length;
                                })),
                                (n.attributes = ce(function (e) {
                                    return (e.className = 'i'), !e.getAttribute('className');
                                })),
                                (n.getElementsByTagName = ce(function (e) {
                                    return e.appendChild(d.createComment('')), !e.getElementsByTagName('*').length;
                                })),
                                (n.getElementsByClassName = K.test(d.getElementsByClassName)),
                                (n.getById = ce(function (e) {
                                    return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                                })),
                                n.getById
                                    ? ((r.filter['ID'] = function (e) {
                                        var t = e.replace(te, ne);
                                        return function (e) {
                                            return e.getAttribute('id') === t;
                                        };
                                    }),
                                    (r.find['ID'] = function (e, t) {
                                        if ('undefined' !== typeof t.getElementById && g) {
                                            var n = t.getElementById(e);
                                            return n ? [n] : [];
                                        }
                                    }))
                                    : ((r.filter['ID'] = function (e) {
                                        var t = e.replace(te, ne);
                                        return function (e) {
                                            var n = 'undefined' !== typeof e.getAttributeNode && e.getAttributeNode('id');
                                            return n && n.value === t;
                                        };
                                    }),
                                    (r.find['ID'] = function (e, t) {
                                        if ('undefined' !== typeof t.getElementById && g) {
                                            var n,
                                                r,
                                                i,
                                                o = t.getElementById(e);
                                            if (o) {
                                                if (((n = o.getAttributeNode('id')), n && n.value === e)) return [o];
                                                (i = t.getElementsByName(e)), (r = 0);
                                                while ((o = i[r++])) if (((n = o.getAttributeNode('id')), n && n.value === e)) return [o];
                                            }
                                            return [];
                                        }
                                    })),
                                (r.find['TAG'] = n.getElementsByTagName
                                    ? function (e, t) {
                                        return 'undefined' !== typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                    }
                                    : function (e, t) {
                                        var n,
                                            r = [],
                                            i = 0,
                                            o = t.getElementsByTagName(e);
                                        if ('*' === e) {
                                            while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                            return r;
                                        }
                                        return o;
                                    }),
                                (r.find['CLASS'] =
                                      n.getElementsByClassName &&
                                      function (e, t) {
                                          if ('undefined' !== typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
                                      }),
                                (y = []),
                                (v = []),
                                (n.qsa = K.test(d.querySelectorAll)) &&
                                      (ce(function (e) {
                                          var t;
                                          (h.appendChild(e).innerHTML = '<a id=\'' + b + '\'></a><select id=\'' + b + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>'),
                                          e.querySelectorAll('[msallowcapture^=\'\']').length && v.push('[*^$]=' + M + '*(?:\'\'|"")'),
                                          e.querySelectorAll('[selected]').length || v.push('\\[' + M + '*(?:value|' + R + ')'),
                                          e.querySelectorAll('[id~=' + b + '-]').length || v.push('~='),
                                          (t = d.createElement('input')),
                                          t.setAttribute('name', ''),
                                          e.appendChild(t),
                                          e.querySelectorAll('[name=\'\']').length || v.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'),
                                          e.querySelectorAll(':checked').length || v.push(':checked'),
                                          e.querySelectorAll('a#' + b + '+*').length || v.push('.#.+[+~]'),
                                          e.querySelectorAll('\\\f'),
                                          v.push('[\\r\\n\\f]');
                                      }),
                                      ce(function (e) {
                                          e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
                                          var t = d.createElement('input');
                                          t.setAttribute('type', 'hidden'),
                                          e.appendChild(t).setAttribute('name', 'D'),
                                          e.querySelectorAll('[name=d]').length && v.push('name' + M + '*[*^$|!~]?='),
                                          2 !== e.querySelectorAll(':enabled').length && v.push(':enabled', ':disabled'),
                                          (h.appendChild(e).disabled = !0),
                                          2 !== e.querySelectorAll(':disabled').length && v.push(':enabled', ':disabled'),
                                          e.querySelectorAll('*,:x'),
                                          v.push(',.*:');
                                      })),
                                (n.matchesSelector = K.test((m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                                      ce(function (e) {
                                          (n.disconnectedMatch = m.call(e, '*')), m.call(e, '[s!=\'\']:x'), y.push('!=', F);
                                      }),
                                (v = v.length && new RegExp(v.join('|'))),
                                (y = y.length && new RegExp(y.join('|'))),
                                (t = K.test(h.compareDocumentPosition)),
                                (x =
                                      t || K.test(h.contains)
                                          ? function (e, t) {
                                              var n = 9 === e.nodeType ? e.documentElement : e,
                                                  r = t && t.parentNode;
                                              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                          }
                                          : function (e, t) {
                                              if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                              return !1;
                                          }),
                                (N = t
                                    ? function (e, t) {
                                        if (e === t) return (f = !0), 0;
                                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                        return (
                                            r ||
                                                ((r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1),
                                                1 & r || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                                    ? e == d || (e.ownerDocument == w && x(w, e))
                                                        ? -1
                                                        : t == d || (t.ownerDocument == w && x(w, t))
                                                            ? 1
                                                            : c
                                                                ? P(c, e) - P(c, t)
                                                                : 0
                                                    : 4 & r
                                                        ? -1
                                                        : 1)
                                        );
                                    }
                                    : function (e, t) {
                                        if (e === t) return (f = !0), 0;
                                        var n,
                                            r = 0,
                                            i = e.parentNode,
                                            o = t.parentNode,
                                            a = [e],
                                            s = [t];
                                        if (!i || !o) return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                                        if (i === o) return pe(e, t);
                                        n = e;
                                        while ((n = n.parentNode)) a.unshift(n);
                                        n = t;
                                        while ((n = n.parentNode)) s.unshift(n);
                                        while (a[r] === s[r]) r++;
                                        return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0;
                                    }),
                                d)
                                : d;
                        }),
                        (se.matches = function (e, t) {
                            return se(e, null, null, t);
                        }),
                        (se.matchesSelector = function (e, t) {
                            if ((p(e), n.matchesSelector && g && !A[t + ' '] && (!y || !y.test(t)) && (!v || !v.test(t))))
                                try {
                                    var r = m.call(e, t);
                                    if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                                } catch (Ae) {
                                    A(t, !0);
                                }
                            return se(t, d, null, [e]).length > 0;
                        }),
                        (se.contains = function (e, t) {
                            return (e.ownerDocument || e) != d && p(e), x(e, t);
                        }),
                        (se.attr = function (e, t) {
                            (e.ownerDocument || e) != d && p(e);
                            var i = r.attrHandle[t.toLowerCase()],
                                o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                        }),
                        (se.escape = function (e) {
                            return (e + '').replace(re, ie);
                        }),
                        (se.error = function (e) {
                            throw new Error('Syntax error, unrecognized expression: ' + e);
                        }),
                        (se.uniqueSort = function (e) {
                            var t,
                                r = [],
                                i = 0,
                                o = 0;
                            if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(N), f)) {
                                while ((t = e[o++])) t === e[o] && (i = r.push(o));
                                while (i--) e.splice(r[i], 1);
                            }
                            return (c = null), e;
                        }),
                        (i = se.getText = function (e) {
                            var t,
                                n = '',
                                r = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ('string' === typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                                } else if (3 === o || 4 === o) return e.nodeValue;
                            } else while ((t = e[r++])) n += i(t);
                            return n;
                        }),
                        (r = se.selectors = {
                            cacheLength: 50,
                            createPseudo: le,
                            match: G,
                            attrHandle: {},
                            find: {},
                            relative: {'>': {dir: 'parentNode', first: !0}, ' ': {dir: 'parentNode'}, '+': {dir: 'previousSibling', first: !0}, '~': {dir: 'previousSibling'}},
                            preFilter: {
                                ATTR: function (e) {
                                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
                                },
                                CHILD: function (e) {
                                    return (
                                        (e[1] = e[1].toLowerCase()),
                                        'nth' === e[1].slice(0, 3)
                                            ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))), (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                                            : e[3] && se.error(e[0]),
                                        e
                                    );
                                },
                                PSEUDO: function (e) {
                                    var t,
                                        n = !e[6] && e[2];
                                    return G['CHILD'].test(e[0])
                                        ? null
                                        : (e[3]
                                            ? (e[2] = e[4] || e[5] || '')
                                            : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                                        e.slice(0, 3));
                                },
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return '*' === e
                                        ? function () {
                                            return !0;
                                        }
                                        : function (e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t;
                                        };
                                },
                                CLASS: function (e) {
                                    var t = E[e + ' '];
                                    return (
                                        t ||
                                        ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                                            E(e, function (e) {
                                                return t.test(('string' === typeof e.className && e.className) || ('undefined' !== typeof e.getAttribute && e.getAttribute('class')) || '');
                                            }))
                                    );
                                },
                                ATTR: function (e, t, n) {
                                    return function (r) {
                                        var i = se.attr(r, e);
                                        return null == i
                                            ? '!=' === t
                                            : !t ||
                                                  ((i += ''),
                                                  '=' === t
                                                      ? i === n
                                                      : '!=' === t
                                                          ? i !== n
                                                          : '^=' === t
                                                              ? n && 0 === i.indexOf(n)
                                                              : '*=' === t
                                                                  ? n && i.indexOf(n) > -1
                                                                  : '$=' === t
                                                                      ? n && i.slice(-n.length) === n
                                                                      : '~=' === t
                                                                          ? (' ' + i.replace(B, ' ') + ' ').indexOf(n) > -1
                                                                          : '|=' === t && (i === n || i.slice(0, n.length + 1) === n + '-'));
                                    };
                                },
                                CHILD: function (e, t, n, r, i) {
                                    var o = 'nth' !== e.slice(0, 3),
                                        a = 'last' !== e.slice(-4),
                                        s = 'of-type' === t;
                                    return 1 === r && 0 === i
                                        ? function (e) {
                                            return !!e.parentNode;
                                        }
                                        : function (t, n, u) {
                                            var l,
                                                c,
                                                f,
                                                p,
                                                d,
                                                h,
                                                g = o !== a ? 'nextSibling' : 'previousSibling',
                                                v = t.parentNode,
                                                y = s && t.nodeName.toLowerCase(),
                                                m = !u && !s,
                                                x = !1;
                                            if (v) {
                                                if (o) {
                                                    while (g) {
                                                        p = t;
                                                        while ((p = p[g])) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                                        h = g = 'only' === e && !h && 'nextSibling';
                                                    }
                                                    return !0;
                                                }
                                                if (((h = [a ? v.firstChild : v.lastChild]), a && m)) {
                                                    (p = v),
                                                    (f = p[b] || (p[b] = {})),
                                                    (c = f[p.uniqueID] || (f[p.uniqueID] = {})),
                                                    (l = c[e] || []),
                                                    (d = l[0] === T && l[1]),
                                                    (x = d && l[2]),
                                                    (p = d && v.childNodes[d]);
                                                    while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                                        if (1 === p.nodeType && ++x && p === t) {
                                                            c[e] = [T, d, x];
                                                            break;
                                                        }
                                                } else if (
                                                    (m && ((p = t), (f = p[b] || (p[b] = {})), (c = f[p.uniqueID] || (f[p.uniqueID] = {})), (l = c[e] || []), (d = l[0] === T && l[1]), (x = d)),
                                                    !1 === x)
                                                )
                                                    while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                                        if (
                                                            (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) &&
                                                              ++x &&
                                                              (m && ((f = p[b] || (p[b] = {})), (c = f[p.uniqueID] || (f[p.uniqueID] = {})), (c[e] = [T, x])), p === t)
                                                        )
                                                            break;
                                                return (x -= i), x === r || (x % r === 0 && x / r >= 0);
                                            }
                                        };
                                },
                                PSEUDO: function (e, t) {
                                    var n,
                                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error('unsupported pseudo: ' + e);
                                    return i[b]
                                        ? i(t)
                                        : i.length > 1
                                            ? ((n = [e, e, '', t]),
                                            r.setFilters.hasOwnProperty(e.toLowerCase())
                                                ? le(function (e, n) {
                                                    var r,
                                                        o = i(e, t),
                                                        a = o.length;
                                                    while (a--) (r = P(e, o[a])), (e[r] = !(n[r] = o[a]));
                                                })
                                                : function (e) {
                                                    return i(e, 0, n);
                                                })
                                            : i;
                                },
                            },
                            pseudos: {
                                not: le(function (e) {
                                    var t = [],
                                        n = [],
                                        r = s(e.replace($, '$1'));
                                    return r[b]
                                        ? le(function (e, t, n, i) {
                                            var o,
                                                a = r(e, null, i, []),
                                                s = e.length;
                                            while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                                        })
                                        : function (e, i, o) {
                                            return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                                        };
                                }),
                                has: le(function (e) {
                                    return function (t) {
                                        return se(e, t).length > 0;
                                    };
                                }),
                                contains: le(function (e) {
                                    return (
                                        (e = e.replace(te, ne)),
                                        function (t) {
                                            return (t.textContent || i(t)).indexOf(e) > -1;
                                        }
                                    );
                                }),
                                lang: le(function (e) {
                                    return (
                                        V.test(e || '') || se.error('unsupported lang: ' + e),
                                        (e = e.replace(te, ne).toLowerCase()),
                                        function (t) {
                                            var n;
                                            do {
                                                if ((n = g ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))) return (n = n.toLowerCase()), n === e || 0 === n.indexOf(e + '-');
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1;
                                        }
                                    );
                                }),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id;
                                },
                                root: function (e) {
                                    return e === h;
                                },
                                focus: function (e) {
                                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                },
                                enabled: ge(!1),
                                disabled: ge(!0),
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function (e) {
                                    return !r.pseudos['empty'](e);
                                },
                                header: function (e) {
                                    return Q.test(e.nodeName);
                                },
                                input: function (e) {
                                    return J.test(e.nodeName);
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ('input' === t && 'button' === e.type) || 'button' === t;
                                },
                                text: function (e) {
                                    var t;
                                    return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
                                },
                                first: ve(function () {
                                    return [0];
                                }),
                                last: ve(function (e, t) {
                                    return [t - 1];
                                }),
                                eq: ve(function (e, t, n) {
                                    return [n < 0 ? n + t : n];
                                }),
                                even: ve(function (e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                odd: ve(function (e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                lt: ve(function (e, t, n) {
                                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                                    return e;
                                }),
                                gt: ve(function (e, t, n) {
                                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                    return e;
                                }),
                            },
                        }),
                        (r.pseudos['nth'] = r.pseudos['eq']),
                        {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}))
                            r.pseudos[t] = de(t);
                        for (t in {submit: !0, reset: !0}) r.pseudos[t] = he(t);
                        function me() {}
                        function xe(e) {
                            for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
                            return r;
                        }
                        function be(e, t, n) {
                            var r = t.dir,
                                i = t.next,
                                o = i || r,
                                a = n && 'parentNode' === o,
                                s = C++;
                            return t.first
                                ? function (t, n, i) {
                                    while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
                                    return !1;
                                }
                                : function (t, n, u) {
                                    var l,
                                        c,
                                        f,
                                        p = [T, s];
                                    if (u) {
                                        while ((t = t[r])) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                                    } else
                                        while ((t = t[r]))
                                            if (1 === t.nodeType || a)
                                                if (((f = t[b] || (t[b] = {})), (c = f[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                                else {
                                                    if ((l = c[o]) && l[0] === T && l[1] === s) return (p[2] = l[2]);
                                                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                                                }
                                    return !1;
                                };
                        }
                        function we(e) {
                            return e.length > 1
                                ? function (t, n, r) {
                                    var i = e.length;
                                    while (i--) if (!e[i](t, n, r)) return !1;
                                    return !0;
                                }
                                : e[0];
                        }
                        function Te(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                            return n;
                        }
                        function Ce(e, t, n, r, i) {
                            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
                            return a;
                        }
                        function Ee(e, t, n, r, i, o) {
                            return (
                                r && !r[b] && (r = Ee(r)),
                                i && !i[b] && (i = Ee(i, o)),
                                le(function (o, a, s, u) {
                                    var l,
                                        c,
                                        f,
                                        p = [],
                                        d = [],
                                        h = a.length,
                                        g = o || Te(t || '*', s.nodeType ? [s] : s, []),
                                        v = !e || (!o && t) ? g : Ce(g, p, e, s, u),
                                        y = n ? (i || (o ? e : h || r) ? [] : a) : v;
                                    if ((n && n(v, y, s, u), r)) {
                                        (l = Ce(y, d)), r(l, [], s, u), (c = l.length);
                                        while (c--) (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                                    }
                                    if (o) {
                                        if (i || e) {
                                            if (i) {
                                                (l = []), (c = y.length);
                                                while (c--) (f = y[c]) && l.push((v[c] = f));
                                                i(null, (y = []), l, u);
                                            }
                                            c = y.length;
                                            while (c--) (f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                                        }
                                    } else (y = Ce(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, u) : H.apply(a, y);
                                })
                            );
                        }
                        function ke(e) {
                            for (
                                var t,
                                    n,
                                    i,
                                    o = e.length,
                                    a = r.relative[e[0].type],
                                    s = a || r.relative[' '],
                                    u = a ? 1 : 0,
                                    c = be(
                                        function (e) {
                                            return e === t;
                                        },
                                        s,
                                        !0
                                    ),
                                    f = be(
                                        function (e) {
                                            return P(t, e) > -1;
                                        },
                                        s,
                                        !0
                                    ),
                                    p = [
                                        function (e, n, r) {
                                            var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                                            return (t = null), i;
                                        },
                                    ];
                                u < o;
                                u++
                            )
                                if ((n = r.relative[e[u].type])) p = [be(we(p), n)];
                                else {
                                    if (((n = r.filter[e[u].type].apply(null, e[u].matches)), n[b])) {
                                        for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                                        return Ee(
                                            u > 1 && we(p),
                                            u > 1 && xe(e.slice(0, u - 1).concat({value: ' ' === e[u - 2].type ? '*' : ''})).replace($, '$1'),
                                            n,
                                            u < i && ke(e.slice(u, i)),
                                            i < o && ke((e = e.slice(i))),
                                            i < o && xe(e)
                                        );
                                    }
                                    p.push(n);
                                }
                            return we(p);
                        }
                        function Se(e, t) {
                            var n = t.length > 0,
                                i = e.length > 0,
                                o = function (o, a, s, u, c) {
                                    var f,
                                        h,
                                        v,
                                        y = 0,
                                        m = '0',
                                        x = o && [],
                                        b = [],
                                        w = l,
                                        C = o || (i && r.find['TAG']('*', c)),
                                        E = (T += null == w ? 1 : Math.random() || 0.1),
                                        k = C.length;
                                    for (c && (l = a == d || a || c); m !== k && null != (f = C[m]); m++) {
                                        if (i && f) {
                                            (h = 0), a || f.ownerDocument == d || (p(f), (s = !g));
                                            while ((v = e[h++]))
                                                if (v(f, a || d, s)) {
                                                    u.push(f);
                                                    break;
                                                }
                                            c && (T = E);
                                        }
                                        n && ((f = !v && f) && y--, o && x.push(f));
                                    }
                                    if (((y += m), n && m !== y)) {
                                        h = 0;
                                        while ((v = t[h++])) v(x, b, a, s);
                                        if (o) {
                                            if (y > 0) while (m--) x[m] || b[m] || (b[m] = q.call(u));
                                            b = Ce(b);
                                        }
                                        H.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u);
                                    }
                                    return c && ((T = E), (l = w)), x;
                                };
                            return n ? le(o) : o;
                        }
                        return (
                            (me.prototype = r.filters = r.pseudos),
                            (r.setFilters = new me()),
                            (a = se.tokenize = function (e, t) {
                                var n,
                                    i,
                                    o,
                                    a,
                                    s,
                                    u,
                                    l,
                                    c = k[e + ' '];
                                if (c) return t ? 0 : c.slice(0);
                                (s = e), (u = []), (l = r.preFilter);
                                while (s) {
                                    for (a in ((n && !(i = _.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                                    (n = !1),
                                    (i = z.exec(s)) && ((n = i.shift()), o.push({value: n, type: i[0].replace($, ' ')}), (s = s.slice(n.length))),
                                    r.filter))
                                        !(i = G[a].exec(s)) || (l[a] && !(i = l[a](i))) || ((n = i.shift()), o.push({value: n, type: a, matches: i}), (s = s.slice(n.length)));
                                    if (!n) break;
                                }
                                return t ? s.length : s ? se.error(e) : k(e, u).slice(0);
                            }),
                            (s = se.compile = function (e, t) {
                                var n,
                                    r = [],
                                    i = [],
                                    o = S[e + ' '];
                                if (!o) {
                                    t || (t = a(e)), (n = t.length);
                                    while (n--) (o = ke(t[n])), o[b] ? r.push(o) : i.push(o);
                                    (o = S(e, Se(i, r))), (o.selector = e);
                                }
                                return o;
                            }),
                            (u = se.select = function (e, t, n, i) {
                                var o,
                                    u,
                                    l,
                                    c,
                                    f,
                                    p = 'function' === typeof e && e,
                                    d = !i && a((e = p.selector || e));
                                if (((n = n || []), 1 === d.length)) {
                                    if (((u = d[0] = d[0].slice(0)), u.length > 2 && 'ID' === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type])) {
                                        if (((t = (r.find['ID'](l.matches[0].replace(te, ne), t) || [])[0]), !t)) return n;
                                        p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                                    }
                                    o = G['needsContext'].test(e) ? 0 : u.length;
                                    while (o--) {
                                        if (((l = u[o]), r.relative[(c = l.type)])) break;
                                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), (ee.test(u[0].type) && ye(t.parentNode)) || t))) {
                                            if ((u.splice(o, 1), (e = i.length && xe(u)), !e)) return H.apply(n, i), n;
                                            break;
                                        }
                                    }
                                }
                                return (p || s(e, d))(i, t, !g, n, !t || (ee.test(e) && ye(t.parentNode)) || t), n;
                            }),
                            (n.sortStable = b.split('').sort(N).join('') === b),
                            (n.detectDuplicates = !!f),
                            p(),
                            (n.sortDetached = ce(function (e) {
                                return 1 & e.compareDocumentPosition(d.createElement('fieldset'));
                            })),
                            ce(function (e) {
                                return (e.innerHTML = '<a href=\'#\'></a>'), '#' === e.firstChild.getAttribute('href');
                            }) ||
                                fe('type|href|height|width', function (e, t, n) {
                                    if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
                                }),
                            (n.attributes &&
                                ce(function (e) {
                                    return (e.innerHTML = '<input/>'), e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
                                })) ||
                                fe('value', function (e, t, n) {
                                    if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
                                }),
                            ce(function (e) {
                                return null == e.getAttribute('disabled');
                            }) ||
                                fe(R, function (e, t, n) {
                                    var r;
                                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                                }),
                            se
                        );
                    })(n);
                (k.find = A),
                (k.expr = A.selectors),
                (k.expr[':'] = k.expr.pseudos),
                (k.uniqueSort = k.unique = A.uniqueSort),
                (k.text = A.getText),
                (k.isXMLDoc = A.isXML),
                (k.contains = A.contains),
                (k.escapeSelector = A.escape);
                var N = function (e, t, n) {
                        var r = [],
                            i = void 0 !== n;
                        while ((e = e[t]) && 9 !== e.nodeType)
                            if (1 === e.nodeType) {
                                if (i && k(e).is(n)) break;
                                r.push(e);
                            }
                        return r;
                    },
                    D = function (e, t) {
                        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                        return n;
                    },
                    j = k.expr.match.needsContext;
                function q(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                }
                var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function H(e, t, n) {
                    return m(t)
                        ? k.grep(e, function (e, r) {
                            return !!t.call(e, r, e) !== n;
                        })
                        : t.nodeType
                            ? k.grep(e, function (e) {
                                return (e === t) !== n;
                            })
                            : 'string' !== typeof t
                                ? k.grep(e, function (e) {
                                    return f.call(t, e) > -1 !== n;
                                })
                                : k.filter(t, e, n);
                }
                (k.filter = function (e, t, n) {
                    var r = t[0];
                    return (
                        n && (e = ':not(' + e + ')'),
                        1 === t.length && 1 === r.nodeType
                            ? k.find.matchesSelector(r, e)
                                ? [r]
                                : []
                            : k.find.matches(
                                e,
                                k.grep(t, function (e) {
                                    return 1 === e.nodeType;
                                })
                            )
                    );
                }),
                k.fn.extend({
                    find: function (e) {
                        var t,
                            n,
                            r = this.length,
                            i = this;
                        if ('string' !== typeof e)
                            return this.pushStack(
                                k(e).filter(function () {
                                    for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
                        return r > 1 ? k.uniqueSort(n) : n;
                    },
                    filter: function (e) {
                        return this.pushStack(H(this, e || [], !1));
                    },
                    not: function (e) {
                        return this.pushStack(H(this, e || [], !0));
                    },
                    is: function (e) {
                        return !!H(this, 'string' === typeof e && j.test(e) ? k(e) : e || [], !1).length;
                    },
                });
                var O,
                    P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                    R = (k.fn.init = function (e, t, n) {
                        var r, i;
                        if (!e) return this;
                        if (((n = n || O), 'string' === typeof e)) {
                            if (((r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)), !r || (!r[1] && t)))
                                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (r[1]) {
                                if (((t = t instanceof k ? t[0] : t), k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), L.test(r[1]) && k.isPlainObject(t)))
                                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                return this;
                            }
                            return (i = b.getElementById(r[2])), i && ((this[0] = i), (this.length = 1)), this;
                        }
                        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m(e) ? (void 0 !== n.ready ? n.ready(e) : e(k)) : k.makeArray(e, this);
                    });
                (R.prototype = k.fn), (O = k(b));
                var M = /^(?:parents|prev(?:Until|All))/,
                    I = {children: !0, contents: !0, next: !0, prev: !0};
                function W(e, t) {
                    while ((e = e[t]) && 1 !== e.nodeType);
                    return e;
                }
                k.fn.extend({
                    has: function (e) {
                        var t = k(e, this),
                            n = t.length;
                        return this.filter(function () {
                            for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
                        });
                    },
                    closest: function (e, t) {
                        var n,
                            r = 0,
                            i = this.length,
                            o = [],
                            a = 'string' !== typeof e && k(e);
                        if (!j.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break;
                                    }
                        return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o);
                    },
                    index: function (e) {
                        return e ? ('string' === typeof e ? f.call(k(e), this[0]) : f.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                    },
                    add: function (e, t) {
                        return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
                    },
                    addBack: function (e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                    },
                }),
                k.each(
                    {
                        parent: function (e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null;
                        },
                        parents: function (e) {
                            return N(e, 'parentNode');
                        },
                        parentsUntil: function (e, t, n) {
                            return N(e, 'parentNode', n);
                        },
                        next: function (e) {
                            return W(e, 'nextSibling');
                        },
                        prev: function (e) {
                            return W(e, 'previousSibling');
                        },
                        nextAll: function (e) {
                            return N(e, 'nextSibling');
                        },
                        prevAll: function (e) {
                            return N(e, 'previousSibling');
                        },
                        nextUntil: function (e, t, n) {
                            return N(e, 'nextSibling', n);
                        },
                        prevUntil: function (e, t, n) {
                            return N(e, 'previousSibling', n);
                        },
                        siblings: function (e) {
                            return D((e.parentNode || {}).firstChild, e);
                        },
                        children: function (e) {
                            return D(e.firstChild);
                        },
                        contents: function (e) {
                            return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (q(e, 'template') && (e = e.content || e), k.merge([], e.childNodes));
                        },
                    },
                    function (e, t) {
                        k.fn[e] = function (n, r) {
                            var i = k.map(this, t, n);
                            return (
                                'Until' !== e.slice(-5) && (r = n),
                                r && 'string' === typeof r && (i = k.filter(r, i)),
                                this.length > 1 && (I[e] || k.uniqueSort(i), M.test(e) && i.reverse()),
                                this.pushStack(i)
                            );
                        };
                    }
                );
                var F = /[^\x20\t\r\n\f]+/g;
                function B(e) {
                    var t = {};
                    return (
                        k.each(e.match(F) || [], function (e, n) {
                            t[n] = !0;
                        }),
                        t
                    );
                }
                function $(e) {
                    return e;
                }
                function _(e) {
                    throw e;
                }
                function z(e, t, n, r) {
                    var i;
                    try {
                        e && m((i = e.promise)) ? i.call(e).done(t).fail(n) : e && m((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
                    } catch (e) {
                        n.apply(void 0, [e]);
                    }
                }
                (k.Callbacks = function (e) {
                    e = 'string' === typeof e ? B(e) : k.extend({}, e);
                    var t,
                        n,
                        r,
                        i,
                        o = [],
                        a = [],
                        s = -1,
                        u = function () {
                            for (i = i || e.once, r = t = !0; a.length; s = -1) {
                                n = a.shift();
                                while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
                            }
                            e.memory || (n = !1), (t = !1), i && (o = n ? [] : '');
                        },
                        l = {
                            add: function () {
                                return (
                                    o &&
                                        (n && !t && ((s = o.length - 1), a.push(n)),
                                        (function t(n) {
                                            k.each(n, function (n, r) {
                                                m(r) ? (e.unique && l.has(r)) || o.push(r) : r && r.length && 'string' !== C(r) && t(r);
                                            });
                                        })(arguments),
                                        n && !t && u()),
                                    this
                                );
                            },
                            remove: function () {
                                return (
                                    k.each(arguments, function (e, t) {
                                        var n;
                                        while ((n = k.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                                    }),
                                    this
                                );
                            },
                            has: function (e) {
                                return e ? k.inArray(e, o) > -1 : o.length > 0;
                            },
                            empty: function () {
                                return o && (o = []), this;
                            },
                            disable: function () {
                                return (i = a = []), (o = n = ''), this;
                            },
                            disabled: function () {
                                return !o;
                            },
                            lock: function () {
                                return (i = a = []), n || t || (o = n = ''), this;
                            },
                            locked: function () {
                                return !!i;
                            },
                            fireWith: function (e, n) {
                                return i || ((n = n || []), (n = [e, n.slice ? n.slice() : n]), a.push(n), t || u()), this;
                            },
                            fire: function () {
                                return l.fireWith(this, arguments), this;
                            },
                            fired: function () {
                                return !!r;
                            },
                        };
                    return l;
                }),
                k.extend({
                    Deferred: function (e) {
                        var t = [
                                ['notify', 'progress', k.Callbacks('memory'), k.Callbacks('memory'), 2],
                                ['resolve', 'done', k.Callbacks('once memory'), k.Callbacks('once memory'), 0, 'resolved'],
                                ['reject', 'fail', k.Callbacks('once memory'), k.Callbacks('once memory'), 1, 'rejected'],
                            ],
                            r = 'pending',
                            i = {
                                state: function () {
                                    return r;
                                },
                                always: function () {
                                    return o.done(arguments).fail(arguments), this;
                                },
                                catch: function (e) {
                                    return i.then(null, e);
                                },
                                pipe: function () {
                                    var e = arguments;
                                    return k
                                        .Deferred(function (n) {
                                            k.each(t, function (t, r) {
                                                var i = m(e[r[4]]) && e[r[4]];
                                                o[r[1]](function () {
                                                    var e = i && i.apply(this, arguments);
                                                    e && m(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + 'With'](this, i ? [e] : arguments);
                                                });
                                            }),
                                            (e = null);
                                        })
                                        .promise();
                                },
                                then: function (e, r, i) {
                                    var o = 0;
                                    function a(e, t, r, i) {
                                        return function () {
                                            var s = this,
                                                u = arguments,
                                                l = function () {
                                                    var n, l;
                                                    if (!(e < o)) {
                                                        if (((n = r.apply(s, u)), n === t.promise())) throw new TypeError('Thenable self-resolution');
                                                        (l = n && ('object' === typeof n || 'function' === typeof n) && n.then),
                                                        m(l)
                                                            ? i
                                                                ? l.call(n, a(o, t, $, i), a(o, t, _, i))
                                                                : (o++, l.call(n, a(o, t, $, i), a(o, t, _, i), a(o, t, $, t.notifyWith)))
                                                            : (r !== $ && ((s = void 0), (u = [n])), (i || t.resolveWith)(s, u));
                                                    }
                                                },
                                                c = i
                                                    ? l
                                                    : function () {
                                                        try {
                                                            l();
                                                        } catch (n) {
                                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(n, c.stackTrace),
                                                            e + 1 >= o && (r !== _ && ((s = void 0), (u = [n])), t.rejectWith(s, u));
                                                        }
                                                    };
                                            e ? c() : (k.Deferred.getStackHook && (c.stackTrace = k.Deferred.getStackHook()), n.setTimeout(c));
                                        };
                                    }
                                    return k
                                        .Deferred(function (n) {
                                            t[0][3].add(a(0, n, m(i) ? i : $, n.notifyWith)), t[1][3].add(a(0, n, m(e) ? e : $)), t[2][3].add(a(0, n, m(r) ? r : _));
                                        })
                                        .promise();
                                },
                                promise: function (e) {
                                    return null != e ? k.extend(e, i) : i;
                                },
                            },
                            o = {};
                        return (
                            k.each(t, function (e, n) {
                                var a = n[2],
                                    s = n[5];
                                (i[n[1]] = a.add),
                                s &&
                                            a.add(
                                                function () {
                                                    r = s;
                                                },
                                                t[3 - e][2].disable,
                                                t[3 - e][3].disable,
                                                t[0][2].lock,
                                                t[0][3].lock
                                            ),
                                a.add(n[3].fire),
                                (o[n[0]] = function () {
                                    return o[n[0] + 'With'](this === o ? void 0 : this, arguments), this;
                                }),
                                (o[n[0] + 'With'] = a.fireWith);
                            }),
                            i.promise(o),
                            e && e.call(o, o),
                            o
                        );
                    },
                    when: function (e) {
                        var t = arguments.length,
                            n = t,
                            r = Array(n),
                            i = u.call(arguments),
                            o = k.Deferred(),
                            a = function (e) {
                                return function (n) {
                                    (r[e] = this), (i[e] = arguments.length > 1 ? u.call(arguments) : n), --t || o.resolveWith(r, i);
                                };
                            };
                        if (t <= 1 && (z(e, o.done(a(n)).resolve, o.reject, !t), 'pending' === o.state() || m(i[n] && i[n].then))) return o.then();
                        while (n--) z(i[n], a(n), o.reject);
                        return o.promise();
                    },
                });
                var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                (k.Deferred.exceptionHook = function (e, t) {
                    n.console && n.console.warn && e && U.test(e.name) && n.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
                }),
                (k.readyException = function (e) {
                    n.setTimeout(function () {
                        throw e;
                    });
                });
                var X = k.Deferred();
                function V() {
                    b.removeEventListener('DOMContentLoaded', V), n.removeEventListener('load', V), k.ready();
                }
                (k.fn.ready = function (e) {
                    return (
                        X.then(e).catch(function (e) {
                            k.readyException(e);
                        }),
                        this
                    );
                }),
                k.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (e) {
                        (!0 === e ? --k.readyWait : k.isReady) || ((k.isReady = !0), (!0 !== e && --k.readyWait > 0) || X.resolveWith(b, [k]));
                    },
                }),
                (k.ready.then = X.then),
                'complete' === b.readyState || ('loading' !== b.readyState && !b.documentElement.doScroll)
                    ? n.setTimeout(k.ready)
                    : (b.addEventListener('DOMContentLoaded', V), n.addEventListener('load', V));
                var G = function (e, t, n, r, i, o, a) {
                        var s = 0,
                            u = e.length,
                            l = null == n;
                        if ('object' === C(n)) for (s in ((i = !0), n)) G(e, t, s, n[s], !0, o, a);
                        else if (
                            void 0 !== r &&
                            ((i = !0),
                            m(r) || (a = !0),
                            l &&
                                (a
                                    ? (t.call(e, r), (t = null))
                                    : ((l = t),
                                    (t = function (e, t, n) {
                                        return l.call(k(e), n);
                                    }))),
                            t)
                        )
                            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
                    },
                    Y = /^-ms-/,
                    J = /-([a-z])/g;
                function Q(e, t) {
                    return t.toUpperCase();
                }
                function K(e) {
                    return e.replace(Y, 'ms-').replace(J, Q);
                }
                var Z = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                };
                function ee() {
                    this.expando = k.expando + ee.uid++;
                }
                (ee.uid = 1),
                (ee.prototype = {
                    cache: function (e) {
                        var t = e[this.expando];
                        return t || ((t = Object.create(null)), Z(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, {value: t, configurable: !0}))), t;
                    },
                    set: function (e, t, n) {
                        var r,
                            i = this.cache(e);
                        if ('string' === typeof t) i[K(t)] = n;
                        else for (r in t) i[K(r)] = t[r];
                        return i;
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)];
                    },
                    access: function (e, t, n) {
                        return void 0 === t || (t && 'string' === typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                    },
                    remove: function (e, t) {
                        var n,
                            r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                Array.isArray(t) ? (t = t.map(K)) : ((t = K(t)), (t = t in r ? [t] : t.match(F) || [])), (n = t.length);
                                while (n--) delete r[t[n]];
                            }
                            (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !k.isEmptyObject(t);
                    },
                });
                var te = new ee(),
                    ne = new ee(),
                    re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    ie = /[A-Z]/g;
                function oe(e) {
                    return 'true' === e || ('false' !== e && ('null' === e ? null : e === +e + '' ? +e : re.test(e) ? JSON.parse(e) : e));
                }
                function ae(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType)
                        if (((r = 'data-' + t.replace(ie, '-$&').toLowerCase()), (n = e.getAttribute(r)), 'string' === typeof n)) {
                            try {
                                n = oe(n);
                            } catch (i) {}
                            ne.set(e, t, n);
                        } else n = void 0;
                    return n;
                }
                k.extend({
                    hasData: function (e) {
                        return ne.hasData(e) || te.hasData(e);
                    },
                    data: function (e, t, n) {
                        return ne.access(e, t, n);
                    },
                    removeData: function (e, t) {
                        ne.remove(e, t);
                    },
                    _data: function (e, t, n) {
                        return te.access(e, t, n);
                    },
                    _removeData: function (e, t) {
                        te.remove(e, t);
                    },
                }),
                k.fn.extend({
                    data: function (e, t) {
                        var n,
                            r,
                            i,
                            o = this[0],
                            a = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && ((i = ne.get(o)), 1 === o.nodeType && !te.get(o, 'hasDataAttrs'))) {
                                n = a.length;
                                while (n--) a[n] && ((r = a[n].name), 0 === r.indexOf('data-') && ((r = K(r.slice(5))), ae(o, r, i[r])));
                                te.set(o, 'hasDataAttrs', !0);
                            }
                            return i;
                        }
                        return 'object' === typeof e
                            ? this.each(function () {
                                ne.set(this, e);
                            })
                            : G(
                                this,
                                function (t) {
                                    var n;
                                    if (o && void 0 === t) return (n = ne.get(o, e)), void 0 !== n ? n : ((n = ae(o, e)), void 0 !== n ? n : void 0);
                                    this.each(function () {
                                        ne.set(this, e, t);
                                    });
                                },
                                null,
                                t,
                                arguments.length > 1,
                                null,
                                !0
                            );
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            ne.remove(this, e);
                        });
                    },
                }),
                k.extend({
                    queue: function (e, t, n) {
                        var r;
                        if (e) return (t = (t || 'fx') + 'queue'), (r = te.get(e, t)), n && (!r || Array.isArray(n) ? (r = te.access(e, t, k.makeArray(n))) : r.push(n)), r || [];
                    },
                    dequeue: function (e, t) {
                        t = t || 'fx';
                        var n = k.queue(e, t),
                            r = n.length,
                            i = n.shift(),
                            o = k._queueHooks(e, t),
                            a = function () {
                                k.dequeue(e, t);
                            };
                        'inprogress' === i && ((i = n.shift()), r--), i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
                    },
                    _queueHooks: function (e, t) {
                        var n = t + 'queueHooks';
                        return (
                            te.get(e, n) ||
                                te.access(e, n, {
                                    empty: k.Callbacks('once memory').add(function () {
                                        te.remove(e, [t + 'queue', n]);
                                    }),
                                })
                        );
                    },
                }),
                k.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return (
                            'string' !== typeof e && ((t = e), (e = 'fx'), n--),
                            arguments.length < n
                                ? k.queue(this[0], e)
                                : void 0 === t
                                    ? this
                                    : this.each(function () {
                                        var n = k.queue(this, e, t);
                                        k._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && k.dequeue(this, e);
                                    })
                        );
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            k.dequeue(this, e);
                        });
                    },
                    clearQueue: function (e) {
                        return this.queue(e || 'fx', []);
                    },
                    promise: function (e, t) {
                        var n,
                            r = 1,
                            i = k.Deferred(),
                            o = this,
                            a = this.length,
                            s = function () {
                                --r || i.resolveWith(o, [o]);
                            };
                        'string' !== typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
                        while (a--) (n = te.get(o[a], e + 'queueHooks')), n && n.empty && (r++, n.empty.add(s));
                        return s(), i.promise(t);
                    },
                });
                var se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    ue = new RegExp('^(?:([+-])=|)(' + se + ')([a-z%]*)$', 'i'),
                    le = ['Top', 'Right', 'Bottom', 'Left'],
                    ce = b.documentElement,
                    fe = function (e) {
                        return k.contains(e.ownerDocument, e);
                    },
                    pe = {composed: !0};
                ce.getRootNode &&
                    (fe = function (e) {
                        return k.contains(e.ownerDocument, e) || e.getRootNode(pe) === e.ownerDocument;
                    });
                var de = function (e, t) {
                    return (e = t || e), 'none' === e.style.display || ('' === e.style.display && fe(e) && 'none' === k.css(e, 'display'));
                };
                function he(e, t, n, r) {
                    var i,
                        o,
                        a = 20,
                        s = r
                            ? function () {
                                return r.cur();
                            }
                            : function () {
                                return k.css(e, t, '');
                            },
                        u = s(),
                        l = (n && n[3]) || (k.cssNumber[t] ? '' : 'px'),
                        c = e.nodeType && (k.cssNumber[t] || ('px' !== l && +u)) && ue.exec(k.css(e, t));
                    if (c && c[3] !== l) {
                        (u /= 2), (l = l || c[3]), (c = +u || 1);
                        while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
                        (c *= 2), k.style(e, t, c + l), (n = n || []);
                    }
                    return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
                }
                var ge = {};
                function ve(e) {
                    var t,
                        n = e.ownerDocument,
                        r = e.nodeName,
                        i = ge[r];
                    return i || ((t = n.body.appendChild(n.createElement(r))), (i = k.css(t, 'display')), t.parentNode.removeChild(t), 'none' === i && (i = 'block'), (ge[r] = i), i);
                }
                function ye(e, t) {
                    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
                        (r = e[o]),
                        r.style &&
                                ((n = r.style.display),
                                t
                                    ? ('none' === n && ((i[o] = te.get(r, 'display') || null), i[o] || (r.style.display = '')), '' === r.style.display && de(r) && (i[o] = ve(r)))
                                    : 'none' !== n && ((i[o] = 'none'), te.set(r, 'display', n)));
                    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                    return e;
                }
                k.fn.extend({
                    show: function () {
                        return ye(this, !0);
                    },
                    hide: function () {
                        return ye(this);
                    },
                    toggle: function (e) {
                        return 'boolean' === typeof e
                            ? e
                                ? this.show()
                                : this.hide()
                            : this.each(function () {
                                de(this) ? k(this).show() : k(this).hide();
                            });
                    },
                });
                var me = /^(?:checkbox|radio)$/i,
                    xe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    be = /^$|^module$|\/(?:java|ecma)script/i;
                (function () {
                    var e = b.createDocumentFragment(),
                        t = e.appendChild(b.createElement('div')),
                        n = b.createElement('input');
                    n.setAttribute('type', 'radio'),
                    n.setAttribute('checked', 'checked'),
                    n.setAttribute('name', 't'),
                    t.appendChild(n),
                    (y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
                    (t.innerHTML = '<textarea>x</textarea>'),
                    (y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
                    (t.innerHTML = '<option></option>'),
                    (y.option = !!t.lastChild);
                })();
                var we = {
                    thead: [1, '<table>', '</table>'],
                    col: [2, '<table><colgroup>', '</colgroup></table>'],
                    tr: [2, '<table><tbody>', '</tbody></table>'],
                    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
                    _default: [0, '', ''],
                };
                function Te(e, t) {
                    var n;
                    return (
                        (n = 'undefined' !== typeof e.getElementsByTagName ? e.getElementsByTagName(t || '*') : 'undefined' !== typeof e.querySelectorAll ? e.querySelectorAll(t || '*') : []),
                        void 0 === t || (t && q(e, t)) ? k.merge([e], n) : n
                    );
                }
                function Ce(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) te.set(e[n], 'globalEval', !t || te.get(t[n], 'globalEval'));
                }
                (we.tbody = we.tfoot = we.colgroup = we.caption = we.thead), (we.th = we.td), y.option || (we.optgroup = we.option = [1, '<select multiple=\'multiple\'>', '</select>']);
                var Ee = /<|&#?\w+;/;
                function ke(e, t, n, r, i) {
                    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                        if (((o = e[d]), o || 0 === o))
                            if ('object' === C(o)) k.merge(p, o.nodeType ? [o] : o);
                            else if (Ee.test(o)) {
                                (a = a || f.appendChild(t.createElement('div'))),
                                (s = (xe.exec(o) || ['', ''])[1].toLowerCase()),
                                (u = we[s] || we._default),
                                (a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2]),
                                (c = u[0]);
                                while (c--) a = a.lastChild;
                                k.merge(p, a.childNodes), (a = f.firstChild), (a.textContent = '');
                            } else p.push(t.createTextNode(o));
                    (f.textContent = ''), (d = 0);
                    while ((o = p[d++]))
                        if (r && k.inArray(o, r) > -1) i && i.push(o);
                        else if (((l = fe(o)), (a = Te(f.appendChild(o), 'script')), l && Ce(a), n)) {
                            c = 0;
                            while ((o = a[c++])) be.test(o.type || '') && n.push(o);
                        }
                    return f;
                }
                var Se = /^key/,
                    Ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    Ne = /^([^.]*)(?:\.(.+)|)/;
                function De() {
                    return !0;
                }
                function je() {
                    return !1;
                }
                function qe(e, t) {
                    return (e === Le()) === ('focus' === t);
                }
                function Le() {
                    try {
                        return b.activeElement;
                    } catch (e) {}
                }
                function He(e, t, n, r, i, o) {
                    var a, s;
                    if ('object' === typeof t) {
                        for (s in ('string' !== typeof n && ((r = r || n), (n = void 0)), t)) He(e, s, n, r, t[s], o);
                        return e;
                    }
                    if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ('string' === typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = je;
                    else if (!i) return e;
                    return (
                        1 === o &&
                            ((a = i),
                            (i = function (e) {
                                return k().off(e), a.apply(this, arguments);
                            }),
                            (i.guid = a.guid || (a.guid = k.guid++))),
                        e.each(function () {
                            k.event.add(this, t, i, r, n);
                        })
                    );
                }
                function Oe(e, t, n) {
                    n
                        ? (te.set(e, t, !1),
                        k.event.add(e, t, {
                            namespace: !1,
                            handler: function (e) {
                                var r,
                                    i,
                                    o = te.get(this, t);
                                if (1 & e.isTrigger && this[t]) {
                                    if (o.length) (k.event.special[t] || {}).delegateType && e.stopPropagation();
                                    else if (
                                        ((o = u.call(arguments)), te.set(this, t, o), (r = n(this, t)), this[t](), (i = te.get(this, t)), o !== i || r ? te.set(this, t, !1) : (i = {}), o !== i)
                                    )
                                        return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                                } else o.length && (te.set(this, t, {value: k.event.trigger(k.extend(o[0], k.Event.prototype), o.slice(1), this)}), e.stopImmediatePropagation());
                            },
                        }))
                        : void 0 === te.get(e, t) && k.event.add(e, t, De);
                }
                (k.event = {
                    global: {},
                    add: function (e, t, n, r, i) {
                        var o,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            g,
                            v = te.get(e);
                        if (Z(e)) {
                            n.handler && ((o = n), (n = o.handler), (i = o.selector)),
                            i && k.find.matchesSelector(ce, i),
                            n.guid || (n.guid = k.guid++),
                            (u = v.events) || (u = v.events = Object.create(null)),
                            (a = v.handle) ||
                                    (a = v.handle = function (t) {
                                        return 'undefined' !== typeof k && k.event.triggered !== t.type ? k.event.dispatch.apply(e, arguments) : void 0;
                                    }),
                            (t = (t || '').match(F) || ['']),
                            (l = t.length);
                            while (l--)
                                (s = Ne.exec(t[l]) || []),
                                (d = g = s[1]),
                                (h = (s[2] || '').split('.').sort()),
                                d &&
                                        ((f = k.event.special[d] || {}),
                                        (d = (i ? f.delegateType : f.bindType) || d),
                                        (f = k.event.special[d] || {}),
                                        (c = k.extend(
                                            {type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: h.join('.')},
                                            o
                                        )),
                                        (p = u[d]) || ((p = u[d] = []), (p.delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                                        f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                        (k.event.global[d] = !0));
                        }
                    },
                    remove: function (e, t, n, r, i) {
                        var o,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            g,
                            v = te.hasData(e) && te.get(e);
                        if (v && (u = v.events)) {
                            (t = (t || '').match(F) || ['']), (l = t.length);
                            while (l--)
                                if (((s = Ne.exec(t[l]) || []), (d = g = s[1]), (h = (s[2] || '').split('.').sort()), d)) {
                                    (f = k.event.special[d] || {}),
                                    (d = (r ? f.delegateType : f.bindType) || d),
                                    (p = u[d] || []),
                                    (s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
                                    (a = o = p.length);
                                    while (o--)
                                        (c = p[o]),
                                        (!i && g !== c.origType) ||
                                                (n && n.guid !== c.guid) ||
                                                (s && !s.test(c.namespace)) ||
                                                (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                                                (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                    a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || k.removeEvent(e, d, v.handle), delete u[d]);
                                } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                            k.isEmptyObject(u) && te.remove(e, 'handle events');
                        }
                    },
                    dispatch: function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            a,
                            s = new Array(arguments.length),
                            u = k.event.fix(e),
                            l = (te.get(this, 'events') || Object.create(null))[u.type] || [],
                            c = k.event.special[u.type] || {};
                        for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                        if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
                            (a = k.event.handlers.call(this, u, l)), (t = 0);
                            while ((i = a[t++]) && !u.isPropagationStopped()) {
                                (u.currentTarget = i.elem), (n = 0);
                                while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                                    (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                                        ((u.handleObj = o),
                                        (u.data = o.data),
                                        (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)),
                                        void 0 !== r && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                            }
                            return c.postDispatch && c.postDispatch.call(this, u), u.result;
                        }
                    },
                    handlers: function (e, t) {
                        var n,
                            r,
                            i,
                            o,
                            a,
                            s = [],
                            u = t.delegateCount,
                            l = e.target;
                        if (u && l.nodeType && !('click' === e.type && e.button >= 1))
                            for (; l !== this; l = l.parentNode || this)
                                if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
                                    for (o = [], a = {}, n = 0; n < u; n++)
                                        (r = t[n]),
                                        (i = r.selector + ' '),
                                        void 0 === a[i] && (a[i] = r.needsContext ? k(i, this).index(l) > -1 : k.find(i, this, null, [l]).length),
                                        a[i] && o.push(r);
                                    o.length && s.push({elem: l, handlers: o});
                                }
                        return (l = this), u < t.length && s.push({elem: l, handlers: t.slice(u)}), s;
                    },
                    addProp: function (e, t) {
                        Object.defineProperty(k.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: m(t)
                                ? function () {
                                    if (this.originalEvent) return t(this.originalEvent);
                                }
                                : function () {
                                    if (this.originalEvent) return this.originalEvent[e];
                                },
                            set: function (t) {
                                Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t});
                            },
                        });
                    },
                    fix: function (e) {
                        return e[k.expando] ? e : new k.Event(e);
                    },
                    special: {
                        load: {noBubble: !0},
                        click: {
                            setup: function (e) {
                                var t = this || e;
                                return me.test(t.type) && t.click && q(t, 'input') && Oe(t, 'click', De), !1;
                            },
                            trigger: function (e) {
                                var t = this || e;
                                return me.test(t.type) && t.click && q(t, 'input') && Oe(t, 'click'), !0;
                            },
                            _default: function (e) {
                                var t = e.target;
                                return (me.test(t.type) && t.click && q(t, 'input') && te.get(t, 'click')) || q(t, 'a');
                            },
                        },
                        beforeunload: {
                            postDispatch: function (e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                            },
                        },
                    },
                }),
                (k.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }),
                (k.Event = function (e, t) {
                    if (!(this instanceof k.Event)) return new k.Event(e, t);
                    e && e.type
                        ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? De : je),
                        (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                        (this.currentTarget = e.currentTarget),
                        (this.relatedTarget = e.relatedTarget))
                        : (this.type = e),
                    t && k.extend(this, t),
                    (this.timeStamp = (e && e.timeStamp) || Date.now()),
                    (this[k.expando] = !0);
                }),
                (k.Event.prototype = {
                    constructor: k.Event,
                    isDefaultPrevented: je,
                    isPropagationStopped: je,
                    isImmediatePropagationStopped: je,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = De), e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = De), e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        (this.isImmediatePropagationStopped = De), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                k.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (e) {
                            var t = e.button;
                            return null == e.which && Se.test(e.type)
                                ? null != e.charCode
                                    ? e.charCode
                                    : e.keyCode
                                : !e.which && void 0 !== t && Ae.test(e.type)
                                    ? 1 & t
                                        ? 1
                                        : 2 & t
                                            ? 3
                                            : 4 & t
                                                ? 2
                                                : 0
                                    : e.which;
                        },
                    },
                    k.event.addProp
                ),
                k.each({focus: 'focusin', blur: 'focusout'}, function (e, t) {
                    k.event.special[e] = {
                        setup: function () {
                            return Oe(this, e, qe), !1;
                        },
                        trigger: function () {
                            return Oe(this, e), !0;
                        },
                        delegateType: t,
                    };
                }),
                k.each({mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout'}, function (e, t) {
                    k.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n,
                                r = this,
                                i = e.relatedTarget,
                                o = e.handleObj;
                            return (i && (i === r || k.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                        },
                    };
                }),
                k.fn.extend({
                    on: function (e, t, n, r) {
                        return He(this, e, t, n, r);
                    },
                    one: function (e, t, n, r) {
                        return He(this, e, t, n, r, 1);
                    },
                    off: function (e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj)
                            return (r = e.handleObj), k(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
                        if ('object' === typeof e) {
                            for (i in e) this.off(i, t, e[i]);
                            return this;
                        }
                        return (
                            (!1 !== t && 'function' !== typeof t) || ((n = t), (t = void 0)),
                            !1 === n && (n = je),
                            this.each(function () {
                                k.event.remove(this, e, n, t);
                            })
                        );
                    },
                });
                var Pe = /<script|<style|<link/i,
                    Re = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                function Ie(e, t) {
                    return (q(e, 'table') && q(11 !== t.nodeType ? t : t.firstChild, 'tr') && k(e).children('tbody')[0]) || e;
                }
                function We(e) {
                    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
                }
                function Fe(e) {
                    return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
                }
                function Be(e, t) {
                    var n, r, i, o, a, s, u;
                    if (1 === t.nodeType) {
                        if (te.hasData(e) && ((o = te.get(e)), (u = o.events), u)) for (i in (te.remove(t, 'handle events'), u)) for (n = 0, r = u[i].length; n < r; n++) k.event.add(t, i, u[i][n]);
                        ne.hasData(e) && ((a = ne.access(e)), (s = k.extend({}, a)), ne.set(t, s));
                    }
                }
                function $e(e, t) {
                    var n = t.nodeName.toLowerCase();
                    'input' === n && me.test(e.type) ? (t.checked = e.checked) : ('input' !== n && 'textarea' !== n) || (t.defaultValue = e.defaultValue);
                }
                function _e(e, t, n, r) {
                    t = l(t);
                    var i,
                        o,
                        a,
                        s,
                        u,
                        c,
                        f = 0,
                        p = e.length,
                        d = p - 1,
                        h = t[0],
                        g = m(h);
                    if (g || (p > 1 && 'string' === typeof h && !y.checkClone && Re.test(h)))
                        return e.each(function (i) {
                            var o = e.eq(i);
                            g && (t[0] = h.call(this, i, o.html())), _e(o, t, n, r);
                        });
                    if (p && ((i = ke(t, e[0].ownerDocument, !1, e, r)), (o = i.firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
                        for (a = k.map(Te(i, 'script'), We), s = a.length; f < p; f++) (u = i), f !== d && ((u = k.clone(u, !0, !0)), s && k.merge(a, Te(u, 'script'))), n.call(e[f], u, f);
                        if (s)
                            for (c = a[a.length - 1].ownerDocument, k.map(a, Fe), f = 0; f < s; f++)
                                (u = a[f]),
                                be.test(u.type || '') &&
                                        !te.access(u, 'globalEval') &&
                                        k.contains(c, u) &&
                                        (u.src && 'module' !== (u.type || '').toLowerCase()
                                            ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {nonce: u.nonce || u.getAttribute('nonce')}, c)
                                            : T(u.textContent.replace(Me, ''), u, c));
                    }
                    return e;
                }
                function ze(e, t, n) {
                    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                        n || 1 !== r.nodeType || k.cleanData(Te(r)), r.parentNode && (n && fe(r) && Ce(Te(r, 'script')), r.parentNode.removeChild(r));
                    return e;
                }
                k.extend({
                    htmlPrefilter: function (e) {
                        return e;
                    },
                    clone: function (e, t, n) {
                        var r,
                            i,
                            o,
                            a,
                            s = e.cloneNode(!0),
                            u = fe(e);
                        if (!y.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !k.isXMLDoc(e)) for (a = Te(s), o = Te(e), r = 0, i = o.length; r < i; r++) $e(o[r], a[r]);
                        if (t)
                            if (n) for (o = o || Te(e), a = a || Te(s), r = 0, i = o.length; r < i; r++) Be(o[r], a[r]);
                            else Be(e, s);
                        return (a = Te(s, 'script')), a.length > 0 && Ce(a, !u && Te(e, 'script')), s;
                    },
                    cleanData: function (e) {
                        for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (Z(n)) {
                                if ((t = n[te.expando])) {
                                    if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                                    n[te.expando] = void 0;
                                }
                                n[ne.expando] && (n[ne.expando] = void 0);
                            }
                    },
                }),
                k.fn.extend({
                    detach: function (e) {
                        return ze(this, e, !0);
                    },
                    remove: function (e) {
                        return ze(this, e);
                    },
                    text: function (e) {
                        return G(
                            this,
                            function (e) {
                                return void 0 === e
                                    ? k.text(this)
                                    : this.empty().each(function () {
                                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                    });
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    append: function () {
                        return _e(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Ie(this, e);
                                t.appendChild(e);
                            }
                        });
                    },
                    prepend: function () {
                        return _e(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Ie(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return _e(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function () {
                        return _e(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(Te(e, !1)), (e.textContent = ''));
                        return this;
                    },
                    clone: function (e, t) {
                        return (
                            (e = null != e && e),
                            (t = null == t ? e : t),
                            this.map(function () {
                                return k.clone(this, e, t);
                            })
                        );
                    },
                    html: function (e) {
                        return G(
                            this,
                            function (e) {
                                var t = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ('string' === typeof e && !Pe.test(e) && !we[(xe.exec(e) || ['', ''])[1].toLowerCase()]) {
                                    e = k.htmlPrefilter(e);
                                    try {
                                        for (; n < r; n++) (t = this[n] || {}), 1 === t.nodeType && (k.cleanData(Te(t, !1)), (t.innerHTML = e));
                                        t = 0;
                                    } catch (i) {}
                                }
                                t && this.empty().append(e);
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var e = [];
                        return _e(
                            this,
                            arguments,
                            function (t) {
                                var n = this.parentNode;
                                k.inArray(this, e) < 0 && (k.cleanData(Te(this)), n && n.replaceChild(t, this));
                            },
                            e
                        );
                    },
                }),
                k.each({appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith'}, function (e, t) {
                    k.fn[e] = function (e) {
                        for (var n, r = [], i = k(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), k(i[a])[t](n), c.apply(r, n.get());
                        return this.pushStack(r);
                    };
                });
                var Ue = new RegExp('^(' + se + ')(?!px)[a-z%]+$', 'i'),
                    Xe = function (e) {
                        var t = e.ownerDocument.defaultView;
                        return (t && t.opener) || (t = n), t.getComputedStyle(e);
                    },
                    Ve = function (e, t, n) {
                        var r,
                            i,
                            o = {};
                        for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
                        for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
                        return r;
                    },
                    Ge = new RegExp(le.join('|'), 'i');
                function Ye(e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s = e.style;
                    return (
                        (n = n || Xe(e)),
                        n &&
                            ((a = n.getPropertyValue(t) || n[t]),
                            '' !== a || fe(e) || (a = k.style(e, t)),
                            !y.pixelBoxStyles() &&
                                Ue.test(a) &&
                                Ge.test(t) &&
                                ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
                        void 0 !== a ? a + '' : a
                    );
                }
                function Je(e, t) {
                    return {
                        get: function () {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get;
                        },
                    };
                }
                (function () {
                    function e() {
                        if (c) {
                            (l.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                            (c.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                            ce.appendChild(l).appendChild(c);
                            var e = n.getComputedStyle(c);
                            (r = '1%' !== e.top),
                            (u = 12 === t(e.marginLeft)),
                            (c.style.right = '60%'),
                            (a = 36 === t(e.right)),
                            (i = 36 === t(e.width)),
                            (c.style.position = 'absolute'),
                            (o = 12 === t(c.offsetWidth / 3)),
                            ce.removeChild(l),
                            (c = null);
                        }
                    }
                    function t(e) {
                        return Math.round(parseFloat(e));
                    }
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l = b.createElement('div'),
                        c = b.createElement('div');
                    c.style &&
                        ((c.style.backgroundClip = 'content-box'),
                        (c.cloneNode(!0).style.backgroundClip = ''),
                        (y.clearCloneStyle = 'content-box' === c.style.backgroundClip),
                        k.extend(y, {
                            boxSizingReliable: function () {
                                return e(), i;
                            },
                            pixelBoxStyles: function () {
                                return e(), a;
                            },
                            pixelPosition: function () {
                                return e(), r;
                            },
                            reliableMarginLeft: function () {
                                return e(), u;
                            },
                            scrollboxSize: function () {
                                return e(), o;
                            },
                            reliableTrDimensions: function () {
                                var e, t, r, i;
                                return (
                                    null == s &&
                                        ((e = b.createElement('table')),
                                        (t = b.createElement('tr')),
                                        (r = b.createElement('div')),
                                        (e.style.cssText = 'position:absolute;left:-11111px'),
                                        (t.style.height = '1px'),
                                        (r.style.height = '9px'),
                                        ce.appendChild(e).appendChild(t).appendChild(r),
                                        (i = n.getComputedStyle(t)),
                                        (s = parseInt(i.height) > 3),
                                        ce.removeChild(e)),
                                    s
                                );
                            },
                        }));
                })();
                var Qe = ['Webkit', 'Moz', 'ms'],
                    Ke = b.createElement('div').style,
                    Ze = {};
                function et(e) {
                    var t = e[0].toUpperCase() + e.slice(1),
                        n = Qe.length;
                    while (n--) if (((e = Qe[n] + t), e in Ke)) return e;
                }
                function tt(e) {
                    var t = k.cssProps[e] || Ze[e];
                    return t || (e in Ke ? e : (Ze[e] = et(e) || e));
                }
                var nt = /^(none|table(?!-c[ea]).+)/,
                    rt = /^--/,
                    it = {position: 'absolute', visibility: 'hidden', display: 'block'},
                    ot = {letterSpacing: '0', fontWeight: '400'};
                function at(e, t, n) {
                    var r = ue.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
                }
                function st(e, t, n, r, i, o) {
                    var a = 'width' === t ? 1 : 0,
                        s = 0,
                        u = 0;
                    if (n === (r ? 'border' : 'content')) return 0;
                    for (; a < 4; a += 2)
                        'margin' === n && (u += k.css(e, n + le[a], !0, i)),
                        r
                            ? ('content' === n && (u -= k.css(e, 'padding' + le[a], !0, i)), 'margin' !== n && (u -= k.css(e, 'border' + le[a] + 'Width', !0, i)))
                            : ((u += k.css(e, 'padding' + le[a], !0, i)),
                            'padding' !== n ? (u += k.css(e, 'border' + le[a] + 'Width', !0, i)) : (s += k.css(e, 'border' + le[a] + 'Width', !0, i)));
                    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
                }
                function ut(e, t, n) {
                    var r = Xe(e),
                        i = !y.boxSizingReliable() || n,
                        o = i && 'border-box' === k.css(e, 'boxSizing', !1, r),
                        a = o,
                        s = Ye(e, t, r),
                        u = 'offset' + t[0].toUpperCase() + t.slice(1);
                    if (Ue.test(s)) {
                        if (!n) return s;
                        s = 'auto';
                    }
                    return (
                        ((!y.boxSizingReliable() && o) || (!y.reliableTrDimensions() && q(e, 'tr')) || 'auto' === s || (!parseFloat(s) && 'inline' === k.css(e, 'display', !1, r))) &&
                            e.getClientRects().length &&
                            ((o = 'border-box' === k.css(e, 'boxSizing', !1, r)), (a = u in e), a && (s = e[u])),
                        (s = parseFloat(s) || 0),
                        s + st(e, t, n || (o ? 'border' : 'content'), a, r, s) + 'px'
                    );
                }
                function lt(e, t, n, r, i) {
                    return new lt.prototype.init(e, t, n, r, i);
                }
                k.extend({
                    cssHooks: {
                        opacity: {
                            get: function (e, t) {
                                if (t) {
                                    var n = Ye(e, 'opacity');
                                    return '' === n ? '1' : n;
                                }
                            },
                        },
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                    },
                    cssProps: {},
                    style: function (e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i,
                                o,
                                a,
                                s = K(t),
                                u = rt.test(t),
                                l = e.style;
                            if ((u || (t = tt(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)) return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                            (o = typeof n),
                            'string' === o && (i = ue.exec(n)) && i[1] && ((n = he(e, t, i)), (o = 'number')),
                            null != n &&
                                    n === n &&
                                    ('number' !== o || u || (n += (i && i[3]) || (k.cssNumber[s] ? '' : 'px')),
                                    y.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'),
                                    (a && 'set' in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
                        }
                    },
                    css: function (e, t, n, r) {
                        var i,
                            o,
                            a,
                            s = K(t),
                            u = rt.test(t);
                        return (
                            u || (t = tt(s)),
                            (a = k.cssHooks[t] || k.cssHooks[s]),
                            a && 'get' in a && (i = a.get(e, !0, n)),
                            void 0 === i && (i = Ye(e, t, r)),
                            'normal' === i && t in ot && (i = ot[t]),
                            '' === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
                        );
                    },
                }),
                k.each(['height', 'width'], function (e, t) {
                    k.cssHooks[t] = {
                        get: function (e, n, r) {
                            if (n)
                                return !nt.test(k.css(e, 'display')) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                    ? ut(e, t, r)
                                    : Ve(e, it, function () {
                                        return ut(e, t, r);
                                    });
                        },
                        set: function (e, n, r) {
                            var i,
                                o = Xe(e),
                                a = !y.scrollboxSize() && 'absolute' === o.position,
                                s = a || r,
                                u = s && 'border-box' === k.css(e, 'boxSizing', !1, o),
                                l = r ? st(e, t, r, u, o) : 0;
                            return (
                                u && a && (l -= Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - st(e, t, 'border', !1, o) - 0.5)),
                                l && (i = ue.exec(n)) && 'px' !== (i[3] || 'px') && ((e.style[t] = n), (n = k.css(e, t))),
                                at(e, n, l)
                            );
                        },
                    };
                }),
                (k.cssHooks.marginLeft = Je(y.reliableMarginLeft, function (e, t) {
                    if (t)
                        return (
                            (parseFloat(Ye(e, 'marginLeft')) ||
                                    e.getBoundingClientRect().left -
                                        Ve(e, {marginLeft: 0}, function () {
                                            return e.getBoundingClientRect().left;
                                        })) + 'px'
                        );
                })),
                k.each({margin: '', padding: '', border: 'Width'}, function (e, t) {
                    (k.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var r = 0, i = {}, o = 'string' === typeof n ? n.split(' ') : [n]; r < 4; r++) i[e + le[r] + t] = o[r] || o[r - 2] || o[0];
                            return i;
                        },
                    }),
                    'margin' !== e && (k.cssHooks[e + t].set = at);
                }),
                k.fn.extend({
                    css: function (e, t) {
                        return G(
                            this,
                            function (e, t, n) {
                                var r,
                                    i,
                                    o = {},
                                    a = 0;
                                if (Array.isArray(t)) {
                                    for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                                    return o;
                                }
                                return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                            },
                            e,
                            t,
                            arguments.length > 1
                        );
                    },
                }),
                (k.Tween = lt),
                (lt.prototype = {
                    constructor: lt,
                    init: function (e, t, n, r, i, o) {
                        (this.elem = e),
                        (this.prop = n),
                        (this.easing = i || k.easing._default),
                        (this.options = t),
                        (this.start = this.now = this.cur()),
                        (this.end = r),
                        (this.unit = o || (k.cssNumber[n] ? '' : 'px'));
                    },
                    cur: function () {
                        var e = lt.propHooks[this.prop];
                        return e && e.get ? e.get(this) : lt.propHooks._default.get(this);
                    },
                    run: function (e) {
                        var t,
                            n = lt.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                            (this.now = (this.end - this.start) * t + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : lt.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (lt.prototype.init.prototype = lt.prototype),
                (lt.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                                ? e.elem[e.prop]
                                : ((t = k.css(e.elem, e.prop, '')), t && 'auto' !== t ? t : 0);
                        },
                        set: function (e) {
                            k.fx.step[e.prop]
                                ? k.fx.step[e.prop](e)
                                : 1 !== e.elem.nodeType || (!k.cssHooks[e.prop] && null == e.elem.style[tt(e.prop)])
                                    ? (e.elem[e.prop] = e.now)
                                    : k.style(e.elem, e.prop, e.now + e.unit);
                        },
                    },
                }),
                (lt.propHooks.scrollTop = lt.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    },
                }),
                (k.easing = {
                    linear: function (e) {
                        return e;
                    },
                    swing: function (e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: 'swing',
                }),
                (k.fx = lt.prototype.init),
                (k.fx.step = {});
                var ct,
                    ft,
                    pt = /^(?:toggle|show|hide)$/,
                    dt = /queueHooks$/;
                function ht() {
                    ft && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ht) : n.setTimeout(ht, k.fx.interval), k.fx.tick());
                }
                function gt() {
                    return (
                        n.setTimeout(function () {
                            ct = void 0;
                        }),
                        (ct = Date.now())
                    );
                }
                function vt(e, t) {
                    var n,
                        r = 0,
                        i = {height: e};
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) (n = le[r]), (i['margin' + n] = i['padding' + n] = e);
                    return t && (i.opacity = i.width = e), i;
                }
                function yt(e, t, n) {
                    for (var r, i = (bt.tweeners[t] || []).concat(bt.tweeners['*']), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
                }
                function mt(e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        c,
                        f = 'width' in t || 'height' in t,
                        p = this,
                        d = {},
                        h = e.style,
                        g = e.nodeType && de(e),
                        v = te.get(e, 'fxshow');
                    for (r in (n.queue ||
                        ((a = k._queueHooks(e, 'fx')),
                        null == a.unqueued &&
                            ((a.unqueued = 0),
                            (s = a.empty.fire),
                            (a.empty.fire = function () {
                                a.unqueued || s();
                            })),
                        a.unqueued++,
                        p.always(function () {
                            p.always(function () {
                                a.unqueued--, k.queue(e, 'fx').length || a.empty.fire();
                            });
                        })),
                    t))
                        if (((i = t[r]), pt.test(i))) {
                            if ((delete t[r], (o = o || 'toggle' === i), i === (g ? 'hide' : 'show'))) {
                                if ('show' !== i || !v || void 0 === v[r]) continue;
                                g = !0;
                            }
                            d[r] = (v && v[r]) || k.style(e, r);
                        }
                    if (((u = !k.isEmptyObject(t)), u || !k.isEmptyObject(d)))
                        for (r in (f &&
                            1 === e.nodeType &&
                            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                            (l = v && v.display),
                            null == l && (l = te.get(e, 'display')),
                            (c = k.css(e, 'display')),
                            'none' === c && (l ? (c = l) : (ye([e], !0), (l = e.style.display || l), (c = k.css(e, 'display')), ye([e]))),
                            ('inline' === c || ('inline-block' === c && null != l)) &&
                                'none' === k.css(e, 'float') &&
                                (u ||
                                    (p.done(function () {
                                        h.display = l;
                                    }),
                                    null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
                                (h.display = 'inline-block'))),
                        n.overflow &&
                            ((h.overflow = 'hidden'),
                            p.always(function () {
                                (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                            })),
                        (u = !1),
                        d))
                            u ||
                                (v ? 'hidden' in v && (g = v.hidden) : (v = te.access(e, 'fxshow', {display: l})),
                                o && (v.hidden = !g),
                                g && ye([e], !0),
                                p.done(function () {
                                    for (r in (g || ye([e]), te.remove(e, 'fxshow'), d)) k.style(e, r, d[r]);
                                })),
                            (u = yt(g ? v[r] : 0, r, p)),
                            r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
                }
                function xt(e, t) {
                    var n, r, i, o, a;
                    for (n in e)
                        if (((r = K(n)), (i = t[r]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = k.cssHooks[r]), a && 'expand' in a))
                            for (n in ((o = a.expand(o)), delete e[r], o)) n in e || ((e[n] = o[n]), (t[n] = i));
                        else t[r] = i;
                }
                function bt(e, t, n) {
                    var r,
                        i,
                        o = 0,
                        a = bt.prefilters.length,
                        s = k.Deferred().always(function () {
                            delete u.elem;
                        }),
                        u = function () {
                            if (i) return !1;
                            for (var t = ct || gt(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
                            return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
                        },
                        l = s.promise({
                            elem: e,
                            props: k.extend({}, t),
                            opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: ct || gt(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function (t, n) {
                                var r = k.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                return l.tweens.push(r), r;
                            },
                            stop: function (t) {
                                var n = 0,
                                    r = t ? l.tweens.length : 0;
                                if (i) return this;
                                for (i = !0; n < r; n++) l.tweens[n].run(1);
                                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                            },
                        }),
                        c = l.props;
                    for (xt(c, l.opts.specialEasing); o < a; o++)
                        if (((r = bt.prefilters[o].call(l, e, c, l.opts)), r)) return m(r.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                    return (
                        k.map(c, yt, l),
                        m(l.opts.start) && l.opts.start.call(e, l),
                        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                        k.fx.timer(k.extend(u, {elem: e, anim: l, queue: l.opts.queue})),
                        l
                    );
                }
                (k.Animation = k.extend(bt, {
                    tweeners: {
                        '*': [
                            function (e, t) {
                                var n = this.createTween(e, t);
                                return he(n.elem, e, ue.exec(t), n), n;
                            },
                        ],
                    },
                    tweener: function (e, t) {
                        m(e) ? ((t = e), (e = ['*'])) : (e = e.match(F));
                        for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (bt.tweeners[n] = bt.tweeners[n] || []), bt.tweeners[n].unshift(t);
                    },
                    prefilters: [mt],
                    prefilter: function (e, t) {
                        t ? bt.prefilters.unshift(e) : bt.prefilters.push(e);
                    },
                })),
                (k.speed = function (e, t, n) {
                    var r = e && 'object' === typeof e ? k.extend({}, e) : {complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t)};
                    return (
                        k.fx.off ? (r.duration = 0) : 'number' !== typeof r.duration && (r.duration in k.fx.speeds ? (r.duration = k.fx.speeds[r.duration]) : (r.duration = k.fx.speeds._default)),
                        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
                        (r.old = r.complete),
                        (r.complete = function () {
                            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
                        }),
                        r
                    );
                }),
                k.fn.extend({
                    fadeTo: function (e, t, n, r) {
                        return this.filter(de).css('opacity', 0).show().end().animate({opacity: t}, e, n, r);
                    },
                    animate: function (e, t, n, r) {
                        var i = k.isEmptyObject(e),
                            o = k.speed(t, n, r),
                            a = function () {
                                var t = bt(this, k.extend({}, e), o);
                                (i || te.get(this, 'finish')) && t.stop(!0);
                            };
                        return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
                    },
                    stop: function (e, t, n) {
                        var r = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        };
                        return (
                            'string' !== typeof e && ((n = t), (t = e), (e = void 0)),
                            t && this.queue(e || 'fx', []),
                            this.each(function () {
                                var t = !0,
                                    i = null != e && e + 'queueHooks',
                                    o = k.timers,
                                    a = te.get(this);
                                if (i) a[i] && a[i].stop && r(a[i]);
                                else for (i in a) a[i] && a[i].stop && dt.test(i) && r(a[i]);
                                for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                                (!t && n) || k.dequeue(this, e);
                            })
                        );
                    },
                    finish: function (e) {
                        return (
                            !1 !== e && (e = e || 'fx'),
                            this.each(function () {
                                var t,
                                    n = te.get(this),
                                    r = n[e + 'queue'],
                                    i = n[e + 'queueHooks'],
                                    o = k.timers,
                                    a = r ? r.length : 0;
                                for (n.finish = !0, k.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
                                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                k.each(['toggle', 'show', 'hide'], function (e, t) {
                    var n = k.fn[t];
                    k.fn[t] = function (e, r, i) {
                        return null == e || 'boolean' === typeof e ? n.apply(this, arguments) : this.animate(vt(t, !0), e, r, i);
                    };
                }),
                k.each({slideDown: vt('show'), slideUp: vt('hide'), slideToggle: vt('toggle'), fadeIn: {opacity: 'show'}, fadeOut: {opacity: 'hide'}, fadeToggle: {opacity: 'toggle'}}, function (
                    e,
                    t
                ) {
                    k.fn[e] = function (e, n, r) {
                        return this.animate(t, e, n, r);
                    };
                }),
                (k.timers = []),
                (k.fx.tick = function () {
                    var e,
                        t = 0,
                        n = k.timers;
                    for (ct = Date.now(); t < n.length; t++) (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
                    n.length || k.fx.stop(), (ct = void 0);
                }),
                (k.fx.timer = function (e) {
                    k.timers.push(e), k.fx.start();
                }),
                (k.fx.interval = 13),
                (k.fx.start = function () {
                    ft || ((ft = !0), ht());
                }),
                (k.fx.stop = function () {
                    ft = null;
                }),
                (k.fx.speeds = {slow: 600, fast: 200, _default: 400}),
                (k.fn.delay = function (e, t) {
                    return (
                        (e = (k.fx && k.fx.speeds[e]) || e),
                        (t = t || 'fx'),
                        this.queue(t, function (t, r) {
                            var i = n.setTimeout(t, e);
                            r.stop = function () {
                                n.clearTimeout(i);
                            };
                        })
                    );
                }),
                (function () {
                    var e = b.createElement('input'),
                        t = b.createElement('select'),
                        n = t.appendChild(b.createElement('option'));
                    (e.type = 'checkbox'),
                    (y.checkOn = '' !== e.value),
                    (y.optSelected = n.selected),
                    (e = b.createElement('input')),
                    (e.value = 't'),
                    (e.type = 'radio'),
                    (y.radioValue = 't' === e.value);
                })();
                var wt,
                    Tt = k.expr.attrHandle;
                k.fn.extend({
                    attr: function (e, t) {
                        return G(this, k.attr, e, t, arguments.length > 1);
                    },
                    removeAttr: function (e) {
                        return this.each(function () {
                            k.removeAttr(this, e);
                        });
                    },
                }),
                k.extend({
                    attr: function (e, t, n) {
                        var r,
                            i,
                            o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return 'undefined' === typeof e.getAttribute
                                ? k.prop(e, t, n)
                                : ((1 === o && k.isXMLDoc(e)) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? wt : void 0)),
                                void 0 !== n
                                    ? null === n
                                        ? void k.removeAttr(e, t)
                                        : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                                            ? r
                                            : (e.setAttribute(t, n + ''), n)
                                    : i && 'get' in i && null !== (r = i.get(e, t))
                                        ? r
                                        : ((r = k.find.attr(e, t)), null == r ? void 0 : r));
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!y.radioValue && 'radio' === t && q(e, 'input')) {
                                    var n = e.value;
                                    return e.setAttribute('type', t), n && (e.value = n), t;
                                }
                            },
                        },
                    },
                    removeAttr: function (e, t) {
                        var n,
                            r = 0,
                            i = t && t.match(F);
                        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
                    },
                }),
                (wt = {
                    set: function (e, t, n) {
                        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
                    },
                }),
                k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = Tt[t] || k.find.attr;
                    Tt[t] = function (e, t, r) {
                        var i,
                            o,
                            a = t.toLowerCase();
                        return r || ((o = Tt[a]), (Tt[a] = i), (i = null != n(e, t, r) ? a : null), (Tt[a] = o)), i;
                    };
                });
                var Ct = /^(?:input|select|textarea|button)$/i,
                    Et = /^(?:a|area)$/i;
                function kt(e) {
                    var t = e.match(F) || [];
                    return t.join(' ');
                }
                function St(e) {
                    return (e.getAttribute && e.getAttribute('class')) || '';
                }
                function At(e) {
                    return Array.isArray(e) ? e : ('string' === typeof e && e.match(F)) || [];
                }
                k.fn.extend({
                    prop: function (e, t) {
                        return G(this, k.prop, e, t, arguments.length > 1);
                    },
                    removeProp: function (e) {
                        return this.each(function () {
                            delete this[k.propFix[e] || e];
                        });
                    },
                }),
                k.extend({
                    prop: function (e, t, n) {
                        var r,
                            i,
                            o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return (
                                (1 === o && k.isXMLDoc(e)) || ((t = k.propFix[t] || t), (i = k.propHooks[t])),
                                void 0 !== n ? (i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = k.find.attr(e, 'tabindex');
                                return t ? parseInt(t, 10) : Ct.test(e.nodeName) || (Et.test(e.nodeName) && e.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: {for: 'htmlFor', class: 'className'},
                }),
                y.optSelected ||
                        (k.propHooks.selected = {
                            get: function (e) {
                                var t = e.parentNode;
                                return t && t.parentNode && t.parentNode.selectedIndex, null;
                            },
                            set: function (e) {
                                var t = e.parentNode;
                                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                            },
                        }),
                k.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
                    k.propFix[this.toLowerCase()] = this;
                }),
                k.fn.extend({
                    addClass: function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            u = 0;
                        if (m(e))
                            return this.each(function (t) {
                                k(this).addClass(e.call(this, t, St(this)));
                            });
                        if (((t = At(e)), t.length))
                            while ((n = this[u++]))
                                if (((i = St(n)), (r = 1 === n.nodeType && ' ' + kt(i) + ' '), r)) {
                                    a = 0;
                                    while ((o = t[a++])) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
                                    (s = kt(r)), i !== s && n.setAttribute('class', s);
                                }
                        return this;
                    },
                    removeClass: function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            u = 0;
                        if (m(e))
                            return this.each(function (t) {
                                k(this).removeClass(e.call(this, t, St(this)));
                            });
                        if (!arguments.length) return this.attr('class', '');
                        if (((t = At(e)), t.length))
                            while ((n = this[u++]))
                                if (((i = St(n)), (r = 1 === n.nodeType && ' ' + kt(i) + ' '), r)) {
                                    a = 0;
                                    while ((o = t[a++])) while (r.indexOf(' ' + o + ' ') > -1) r = r.replace(' ' + o + ' ', ' ');
                                    (s = kt(r)), i !== s && n.setAttribute('class', s);
                                }
                        return this;
                    },
                    toggleClass: function (e, t) {
                        var n = typeof e,
                            r = 'string' === n || Array.isArray(e);
                        return 'boolean' === typeof t && r
                            ? t
                                ? this.addClass(e)
                                : this.removeClass(e)
                            : m(e)
                                ? this.each(function (n) {
                                    k(this).toggleClass(e.call(this, n, St(this), t), t);
                                })
                                : this.each(function () {
                                    var t, i, o, a;
                                    if (r) {
                                        (i = 0), (o = k(this)), (a = At(e));
                                        while ((t = a[i++])) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                    } else (void 0 !== e && 'boolean' !== n) || ((t = St(this)), t && te.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : te.get(this, '__className__') || ''));
                                });
                    },
                    hasClass: function (e) {
                        var t,
                            n,
                            r = 0;
                        t = ' ' + e + ' ';
                        while ((n = this[r++])) if (1 === n.nodeType && (' ' + kt(St(n)) + ' ').indexOf(t) > -1) return !0;
                        return !1;
                    },
                });
                var Nt = /\r/g;
                k.fn.extend({
                    val: function (e) {
                        var t,
                            n,
                            r,
                            i = this[0];
                        return arguments.length
                            ? ((r = m(e)),
                            this.each(function (n) {
                                var i;
                                1 === this.nodeType &&
                                      ((i = r ? e.call(this, n, k(this).val()) : e),
                                      null == i
                                          ? (i = '')
                                          : 'number' === typeof i
                                              ? (i += '')
                                              : Array.isArray(i) &&
                                            (i = k.map(i, function (e) {
                                                return null == e ? '' : e + '';
                                            })),
                                      (t = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]),
                                      (t && 'set' in t && void 0 !== t.set(this, i, 'value')) || (this.value = i));
                            }))
                            : i
                                ? ((t = k.valHooks[i.type] || k.valHooks[i.nodeName.toLowerCase()]),
                                t && 'get' in t && void 0 !== (n = t.get(i, 'value')) ? n : ((n = i.value), 'string' === typeof n ? n.replace(Nt, '') : null == n ? '' : n))
                                : void 0;
                    },
                }),
                k.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = k.find.attr(e, 'value');
                                return null != t ? t : kt(k.text(e));
                            },
                        },
                        select: {
                            get: function (e) {
                                var t,
                                    n,
                                    r,
                                    i = e.options,
                                    o = e.selectedIndex,
                                    a = 'select-one' === e.type,
                                    s = a ? null : [],
                                    u = a ? o + 1 : i.length;
                                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                    if (((n = i[r]), (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !q(n.parentNode, 'optgroup')))) {
                                        if (((t = k(n).val()), a)) return t;
                                        s.push(t);
                                    }
                                return s;
                            },
                            set: function (e, t) {
                                var n,
                                    r,
                                    i = e.options,
                                    o = k.makeArray(t),
                                    a = i.length;
                                while (a--) (r = i[a]), (r.selected = k.inArray(k.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), o;
                            },
                        },
                    },
                }),
                k.each(['radio', 'checkbox'], function () {
                    (k.valHooks[this] = {
                        set: function (e, t) {
                            if (Array.isArray(t)) return (e.checked = k.inArray(k(e).val(), t) > -1);
                        },
                    }),
                    y.checkOn ||
                                (k.valHooks[this].get = function (e) {
                                    return null === e.getAttribute('value') ? 'on' : e.value;
                                });
                }),
                (y.focusin = 'onfocusin' in n);
                var Dt = /^(?:focusinfocus|focusoutblur)$/,
                    jt = function (e) {
                        e.stopPropagation();
                    };
                k.extend(k.event, {
                    trigger: function (e, t, r, i) {
                        var o,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f,
                            p,
                            d = [r || b],
                            g = h.call(e, 'type') ? e.type : e,
                            v = h.call(e, 'namespace') ? e.namespace.split('.') : [];
                        if (
                            ((a = p = s = r = r || b),
                            3 !== r.nodeType &&
                                8 !== r.nodeType &&
                                !Dt.test(g + k.event.triggered) &&
                                (g.indexOf('.') > -1 && ((v = g.split('.')), (g = v.shift()), v.sort()),
                                (l = g.indexOf(':') < 0 && 'on' + g),
                                (e = e[k.expando] ? e : new k.Event(g, 'object' === typeof e && e)),
                                (e.isTrigger = i ? 2 : 3),
                                (e.namespace = v.join('.')),
                                (e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
                                (e.result = void 0),
                                e.target || (e.target = r),
                                (t = null == t ? [e] : k.makeArray(t, [e])),
                                (f = k.event.special[g] || {}),
                                i || !f.trigger || !1 !== f.trigger.apply(r, t)))
                        ) {
                            if (!i && !f.noBubble && !x(r)) {
                                for (u = f.delegateType || g, Dt.test(u + g) || (a = a.parentNode); a; a = a.parentNode) d.push(a), (s = a);
                                s === (r.ownerDocument || b) && d.push(s.defaultView || s.parentWindow || n);
                            }
                            o = 0;
                            while ((a = d[o++]) && !e.isPropagationStopped())
                                (p = a),
                                (e.type = o > 1 ? u : f.bindType || g),
                                (c = (te.get(a, 'events') || Object.create(null))[e.type] && te.get(a, 'handle')),
                                c && c.apply(a, t),
                                (c = l && a[l]),
                                c && c.apply && Z(a) && ((e.result = c.apply(a, t)), !1 === e.result && e.preventDefault());
                            return (
                                (e.type = g),
                                i ||
                                    e.isDefaultPrevented() ||
                                    (f._default && !1 !== f._default.apply(d.pop(), t)) ||
                                    !Z(r) ||
                                    (l &&
                                        m(r[g]) &&
                                        !x(r) &&
                                        ((s = r[l]),
                                        s && (r[l] = null),
                                        (k.event.triggered = g),
                                        e.isPropagationStopped() && p.addEventListener(g, jt),
                                        r[g](),
                                        e.isPropagationStopped() && p.removeEventListener(g, jt),
                                        (k.event.triggered = void 0),
                                        s && (r[l] = s))),
                                e.result
                            );
                        }
                    },
                    simulate: function (e, t, n) {
                        var r = k.extend(new k.Event(), n, {type: e, isSimulated: !0});
                        k.event.trigger(r, null, t);
                    },
                }),
                k.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            k.event.trigger(e, t, this);
                        });
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n) return k.event.trigger(e, t, n, !0);
                    },
                }),
                y.focusin ||
                        k.each({focus: 'focusin', blur: 'focusout'}, function (e, t) {
                            var n = function (e) {
                                k.event.simulate(t, e.target, k.event.fix(e));
                            };
                            k.event.special[t] = {
                                setup: function () {
                                    var r = this.ownerDocument || this.document || this,
                                        i = te.access(r, t);
                                    i || r.addEventListener(e, n, !0), te.access(r, t, (i || 0) + 1);
                                },
                                teardown: function () {
                                    var r = this.ownerDocument || this.document || this,
                                        i = te.access(r, t) - 1;
                                    i ? te.access(r, t, i) : (r.removeEventListener(e, n, !0), te.remove(r, t));
                                },
                            };
                        });
                var qt = n.location,
                    Lt = {guid: Date.now()},
                    Ht = /\?/;
                k.parseXML = function (e) {
                    var t;
                    if (!e || 'string' !== typeof e) return null;
                    try {
                        t = new n.DOMParser().parseFromString(e, 'text/xml');
                    } catch (r) {
                        t = void 0;
                    }
                    return (t && !t.getElementsByTagName('parsererror').length) || k.error('Invalid XML: ' + e), t;
                };
                var Ot = /\[\]$/,
                    Pt = /\r?\n/g,
                    Rt = /^(?:submit|button|image|reset|file)$/i,
                    Mt = /^(?:input|select|textarea|keygen)/i;
                function It(e, t, n, r) {
                    var i;
                    if (Array.isArray(t))
                        k.each(t, function (t, i) {
                            n || Ot.test(e) ? r(e, i) : It(e + '[' + ('object' === typeof i && null != i ? t : '') + ']', i, n, r);
                        });
                    else if (n || 'object' !== C(t)) r(e, t);
                    else for (i in t) It(e + '[' + i + ']', t[i], n, r);
                }
                (k.param = function (e, t) {
                    var n,
                        r = [],
                        i = function (e, t) {
                            var n = m(t) ? t() : t;
                            r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
                        };
                    if (null == e) return '';
                    if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
                        k.each(e, function () {
                            i(this.name, this.value);
                        });
                    else for (n in e) It(n, e[n], t, i);
                    return r.join('&');
                }),
                k.fn.extend({
                    serialize: function () {
                        return k.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = k.prop(this, 'elements');
                            return e ? k.makeArray(e) : this;
                        })
                            .filter(function () {
                                var e = this.type;
                                return this.name && !k(this).is(':disabled') && Mt.test(this.nodeName) && !Rt.test(e) && (this.checked || !me.test(e));
                            })
                            .map(function (e, t) {
                                var n = k(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                        ? k.map(n, function (e) {
                                            return {name: t.name, value: e.replace(Pt, '\r\n')};
                                        })
                                        : {name: t.name, value: n.replace(Pt, '\r\n')};
                            })
                            .get();
                    },
                });
                var Wt = /%20/g,
                    Ft = /#.*$/,
                    Bt = /([?&])_=[^&]*/,
                    $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    _t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                    zt = /^(?:GET|HEAD)$/,
                    Ut = /^\/\//,
                    Xt = {},
                    Vt = {},
                    Gt = '*/'.concat('*'),
                    Yt = b.createElement('a');
                function Jt(e) {
                    return function (t, n) {
                        'string' !== typeof t && ((n = t), (t = '*'));
                        var r,
                            i = 0,
                            o = t.toLowerCase().match(F) || [];
                        if (m(n)) while ((r = o[i++])) '+' === r[0] ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                    };
                }
                function Qt(e, t, n, r) {
                    var i = {},
                        o = e === Vt;
                    function a(s) {
                        var u;
                        return (
                            (i[s] = !0),
                            k.each(e[s] || [], function (e, s) {
                                var l = s(t, n, r);
                                return 'string' !== typeof l || o || i[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
                            }),
                            u
                        );
                    }
                    return a(t.dataTypes[0]) || (!i['*'] && a('*'));
                }
                function Kt(e, t) {
                    var n,
                        r,
                        i = k.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && k.extend(!0, e, r), e;
                }
                function Zt(e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s = e.contents,
                        u = e.dataTypes;
                    while ('*' === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break;
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + ' ' + u[0]]) {
                                o = i;
                                break;
                            }
                            a || (a = i);
                        }
                        o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                }
                function en(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift()), o))
                            if ('*' === o) o = u;
                            else if ('*' !== u && u !== o) {
                                if (((a = l[u + ' ' + o] || l['* ' + o]), !a))
                                    for (i in l)
                                        if (((s = i.split(' ')), s[1] === o && ((a = l[u + ' ' + s[0]] || l['* ' + s[0]]), a))) {
                                            !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                            break;
                                        }
                                if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else
                                        try {
                                            t = a(t);
                                        } catch (f) {
                                            return {state: 'parsererror', error: a ? f : 'No conversion from ' + u + ' to ' + o};
                                        }
                            }
                    return {state: 'success', data: t};
                }
                (Yt.href = qt.href),
                k.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: qt.href,
                        type: 'GET',
                        isLocal: _t.test(qt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                        accepts: {'*': Gt, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript'},
                        contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                        responseFields: {xml: 'responseXML', text: 'responseText', json: 'responseJSON'},
                        converters: {'* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': k.parseXML},
                        flatOptions: {url: !0, context: !0},
                    },
                    ajaxSetup: function (e, t) {
                        return t ? Kt(Kt(e, k.ajaxSettings), t) : Kt(k.ajaxSettings, e);
                    },
                    ajaxPrefilter: Jt(Xt),
                    ajaxTransport: Jt(Vt),
                    ajax: function (e, t) {
                        'object' === typeof e && ((t = e), (e = void 0)), (t = t || {});
                        var r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f,
                            p,
                            d = k.ajaxSetup({}, t),
                            h = d.context || d,
                            g = d.context && (h.nodeType || h.jquery) ? k(h) : k.event,
                            v = k.Deferred(),
                            y = k.Callbacks('once memory'),
                            m = d.statusCode || {},
                            x = {},
                            w = {},
                            T = 'canceled',
                            C = {
                                readyState: 0,
                                getResponseHeader: function (e) {
                                    var t;
                                    if (l) {
                                        if (!a) {
                                            a = {};
                                            while ((t = $t.exec(o))) a[t[1].toLowerCase() + ' '] = (a[t[1].toLowerCase() + ' '] || []).concat(t[2]);
                                        }
                                        t = a[e.toLowerCase() + ' '];
                                    }
                                    return null == t ? null : t.join(', ');
                                },
                                getAllResponseHeaders: function () {
                                    return l ? o : null;
                                },
                                setRequestHeader: function (e, t) {
                                    return null == l && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (x[e] = t)), this;
                                },
                                overrideMimeType: function (e) {
                                    return null == l && (d.mimeType = e), this;
                                },
                                statusCode: function (e) {
                                    var t;
                                    if (e)
                                        if (l) C.always(e[C.status]);
                                        else for (t in e) m[t] = [m[t], e[t]];
                                    return this;
                                },
                                abort: function (e) {
                                    var t = e || T;
                                    return r && r.abort(t), E(0, t), this;
                                },
                            };
                        if (
                            (v.promise(C),
                            (d.url = ((e || d.url || qt.href) + '').replace(Ut, qt.protocol + '//')),
                            (d.type = t.method || t.type || d.method || d.type),
                            (d.dataTypes = (d.dataType || '*').toLowerCase().match(F) || ['']),
                            null == d.crossDomain)
                        ) {
                            u = b.createElement('a');
                            try {
                                (u.href = d.url), (u.href = u.href), (d.crossDomain = Yt.protocol + '//' + Yt.host !== u.protocol + '//' + u.host);
                            } catch (S) {
                                d.crossDomain = !0;
                            }
                        }
                        if ((d.data && d.processData && 'string' !== typeof d.data && (d.data = k.param(d.data, d.traditional)), Qt(Xt, d, t, C), l)) return C;
                        for (f in ((c = k.event && d.global),
                        c && 0 === k.active++ && k.event.trigger('ajaxStart'),
                        (d.type = d.type.toUpperCase()),
                        (d.hasContent = !zt.test(d.type)),
                        (i = d.url.replace(Ft, '')),
                        d.hasContent
                            ? d.data && d.processData && 0 === (d.contentType || '').indexOf('application/x-www-form-urlencoded') && (d.data = d.data.replace(Wt, '+'))
                            : ((p = d.url.slice(i.length)),
                            d.data && (d.processData || 'string' === typeof d.data) && ((i += (Ht.test(i) ? '&' : '?') + d.data), delete d.data),
                            !1 === d.cache && ((i = i.replace(Bt, '$1')), (p = (Ht.test(i) ? '&' : '?') + '_=' + Lt.guid++ + p)),
                            (d.url = i + p)),
                        d.ifModified && (k.lastModified[i] && C.setRequestHeader('If-Modified-Since', k.lastModified[i]), k.etag[i] && C.setRequestHeader('If-None-Match', k.etag[i])),
                        ((d.data && d.hasContent && !1 !== d.contentType) || t.contentType) && C.setRequestHeader('Content-Type', d.contentType),
                        C.setRequestHeader(
                            'Accept',
                            d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ('*' !== d.dataTypes[0] ? ', ' + Gt + '; q=0.01' : '') : d.accepts['*']
                        ),
                        d.headers))
                            C.setRequestHeader(f, d.headers[f]);
                        if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l)) return C.abort();
                        if (((T = 'abort'), y.add(d.complete), C.done(d.success), C.fail(d.error), (r = Qt(Vt, d, t, C)), r)) {
                            if (((C.readyState = 1), c && g.trigger('ajaxSend', [C, d]), l)) return C;
                            d.async &&
                                    d.timeout > 0 &&
                                    (s = n.setTimeout(function () {
                                        C.abort('timeout');
                                    }, d.timeout));
                            try {
                                (l = !1), r.send(x, E);
                            } catch (S) {
                                if (l) throw S;
                                E(-1, S);
                            }
                        } else E(-1, 'No Transport');
                        function E(e, t, a, u) {
                            var f,
                                p,
                                x,
                                b,
                                w,
                                T = t;
                            l ||
                                    ((l = !0),
                                    s && n.clearTimeout(s),
                                    (r = void 0),
                                    (o = u || ''),
                                    (C.readyState = e > 0 ? 4 : 0),
                                    (f = (e >= 200 && e < 300) || 304 === e),
                                    a && (b = Zt(d, C, a)),
                                    !f && k.inArray('script', d.dataTypes) > -1 && (d.converters['text script'] = function () {}),
                                    (b = en(d, b, C, f)),
                                    f
                                        ? (d.ifModified && ((w = C.getResponseHeader('Last-Modified')), w && (k.lastModified[i] = w), (w = C.getResponseHeader('etag')), w && (k.etag[i] = w)),
                                        204 === e || 'HEAD' === d.type ? (T = 'nocontent') : 304 === e ? (T = 'notmodified') : ((T = b.state), (p = b.data), (x = b.error), (f = !x)))
                                        : ((x = T), (!e && T) || ((T = 'error'), e < 0 && (e = 0))),
                                    (C.status = e),
                                    (C.statusText = (t || T) + ''),
                                    f ? v.resolveWith(h, [p, T, C]) : v.rejectWith(h, [C, T, x]),
                                    C.statusCode(m),
                                    (m = void 0),
                                    c && g.trigger(f ? 'ajaxSuccess' : 'ajaxError', [C, d, f ? p : x]),
                                    y.fireWith(h, [C, T]),
                                    c && (g.trigger('ajaxComplete', [C, d]), --k.active || k.event.trigger('ajaxStop')));
                        }
                        return C;
                    },
                    getJSON: function (e, t, n) {
                        return k.get(e, t, n, 'json');
                    },
                    getScript: function (e, t) {
                        return k.get(e, void 0, t, 'script');
                    },
                }),
                k.each(['get', 'post'], function (e, t) {
                    k[t] = function (e, n, r, i) {
                        return m(n) && ((i = i || r), (r = n), (n = void 0)), k.ajax(k.extend({url: e, type: t, dataType: i, data: n, success: r}, k.isPlainObject(e) && e));
                    };
                }),
                k.ajaxPrefilter(function (e) {
                    var t;
                    for (t in e.headers) 'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '');
                }),
                (k._evalUrl = function (e, t, n) {
                    return k.ajax({
                        url: e,
                        type: 'GET',
                        dataType: 'script',
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {'text script': function () {}},
                        dataFilter: function (e) {
                            k.globalEval(e, t, n);
                        },
                    });
                }),
                k.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return (
                            this[0] &&
                                    (m(e) && (e = e.call(this[0])),
                                    (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                                    this[0].parentNode && t.insertBefore(this[0]),
                                    t
                                        .map(function () {
                                            var e = this;
                                            while (e.firstElementChild) e = e.firstElementChild;
                                            return e;
                                        })
                                        .append(this)),
                            this
                        );
                    },
                    wrapInner: function (e) {
                        return m(e)
                            ? this.each(function (t) {
                                k(this).wrapInner(e.call(this, t));
                            })
                            : this.each(function () {
                                var t = k(this),
                                    n = t.contents();
                                n.length ? n.wrapAll(e) : t.append(e);
                            });
                    },
                    wrap: function (e) {
                        var t = m(e);
                        return this.each(function (n) {
                            k(this).wrapAll(t ? e.call(this, n) : e);
                        });
                    },
                    unwrap: function (e) {
                        return (
                            this.parent(e)
                                .not('body')
                                .each(function () {
                                    k(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (k.expr.pseudos.hidden = function (e) {
                    return !k.expr.pseudos.visible(e);
                }),
                (k.expr.pseudos.visible = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }),
                (k.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (e) {}
                });
                var tn = {0: 200, 1223: 204},
                    nn = k.ajaxSettings.xhr();
                (y.cors = !!nn && 'withCredentials' in nn),
                (y.ajax = nn = !!nn),
                k.ajaxTransport(function (e) {
                    var t, r;
                    if (y.cors || (nn && !e.crossDomain))
                        return {
                            send: function (i, o) {
                                var a,
                                    s = e.xhr();
                                if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                                e.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest'),
                                i))
                                    s.setRequestHeader(a, i[a]);
                                (t = function (e) {
                                    return function () {
                                        t &&
                                                ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                                'abort' === e
                                                    ? s.abort()
                                                    : 'error' === e
                                                        ? 'number' !== typeof s.status
                                                            ? o(0, 'error')
                                                            : o(s.status, s.statusText)
                                                        : o(
                                                            tn[s.status] || s.status,
                                                            s.statusText,
                                                            'text' !== (s.responseType || 'text') || 'string' !== typeof s.responseText ? {binary: s.response} : {text: s.responseText},
                                                            s.getAllResponseHeaders()
                                                        ));
                                    };
                                }),
                                (s.onload = t()),
                                (r = s.onerror = s.ontimeout = t('error')),
                                void 0 !== s.onabort
                                    ? (s.onabort = r)
                                    : (s.onreadystatechange = function () {
                                        4 === s.readyState &&
                                                      n.setTimeout(function () {
                                                          t && r();
                                                      });
                                    }),
                                (t = t('abort'));
                                try {
                                    s.send((e.hasContent && e.data) || null);
                                } catch (u) {
                                    if (t) throw u;
                                }
                            },
                            abort: function () {
                                t && t();
                            },
                        };
                }),
                k.ajaxPrefilter(function (e) {
                    e.crossDomain && (e.contents.script = !1);
                }),
                k.ajaxSetup({
                    accepts: {script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'},
                    contents: {script: /\b(?:java|ecma)script\b/},
                    converters: {
                        'text script': function (e) {
                            return k.globalEval(e), e;
                        },
                    },
                }),
                k.ajaxPrefilter('script', function (e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
                }),
                k.ajaxTransport('script', function (e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs)
                        return {
                            send: function (r, i) {
                                (t = k('<script>')
                                    .attr(e.scriptAttrs || {})
                                    .prop({charset: e.scriptCharset, src: e.url})
                                    .on(
                                        'load error',
                                        (n = function (e) {
                                            t.remove(), (n = null), e && i('error' === e.type ? 404 : 200, e.type);
                                        })
                                    )),
                                b.head.appendChild(t[0]);
                            },
                            abort: function () {
                                n && n();
                            },
                        };
                });
                var rn = [],
                    on = /(=)\?(?=&|$)|\?\?/;
                k.ajaxSetup({
                    jsonp: 'callback',
                    jsonpCallback: function () {
                        var e = rn.pop() || k.expando + '_' + Lt.guid++;
                        return (this[e] = !0), e;
                    },
                }),
                k.ajaxPrefilter('json jsonp', function (e, t, r) {
                    var i,
                        o,
                        a,
                        s =
                                !1 !== e.jsonp &&
                                (on.test(e.url) ? 'url' : 'string' === typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && on.test(e.data) && 'data');
                    if (s || 'jsonp' === e.dataTypes[0])
                        return (
                            (i = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                            s ? (e[s] = e[s].replace(on, '$1' + i)) : !1 !== e.jsonp && (e.url += (Ht.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
                            (e.converters['script json'] = function () {
                                return a || k.error(i + ' was not called'), a[0];
                            }),
                            (e.dataTypes[0] = 'json'),
                            (o = n[i]),
                            (n[i] = function () {
                                a = arguments;
                            }),
                            r.always(function () {
                                void 0 === o ? k(n).removeProp(i) : (n[i] = o), e[i] && ((e.jsonpCallback = t.jsonpCallback), rn.push(i)), a && m(o) && o(a[0]), (a = o = void 0);
                            }),
                            'script'
                        );
                }),
                (y.createHTMLDocument = (function () {
                    var e = b.implementation.createHTMLDocument('').body;
                    return (e.innerHTML = '<form></form><form></form>'), 2 === e.childNodes.length;
                })()),
                (k.parseHTML = function (e, t, n) {
                    return 'string' !== typeof e
                        ? []
                        : ('boolean' === typeof t && ((n = t), (t = !1)),
                        t || (y.createHTMLDocument ? ((t = b.implementation.createHTMLDocument('')), (r = t.createElement('base')), (r.href = b.location.href), t.head.appendChild(r)) : (t = b)),
                        (i = L.exec(e)),
                        (o = !n && []),
                        i ? [t.createElement(i[1])] : ((i = ke([e], t, o)), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
                    var r, i, o;
                }),
                (k.fn.load = function (e, t, n) {
                    var r,
                        i,
                        o,
                        a = this,
                        s = e.indexOf(' ');
                    return (
                        s > -1 && ((r = kt(e.slice(s))), (e = e.slice(0, s))),
                        m(t) ? ((n = t), (t = void 0)) : t && 'object' === typeof t && (i = 'POST'),
                        a.length > 0 &&
                                k
                                    .ajax({url: e, type: i || 'GET', dataType: 'html', data: t})
                                    .done(function (e) {
                                        (o = arguments), a.html(r ? k('<div>').append(k.parseHTML(e)).find(r) : e);
                                    })
                                    .always(
                                        n &&
                                            function (e, t) {
                                                a.each(function () {
                                                    n.apply(this, o || [e.responseText, t, e]);
                                                });
                                            }
                                    ),
                        this
                    );
                }),
                (k.expr.pseudos.animated = function (e) {
                    return k.grep(k.timers, function (t) {
                        return e === t.elem;
                    }).length;
                }),
                (k.offset = {
                    setOffset: function (e, t, n) {
                        var r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            l,
                            c = k.css(e, 'position'),
                            f = k(e),
                            p = {};
                        'static' === c && (e.style.position = 'relative'),
                        (s = f.offset()),
                        (o = k.css(e, 'top')),
                        (u = k.css(e, 'left')),
                        (l = ('absolute' === c || 'fixed' === c) && (o + u).indexOf('auto') > -1),
                        l ? ((r = f.position()), (a = r.top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                        m(t) && (t = t.call(e, n, k.extend({}, s))),
                        null != t.top && (p.top = t.top - s.top + a),
                        null != t.left && (p.left = t.left - s.left + i),
                        'using' in t ? t.using.call(e, p) : ('number' === typeof p.top && (p.top += 'px'), 'number' === typeof p.left && (p.left += 'px'), f.css(p));
                    },
                }),
                k.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e
                                ? this
                                : this.each(function (t) {
                                    k.offset.setOffset(this, e, t);
                                });
                        var t,
                            n,
                            r = this[0];
                        return r
                            ? r.getClientRects().length
                                ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), {top: t.top + n.pageYOffset, left: t.left + n.pageXOffset})
                                : {top: 0, left: 0}
                            : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var e,
                                t,
                                n,
                                r = this[0],
                                i = {top: 0, left: 0};
                            if ('fixed' === k.css(r, 'position')) t = r.getBoundingClientRect();
                            else {
                                (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                                while (e && (e === n.body || e === n.documentElement) && 'static' === k.css(e, 'position')) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((i = k(e).offset()), (i.top += k.css(e, 'borderTopWidth', !0)), (i.left += k.css(e, 'borderLeftWidth', !0)));
                            }
                            return {top: t.top - i.top - k.css(r, 'marginTop', !0), left: t.left - i.left - k.css(r, 'marginLeft', !0)};
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            var e = this.offsetParent;
                            while (e && 'static' === k.css(e, 'position')) e = e.offsetParent;
                            return e || ce;
                        });
                    },
                }),
                k.each({scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset'}, function (e, t) {
                    var n = 'pageYOffset' === t;
                    k.fn[e] = function (r) {
                        return G(
                            this,
                            function (e, r, i) {
                                var o;
                                if ((x(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                            },
                            e,
                            r,
                            arguments.length
                        );
                    };
                }),
                k.each(['top', 'left'], function (e, t) {
                    k.cssHooks[t] = Je(y.pixelPosition, function (e, n) {
                        if (n) return (n = Ye(e, t)), Ue.test(n) ? k(e).position()[t] + 'px' : n;
                    });
                }),
                k.each({Height: 'height', Width: 'width'}, function (e, t) {
                    k.each({padding: 'inner' + e, content: t, '': 'outer' + e}, function (n, r) {
                        k.fn[r] = function (i, o) {
                            var a = arguments.length && (n || 'boolean' !== typeof i),
                                s = n || (!0 === i || !0 === o ? 'margin' : 'border');
                            return G(
                                this,
                                function (t, n, i) {
                                    var o;
                                    return x(t)
                                        ? 0 === r.indexOf('outer')
                                            ? t['inner' + e]
                                            : t.document.documentElement['client' + e]
                                        : 9 === t.nodeType
                                            ? ((o = t.documentElement), Math.max(t.body['scroll' + e], o['scroll' + e], t.body['offset' + e], o['offset' + e], o['client' + e]))
                                            : void 0 === i
                                                ? k.css(t, n, s)
                                                : k.style(t, n, i, s);
                                },
                                t,
                                a ? i : void 0,
                                a
                            );
                        };
                    });
                }),
                k.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
                    k.fn[t] = function (e) {
                        return this.on(t, e);
                    };
                }),
                k.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function (e, t, n, r) {
                        return this.on(t, e, n, r);
                    },
                    undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
                    },
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e);
                    },
                }),
                k.each(
                    'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                        ' '
                    ),
                    function (e, t) {
                        k.fn[t] = function (e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                        };
                    }
                );
                var an = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                (k.proxy = function (e, t) {
                    var n, r, i;
                    if (('string' === typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
                        return (
                            (r = u.call(arguments, 2)),
                            (i = function () {
                                return e.apply(t || this, r.concat(u.call(arguments)));
                            }),
                            (i.guid = e.guid = e.guid || k.guid++),
                            i
                        );
                }),
                (k.holdReady = function (e) {
                    e ? k.readyWait++ : k.ready(!0);
                }),
                (k.isArray = Array.isArray),
                (k.parseJSON = JSON.parse),
                (k.nodeName = q),
                (k.isFunction = m),
                (k.isWindow = x),
                (k.camelCase = K),
                (k.type = C),
                (k.now = Date.now),
                (k.isNumeric = function (e) {
                    var t = k.type(e);
                    return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
                }),
                (k.trim = function (e) {
                    return null == e ? '' : (e + '').replace(an, '');
                }),
                (r = []),
                (i = function () {
                    return k;
                }.apply(t, r)),
                void 0 === i || (e.exports = i);
                var sn = n.jQuery,
                    un = n.$;
                return (
                    (k.noConflict = function (e) {
                        return n.$ === k && (n.$ = un), e && n.jQuery === k && (n.jQuery = sn), k;
                    }),
                    'undefined' === typeof o && (n.jQuery = n.$ = k),
                    k
                );
            });
        },
    },
]);
