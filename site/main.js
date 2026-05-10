// ============ DATA ============
const members = [
  { name:"Vedant", tag:"420", letter:"V", hue:280, msgs:11806, words:43353, media:928, lateNight:974, caps:93, questions:589,
    desc:"The self-appointed CEO of VVARSHAA. Runs the group like a dictatorship — removes people for saying 'baigan', banned the 👍 emoji, and made the Coorg trip edit. Claims to have rizz but got rejected using the 'I have cancer' pickup line. No beard gang president. Will fight you at 102 at any given time. Baby face but will 'knock u the fuck down in 13'. The guy who asks everyone's birthday twice and still gets the date wrong. Heart of gold hidden under 93 ALL-CAPS rants.",
    tag2:"👑 The Unhinged Leader" },
  { name:"Vashist", tag:"gwak", letter:"V", hue:320, msgs:1784, words:4427, media:171, lateNight:195, caps:1, questions:111,
    desc:"The ghost of VVARSHAA. Appears once a month to drop a '😔' or jinx an IPL match, then vanishes into the Hyderabad sunset. Woke up in a yoga pose and didn't even know. The only member with self-love — follows himself on Instagram. Belated birthday wishes specialist. 1784 messages in 3 years is actually concerning. MIT AIML Hyderabad's most mysterious export.",
    tag2:"👻 The Phantom Member" },
  { name:"Anand", tag:"bingbong", letter:"A", hue:200, msgs:6721, words:25701, media:751, lateNight:638, caps:24, questions:368,
    desc:"The 8.1 CGPA flex machine who calls it 'depressing'. Walks like a 48-year-old arthritic alligator according to Vedant. The group's moral compass who immediately loses morality at 2 AM. Had nail surgery from football played 2 months ago. Got caught checking other guys' results on SLCM. Uses 'Damn' and '🐿️' as personality traits. Will ask 'when we eating' in any situation. The Malayali who forgot what a mundu is called.",
    tag2:"🐿️ The Stealth Flexer" },
  { name:"Rohit", tag:"sourgrapes", letter:"R", hue:120, msgs:4855, words:17341, media:288, lateNight:589, caps:24, questions:258,
    desc:"Disappeared for 7 hours making everyone including his mom panic, turned out he was playing basketball and having lunch with Anagha. The group's most voted for 'likely to cheat' and 'likely to hook up'. Roommate who takes pictures of Vedant sleeping. Real Madrid fan who suffers in silence. Got a hydel power internship in Odisha. 'Trust the process' is his life philosophy until the process involves showing up on time.",
    tag2:"🏃 The Vanishing Act" },
  { name:"Shadab", tag:"mrkms", letter:"S", hue:30, msgs:4099, words:16859, media:552, lateNight:342, caps:25, questions:356,
    desc:"The first one to say 'Lodaaaaaa bc' when joining the group — set the tone forever. Astro club board member who somehow also ended up at Volvo. Goes to Tiwari chats even on Diwali. Tried to spell 'Ponnanna' 4 times before getting it right. Cambridge English claims but can't spell 'rapeing'. Master of 'chup lodu' across all conversations. The gym bro who eats at every dessert place with gym friends. Shadab has an announcement... that he'll never give on time.",
    tag2:"🌙 The Contradiction King" },
  { name:"Hiten", tag:"HRS", letter:"H", hue:0, msgs:4776, words:15970, media:1190, lateNight:503, caps:8, questions:308,
    desc:"Sends the most media (1190!) but speaks the least in ALL CAPS (8 times in 3 years). The travel planner who suggests 6 places 'just to cancel'. 100% PE attendance legend. Recommends movies nobody wants to watch. Got all C grades and said 'kya he fark padta'. Went to Travis Scott concert and survived. Applied for Visa, got rejected, still vibing. The group's photographer who documented everything on the Coorg trip.",
    tag2:"📸 The Silent Documentarian" },
  { name:"Aakarsh", tag:"bevu", letter:"A", hue:60, msgs:6178, words:28241, media:1337, lateNight:724, caps:10, questions:565,
    desc:"Got 80 in midsems when he expected 40 — the accidental genius. Media sharing champion (1337 — the leet number!). Asks the most questions in the group. Revels proshow interview was all about drunk friends. Sends memes at 4 AM. The philosopher who said 'Let's die together' with a suicide hotline image. Weekly Reddit link supplier. Got DS lab E grade and still acts unbothered. 'Relax guys all this is just worldly pleasures' energy.",
    tag2:"🤓 The Accidental Genius" },
  { name:"Aryan", tag:"ninjastar", letter:"A", hue:160, msgs:11309, words:44979, media:1334, lateNight:953, caps:34, questions:432,
    desc:"Created the group as 'Eh idk' and somehow became the unofficial admin dictator. FPL emotional damage specialist. Most words typed (44,979!) — literally wrote a novel in this chat. Man United fan who has contemplated deleting FPL every gameweek since 2023. Booked the Coorg stay, organized the carnival, planned every outing. Amazon interview round 1 survivor. The guy who removes people as 'timeout' punishment. He IS the culture.",
    tag2:"⚡ The Content Machine" }
];

