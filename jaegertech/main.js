/* ═══════════════════════════════════════════════════════════════════════
   JAEGERTECH — MAIN SCRIPT
   Pan Pacific Defense Corps · Combat Systems Database
   ═══════════════════════════════════════════════════════════════════════ */

'use strict';

/* ── DATA ──────────────────────────────────────────────────────────────── */

const JAEGERS = [
  {
    name: 'GIPSY DANGER',
    designation: 'Mark-3',
    country: 'USA',
    status: 'decommissioned',
    statusLabel: 'DECOMMISSIONED',
    years: '2017 – 2025',
    pilots: ['Raleigh Becket', 'Mako Mori'],
    victories: 11,
    height: '79 m',
    weight: '1,980 tons',
    weapons: ['I-19 Plasmacaster', 'Chest Plasma Cannon', 'Sting-Blades', 'Nuclear Vortex Turbine'],
    color: '#00d4ff',
    colorDim: 'rgba(0,212,255,0.08)',
    icon: '🤖',
    description:
      'The pride of the Jaeger Program and humanity\'s most celebrated war machine. Gipsy Danger\'s analog systems — unusual for her era — made her immune to Kaiju EMP attacks. Her nuclear vortex turbine granted near-unlimited endurance while her chest plasma cannon could vaporize Kaiju tissue in a single blast. She closed the Breach.',
    battles: ['Battle of Anchorage', 'Battle of Hong Kong', 'Operation Pitfall'],
  },
  {
    name: 'STRIKER EUREKA',
    designation: 'Mark-5',
    country: 'Australia',
    status: 'kia',
    statusLabel: 'KIA',
    years: '2019 – 2025',
    pilots: ['Herc Hansen', 'Chuck Hansen'],
    victories: 11,
    height: '76 m',
    weight: '1,850 tons',
    weapons: ['Anti-Kaiju 6-Missile Array', 'Blade Arms', 'Sting-Blades'],
    color: '#ffd700',
    colorDim: 'rgba(255,215,0,0.08)',
    icon: '⚡',
    description:
      'The fastest and most powerful Jaeger ever constructed — the world\'s first and only Mark-5 unit. Striker Eureka\'s six-missile payload and retractable blade array made her devastating at every range. She was sacrificed at the Breach alongside Marshal Pentecost, detonating her payload to clear the path for Gipsy Danger\'s final run.',
    battles: ['Battle of Sydney', 'Battle of Hong Kong', 'Sacrifice at the Breach'],
  },
  {
    name: 'CHERNO ALPHA',
    designation: 'Mark-1',
    country: 'Russia',
    status: 'kia',
    statusLabel: 'KIA',
    years: '2015 – 2025',
    pilots: ['Aleksis Kaidanovsky', 'Sasha Kaidanovsky'],
    victories: 8,
    height: '85 m',
    weight: '2,412 tons',
    weapons: ['T-16 Angel Wings', 'Liquid Nitrogen Coolant Fists', 'Hydraulic Ramming Fists'],
    color: '#ff4444',
    colorDim: 'rgba(255,68,68,0.08)',
    icon: '🔩',
    description:
      'A behemoth of Cold War engineering — the oldest active Jaeger in the PPDC fleet. Operated a decade by the legendary Kaidanovsky couple, Cherno Alpha was a walking fortress whose mass and raw hydraulic power could match almost any Kaiju. She fell with honour defending Hong Kong in the Double Event, overwhelmed but never broken.',
    battles: ['Battle of Vladivostok', 'Battle of Hong Kong (Double Event)'],
  },
  {
    name: 'CRIMSON TYPHOON',
    designation: 'Mark-4',
    country: 'China',
    status: 'kia',
    statusLabel: 'KIA',
    years: '2018 – 2025',
    pilots: ['Jin Wei', 'Hu Wei', 'Cheung Wei'],
    victories: 9,
    height: '76 m',
    weight: '1,722 tons',
    weapons: ['Thundercloud Formation', 'Rotating Saw Discs', 'Tri-Chained Lightning'],
    color: '#ff2200',
    colorDim: 'rgba(255,34,0,0.08)',
    icon: '🌀',
    description:
      'China\'s masterpiece — the only Jaeger ever designed for three pilots. The Wei Triplets\' unique three-way Drift enabled combat flexibility no two-pilot team could match. Crimson Typhoon\'s rotating three-arm chassis and devastating Thundercloud Formation became legendary. She was lost fighting alongside Cherno Alpha during the cataclysmic Double Event.',
    battles: ['Battle of Manila', 'Battle of Hong Kong (Double Event)'],
  },
  {
    name: 'COYOTE TANGO',
    designation: 'Mark-1',
    country: 'Japan',
    status: 'retired',
    statusLabel: 'RETIRED',
    years: '2015 – 2017',
    pilots: ['Stacker Pentecost', 'Tamsin Sevier'],
    victories: 4,
    height: '85 m',
    weight: '2,312 tons',
    weapons: ['Ballistic Mortar Launchers', 'Shoulder Pulse Cannons', 'Lower Ocular Implants'],
    color: '#8b5cf6',
    colorDim: 'rgba(139,92,246,0.08)',
    icon: '🎯',
    description:
      'The machine that forged a legend. Coyote Tango defended Tokyo Bay against Onibaba in 2016 — a battle won at terrible cost. The intense radiation from her nuclear reactor left a young Stacker Pentecost with permanent pulmonary damage, a wound he concealed for a decade while leading the PPDC. Retired after the radiation incident. Her sacrifice was the seed of Operation Pitfall.',
    battles: ['Battle of Tokyo Bay (Onibaba)', 'Battle of Manila'],
  },
  {
    name: 'GIPSY AVENGER',
    designation: 'Mark-6',
    country: 'USA',
    status: 'active',
    statusLabel: 'ACTIVE',
    years: '2030 – present',
    pilots: ['Jake Pentecost', 'Nate Lambert', 'Amara Namani'],
    victories: 7,
    height: '82 m',
    weight: '2,004 tons',
    weapons: ['Gravity Sling', 'Chest Mortar', 'Arm-Mounted Plasmacaster', 'Digital Lasso'],
    color: '#00d4ff',
    colorDim: 'rgba(0,212,255,0.08)',
    icon: '🌐',
    description:
      'The spiritual heir to Gipsy Danger, rebuilt for a new era of threats and pilots. Gipsy Avenger integrates the legendary Mark-3 design lineage with cutting-edge Mark-6 technology, including the revolutionary Gravity Sling and digital lasso systems. She was the cornerstone of the PPDC\'s final stand at Mount Fuji in 2035.',
    battles: ['Battle of Shao Industries', 'Battle of Mount Fuji'],
  },
  {
    name: 'BRACER PHOENIX',
    designation: 'Mark-5',
    country: 'USA',
    status: 'kia',
    statusLabel: 'KIA',
    years: '2027 – 2035',
    pilots: ['Ilai Panthom', 'Curtis Burke'],
    victories: 5,
    height: '80 m',
    weight: '2,312 tons',
    weapons: ['VK152 Chest Cannon', 'Concussive Blasts', 'Anti-Kaiju Missile Array'],
    color: '#ff8c00',
    colorDim: 'rgba(255,140,0,0.08)',
    icon: '💥',
    description:
      'A veteran front-line Mark-5 Jaeger renowned for its devastating chest-mounted VK152 cannon. Bracer Phoenix held an impressive combat record across the Pacific theatre before the events of 2035. Lost during the coordinated Kaiju-Jaeger hybrid offensive preceding the Mount Fuji assault.',
    battles: ['Battle of Siberia', 'Hybrid Incursion — 2035'],
  },
  {
    name: 'SABER ATHENA',
    designation: 'Mark-7',
    country: 'China',
    status: 'compromised',
    statusLabel: 'COMPROMISED',
    years: '2033 – 2035',
    pilots: ['Jules Reyes', 'Renata Pastor'],
    victories: 3,
    height: '76 m',
    weight: '1,628 tons',
    weapons: ['Dual Saber Blades', 'Hyper-Speed Drive', 'Plasma Shields'],
    color: '#00ff88',
    colorDim: 'rgba(0,255,136,0.08)',
    icon: '⚔️',
    description:
      'The apex of Shao Industries engineering — the fastest, most technologically advanced Jaeger ever deployed. Saber Athena\'s dual-blade combat system and hypersonic speed made her nearly impossible to pin down in open combat. Her AI-integrated systems were later exploited and weaponised against the PPDC by Precursor-controlled drones during the 2035 crisis.',
    battles: ['Battle of Sydney', 'Turned — Battle of Mount Fuji'],
  },
];

