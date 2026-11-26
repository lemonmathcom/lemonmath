#!/usr/bin/env python3
"""End-to-end check of LemonMath Tools in a real browser (not run by GitHub Actions).

  npm run build
  python3 -m http.server 8123 --directory dist &
  python3 tools/test/tools-e2e.py [http://localhost:8123] [--shots <folder>]

Needs Python Playwright and Chrome (CHROME=/path/to/chrome to choose one). Prints one line per check and exits 1
when any check fails. With --shots it also saves screenshots (desktop, phone, dark) to look at.
"""
import os, re, sys, time
from playwright.sync_api import sync_playwright

BASE = next((a for a in sys.argv[1:] if a.startswith('http')), 'http://localhost:8123').rstrip('/')
SHOTS = sys.argv[sys.argv.index('--shots') + 1] if '--shots' in sys.argv else None
CHROME = os.environ.get('CHROME', '/usr/bin/google-chrome')
bad = 0
def check(ok, what):
    global bad
    print(('  ok  ' if ok else '  ✗   ') + what)
    if not ok: bad += 1

NAMES = ['Nguyễn Văn An', 'Trần Thị Bình', 'Lê Minh Châu', 'Phạm Quốc Dũng', 'Hoàng Thu Hà', 'Vũ Đức Hùng', 'Đỗ Thị Lan', 'Bùi Văn Minh',
         'Ngô Thanh Nam', 'Dương Kim Oanh', 'Lý Gia Phúc', 'Mai Ngọc Quỳnh', 'Trịnh Văn Sơn', 'Đặng Thị Thảo', 'Cao Minh Tuấn', 'Phan Thị Uyên',
         'Lâm Quang Vinh', 'Hồ Bảo Xuân', 'Tô Hải Yến', 'Kiều Văn Bảo', 'Quách Thị Cúc', 'Lương Đình Đạt', 'Thái Thu Giang', 'Chu Văn Hải',
         'Đinh Thị Hoa', 'Giang Minh Khoa', 'La Thị Liên', 'Mạc Văn Long', 'Ninh Thị My', 'Ông Văn Nghĩa', 'Phùng Thị Nhung', 'Tạ Văn Phong',
         'Văn Thị Quế', 'Âu Minh Quân', 'Ứng Thị Sen', 'Yên Văn Tài', 'An Thị Trang', 'Nguyễn Văn An']   # 38, two students called An

def shot(page, name):
    if SHOTS:
        os.makedirs(SHOTS, exist_ok=True)
        page.screenshot(path=os.path.join(SHOTS, name + '.png'), full_page=True)

def fill_class(page, names):
    page.locator('.tl-cls-edit').evaluate('d => d.open = true')
    page.fill('#tl-names', '\n'.join(names))
    page.wait_for_timeout(700)   # the editor saves 0.5 s after typing stops

