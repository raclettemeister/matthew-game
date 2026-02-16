/**
 * Minigame harness: canvas, input, PAL, drawText, drawPixelRect, game mock.
 * Load this first, then fortnite-minigame.js. Do not edit fortnite-minigame.js by hand
 * (it is generated from index.html via npm run extract-fortnite).
 */
(function() {
  const canvas = document.getElementById('c');
  if (!canvas) return;
  window.canvas = canvas;
  const ctx = canvas.getContext('2d');
  window.ctx = ctx;
  const W = 960, H = 540;
  const PIXEL_SCALE = 2;
  canvas.width = W * PIXEL_SCALE;
  canvas.height = H * PIXEL_SCALE;

  function resize() {
    const s = Math.min(window.innerWidth / W, window.innerHeight / H) * 0.95;
    canvas.style.width = (W * s) + 'px';
    canvas.style.height = (H * s) + 'px';
  }
  resize();
  window.addEventListener('resize', resize);

  window.mouse = { x: W/2, y: H/2, worldX: 0, worldY: 0, clicked: false, rightClicked: false, down: false };
  canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    window.mouse.x = (e.clientX - rect.left) * W / rect.width;
    window.mouse.y = (e.clientY - rect.top) * H / rect.height;
  });
  canvas.addEventListener('contextmenu', function(e) { e.preventDefault(); });

  const keys = {};
  window.keys = keys;
  window.eKeyJustPressed = false;
  document.addEventListener('keydown', function(e) {
    keys[e.code] = true;
    if (e.code === 'KeyE') window.eKeyJustPressed = true;
    if (e.code === 'Escape' && typeof stopFortnite === 'function') { stopFortnite(); e.preventDefault(); }
    if (e.code === 'Enter' || e.code === 'Space') {
      if (typeof fn === 'undefined' || !fn) { if (typeof initFortnite === 'function') initFortnite(); e.preventDefault(); }
    }
  });
  document.addEventListener('keyup', function(e) {
    keys[e.code] = false;
    if (e.code === 'Space' && typeof fn !== 'undefined' && fn) fn.shooting = window.mouse.down;
  });

  window.game = { score: 0, momAlert: 0, playingFortnite: true };
  window.playPopSound = function() {};
  window.playCarExplosionSound = function() {};

  // Pixel font (required by fortnite-minigame.js)
  const CHARS = {
    'A':[0x7c,0x86,0xfe,0x86,0x86],'B':[0xfc,0x86,0xfc,0x86,0xfc],'C':[0x7e,0x80,0x80,0x80,0x7e],
    'D':[0xf8,0x84,0x84,0x84,0xf8],'E':[0xfe,0x80,0xf8,0x80,0xfe],'F':[0xfe,0x80,0xf8,0x80,0x80],
    'G':[0x7e,0x80,0x9e,0x82,0x7e],'H':[0x82,0x82,0xfe,0x82,0x82],'I':[0xfe,0x38,0x38,0x38,0xfe],
    'J':[0x06,0x06,0x06,0x86,0x7c],'K':[0x8c,0x98,0xe0,0x98,0x8c],'L':[0x80,0x80,0x80,0x80,0xfe],
    'M':[0x82,0xc6,0xaa,0x92,0x82],'N':[0x82,0xc2,0xa2,0x92,0x86],'O':[0x7c,0x82,0x82,0x82,0x7c],
    'P':[0xfc,0x82,0xfc,0x80,0x80],'Q':[0x7c,0x82,0x8a,0x84,0x7a],'R':[0xfc,0x82,0xfc,0x88,0x84],
    'S':[0x7e,0x80,0x7c,0x02,0xfc],'T':[0xfe,0x38,0x38,0x38,0x38],'U':[0x82,0x82,0x82,0x82,0x7c],
    'V':[0x82,0x82,0x44,0x44,0x38],'W':[0x82,0x92,0xaa,0xc6,0x82],'X':[0x82,0x44,0x38,0x44,0x82],
    'Y':[0x82,0x44,0x38,0x38,0x38],'Z':[0xfe,0x0c,0x38,0x60,0xfe],
    '0':[0x7c,0x8e,0x92,0xe2,0x7c],'1':[0x30,0x70,0x30,0x30,0x78],'2':[0x7c,0x06,0x7c,0xc0,0xfe],
    '3':[0x7c,0x06,0x3c,0x06,0x7c],'4':[0x86,0x86,0xfe,0x06,0x06],'5':[0xfe,0x80,0xfc,0x02,0xfc],
    '6':[0x7e,0x80,0xfc,0x82,0x7c],'7':[0xfe,0x06,0x0c,0x18,0x18],'8':[0x7c,0x82,0x7c,0x82,0x7c],
    '9':[0x7c,0x82,0x7e,0x02,0x7c],
    ':':[0x00,0x30,0x00,0x30,0x00],' ':[0x00,0x00,0x00,0x00,0x00],'.':[0x00,0x00,0x00,0x00,0x30],
    '!':[0x30,0x30,0x30,0x00,0x30],'?':[0x7c,0x06,0x1c,0x00,0x10],'+':[0x00,0x10,0x38,0x10,0x00],
    '-':[0x00,0x00,0x3c,0x00,0x00],'%':[0xc6,0x0c,0x18,0x30,0x63],'/':[0x04,0x08,0x10,0x20,0x40],
    '#':[0x44,0xfe,0x44,0xfe,0x44],',':[0x00,0x00,0x00,0x18,0x30],"'":[0x30,0x30,0x20,0x00,0x00],
  };
  window.drawText = function(text, x, y, color, size, align) {
    color = color || '#fff'; size = size || 1; align = align || 'left';
    const upper = text.toUpperCase();
    let totalW = 0;
    for (let i = 0; i < upper.length; i++) totalW += (CHARS[upper[i]] ? 8 : 4) * size;
    let ox = x;
    if (align === 'center') ox = x - totalW / 2;
    else if (align === 'right') ox = x - totalW;
    ctx.fillStyle = color;
    for (let i = 0; i < upper.length; i++) {
      const ch = upper[i], data = CHARS[ch];
      if (data) {
        for (let row = 0; row < 5; row++)
          for (let col = 0; col < 8; col++)
            if (data[row] & (1 << (7 - col))) ctx.fillRect(ox + col * size, y + row * size, size, size);
        ox += 8 * size;
      } else { ox += 4 * size; }
    }
  };
  window.PAL = {
    wall1:'#e8dcb8',wall2:'#ddd0a8',skin:'#f0c090',hair:'#483018',
    shirt:'#d83838',shirtShade:'#a82828',pants:'#4848a8',pantsShade:'#383888',
    uiBorder:'#383858',textGold:'#f0d040',black:'#181820',
  };
  window.drawPixelRect = function(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(x), Math.floor(y), Math.floor(w), Math.floor(h));
  };

  window.__FN_VIEWPORT__ = { w: W, h: H };

  canvas.addEventListener('mousedown', function(e) {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * W / rect.width;
    const my = (e.clientY - rect.top) * H / rect.height;
    const f = window.fnRef ? window.fnRef() : null;
    if (f) {
      const br = window.FN_BTN_RETOUR || { x: 8, y: 8, w: 100, h: 18 };
      if (mx >= br.x && mx <= br.x + br.w && my >= br.y && my <= br.y + br.h) {
        if (typeof stopFortnite === 'function') stopFortnite();
        return;
      }
      if (e.button === 0) { f.shooting = true; window.mouse.down = true; }
      if (e.button === 2) {
        e.preventDefault();
        if (f.materials >= 10 && f.wallCool <= 0 && f.alive) {
          f.walls.push({ x: f.px + Math.cos(f.dir)*15, y: f.py + Math.sin(f.dir)*15, hp: 3 });
          f.materials -= 10;
          f.wallCool = 15;
        }
      }
      return;
    }
    if (e.button === 0 && mx > 0 && mx < W && my > 0 && my < H) {
      if (typeof initFortnite === 'function') initFortnite();
    }
  });
  canvas.addEventListener('mouseup', function(e) {
    if (e.button === 0) {
      window.mouse.down = false;
      const f = window.fnRef ? window.fnRef() : null;
      if (f) f.shooting = keys['Space'] || false;
    }
  });

  function loop() {
    window.eKeyJustPressed = false;
    const f = (typeof window.fnRef === 'function' ? window.fnRef() : null) || (typeof fn !== 'undefined' ? fn : null);
    if (f) {
      if (typeof updateFortnite === 'function') updateFortnite();
      ctx.fillStyle = '#0a0a1a';
      ctx.fillRect(0, 0, W, H);
      if (typeof drawFortnite === 'function') drawFortnite();
    } else {
      ctx.fillStyle = '#0a0a1a';
      ctx.fillRect(0, 0, W, H);
      window.drawText('FORTNITE MINIGAME (debug)', W/2, H/2 - 20, '#40d870', 2, 'center');
      window.drawText('CLIC ou ENTRER pour jouer', W/2, H/2 + 10, '#a0a0c0', 1, 'center');
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
