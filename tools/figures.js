'use strict';

/*
 * Lemonmath figures: turns small text descriptions into inline SVG at build time.
 *   :::graph    function graphs, points, lines, shaded regions
 *   :::diagram  geometry diagrams (triangles, vectors, circles, angles)
 * Both draw with CSS variables, so they follow light/dark mode.
 */

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const f = (n) => (Math.round(n * 100) / 100).toString();

/* ---------------- tiny expression parser ---------------- */
function compile(src) {
  const s = String(src).replace(/\s+/g, '').replace(/²/g, '^2').replace(/³/g, '^3').replace(/π/g, 'pi');
  let i = 0;
  const FN = {
    sqrt: Math.sqrt, abs: Math.abs, sin: Math.sin, cos: Math.cos, tan: Math.tan,
    ln: Math.log, log: Math.log10, exp: Math.exp, cbrt: Math.cbrt
  };
  const peek = () => s[i];
  function num() {
    const m = /^\d+(?:\.\d+)?/.exec(s.slice(i));
    if (!m) throw new Error('không đọc được biểu thức "' + src + '" tại "' + s.slice(i, i + 6) + '"');
    i += m[0].length;
    return { k: 'n', v: parseFloat(m[0]) };
  }
  function atom() {
    const c = peek();
    if (c === '(') { i++; const e = add(); if (peek() !== ')') throw new Error('thiếu ")" trong "' + src + '"'); i++; return e; }
    if (/\d/.test(c || '')) return num();
    const m = /^[a-z]+/.exec(s.slice(i));
    if (m) {
      const name = m[0];
      if (FN[name] && s[i + name.length] === '(') {
        i += name.length + 1; const e = add();
        if (peek() !== ')') throw new Error('thiếu ")" trong "' + src + '"'); i++;
        return { k: 'f', f: FN[name], a: e };
      }
      if (name === 'pi') { i += 2; return { k: 'n', v: Math.PI }; }
      if (name === 'e' ) { i += 1; return { k: 'n', v: Math.E }; }
      if (name === 'x' || name === 'y') { i += 1; return { k: 'v', n: name }; }
    }
    throw new Error('không đọc được biểu thức "' + src + '" tại "' + s.slice(i, i + 6) + '"');
  }
  function pow() {
    const b = atom();
    if (peek() === '^') { i++; return { k: 'b', o: '^', l: b, r: expo() }; }
    return b;
  }
  function expo() {
    if (peek() === '-') { i++; return { k: 'u', e: expo() }; }
    if (peek() === '+') { i++; return expo(); }
    return pow();
  }
  function neg() {
    if (peek() === '-') { i++; return { k: 'u', e: neg() }; }
    if (peek() === '+') { i++; return neg(); }
    return pow();
  }
  function mul() {
    let l = neg();
    for (;;) {
      const c = peek();
      if (c === '*' || c === '/') { i++; l = { k: 'b', o: c, l, r: neg() }; }
      else if (c === '(' || (c && /[a-z]/.test(c)) ) { l = { k: 'b', o: '*', l, r: pow() }; } // implicit: 2x, 3(x+1)
      else break;
    }
    return l;
  }
  function add() {
    let l = mul();
    for (;;) {
      const c = peek();
      if (c === '+' || c === '-') { i++; l = { k: 'b', o: c, l, r: mul() }; } else break;
    }
    return l;
  }
  const tree = add();
  if (i < s.length) throw new Error('không đọc được biểu thức "' + src + '" tại "' + s.slice(i, i + 6) + '"');
  const ev = (t, x, y) => {
    switch (t.k) {
      case 'n': return t.v;
      case 'v': return t.n === 'x' ? x : y;
      case 'u': return -ev(t.e, x, y);
      case 'f': return t.f(ev(t.a, x, y));
      default: {
        const a = ev(t.l, x, y), b = ev(t.r, x, y);
        if (t.o === '+') return a + b;
        if (t.o === '-') return a - b;
        if (t.o === '*') return a * b;
        if (t.o === '/') return a / b;
        return Math.pow(a, b);
      }
    }
  };
  return (x, y) => ev(tree, x, y);
}