const chats = [
  { title:"🧬 The Rizz Arc (Aug 2023)", messages:[
    {s:"Anand",m:"Everyone be careful of vedant...Monday he told he will come in full form",side:"left"},
    {s:"Vedant",m:"I need to get my form back so im going",side:"right"},
    {s:"Vedant",m:"My rizz aint working",side:"right"},
    {s:"Vedant",m:"Even the cancer one aint working",side:"right"},
    {s:"Anand",m:"You never had rizz bro",side:"left"},
    {s:"Rohit",m:"Bro really said he's got cancer and got rejected 💀",side:"left"}
  ]},
  { title:"🎬 Movie Night Chaos (Halloween 2023)", messages:[
    {s:"Rohit",m:"Bois it's halloween. Movie night?",side:"left"},
    {s:"Shadab",m:"bhaissab wtf am I doing here. ek banda family ek banda horny ek banda horror",side:"right"},
    {s:"Vedant",m:"Bro u know that the movie night shit isnt going to happen coz of how indecisive these guys are",side:"left"},
    {s:"Aryan",m:"Put znmd no-one cares about Halloween...enjoy life bhai",side:"right"},
    {s:"Vedant",m:"*removes Rohit from group*",side:"left"},
    {s:"Shadab",m:"nice one @Vedant",side:"right"}
  ]},
  { title:"🚨 Rohit Goes Missing (Nov 2023)", messages:[
    {s:"Anand",m:"Rohit bkl kaha ho",side:"left"},
    {s:"Vedant",m:"He aint picking my calls also",side:"right"},
    {s:"Anand",m:"His mom called him around 20 times",side:"left"},
    {s:"Aryan",m:"He's safe apparently. He was with anagha",side:"right"},
    {s:"Vedant",m:"HOSTEL AA LAUDE",side:"left"},
    {s:"Aryan",m:"Sabko night canteen sponsor...that is u sorting shit out with us",side:"right"}
  ]},
  { title:"📊 Results Day Meltdown (Dec 2024)", messages:[
    {s:"Vedant",m:"FUCK MIT",side:"right"},
    {s:"Vedant",m:"how the fuck they aint giving me A+ in math",side:"right"},
    {s:"Anand",m:"8.1 CGPA",side:"left"},
    {s:"Vedant",m:"Maachuda Randi Bsdk Gaand mara",side:"right"},
    {s:"Aryan",m:"depressing it seems... bkl",side:"left"},
    {s:"Vedant",m:"THIS RANDI ACADEMIC DIRECTOR I SWEAR...",side:"right"}
  ]}
];