const TIMELINE_EVENTS = [
  {
    year: '2013',
    type: 'attack',
    title: 'KAIJU ZERO — TRESPASSER',
    description:
      'The first Kaiju, codenamed Trespasser, emerged from the Breach in the Pacific Ocean and attacked the coastlines of Anchorage, San Francisco, and Sacramento over three days. Conventional military weapons eventually killed it — but required 35 hours and three nuclear warheads. Casualties: 35,000. The world was never the same.',
  },
  {
    year: '2014 – 2015',
    type: 'attack',
    title: 'THE KAIJU ATTACKS MULTIPLY',
    description:
      'Kaiju continued emerging through the Breach at accelerating frequency. Hundun attacked Manila. Scissure devastated Sydney. Conventional forces proved wholly inadequate. Global leaders agreed: a new weapon was needed — one that could match a Kaiju blow for blow.',
  },
  {
    year: '2015',
    type: 'milestone',
    title: 'THE JAEGER PROGRAM IS BORN',
    description:
      'In a historic global summit, 35 nations pooled resources to establish the Pan Pacific Defense Corps and fund the Jaeger Program. Dr. Caitlin Lightcap pioneered the two-pilot Drift neural interface, solving the neural-load problem that made solo piloting impossible. Mark-1 Jaegers began construction across Russia, the USA, Japan, and Australia.',
  },
  {
    year: '2016',
    type: 'battle',
    title: 'BATTLE OF TOKYO BAY — ONIBABA',
    description:
      'Marshal Stacker Pentecost and co-pilot Tamsin Sevier deployed Coyote Tango to defend the Osaka coast from Onibaba, a Category II Kaiju. They won — but the nuclear reactor radiation left Pentecost with irreparable lung damage he concealed for a decade. His sacrifice became the silent foundation of the program.',
  },
  {
    year: '2020',
    type: 'milestone',
    title: 'THE GOLDEN ERA OF JAEGERS',
    description:
      'The Jaeger Program reaches its operational peak. Mark-4 and Mark-5 units are deployed globally. Gipsy Danger, Striker Eureka, Cherno Alpha, and Crimson Typhoon become global icons of resistance. Kaiju emergence frequency rises but Jaeger kill rates remain dominant. The world begins to believe the war is winnable.',
  },
  {
    year: '2024',
    type: 'battle',
    title: 'BATTLE OF ANCHORAGE — KNIFEHEAD',
    description:
      'Gipsy Danger, piloted by brothers Raleigh and Yancy Becket, was ambushed at sea by Category III Kaiju Knifehead. The Kaiju tore off Gipsy\'s arm and killed Yancy mid-Drift — leaving Raleigh to feel his brother\'s death in real time. Raleigh piloted Gipsy alone to destroy Knifehead but was gravely injured. The incident traumatised the world and halted the program\'s momentum.',
  },
  {
    year: '2025',
    type: 'battle',
    title: 'THE DOUBLE EVENT — BATTLE OF HONG KONG',
    description:
      'Two Kaiju — Leatherback and Otachi — emerged from the Breach simultaneously in the war\'s first Double Event. Cherno Alpha and Crimson Typhoon were both destroyed in the initial assault. Gipsy Danger — repaired and upgraded — managed to defeat both Kaiju. The world understood: the Kaiju were evolving, coordinating, and escalating.',
  },
  {
    year: '2025',
    type: 'victory',
    title: 'OPERATION PITFALL — THE BREACH IS CLOSED',
    description:
      'Humanity\'s boldest gambit. The PPDC sent Gipsy Danger through the Breach to detonate a nuclear device inside the Precursors\' dimension. Marshal Pentecost and Chuck Hansen sacrificed themselves aboard Striker Eureka to clear the path. Raleigh Becket and Mako Mori piloted Gipsy Danger through. The Breach was destroyed. The war was over. The apocalypse was cancelled.',
  },
  {
    year: '2025 – 2030',
    type: 'milestone',
    title: 'RECONSTRUCTION ERA',
    description:
      'With the Breach closed, the PPDC transitions from defence to recovery. Kaiju-devastated coastal cities begin rebuilding. The Jaeger Program continues in reduced form as a precautionary measure. Dr. Geiszler and Dr. Gottlieb lead ongoing Breach research. A new generation of engineers and pilots is trained. Hope returns to the Pacific Rim.',
  },
  {
    year: '2035',
    type: 'attack',
    title: 'THE OBSIDIAN FURY INCIDENT',
    description:
      'A rogue Jaeger codenamed Obsidian Fury attacks the PPDC summit in Sydney. Investigation reveals it was remotely piloted via Kaiju brain by Dr. Newton Geiszler — his mind fully colonised by the Precursors through years of illegal Kaiju Drift experiments. The Precursors had never truly gone. They had been planning their return through human agents.',
  },
  {
    year: '2035',
    type: 'victory',
    title: 'BATTLE OF MOUNT FUJI — THE FINAL STAND',
    description:
      'The Precursors opened multiple new Breaches simultaneously, unleashing Kaiju-Jaeger hybrids aimed at Mount Fuji\'s volcanic caldera. Triggering the volcano would have caused a global extinction event. The PPDC\'s Jaegers and a new generation of cadets made their final stand. Jake Pentecost, piloting Gipsy Avenger, destroyed the mega-hybrid and collapsed the new Breaches. Humanity survived — again.',
  },
];