/* ---------------- shared drawing helpers ---------------- */
function label(text, x, y, cls, anchor) {
  // "A_1" -> subscript, plain text otherwise
  const parts = String(text).split(/_(\w+)/);
  let inner = '';
  parts.forEach((p, k) => {
    if (!p) return;
    inner += k % 2 ? '<tspan class="sub" dy="4" font-size="70%">' + esc(p) + '</tspan><tspan dy="-4"> </tspan>' : esc(p);
  });
  return '<text class="' + (cls || 'fl') + '" x="' + f(x) + '" y="' + f(y) + '" text-anchor="' + (anchor || 'middle') + '">' + inner + '</text>';
}

const POS = {
  above: [0, -9, 'middle'], below: [0, 17, 'middle'], left: [-9, 5, 'end'], right: [9, 5, 'start'],
  'above-left': [-8, -8, 'end'], 'above-right': [8, -8, 'start'], 'below-left': [-8, 16, 'end'], 'below-right': [8, 16, 'start']
};

function parseLabelText(s) {
  const m = /"([^"]*)"/.exec(s);
  return m ? m[1] : '';
}

function niceStep(span, target) {
  const raw = span / target;
  const p = Math.pow(10, Math.floor(Math.log10(raw)));
  const r = raw / p;
  return (r < 1.5 ? 1 : r < 3.5 ? 2 : r < 7.5 ? 5 : 10) * p;
}

function wrap(svg, o) {
  const cap = o.caption ? '<figcaption>' + o.captionHtml + '</figcaption>' : '';
  return '<figure class="figure ' + o.cls + '">' + svg + cap + '</figure>';
}

