// World Cup Watch — frontend logic (Arabic default + English, 2-day window)
(function () {
  'use strict';

  // ---------- Translations ----------
  const DICT = {
    ar: {
      title: 'كأس العالم 2026 — مواعيد المباريات والقنوات الناقلة | فين الماتش',
      hero_h1: 'كأس العالم 2026 — كل المباريات وأين تشاهدها',
      hero_sub: 'مواعيد اليوم وغداً بتوقيت {tz}. اختر بلدك لمعرفة القناة الناقلة لكل مباراة.',
      search_ph: 'ابحث عن منتخب (مثال: تونس، البرازيل)…',
      status_all: 'الكل',
      status_live: '🔴 مباشر',
      status_upcoming: 'القادمة',
      status_finished: 'انتهت',
      all_days: 'كل الأيام',
      today: 'اليوم',
      tomorrow: 'غداً',
      loading: 'جارٍ تحميل المباريات…',
      no_matches: 'لا توجد مباريات بهذا التصفية.',
      live_badge: '● مباشر',
      free: 'مجاني',
      tv: 'تلفزيون',
      stream: 'بث',
      no_broadcaster_card: 'لا توجد قناة مدرجة',
      no_broadcaster_country: 'لا توجد قناة ناقلة لهذا البلد بعد.',
      vs: 'ضد',
      where_to_watch: 'أين تشاهد في',
      watch_match: 'شاهد المباراة',
      add_calendar: 'أضِف إلى تقويمك',
      cal_google: '📅 جوجل',
      cal_ics: '🍎 آبل / أوتلوك (.ics)',
      country_label: 'بلدك',
      howto_h: 'كيفية استخدام الدليل',
      howto_p: 'اختر بلدك من الأعلى. لكل مباراة نعرض القنوات الرسمية الناقلة في بلدك — المجانية والمدفوعة. اضغط «أضِف إلى التقويم» لأي مباراة لإضافتها إلى تقويم جوجل أو آبل أو أوتلوك مع تذكير، حتى لا تفوتك انطلاقة المباراة.',
      about_h: 'عن كأس العالم 2026',
      about_p: 'كأس العالم 2026 هو أول بطولة تضم 48 منتخباً، تستضيفها الولايات المتحدة وكندا والمكسيك في صيف 2026 عبر 16 مدينة. هذا الموقع يجمع جدول مباريات اليوم وغداً في مكان واحد ويحوّل كل موعد إلى توقيتك المحلي تلقائياً.',
      footer_text: '⚽ فين الماتش — جدول مباريات كأس العالم 2026 ودليل القنوات الناقلة. غير مرتبط بالفيفا. قد تتغير حقوق البث؛ تحقق من قنواتك المحلية.',
      footer_about: 'حول',
      footer_privacy: 'سياسة الخصوصية',
      notice_sample: '⚙️ يتم عرض مباريات تجريبية — أضف مفتاح API المجاني في Cloudflare لعرض جدول كأس العالم الحقيقي.',
      load_error: 'تعذّر تحميل المباريات. افتح الموقع عبر عنوانه (مثل http://localhost:8788) وليس بالنقر المزدوج على الملف.',
    },
    en: {
      title: 'World Cup 2026 — Schedule & Where to Watch | Feen El Match',
      hero_h1: 'World Cup 2026 — every match, and where to watch it',
      hero_sub: "Today & tomorrow's kick-offs in {tz}. Pick your country to see which channel is showing each game.",
      search_ph: 'Search a team (e.g. Tunisia, Brazil)…',
      status_all: 'All',
      status_live: '🔴 Live',
      status_upcoming: 'Upcoming',
      status_finished: 'Finished',
      all_days: 'All days',
      today: 'Today',
      tomorrow: 'Tomorrow',
      loading: 'Loading matches…',
      no_matches: 'No matches for this filter.',
      live_badge: '● LIVE',
      free: 'FREE',
      tv: 'TV',
      stream: 'Stream',
      no_broadcaster_card: 'No broadcaster listed',
      no_broadcaster_country: 'No broadcaster listed for this country yet.',
      vs: 'vs',
      where_to_watch: 'Where to watch in',
      watch_match: 'Watch the match',
      add_calendar: 'Add to your calendar',
      cal_google: '📅 Google',
      cal_ics: '🍎 Apple / Outlook (.ics)',
      country_label: 'Your country',
      howto_h: 'How to use this guide',
      howto_p: 'Pick your country at the top. For every match we show the official broadcasters in your country — free-to-air and paid streaming. Tap “Add to calendar” on any match to drop it into Google, Apple or Outlook with a reminder.',
      about_h: 'About the 2026 World Cup',
      about_p: 'The 2026 FIFA World Cup is the first 48-team tournament, co-hosted by the USA, Canada and Mexico across 16 cities in summer 2026. This site keeps today and tomorrow’s schedule in one place and converts every kick-off to your local time automatically.',
      footer_text: '⚽ Feen El Match — World Cup 2026 schedule & TV guide. Not affiliated with FIFA. Broadcaster availability may change; check local listings.',
      footer_about: 'About',
      footer_privacy: 'Privacy Policy',
      notice_sample: '⚙️ Showing sample fixtures — add your free football API key in Cloudflare to load the real World Cup schedule.',
      load_error: 'Could not load matches. Open the site through its web address (e.g. http://localhost:8788), not by double-clicking the file.',
    },
  };

  // ---------- Arabic team names (keyed by football-data.org English name) ----------
  const TEAMS_AR = {
    'Algeria': 'الجزائر', 'Argentina': 'الأرجنتين', 'Australia': 'أستراليا', 'Austria': 'النمسا',
    'Belgium': 'بلجيكا', 'Bosnia-Herzegovina': 'البوسنة والهرسك', 'Brazil': 'البرازيل', 'Canada': 'كندا',
    'Cape Verde Islands': 'الرأس الأخضر', 'Colombia': 'كولومبيا', 'Congo DR': 'الكونغو الديمقراطية',
    'Croatia': 'كرواتيا', 'Curaçao': 'كوراساو', 'Czechia': 'التشيك', 'Ecuador': 'الإكوادور',
    'Egypt': 'مصر', 'England': 'إنجلترا', 'France': 'فرنسا', 'Germany': 'ألمانيا', 'Ghana': 'غانا',
    'Haiti': 'هايتي', 'Iran': 'إيران', 'Iraq': 'العراق', 'Ivory Coast': 'ساحل العاج', 'Japan': 'اليابان',
    'Jordan': 'الأردن', 'Mexico': 'المكسيك', 'Morocco': 'المغرب', 'Netherlands': 'هولندا',
    'New Zealand': 'نيوزيلندا', 'Norway': 'النرويج', 'Panama': 'بنما', 'Paraguay': 'باراغواي',
    'Portugal': 'البرتغال', 'Qatar': 'قطر', 'Saudi Arabia': 'السعودية', 'Scotland': 'اسكتلندا',
    'Senegal': 'السنغال', 'South Africa': 'جنوب أفريقيا', 'South Korea': 'كوريا الجنوبية', 'Spain': 'إسبانيا',
    'Sweden': 'السويد', 'Switzerland': 'سويسرا', 'TBD': 'يُحدد لاحقاً', 'Tunisia': 'تونس', 'Turkey': 'تركيا',
    'United States': 'الولايات المتحدة', 'Uruguay': 'الأوروغواي', 'Uzbekistan': 'أوزبكستان',
  };

  const state = {
    matches: [],
    countries: {},
    embeds: {}, // matchId -> video embed URL, from data/match-embeds.json
    country: localStorage.getItem('wcw_country') || null,
    lang: localStorage.getItem('wcw_lang') || 'ar', // Arabic default
    status: 'all',
    day: 'all',
    search: '',
  };

  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'local';
  const el = (id) => document.getElementById(id);
  const t = (k) => (DICT[state.lang] && DICT[state.lang][k]) || DICT.en[k] || k;
  const locale = () => (state.lang === 'ar' ? 'ar' : 'en');

  // ---------- Localized date helpers ----------
  const fmtTime = (d) => new Intl.DateTimeFormat(locale(), { hour: '2-digit', minute: '2-digit' }).format(d);
  const fmtDay = (d) => new Intl.DateTimeFormat(locale(), { weekday: 'short', day: 'numeric' }).format(d);
  const fmtFullDay = (d) => new Intl.DateTimeFormat(locale(), { weekday: 'long', month: 'long', day: 'numeric' }).format(d);
  const dayKey = (d) => d.toLocaleDateString('en-CA'); // stable internal YYYY-MM-DD (local time)
  const cName = (c) => (state.lang === 'ar' && c.nameAr ? c.nameAr : c.name);
  const tName = (team) => (state.lang === 'ar' && TEAMS_AR[team.name] ? TEAMS_AR[team.name] : team.name);

  // Keep only matches whose LOCAL day is today or tomorrow.
  function within2Days(matches) {
    const today = dayKey(new Date());
    const tomorrow = dayKey(new Date(Date.now() + 86400000));
    return matches.filter((m) => {
      const k = dayKey(new Date(m.utcDate));
      return k === today || k === tomorrow;
    });
  }

  // ---------- Static text / i18n ----------
  function applyI18n() {
    const html = document.documentElement;
    html.lang = state.lang;
    html.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      node.textContent = t(node.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-ph]').forEach((node) => {
      node.placeholder = t(node.getAttribute('data-i18n-ph'));
    });
    el('heroSub').textContent = t('hero_sub').replace('{tz}', tz);
    el('langToggle').textContent = state.lang === 'ar' ? 'EN' : 'ع';
  }

  // ---------- Theme ----------
  function initTheme() {
    const saved = localStorage.getItem('wcw_theme');
    const theme = saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    el('themeToggle').textContent = theme === 'light' ? '☀️' : '🌙';
  }
  el('themeToggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('wcw_theme', next);
    el('themeToggle').textContent = next === 'light' ? '☀️' : '🌙';
  });

  // ---------- Language toggle ----------
  el('langToggle').addEventListener('click', () => {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('wcw_lang', state.lang);
    state.day = 'all';
    applyI18n();
    buildCountrySelect();
    buildDayChips();
    render();
    injectEventSchema();
  });

  // ---------- Data ----------
  // Per-match videos live in a plain static file you edit by hand: data/match-embeds.json
  async function loadEmbeds() {
    try {
      const r = await fetch('/data/match-embeds.json', { cache: 'no-store' });
      if (r.ok) state.embeds = (await r.json()).embeds || {};
    } catch (e) {}
  }

  async function load() {
    await loadEmbeds();
    try {
      const res = await fetch('/api/matches');
      const data = await res.json();
      ingest(data.matches, data.countries, data.defaultCountry, data.source);
    } catch (e) {
      // Fallback: bundled JSON (e.g. opened as a file or static host without functions)
      try {
        const [bRes, mRes] = await Promise.all([
          fetch('/data/broadcasters.json'),
          fetch('/data/sample-matches.json'),
        ]);
        const b = await bRes.json();
        const sm = await mRes.json();
        ingest(sm, b.countries, b.defaultCountry, 'sample-fallback');
      } catch (e2) {
        el('matchList').innerHTML = `<div class="loading">${t('load_error')}</div>`;
      }
    }
  }

  function ingest(matches, countries, defaultCountry, source) {
    state.matches = within2Days((matches || []).slice()).sort(
      (a, b) => new Date(a.utcDate) - new Date(b.utcDate)
    );
    state.matches.forEach((m) => {
      m.embed = state.embeds[String(m.id)] || null;
    });
    state.countries = countries || {};
    if (!state.country || !state.countries[state.country]) state.country = defaultCountry || 'US';
    showSourceNotice(source);
    buildCountrySelect();
    buildDayChips();
    render();
    injectEventSchema();
  }

  function showSourceNotice(source) {
    const n = el('dataNotice');
    if (source && source !== 'live') {
      n.textContent = t('notice_sample');
      n.classList.remove('hidden');
    } else {
      n.classList.add('hidden');
    }
  }

  // ---------- Country picker ----------
  function buildCountrySelect() {
    const sel = el('countrySelect');
    const entries = Object.entries(state.countries).sort((a, b) =>
      cName(a[1]).localeCompare(cName(b[1]), locale())
    );
    sel.innerHTML = entries
      .map(([code, c]) => `<option value="${code}">${c.flag || ''} ${cName(c)}</option>`)
      .join('');
    if (state.countries[state.country]) sel.value = state.country;
    sel.onchange = () => {
      state.country = sel.value;
      localStorage.setItem('wcw_country', state.country);
      render();
    };
  }

  // ---------- Day chips (only today & tomorrow remain) ----------
  function dayLabel(key) {
    if (key === dayKey(new Date())) return t('today');
    if (key === dayKey(new Date(Date.now() + 86400000))) return t('tomorrow');
    return fmtDay(new Date(key + 'T12:00:00'));
  }
  function buildDayChips() {
    const days = [...new Set(state.matches.map((m) => dayKey(new Date(m.utcDate))))];
    const chips = [`<button class="chip active" data-day="all">${t('all_days')}</button>`];
    for (const d of days) chips.push(`<button class="chip" data-day="${d}">${dayLabel(d)}</button>`);
    const box = el('dayChips');
    box.innerHTML = chips.join('');
    box.onclick = (e) => {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      box.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
      btn.classList.add('active');
      state.day = btn.dataset.day;
      render();
    };
  }

  el('statusChips').addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    el('statusChips').querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
    btn.classList.add('active');
    state.status = btn.dataset.status;
    render();
  });

  el('search').addEventListener('input', (e) => {
    state.search = e.target.value.trim().toLowerCase();
    render();
  });

  // ---------- Filtering ----------
  function filtered() {
    return state.matches.filter((m) => {
      if (state.status !== 'all' && m.status !== state.status) return false;
      if (state.day !== 'all' && dayKey(new Date(m.utcDate)) !== state.day) return false;
      if (state.search) {
        const hay = [
          m.home.name, m.away.name, m.group || '',
          TEAMS_AR[m.home.name] || '', TEAMS_AR[m.away.name] || '',
        ].join(' ').toLowerCase();
        if (!hay.includes(state.search)) return false;
      }
      return true;
    });
  }

  // ---------- Render ----------
  function topBroadcaster() {
    const c = state.countries[state.country];
    if (!c || !c.broadcasters || !c.broadcasters.length) return null;
    return c.broadcasters.find((b) => b.free) || c.broadcasters[0];
  }

  function render() {
    const list = filtered();
    const container = el('matchList');
    if (!list.length) {
      container.innerHTML = `<div class="loading">${t('no_matches')}</div>`;
      return;
    }
    const groups = {};
    for (const m of list) {
      const k = dayKey(new Date(m.utcDate));
      (groups[k] = groups[k] || []).push(m);
    }
    const b = topBroadcaster();
    let html = '';
    for (const day of Object.keys(groups)) {
      html += `<div class="day-group"><h3>${dayLabel(day)} · ${fmtFullDay(new Date(day + 'T12:00:00'))}</h3>`;
      for (const m of groups[day]) html += card(m, b);
      html += '</div>';
    }
    container.innerHTML = html;
    container.querySelectorAll('.match-card').forEach((c) => {
      c.addEventListener('click', () => openDialog(c.dataset.id));
    });
  }

  function card(m, broadcaster) {
    const d = new Date(m.utcDate);
    const isLive = m.status === 'live';
    const showScore = isLive || m.status === 'finished';
    const timeHtml = isLive
      ? `<span class="badge-live">${t('live_badge')}</span>`
      : `<div class="t">${fmtTime(d)}</div><div class="d">${fmtDay(d)}</div>`;
    const score = (x) => (showScore && x != null ? `<span class="score">${x}</span>` : '');
    const country = state.countries[state.country];
    const flag = country ? country.flag || '' : '';
    const where = broadcaster
      ? `<div class="where-row"><span class="where-pill ${broadcaster.free ? 'free' : ''}">${flag} 📺 ${broadcaster.name}${broadcaster.free ? ' · ' + t('free') : ''}</span></div>`
      : `<div class="where-row"><span class="where-pill muted">${flag} ${t('no_broadcaster_card')}</span></div>`;
    return `
      <article class="match-card" data-id="${m.id}">
        <div class="match-time">${timeHtml}</div>
        <div class="teams">
          <div class="team-row">${crest(m.home)}<span>${tName(m.home)}</span>${score(m.score.home)}</div>
          <div class="team-row">${crest(m.away)}<span>${tName(m.away)}</span>${score(m.score.away)}</div>
          ${where}
        </div>
        <div class="match-meta"><span>${m.group || stageLabel(m.stage)}</span></div>
      </article>`;
  }

  function crest(team) {
    if (team.crest) return `<img class="team-crest" src="${team.crest}" alt="" loading="lazy" />`;
    return `<span class="team-code">${team.code || ''}</span>`;
  }

  function stageLabel(stage) {
    if (!stage) return '';
    return stage.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
  }

  // ---------- Dialog: where to watch + add to calendar ----------
  function openDialog(id) {
    const m = state.matches.find((x) => String(x.id) === String(id));
    if (!m) return;
    const d = new Date(m.utcDate);
    const c = state.countries[state.country];
    const bList = (c && c.broadcasters) || [];

    const tagText = (b) => (b.free ? t('free') : b.type === 'stream' ? t('stream') : t('tv'));
    const broadcasters = bList.length
      ? bList
          .map(
            (b) => `
          <a class="broadcaster" href="${b.url || '#'}" target="_blank" rel="noopener nofollow">
            <span>📺 ${b.name}</span>
            <span class="tag ${b.free ? 'free' : ''}">${tagText(b)}${b.language ? ' · ' + b.language : ''}</span>
          </a>`
          )
          .join('')
      : `<p class="dlg-sub">${t('no_broadcaster_country')}</p>`;

    // Per-match video (from data/match-embeds.json) → internal watch page.
    const watchUrl =
      `/watch.html?id=${encodeURIComponent(m.id)}` +
      `&h=${encodeURIComponent(tName(m.home))}&a=${encodeURIComponent(tName(m.away))}` +
      `&t=${encodeURIComponent(m.utcDate)}&g=${encodeURIComponent(m.group || stageLabel(m.stage) || '')}`;
    const watchBtn = m.embed
      ? `<a class="watch-cta" href="${watchUrl}">▶️ ${t('watch_match')}</a>`
      : '';

    el('dialogBody').innerHTML = `
      <div class="dlg-head">
        <div class="dlg-sub">${m.group || stageLabel(m.stage)}${m.venue ? ' · ' + m.venue : ''} <span style="opacity:.45">· #${m.id}</span></div>
        <div class="dlg-teams">${tName(m.home)} <span style="opacity:.5">${t('vs')}</span> ${tName(m.away)}</div>
        <div class="dlg-sub">${fmtFullDay(d)} · ${fmtTime(d)} (${tz})</div>
      </div>
      ${watchBtn}
      <div class="dlg-section-title">${t('where_to_watch')} ${c ? c.flag + ' ' + cName(c) : ''}</div>
      <div class="broadcaster-list">${broadcasters}</div>
      <div class="dlg-section-title">${t('add_calendar')}</div>
      <div class="cal-buttons">
        <a class="cal-btn" id="gcalBtn" target="_blank" rel="noopener">${t('cal_google')}</a>
        <button class="cal-btn" id="icsBtn">${t('cal_ics')}</button>
      </div>`;

    const title = `World Cup: ${m.home.name} vs ${m.away.name}`;
    const details = `${m.group || stageLabel(m.stage)}${m.venue ? ' at ' + m.venue : ''}.`;
    const start = d;
    const end = new Date(d.getTime() + 2 * 60 * 60 * 1000);
    el('gcalBtn').href = googleCalUrl(title, details, m.venue || '', start, end);
    el('icsBtn').addEventListener('click', () => downloadIcs(title, details, m.venue || '', start, end, m.id));

    el('matchDialog').showModal();
  }

  el('dialogClose').addEventListener('click', () => el('matchDialog').close());
  el('matchDialog').addEventListener('click', (e) => {
    if (e.target === el('matchDialog')) el('matchDialog').close();
  });

  function fmtICSDate(d) {
    return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  }
  function googleCalUrl(title, details, location, start, end) {
    const p = new URLSearchParams({
      action: 'TEMPLATE',
      text: title,
      details: details,
      location: location,
      dates: `${fmtICSDate(start)}/${fmtICSDate(end)}`,
    });
    return `https://calendar.google.com/calendar/render?${p.toString()}`;
  }
  function downloadIcs(title, details, location, start, end, id) {
    const ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//WorldCupWatch//EN',
      'BEGIN:VEVENT', `UID:wcw-${id}@worldcupwatch`,
      `DTSTAMP:${fmtICSDate(new Date())}`,
      `DTSTART:${fmtICSDate(start)}`, `DTEND:${fmtICSDate(end)}`,
      `SUMMARY:${title}`, `DESCRIPTION:${details}`, `LOCATION:${location}`,
      'BEGIN:VALARM', 'TRIGGER:-PT30M', 'ACTION:DISPLAY', 'DESCRIPTION:Match starting soon',
      'END:VALARM', 'END:VEVENT', 'END:VCALENDAR',
    ].join('\r\n');
    const blob = new Blob([ics], { type: 'text/calendar' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `match-${id}.ics`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // ---------- SportsEvent structured data (rich results) ----------
  function injectEventSchema() {
    const old = document.getElementById('event-schema');
    if (old) old.remove();
    if (!state.matches.length) return;
    const items = state.matches.slice(0, 25).map((m, i) => {
      const start = new Date(m.utcDate);
      const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
      const teams = [
        { '@type': 'SportsTeam', name: tName(m.home) },
        { '@type': 'SportsTeam', name: tName(m.away) },
      ];
      const ev = {
        '@type': 'SportsEvent',
        name: `${tName(m.home)} ${t('vs')} ${tName(m.away)}`,
        description: `مباراة ${tName(m.home)} ضد ${tName(m.away)} في كأس العالم 2026${m.group ? ' — ' + m.group : ''}.`,
        startDate: m.utcDate,
        endDate: end.toISOString(),
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        sport: 'Football',
        // location is REQUIRED by Google — always provide one (fallback to host nations)
        location: {
          '@type': 'Place',
          name: m.venue || 'كأس العالم 2026',
          address: m.venue || 'United States, Canada & Mexico',
        },
        organizer: { '@type': 'Organization', name: 'FIFA', url: 'https://www.fifa.com' },
        performer: teams,
        competitor: teams,
      };
      const imgs = [m.home.crest, m.away.crest].filter(Boolean);
      if (imgs.length) ev.image = imgs;
      return { '@type': 'ListItem', position: i + 1, item: ev };
    });
    const data = { '@context': 'https://schema.org', '@type': 'ItemList', name: 'كأس العالم 2026', itemListElement: items };
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'event-schema';
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  // ---------- Boot ----------
  // Ads are handled by the Adcash Auto-Tag script in index.html <head>.
  initTheme();
  applyI18n();
  load();
})();