const PERSONNEL = [
  {
    name: 'STACKER PENTECOST',
    role: 'Marshal, PPDC · Pilot — Coyote Tango',
    status: 'KIA — Operation Pitfall, 2025',
    quote: '"Today we are cancelling the apocalypse."',
    bio: 'The defining figure of the Jaeger War. Pentecost piloted Coyote Tango in the earliest battles, absorbing lethal radiation to save Tokyo. As Marshal, he held the PPDC together through budget cuts, political opposition, and catastrophic losses. In the end, he gave his life at the Breach — so Gipsy Danger could finish what he started.',
    category: 'command',
    emoji: '⭐',
    medals: ['Order of the Breach', 'Pacific Star ×3', 'Medal of the Shatterdome'],
  },
  {
    name: 'RALEIGH BECKET',
    role: 'Pilot — Gipsy Danger',
    status: 'Retired, 2025',
    quote: '"Don\'t get cocky."',
    bio: 'A born pilot who carried the ghost of his brother Yancy for five years after the Anchorage incident. Called back from the Wall construction crews by Pentecost, Becket drifted with Mako Mori and became the pair who closed the Breach. His solo piloting of a dying Gipsy Danger against Knifehead remains one of the greatest combat feats in Jaeger history.',
    category: 'pilot',
    emoji: '🎖️',
    medals: ['Medal of the Shatterdome', 'Becket Protocol (named in honour)'],
  },
  {
    name: 'MAKO MORI',
    role: 'Pilot — Gipsy Danger · Director, PPDC',
    status: 'Active',
    quote: '"We\'ve never been alone in this fight."',
    bio: 'Orphaned by Onibaba\'s attack on Tokyo at age nine, Mako channelled her grief into becoming the PPDC\'s top recruit. She co-piloted Gipsy Danger on its final mission and was integral to closing the Breach. Rising to Director of the PPDC, she guided the organisation through reconstruction and faced the renewed threat of 2035 with the same calm resolve she was known for.',
    category: 'command',
    emoji: '🌊',
    medals: ['Order of the Breach', 'Tokyo Survivor Medal', 'Director\'s Commendation'],
  },
  {
    name: 'HERC HANSEN',
    role: 'Marshal, PPDC · Pilot — Striker Eureka',
    status: 'Retired',
    quote: '"We\'re not running. We\'re winning."',
    bio: 'One of Australia\'s most decorated Jaeger pilots, Herc co-piloted Striker Eureka alongside his son Chuck. When Chuck gave his life with Marshal Pentecost at the Breach, Herc assumed command of the PPDC as its new Marshal. He led the reconstruction era with the steady hand of a man who had lost everything, and still chose to fight.',
    category: 'command',
    emoji: '🦅',
    medals: ['Pacific Star ×4', 'Medal of the Shatterdome', 'Order of the Breach'],
  },
  {
    name: 'CHUCK HANSEN',
    role: 'Pilot — Striker Eureka',
    status: 'KIA — Operation Pitfall, 2025',
    quote: '"Born ready."',
    bio: 'Arrogant, brilliant, and fiercely patriotic — Chuck Hansen was considered the finest active Jaeger pilot of his generation. Piloting Striker Eureka with his father, he racked up an unparalleled 11 confirmed kills. He died voluntarily alongside Marshal Pentecost, triggering Striker\'s payload to clear the path to the Breach. Twenty-one years old.',
    category: 'pilot',
    emoji: '⚡',
    medals: ['Pacific Star ×5', 'Medal of the Shatterdome (posthumous)'],
  },
  {
    name: 'DR. NEWTON GEISZLER',
    role: 'Kaiju Biologist · K-Science Division',
    status: 'Compromised — 2035',
    quote: '"I Drifted with a Kaiju brain. Twice."',
    bio: 'Eccentric, brilliant, and dangerously curious, Dr. Newt Geiszler pioneered the science of Drifting with Kaiju brain tissue, unlocking critical intelligence about the Precursors. His discoveries were vital to Operation Pitfall. Tragically, repeated Drift exposure colonised his mind. By 2035, he had become an unwitting agent of the Precursors — the war\'s most heartbreaking casualty.',
    category: 'science',
    emoji: '🧬',
    medals: ['Breach Intelligence Commendation', 'Kaiju Science Breakthrough ×2'],
  },
  {
    name: 'DR. HERMANN GOTTLIEB',
    role: 'Theoretical Physicist · K-Science Division',
    status: 'Active',
    quote: '"I was right. I am always right."',
    bio: 'The methodical mathematical counterpart to Newt\'s chaos. Gottlieb\'s predictive models for Kaiju emergence events were uncannily accurate, and his theoretical framework for the Breach\'s dimensional physics was the backbone of Operation Pitfall. He also drifted with a Kaiju brain to complete the calculations Newt could not finish — showing his own kind of courage.',
    category: 'science',
    emoji: '📐',
    medals: ['Breach Mechanics Commendation', 'PPDC Medal of Service ×2'],
  },
  {
    name: 'TENDO CHOI',
    role: 'Systems Manager — Hong Kong Shatterdome',
    status: 'Active',
    quote: '"Gipsy\'s online. Neural handshake initiated."',
    bio: 'The calm, unflappable nerve centre of the Hong Kong Shatterdome. Tendo Choi managed all Jaeger launches, neural handshake monitoring, and real-time tactical coordination across the most critical battles of the war. Without his steady hand at the console, the Double Event would have ended far worse. He is the reason the lights stay on.',
    category: 'support',
    emoji: '🖥️',
    medals: ['PPDC Medal of Service ×3', 'Shatterdome Commendation'],
  },
  {
    name: 'JAKE PENTECOST',
    role: 'Pilot — Gipsy Avenger',
    status: 'Active',
    quote: '"I\'m nothing like my father. I\'m better."',
    bio: 'The son of the legendary Marshal, Jake spent years running from the weight of the Pentecost name. A naturally gifted pilot who washed out of the program, he was recalled in 2035 to face the renewed threat. Piloting Gipsy Avenger alongside cadet Amara Namani, he proved — in the end — that he was every bit his father\'s son.',
    category: 'pilot',
    emoji: '🔥',
    medals: ['Mount Fuji Campaign Medal', 'PPDC Recall Commendation'],
  },
  {
    name: 'AMARA NAMANI',
    role: 'Pilot — Gipsy Avenger · Builder — Scrapper',
    status: 'Active',
    quote: '"I built my own Jaeger. I can handle yours."',
    bio: 'Orphaned by a Kaiju attack, the prodigiously gifted Amara Namani built her own small-scale Jaeger, Scrapper, from salvage — alone. Recruited by the PPDC as a cadet, she quickly became the program\'s most unconventional and instinctive pilot. Her ingenuity and skill were crucial during the Mount Fuji crisis. She is the future.',
    category: 'pilot',
    emoji: '🛠️',
    medals: ['Mount Fuji Campaign Medal', 'Engineering Innovation Award'],
  },
  {
    name: 'THE KAIDANOVSKYS',
    role: 'Pilots — Cherno Alpha',
    status: 'KIA — Battle of Hong Kong, 2025',
    quote: '"Russia does not retreat."',
    bio: 'Aleksis and Sasha Kaidanovsky were the formidable Soviet couple who piloted the aging Mark-1 Cherno Alpha for a decade. Their deep psychological bond — forged across years of shared Drift — gave them an uncanny combat symbiosis unique even among Drift partners. They fell defending Hong Kong against the Double Event Kaiju, overwhelmed but unbroken.',
    category: 'pilot',
    emoji: '❄️',
    medals: ['Order of the Breach (posthumous)', 'Pacific Star ×4'],
  },
  {
    name: 'LIWEN SHAO',
    role: 'CEO — Shao Industries',
    status: 'Active',
    quote: '"The future of Jaegers is autonomous."',
    bio: 'The visionary billionaire who revolutionised Jaeger production through drone technology and AI integration. Initially regarded with suspicion by traditional PPDC command, Shao\'s manufacturing capabilities ultimately produced the next generation of Jaegers at unprecedented scale and speed. Her technology, though weaponised against the PPDC by the Precursors, laid the groundwork for post-war Jaeger development.',
    category: 'support',
    emoji: '🏭',
    medals: ['PPDC Industrial Partnership Commendation'],
  },
];