/* ---------------- :::graph ---------------- */
function graph(body, o) {
  const cfg = { plots: [], points: [], hlines: [], vlines: [], segs: [], regions: [], labels: [], alt: '' };
  let xr = null, yr = null;
  body.split('\n').map((l) => l.trim()).filter(Boolean).forEach((line) => {
    const m = /^([a-z]+):\s*(.*)$/.exec(line);
    if (!m) throw new Error('dòng không hiểu trong :::graph: "' + line + '"');
    const key = m[1], val = m[2];
    const rng = () => { const r = /^(-?[\d.]+)\s*\.\.\s*(-?[\d.]+)$/.exec(val); if (!r) throw new Error('khoảng phải có dạng "-4..4": "' + line + '"'); return [parseFloat(r[1]), parseFloat(r[2])]; };
    const pt = (s) => { const r = /\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)/.exec(s); if (!r) throw new Error('toạ độ điểm phải có dạng (1, 2): "' + line + '"'); return [parseFloat(r[1]), parseFloat(r[2])]; };
    const dashed = /;\s*dashed\s*$/.test(val);
    const clean = val.replace(/;\s*dashed\s*$/, '');
    if (key === 'alt') cfg.alt = val;
    else if (key === 'x') xr = rng();
    else if (key === 'y') yr = rng();
    else if (key === 'plot') {
      const parts = clean.split(';').map((t) => t.trim());
      let dom = null;
      if (parts[1] && /\.\./.test(parts[1])) { const r = /^(-?[\d.]+)\s*\.\.\s*(-?[\d.]+)$/.exec(parts[1]); if (r) dom = [parseFloat(r[1]), parseFloat(r[2])]; }
      cfg.plots.push({ fn: compile(parts[0]), dom, dashed: dashed || parts.indexOf('dashed') > 0 });
    }
    else if (key === 'point' || key === 'open') cfg.points.push({ p: pt(val), text: parseLabelText(val), open: key === 'open', pos: (/"\s+([a-z-]+)\s*$/.exec(val) || [])[1] });
    else if (key === 'vline') cfg.vlines.push({ v: parseFloat(clean), dashed });
    else if (key === 'hline') cfg.hlines.push({ v: parseFloat(clean), dashed });
    else if (key === 'segment') { const ps = clean.match(/\([^)]*\)/g); if (!ps || ps.length < 2) throw new Error('segment cần hai điểm: "' + line + '"'); cfg.segs.push({ a: pt(ps[0]), b: pt(ps[1]), dashed }); }
    else if (key === 'region') {
      const r = /^(.*?)(<=|>=|<|>)(.*)$/.exec(val);
      if (!r) throw new Error('region cần dấu <=, >=, < hoặc >: "' + line + '"');
      const L = compile(r[1]), R = compile(r[3]);
      const g = (x, y) => L(x, y) - R(x, y);
      const c0 = g(0, 0), a = g(1, 0) - c0, b = g(0, 1) - c0; // a*x + b*y + c0 (op) 0
      cfg.regions.push({ a, b, c: c0, op: r[2] });
    }
    else if (key === 'label') cfg.labels.push({ p: pt(val), text: parseLabelText(val) });
    else throw new Error('từ khoá không có trong :::graph: "' + key + '"');
  });
  if (!xr || !yr) throw new Error(':::graph cần có dòng "x: a..b" và "y: c..d"');
  if (!cfg.alt) throw new Error(':::graph cần có dòng "alt: mô tả hình" (cho người khiếm thị và Google)');

  const padL = 30, padR = 14, padT = 12, padB = 26;
  let pw = 440 - padL - padR;
  let ph = pw * (yr[1] - yr[0]) / (xr[1] - xr[0]);
  if (ph > 340) { pw = pw * 340 / ph; ph = 340; } // keep the true shape: make the picture narrower, never stretch it
  const ph2 = Math.max(120, ph);
  const W = Math.round(pw + padL + padR);
  const H = Math.round(ph2 + padT + padB);
  const X = (x) => padL + (x - xr[0]) / (xr[1] - xr[0]) * pw;
  const Y = (y) => padT + (yr[1] - y) / (yr[1] - yr[0]) * ph2;
  let s = '';
  const sx = niceStep(xr[1] - xr[0], 8), sy = niceStep(yr[1] - yr[0], 6);
  // grid + ticks
  for (let x = Math.ceil(xr[0] / sx) * sx; x <= xr[1] + 1e-9; x += sx) {
    s += '<line class="fg" x1="' + f(X(x)) + '" y1="' + padT + '" x2="' + f(X(x)) + '" y2="' + (padT + ph2) + '"/>';
    if (Math.abs(x) > 1e-9) s += label(f(x), X(x), Y(Math.min(Math.max(0, yr[0]), yr[1])) + 14, 'ft');
  }
  for (let y = Math.ceil(yr[0] / sy) * sy; y <= yr[1] + 1e-9; y += sy) {
    s += '<line class="fg" x1="' + padL + '" y1="' + f(Y(y)) + '" x2="' + (padL + pw) + '" y2="' + f(Y(y)) + '"/>';
    if (Math.abs(y) > 1e-9) s += label(f(y), X(Math.min(Math.max(0, xr[0]), xr[1])) - 5, Y(y) + 4, 'ft', 'end');
  }
  const ox = X(Math.min(Math.max(0, xr[0]), xr[1])), oy = Y(Math.min(Math.max(0, yr[0]), yr[1]));
  s += '<line class="fa" x1="' + padL + '" y1="' + f(oy) + '" x2="' + (padL + pw) + '" y2="' + f(oy) + '"/>';
  s += '<line class="fa" x1="' + f(ox) + '" y1="' + padT + '" x2="' + f(ox) + '" y2="' + (padT + ph2) + '"/>';
  s += label('x', padL + pw - 4, oy - 6, 'fl', 'end') + label('y', ox + 9, padT + 10, 'fl', 'start');
  s += label('O', ox - 7, oy + 14, 'ft', 'end');

  // shaded region: intersection of half-planes, clipped from the viewport rectangle
  if (cfg.regions.length) {
    let poly = [[xr[0], yr[0]], [xr[1], yr[0]], [xr[1], yr[1]], [xr[0], yr[1]]];
    cfg.regions.forEach((rg) => {
      const inside = (p) => { const v = rg.a * p[0] + rg.b * p[1] + rg.c; return rg.op[0] === '<' ? v <= 1e-9 : v >= -1e-9; };
      const out = [];
      for (let k = 0; k < poly.length; k++) {
        const A = poly[k], B = poly[(k + 1) % poly.length];
        const ia = inside(A), ib = inside(B);
        if (ia) out.push(A);
        if (ia !== ib) {
          const va = rg.a * A[0] + rg.b * A[1] + rg.c, vb = rg.a * B[0] + rg.b * B[1] + rg.c;
          const t = va / (va - vb);
          out.push([A[0] + t * (B[0] - A[0]), A[1] + t * (B[1] - A[1])]);
        }
      }
      poly = out;
    });
    if (poly.length >= 3) s += '<polygon class="freg" points="' + poly.map((p) => f(X(p[0])) + ',' + f(Y(p[1]))).join(' ') + '"/>';
    cfg.regions.forEach((rg) => {
      const strict = rg.op.length === 1;
      let p1, p2;
      if (Math.abs(rg.b) > 1e-12) { p1 = [xr[0], -(rg.a * xr[0] + rg.c) / rg.b]; p2 = [xr[1], -(rg.a * xr[1] + rg.c) / rg.b]; }
      else { const x0 = -rg.c / rg.a; p1 = [x0, yr[0]]; p2 = [x0, yr[1]]; }
      s += '<line class="fbound' + (strict ? ' dash' : '') + '" x1="' + f(X(p1[0])) + '" y1="' + f(Y(p1[1])) + '" x2="' + f(X(p2[0])) + '" y2="' + f(Y(p2[1])) + '"/>';
    });
  }
  cfg.vlines.forEach((l) => { s += '<line class="fcurve' + (l.dashed ? ' dash' : '') + '" x1="' + f(X(l.v)) + '" y1="' + padT + '" x2="' + f(X(l.v)) + '" y2="' + (padT + ph2) + '"/>'; });
  cfg.hlines.forEach((l) => { s += '<line class="fcurve' + (l.dashed ? ' dash' : '') + '" x1="' + padL + '" y1="' + f(Y(l.v)) + '" x2="' + (padL + pw) + '" y2="' + f(Y(l.v)) + '"/>'; });
  cfg.segs.forEach((g) => { s += '<line class="fcurve' + (g.dashed ? ' dash' : '') + '" x1="' + f(X(g.a[0])) + '" y1="' + f(Y(g.a[1])) + '" x2="' + f(X(g.b[0])) + '" y2="' + f(Y(g.b[1])) + '"/>'; });
  // curves (broken into pieces where the function is undefined or leaves the picture)
  cfg.plots.forEach((pl) => {
    const a = pl.dom ? pl.dom[0] : xr[0], b = pl.dom ? pl.dom[1] : xr[1];
    const N = 400;
    let d = '', pen = false, prev = null;
    const lo = yr[0] - (yr[1] - yr[0]) * 2, hi = yr[1] + (yr[1] - yr[0]) * 2;
    for (let k = 0; k <= N; k++) {
      const x = a + (b - a) * k / N;
      const y = pl.fn(x, 0);
      if (!isFinite(y) || y < lo || y > hi || (prev !== null && Math.abs(y - prev) > (yr[1] - yr[0]) * 1.2)) { pen = false; prev = isFinite(y) ? y : null; continue; }
      d += (pen ? 'L' : 'M') + f(X(x)) + ' ' + f(Y(y));
      pen = true; prev = y;
    }
    s += '<clipPath id="c' + o.uid + '"><rect x="' + padL + '" y="' + padT + '" width="' + pw + '" height="' + ph2 + '"/></clipPath>';
    s += '<path class="fcurve' + (pl.dashed ? ' dash' : '') + '" clip-path="url(#c' + o.uid + ')" d="' + d + '"/>';
  });
  cfg.points.forEach((p) => {
    s += '<circle class="' + (p.open ? 'fpt open' : 'fpt') + '" cx="' + f(X(p.p[0])) + '" cy="' + f(Y(p.p[1])) + '" r="4.5"/>';
    if (p.text) { const pp = POS[p.pos] || POS['above-right']; s += label(p.text, X(p.p[0]) + pp[0], Y(p.p[1]) + pp[1], 'fl', pp[2]); }
  });
  cfg.labels.forEach((l) => { s += label(l.text, X(l.p[0]), Y(l.p[1]), 'fl'); });

  const svg = '<svg class="fsvg" viewBox="0 0 ' + W + ' ' + H + '" style="max-width:' + W + 'px" role="img" aria-label="' + esc(cfg.alt) + '">' + s + '</svg>';
  return wrap(svg, o);
}

/* ---------------- :::diagram ---------------- */
function diagram(body, o) {
  const pts = {};
  const items = [];
  let alt = '', axes = false, grid = false;
  const extraPts = [];
  const need = (n, line) => { if (!pts[n]) throw new Error('điểm "' + n + '" chưa được khai báo trước dòng: "' + line + '"'); return pts[n]; };
  body.split('\n').map((l) => l.trim()).filter(Boolean).forEach((line) => {
    let m;
    if ((m = /^alt:\s*(.*)$/.exec(line))) { alt = m[1]; return; }
    if (line === 'axes') { axes = true; return; }
    if (line === 'grid') { grid = true; return; }
    if ((m = /^point\s+(\S+)\s+(-?[\d.]+)\s*,\s*(-?[\d.]+)(?:\s+([a-z-]+))?\s*(?:"([^"]*)")?\s*$/.exec(line))) {
      pts[m[1]] = { x: parseFloat(m[2]), y: parseFloat(m[3]), pos: m[4], text: m[5] != null ? m[5] : m[1] };
      items.push({ t: 'point', n: m[1] }); return;
    }
    if ((m = /^(segment|arrow)\s+(\S+)\s+(\S+)((?:\s+dashed)?)(?:\s+"([^"]*)")?\s*$/.exec(line))) {
      need(m[2], line); need(m[3], line);
      items.push({ t: m[1], a: m[2], b: m[3], dashed: !!m[4].trim(), text: m[5] }); return;
    }
    if ((m = /^polygon\s+([^"]+?)\s*$/.exec(line))) {
      const names = m[1].split(/\s+/); names.forEach((n) => need(n, line));
      items.push({ t: 'polygon', names }); return;
    }
    if ((m = /^circle\s+(\S+)\s+(-?[\d.]+)\s*$/.exec(line))) { need(m[1], line); items.push({ t: 'circle', c: m[1], r: parseFloat(m[2]) }); return; }
    if ((m = /^(angle|right)\s+(\S+)\s+(\S+)\s+(\S+)(?:\s+"([^"]*)")?\s*$/.exec(line))) {
      need(m[2], line); need(m[3], line); need(m[4], line);
      items.push({ t: m[1], a: m[2], v: m[3], b: m[4], text: m[5] }); return;
    }
    if ((m = /^mark\s+(\S+)\s+(\S+)\s+([123])\s*$/.exec(line))) { need(m[1], line); need(m[2], line); items.push({ t: 'mark', a: m[1], b: m[2], n: parseInt(m[3], 10) }); return; }
    if ((m = /^label\s+(-?[\d.]+)\s*,\s*(-?[\d.]+)\s+"([^"]*)"\s*$/.exec(line))) { items.push({ t: 'label', x: parseFloat(m[1]), y: parseFloat(m[2]), text: m[3] }); extraPts.push([parseFloat(m[1]), parseFloat(m[2])]); return; }
    throw new Error('dòng không hiểu trong :::diagram: "' + line + '"');
  });
  if (!alt) throw new Error(':::diagram cần có dòng "alt: mô tả hình" (cho người khiếm thị và Google)');
  const names = Object.keys(pts);
  if (!names.length) throw new Error(':::diagram chưa có điểm nào');

  // bounding box in math units (include circles and free labels)
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  const grow = (x, y) => { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); };
  names.forEach((n) => grow(pts[n].x, pts[n].y));
  extraPts.forEach((p) => grow(p[0], p[1]));
  items.filter((i) => i.t === 'circle').forEach((c) => { const P = pts[c.c]; grow(P.x - c.r, P.y - c.r); grow(P.x + c.r, P.y + c.r); });
  if (axes) grow(0, 0);
  const spanX = Math.max(x1 - x0, 1e-6), spanY = Math.max(y1 - y0, 1e-6);
  const maxW = 400, maxH = 300, pad = 34;
  const scale = Math.min((maxW - 2 * pad) / spanX, (maxH - 2 * pad) / spanY);
  const W = Math.round(spanX * scale + 2 * pad), H = Math.round(spanY * scale + 2 * pad);
  const X = (x) => pad + (x - x0) * scale;
  const Y = (y) => H - pad - (y - y0) * scale;
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;

  let s = '<defs><marker id="ah' + o.uid + '" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="farrowhead"/></marker></defs>';
  if (grid) {
    for (let x = Math.ceil(x0); x <= x1; x++) s += '<line class="fg" x1="' + f(X(x)) + '" y1="' + pad / 2 + '" x2="' + f(X(x)) + '" y2="' + (H - pad / 2) + '"/>';
    for (let y = Math.ceil(y0); y <= y1; y++) s += '<line class="fg" x1="' + pad / 2 + '" y1="' + f(Y(y)) + '" x2="' + (W - pad / 2) + '" y2="' + f(Y(y)) + '"/>';
  }
  if (axes) {
    s += '<line class="fa" x1="' + pad / 2 + '" y1="' + f(Y(0)) + '" x2="' + (W - pad / 2) + '" y2="' + f(Y(0)) + '"/>';
    s += '<line class="fa" x1="' + f(X(0)) + '" y1="' + pad / 2 + '" x2="' + f(X(0)) + '" y2="' + (H - pad / 2) + '"/>';
    s += label('x', W - pad / 2 - 4, Y(0) - 6, 'fl', 'end') + label('y', X(0) + 9, pad / 2 + 8, 'fl', 'start');
  }
  // fills first
  items.filter((i) => i.t === 'polygon').forEach((p) => {
    s += '<polygon class="fpoly" points="' + p.names.map((n) => f(X(pts[n].x)) + ',' + f(Y(pts[n].y))).join(' ') + '"/>';
  });
  items.forEach((it) => {
    if (it.t === 'polygon') {
      s += '<polygon class="fseg nofill" points="' + it.names.map((n) => f(X(pts[n].x)) + ',' + f(Y(pts[n].y))).join(' ') + '"/>';
    } else if (it.t === 'segment' || it.t === 'arrow') {
      const A = pts[it.a], B = pts[it.b];
      s += '<line class="' + (it.t === 'arrow' ? 'fvec' : 'fseg') + (it.dashed ? ' dash' : '') + '" x1="' + f(X(A.x)) + '" y1="' + f(Y(A.y)) + '" x2="' + f(X(B.x)) + '" y2="' + f(Y(B.y)) + '"' +
        (it.t === 'arrow' ? ' marker-end="url(#ah' + o.uid + ')"' : '') + '/>';
      if (it.text) {
        const mx = (X(A.x) + X(B.x)) / 2, my = (Y(A.y) + Y(B.y)) / 2;
        const dx = X(B.x) - X(A.x), dy = Y(B.y) - Y(A.y), len = Math.hypot(dx, dy) || 1;
        // push the label to the side of the line that faces away from the picture's centre
        let nx = -dy / len, ny = dx / len;
        if (nx * (mx - X(cx)) + ny * (my - Y(cy)) < 0) { nx = -nx; ny = -ny; }
        s += label(it.text, mx + nx * 13, my + ny * 13 + 4, 'fl i');
      }
    } else if (it.t === 'circle') {
      const C = pts[it.c];
      s += '<circle class="fseg nofill" cx="' + f(X(C.x)) + '" cy="' + f(Y(C.y)) + '" r="' + f(it.r * scale) + '"/>';
    } else if (it.t === 'angle' || it.t === 'right') {
      const A = pts[it.a], V = pts[it.v], B = pts[it.b];
      const a1 = Math.atan2(-(A.y - V.y), A.x - V.x), a2 = Math.atan2(-(B.y - V.y), B.x - V.x); // screen angles
      let da = a2 - a1; while (da > Math.PI) da -= 2 * Math.PI; while (da < -Math.PI) da += 2 * Math.PI;
      const vx = X(V.x), vy = Y(V.y);
      if (it.t === 'right') {
        const r = 12, u1 = [Math.cos(a1), Math.sin(a1)], u2 = [Math.cos(a2), Math.sin(a2)];
        const p1 = [vx + u1[0] * r, vy + u1[1] * r], p3 = [vx + u2[0] * r, vy + u2[1] * r], p2 = [p1[0] + u2[0] * r, p1[1] + u2[1] * r];
        s += '<polyline class="fang" points="' + [p1, p2, p3].map((p) => f(p[0]) + ',' + f(p[1])).join(' ') + '"/>';
      } else {
        const r = 22;
        const sx = vx + r * Math.cos(a1), sy = vy + r * Math.sin(a1), ex = vx + r * Math.cos(a1 + da), ey = vy + r * Math.sin(a1 + da);
        s += '<path class="fang" d="M' + f(sx) + ' ' + f(sy) + ' A' + r + ' ' + r + ' 0 0 ' + (da > 0 ? 1 : 0) + ' ' + f(ex) + ' ' + f(ey) + '"/>';
        if (it.text) { const am = a1 + da / 2; s += label(it.text, vx + (r + 12) * Math.cos(am), vy + (r + 12) * Math.sin(am) + 4, 'fl i'); }
      }
    } else if (it.t === 'mark') {
      const A = pts[it.a], B = pts[it.b];
      const mx = (X(A.x) + X(B.x)) / 2, my = (Y(A.y) + Y(B.y)) / 2;
      const dx = X(B.x) - X(A.x), dy = Y(B.y) - Y(A.y), len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len, ny = dx / len, tx = dx / len, ty = dy / len;
      for (let k = 0; k < it.n; k++) {
        const off = (k - (it.n - 1) / 2) * 5;
        s += '<line class="fseg" x1="' + f(mx + tx * off - nx * 5) + '" y1="' + f(my + ty * off - ny * 5) + '" x2="' + f(mx + tx * off + nx * 5) + '" y2="' + f(my + ty * off + ny * 5) + '"/>';
      }
    } else if (it.t === 'label') {
      s += label(it.text, X(it.x), Y(it.y) + 4, 'fl i');
    }
  });
  // points on top
  names.forEach((n) => {
    const P = pts[n];
    s += '<circle class="fpt" cx="' + f(X(P.x)) + '" cy="' + f(Y(P.y)) + '" r="3.6"/>';
    if (P.text) {
      let pos = P.pos;
      if (!pos) {
        const dx = P.x - cx, dy = P.y - cy;
        const h = Math.abs(dx) * scale > 8 ? (dx > 0 ? 'right' : 'left') : '';
        const v = Math.abs(dy) * scale > 8 ? (dy > 0 ? 'above' : 'below') : '';
        pos = v && h ? v + '-' + h : (v || h || 'above');
      }
      const pp = POS[pos];
      if (!pp) throw new Error('vị trí nhãn không hợp lệ: "' + pos + '" (above, below, left, right, above-left...)');
      s += label(P.text, X(P.x) + pp[0], Y(P.y) + pp[1], 'fl i', pp[2]);
    }
  });
  const svg = '<svg class="fsvg" viewBox="0 0 ' + W + ' ' + H + '" style="max-width:' + W + 'px" role="img" aria-label="' + esc(alt) + '">' + s + '</svg>';
  return wrap(svg, o);
}

module.exports = { graph, diagram, compile };
