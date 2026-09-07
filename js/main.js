/* Emmanuel Jimenez — portfolio behaviour. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  var CASES = {
    panahub: {
      kicker: 'Founder case study \u00b7 Digital product',
      name: 'PanaHub USA',
      claim: 'I founded it, branded it, designed it, built it, marketed it and produced the content.',
      role: 'Founder', year: '2026', org: 'PanaHub USA', disciplines: 'Brand \u00b7 Product \u00b7 Content',
      media: { type: 'video', src: 'videos/panahub-outro.mp4', w: 720, h: 1280, alt: 'PanaHub USA outro' },
      href: 'https://www.panahubusa.com/', cta: 'Visit panahubusa.com \u2192',
      sections: [
        ['The challenge', 'Start from nothing: no brand, no site, no audience, no content library \u2014 and end with a live platform people can actually use. Every discipline that a normal project splits across an agency team had to be handled by one person, in sequence, without the earlier decisions boxing in the later ones.'],
        ['My role', 'Founder and sole operator. Naming and brand identity; information architecture and interface design; the front-end build and launch; the marketing plan; and all the content produced for it. Nothing on this project was handed to me and nothing was handed off.'],
        ['The approach', 'Brand first, so every later decision had something to answer to. Then structure before styling \u2014 what a visitor needs in what order \u2014 and only then the interface. I used an AI-assisted workflow for design exploration and code, which compressed the build from months to weeks; the direction, structure, copy and every judgment call stayed mine. Content was produced in the same voice the brand was designed in, so the feed and the site read as one thing.'],
        ['The work', 'A live, shipped product at panahubusa.com \u2014 brand system, responsive site, and the launch content around it. Built with Claude Design, GitHub, Vercel and Supabase.'],
        ['The impact', 'Shipped and live. The strategic point of this project is not a metric: it is that concept, brand, design, build, launch and content came from one person, which is the exact combination most creative roles are trying to hire for and rarely find in a single candidate.']
      ],
      metrics: []
    },
    nasa: {
      kicker: 'Case study \u00b7 NASA education outreach',
      name: 'NASA \u00b7 Virginia Space Grant Consortium',
      claim: 'Recruitment content that turned social views into actual STEM applications.',
      role: 'Communication Media Specialist', year: '2024\u20132025', org: 'NASA VSGC', disciplines: 'Video \u00b7 Social \u00b7 UX writing',
      media: { type: 'video', src: 'videos/vsgc-outro-cta.mp4', w: 720, h: 1280, alt: 'VSGC outro CTA' },
      href: 'https://vsgc.odu.edu/', cta: 'Visit vsgc.odu.edu \u2192',
      sections: [
        ['The challenge', 'Space Grant programs are genuinely competitive and genuinely free, and students still were not applying. Two problems sat underneath that: the social content spoke like an institution, and the website buried the one program each student qualified for under an org chart.'],
        ['My role', 'Communication Media Specialist, 2024\u20132025. I produced and edited the recruitment video work, ran program social on Instagram and LinkedIn, and did the web content design and UX writing on the live consortium site.'],
        ['The approach', 'Lead with people, not the program \u2014 a real engineer on camera instead of a mission statement, and the parts of NASA that look genuinely cool rather than an explanation of why they matter. Cut in Premiere Pro and After Effects, sized per platform, with the application link as the only action in the post. On the site I added program overview pages for Virginia Space Coast Scholars and Virginia Aerospace Science and Technology Scholars, built daily-life and activities tabs so participants could see what the experience actually involves, added student-voice and alumni-story sections, and optimized the calls to action \u2014 all inside NASA partnership branding guidelines.'],
        ['The work', 'The Tyler Hutchison profile reel, the Gen Z STEM Takes Flight recruitment reel, the ongoing program social, and the live program pages on vsgc.odu.edu.'],
        ['The impact', 'The Tyler Hutchison reel drove 20 new program applicants from 28 link clicks, with a peak watch time of 36 minutes 23 seconds. The Gen Z recruitment reel became the most engaged post across every one of the program\u2019s social platforms.']
      ],
      metrics: [['20', 'New applicants'], ['28', 'Link clicks'], ['36:23', 'Peak watch time']]
    },
    tegna: {
      kicker: 'Case study \u00b7 Broadcast news',
      name: '13News Now \u00b7 ABC \u00b7 TEGNA',
      claim: 'Newsroom deadlines are the best editing school there is.',
      role: 'Photojournalist \u00b7 Editor', year: '2024', org: '13News Now (TEGNA)', disciplines: 'Photojournalism \u00b7 Editing',
      media: { type: 'image', src: 'images/feat-tegna.webp', alt: '13News Now broadcast work' },
      href: 'https://youtu.be/hcepfFBuhtI', cta: 'Watch an aired segment \u2192',
      sections: [
        ['The challenge', 'Air time does not move. Every package has to be shot, logged, written, cut and delivered to station standards inside a fixed window, and there is no second pass once it airs.'],
        ['My role', 'Photojournalist and editor \u2014 shooting in the field, then cutting segments and news packages for broadcast.'],
        ['The approach', 'Decide the story on location, not in the timeline. I learned to shoot for the edit \u2014 get the sequence, the sound and the one shot the story cannot work without \u2014 so the cut is assembly rather than rescue. That discipline is why my social work opens the way it does: a newsroom teaches you that if the first three seconds do not hold, nothing after them exists.'],
        ['The work', 'Aired segments and full news packages for 13News Now.'],
        ['The impact', 'Broadcast-standard work delivered on deadline, repeatedly \u2014 the credential that makes every faster, looser format afterward feel manageable.']
      ],
      metrics: []
    },
    manvel: {
      kicker: 'Creator brand case study',
      name: 'Manvel Jan',
      claim: 'A 12,000-follower audience built from zero, in a language I was still learning.',
      role: 'Creator \u00b7 Strategist \u00b7 Everything', year: 'Ongoing', org: 'Self-directed', disciplines: 'Strategy \u00b7 Video \u00b7 Community',
      media: { type: 'image', src: 'images/feat-manvel.webp', alt: 'Manvel Jan creator brand' },
      href: 'https://www.instagram.com/manveljan100/', cta: 'See the account \u2192',
      sections: [
        ['The challenge', 'Build an audience from nothing, with no crew, no budget and no existing following \u2014 and do it in a niche where I am the outsider. This is also my R&D: every format gets tested here before it is pitched to a client.'],
        ['My role', 'All of it. Strategy, on camera, shooting, editing, posting, captions, and the community management that keeps the whole thing running.'],
        ['The approach', 'A Panamanian-American learning Armenian in public \u2014 and letting the audience be the teacher rather than the spectator. Recurring formats so viewers know what they are returning for, a hook in the first second rather than an introduction, and a comment loop where corrections from Armenian viewers become the next video. Cultural and language storytelling is the subject, but the actual product is a person making progress in public, which is why people follow instead of just watching.'],
        ['The work', 'A vertical library across Instagram and TikTok \u2014 language attempts, culture pieces, food, singing, and the Panam\u00e1 \u00d7 Armenia comparisons nobody else can make.'],
        ['The impact', '12,000 Instagram followers and 141 published posts, with multiple TikToks gone viral. More useful than the follower count: it taught me the difference between content that performs and content that converts, which is the read I bring to client work.']
      ],
      metrics: [['12K', 'Followers'], ['141', 'Posts published'], ['3', 'Languages on camera']]
    },
    smile: {
      kicker: 'Case study \u00b7 Nonprofit',
      name: 'Operation Smile',
      claim: 'Stories that carry real weight, cut for the feed without becoming a pitch.',
      role: 'Social content producer', year: '2023', org: 'Operation Smile', disciplines: 'Social \u00b7 Content',
      media: { type: 'image', src: 'images/feat-smile.webp', alt: 'Operation Smile campaign' },
      href: 'https://www.instagram.com/reel/Cmeeurrr5Zj/', cta: 'Watch the piece \u2192',
      sections: [
        ['The challenge', 'Nonprofit social has to move people without exploiting them. The subject matter is patients and families, and the format is a platform built for entertainment \u2014 the tension between those two is the entire brief.'],
        ['My role', 'Social content producer \u2014 cutting and packaging the story for the feed.'],
        ['The approach', 'Let the person be a person. No dramatic music cue doing the emotional work, no narration explaining how to feel, and a pace that trusts the viewer. The ask comes last and comes once.'],
        ['The work', 'Social content built around patient stories for Operation Smile.'],
        ['The impact', 'Work that held its subject\u2019s dignity while still performing as social content \u2014 the balance most cause marketing gets wrong in one direction or the other.']
      ],
      metrics: []
    },
    ltr: {
      kicker: 'Case study \u00b7 Event & community',
      name: 'Love to Run Club',
      claim: 'Event coverage that recruits \u2014 the run itself does the selling.',
      role: 'Shooter \u00b7 Editor', year: '2026', org: '@lovetorun.club', disciplines: 'Event film \u00b7 Social',
      media: { type: 'video', src: 'videos/lovetorun-event.mp4', w: 576, h: 1024, alt: 'Love to Run Club event' },
      href: 'https://www.instagram.com/reel/Dau643lhpaR/', cta: 'Watch the reel \u2192',
      sections: [
        ['The challenge', 'A run club grows by making strangers believe they would be welcome. A promo video saying \u201cjoin us\u201d does not do that; showing what a Saturday actually feels like does.'],
        ['My role', 'Shooting on the day and cutting the piece.'],
        ['The approach', 'Cover it like an event, cut it like an invitation. Real faces, real pace, no voice-over \u2014 the energy of the group is the argument, so the edit gets out of its way.'],
        ['The work', 'A recruitment reel for the club\u2019s own feed.'],
        ['The impact', 'Community-facing content the club can post as recruitment rather than as an ad.']
      ],
      metrics: []
    }
  };

  var PROJECTS = [
    ['Tyler Hutchison reel', 'Video \u00b7 NASA VSGC \u00b7 2025', 'https://www.instagram.com/reel/DBGz6UDNxCT/', 'videography'],
    ['Gen Z recruitment reel', 'Video \u00b7 NASA VSGC \u00b7 2025', 'https://www.linkedin.com/feed/update/urn:li:activity:7458485879666364416', 'videography'],
    ['Mr. Shawarma commercial', 'Direction \u00b7 2026', 'https://ej26107c740.myportfolio.com/commercial-shoot-mr-shawarma', 'videography'],
    ['NASA VSGC \u2014 videography set', 'Videography \u00b7 2025', 'https://ej26107c740.myportfolio.com/videographyediting-2', 'videography'],
    ['Paving the Way', 'Field production \u00b7 NASA VSGC \u00b7 2024', 'https://ej26107c740.myportfolio.com/nasa-vsgc-paving-the-way', 'videography'],
    ['ABC 13 News \u2014 aired segment', 'Editing \u00b7 13News Now \u00b7 2024', 'https://youtu.be/hcepfFBuhtI', 'editing'],
    ['ABC 13 News \u2014 news package', 'Editing \u00b7 13News Now \u00b7 2024', 'https://youtu.be/lciCGKC5Rzw', 'editing'],
    ['ABC 13 News \u2014 on-air segments', 'Editing \u00b7 13News Now \u00b7 2024', 'https://ej26107c740.myportfolio.com/abc-13-news', 'editing'],
    ['VASTS Academy \u2014 full recap', 'Editing \u00b7 NASA \u00b7 2025', 'https://ej26107c740.myportfolio.com/nasa-vasts-academy-recap', 'editing'],
    ['VASTS Academy recap reel', 'Editing \u00b7 NASA \u00b7 2025', 'https://ej26107c740.myportfolio.com/nasa-academy-recap-reel', 'editing'],
    ['Manvel Jan \u2014 creator brand', 'Social \u00b7 Self-directed \u00b7 Ongoing', 'https://www.instagram.com/reel/DQw5MTekcks/', 'social'],
    ['Operation Smile campaign', 'Social \u00b7 2023', 'https://www.instagram.com/reel/Cmeeurrr5Zj/', 'social'],
    ['Love to Run Club \u2014 recruitment event', 'Event \u00b7 2026', 'https://www.instagram.com/reel/Dau643lhpaR/', 'social'],
    ['VSGC Summer Program call', 'Social \u00b7 LinkedIn \u00b7 2026', 'https://www.linkedin.com/posts/virginia-space-grant-consortium_applications-are-now-open-for-the-vsgc-summer-activity-7495842900665155584-JlgZ', 'social'],
    ['\u201cMic check\u201d \u2014 behind the scenes', 'Social \u00b7 LinkedIn \u00b7 2026', 'https://www.linkedin.com/posts/virginia-space-grant-consortium_mic-check-mic-check-am-i-doing-this-right-activity-7458485879666364416-dnTT', 'social'],
    ['VSGC feed post \u2014 spring campaign', 'Social \u00b7 LinkedIn \u00b7 2026', 'https://www.linkedin.com/feed/update/urn:li:activity:7491508117155909632', 'social'],
    ['VSGC feed post \u2014 program spotlight', 'Social \u00b7 LinkedIn \u00b7 2026', 'https://www.linkedin.com/feed/update/urn:li:activity:7486504678885662720', 'social'],
    ['YouTube Short \u2014 01', 'Social \u00b7 YouTube \u00b7 2026', 'https://youtube.com/shorts/jAdYlsKKhls', 'social'],
    ['YouTube Short \u2014 02', 'Social \u00b7 YouTube \u00b7 2026', 'https://youtube.com/shorts/yTTi_ejeO0s', 'social'],
    ['YouTube video', 'Social \u00b7 YouTube \u00b7 2026', 'https://youtu.be/mYvVR_SeZ5I', 'social'],
    ['Instagram post \u2014 01', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/p/DcOYHW5gBVH/', 'social'],
    ['Instagram carousel \u2014 02', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/p/Db-1M3eDfc0/', 'social'],
    ['Instagram carousel \u2014 03', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/p/DYE68wOkbBs/', 'social'],
    ['Instagram reel \u2014 04', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/reel/DWq3DVpgCUi/', 'social'],
    ['Instagram post \u2014 05', 'Social \u00b7 Instagram \u00b7 2025', 'https://www.instagram.com/p/DP1l-bGjQQP/', 'social'],
    ['Instagram reel \u2014 07', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/reel/DZw_wsHhMK7/', 'social'],
    ['Instagram post \u2014 08', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/p/DXsnz1BjIPG/', 'social'],
    ['Instagram reel \u2014 09', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/reel/DGBGqQdsId-/', 'social'],
    ['Instagram reel \u2014 10', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/reel/DLatnBLPyQC/', 'social'],
    ['Instagram reel \u2014 11', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/reel/Dcrs8WDygtz/', 'social'],
    ['Instagram reel \u2014 12', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/reel/Dc9wqzEyhBH/', 'social'],
    ['Instagram reel \u2014 13', 'Social \u00b7 Instagram \u00b7 2025', 'https://www.instagram.com/reel/DSYBbPZDz9E/', 'social'],
    ['Instagram carousel \u2014 14', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/p/DboI5IIkW9O/', 'social'],
    ['LinkedIn marketing', 'Marketing \u00b7 ODU \u00b7 2025', 'https://www.linkedin.com/posts/virginia-space-grant-consortium_looking-for-a-paid-stem-internship-this-activity-7264345360452534272-H2AN', 'marketing'],
    ['VSGC website contributions', 'UX \u00b7 NASA VSGC \u00b7 2024\u201325', 'https://vsgc.odu.edu/', 'design'],
    ['Children\u2019s book publisher site', 'Web design \u00b7 2025', 'https://www.curiousmindsexplorerspublishing.com/', 'design'],
    ['PanaHub USA', 'AI \u00b7 Web \u00b7 2026', 'https://www.panahubusa.com/', 'ai'],
    ['CapCut edit \u2014 01', 'AI \u00b7 Editing \u00b7 2026', 'https://www.instagram.com/reel/DZn_YNsJjcm/', 'ai'],
    ['CapCut edit \u2014 02', 'AI \u00b7 Editing \u00b7 2026', 'https://www.instagram.com/reel/DZ5zCiFpegh/', 'ai'],
    ['CapCut edit \u2014 03', 'AI \u00b7 Editing \u00b7 2026', 'https://www.instagram.com/reel/DXU7BYOiTjV/', 'ai'],
    ['Photography \u2014 2025', 'Photography \u00b7 2025', 'https://ej26107c740.myportfolio.com/photography-2', 'photo'],
    ['Disposable camera series', 'Photography \u00b7 2025', 'https://ej26107c740.myportfolio.com/disposable-camera', 'photo']
  ];

  var TOOLS = [
    ['tool-instagram', 'Instagram'], ['tool-meta', 'Meta'], ['tool-hootsuite', 'Hootsuite'],
    ['tool-claude', 'Claude Design'], ['tool-adobe', 'Adobe Creative Suite'], ['tool-premiere', 'Premiere Pro'],
    ['tool-tiktok', 'TikTok'], ['tool-youtube', 'YouTube'], ['tool-wordpress', 'WordPress'],
    ['tool-linkedin', 'LinkedIn'], ['tool-vercel', 'Vercel'], ['tool-capcut', 'CapCut AI'],
    ['tool-supabase', 'Supabase'], ['tool-github', 'GitHub'], ['tool-outlook', 'Outlook']
  ];

  var CATS = [
    ['videography', 'Videography'], ['editing', 'Editing'], ['social', 'Social'],
    ['marketing', 'Marketing'], ['design', 'UX & design'], ['ai', 'AI'], ['photo', 'Photography']
  ];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- platforms marquee ---------- */
  function initTools() {
    var rail = $('#toolrail');
    if (!rail) return;
    var cell = function (t, dupe) {
      return '<div class="mqcell"' + (dupe ? ' aria-hidden="true"' : '') + '>' +
        '<div class="mqmark"><img src="images/' + t[0] + '.webp" alt="' + (dupe ? '' : esc(t[1])) + '" loading="lazy"></div>' +
        '<div class="mqname">' + esc(t[1]) + '</div></div>';
    };
    rail.innerHTML = TOOLS.map(function (t) { return cell(t, false); }).join('') +
                     TOOLS.map(function (t) { return cell(t, true); }).join('');
  }

  /* ---------- archive ---------- */
  function renderArchive(cat) {
    var list = $('#archive-list');
    if (!list) return;
    var rows = PROJECTS.filter(function (p) { return p[3] === cat; });
    list.innerHTML = rows.map(function (p) {
      return '<div class="irow"><div><h3>' + esc(p[0]) + '</h3><p>' + esc(p[1]) + '</p></div>' +
        '<a class="tlink" style="font-size:10px" href="' + esc(p[2]) + '" target="_blank" rel="noopener">View \u2197</a></div>';
    }).join('');
    $$('#archive-chips .chip').forEach(function (c) {
      c.classList.toggle('is-on', c.dataset.cat === cat);
    });
  }

  function initArchive() {
    var chips = $('#archive-chips');
    var toggle = $('#archive-toggle');
    var body = $('#archive-body');
    var count = $('#archive-count');
    if (!chips || !toggle || !body) return;
    if (count) count.textContent = String(PROJECTS.length);

    chips.innerHTML = CATS.map(function (c) {
      var n = PROJECTS.filter(function (p) { return p[3] === c[0]; }).length;
      return '<button class="chip" type="button" data-cat="' + c[0] + '">' + esc(c[1]) + ' \u00b7 ' + n + '</button>';
    }).join('');
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('.chip');
      if (b) renderArchive(b.dataset.cat);
    });
    renderArchive('videography');

    toggle.addEventListener('click', function () {
      var open = body.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- overlays ---------- */
  var activeOvl = null;

  function openOvl(el) {
    if (activeOvl) closeOvl();
    activeOvl = el;
    el.classList.add('is-mounted');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () { el.classList.add('is-on'); });
    var x = $('.xbtn', el);
    if (x) x.focus();
  }

  function closeOvl() {
    if (!activeOvl) return;
    var el = activeOvl;
    activeOvl = null;
    el.classList.remove('is-on');
    document.body.style.overflow = '';
    $$('video, iframe', el).forEach(function (m) {
      if (m.tagName === 'VIDEO') { m.pause(); }
      else { var s = m.src; m.src = ''; m.src = s; }
    });
    var done = function () { el.classList.remove('is-mounted'); };
    if (reduced) done(); else setTimeout(done, 300);
  }

  function initOverlays() {
    $$('.ovl').forEach(function (o) {
      o.addEventListener('click', function (e) { if (e.target === o) closeOvl(); });
      var x = $('.xbtn', o);
      if (x) x.addEventListener('click', closeOvl);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeOvl(); });
  }

  /* ---------- showreel ---------- */
  function initShowreel() {
    var ovl = $('#showreel');
    var frame = $('#showreel-frame');
    if (!ovl || !frame) return;
    var id = frame.dataset.video;
    $$('[data-open-showreel]').forEach(function (b) {
      b.addEventListener('click', function () {
        frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
          '?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="Showreel" ' +
          'allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen ' +
          'style="width:100%;height:100%;border:0"></iframe>';
        openOvl(ovl);
      });
    });
  }

  /* ---------- case studies ---------- */
  function caseMedia(m) {
    if (!m) return '';
    if (m.type === 'video') {
      return '<div class="csmedia"><video src="' + esc(m.src) + '" width="' + m.w + '" height="' + m.h +
        '" controls playsinline preload="metadata" aria-label="' + esc(m.alt) + '"></video></div>';
    }
    return '<div class="csmedia"><img src="' + esc(m.src) + '" alt="' + esc(m.alt) + '" loading="lazy"></div>';
  }

  function initCases() {
    var ovl = $('#casestudy');
    var body = $('#casestudy-body');
    if (!ovl || !body) return;
    $$('[data-case]').forEach(function (card) {
      card.addEventListener('click', function () {
        var c = CASES[card.dataset.case];
        if (!c) return;
        var html = '<div class="sheet-in">' +
          '<div class="kick" style="margin-bottom:14px">' + esc(c.kicker) + '</div>' +
          '<h2>' + esc(c.name) + '</h2>' +
          '<p class="claim">' + esc(c.claim) + '</p>' +
          '<div class="csmeta">' +
            '<div><div class="lab">Role</div><div class="val">' + esc(c.role) + '</div></div>' +
            '<div><div class="lab">Year</div><div class="val">' + esc(c.year) + '</div></div>' +
            '<div><div class="lab">Organization</div><div class="val">' + esc(c.org) + '</div></div>' +
            '<div><div class="lab">Disciplines</div><div class="val">' + esc(c.disciplines) + '</div></div>' +
          '</div>' +
          caseMedia(c.media) +
          c.sections.map(function (s) {
            return '<div class="cssection"><div class="kick" style="margin-bottom:10px">' + esc(s[0]) +
              '</div><p>' + esc(s[1]) + '</p></div>';
          }).join('') +
          (c.metrics.length ? '<div class="metrics">' + c.metrics.map(function (m) {
            return '<div><div class="mnum">' + esc(m[0]) + '</div><div class="mlab">' + esc(m[1]) + '</div></div>';
          }).join('') + '</div>' : '') +
          '<div class="sheet-actions">' +
            '<a class="btn btn-primary" href="' + esc(c.href) + '" target="_blank" rel="noopener">' + esc(c.cta) + '</a>' +
            '<button class="btn btn-secondary" type="button" data-close>Close</button>' +
          '</div></div>';
        body.innerHTML = html;
        var cl = $('[data-close]', body);
        if (cl) cl.addEventListener('click', closeOvl);
        openOvl(ovl);
      });
    });
  }

  /* ---------- lightbox ---------- */
  function initLightbox() {
    var ovl = $('#lightbox');
    var body = $('#lightbox-body');
    if (!ovl || !body) return;
    $$('.gcell').forEach(function (cell) {
      cell.addEventListener('click', function () {
        var img = $('img', cell);
        if (!img) return;
        body.innerHTML = '<img src="' + esc(img.getAttribute('src')) + '" alt="' + esc(img.alt) + '">';
        openOvl(ovl);
      });
    });
  }

  /* ---------- scroll-driven: reveals, nav, progress, counters, video ---------- */
  function initScroll() {
    var sections = ['work', 'video', 'about', 'final'];
    var navMap = {};
    $$('.navlinks a').forEach(function (a) {
      var id = (a.getAttribute('href') || '').replace('#', '');
      if (id) navMap[id] = a;
    });

    var pending = $$('.reveal');
    if (!reduced && document.visibilityState === 'visible') {
      document.documentElement.classList.add('js-anim');
      pending.forEach(function (el, i) { el.style.transitionDelay = (Math.min(i, 4) * 70) + 'ms'; });
      setTimeout(showAll, 1400);
    } else {
      pending = [];
    }
    function showAll() {
      pending.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
      pending = [];
    }
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState !== 'visible') showAll();
    });

    var counters = $$('[data-count]').map(function (el) {
      var raw = (el.getAttribute('data-count') || '').trim();
      var m = raw.match(/([\d.]+)/);
      if (!m) return null;
      return {
        el: el, raw: raw, target: parseFloat(m[1]),
        pre: raw.slice(0, m.index), post: raw.slice(m.index + m[1].length), done: false
      };
    }).filter(Boolean);

    function runCount(c) {
      c.done = true;
      if (reduced) { c.el.textContent = c.raw; return; }
      var t0 = performance.now();
      var dec = c.target % 1 !== 0 ? 1 : 0;
      (function step(t) {
        var p = Math.min(1, (t - t0) / 1300);
        var e = 1 - Math.pow(1 - p, 3);
        c.el.textContent = c.pre + (c.target * e).toFixed(dec) + c.post;
        if (p < 1) requestAnimationFrame(step); else c.el.textContent = c.raw;
      })(t0);
    }

    var bar = $('#progress');
    var raf = 0;
    function measure() {
      raf = 0;
      var vh = window.innerHeight;

      if (pending.length) {
        var still = [];
        pending.forEach(function (el) {
          if (el.getBoundingClientRect().top < vh * 0.88) {
            el.style.opacity = '1';
            el.style.transform = 'none';
          } else still.push(el);
        });
        pending = still;
      }

      counters.forEach(function (c) {
        if (!c.done && c.el.getBoundingClientRect().top < vh * 0.9) runCount(c);
      });

      $$('video[data-loop]').forEach(function (v) {
        var r = v.getBoundingClientRect();
        var seen = r.bottom > 0 && r.top < vh && r.width > 0;
        if (seen && v.paused) { v.muted = true; v.play().catch(function () {}); }
        else if (!seen && !v.paused) v.pause();
      });

      var active = null;
      for (var i = 0; i < sections.length; i++) {
        var el = document.getElementById(sections[i]);
        if (!el) continue;
        var b = el.getBoundingClientRect();
        if (b.top <= 140 && b.bottom > 140) { active = sections[i]; break; }
      }
      Object.keys(navMap).forEach(function (k) { navMap[k].classList.toggle('is-active', k === active); });

      if (bar) {
        var doc = document.documentElement;
        var max = doc.scrollHeight - vh;
        bar.style.width = (max > 0 ? Math.min(100, Math.max(0, window.scrollY / max) * 100) : 0).toFixed(1) + '%';
      }
    }
    function schedule() {
      if (raf) return;
      raf = requestAnimationFrame(measure);
      // Fallback for throttled/backgrounded frames where rAF never fires.
      setTimeout(function () { if (raf) { cancelAnimationFrame(raf); measure(); } }, 120);
    }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('load', schedule);
    schedule();
  }

  function init() {
    var y = $('#year');
    if (y) y.textContent = String(new Date().getFullYear());
    initTools();
    initArchive();
    initOverlays();
    initCases();
    initLightbox();
    initScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