/* ── STATUS HELPERS ────────────────────────────────────────────────────── */
const STATUS_CLASS = {
  active:       'status-active',
  kia:          'status-kia',
  retired:      'status-retired',
  compromised:  'status-compromised',
  decommissioned: 'status-retired',
};

const TYPE_BADGE_CLASS = {
  attack:    'badge-attack',
  battle:    'badge-battle',
  milestone: 'badge-milestone',
  victory:   'badge-victory',
};

const TYPE_LABEL = {
  attack:    'KAIJU ATTACK',
  battle:    'BATTLE',
  milestone: 'MILESTONE',
  victory:   'VICTORY',
};

const CAT_CLASS = { command: 'cat-command', pilot: 'cat-pilot', science: 'cat-science', support: 'cat-support' };
const CAT_LABEL = { command: 'COMMAND', pilot: 'PILOT', science: 'SCIENCE', support: 'SUPPORT' };

/* ── CANVAS PARTICLE SYSTEM ────────────────────────────────────────────── */
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d');
    this.particles = [];
    this.raf    = null;
    this.resize();
    this.initParticles();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    if (this.particles.length) this.initParticles();
  }

  initParticles() {
    const count = Math.min(Math.floor((this.canvas.width * this.canvas.height) / 8000), 180);
    this.particles = Array.from({ length: count }, () => this.createParticle(true));
  }

  createParticle(randomY = false) {
    const types = ['star', 'star', 'star', 'hexagon', 'line'];
    const t = types[Math.floor(Math.random() * types.length)];
    return {
      x:     Math.random() * this.canvas.width,
      y:     randomY ? Math.random() * this.canvas.height : this.canvas.height + 10,
      vx:    (Math.random() - 0.5) * 0.3,
      vy:    -(Math.random() * 0.4 + 0.1),
      size:  Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.6 + 0.1,
      fadeDir: Math.random() > 0.5 ? 1 : -1,
      fadeSpeed: Math.random() * 0.005 + 0.002,
      type:  t,
      hue:   Math.random() > 0.8 ? 200 : 210,
      rot:   Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
    };
  }

  drawHex(x, y, r, alpha) {
    const ctx = this.ctx;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      ctx[i === 0 ? 'moveTo' : 'lineTo'](x + r * Math.cos(a), y + r * Math.sin(a));
    }
    ctx.closePath();
    ctx.strokeStyle = `hsla(195, 100%, 65%, ${alpha})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  animate() {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotSpeed;
      p.alpha += p.fadeDir * p.fadeSpeed;
      if (p.alpha <= 0.05) { p.fadeDir = 1; p.alpha = 0.05; }
      if (p.alpha >= 0.7)  { p.fadeDir = -1; p.alpha = 0.7; }

      if (p.y < -20 || p.x < -20 || p.x > canvas.width + 20) {
        this.particles[i] = this.createParticle(false);
        continue;
      }

      if (p.type === 'hexagon') {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        this.drawHex(0, 0, p.size * 3, p.alpha * 0.5);
        ctx.restore();
      } else if (p.type === 'line') {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.vx * 30, p.y + p.vy * 30);
        ctx.strokeStyle = `hsla(195, 100%, 65%, ${p.alpha * 0.4})`;
        ctx.lineWidth = p.size * 0.5;
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.alpha})`;
        ctx.fill();
      }
    }

    // Subtle connection lines
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          ctx.beginPath();
          ctx.moveTo(this.particles[i].x, this.particles[i].y);
          ctx.lineTo(this.particles[j].x, this.particles[j].y);
          ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 80)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    this.raf = requestAnimationFrame(() => this.animate());
  }

  start() { this.animate(); }
  stop()  { if (this.raf) cancelAnimationFrame(this.raf); }
}