const timeline = [
  {date:"Aug 16, 2023",title:"🎬 'Eh idk' is Born",desc:"Aryan creates the group. The first message? 😔😔. The chaos begins."},
  {date:"Aug 28, 2023",title:"🤝 Shadab Joins",desc:"'Lodaaaaaa bc' — his first message. 👍 gets banned immediately."},
  {date:"Oct 2023",title:"🎃 First Movie Night",desc:"Takes 3 hours to pick a movie. Vedant removes Rohit. They watch nothing."},
  {date:"Nov 2023",title:"🚨 The Rohit Incident",desc:"Rohit disappears for 7 hours. Mom panics. Group panics. He was playing basketball."},
  {date:"Nov 15, 2023",title:"⚔️ Nov 15 Fight Day",desc:"Vedant's legendary 'form comeback' day. Nobody actually fought. Just more texting."},
  {date:"Dec 2023",title:"🎄 First Sem Results",desc:"The GPA reveal. Anand flexes. Vedant cries. Aakarsh gets E in DS lab."},
  {date:"May 2024",title:"🏔️ COORG TRIP",desc:"7 boys, 1 Innova Crysta, Dockside Inn. The greatest VVARSHAA chapter. Edit made by Vedant."},
  {date:"Jul 2024",title:"🎮 Peak COD Era",desc:"Room 102 becomes the official gaming hub. 4AM sessions. Sleep is for the weak."},
  {date:"Dec 2024",title:"📉 The GPA Massacre",desc:"New academic director changes grading. Vedant's rant about him becomes group lore."},
  {date:"Oct 2025",title:"🎆 Travis Scott Concert",desc:"Vedant and Hiten survive standing section. Voice gone. Legs bruised. Worth it."},
  {date:"Apr 2026",title:"💼 Internship Season",desc:"Shadab bags Volvo. Rohit gets hydel power. Aryan interviews at Amazon. We're growing up."},
  {date:"May 2026",title:"📝 The Form Era",desc:"Vedant makes 'Most Likely To' polls. Results cause chaos. Some things never change."}
];

const songLyrics = `🎵 THE VVARSHAA SONG 🎵

From Block 17 to the world outside,
Eight souls that Manipal couldn't divide,
Room 102 where the legends played,
COD at midnight, memories we made.

Vedant screaming "hostel aa laude,"
Aryan booking trips we can't afford today,
Anand walking like a three-legged gator,
Rohit disappearing — see you later!

Chorus:
V-V-A-R-S-H-A-A,
We were broke but rich in every way,
From FC dinner to Coorg in May,
These are the nights that never fade away.

Shadab at Tiwari's eating alone,
Hiten documenting on his phone,
Aakarsh dropping memes at 4 AM,
Vashist — bro, you there? Say when!

We fought over movies, grades, and food,
We roasted each other — understood?
But when one of us was ever down,
Eight idiots were always around.

He said one day you'll leave this world behind,
So live a life you will remember,
VVARSHAA — where the V stands for forever,
These bonds don't break, not now, not ever. 💔`;

const rapLyrics = `🔥 VVARSHAA CYPHER 🔥

Yo, it's the VVARSHAA gang, we don't play nice,
Eight deep in the chat, rolling loaded dice,
Vedant on the beat, baby face but COLD,
Got removed from group chat at 17 years old!

420 in the building, rizz game is TRAGIC,
Cancer pickup line? Bro that ain't magic!
But he runs this group like a CEO with a plan,
Timeout for the haters — that's the Vedant brand!

Aryan ninjastar, 45K words deep,
Writing FPL rants when he should be asleep,
Man United pain runs through his veins,
"Fuck off Rashford" — every single game!

Anand bingbong, CGPA eight point one,
Calls it depressing, we're like — SON!
Walks funny, can't grow a beard,
But checks everyone's grades — yeah that's weird!

Rohit sourgrapes, vanishing like a ghost,
His mom called 20 times — that's the MOST,
Real Madrid heart with a basketball soul,
Hydel power intern — that's his role!

Shadab mrkms, first words were "LODA BC,"
Volvo intern bro, that's destiny,
Can't spell Ponnanna to save his LIFE,
But board member status, cutting like a knife!

HRS the goat, all C's don't care,
Travis Scott standing, lost voice but was THERE,
1190 media shared, the memory keeper,
PE attendance 100 — no class skipper!

Aakarsh bevu, E grade survivor,
Reddit at 4 AM, group chat reviver,
"Let's die together" — bro WHAT?
1337 media — that's the LEET strut!

Vashist gwak, the phantom we adore,
1784 messages — could've sent some more,
Belated birthday king, self-love champion,
But when he texts, we know something's happenin'!

VVARSHAA VVARSHAA, say it LOUD,
Eight engineers, stupid and proud,
From Manipal halls to wherever we go,
This group chat? It's the greatest show! 🎤🔥`;