with sync_playwright() as p:
    br = p.chromium.launch(executable_path=CHROME, args=['--autoplay-policy=no-user-gesture-required'])
    ctx = br.new_context(viewport={'width': 1280, 'height': 900}, reduced_motion='reduce')
    page = ctx.new_page()
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: errors.append(m.text) if m.type == 'error' and 'Failed to load resource' not in m.text else None)   # outside requests (fonts, analytics) may be blocked where this runs

    print('Hub')
    for path, word, expect in [('/tools/', 'group', 'random-group-maker'), ('/vi/tien-ich/', 'nhom', 'random-group-maker')]:
        page.goto(BASE + path)
        cards = page.locator('#tl-all .tl-card:visible')
        check(cards.count() == 3, path + ': 3 live tools listed (' + str(cards.count()) + ')')
        check(page.locator('.tl-find').is_visible() and page.locator('.tl-chips').is_visible(), path + ': search and filters shown')
        page.fill('#tl-q', word)
        vis = page.locator('#tl-all .tl-card:visible')
        check(vis.count() == 1 and vis.first.get_attribute('data-id') == expect, path + ': search "' + word + '" (no accents) finds only the group maker')
        page.fill('#tl-q', 'zzzz')
        check(page.locator('#tl-none').is_visible(), path + ': "no tool matches" shown')
        page.fill('#tl-q', '')
        page.locator('.tl-chip[data-cat="classroom"]').click()
        check(page.locator('#tl-all .tl-card:visible').count() == 3, path + ': category filter')
        page.locator('.tl-chip[data-cat=""]').click()
        shot(page, 'hub' + ('-vi' if 'vi' in path else ''))
    page.locator('#tl-all .tl-card[data-id="classroom-timer"] .tl-star').click()
    check(page.locator('#tl-favs').is_visible() and page.locator('#tl-favs .tl-card').count() == 1, 'star: the timer appears in favourites')

    print('Classroom Timer')
    page.goto(BASE + '/vi/tien-ich/dong-ho-bam-gio/')
    page.wait_for_selector('#tl-app:not([hidden])')
    d = lambda: page.inner_text('.tm-digits')
    page.locator('[data-sec="30"]').click()
    check(d() == '00:30', 'preset 30 s shows 00:30 (' + d() + ')')
    page.locator('.tm-go').click()
    page.wait_for_timeout(1300)
    check(d() in ('00:29', '00:28'), 'counting down (' + d() + ')')
    page.locator('.tm-go').click()   # pause
    t = d(); page.wait_for_timeout(1200)
    check(d() == t and 'tạm dừng' in page.inner_text('.tm-state').lower(), 'paused: digits stand still (' + t + ')')
    page.locator('[data-add="60"]').click()
    check(d().startswith('01:2'), '+1 minute while paused (' + d() + ')')
    page.locator('.tm-go').click()   # resume
    page.reload(); page.wait_for_selector('#tl-app:not([hidden])'); page.wait_for_timeout(400)
    check(d().startswith('01:2') and 'Đang chạy' in page.inner_text('.tm-state'), 'still running after a reload (' + d() + ')')
    check(page.title().startswith('⏱'), 'the tab title shows the time: ' + page.title()[:20])
    page.keyboard.press('r')
    check(d() == '01:30' or d() == '00:30' or d().startswith('01:'), 'R resets (' + d() + ')')
    page.fill('.tm-m', '0'); page.fill('.tm-s', '2'); page.locator('.tm-custom button[type=submit]').click()
    check(d() == '00:02', 'own time 0 min 2 s (' + d() + ')')
    page.locator('.tm-go').click()
    page.wait_for_timeout(3600)
    st = page.inner_text('.tm-state')
    check('Hết giờ' in st and 'quá' in st, 'time is up and overtime counts: "' + st + '"')
    page.fill('.tm-m', '0'); page.fill('.tm-s', '75'); page.locator('.tm-custom button[type=submit]').click()
    check(page.inner_text('.tm-bad') != '', 'rejects 75 seconds')
    page.locator('[data-mode="up"]').click(); page.locator('.tm-go').click(); page.wait_for_timeout(1200)
    check(d() == '00:01' and page.locator('.tm-bar').is_hidden(), 'stopwatch counts up, no progress bar (' + d() + ')')
    page.locator('.tm-full').click(); page.wait_for_timeout(300)
    check(page.evaluate('!!(document.fullscreenElement || document.querySelector(".tl-max"))'), 'full screen')
    shot(page, 'timer-full')
    page.keyboard.press('Escape'); page.evaluate('document.exitFullscreen && document.fullscreenElement && document.exitFullscreen()')
    page.locator('[data-mode="down"]').click()
    shot(page, 'timer')

    print('Random Name Picker')
    page.goto(BASE + '/tools/random-name-picker/')
    page.wait_for_selector('#tl-app:not([hidden])')
    fill_class(page, NAMES[:6])
    check('6' in page.inner_text('.tl-cls-sum'), 'class list saved: ' + page.inner_text('.tl-cls-sum'))
    check(page.locator('.np-wheel').is_visible() and page.locator('.np-rot path').count() == 6, 'wheel with 6 slices')
    seen = []
    for i in range(6):
        page.locator('.np-pick').click(); page.wait_for_timeout(250)
        seen.append(page.inner_text('.np-result').strip())
    check(sorted(seen) == sorted(NAMES[:6]), 'six spins with no repeats pick the whole class once')
    check(page.locator('.np-pick').is_disabled() and page.locator('.np-restore').is_visible(), 'all picked: pick button off, "new round" shown')
    check(page.locator('.np-hist li').count() == 6, 'history has 6 names')
    page.locator('.np-restore').click()
    page.locator('[data-mode="simple"]').click(); page.fill('.np-kin', '3'); page.locator('.np-kin').dispatch_event('input')
    page.locator('.np-pick').click(); page.wait_for_timeout(300)
    lis = page.locator('.np-result li').all_inner_texts()
    check(len(lis) == 3 and len(set(lis)) == 3, 'quick pick of 3 different students: ' + ', '.join(lis))
    shot(page, 'picker')
    page.goto(BASE + '/vi/tien-ich/goi-ten-ngau-nhien/'); page.wait_for_selector('#tl-app:not([hidden])')
    check('6' in page.inner_text('.tl-cls-sum') and page.locator('.np-hist li').count() == 9, 'class and history kept on the Vietnamese page too')

    print('Random Group Maker')
    page.goto(BASE + '/vi/tien-ich/chia-nhom-ngau-nhien/'); page.wait_for_selector('#tl-app:not([hidden])')
    page.locator('.tl-cls-new').click()
    fill_class(page, NAMES)
    page.locator('[data-by="groups"]').click(); page.fill('.gm-n', '6'); page.locator('.gm-n').dispatch_event('input')
    check('2 nhóm 7 em, 4 nhóm 6 em' in page.inner_text('.gm-plan'), 'plan: ' + page.inner_text('.gm-plan'))
    page.locator('.gm-make').click()
    sizes = [page.locator('.gm-group[data-g="%d"] .gm-m' % i).count() for i in range(6)]
    members = page.locator('.gm-m').all_inner_texts()
    check(sorted(sizes, reverse=True) == [7, 7, 6, 6, 6, 6], '38 students in 6 groups: ' + str(sizes))
    check(sorted(members) == sorted(NAMES), 'every student exactly once (both students called An kept)')
    page.locator('.gm-group[data-g="0"] .gm-m').first.click()
    page.locator('.gm-group[data-g="1"] .gm-here').click()
    sizes2 = [page.locator('.gm-group[data-g="%d"] .gm-m' % i).count() for i in range(6)]
    check(sizes2[0] == sizes[0] - 1 and sizes2[1] == sizes[1] + 1 and sorted(page.locator('.gm-m').all_inner_texts()) == sorted(NAMES), 'tap, then "Move here" moves one student')
    page.fill('#gm-g0', 'Nhóm Chanh'); page.wait_for_timeout(100)
    page.reload(); page.wait_for_selector('#tl-app:not([hidden])')
    check(page.input_value('#gm-g0') == 'Nhóm Chanh' and page.locator('.gm-m').count() == 38, 'groups and names kept after a reload')
    page.locator('[data-by="size"]').click(); page.fill('.gm-n', '4'); page.locator('.gm-n').dispatch_event('input'); page.locator('.gm-make').click()
    sz = [page.locator('.gm-group[data-g="%d"] .gm-m' % i).count() for i in range(page.locator('.gm-group').count())]
    check(max(sz) <= 4 and max(sz) - min(sz) <= 1 and sum(sz) == 38, 'at most 4 per group: ' + str(sz))
    shot(page, 'groups')

    print('Phone and dark theme')
    ph = br.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=2, is_mobile=True, has_touch=True, reduced_motion='reduce').new_page()
    ph.on('pageerror', lambda e: errors.append(str(e)))
    for path, name in [('/vi/tien-ich/', 'hub-phone'), ('/vi/tien-ich/dong-ho-bam-gio/', 'timer-phone'), ('/vi/tien-ich/goi-ten-ngau-nhien/', 'picker-phone'), ('/vi/tien-ich/chia-nhom-ngau-nhien/', 'groups-phone')]:
        ph.goto(BASE + path); ph.wait_for_timeout(400)
        wide = ph.evaluate('document.documentElement.scrollWidth')
        check(wide <= 392, path + ': no sideways scrolling on a phone (' + str(wide) + ' px)')
        shot(ph, name)
    dk = br.new_context(viewport={'width': 1280, 'height': 900}, color_scheme='dark').new_page()
    dk.goto(BASE + '/vi/tien-ich/goi-ten-ngau-nhien/'); dk.wait_for_timeout(500); shot(dk, 'picker-dark')

    check(not errors, 'no script errors' + ('' if not errors else ': ' + ' | '.join(errors[:5])))
    br.close()
print('\n' + ('All checks passed.' if not bad else str(bad) + ' check(s) failed.'))
sys.exit(1 if bad else 0)