/* ── COUNTER ANIMATION ─────────────────────────────────────────────────── */
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

/* ── JAEGER RENDERER ───────────────────────────────────────────────────── */
function renderJaegers(filter = 'all') {
  const grid = document.getElementById('jaeger-grid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? JAEGERS
    : JAEGERS.filter(j => {
        if (filter === 'kia')     return j.status === 'kia';
        if (filter === 'active')  return j.status === 'active';
        if (filter === 'retired') return j.status === 'retired' || j.status === 'decommissioned' || j.status === 'compromised';
        return true;
      });

  filtered.forEach((j, idx) => {
    const card = document.createElement('div');
    card.className = 'jaeger-card';
    card.style.transitionDelay = `${idx * 0.07}s`;

    const statusClass = STATUS_CLASS[j.status] || 'status-retired';

    card.innerHTML = `
      <div class="jaeger-card-inner">
        <!-- FRONT -->
        <div class="jaeger-front" style="--jaeger-color:${j.color}">
          <div class="jaeger-front-header">
            <div class="jaeger-silhouette">
              <div class="jaeger-bg-glow" style="background: radial-gradient(ellipse at 50% 80%, ${j.color} 0%, transparent 70%)"></div>
              <div class="jaeger-icon" style="color:${j.color}">${j.icon}</div>
            </div>
            <span class="jaeger-mark-badge" style="color:${j.color};border-color:${j.color}">${j.designation}</span>
            <span class="jaeger-country-badge">${j.country}</span>
          </div>
          <div class="jaeger-front-body">
            <div class="jaeger-name" style="color:${j.color}">${j.name}</div>
            <div class="jaeger-meta">
              <span>📅 ${j.years}</span>
            </div>
            <div class="jaeger-status ${statusClass}">
              <span class="status-dot-sm"></span>
              ${j.statusLabel}
            </div>
            <div class="jaeger-victories">
              <span class="victories-count">${j.victories}</span>
              CONFIRMED KILLS
            </div>
          </div>
          <div class="card-flip-hint">HOVER FOR TECHNICAL READOUT ↺</div>
        </div>

        <!-- BACK -->
        <div class="jaeger-back" style="border-color:${j.color}33">
          <div class="jaeger-back-title" style="color:${j.color}">${j.name} — TECHNICAL DOSSIER</div>
          <p class="jaeger-desc">${j.description}</p>

          <div class="jaeger-specs">
            <div class="spec-item">
              <span class="spec-label">HEIGHT</span>
              <span class="spec-val">${j.height}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">WEIGHT</span>
              <span class="spec-val">${j.weight}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">MARK CLASS</span>
              <span class="spec-val">${j.designation}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">KILLS</span>
              <span class="spec-val" style="color:${j.color}">${j.victories} CONFIRMED</span>
            </div>
          </div>

          <div class="jaeger-weapons">
            <div class="weapons-title">WEAPON SYSTEMS</div>
            <div class="weapons-list">
              ${j.weapons.map(w => `<span class="weapon-tag">${w}</span>`).join('')}
            </div>
          </div>

          <div class="jaeger-pilots-back">
            <div class="pilots-title">DRIFT TEAM</div>
            <div class="pilots-names">${j.pilots.join(' · ')}</div>
          </div>
        </div>
      </div>`;

    grid.appendChild(card);
    // Trigger animation
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
  });
}

/* ── TIMELINE RENDERER ─────────────────────────────────────────────────── */
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  container.innerHTML = '';

  TIMELINE_EVENTS.forEach((ev, idx) => {
    const event = document.createElement('div');
    const isEven = idx % 2 === 0;
    event.className = `timeline-event ${isEven ? 'from-left' : 'from-right'}`;

    const badgeClass = TYPE_BADGE_CLASS[ev.type] || 'badge-milestone';
    const typeLabel  = TYPE_LABEL[ev.type] || ev.type.toUpperCase();
    const nodeClass  = `tl-node type-${ev.type}`;

    const contentHtml = `
      <div class="tl-year">${ev.year}</div>
      <div class="tl-card">
        <span class="tl-type-badge ${badgeClass}">${typeLabel}</span>
        <div class="tl-title">${ev.title}</div>
        <p class="tl-desc">${ev.description}</p>
      </div>`;

    if (isEven) {
      event.innerHTML = `
        <div class="tl-content">${contentHtml}</div>
        <div class="tl-spacer"><div class="${nodeClass}"></div></div>
        <div class="tl-empty"></div>`;
    } else {
      event.innerHTML = `
        <div class="tl-empty"></div>
        <div class="tl-spacer"><div class="${nodeClass}"></div></div>
        <div class="tl-content">${contentHtml}</div>`;
    }

    container.appendChild(event);
  });
}