const quotes = [
  {text:"A beard doesn't make a man... look at Anand for example.",author:"Vedant, destroying dreams since 2023"},
  {text:"Pussies sleep at night. Men grind at night.",author:"Anand, 1:58 AM, before sending memes"},
  {text:"Kaha engineering karne fass gaya mai. Acha khaasa Bangalore mei pub mei daaru pee leta.",author:"Aryan, questioning life choices"},
  {text:"Bangalore wants me.",author:"Rohit, before disappearing for 7 hours"},
  {text:"Lodaaaaaa bc",author:"Shadab, first words in the group"},
  {text:"Ghar gya hai na. Parents ke saath raho. Kya chatting kar rha.",author:"Hiten, the only mature one"},
  {text:"Relax guys all this is just worldly pleasures. Let's get beyond them.",author:"Aakarsh, achieving enlightenment at 1:29 AM"},
  {text:"Tell me what yall will get at 58 rs",author:"Vashist, on being asked for a treat"},
  {text:"Sabko night canteen sponsor...that is u sorting shit out with us.",author:"Aryan, on Rohit's punishment"},
  {text:"bhaissab wtf am I doing here. ek banda family ek banda horny ek banda horror",author:"Shadab, during movie selection"},
  {text:"I feel you should charge your phone.",author:"Aryan, caring about Vedant's battery"},
  {text:"Kindness is free. Use some golden words.",author:"Rohit, teaching Anand manners"}
];

const memes = [
  {emoji:"📱",title:"The Phantom Texter",desc:"Vashist sent 1,784 messages in 3 years. That's 1.6 messages per day. Legend says each one took a week to craft.",award:"🏆 Least Active Award"},
  {emoji:"🗣️",title:"Vedant's Caps Lock",desc:"93 ALL-CAPS messages. When this man is angry, your screen LITERALLY SHAKES. The academic director rant? Pure art.",award:"😤 Rage Champion"},
  {emoji:"🫥",title:"Rohit's Disappearance",desc:"Went MIA for 7 hours. Mom called 20 times. Friends contacted his girlfriend. He was playing basketball. BASKETBALL.",award:"🏃 Houdini Award"},
  {emoji:"💀",title:"The Cancer Pickup Line",desc:"Vedant told a girl he has cancer. She rejected him. The group found out. Nobody let him forget. Ever.",award:"❌ Worst Rizz in History"},
  {emoji:"📊",title:"Anand's 'Depressing' 8.1",desc:"Gets the highest CGPA in the group. Calls it 'depressing'. Gets removed from the group. Added back. Sends 🐿️.",award:"🧠 Humble Brag Champion"},
  {emoji:"👍",title:"The Banned Emoji",desc:"Shadab used 👍 on his first day. Vedant declared it BANNED. 'Ok bhai is the only acceptable response.' Group law established.",award:"⚖️ First Law of VVARSHAA"},
  {emoji:"🎬",title:"3hrs to Pick a Movie",desc:"Halloween night. 8 people. 50 messages. Zero consensus. Vedant removes Rohit. Adds back. Still no movie. Classic VVARSHAA.",award:"🎪 Peak Indecisiveness"},
  {emoji:"📝",title:"Shadab Spells Ponnanna",desc:"Attempt 1: ponnanana. Attempt 2: Ponanana. Attempt 3: Ponnana. Attempt 4: Ponnanna. ✅ Cambridge English btw.",award:"📖 Spelling Bee Runner-Up"}
];

