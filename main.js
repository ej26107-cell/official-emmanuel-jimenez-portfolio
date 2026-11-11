/* Emmanuel Jimenez — portfolio v2 behaviour. Vanilla JS + GSAP/ScrollTrigger (optional: everything works without them). */
(function () {
  'use strict';

  var CASES = {
    panahub: {
      kicker: 'Founder \u00b7 Digital platform', name: 'PanaHub USA', sub: 'A digital platform I founded and built',
      summary: 'I took PanaHub from an idea to a live platform: the brand, the website, the content, and the audience around it.',
      handled: ['Founding and direction', 'Naming and brand identity', 'Content production', 'Audience growth and community outreach', 'Website design and development'],
      metrics: [['10K+', 'Followers'], ['1M', 'Views']],
      meta: [['Role', 'Founder'], ['Year', '2026'], ['Built with', 'Claude \u00b7 GitHub \u00b7 Vercel \u00b7 Supabase']],
      media: { type: 'ig', id: 'DdbbOYdyCvt', kind: 'p', label: 'PanaHub USA', title: 'PanaHub USA on Instagram' },
      cta: ['Visit panahubusa.com', 'https://www.panahubusa.com/'],
      overview: 'PanaHub USA is a digital platform I founded and run, live at panahubusa.com. It combines a website with social content and community outreach under one brand.',
      challenge: 'Start from nothing \u2014 no brand, no site, no audience, no content library \u2014 and end with a live platform people use. The work an agency would split across a team had to happen in sequence, without early decisions boxing in later ones.',
      role: 'Founder and sole operator. I named it, built the brand identity, designed and developed the website, produced the content, and ran audience growth and community outreach. No agency or team; each stage was mine.',
      approach: 'Brand first, so every later decision had something to answer to. Then structure before styling: what a visitor needs, in what order. I used an AI-assisted workflow (Claude, GitHub, Vercel, Supabase) to speed up design exploration and code; direction, structure, copy and judgment calls stayed with me. Content was made in the same voice as the brand, so the feed and the site read as one thing.',
      work: [['panahubusa.com \u2014 the live platform', 'https://www.panahubusa.com/'], ['PanaHub USA on Instagram', 'https://www.instagram.com/p/DdbbOYdyCvt/']],
      results: 'PanaHub has reached 10K+ followers and 1M views.',
      lessons: 'Settling the brand before the build gave every later choice \u2014 layout, copy, content \u2014 a reference point, and made it faster to say no to ideas that did not fit.'
    },
    vsgc: {
      kicker: 'Media Specialist and Website Support \u00b7 2024\u2013present', name: 'Virginia Space Grant Consortium', sub: 'NASA-supported programs',
      summary: 'I produce the video, social and web content that helps Virginia students find VSGC programs \u2014 and coordinate the people who make it.',
      handled: ['STEM storytelling and video production', '15+ interviews with subject-matter experts', 'Recruitment communications on Instagram, Facebook and LinkedIn', 'Website support on vsgc.odu.edu (WordPress)', 'Directing 4 interns; coordinating with program staff'],
      metrics: [['~40%', 'Follower growth'], ['~25%', 'Engagement growth']],
      meta: [['Role', 'Media Specialist and Website Support'], ['Years', '2024\u2013present'], ['Tools', 'Premiere Pro \u00b7 After Effects \u00b7 WordPress']],
      media: { type: 'yt', id: 'upbBS0u--pA', label: 'Drone Day: STEM event recap for VSGC' },
      cta: ['Visit vsgc.odu.edu', 'https://vsgc.odu.edu/'],
      overview: 'VSGC runs NASA-supported scholarship, internship and academy programs for Virginia students. My audience is students and the people who influence where they apply.',
      challenge: 'The programs are competitive and worth applying to, but the social content spoke like an institution and the website buried each program under an org chart. Students needed to see themselves in the work, and find the right program fast.',
      role: 'Media Specialist. I produce and edit the video, run program social on Instagram, Facebook and LinkedIn, and support the WordPress site. I direct a team of four interns, schedule and conduct interviews with subject-matter experts, and work with program staff on what each campaign needs to say.',
      approach: 'Lead with people, not the program: a real engineer or student on camera instead of a mission statement. Cut in Premiere Pro and After Effects, sized for each platform, with the application link as the one action. On the site I added program overview pages for Virginia Space Coast Scholars and VASTS, daily-life and activities tabs, student-voice and alumni sections, and clearer calls to action \u2014 all within NASA partnership brand guidelines.',
      work: [['Tyler Hutchison \u2014 engineer profile reel', 'https://www.instagram.com/reel/DBGz6UDNxCT/'], ['Gen Z recruitment reel', 'https://www.linkedin.com/feed/update/urn:li:activity:7458485879666364416'], ['Drone Day \u2014 STEM event recap', 'https://youtu.be/upbBS0u--pA'], ['Paving the Way \u2014 field production', 'https://ej26107c740.myportfolio.com/nasa-vsgc-paving-the-way'], ['VASTS Academy recap', 'https://ej26107c740.myportfolio.com/nasa-vasts-academy-recap'], ['Program pages on vsgc.odu.edu', 'https://vsgc.odu.edu/']],
      results: 'About 40% follower growth and about 25% engagement growth across the program\u2019s social channels. The video and web work supported VSGC\u2019s recruitment campaigns.',
      lessons: 'People follow people. A student or engineer on camera did more for a program than any description of it.'
    },
    tegna: {
      kicker: 'Photojournalist and Video Editor \u00b7 2023\u201324', name: '13News Now', sub: 'WVEC \u00b7 ABC affiliate \u00b7 TEGNA \u00b7 Norfolk, Virginia',
      summary: 'A year shooting and editing local news to air deadlines \u2014 300+ packages for broadcast and digital.',
      handled: ['Field shooting on Sony FS5 / FS7', 'Editing on Edius', 'Original stories for broadcast and digital', 'Same-day delivery to air deadlines'],
      metrics: [['300+', 'News packages']],
      meta: [['Role', 'Photojournalist and Video Editor'], ['Years', '2023\u201324'], ['Station', '13News Now (WVEC)']],
      media: { type: 'yt', id: 'hcepfFBuhtI', label: '13News Now aired segment' },
      cta: ['Watch an aired segment', 'https://youtu.be/hcepfFBuhtI'],
      overview: 'Local news for Hampton Roads viewers, on air and online.',
      challenge: 'Air time does not move. Every package has to be shot, logged, cut and delivered to station standards inside a fixed window, with no second pass once it airs.',
      role: 'Photojournalist. I shot in the field, edited segments and packages, and produced original stories for broadcast and digital alongside the station\u2019s reporters.',
      approach: 'Decide the story on location, not in the timeline. Shoot for the edit \u2014 the sequence, the sound, and the one shot the story cannot work without \u2014 so the cut is assembly, not rescue.',
      work: [['Aired segment', 'https://youtu.be/hcepfFBuhtI'], ['Edited news package', 'https://youtu.be/lciCGKC5Rzw'], ['More on-air segments', 'https://ej26107c740.myportfolio.com/abc-13-news']],
      results: '300+ broadcast and digital news packages, delivered to deadline.',
      lessons: 'If the first three seconds do not hold, nothing after them exists. That newsroom habit is why my social work opens the way it does.'
    },
    manvel: {
      kicker: 'Content Creation and Production \u00b7 2025\u2013present', name: 'Manvel Jan', sub: 'A Latino-American learning Armenian in public',
      summary: 'My own channel: language-learning and culture content for audiences across the Latino-American and Armenian communities.',
      handled: ['Concept and content strategy', 'Scripting', 'Filming and hosting', 'Editing and captions', 'Community management', 'Brand collaborations'],
      metrics: [['10K+', 'Followers in ~7 months']],
      meta: [['Role', 'Content Creation and Production'], ['Since', '2025'], ['Platforms', 'Instagram \u00b7 TikTok']],
      media: { type: 'ig', id: 'DQw5MTekcks', label: 'Manvel Jan', title: 'Learning Armenian as a Spanish speaker' },
      cta: ['See @manveljan100 on Instagram', 'https://www.instagram.com/manveljan100/'],
      overview: 'Short-form video on Instagram and TikTok about learning Armenian as a Spanish and English speaker \u2014 language, culture, food, and the Panam\u00e1-to-Armenia comparisons only I can make.',
      challenge: 'Build an audience with no crew, no budget and no existing following, in a niche where I am the outsider.',
      role: 'Everything: strategy, scripting, filming, hosting, editing, captions and community management. I also work with culturally aligned brands on collaborations.',
      approach: 'Learn in public and let the audience be the teacher. Recurring formats so viewers know what they are coming back for, a hook in the first second, and a comment loop where corrections from Armenian viewers become the next video.',
      work: [['Instagram \u2014 @manveljan100', 'https://www.instagram.com/manveljan100/'], ['TikTok \u2014 @emanjz23', 'https://www.tiktok.com/@emanjz23'], ['Reel \u2014 learning Armenian', 'https://www.instagram.com/reel/DQw5MTekcks/']],
      results: '10K+ followers in about seven months, plus brand collaborations.',
      lessons: 'It taught me the difference between content that gets views and content that gets people to act \u2014 and it is where I test formats before using them for clients.'
    },
    smile: {
      kicker: 'Marketing Intern \u00b7 2022\u201323', name: 'Operation Smile', sub: 'International Learning Center',
      summary: 'Gathering first-person stories from visitors to Operation Smile\u2019s International Learning Center and turning them into newsletter, intranet and social content.',
      handled: ['Tour and event photography', 'Guest interviews, quotes and testimonials', 'Newsletter writing', 'Consent forms and release records', 'Social research and analytics', 'Video editing and scriptwriting support'],
      metrics: [],
      deliverables: 'Newsletter stories, consented guest testimonials, event photography',
      meta: [['Role', 'Marketing Intern'], ['Years', '2022\u201323'], ['Team', 'International Learning Center']],
      media: { type: 'ig', id: 'Cmeeurrr5Zj', label: 'Operation Smile', title: 'Story for ILC social' },
      cta: ['Watch the piece on Instagram', 'https://www.instagram.com/reel/Cmeeurrr5Zj/'],
      overview: 'Content for ILC visitors, staff and supporters \u2014 the newsletter, intranet pages and ILC social channels.',
      challenge: 'Nonprofit storytelling has to move people without exploiting them. Every story started with a real person on a tour, and every one needed their consent.',
      role: 'Marketing intern on the ILC team. I photographed tours and events, interviewed guests for quotes and testimonials, helped write newsletter articles, collected and filed consent forms, researched social trends and pulled analytics, and assisted with video editing and scripts.',
      approach: 'Let the person be a person: ask open questions, get consent first, and let their own words carry the story instead of narration telling the viewer how to feel.',
      work: [['ILC social reel', 'https://www.instagram.com/reel/Cmeeurrr5Zj/']],
      results: 'A steady supply of consented, first-person stories the team could use across the newsletter, intranet and social.',
      lessons: 'Consent is not paperwork \u2014 it is what makes a story safe to tell, and it makes people more open on camera.'
    },
    ltr: {
      kicker: 'Brand Growth, Outreach and Community Engagement \u00b7 2025\u2013present', name: 'Love to Run Club', sub: 'Community running club',
      summary: 'I run the club\u2019s social media: weekly coverage of group runs and events, and the content calendar behind it.',
      handled: ['Social strategy on Instagram, TikTok and Facebook', 'Weekly photo and video from runs and events', 'Monthly content calendars around local races', 'Replies to DMs, comments and UGC within 24 hours', 'Influencer and local brand partnerships'],
      metrics: [],
      deliverables: 'Weekly event coverage, monthly content calendars, a recruitment reel',
      meta: [['Role', 'Brand Growth, Outreach and Community Engagement'], ['Since', '2025'], ['Account', '@lovetorun.club']],
      media: { type: 'ig', id: 'Dau643lhpaR', label: 'Love to Run Club', title: 'Group run recruitment reel' },
      cta: ['Watch the recruitment reel', 'https://www.instagram.com/reel/Dau643lhpaR/'],
      overview: 'Runners in the community \u2014 and people who have not joined a group run yet.',
      challenge: 'A run club grows by making strangers believe they would be welcome. A promo saying \u201cjoin us\u201d does not do that; showing what a Saturday actually feels like does.',
      role: 'Social Media Manager. I plan, shoot, edit and publish, manage the community, and coordinate partnerships with local fitness brands and influencers.',
      approach: 'Cover it like an event, cut it like an invitation. Real faces, real pace, no voice-over. Plan the month around the local race calendar so content lands when people are deciding to sign up.',
      work: [['Recruitment reel', 'https://www.instagram.com/reel/Dau643lhpaR/']],
      results: 'A consistent weekly presence and a calendar that lines up with the local race season.',
      lessons: 'The energy of the group sells better than any voice-over \u2014 the edit\u2019s job is to get out of its way.'
    }
  };

  CASES.podcast = {
    kicker: 'Podcast Production', name: 'Podcast series', sub: 'Producer \u00b7 Videographer \u00b7 Editor',
    summary: 'Shot, edited, and produced this podcast series, bringing together filming, production coordination, and post-production to deliver the finished episodes.',
    handled: ['Filming', 'Production coordination', 'Post-production and editing'],
    metrics: [], deliverables: 'Finished podcast episodes',
    meta: [['Role', 'Producer \u00b7 Videographer \u00b7 Editor'], ['Category', 'Podcast Production']],
    media: { type: 'yt', id: 'hu-pjHGAsdw', start: 9, label: 'Podcast series episode' },
    cta: ['Watch on YouTube', 'https://www.youtube.com/watch?v=hu-pjHGAsdw&t=9s'],
    role: 'Producer, videographer and editor: I shot, edited, and produced the series, from filming and production coordination through post-production.',
    episodes: [['hu-pjHGAsdw', 9, 'Episode'], ['FsiPImnQeXs', 221, 'Episode']],
    work: [['Episode on YouTube', 'https://www.youtube.com/watch?v=hu-pjHGAsdw&t=9s'], ['Episode on YouTube', 'https://www.youtube.com/watch?v=FsiPImnQeXs&t=221s']]
  };

  var REELS = [
    ['DQw5MTekcks', 'Manvel Jan', 'Learning Armenian as a Spanish speaker', 'Scripting \u00b7 Filming \u00b7 Hosting \u00b7 Editing'],
    ['Dau643lhpaR', 'Love to Run Club', 'Group run recruitment reel', 'Filming \u00b7 Editing'],
    ['Dcrs8WDygtz', 'Manvel Jan', 'Armenian culture for Latino audiences', 'Scripting \u00b7 Filming \u00b7 Hosting \u00b7 Editing'],
    ['DZn_YNsJjcm', 'AI editing', 'AI-assisted edit in CapCut', 'Editing'],
    ['Dc9wqzEyhBH', 'Manvel Jan', 'Armenian language tip', 'Scripting \u00b7 Filming \u00b7 Hosting \u00b7 Editing'],
    ['DLatnBLPyQC', 'Manvel Jan', 'Panam\u00e1 \u00d7 Armenia, side by side', 'Scripting \u00b7 Filming \u00b7 Hosting \u00b7 Editing'],
    ['Cmeeurrr5Zj', 'Operation Smile', 'Story for the ILC social channels', 'Editing support']
  ];

  var PROJECTS = [
    ['Tyler Hutchison reel', 'Video \u00b7 VSGC \u00b7 2025', 'https://www.instagram.com/reel/DBGz6UDNxCT/', 'videography'],
    ['Gen Z recruitment reel', 'Video \u00b7 VSGC \u00b7 2025', 'https://www.linkedin.com/feed/update/urn:li:activity:7458485879666364416', 'videography'],
    ['Mr. Shawarma commercial', 'Direction \u00b7 2026', 'https://ej26107c740.myportfolio.com/commercial-shoot-mr-shawarma', 'videography'],
    ['VSGC \u2014 videography set', 'Videography \u00b7 2025', 'https://ej26107c740.myportfolio.com/videographyediting-2', 'videography'],
    ['Paving the Way', 'Field production \u00b7 VSGC \u00b7 2024', 'https://ej26107c740.myportfolio.com/nasa-vsgc-paving-the-way', 'videography'],
    ['13News Now \u2014 aired segment', 'Editing \u00b7 13News Now \u00b7 2024', 'https://youtu.be/hcepfFBuhtI', 'editing'],
    ['13News Now \u2014 news package', 'Editing \u00b7 13News Now \u00b7 2024', 'https://youtu.be/lciCGKC5Rzw', 'editing'],
    ['13News Now \u2014 on-air segments', 'Editing \u00b7 13News Now \u00b7 2024', 'https://ej26107c740.myportfolio.com/abc-13-news', 'editing'],
    ['VASTS Academy \u2014 full recap', 'Editing \u00b7 VSGC \u00b7 2025', 'https://ej26107c740.myportfolio.com/nasa-vasts-academy-recap', 'editing'],
    ['VASTS Academy recap reel', 'Editing \u00b7 VSGC \u00b7 2025', 'https://ej26107c740.myportfolio.com/nasa-academy-recap-reel', 'editing'],
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
    ['Drone Day \u2014 STEM event recap', 'Video \u00b7 VSGC', 'https://youtu.be/upbBS0u--pA', 'videography'],
    ['Podcast series \u2014 episode', 'Podcast Production', 'https://www.youtube.com/watch?v=hu-pjHGAsdw&t=9s', 'videography'],
    ['Podcast series \u2014 episode', 'Podcast Production', 'https://www.youtube.com/watch?v=FsiPImnQeXs&t=221s', 'videography'],
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
    ['VSGC website contributions', 'UX \u00b7 VSGC \u00b7 2024\u201325', 'https://vsgc.odu.edu/', 'design'],
    ['Children\u2019s book publisher site', 'Web design \u00b7 2025', 'https://www.curiousmindsexplorerspublishing.com/', 'design'],
    ['PanaHub USA', 'AI \u00b7 Web \u00b7 2026', 'https://www.panahubusa.com/', 'ai'],
    ['PanaHub USA \u2014 Instagram post', 'Social \u00b7 Instagram \u00b7 2026', 'https://www.instagram.com/p/DdbbOYdyCvt/', 'social'],
    ['AI-assisted edit in CapCut \u2014 01', 'AI \u00b7 Editing \u00b7 2026', 'https://www.instagram.com/reel/DZn_YNsJjcm/', 'ai'],
    ['AI-assisted edit in CapCut \u2014 02', 'AI \u00b7 Editing \u00b7 2026', 'https://www.instagram.com/reel/DZ5zCiFpegh/', 'ai'],
    ['AI-assisted edit in CapCut \u2014 03', 'AI \u00b7 Editing \u00b7 2026', 'https://www.instagram.com/reel/DXU7BYOiTjV/', 'ai'],
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

  /* ---------- platforms marquee ---------- */
  function initTools() {
    var rail = $('#toolrail');
    if (!rail) return;
    var cell = function (t, dupe) {
      return '<div class="mqcell"' + (dupe ? ' aria-hidden="true"' : '') + '>' +
        '<div class="mqmark"><img src="images/' + t[0] + '.webp" alt="" loading="lazy"></div>' +
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


  var ORDER = ['panahub', 'vsgc', 'tegna', 'manvel', 'smile', 'ltr', 'podcast'];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var G = window.gsap, ST = window.ScrollTrigger;
  var motion = !reduced && document.documentElement.classList.contains('motion');
  var gs = !!(G && ST) && !reduced;
  var EASE = 'expo.out', EASE_IO = 'expo.inOut', DUR = 0.9;
  var BASE_TITLE = document.title;

  /* ---------- click-to-load players ---------- */
  function mountPlayer(p, quiet) {
    if (!p || p.dataset.mounted) return;
    if (location.protocol === 'file:') {
      // Embedded players refuse to load from a local file (no page origin). Open the video on its site instead.
      var ext = p.dataset.yt ? 'https://www.youtube.com/watch?v=' + p.dataset.yt + (p.dataset.start ? '&t=' + p.dataset.start + 's' : '') : (p.dataset.embed || '').replace(/\/embed\/?$/, '/');
      if (!quiet && ext) window.open(ext, '_blank', 'noopener');
      return;
    }
    var src = p.dataset.yt ? 'https://www.youtube-nocookie.com/embed/' + p.dataset.yt + '?autoplay=1&rel=0&playsinline=1' + (p.dataset.start ? '&start=' + p.dataset.start : '') : p.dataset.embed;
    if (!src) return;
    p.dataset.mounted = '1';
    p.innerHTML = '<iframe src="' + esc(src) + '" title="' + esc(p.dataset.title || 'Video') + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>';
    if (!quiet) { var f = $('iframe', p); if (f) f.focus(); }
  }
  function igPlayer(id, label, title, kind, auto) {
    return '<div class="player v"' + (auto ? ' data-autoload' : '') + ' data-embed="https://www.instagram.com/' + (kind || 'reel') + '/' + esc(id) + '/embed" data-title="' + esc(title) + '">' +
      '<button class="vposter" type="button" data-play aria-label="Play: ' + esc(title) + '">' +
      '<span class="vpk">' + esc(label) + '</span><span class="vplay">\u25b6 Play</span></button></div>';
  }
  function ytPlayer(id, title, start) {
    return '<div class="player h" data-yt="' + esc(id) + '"' + (start ? ' data-start="' + (+start) + '"' : '') + ' data-title="' + esc(title) + '">' +
      '<button class="ytcard" type="button" data-play data-cursor="Play" aria-label="Play: ' + esc(title) + '">' +
      '<img src="https://i.ytimg.com/vi/' + esc(id) + '/maxresdefault.jpg" onerror="this.onerror=null;this.src=\'https://i.ytimg.com/vi/' + esc(id) + '/hqdefault.jpg\'" alt="" loading="lazy" width="1280" height="720">' +
      '<span class="ytplay"><span>\u25b6 Play</span></span></button></div>';
  }
  function filePlayer(src, label) {
    return '<div class="player v"><div class="flabel">' + esc(label) + '</div>' +
      '<video class="file" src="' + esc(src) + '" controls playsinline preload="none" aria-label="' + esc(label) + ' video"></video></div>';
  }
  function initPlayers() {
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-play]');
      if (b) { mountPlayer(b.closest('.player')); return; }
      var t = e.target.closest('[data-play-target]');
      if (t) {
        var p = document.getElementById(t.dataset.playTarget);
        if (!p) return;
        var r = p.getBoundingClientRect();
        if (r.top < 70 || r.bottom > window.innerHeight) window.scrollTo({ top: window.scrollY + r.top - 90, behavior: reduced ? 'auto' : 'smooth' });
        mountPlayer(p);
      }
    });
  }
  function initAutoload(root) {
    var els = $$('[data-autoload]:not([data-mounted])', root);
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) { els.forEach(function (p) { mountPlayer(p, true); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { mountPlayer(x.target, true); io.unobserve(x.target); } });
    }, { rootMargin: '200px' });
    els.forEach(function (p) { io.observe(p); });
  }
  function initReels() {
    var rail = $('#vrail');
    if (!rail) return;
    rail.innerHTML = REELS.map(function (r) {
      return '<div class="vitem">' + igPlayer(r[0], r[1], r[2], 'reel', true) +
        '<div class="vlabel"><h3>' + esc(r[2]) + '</h3><p class="roles">' + esc(r[3]) + '</p>' +
        '<a class="tlink" href="https://www.instagram.com/reel/' + esc(r[0]) + '/" target="_blank" rel="noopener">Open on Instagram \u2197</a></div></div>';
    }).join('');
  }

  /* ---------- silent loops: play only in view; hide on missing file ---------- */
  function hideBroken(v) { v.style.display = 'none'; v.dataset.broken = '1'; }
  document.addEventListener('error', function (e) { var t = e.target; if (t && t.tagName === 'VIDEO') hideBroken(t); }, true);
  function probeVideos(root) {
    $$('video', root).forEach(function (v) {
      if (v.dataset.probed) return;
      v.dataset.probed = '1';
      if (v.error || v.networkState === 3) { hideBroken(v); return; }
      var src = v.getAttribute('src');
      if (src && window.fetch && location.protocol !== 'file:') fetch(src, { method: 'HEAD' }).then(function (r) { if (!r.ok) hideBroken(v); }).catch(function () {});
    });
  }
  function initLoops() {
    var vids = $$('video[data-loop]');
    if (!vids.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        var v = x.target;
        if (v.dataset.broken) return;
        if (x.isIntersecting && !reduced) { v.muted = true; v.play().catch(function () {}); }
        else v.pause();
      });
    }, { threshold: 0.25 });
    vids.forEach(function (v) { io.observe(v); });
  }

  /* ---------- nav: hide on scroll down, show on scroll up; active section ---------- */
  function initNav() {
    var nav = $('#nav');
    var links = $$('.navlinks a');
    var lastY = window.scrollY, ticking = false;
    function update() {
      ticking = false;
      var y = window.scrollY;
      if (y > lastY + 4 && y > 240 && !nav.contains(document.activeElement)) nav.classList.add('is-hidden');
      else if (y < lastY - 4 || y < 240) nav.classList.remove('is-hidden');
      lastY = y;
      var active = null;
      links.forEach(function (a) {
        var el = document.getElementById(a.getAttribute('href').slice(1));
        if (!el) return;
        var r = el.getBoundingClientRect();
        if (r.top <= 140 && r.bottom > 140) active = a;
      });
      links.forEach(function (a) { a.classList.toggle('is-active', a === active); });
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    nav.addEventListener('focusin', function () { nav.classList.remove('is-hidden'); });
    update();
  }

  /* ---------- motion: CSS transitions driven by IntersectionObserver (robust even if frames stall) ---------- */
  function splitWords(el) {
    var text = el.textContent.trim();
    el.setAttribute('aria-label', text);
    el.innerHTML = text.split(/\s+/).map(function (w, i) { return '<span class="w" aria-hidden="true"><span style="--i:' + i + '">' + esc(w) + '</span></span>'; }).join(' ');
  }
  function stagger(list, step, base) { list.forEach(function (el, i) { el.style.setProperty('--d', ((base || 0) + i * step).toFixed(3) + 's'); }); }
  function initMotion() {
    clearTimeout(window.__revealSafety);
    if (!motion || document.hidden) { motion = false; document.documentElement.classList.remove('motion'); return; }
    $$('[data-split]').forEach(splitWords);
    var hero = $('#top');
    stagger($$('#top [data-reveal]'), 0.06, 0.3);
    var heroImg = $('#top [data-reveal-img]');
    if (heroImg) heroImg.style.transitionDelay = '.45s';
    requestAnimationFrame(function () { hero.classList.add('is-in'); $$('#top [data-reveal], #top [data-reveal-img]').forEach(function (el) { el.classList.add('is-in'); }); });
    setTimeout(function () { hero.classList.add('is-in'); $$('#top [data-reveal], #top [data-reveal-img]').forEach(function (el) { el.classList.add('is-in'); }); }, 120);
    var targets = $$('[data-reveal], [data-split], [data-reveal-img]').filter(function (el) { return !el.closest('#top'); });
    var pending = targets.slice(), last = 0, queued = false;
    function check() {
      queued = false; last = Date.now();
      var vh = window.innerHeight, batch = [];
      pending = pending.filter(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < vh * 0.94 && r.bottom > -vh) { batch.push(el); return false; }
        if (r.bottom <= -vh) { el.classList.add('is-in'); return false; }
        return true;
      });
      stagger(batch.filter(function (el) { return el.hasAttribute('data-reveal'); }), 0.07);
      batch.forEach(function (el) { el.classList.add('is-in'); });
      if (!pending.length) { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); }
    }
    function onScroll() { if (queued) return; queued = true; setTimeout(check, Math.max(0, 90 - (Date.now() - last))); }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('load', check);
    check();
    document.addEventListener('visibilitychange', function () { if (document.hidden) { targets.forEach(function (el) { el.classList.add('is-in'); }); } });
    if (gs) {
      G.registerPlugin(ST);
      var rimg = $('.reelframe img');
      if (rimg) G.fromTo(rimg, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.reelframe', start: 'top bottom', end: 'bottom top', scrub: 0.4 } });
      window.addEventListener('load', function () { ST.refresh(); });
    }
  }

  /* ---------- magnetic buttons (desktop, fine pointer only) ---------- */
  function initMagnetic() {
    if (!fine || !gs) return;
    $$('.mag').forEach(function (el) {
      var lab = $('.ml', el);
      var xTo = G.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' }), yTo = G.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
      var lx = lab && G.quickTo(lab, 'x', { duration: 0.6, ease: 'power3.out' }), ly = lab && G.quickTo(lab, 'y', { duration: 0.6, ease: 'power3.out' });
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        xTo(dx * 0.18); yTo(dy * 0.3);
        if (lab) { lx(dx * 0.08); ly(dy * 0.12); }
      });
      el.addEventListener('pointerleave', function () { xTo(0); yTo(0); if (lab) { lx(0); ly(0); } });
    });
  }

  /* ---------- "View project" cursor label ---------- */
  function initCursor() {
    var c = $('#cursor');
    if (!c || !fine || !G) return;
    var lab = $('span', c);
    var d = reduced ? 0.01 : 0.5;
    var xTo = G.quickTo(c, 'x', { duration: d, ease: 'power3.out' }), yTo = G.quickTo(c, 'y', { duration: d, ease: 'power3.out' });
    window.addEventListener('pointermove', function (e) { xTo(e.clientX); yTo(e.clientY); }, { passive: true });
    document.addEventListener('pointerover', function (e) {
      var t = e.target.closest('[data-cursor]');
      if (t && !(t.closest('.player') && t.closest('.player').dataset.mounted)) { lab.textContent = t.dataset.cursor; c.classList.add('is-on'); }
      else c.classList.remove('is-on');
    });
    document.addEventListener('pointerleave', function () { c.classList.remove('is-on'); });
    document.addEventListener('click', function () { c.classList.remove('is-on'); });
  }

  /* ---------- project pages: hash routes with a curtain transition ---------- */
  var view, vbody, curtain, isOpen = false, lastCard = null, busy = false;
  function caseMedia(m) {
    if (m.type === 'yt') return ytPlayer(m.id, m.label, m.start);
    if (m.type === 'ig') return igPlayer(m.id, m.label, m.title, m.kind, true);
    return filePlayer(m.src, m.label);
  }
  function renderProject(id) {
    var c = CASES[id], i = ORDER.indexOf(id), nid = ORDER[(i + 1) % ORDER.length], n = CASES[nid];
    var wide = c.media.type === 'yt';
    var facts = c.meta.map(function (m) { return '<div><div class="lab">' + esc(m[0]) + '</div><div class="val">' + esc(m[1]) + '</div></div>'; }).join('') +
      (c.metrics.length
        ? c.metrics.map(function (m) { return '<div><div class="lab">' + esc(m[1]) + '</div><div class="num">' + esc(m[0]) + '</div></div>'; }).join('')
        : '<div><div class="lab">Deliverables</div><div class="val">' + esc(c.deliverables) + '</div></div>');
    $('#pbar-name').textContent = c.name;
    var nx = $('#pbar-next'); nx.href = '#/work/' + nid; nx.setAttribute('aria-label', 'Next project: ' + n.name); nx.querySelector('.ml').innerHTML = '<span class="nxl">Next: ' + esc(n.name) + '</span> \u2192';
    return '<article class="wrap">' +
      '<header class="phero">' +
        '<p class="kick" data-pin>' + esc(c.kicker) + '</p>' +
        '<h1 id="p-title" tabindex="-1" data-pin>' + esc(c.name) + '</h1>' +
        '<p class="psub" data-pin>' + esc(c.sub) + '</p>' +
        '<div class="psummary" data-pin><p>' + esc(c.summary) + '</p>' +
          '<div class="acts"><a class="btn btn-primary mag" href="' + esc(c.cta[1]) + '" target="_blank" rel="noopener"><span class="ml">' + esc(c.cta[0]) + ' \u2197</span></a></div></div>' +
        '<div class="pfacts" data-pin style="--n:' + (c.meta.length + Math.max(1, c.metrics.length)) + '">' + facts + '</div>' +
      '</header>' +
      '<section class="pmedia' + (wide ? ' wide' : '') + '" data-pin><div class="pm">' + caseMedia(c.media) + '</div>' +
        '<div><p class="kick">What I handled</p><ul class="handled">' + c.handled.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul></div></section>' +
      (c.overview ? '<section class="prow"><h2><span class="pnum">01</span>The goal</h2><div>' +
        '<span class="lbl">Overview &amp; audience</span><p>' + esc(c.overview) + '</p>' +
        '<span class="lbl">The challenge</span><p>' + esc(c.challenge) + '</p></div></section>' : '') +
      '<section class="prow"><h2><span class="pnum">' + (c.overview ? '02' : '01') + '</span>My role</h2><div><p>' + esc(c.role) + '</p></div></section>' +
      (c.episodes ? '<section class="prow"><h2><span class="pnum">02</span>Episodes</h2><div class="epgrid">' + c.episodes.map(function (e) { return '<div>' + ytPlayer(e[0], e[2], e[1]) + '</div>'; }).join('') + '</div></section>' : '') +
      '<section class="prow"><h2><span class="pnum">' + (c.overview ? '03' : '03') + '</span>The work</h2><div>' + (c.approach ? '<p>' + esc(c.approach) + '</p>' : '') +
        '<span class="lbl">Selected finished work</span><ul class="cslinks">' + c.work.map(function (w) {
          return '<li><a href="' + esc(w[1]) + '" target="_blank" rel="noopener"><span>' + esc(w[0]) + '</span><span>Open \u2197</span></a></li>';
        }).join('') + '</ul></div></section>' +
      (c.results ? '<section class="prow"><h2><span class="pnum">04</span>Results</h2><div><p>' + esc(c.results) + '</p>' +
        '<span class="lbl">What I took from it</span><p>' + esc(c.lessons) + '</p></div></section>' : '') +
    '</article>' +
    '<a class="pnext" href="#/work/' + nid + '"><div class="wrap"><p class="kick">Next project</p><div class="nt"><span>' + esc(n.name) + '</span><span class="arr" aria-hidden="true">\u2192</span></div></div></a>';
  }
  function curtainRun(mid, done) {
    if (!motion) { mid(); if (done) done(); return; }
    busy = true;
    curtain.className = 'reset';
    void curtain.offsetWidth;
    curtain.className = 'cover';
    setTimeout(function () {
      mid();
      requestAnimationFrame(function () { curtain.className = 'leave'; });
      setTimeout(function () { curtain.className = 'leave'; }, 60);
      setTimeout(function () { curtain.className = 'reset'; busy = false; if (done) done(); }, 760);
    }, 600);
  }
  function showProject(id) {
    vbody.innerHTML = renderProject(id);
    view.hidden = false;
    view.scrollTop = 0;
    document.body.classList.add('is-locked');
    isOpen = true;
    document.title = CASES[id].name + ' \u2014 Emmanuel Jimenez';
    probeVideos(view);
    initAutoload(view);
    var pins = $$('[data-pin]', view);
    stagger(pins, 0.06, 0.25);
    setTimeout(function () { pins.forEach(function (p) { p.classList.add('is-in'); }); }, 30);
    if (fine && gs) initMagneticIn(view);
  }
  function initMagneticIn(root) { $$('.mag', root).forEach(function (el) { if (!el.dataset.magOn) { el.dataset.magOn = '1'; magnetize(el); } }); }
  function magnetize(el) {
    var xTo = G.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' }), yTo = G.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(); xTo((e.clientX - r.left - r.width / 2) * 0.18); yTo((e.clientY - r.top - r.height / 2) * 0.3); });
    el.addEventListener('pointerleave', function () { xTo(0); yTo(0); });
  }
  function hideProject() {
    view.hidden = true;
    vbody.innerHTML = '';
    document.body.classList.remove('is-locked');
    isOpen = false;
    document.title = BASE_TITLE;
  }
  function openProject(id, animate) {
    if (!CASES[id]) return;
    if (animate) curtainRun(function () { showProject(id); }, function () { var t = $('#p-title'); if (t) t.focus({ preventScroll: true }); });
    else { showProject(id); var t = $('#p-title'); if (t) t.focus({ preventScroll: true }); }
  }
  function closeProject() {
    curtainRun(hideProject, function () { if (lastCard && document.contains(lastCard)) lastCard.focus({ preventScroll: true }); });
  }
  function leaveProject() {
    history.pushState(null, '', location.pathname + location.search);
    closeProject();
  }
  function route(initial) {
    var m = location.hash.match(/^#\/work\/([\w-]+)/);
    if (m) { openProject(m[1], !initial); return; }
    if (isOpen) {
      var h = location.hash;
      curtainRun(function () {
        hideProject();
        var el = h.length > 1 && document.getElementById(h.slice(1));
        if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 70);
      });
    }
  }
  function initRouter() {
    view = $('#project'); vbody = $('#project-body'); curtain = $('#curtain');
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#/work/"]');
      if (a && !view.contains(a)) lastCard = a;
      if (e.target.closest('[data-pclose]')) leaveProject();
    });
    window.addEventListener('hashchange', function () { if (!busy) route(false); else setTimeout(function () { route(false); }, 700); });
    document.addEventListener('keydown', function (e) {
      if (!isOpen) return;
      if (e.key === 'Escape') { leaveProject(); return; }
      if (e.key === 'Tab') {
        var f = $$('a[href], button, iframe, video[controls], [tabindex="0"]', view).filter(function (n) { return n.offsetParent !== null; });
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    });
    route(true);
  }

  /* ---------- lightbox ---------- */
  function initLightbox() {
    var ovl = $('#lightbox'), body = $('#lightbox-body'), x = $('.xbtn', ovl), opener = null;
    function close() { ovl.classList.remove('is-on'); body.innerHTML = ''; document.body.classList.remove('is-locked'); if (opener) opener.focus(); }
    $$('.gcell').forEach(function (cell) {
      cell.addEventListener('click', function () {
        var img = $('img', cell);
        opener = cell;
        body.innerHTML = '<img src="' + esc(img.getAttribute('src')) + '" alt="' + esc(img.alt) + '">';
        ovl.classList.add('is-on');
        document.body.classList.add('is-locked');
        x.focus();
      });
    });
    x.addEventListener('click', close);
    ovl.addEventListener('click', function (e) { if (e.target === ovl) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ovl.classList.contains('is-on')) close(); if (e.key === 'Tab' && ovl.classList.contains('is-on')) { e.preventDefault(); x.focus(); } });
  }

  function init() {
    var y = $('#year');
    if (y) y.textContent = String(new Date().getFullYear());
    initTools();
    initReels();
    initPlayers();
    initAutoload(document);
    initArchive();
    initLightbox();
    initNav();
    probeVideos(document);
    initLoops();
    initMotion();
    initMagnetic();
    initCursor();
    initRouter();
    initHeroPlaylist();
    initRail();
  }
  function initRail() {
    var rail = $('#vrail');
    if (!rail) return;
    var btns = $$('[data-rail]');
    function step() { var it = $('.vitem', rail); return it ? it.getBoundingClientRect().width + 16 : 280; }
    function sync() {
      var max = rail.scrollWidth - rail.clientWidth - 2;
      btns.forEach(function (b) { b.disabled = b.dataset.rail === '-1' ? rail.scrollLeft <= 2 : rail.scrollLeft >= max; });
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { rail.scrollBy({ left: step() * (+b.dataset.rail), behavior: reduced ? 'auto' : 'smooth' }); }); });
    rail.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    rail.addEventListener('keydown', function (e) { if (e.target !== rail) return; if (e.key === 'ArrowRight') { e.preventDefault(); rail.scrollBy({ left: step() }); } if (e.key === 'ArrowLeft') { e.preventDefault(); rail.scrollBy({ left: -step() }); } });
    sync();
  }
  /* hero photo playlist: fast pass (0.3s each) then slow pass (2s each); 3 loops, restarts on hover */
  function initHeroPlaylist() {
    var fig = $('#heropic');
    if (!fig) return;
    var imgs = $$('img', fig), timer = null, running = false;
    if (imgs.length < 2 || reduced) return;
    var seq = [];
    imgs.forEach(function (_, i) { seq.push([i, 300, false]); });
    imgs.forEach(function (_, i) { seq.push([i, 2000, true]); });
    function show(i, slow) {
      fig.classList.toggle('slow', slow);
      imgs.forEach(function (im, k) { im.classList.toggle('is-on', k === i); });
    }
    function run(loops) {
      clearTimeout(timer);
      running = true;
      var step = 0, loop = 0;
      (function next() {
        if (step === seq.length) { step = 0; loop++; }
        if (loop >= loops) { running = false; show(0, true); return; }
        var s = seq[step++];
        show(s[0], s[2]);
        timer = setTimeout(next, s[1]);
      })();
    }
    var go = function () { run(3); };
    if (document.readyState === 'complete') setTimeout(go, 900); else window.addEventListener('load', function () { setTimeout(go, 900); });
    var row = fig.closest('.namerow') || fig;
    row.addEventListener('pointerenter', function () { if (!running) run(1); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