/* ── PERSONNEL RENDERER ────────────────────────────────────────────────── */
function renderPersonnel(filter = 'all') {
  const grid = document.getElementById('personnel-grid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? PERSONNEL
    : PERSONNEL.filter(p => p.category === filter);

  filtered.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'person-card';
    card.dataset.category = p.category;
    card.style.transitionDelay = `${idx * 0.07}s`;

    card.innerHTML = `
      <div class="person-header">
        <div class="person-avatar">${p.emoji}</div>
        <span class="person-category-badge ${CAT_CLASS[p.category]}">${CAT_LABEL[p.category]}</span>
        <div class="person-name">${p.name}</div>
        <div class="person-role">${p.role}</div>
        <div class="person-status">${p.status}</div>
      </div>
      <div class="person-body">
        <blockquote class="person-quote">${p.quote}</blockquote>
        <p class="person-bio">${p.bio}</p>
        <div class="person-medals">
          ${p.medals.map(m => `<span class="medal-tag">🏅 ${m}</span>`).join('')}
        </div>
      </div>`;

    grid.appendChild(card);
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
  });
}

/* ── SHATTERDOME NODES ─────────────────────────────────────────────────── */
function addNodePulses() {
  document.querySelectorAll('.sd-node').forEach(node => {
    const pulse = document.createElement('div');
    pulse.className = 'sd-node-pulse';
    node.appendChild(pulse);
  });
}