// ============ HERO CANVAS ============
function initCanvas(){
  const c=document.getElementById('hero-canvas');
  const ctx=c.getContext('2d');
  let w,h,particles=[];
  function resize(){w=c.width=window.innerWidth;h=c.height=window.innerHeight}
  resize();window.addEventListener('resize',resize);
  class P{
    constructor(){this.reset()}
    reset(){this.x=Math.random()*w;this.y=Math.random()*h;this.vx=(Math.random()-.5)*.3;this.vy=(Math.random()-.5)*.3;this.r=Math.random()*2+.5;this.hue=Math.random()*360;this.alpha=Math.random()*.5+.1}
    update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>w)this.vx*=-1;if(this.y<0||this.y>h)this.vy*=-1}
    draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle=`hsla(${this.hue},70%,60%,${this.alpha})`;ctx.fill()}
  }
  for(let i=0;i<80;i++)particles.push(new P());
  function loop(){
    ctx.clearRect(0,0,w,h);
    particles.forEach(p=>{p.update();p.draw()});
    for(let i=0;i<particles.length;i++)for(let j=i+1;j<particles.length;j++){
      const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<120){ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle=`rgba(124,58,237,${.08*(1-dist/120)})`;ctx.stroke()}
    }
    requestAnimationFrame(loop);
  }
  loop();
}

// ============ COUNTER ANIMATION ============
function animateCounters(){
  document.querySelectorAll('.stat-card').forEach(card=>{
    const target=parseInt(card.dataset.count);
    const num=card.querySelector('.stat-num');
    let current=0;
    const step=Math.ceil(target/80);
    const timer=setInterval(()=>{
      current+=step;
      if(current>=target){current=target;clearInterval(timer)}
      num.textContent=current.toLocaleString();
    },20);
  });
}

// ============ LEADERBOARD ============
function buildLeaderboard(){
  const container=document.getElementById('lb-bars');
  const sorted=[...members].sort((a,b)=>b.msgs-a.msgs);
  const max=sorted[0].msgs;
  const colors=['#7c3aed','#06b6d4','#ec4899','#10b981','#f59e0b','#ef4444','#8b5cf6','#14b8a6'];
  sorted.forEach((m,i)=>{
    const pct=(m.msgs/max*100).toFixed(0);
    const rankClass=i===0?'gold':i===1?'silver':i===2?'bronze':'';
    const bar=document.createElement('div');
    bar.className='lb-bar reveal';
    bar.innerHTML=`
      <div class="lb-name"><span class="rank ${rankClass}">${i+1}</span>${m.name}</div>
      <div class="lb-track"><div class="lb-fill" style="background:${colors[i]};width:0" data-width="${pct}%">${m.msgs.toLocaleString()}</div></div>
      <div class="lb-count">${m.msgs.toLocaleString()}</div>`;
    container.appendChild(bar);
  });
}

// ============ HOUR CHART ============
function buildHourChart(){
  const hours=[3021,1029,593,121,154,51,101,349,641,1260,1976,2524,2600,2688,1826,1653,3410,3695,4014,3679,4158,3456,4262,4267];
  const max=Math.max(...hours);
  const container=document.getElementById('hour-chart');
  hours.forEach((val,i)=>{
    const pct=(val/max*100).toFixed(0);
    const wrap=document.createElement('div');
    wrap.className='hour-bar-wrap';
    const hue=i<5?280:i<12?200:i<18?160:i<21?30:0;
    wrap.innerHTML=`<div class="bar-container"><div class="hour-bar" style="height:0;background:hsl(${hue},70%,55%)" data-height="${pct}%" data-val="${val}"></div></div><div class="hour-label">${i}h</div>`;
    container.appendChild(wrap);
  });
}

// ============ MEMBERS ============
function buildMembers(){
  const grid=document.getElementById('members-grid');
  members.forEach(m=>{
    const card=document.createElement('div');
    card.className='member-card reveal';
    card.style.setProperty('--hue',m.hue);
    card.innerHTML=`
      <div class="member-header">
        <div class="member-avatar">${m.letter}</div>
        <div class="member-info"><h3>${m.name}</h3><div class="gamename">${m.tag}</div></div>
      </div>
      <div class="member-stats">
        <div class="member-stat"><div class="num">${m.msgs.toLocaleString()}</div><div class="lbl">Messages</div></div>
        <div class="member-stat"><div class="num">${m.words.toLocaleString()}</div><div class="lbl">Words</div></div>
        <div class="member-stat"><div class="num">${m.media}</div><div class="lbl">Media</div></div>
        <div class="member-stat"><div class="num">${m.lateNight}</div><div class="lbl">Late Night</div></div>
      </div>
      <p class="member-desc">${m.desc}</p>
      <span class="member-tag">${m.tag2}</span>`;
    grid.appendChild(card);
  });
}

