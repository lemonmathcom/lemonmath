'use strict';

/* Original Lemonmath artwork: the lemon mascot and the small chapter icons. */

function mascot(opts) {
  opts = opts || {};
  const cls = opts.cls ? ' class="' + opts.cls + '"' : '';
  const label = opts.label ? ' role="img" aria-label="' + opts.label + '"' : ' aria-hidden="true" focusable="false"';
  const mouth = opts.mood === 'wow'
    ? '<ellipse cx="60" cy="76" rx="6" ry="7.5" fill="#7A2E1A"/>'
    : '<path d="M47 71 Q60 86 73 71" fill="#7A2E1A" stroke="#7A2E1A" stroke-width="2.5" stroke-linejoin="round"/><path d="M52 76 Q60 82 68 76 Q60 79 52 76Z" fill="#FF8FA3"/>';
  return '<svg' + cls + ' viewBox="0 0 120 120"' + label + '>' +
    '<ellipse cx="60" cy="112" rx="30" ry="4.5" fill="rgba(0,0,0,.12)"/>' +
    '<path d="M6 62 Q14 56 20 46 C30 30 45 22 60 22 C75 22 90 30 100 46 Q106 56 114 62 Q106 68 100 78 C90 94 75 102 60 102 C45 102 30 94 20 78 Q14 68 6 62Z" fill="#FFD93B" stroke="#B8860B" stroke-width="3.5" stroke-linejoin="round"/>' +
    '<path d="M28 44 Q40 30 56 28" fill="none" stroke="#FFF3A6" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M60 23 C58 10 68 3 84 5 C85 17 76 25 60 23Z" fill="#4CAF50" stroke="#2E7D32" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M60 23 Q70 15 80 9" fill="none" stroke="#2E7D32" stroke-width="2" stroke-linecap="round"/>' +
    '<ellipse cx="45" cy="58" rx="5" ry="6.5" fill="#2B2A33"/><ellipse cx="75" cy="58" rx="5" ry="6.5" fill="#2B2A33"/>' +
    '<circle cx="47" cy="55.5" r="1.8" fill="#fff"/><circle cx="77" cy="55.5" r="1.8" fill="#fff"/>' +
    '<circle cx="35" cy="70" r="6" fill="#FF8FA3" opacity=".55"/><circle cx="85" cy="70" r="6" fill="#FF8FA3" opacity=".55"/>' +
    mouth + '</svg>';
}

const I = {
  number: '<path d="M8 4 6 20M16 4l-2 16M4 9h17M3 15h17"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  times: '<path d="M6 6l12 12M18 6 6 18"/>',
  shapes: '<rect x="3" y="12" width="8" height="8" rx="1"/><circle cx="17" cy="16" r="4"/><path d="M12 3l5 8H7z"/>',
  ruler: '<rect x="2" y="8" width="20" height="8" rx="1.5"/><path d="M6 8v3M10 8v4M14 8v3M18 8v4"/>',
  fraction: '<path d="M5 12h14"/><circle cx="12" cy="6" r="1.6"/><circle cx="12" cy="18" r="1.6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  scale: '<path d="M12 4v16M6 20h12M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
  cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12 4 7.5"/>',
  chart: '<path d="M4 4v16h16"/><rect x="7" y="12" width="3" height="8"/><rect x="12" y="8" width="3" height="12"/><rect x="17" y="14" width="3" height="6"/>',
  dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="15" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  function: '<path d="M3 3v18h18"/><path d="M6 7c3 14 9 14 13 0"/>',
  triangle: '<path d="M12 4 3 20h18z"/><path d="M8.5 20a4 4 0 0 1 1.2-3"/>',
  circle: '<circle cx="12" cy="12" r="9"/><path d="M12 12l6.4-6.4"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  vector: '<path d="M4 20 20 4M20 4h-7M20 4v7"/>',
  sigma: '<path d="M18 5H6l7 7-7 7h12"/>',
  integral: '<path d="M15 3c-3 0-3 2-3 5v8c0 3 0 5-3 5"/>',
  set: '<circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/>',
  equation: '<path d="M5 9h14M5 15h14"/>',
  angle: '<path d="M4 20h16M4 20 14 6"/><path d="M10 20a6 6 0 0 0-1.6-4"/>',
  percent: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
  coordinate: '<path d="M12 3v18M3 12h18"/><path d="M12 12l5-5"/><circle cx="17" cy="7" r="1.2" fill="currentColor"/>',
  root: '<path d="M3 13h3l3 6 5-14h7"/>',
  brackets: '<path d="M9 4H6v16h3M15 4h3v16h-3"/>',
  tree: '<circle cx="12" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M12 7v5M12 12 6 17M12 12l6 5"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'
};

function icon(name, size) {
  size = size || 24;
  return '<svg class="ico" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (I[name] || I.star) + '</svg>';
}

module.exports = { mascot, icon, ICONS: Object.keys(I) };