/* ── INTERSECTION OBSERVER ─────────────────────────────────────────────── */
function setupScrollAnimations() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  // Reveal class elements
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Timeline events
  document.querySelectorAll('.timeline-event').forEach(el => io.observe(el));

  // Person cards (already visible via JS, but re-trigger on filter)
  const cardIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 50);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.jaeger-card, .person-card').forEach(el => cardIo.observe(el));

  // Hero stats counter
  const statsIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.stat-num[data-target]').forEach(el => {
          const target = parseInt(el.dataset.target);
          animateCounter(el, target);
        });
        statsIo.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.getElementById('hero-stats');
  if (heroStats) statsIo.observe(heroStats);
}

/* ── NAVBAR SCROLL BEHAVIOUR ───────────────────────────────────────────── */
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) navbar.classList.add('scrolled');
    else              navbar.classList.remove('scrolled');
    lastScroll = scrollY;
  }, { passive: true });

  // Mobile toggle
  const toggle    = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close on nav link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Active link on scroll
  const sections  = ['hero', 'jaegers', 'timeline', 'personnel', 'ppdc'];
  const links     = document.querySelectorAll('.nav-link');

  const sectionIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) sectionIo.observe(el);
  });
}

/* ── FILTER BUTTONS ────────────────────────────────────────────────────── */
function setupFilters() {
  // Jaeger filters
  document.querySelectorAll('.filter-bar .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderJaegers(btn.dataset.filter);
      // Re-observe new cards
      setTimeout(() => {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.jaeger-card').forEach(c => io.observe(c));
      }, 50);
    });
  });

  // Personnel filters
  document.querySelectorAll('.personnel-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.personnel-filter .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPersonnel(btn.dataset.pfilter);
      setTimeout(() => {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.person-card').forEach(c => io.observe(c));
      }, 50);
    });
  });
}