// ============ CHATS ============
function buildChats(){
  const container=document.getElementById('chats-container');
  chats.forEach(chat=>{
    const block=document.createElement('div');
    block.className='chat-block reveal';
    let html=`<div class="chat-title">💬 ${chat.title}</div>`;
    chat.messages.forEach(msg=>{
      html+=`<div class="chat-msg ${msg.side}"><div class="chat-sender">${msg.s}</div>${msg.m}</div>`;
    });
    block.innerHTML=html;
    container.appendChild(block);
  });
}

// ============ TIMELINE ============
function buildTimeline(){
  const container=document.getElementById('timeline');
  timeline.forEach(t=>{
    const item=document.createElement('div');
    item.className='tl-item reveal';
    item.innerHTML=`<div class="tl-date">${t.date}</div><div class="tl-title">${t.title}</div><div class="tl-desc">${t.desc}</div>`;
    container.appendChild(item);
  });
}

// ============ SONGS ============
function buildSongs(){
  document.getElementById('song-lyrics').innerHTML=`<h3>🎵 The VVARSHAA Anthem</h3><div class="lyrics">${songLyrics}</div>`;
  document.getElementById('rap-lyrics').innerHTML=`<h3>🔥 The VVARSHAA Cypher</h3><div class="lyrics">${rapLyrics}</div>`;
}

// ============ QUOTES ============
function buildQuotes(){
  const grid=document.getElementById('quotes-grid');
  quotes.forEach(q=>{
    const card=document.createElement('div');
    card.className='quote-card reveal';
    card.innerHTML=`<p class="quote-text">${q.text}</p><div class="quote-author">— ${q.author}</div>`;
    grid.appendChild(card);
  });
}

// ============ MEMES ============
function buildMemes(){
  const grid=document.getElementById('memes-grid');
  memes.forEach(m=>{
    const card=document.createElement('div');
    card.className='meme-card reveal';
    card.innerHTML=`<div class="meme-emoji">${m.emoji}</div><div class="meme-title">${m.title}</div><p class="meme-desc">${m.desc}</p><span class="meme-award">${m.award}</span>`;
    grid.appendChild(card);
  });
}

// ============ SCROLL ANIMATIONS ============
function initObserver(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        // Animate lb fills
        e.target.querySelectorAll('.lb-fill').forEach(f=>{f.style.width=f.dataset.width});
        // Animate hour bars
        e.target.querySelectorAll('.hour-bar').forEach(b=>{b.style.height=b.dataset.height});
      }
    });
  },{threshold:.1});
  document.querySelectorAll('.reveal,.stats-section,.lb-section,.activity-section').forEach(el=>obs.observe(el));
}

function initStatsObserver(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){animateCounters();obs.unobserve(e.target)}});
  },{threshold:.3});
  const s=document.querySelector('.stats-section');
  if(s)obs.observe(s);
}

function initBarAnimObserver(){
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){
      e.target.querySelectorAll('.lb-fill').forEach(f=>{setTimeout(()=>{f.style.width=f.dataset.width},100)});
      e.target.querySelectorAll('.hour-bar').forEach(b=>{setTimeout(()=>{b.style.height=b.dataset.height},100)});
      obs.unobserve(e.target);
    }});
  },{threshold:.2});
  document.querySelectorAll('.lb-section,.activity-section').forEach(el=>obs.observe(el));
}

// ============ LETTER TOOLTIPS ============
function initLetterHover(){
  document.querySelectorAll('.letter').forEach(l=>{
    l.title=l.dataset.member;
  });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded',()=>{
  initCanvas();
  buildLeaderboard();
  buildHourChart();
  buildMembers();
  buildChats();
  buildTimeline();
  buildSongs();
  buildQuotes();
  buildMemes();
  initObserver();
  initStatsObserver();
  initBarAnimObserver();
  initLetterHover();
});
