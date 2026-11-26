/*
 * Slim maths (26/11/2026, owner approved "phương án kết hợp").
 *
 * KaTeX drawn at build time is about 88% of the site's bytes: a formula of 19 characters such as
 * \overrightarrow{AB} becomes about 1,600 characters of HTML. slim(html, keep) keeps the first `keep`
 * formulas of a page drawn (so the top of the page shows at once, with no flash) and leaves every
 * later formula as its TeX inside <span class="lm-m"> (display formulas: class "lm-m lm-d").
 * assets/math.js draws those in the browser with the same KaTeX version, as they come near the screen,
 * then the rest in the background; the print buttons and Ctrl+P draw everything first.
 *
 * Every formula is still drawn and checked by KaTeX during the build (render.js, throwOnError), and the
 * TeX kept here is KaTeX's own copy of it (the <annotation> inside the MathML), so the browser draws
 * exactly what the build checked.
 */
'use strict';

const OPEN_DISPLAY = '<span class="katex-display">';
const OPEN_INLINE = '<span class="katex">';
const TEX_RE = /<annotation encoding="application\/x-tex">([\s\S]*?)<\/annotation>/;

/* index just after the </span> that closes the <span> starting at `start` */
function spanEnd(s, start) {
  const re = /<span\b|<\/span>/g;
  re.lastIndex = start;
  let depth = 0, m;
  while ((m = re.exec(s))) {
    depth += m[0] === '</span>' ? -1 : 1;
    if (depth === 0) return re.lastIndex;
  }
  return -1;
}

/*
 * Returns { html, kept, left } where kept = formulas still drawn, left = formulas turned back into TeX.
 * Only the <body> is touched.
 */
function slim(html, keep) {
  const bodyAt = html.indexOf('<body');
  if (bodyAt < 0) return { html, kept: 0, left: 0 };
  let out = html.slice(0, bodyAt), pos = bodyAt, kept = 0, left = 0;
  for (;;) {
    const d = html.indexOf(OPEN_DISPLAY, pos), i = html.indexOf(OPEN_INLINE, pos);
    let at = -1, display = false;
    if (d >= 0 && (i < 0 || d < i)) { at = d; display = true; } else if (i >= 0) at = i;
    if (at < 0) break;
    const end = spanEnd(html, at);
    if (end < 0) break;
    const tex = kept < keep ? null : (TEX_RE.exec(html.slice(at, end)) || [])[1];
    if (tex == null) { // keep this one drawn (one of the first `keep`, or no TeX copy to fall back on)
      out += html.slice(pos, end);
      kept++;
    } else {
      out += html.slice(pos, at) + '<span class="lm-m' + (display ? ' lm-d' : '') + '">' + tex + '</span>';
      left++;
    }
    pos = end;
  }
  out += html.slice(pos);
  return { html: out, kept, left };
}

/* Adds the two scripts that draw the TeX left in the page (paths relative to the page, like every other asset). */
function addScripts(html, assetsPrefix) {
  let tags = '';
  if (html.indexOf('assets/katex/katex.min.js"') < 0) tags += '<script src="' + assetsPrefix + 'assets/katex/katex.min.js" defer></script>\n';
  tags += '<script src="' + assetsPrefix + 'assets/math.js" defer></script>\n';
  const at = html.lastIndexOf('</body>');
  return at < 0 ? html + tags : html.slice(0, at) + tags + html.slice(at);
}

module.exports = { slim, addScripts };