/* ── SECTION HEADER REVEALS ────────────────────────────────────────────── */
function setupSectionHeaders() {
  document.querySelectorAll('.section-header > *').forEach(el => {
    el.classList.add('reveal');
  });

  document.querySelectorAll('.ppdc-text > *, .ppdc-visual').forEach(el => {
    el.classList.add('reveal');
  });
}

/* ── JAEGER CARD 3D TILT ───────────────────────────────────────────────── */
function setup3DTilt() {
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.jaeger-card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cx   = rect.left + rect.width / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = e.clientX - cx;
      const dy   = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 300) return;

      const inner = card.querySelector('.jaeger-card-inner');
      if (inner && !card.matches(':hover')) {
        const rx = -(dy / rect.height) * 6;
        const ry =  (dx / rect.width)  * 6;
        inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
    });
  });

  document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.jaeger-card-inner').forEach(el => {
      el.style.transform = '';
    });
  });
}

/* ── SMOOTH ANCHOR SCROLL ──────────────────────────────────────────────── */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ── TYPING CURSOR EFFECT (threat text) ───────────────────────────────── */
function setupBootSequence() {
  const badge = document.querySelector('.hero-badge');
  if (!badge) return;
  badge.style.opacity = '0';
  setTimeout(() => {
    badge.style.transition = 'opacity 1s ease';
    badge.style.opacity = '1';
  }, 300);
}

/* ── INIT ──────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Particle canvas
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ps = new ParticleSystem(canvas);
    ps.start();
    // Pause when tab hidden to save resources
    document.addEventListener('visibilitychange', () => {
      document.hidden ? ps.stop() : ps.start();
    });
  }

  // Render content
  renderJaegers();
  renderTimeline();
  renderPersonnel();

  // Setup features
  setupSectionHeaders();
  setupNavbar();
  setupFilters();
  setupScrollAnimations();
  setup3DTilt();
  setupSmoothScroll();
  addNodePulses();
  setupBootSequence();

  // Add scan flicker effect to brand text
  const logoTexts = document.querySelectorAll('.logo-text');
  logoTexts.forEach(lt => {
    setInterval(() => {
      if (Math.random() > 0.97) {
        lt.style.opacity = '0.5';
        setTimeout(() => { lt.style.opacity = '1'; }, 80);
      }
    }, 2000);
  });
});
