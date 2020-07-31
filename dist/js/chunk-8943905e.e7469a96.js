(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    ['chunk-8943905e'],
    {
        '17a0': function (e, t) {
            e.exports =
                '// @author brunoimbrizi / http://brunoimbrizi.com\n\nprecision highp float;\n#define GLSLIFY 1\n\nattribute float pindex;\nattribute vec3 position;\nattribute vec3 offset;\nattribute vec2 uv;\nattribute float angle;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float uTime;\nuniform float uRandom;\nuniform float uDepth;\nuniform float uSize;\nuniform vec2 uTextureSize;\nuniform sampler2D uTexture;\nuniform sampler2D uTouch;\n\nvarying vec2 vPUv;\nvarying vec2 vUv;\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1_0(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_1_0(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_1_1(vec3 x) {\n  return mod289_1_0(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_1_2(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_1_0(i); // Avoid truncation effects in permutation\n  vec3 p = permute_1_1( permute_1_1( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n\n\n\nfloat random(float n) {\n\treturn fract(sin(n) * 43758.5453123);\n}\n\nvoid main() {\n\tvUv = uv;\n\n\t// particle uv\n\tvec2 puv = offset.xy / uTextureSize;\n\tvPUv = puv;\n\n\t// pixel color\n\tvec4 colA = texture2D(uTexture, puv);\n\tfloat grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;\n\n\t// displacement\n\tvec3 displaced = offset;\n\t// randomise\n\tdisplaced.xy += vec2(random(pindex) - 0.5, random(offset.x + pindex) - 0.5) * uRandom;\n\tfloat rndz = (random(pindex) + snoise_1_2(vec2(pindex * 0.1, uTime * 0.1)));\n\tdisplaced.z += rndz * (random(pindex) * 2.0 * uDepth);\n\t// center\n\tdisplaced.xy -= uTextureSize * 0.5;\n\n\t// touch\n\tfloat t = texture2D(uTouch, puv).r;\n\tdisplaced.z += t * 20.0 * rndz;\n\tdisplaced.x += cos(angle) * t * 20.0 * rndz;\n\tdisplaced.y += sin(angle) * t * 20.0 * rndz;\n\n\t// particle size\n\tfloat psize = (snoise_1_2(vec2(uTime, pindex) * 0.5) + 2.0);\n\tpsize *= max(grey, 0.2);\n\tpsize *= uSize;\n\n\t// final position\n\tvec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);\n\tmvPosition.xyz += position * psize;\n\tvec4 finalPosition = projectionMatrix * mvPosition;\n\n\tgl_Position = finalPosition;\n}\n';
        },
        '2c7f': function (e, t, i) {
            'use strict';
            i.d(t, 'a', function () {
                return D;
            });
            var n = i('d4ec'),
                a = i('bee2'),
                o = i('3191'),
                s = i.n(o),
                r = (function () {
                    function e(t) {
                        Object(n['a'])(this, e),
                        (this.app = t),
                        (this.particlesHitArea = !1),
                        (this.particlesRandom = 2),
                        (this.particlesDepth = 4),
                        (this.particlesSize = 1.5),
                        (this.touchRadius = 0.5),
                        (this.range = [0, 1]),
                        (this.rangeRandom = [1, 10]),
                        (this.rangeSize = [0, 3]),
                        (this.rangeDepth = [1, 10]),
                        (this.rangeRadius = [0, 0.5]);
                    }
                    return (
                        Object(a['a'])(e, [
                            {
                                key: 'initStats',
                                value: function () {
                                    (this.stats = new s.a()), document.body.appendChild(this.stats.dom);
                                },
                            },
                            {
                                key: 'update',
                                value: function () {
                                    if (this.touchCanvas) {
                                        if (!this.app.webgl) return;
                                        if (!this.app.webgl.particles) return;
                                        if (!this.app.webgl.particles.touch) return;
                                        var e = this.app.webgl.particles.touch.canvas,
                                            t = Math.floor(0.5 * (this.touchCanvas.width - e.width));
                                        this.touchCtx.fillRect(0, 0, this.touchCanvas.width, this.touchCanvas.height), this.touchCtx.drawImage(e, t, 0);
                                    }
                                },
                            },
                            {
                                key: 'enable',
                                value: function () {
                                    this.controlKit.enable(), this.stats && (this.stats.dom.style.display = '');
                                },
                            },
                            {
                                key: 'disable',
                                value: function () {
                                    this.controlKit.disable(), this.stats && (this.stats.dom.style.display = 'none');
                                },
                            },
                            {
                                key: 'toggle',
                                value: function () {
                                    this.controlKit._enabled ? this.disable() : this.enable();
                                },
                            },
                            {
                                key: 'onTouchChange',
                                value: function () {
                                    this.app.webgl && this.app.webgl.particles && (this.app.webgl.particles.touch.radius = this.touchRadius);
                                },
                            },
                            {
                                key: 'onParticlesChange',
                                value: function () {
                                    this.app.webgl &&
                                        this.app.webgl.particles &&
                                        ((this.app.webgl.particles.object3D.material.uniforms.uRandom.value = this.particlesRandom),
                                        (this.app.webgl.particles.object3D.material.uniforms.uDepth.value = this.particlesDepth),
                                        (this.app.webgl.particles.object3D.material.uniforms.uSize.value = this.particlesSize),
                                        (this.app.webgl.particles.hitArea.material.visible = this.particlesHitArea));
                                },
                            },
                            {
                                key: 'onPostProcessingChange',
                                value: function () {
                                    this.app.webgl.composer && (this.app.webgl.composer.enabled = this.postProcessing);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                l = i('5a89'),
                h = (i('4c53'), i('262e')),
                c = i('2caf'),
                u = i('b085'),
                d = i('faa1'),
                p = i.n(d),
                m = !1,
                v = !1,
                g = function () {
                    if (m) return v;
                    var e;
                    m = !0;
                    try {
                        (e = Object.defineProperty({}, 'passive', {
                            get: function () {
                                return (v = !0), !0;
                            },
                        })),
                        window.addEventListener('test', null, e);
                    } catch (t) {
                        return v;
                    }
                    return window.removeEventListener('test', null, e), v;
                },
                f = function () {
                    return !!g() && {passive: !0};
                },
                b = (function (e) {
                    Object(h['a'])(i, e);
                    var t = Object(c['a'])(i);
                    function i(e, a) {
                        var o;
                        return (
                            Object(n['a'])(this, i),
                            (o = t.call(this)),
                            (o.camera = e),
                            (o.el = a || window),
                            (o.plane = new l['j']()),
                            (o.raycaster = new l['n']()),
                            (o.mouse = new l['r']()),
                            (o.offset = new l['s']()),
                            (o.intersection = new l['s']()),
                            (o.objects = []),
                            (o.hovered = null),
                            (o.selected = null),
                            (o.isDown = !1),
                            (o.browser = Object(u['a'])()),
                            o.enable(),
                            o
                        );
                    }
                    return (
                        Object(a['a'])(i, [
                            {
                                key: 'enabled',
                                get: function () {
                                    return this._enabled;
                                },
                            },
                        ]),
                        Object(a['a'])(i, [
                            {
                                key: 'enable',
                                value: function () {
                                    this.enabled || (this.addListeners(), (this._enabled = !0));
                                },
                            },
                            {
                                key: 'disable',
                                value: function () {
                                    this.enabled && (this.removeListeners(), (this._enabled = !1));
                                },
                            },
                            {
                                key: 'addListeners',
                                value: function () {
                                    (this.handlerDown = this.onDown.bind(this)),
                                    (this.handlerMove = this.onMove.bind(this)),
                                    (this.handlerUp = this.onUp.bind(this)),
                                    (this.handlerLeave = this.onLeave.bind(this)),
                                    this.browser.mobile
                                        ? (this.el.addEventListener('touchstart', this.handlerDown, f),
                                        this.el.addEventListener('touchmove', this.handlerMove, f),
                                        this.el.addEventListener('touchend', this.handlerUp, f))
                                        : (this.el.addEventListener('mousedown', this.handlerDown),
                                        this.el.addEventListener('mousemove', this.handlerMove),
                                        this.el.addEventListener('mouseup', this.handlerUp),
                                        this.el.addEventListener('mouseleave', this.handlerLeave));
                                },
                            },
                            {
                                key: 'removeListeners',
                                value: function () {
                                    this.browser.mobile
                                        ? (this.el.removeEventListener('touchstart', this.handlerDown),
                                        this.el.removeEventListener('touchmove', this.handlerMove),
                                        this.el.removeEventListener('touchend', this.handlerUp))
                                        : (this.el.removeEventListener('mousedown', this.handlerDown),
                                        this.el.removeEventListener('mousemove', this.handlerMove),
                                        this.el.removeEventListener('mouseup', this.handlerUp),
                                        this.el.removeEventListener('mouseleave', this.handlerLeave));
                                },
                            },
                            {
                                key: 'resize',
                                value: function (e, t, i, n) {
                                    e || t || i || n
                                        ? (this.rect = {x: e, y: t, width: i, height: n})
                                        : this.el === window
                                            ? (this.rect = {x: 0, y: 0, width: window.innerWidth, height: window.innerHeight})
                                            : (this.rect = this.el.getBoundingClientRect());
                                },
                            },
                            {
                                key: 'onMove',
                                value: function (e) {
                                    var t = e.touches ? e.touches[0] : e,
                                        i = {x: t.clientX, y: t.clientY};
                                    (this.mouse.x = ((i.x + this.rect.x) / this.rect.width) * 2 - 1),
                                    (this.mouse.y = (-(i.y + this.rect.y) / this.rect.height) * 2 + 1),
                                    this.raycaster.setFromCamera(this.mouse, this.camera);
                                    var n = this.raycaster.intersectObjects(this.objects);
                                    if (n.length > 0) {
                                        var a = n[0].object;
                                        (this.intersectionData = n[0]),
                                        this.plane.setFromNormalAndCoplanarPoint(this.camera.getWorldDirection(this.plane.normal), a.position),
                                        this.hovered !== a
                                            ? (this.emit('interactive-out', {object: this.hovered}), this.emit('interactive-over', {object: a}), (this.hovered = a))
                                            : this.emit('interactive-move', {object: a, intersectionData: this.intersectionData});
                                    } else (this.intersectionData = null), null !== this.hovered && (this.emit('interactive-out', {object: this.hovered}), (this.hovered = null));
                                },
                            },
                            {
                                key: 'onDown',
                                value: function (e) {
                                    (this.isDown = !0),
                                    this.onMove(e),
                                    this.emit('interactive-down', {object: this.hovered, previous: this.selected, intersectionData: this.intersectionData}),
                                    (this.selected = this.hovered),
                                    this.selected && this.raycaster.ray.intersectPlane(this.plane, this.intersection) && this.offset.copy(this.intersection).sub(this.selected.position);
                                },
                            },
                            {
                                key: 'onUp',
                                value: function () {
                                    (this.isDown = !1), this.emit('interactive-up', {object: this.hovered});
                                },
                            },
                            {
                                key: 'onLeave',
                                value: function (e) {
                                    this.onUp(e), this.emit('interactive-out', {object: this.hovered}), (this.hovered = null);
                                },
                            },
                        ]),
                        i
                    );
                })(p.a),
                y =
                    (i('c740'),
                    i('a434'),
                    i('ace4'),
                    i('d3b7'),
                    i('cfc3'),
                    i('84c3'),
                    i('9a8c'),
                    i('a975'),
                    i('735e'),
                    i('c1ac'),
                    i('d139'),
                    i('3a7b'),
                    i('d5d6'),
                    i('20bf'),
                    i('82f8'),
                    i('e91f'),
                    i('60bd'),
                    i('5f96'),
                    i('3280'),
                    i('3fcc'),
                    i('ca91'),
                    i('25a1'),
                    i('cd26'),
                    i('3c5d'),
                    i('2954'),
                    i('649e'),
                    i('219c'),
                    i('170b'),
                    i('b39a'),
                    i('72f7f'),
                    i('109c')),
                w =
                    (i('cb29'),
                    i('4160'),
                    i('159b'),
                    function (e, t, i, n) {
                        return i * Math.sin((e / n) * (Math.PI / 2)) + t;
                    }),
                x = (function () {
                    function e(t) {
                        Object(n['a'])(this, e), (this.parent = t), (this.size = 64), (this.maxAge = 120), (this.radius = 0.5), (this.trail = []), this.initTexture();
                    }
                    return (
                        Object(a['a'])(e, [
                            {
                                key: 'initTexture',
                                value: function () {
                                    (this.canvas = document.createElement('canvas')),
                                    (this.canvas.width = this.canvas.height = this.size),
                                    (this.ctx = this.canvas.getContext('2d')),
                                    (this.ctx.fillStyle = 'black'),
                                    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height),
                                    (this.texture = new l['p'](this.canvas)),
                                    (this.canvas.id = 'touchTexture'),
                                    (this.canvas.style.width = this.canvas.style.height = ''.concat(this.canvas.width, 'px'));
                                },
                            },
                            {
                                key: 'update',
                                value: function () {
                                    var e = this;
                                    this.clear(),
                                    this.trail.forEach(function (t, i) {
                                        t.age++, t.age > e.maxAge && e.trail.splice(i, 1);
                                    }),
                                    this.trail.forEach(function (t) {
                                        e.drawTouch(t);
                                    }),
                                    (this.texture.needsUpdate = !0);
                                },
                            },
                            {
                                key: 'clear',
                                value: function () {
                                    (this.ctx.fillStyle = 'black'), this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                                },
                            },
                            {
                                key: 'addTouch',
                                value: function (e) {
                                    var t = 0,
                                        i = this.trail[this.trail.length - 1];
                                    if (i) {
                                        var n = i.x - e.x,
                                            a = i.y - e.y,
                                            o = n * n + a * a;
                                        t = Math.min(1e4 * o, 1);
                                    }
                                    this.trail.push({x: e.x, y: e.y, age: 0, force: t});
                                },
                            },
                            {
                                key: 'drawTouch',
                                value: function (e) {
                                    var t = {x: e.x * this.size, y: (1 - e.y) * this.size},
                                        i = 1;
                                    (i = e.age < 0.3 * this.maxAge ? w(e.age / (0.3 * this.maxAge), 0, 1, 1) : w(1 - (e.age - 0.3 * this.maxAge) / (0.7 * this.maxAge), 0, 1, 1)), (i *= e.force);
                                    var n = this.size * this.radius * i,
                                        a = this.ctx.createRadialGradient(t.x, t.y, 0.25 * n, t.x, t.y, n);
                                    a.addColorStop(0, 'rgba(255, 255, 255, 0.2)'),
                                    a.addColorStop(1, 'rgba(0, 0, 0, 0.0)'),
                                    this.ctx.beginPath(),
                                    (this.ctx.fillStyle = a),
                                    this.ctx.arc(t.x, t.y, n, 0, 2 * Math.PI),
                                    this.ctx.fill();
                                },
                            },
                        ]),
                        e
                    );
                })(),
                k = i('e98f'),
                A = (function () {
                    function e(t) {
                        Object(n['a'])(this, e), (this.webgl = t), (this.container = new l['h']());
                    }
                    return (
                        Object(a['a'])(e, [
                            {
                                key: 'init',
                                value: function (e) {
                                    var t = this,
                                        i = new l['q']();
                                    i.load(e, function (e) {
                                        (t.texture = e),
                                        (t.texture.minFilter = l['e']),
                                        (t.texture.magFilter = l['e']),
                                        (t.texture.format = l['l']),
                                        (t.width = e.image.width),
                                        (t.height = e.image.height),
                                        t.initPoints(!0),
                                        t.initHitArea(),
                                        t.initTouch(),
                                        t.resize(),
                                        t.show();
                                    });
                                },
                            },
                            {
                                key: 'initPoints',
                                value: function (e) {
                                    this.numPoints = this.width * this.height;
                                    var t,
                                        n = this.numPoints,
                                        a = 0;
                                    if (e) {
                                        (n = 0), (a = 34);
                                        var o = this.texture.image,
                                            s = document.createElement('canvas'),
                                            r = s.getContext('2d');
                                        (s.width = this.width), (s.height = this.height), r.scale(1, -1), r.drawImage(o, 0, 0, this.width, -1 * this.height);
                                        var h = r.getImageData(0, 0, s.width, s.height);
                                        t = Float32Array.from(h.data);
                                        for (var c = 0; c < this.numPoints; c++) c % 2 || (t[4 * c + 0] > a && n++);
                                    }
                                    var u = {
                                            uTime: {value: 0},
                                            uRandom: {value: 1},
                                            uDepth: {value: 2},
                                            uSize: {value: 0},
                                            uTextureSize: {value: new l['r'](this.width, this.height)},
                                            uTexture: {value: this.texture},
                                            uTouch: {value: null},
                                        },
                                        d = new l['m']({uniforms: u, vertexShader: k(i('17a0')), fragmentShader: k(i('ad54')), depthTest: !1, transparent: !0}),
                                        p = new l['d'](),
                                        m = new l['a'](new Float32Array(12), 3);
                                    m.setXYZ(0, -0.5, 0.5, 0), m.setXYZ(1, 0.5, 0.5, 0), m.setXYZ(2, -0.5, -0.5, 0), m.setXYZ(3, 0.5, -0.5, 0), p.addAttribute('position', m);
                                    var v = new l['a'](new Float32Array(8), 2);
                                    v.setXYZ(0, 0, 0), v.setXYZ(1, 1, 0), v.setXYZ(2, 0, 1), v.setXYZ(3, 1, 1), p.addAttribute('uv', v), p.setIndex(new l['a'](new Uint16Array([0, 2, 1, 2, 3, 1]), 1));
                                    for (var g = new Uint16Array(n), f = new Float32Array(3 * n), b = new Float32Array(n), y = 0, w = 0; y < this.numPoints; y++)
                                        y % 2 ||
                                            (e && t[4 * y + 0] <= a) ||
                                            ((f[3 * w + 0] = y % this.width), (f[3 * w + 1] = Math.floor(y / this.width)), (g[w] = y), (b[w] = Math.random() * Math.PI), w++);
                                    p.addAttribute('pindex', new l['c'](g, 1, !1)),
                                    p.addAttribute('offset', new l['c'](f, 3, !1)),
                                    p.addAttribute('angle', new l['c'](b, 1, !1)),
                                    (this.object3D = new l['f'](p, d)),
                                    this.container.add(this.object3D);
                                },
                            },
                            {
                                key: 'initTouch',
                                value: function () {
                                    this.touch || (this.touch = new x(this)), (this.object3D.material.uniforms.uTouch.value = this.touch.texture);
                                },
                            },
                            {
                                key: 'initHitArea',
                                value: function () {
                                    var e = new l['k'](this.width, this.height, 1, 1),
                                        t = new l['g']({color: 16777215, wireframe: !0, depthTest: !1});
                                    (t.visible = !1), (this.hitArea = new l['f'](e, t)), this.container.add(this.hitArea);
                                },
                            },
                            {
                                key: 'addListeners',
                                value: function () {
                                    (this.handlerInteractiveMove = this.onInteractiveMove.bind(this)),
                                    this.webgl.interactive.addListener('interactive-move', this.handlerInteractiveMove),
                                    this.webgl.interactive.objects.push(this.hitArea),
                                    this.webgl.interactive.enable();
                                },
                            },
                            {
                                key: 'removeListeners',
                                value: function () {
                                    var e = this;
                                    this.webgl.interactive.removeListener('interactive-move', this.handlerInteractiveMove);
                                    var t = this.webgl.interactive.objects.findIndex(function (t) {
                                        return t === e.hitArea;
                                    });
                                    this.webgl.interactive.objects.splice(t, 1), this.webgl.interactive.disable();
                                },
                            },
                            {
                                key: 'update',
                                value: function (e) {
                                    this.object3D && (this.touch && this.touch.update(), (this.object3D.material.uniforms.uTime.value += e));
                                },
                            },
                            {
                                key: 'show',
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                                    y['a'].fromTo(this.object3D.material.uniforms.uSize, e, {value: 0.5}, {value: 0.8}),
                                    y['a'].to(this.object3D.material.uniforms.uRandom, e, {value: 5}),
                                    y['a'].fromTo(this.object3D.material.uniforms.uDepth, 1.5 * e, {value: 40}, {value: 13}),
                                    this.addListeners();
                                },
                            },
                            {
                                key: 'hide',
                                value: function (e) {
                                    var t = this,
                                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.8;
                                    return new Promise(function (n, a) {
                                        y['a'].to(t.object3D.material.uniforms.uRandom, i, {
                                            value: 5,
                                            onComplete: function () {
                                                e && t.destroy(), n();
                                            },
                                        }),
                                        y['a'].to(t.object3D.material.uniforms.uDepth, i, {value: -20, ease: Quad.easeIn}),
                                        y['a'].to(t.object3D.material.uniforms.uSize, 0.8 * i, {value: 0}),
                                        t.removeListeners();
                                    });
                                },
                            },
                            {
                                key: 'destroy',
                                value: function () {
                                    this.object3D &&
                                        (this.object3D.parent.remove(this.object3D),
                                        this.object3D.geometry.dispose(),
                                        this.object3D.material.dispose(),
                                        (this.object3D = null),
                                        this.hitArea && (this.hitArea.parent.remove(this.hitArea), this.hitArea.geometry.dispose(), this.hitArea.material.dispose(), (this.hitArea = null)));
                                },
                            },
                            {
                                key: 'resize',
                                value: function () {
                                    if (this.object3D) {
                                        var e = this.webgl.fovHeight / this.height;
                                        this.object3D.scale.set(e, e, 1), this.hitArea.scale.set(e, e, 1);
                                    }
                                },
                            },
                            {
                                key: 'onInteractiveMove',
                                value: function (e) {
                                    var t = e.intersectionData.uv;
                                    this.touch && this.touch.addTouch(t);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                j = (function () {
                    function e(t) {
                        Object(n['a'])(this, e),
                        (this.app = t),
                        (this.samples = ['images/sample-01.png', 'images/sample-02.png', 'images/sample-03.png', 'images/sample-04.png', 'images/sample-05.png']),
                        this.initThree(),
                        this.initParticles(),
                        this.initControls(),
                        this.particles.init('/assets/logo.png');
                    }
                    return (
                        Object(a['a'])(e, [
                            {
                                key: 'initThree',
                                value: function () {
                                    (this.scene = new l['o']()),
                                    (this.camera = new l['i'](50, window.innerWidth / window.innerHeight, 1, 1e4)),
                                    (this.camera.position.z = 300),
                                    (this.renderer = new l['t']({antialias: !0, alpha: !0})),
                                    (this.clock = new l['b'](!0));
                                },
                            },
                            {
                                key: 'initControls',
                                value: function () {
                                    this.interactive = new b(this.camera, this.renderer.domElement);
                                },
                            },
                            {
                                key: 'initParticles',
                                value: function () {
                                    (this.particles = new A(this)), this.scene.add(this.particles.container);
                                },
                            },
                            {
                                key: 'update',
                                value: function () {
                                    var e = this.clock.getDelta();
                                    this.particles && this.particles.update(e);
                                },
                            },
                            {
                                key: 'draw',
                                value: function () {
                                    this.renderer.render(this.scene, this.camera);
                                },
                            },
                            {
                                key: 'goto',
                                value: function (e) {
                                    var t = this;
                                    null == this.currSample
                                        ? this.particles.init(this.samples[e])
                                        : this.particles.hide(!0).then(function () {
                                            t.particles.init(t.samples[e]);
                                        }),
                                    (this.currSample = e);
                                },
                            },
                            {
                                key: 'next',
                                value: function () {
                                    this.currSample < this.samples.length - 1 ? this.goto(this.currSample + 1) : this.goto(0);
                                },
                            },
                            {
                                key: 'resize',
                                value: function () {
                                    if (this.renderer) {
                                        var e = document.querySelector('.particle-animation-container');
                                        e &&
                                            ((this.camera.aspect = e.clientWidth / e.clientWidth),
                                            this.camera.updateProjectionMatrix(),
                                            (this.fovHeight = 2 * Math.tan((this.camera.fov * Math.PI) / 180 / 2) * this.camera.position.z),
                                            this.renderer.setSize(e.clientWidth, e.clientWidth),
                                            this.interactive && this.interactive.resize(),
                                            this.particles && this.particles.resize());
                                    }
                                },
                            },
                        ]),
                        e
                    );
                })(),
                D = (function () {
                    function e() {
                        Object(n['a'])(this, e);
                    }
                    return (
                        Object(a['a'])(e, [
                            {
                                key: 'init',
                                value: function () {
                                    var e = this;
                                    this.initWebGL(),
                                    this.initGUI(),
                                    this.addListeners(),
                                    this.animate(),
                                    setTimeout(function () {
                                        e.resize();
                                    }, 1e3);
                                },
                            },
                            {
                                key: 'initWebGL',
                                value: function () {
                                    (this.webgl = new j(this)), document.querySelector('.particle-animation-container').appendChild(this.webgl.renderer.domElement);
                                },
                            },
                            {
                                key: 'initGUI',
                                value: function () {
                                    this.gui = new r(this);
                                },
                            },
                            {
                                key: 'addListeners',
                                value: function () {
                                    (this.handlerAnimate = this.animate.bind(this)), window.addEventListener('resize', this.resize.bind(this)), window.addEventListener('keyup', this.keyup.bind(this));
                                },
                            },
                            {
                                key: 'animate',
                                value: function () {
                                    this.update(), this.draw(), (this.raf = requestAnimationFrame(this.handlerAnimate));
                                },
                            },
                            {
                                key: 'update',
                                value: function () {
                                    this.gui.stats && this.gui.stats.begin(), this.webgl && this.webgl.update(), this.gui && this.gui.update();
                                },
                            },
                            {
                                key: 'draw',
                                value: function () {
                                    this.webgl && this.webgl.draw(), this.gui.stats && this.gui.stats.end();
                                },
                            },
                            {
                                key: 'resize',
                                value: function () {
                                    this.webgl && this.webgl.resize();
                                },
                            },
                            {
                                key: 'keyup',
                                value: function (e) {
                                    71 == e.keyCode && this.gui && this.gui.toggle();
                                },
                            },
                            {
                                key: 'click',
                                value: function () {
                                    this.webgl.next();
                                },
                            },
                        ]),
                        e
                    );
                })();
        },
        '448f': function (e) {
            e.exports = JSON.parse(
                '[{"JobId":1,"Title":"Business Analyst","Location":"London","Hours":"Full-time","Date":"30/07/2020","Description":"<h4>Our journey</h4> <p> Based in London, with roots in India, e9 has developed highly motivated talent into productive teams across continents. <br><br> At e9, new ideas have a way of becoming phenomenal products, services, and customer experiences very quickly. We are ambitious with a pace to match, and as part of a fast-growing company, the opportunity and ability to push forward is greater than ever before. Bring passion and dedication to your job and there is no telling what you could accomplish. </p> <h4 class=\'mt-6\'>Who you will work with</h4> <p>We foster a culture of continuous improvement in a diverse and inclusive workplace where people feel valued and included. Accountability matters. At e9, we bring together remarkable people and enable them to be themselves as part of a collaborative team that is helping to innovate.</p><h4 class=\'mt-6\'>Your part in our journey</h4> <p>At e9 we believe our technology should be innovative and exceptional, this is also how we see customer service. <br><br> As a Business Analyst, you will be an Ambassador for e9 to our customers, you will own the customer relationship ensuring all projects are delivered on time to the customer’s satisfaction. </p> <h4 class=\'mt-6\'>What you will be doing</h4> <ul> <li>Identify and understand underlying customer needs and concerns, pragmatically. </li> <li>Bring clarity to blue sky thinking - facilitate technical and business discussions to determine the right technical resolution to tackle business problems. </li> <li>Guide customers through their process transformation journey.</li> <li>Drive projects forward through initiative and accountability.</li> <li>Support our customers when they need it - manage and communicate requirements (manage conflicts, issues, and changes to ensure agreement).</li> <li>Solve problems with attention to detail and logical thinking skills.</li> <li>Understanding the business implication of metrics based on web/app user experiences.</li> <li>Work closely with the software development teams to support User Acceptance Testing.</li> <li>Facilitating handover of projects to users ensure a successful release.</li> </ul> <h4 class=\'mt-6\'>What you’ll need to make the most of the role</h4> <ul> <li>Minimum four years’ experience in a customer facing role.</li> <li>Ability to lead and deliver customer expectations.</li> <li>Be a self-starter, a quick learner, approachable and be able to work in a fast-paced environment whilst retaining a high level of integrity.</li> <li>Constantly be on the lookout for ways to improve, discovering issues and deliver better value to the customer</li> <li>Be collaborative with excellent interpersonal, written and presentation skills.</li> <li>Be a problem solver, comfortable working at a conceptual and detailed level.</li> <li>Good knowledge and experience of iOS and Android Mobile apps</li> <li>Educated to degree level.</li> </ul> <h4 class=\'mt-6\'>What’s in it for you</h4> <ul> <li>28 days holiday</li> <li>Flexible Working</li> <li>Personal development opportunities</li> <li>Quarterly Team Socials</li> <li>Smart/Casual Dress</li> <li>Pension Scheme</li> </ul> <h4 class=\'mt-6\'>Ready?</h4>"},{"JobId":2,"Title":"Jr. UI/UX Designer","Location":"Bengaluru","Hours":"Full-time","Date":"30/07/2020","Description":"<h4>Our journey</h4> <p> Based in London, with roots in India, e9 has developed highly motivated talent into productive teams across continents. <br><br> At e9, new ideas have a way of becoming phenomenal products, services, and customer experiences very quickly. We are ambitious with a pace to match, and as part of a fast-growing company, the opportunity and ability to push forward is greater than ever before. Bring passion and dedication to your job and there is no telling what you could accomplish. </p> <h4 class=\'mt-6\'>Who you will work with</h4> <p>We foster a culture of continuous improvement in a diverse and inclusive workplace where people feel valued and included. Accountability matters. At e9, we bring together remarkable people and enable them to be themselves as part of a collaborative team that is helping to innovate.<br><br>Do you have a fanatical desire to produce great design? Are you looking for an environment where you can push your work and yourself? Are you a team player? Does your passion for design border on the absurd? Are you naturally caffeinated? Ridiculously positive and upbeat? If so, e9 may be the place for you.</p> <h4 class=\'mt-6\'>What you will be doing</h4> <p>You will work closely with our design lead and collaborate with a full team of creative, world-class professionals to conceptualise and execute design solutions on a wide variety of projects and industries. You must have the ability to produce high level design solutions at every stage of the process from conceptualising and creating wireframes to prototyping and polishing final designed assets for development.</p> <h4 class=\'mt-6\'>What you’ll need to make the most of the role</h4> <ul> <li>A passion and affinity for UX/UI design </li> <li>Fundamental knowledge of and experience with web and app design </li> <li>Strong understanding of UX best practices and standard 2-3 years experience in a design role at an agency or as a freelance designer </li> <li>Proficiency on a Mac with the following applications: Sketch or Adobe XD, Illustrator, Photoshop, After Effects, Invision </li> <li>Must meet deadlines and work under the standard pressures of the creative industry </li> <li>Ability to take instruction and function as part of a team </li> <li>Positive, upbeat, happy approach to work and life</li> </ul> <h4 class=\'mt-6\'>Nice to have</h4> <ul> <li>Experience with animation and motion design for web </li> <li>Basic understanding of front-end development skills (HTML, CSS) </li> <li>Experience using 3D softwares like Blender, Cinema4D</li> </ul> <h4 class=\'mt-6\'>How to apply?</h4> <p>Please attach the following materials to the email:</p> <ul> <li>Resume</li> <li>Availability to start with your current CTC</li> <li>Portfolio (link or PDF under 10MB)</li> </ul>"},{"JobId":3,"Title":"Full Stack Developer","Location":"Bengaluru","Hours":"Full-time","Date":"30/07/2020","Description":"<h4>Our journey</h4> <p> Based in London, with roots in India, e9 has developed highly motivated talent into productive teams across continents. <br><br> At e9, new ideas have a way of becoming phenomenal products, services, and customer experiences very quickly. We are ambitious with a pace to match, and as part of a fast-growing company, the opportunity and ability to push forward is greater than ever before. Bring passion and dedication to your job and there is no telling what you could accomplish. </p> <h4 class=\'mt-6\'>Who you will work with</h4> <p>We foster a culture of continuous improvement in a diverse and inclusive workplace where people feel valued and included. Accountability matters. At e9, we bring together remarkable people and enable them to be themselves as part of a collaborative team that is helping to innovate.<br><br>We are seeking an experienced MEVN Stack Professional to join our innovative team in Bangalore. Candidate will be part of the team working on exciting scalable product catering to huge consumer base. We encourage people who can dive headlong into situations to get things done, set their own direction and feel pride about what they create.</p> <h4 class=\'mt-6\'>What you will be doing</h4> <ul> <li>Hands on experience and managing Node js, Mongo DB, Vue.js and Express js.</li> <li>Architect, Develop, test and deploy robust products that are fast, scalable and highly responsive</li> <li>Design and maintain large and complex databases, both relational and non-relational databases</li> <li>Establish, refine and integrate development environment tools and software as needed</li> <li>Identify production and non-production application issues as a part of deployment</li> <li>Deploy applications on AWS cloud/google cloud with ability to quickly debug hosting related issues </li> </ul> <h4 class=\'mt-6\'>What you’ll need to make the most of the role</h4> <ul> <li>Ability to contribute individually</li> <li>Expertise in MeVn, Node js, Mongo DB, Vue.js and Express js</li> <li>Good grasp of jQuery, MySQL, Symfony, OOPS</li> <li>Experience in server management and GCP knowledge is mandatory</li> <li>Ability to manage and lead a team of developers</li> <li>Strong analytical and problem solving skills</li> </ul> <h4 class=\'mt-6\'>Other Details</h4> <ul> <li>Immediate joiners are appreciated</li> <li>Best in industry salary</li> <li>Location: The Hive (Level 5), VR Bengaluru</li> <li>Timings: 12 PM – 8 PM</li> </ul>"},{"JobId":4,"Title":"Frontend Developer","Location":"Bengaluru","Hours":"Full-time","Date":"30/07/2020","Description":"<h4>Our journey</h4> <p> Based in London, with roots in India, e9 has developed highly motivated talent into productive teams across continents. <br><br> At e9, new ideas have a way of becoming phenomenal products, services, and customer experiences very quickly. We are ambitious with a pace to match, and as part of a fast-growing company, the opportunity and ability to push forward is greater than ever before. Bring passion and dedication to your job and there is no telling what you could accomplish. </p> <h4 class=\'mt-6\'>Who you will work with</h4> <p>We foster a culture of continuous improvement in a diverse and inclusive workplace where people feel valued and included. Accountability matters. At e9, we bring together remarkable people and enable them to be themselves as part of a collaborative team that is helping to innovate.<br><br>We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.</p> <h4 class=\'mt-6\'>What you will be doing</h4> <ul> <li>Develop new user-facing features</li> <li>Build reusable code and libraries for future use</li> <li>Ensure the technical feasibility of UI/UX designs</li> <li>Optimise application for maximum speed and scalability</li> <li>Assure that all user input is validated before submitting to back-end</li> <li>Collaborate with other team members and stakeholders</li> </ul> <h4 class=\'mt-6\'>What you’ll need to make the most of the role</h4> <ul> <li>Proficient understanding of web markup, including HTML5, CSS3</li> <li>Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS</li> <li>Proficient understanding of client-side scripting and JavaScript frameworks, including jQuery</li> <li>Good understanding of asynchronous request handling, partial page updates, and AJAX</li> <li>Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image.</li> <li>Proficient understanding of cross-browser compatibility issues and ways to work around them.</li> <li>Proficient understanding of code versioning tools, such as Git, ETC.</li> <li>Good understanding of SEO principles and ensuring that application will adhere to them.</li> </ul> "},{"JobId":4,"Title":"Senior Android developer","Location":"London","Hours":"Full-time","Date":"30/07/2020","Description":"<h4>Our journey</h4> <p> Based in London, with roots in India, e9 has developed highly motivated talent into productive teams across continents. <br><br> At e9, new ideas have a way of becoming phenomenal products, services, and customer experiences very quickly. We are ambitious with a pace to match, and as part of a fast-growing company, the opportunity and ability to push forward is greater than ever before. Bring passion and dedication to your job and there is no telling what you could accomplish. </p> <h4 class=\'mt-6\'>Who you will work with</h4> <p>We foster a culture of continuous improvement in a diverse and inclusive workplace where people feel valued and included. Accountability matters. At e9, we bring together remarkable people and enable them to be themselves as part of a collaborative team that is helping to innovate.<br><br>We are looking for a senior Android developer responsible for the development and maintenance of applications aimed at a vast number of diverse Android devices. Your primary focus will be the development of Android applications and their integration with back-end services. You will be working along-side other engineers and developers working on different layers of the infrastructure. Therefore, commitment to collaborative problem solving, sophisticated design, and creating quality products is essential.</p> <h4 class=\'mt-6\'>What you will be doing</h4> <ul> <li>Translate designs and wireframes into high quality code</li> <li>Design, build, and maintain high performance, reusable, and reliable Java code</li> <li>Ensure the best possible performance, quality, and responsiveness of the application</li> <li>Identify and correct bottlenecks and fix bugs</li> <li>Help maintain code quality, organisation, and automatizations</li> </ul> <h4 class=\'mt-6\'>What you’ll need to make the most of the role</h4> <ul> <li>Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes</li> <li>Familiarity with RESTful APIs to connect Android applications to back-end services</li> <li>Strong knowledge of Android UI design principles, patterns, and best practices</li> <li>Experience with offline storage, threading, and performance tuning</li> <li>Ability to design applications around natural user interfaces, such as “touch”</li> <li>Familiarity with the use of additional sensors, such as gyroscopes and accelerometers</li> <li>Knowledge of the open-source Android ecosystem and the libraries available for common tasks</li> <li>Ability to understand business requirements and translate them into technical requirements</li> <li>Familiarity with cloud message APIs and push notifications</li> <li>A knack for benchmarking and optimisation</li> <li>Understanding of Google’s Android design principles and interface guidelines</li> <li>Proficient understanding of code versioning tools, such as Git</li> <li>Familiarity with continuous integration</li> </ul>"}]'
            );
        },
        ad54: function (e, t) {
            e.exports =
                '// @author brunoimbrizi / http://brunoimbrizi.com\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D uTexture;\n\nvarying vec2 vPUv;\nvarying vec2 vUv;\n\nvoid main() {\n\tvec4 color = vec4(0.0);\n\tvec2 uv = vUv;\n\tvec2 puv = vPUv;\n\n\t// pixel color\n\tvec4 colA = texture2D(uTexture, puv);\n\n\t// greyscale\n\tfloat grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;\n\tvec4 colB = vec4(grey, grey, grey, 1.0);\n\n\t// circle\n\tfloat border = 0.3;\n\tfloat radius = 0.5;\n\tfloat dist = radius - distance(uv, vec2(0.5));\n\tfloat t = smoothstep(0.0, border, dist);\n\n\t// final color\n\tcolor = colA;\n\tcolor.a = t;\n\n\tgl_FragColor = color;\n}';
        },
        b8aa: function (e) {
            e.exports = JSON.parse(
                '[{"Title":"Anastasia Petrova","Subtitle":"Mobile Developer","ImageURL":"team/people/anastasia.jpg","Category":"Tech"},{"Title":"Akhila Ramesh","Subtitle":"Mobile Developer","ImageURL":"team/people/akhila.jpg","Category":"Tech"},{"Title":"Ramesh Reddy","Subtitle":"Software Developer","ImageURL":"team/people/ramesh.jpg","Category":"Tech"},{"Title":"Chris Simpson","Subtitle":"Business Analyst","ImageURL":"team/people/chris.jpg","Category":"Tech"},{"Title":"Ankit Wadhwani","Subtitle":"Software Developer","ImageURL":"team/people/ankit.jpg","Category":"Tech"},{"Title":"Kaushal P","Subtitle":"Mobile Developer","ImageURL":"team/people/kaushal.jpg","Category":"Tech"},{"Title":"Pratik Kanthi","Subtitle":"Software Developer","ImageURL":"team/people/pratik.jpg","Category":"Tech"},{"Title":"Manu Remesh","Subtitle":"UI/UX, Design","ImageURL":"team/people/manu.jpg","Category":"Tech"},{"Title":"Anjali Grover","Subtitle":"Account Management","ImageURL":"team/people/anjali.jpg","Category":"Tech"},{"Title":"Harshvardhan Singh","Subtitle":"Account Management","ImageURL":"team/people/harsh.jpg","Category":"Tech"},{"Title":"Jamie Hibbert","Subtitle":"Software Support","ImageURL":"team/people/jamie.jpg","Category":"Tech"},{"Title":"Sajad Akhtar","Subtitle":"Product Sales","ImageURL":"team/people/sajad.jpg","Category":"Tech"},{"Title":"Bal Notay","Subtitle":"Business Development","ImageURL":"team/people/bal.jpg","Category":"Tech"},{"Title":"Karan Grover","Subtitle":"Accounts & Finance","ImageURL":"team/people/karan.jpg","Category":"Tech"},{"Title":"Sharvilak Thakore","Subtitle":"Software Developer","ImageURL":"team/people/sharvilak.jpg","Category":"Tech"},{"Title":"Yogendra Yadav","Subtitle":"Software Developer","ImageURL":"team/people/yogendra.jpg","Category":"Tech"},{"Title":"Soumya Kanthi","Subtitle":"Product Design","ImageURL":"team/people/soumya.jpg","Category":"Tech"},{"Title":"Monik Grover","Subtitle":"Solutions Architect","ImageURL":"team/people/monik.jpg","Category":"Tech"},{"Title":"Tarpit Grover","Subtitle":"Managing Director","ImageURL":"team/people/tarpit.jpg","Category":"Management"},{"Title":"David Beech","Subtitle":"Technical Director","ImageURL":"team/people/david.jpg","Category":"Management"},{"Title":"Gregory Hoy","Subtitle":"Non Executive Director","ImageURL":"team/people/greg.jpg","Category":"Management"},{"Title":"Keith Young","Subtitle":"Non Executive Director","ImageURL":"team/people/keith.jpg","Category":"Management"}]'
            );
        },
    },
]);
