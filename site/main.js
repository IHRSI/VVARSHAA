// ============ MEMBER DATA (Updated from chat analysis) ============
const members = [
  {
    name: "Vedant", tag: "420", letter: "V", hue: 280, msgs: 12653, words: 45309, media: 970, lateNight: 997, caps: 68, questions: 617, emojis: 1271, abuse: 680, links: 60, laughs: 107, doubleText: 5681, convStart: 270, streak: 46, activeDays: 690, edited: 60, deleted: 23, avgLen: 19,
    desc: "The self-appointed CEO of VVARSHAA. Runs the group like a dictatorship — removes people for saying 'baigan', banned the 👍 emoji, and made the Coorg trip edit. Claims to have rizz but got rejected using the 'I have cancer' pickup line. No beard gang president. Will fight you at 102 at any given time. Baby face but will 'knock u the fuck down in 13'. 680 abuses in 3 years — that's 0.7 per day. Currently flexing Japanese fits from his Japan trip. Heart of gold hidden under 68 ALL-CAPS rants.",
    tag2: "👑 The Unhinged Leader"
  },
  {
    name: "Vashist", tag: "gwak", letter: "V", hue: 320, msgs: 1890, words: 4427, media: 176, lateNight: 195, caps: 1, questions: 109, emojis: 130, abuse: 11, links: 3, laughs: 7, doubleText: 746, convStart: 59, streak: 12, activeDays: 294, edited: 31, deleted: 4, avgLen: 12,
    desc: "The ghost of VVARSHAA. Appears once a month to drop a '😔' or jinx an IPL match, then vanishes into the Hyderabad sunset. 1,890 messages in 3 years — that's 2 per day. Average message: 12 characters. The only member with self-love — follows himself on Instagram. Belated birthday wishes specialist. 12-day max streak tells you everything. MIT AIML Hyderabad's most mysterious export. 'Luda mera' is the peak of his vocabulary.",
    tag2: "👻 The Phantom Member"
  },
  {
    name: "Anand", tag: "bingbong", letter: "A", hue: 200, msgs: 7095, words: 26077, media: 806, lateNight: 639, caps: 13, questions: 378, emojis: 641, abuse: 103, links: 38, laughs: 81, doubleText: 2117, convStart: 214, streak: 41, activeDays: 678, edited: 61, deleted: 45, avgLen: 20,
    desc: "The cricket obsessed fanatic who will defend RCB with his life. Walks like a 48-year-old arthritic alligator. The group's moral compass who immediately loses morality at 2 AM. Obsessed with food — will ask 'when we eating' in any situation. Uses 'Damn' and '🐿️' as personality traits. The Malayali who forgot what a mundu is called. Known for his 1:58 AM wisdom: 'Pussies sleep at night. Men grind at night.'",
    tag2: "🐿️ The Hungry Alligator"
  },
  {
    name: "Rohit", tag: "sourgrapes", letter: "R", hue: 120, msgs: 5058, words: 17703, media: 297, lateNight: 591, caps: 13, questions: 264, emojis: 580, abuse: 45, links: 22, laughs: 11, doubleText: 1558, convStart: 103, streak: 40, activeDays: 626, edited: 15, deleted: 31, avgLen: 19,
    desc: "Disappeared for 7 hours making everyone including his mom panic, turned out he was playing basketball with Anagha. The group's most voted for 'likely to cheat' and 'likely to hook up'. Roommate who takes pictures of Vedant sleeping. Real Madrid fan who suffers in silence. Only 11 laughs in 3 years — this man does not find you funny. OS lab teacher felt bad and gave him marks. 'It'll be fucking depressing if I live in hostel as a senior.'",
    tag2: "🏃 The Vanishing Act"
  },
  {
    name: "Shadab", tag: "mrkms", letter: "S", hue: 30, msgs: 4514, words: 17207, media: 653, lateNight: 342, caps: 22, questions: 367, emojis: 537, abuse: 261, links: 12, laughs: 27, doubleText: 1004, convStart: 98, streak: 25, activeDays: 563, edited: 63, deleted: 23, avgLen: 22,
    desc: "The first one to say 'Lodaaaaaa bc' when joining the group — set the tone forever. Astro club board member who somehow also ended up at Volvo. Goes to Tiwari chats even on Diwali. Tried to spell 'Ponnanna' 4 times before getting it right. Cambridge English claims but can't spell properly. Master of 'chup lodu' across all conversations. Wanted to roast Vashist but 'pulled out last minute cause it was dark'. The gym bro who eats at every dessert place. Has male pattern baldness but gives hair advice.",
    tag2: "🌙 The Contradiction King"
  },
  {
    name: "Hiten", tag: "HRS", letter: "H", hue: 0, msgs: 5011, words: 14677, media: 1222, lateNight: 518, caps: 3, questions: 306, emojis: 348, abuse: 6, links: 51, laughs: 0, doubleText: 1575, convStart: 162, streak: 39, activeDays: 661, edited: 140, deleted: 112, avgLen: 21,
    desc: "The most media shared (1,222!) but only 6 abuses in 3 years — certified saint. Edits messages 140 times — the perfectionist nobody asked for. Deletes 112 messages — what is he hiding? The travel planner who suggests 6 places 'just to cancel'. 100% PE attendance legend. Recommends movies nobody wants to watch. Got all C grades and said 'kya he fark padta'. Survived Travis Scott standing section. Applied for Visa, got rejected, still vibing. 'Have hope, it's still possible' energy.",
    tag2: "📸 The Silent Documentarian"
  },
  {
    name: "Aakarsh", tag: "bevu", letter: "A", hue: 60, msgs: 6420, words: 27312, media: 1362, lateNight: 733, caps: 3, questions: 561, emojis: 1007, abuse: 247, links: 109, laughs: 76, doubleText: 2251, convStart: 329, streak: 61, activeDays: 728, edited: 110, deleted: 148, avgLen: 29,
    desc: "Got 80 in midsems when he expected 40 — the accidental genius. 61-day streak — most consistent member. 109 links shared — the Reddit recruiter. Asks the most questions (561!). Deletes 148 messages — certified evidence destroyer. Sends memes at 4 AM. The philosopher who said 'Let's die together' with a suicide hotline image. 'Relax guys all this is just worldly pleasures' energy. Writes the longest messages (29 chars avg). Got DS lab E grade and still acts unbothered.",
    tag2: "🤓 The Accidental Genius"
  },
  {
    name: "Aryan", tag: "ninjastar", letter: "A", hue: 160, msgs: 12107, words: 47176, media: 1398, lateNight: 955, caps: 25, questions: 439, emojis: 1094, abuse: 210, links: 47, laughs: 148, doubleText: 5104, convStart: 418, streak: 38, activeDays: 771, edited: 69, deleted: 51, avgLen: 22,
    desc: "Created the group as 'Eh idk' and somehow became the unofficial admin dictator. Most words typed (47,176!) — literally wrote a novel in this chat. Most conversation starts (418) — the guy who can't let the chat die. Laughs the most (148) — at least someone finds yall funny. Man United fan who has contemplated deleting FPL every gameweek since 2023. Booked the Coorg stay, organized the carnival, planned every outing. Amazon interview survivor. 'Crazy life mannnn...diljit coldplay and anirudh all in 6 months' sums him up perfectly.",
    tag2: "⚡ The Content Machine"
  }
];

// ============ WHAT IF SCENARIOS ============
const whatIfs = [
  {
    name: "Vedant", emoji: "👨‍🏫", scenario: "What if Vedant became a teacher?",
    answer: "First lecture: 'HOSTEL AA LAUDE'. Bans 👍 in homework. 680 verbal warnings per semester — that's 3.7 per class. Removes students from class as 'timeout'. Dress code: no beard = extra credit. Claims his teaching has 'rizz' but every student drops the course. Organizes a class trip, books it himself, then fights everyone about the itinerary. Baby face but threatens to 'knock students the fuck down' for late submissions.",
    chaos: 95
  },
  {
    name: "Vashist", emoji: "🍽️", scenario: "What if Vashist ran a restaurant?",
    answer: "Opens at random hours — sometimes once a month. Menu has exactly 1 item and it costs ₹58. Sends 'happy belated dining' to customers who already left. Reviews: 'Great food, never seen the owner.' Annual revenue: 1,890 customers in 3 years. Average serving size: 12 grams. Follows his own restaurant on Instagram. Closes without notice, responds 3 weeks later with '😔'.",
    chaos: 40
  },
  {
    name: "Anand", emoji: "🎙️", scenario: "What if Anand became an IPL commentator?",
    answer: "Walks to the commentary box like a 48-year-old arthritic alligator. Every match analysis starts with 'When are we eating?' Gets emotionally destroyed when SRH can't defend 277 at home. Uses 'Damn' and '🐿️' as catchphrases. Reminds the audience that 'pussies sleep at night, men grind at night' during late matches. Gets fired for eating the microphone.",
    chaos: 65
  },
  {
    name: "Rohit", emoji: "🔍", scenario: "What if Rohit became a detective?",
    answer: "Goes missing during every case for 7 hours. Mom calls 20 times. Found playing basketball at the crime scene. Case report: 'Trust the process.' Only laughs 11 times in his entire career — this man does NOT find crime funny. Evidence folder: just pictures of Vedant sleeping. OS lab teacher felt bad and gave him his detective license. Says 'It'll be fucking depressing if I solve this case' about every single case.",
    chaos: 55
  },
  {
    name: "Shadab", emoji: "🌐", scenario: "What if Shadab became a diplomat?",
    answer: "First words at the UN General Assembly: 'Lodaaaaaa bc'. Tries to spell the country's name 4 times — Pangladesh, Bagladesh, Banglasesh, Bangladesh ✅. Goes to peace summits even on Diwali. Cambridge English on resume, still can't spell 'treaty'. Astro-Political Board Member at 3 organizations simultaneously. Wants to roast enemy nations but pulls out last minute 'cause it was dark'. The gym bro diplomat who eats dessert at every international dinner.",
    chaos: 78
  },
  {
    name: "Hiten", emoji: "✈️", scenario: "What if Hiten became a travel influencer?",
    answer: "Suggests 6 destinations per video, visits 0. 100% attendance at the airport lounge but 0 flights taken. Recommends hotels nobody wants to stay in. Got visa rejected, still posts travel reels. 1,222 photos per trip, 3 words per caption. Edits his captions 140 times before posting. Deletes 112 posts — what were they?! Only 6 negative comments in his entire career. 'Have hope, it's still possible' under every failed booking.",
    chaos: 35
  },
  {
    name: "Aakarsh", emoji: "📚", scenario: "What if Aakarsh became a philosopher?",
    answer: "Publishes 'Worldly Pleasures: A Reddit Thread Analysis' at 4 AM. 109 academic citations, all from Reddit. Gets E in thesis defense, still unbothered. 148 papers retracted (deleted) — what was in them? Asks 561 questions in his dissertation — the committee gives up. 61-day meditation streak before breaking it to send a meme. 'Let\\'s die together' becomes a TED Talk title. Gets 80% when he expected 40% — accidentally becomes Department Head.",
    chaos: 72
  },
  {
    name: "Aryan", emoji: "🏛️", scenario: "What if Aryan created a country?",
    answer: "Names it 'Eh idk', changes it 3 times, settles on 'VVARSHAA Republic'. Writes a 47,176-word constitution that nobody reads. Citizens get removed as 'timeout' for minor offenses. National sport: FPL (mandatory suffering). Starts 418 national conversations but finishes none. Man United is the national team — the country is in perpetual emotional damage. Amazon is the only employer. 'Crazy life mannnn' is the national motto. Organizes a national trip, books it himself, fights everyone.",
    chaos: 88
  }
];

// ============ TIMELINE ============
const timeline = [
  { date: "Aug 16, 2023", title: "🎬 'Eh idk' is Born", desc: "Aryan creates the group. First message: 😔😔. Anand immediately asks 'When are we eating'. The chaos begins." },
  { date: "Aug 28, 2023", title: "🤝 Shadab Enters", desc: "'Lodaaaaaa bc' — his first message. 👍 gets banned immediately. The group's vocabulary never recovers." },
  { date: "Sep 2023", title: "⚽ FPL Season Begins", desc: "Aryan starts his weekly FPL rants. Man United suffering becomes group entertainment. 'Fuck off Rashford' enters the lexicon." },
  { date: "Oct 2023", title: "🎃 The Indecisive Movie Night", desc: "Halloween. 8 people. 50+ messages. Zero consensus. Vedant removes Rohit. Adds back. Still no movie. Peak VVARSHAA." },
  { date: "Nov 2023", title: "🚨 The Rohit Incident", desc: "Rohit vanishes for 7 hours. Mom calls 20 times. Group panics. He was playing basketball with Anagha. Night canteen tab: on Rohit." },
  { date: "Nov 15, 2023", title: "⚔️ Nov 15 Fight Day", desc: "Vedant's legendary 'form comeback' day. 'I havent laughed for the past 24hrs coz ill knock u the fuck down.' Nobody actually fought." },
  { date: "Dec 2023", title: "📉 First Sem Results", desc: "Results drop. Shadab gets 9 CGPA and just sleeps. Vedant pledges 10K treat if he doesn't hit 9+. Aakarsh talks about dark web red rooms." },
  { date: "Feb 2024", title: "🏔️ Coorg Trip Planning", desc: "4 months of argument for a 4-hour trip. Vedant books everything, fights everyone, plans the itinerary. Peak group dynamics." },
  { date: "May 2024", title: "🏔️ COORG TRIP", desc: "7 boys, 1 Innova Crysta, Dockside Inn. The greatest VVARSHAA chapter. Vedant makes the edit. Room 102 memories cemented forever." },
  { date: "Jul 2024", title: "🎮 Peak COD Era", desc: "Room 102/403 becomes the gaming hub. July 20 = BUSIEST DAY EVER (847 messages). 4AM sessions. Sleep is for the weak." },
  { date: "Dec 2024", title: "📉 The GPA Massacre", desc: "New academic director changes grading. Vedant's rant becomes group lore. Results day meltdown v2.0. The cycle continues." },
  { date: "May 2025", title: "🎤 Concert Season", desc: "Diljit, Coldplay, Anirudh — all in 6 months. Vedant and Hiten survive Travis Scott standing section. Voice gone. Legs bruised." },
  { date: "May 2025", title: "💭 The Nostalgia Wave", desc: "'Think about the way we would pull all nighters, go on random side quests.' The group realizes they're actually growing up." },
  { date: "Jun 2025", title: "💼 Internship Season", desc: "Shadab bags Volvo. Rohit gets hydel power. Aryan interviews at Amazon. Room 403 cooked. The boys are becoming men (debatable)." },
  { date: "Dec 2025", title: "🔥 847... wait, 726!", desc: "Dec 13, 2025: Second busiest day ever with 726 messages. What happened? Only VVARSHAA knows." },
  { date: "May 2026", title: "🇯🇵 Vedant in Japan", desc: "'Gang got insane fit. Japanese fit. Kal last day japan.' Shadab's review: 'Nice'. Some things never change." },
  { date: "May 28, 2026", title: "📝 This Website", desc: "54,748 messages analyzed. 199,888 words counted. 950 days remembered. The VVARSHAA legacy gets immortalized." }
];

// ============ SONGS ============
const songLyrics = `🎵 THE VVARSHAA ANTHEM 🎵

[Verse 1]
From Block 17 to the world outside,
Eight souls that Manipal couldn't divide,
Room 102 where the legends played,
COD at midnight, memories we made.

Vedant screaming "hostel aa laude,"
Aryan booking trips we can't afford today,
Anand walking like a three-legged gator,
Rohit disappearing — see you later!

[Chorus]
V-V-A-R-S-H-A-A,
We were broke but rich in every way,
From FC dinner to Coorg in May,
These are the nights that never fade away.

[Verse 2]
Shadab at Tiwari's eating alone,
Hiten documenting on his phone,
Aakarsh dropping memes at 4 AM,
Vashist — bro, you there? Say when!

[Bridge]
We fought over movies, grades, and food,
We roasted each other — understood?
But when one of us was ever down,
Eight idiots were always around.

[Outro]
He said one day you'll leave this world behind,
So live a life you will remember,
VVARSHAA — where the V stands for forever,
These bonds don't break, not now, not ever. 💔`;

const rapLyrics = `🔥 VVARSHAA CYPHER 🔥

[Intro]
Yo, VVARSHAA in the building, eight deep and we ride,
MIT Manipal legends, too stupid to hide,
From Block 17 basement to the top of the game,
Every bar in this cypher got a real one's name!

[Vedant — 420]
Vedant on the mic, baby face but don't fold,
Got rejected with "I have cancer" — that's bold!
680 abuses, yeah the mouth stays reckless,
Bans the thumbs-up emoji — group chat Texas!
Double texts 5K times, bro talks to the wall,
But hostel aa laude — he runs it all!

[Aryan — ninjastar]
Aryan ninjastar, 47 thousand words typed,
418 convos started when the chat wasn't hyped,
Man United fan, every weekend's a funeral,
FPL emotional damage, pain's perpetual!
Booked the Coorg trip, Amazon interview cleared,
"Crazy life mannnn" — yeah the legend's revered!

[Anand — bingbong]
Anand bingbong, the hungry gator walks,
"When are we eating?" is the only way he talks!
Walks like a grandpa with arthritis in the knee,
Always wants food, it's a constant guarantee!
IPL expert till his team starts to choke,
Takes it to heart — bro that ain't a joke!

[Rohit — sourgrapes]
Rohit sourgrapes, vanished for a day,
Mom called twenty times, he was out to play,
Eleven laughs total, humor's not his lane,
"It's a joke not a dick" — sourgrapes with no shame!
Real Madrid heart but the trust is the motto,
OS teacher felt bad — bro won the lotto!

[Shadab — mrkms]
Shadab mrkms, "LODA BC" was the intro,
Volvo intern, Cambridge English pseudo!
Spelled Ponnanna wrong like four times in a row,
Gym in the morning, dessert after the show!
Roasts pulled back cause "it was too dark,"
Bald head giving hair tips — that's a question mark!

[Hiten — HRS]
HRS the saint, only six abuses dropped,
1222 media, memories never stopped,
140 edits, perfectionist in the chat,
Suggests six trip spots — cancels every one flat!
Travis Scott survivor, PE attendance king,
"Have hope" is his gospel, that's his only thing!

[Aakarsh — bevu]
Aakarsh bevu, 61-day streak beast,
109 Reddit links, the content never ceased,
Deletes 148 texts — evidence? Destroyed!
"Let's die together" — bro we're all annoyed!
Got 80 expecting 40, accidental genius mode,
Worldly pleasures transcended on the Reddit road!

[Vashist — gwak]
Vashist gwak, the phantom that we miss,
1890 messages — each one took a diss,
Twelve characters average, peak efficiency,
Belated birthday wishes — that's consistency!
Follows himself on Insta, self-love supreme,
But when gwak finally texts — the whole group screams!

[Outro]
VVARSHAA VVARSHAA, say it LOUD!
Eight engineers — stupid, broke, and proud!
From Manipal halls to Japan and beyond,
54 thousand messages — an UNBREAKABLE BOND! 🎤🔥`;

// ============ QUOTES ============
const quotes = [
  // ROASTS — evenly distributed
  { text: "A beard doesn't make a man... look at Anand for example.", author: "Vedant, destroying dreams since 2023", cat: "roast" },
  { text: "It took u 30 mins to write wrong English and wrong Hindi.", author: "Aryan, after Hiten's relationship essay", cat: "roast" },
  { text: "Bro really said he's got cancer and got rejected 💀", author: "Rohit, on Vedant's rizz attempt", cat: "roast" },
  { text: "Blud can't even pull and he's talking.", author: "Rohit, ending careers casually", cat: "roast" },
  { text: "Lol bro has male pattern baldness and he's helping me. Thx 😂", author: "Shadab, on receiving hair advice", cat: "roast" },
  { text: "But he always hits the earth (hard) each step he walks.", author: "Hiten, roasting Anand's walk", cat: "roast" },
  { text: "Bro thought he did something by accepting himself gay.", author: "Aakarsh, providing commentary", cat: "roast" },
  { text: "Football you don't goal atleast here score some runs.", author: "Hiten, destroying Aryan's sports career", cat: "roast" },

  // LIFE PHILOSOPHY — evenly distributed
  { text: "Spend time offline with family not online.", author: "Hiten, the only mature member", cat: "philosophy" },
  { text: "Kaha engineering karne fass gaya mai. Acha khaasa Bangalore mei pub mei daaru pee leta.", author: "Aryan, questioning life choices", cat: "philosophy" },
  { text: "Relax guys all this is just worldly pleasures. Let's get beyond them.", author: "Aakarsh, achieving enlightenment at 1:29 AM", cat: "philosophy" },
  { text: "Kindness is free. Use some golden words.", author: "Rohit, teaching Anand manners", cat: "philosophy" },
  { text: "I know I was made by mistake but somehow I made up for it.", author: "Rohit, accidental self-reflection", cat: "philosophy" },
  { text: "Don't you want to spend your last sem in college??", author: "Hiten, hitting everyone in the feels", cat: "philosophy" },
  { text: "It was never about the place 🤷 go anywhere.", author: "Hiten, settling every trip debate ever", cat: "philosophy" },
  { text: "Pussies sleep at night. Men grind at night.", author: "Anand, 1:58 AM, before sending memes", cat: "philosophy" },

  // 2 AM WISDOM — evenly distributed
  { text: "Think about the way we would pull all nighters, go on random side quests, nothing anymore.", author: "Vedant, hitting everyone in the feels", cat: "2am" },
  { text: "Eating dinner at 7 sleeping at 10 and not spending any time with your friends is also not life bro.", author: "Aakarsh, questioning existence", cat: "2am" },
  { text: "The movie wasn't shit there was shit in the movie.", author: "Hiten, 2:20 AM film criticism", cat: "2am" },
  { text: "Bro. Suicide if u wanna do then wait till 21 july.", author: "Aryan, providing... a deadline?", cat: "2am" },
  { text: "Jab my family starts red room on dark web tab chat mein pooch lena ki result kahaan tha.", author: "Aakarsh, pre-results anxiety", cat: "2am" },
  { text: "We stood by u. I was there when u broke everything around me.", author: "Aryan, rare emotional moment", cat: "2am" },
  { text: "Nxt season we'll see.", author: "Vashist, eternal optimist for a losing team", cat: "2am" },
  { text: "I like how everyone is arguing over differential and I have no idea what the fuck is going on.", author: "Rohit, speaking for all of us", cat: "2am" },

  // PURE CHAOS — evenly distributed
  { text: "Lodaaaaaa bc", author: "Shadab, literally his first words in the group", cat: "chaos" },
  { text: "HOSTEL AA LAUDE", author: "Vedant, every time someone misbehaves", cat: "chaos" },
  { text: "bhaissab wtf am I doing here. ek banda family ek banda horny ek banda horror.", author: "Shadab, during movie selection", cat: "chaos" },
  { text: "Tell me what yall will get at 58 rs.", author: "Vashist, on being asked for a treat", cat: "chaos" },
  { text: "Sab rand hai kya kiska muh meh liye hai yes no to boldo bhadwo.", author: "Hiten, losing his patience (historic moment)", cat: "chaos" },
  { text: "@Vedant have a ceat tyre strategic timeout.", author: "Hiten, after removing Vedant from the group", cat: "chaos" },
  { text: "Anand if you ever need something we all are here bhai, fuck Vedant.", author: "Aakarsh, wholesome with a twist", cat: "chaos" },
  { text: "Bangalore wants me.", author: "Rohit, before disappearing for 7 hours", cat: "chaos" },
  { text: "Disclaimer dena padta hai warna koi offend na ho jaye.", author: "Hiten, after his relationship advice essay", cat: "chaos" },
  { text: "Luda mera.", author: "Vashist, his most eloquent response", cat: "chaos" },
  { text: "Munnar Mysore Goa Puducherry Waynad Hampi. Just to cancel.", author: "Hiten, planning trips he'll never take", cat: "chaos" },
  { text: "It's a joke not a dick don't take it so hard.", author: "Rohit, settling group arguments", cat: "chaos" }
];

// ============ MEMES/AWARDS ============
const memes = [
  { emoji: "🤬", title: "Sailor Mouth Supreme", winner: "Vedant — 680 abuses", desc: "680 abuses in 3 years. That's 0.7 abuses per day. Every single day. Without fail. This man doesn't speak — he swears with context. The academic director rant alone had more profanity than a Scorsese movie.", award: "🏆 Toxicity Champion" },
  { emoji: "📱", title: "Can't Stop Won't Stop", winner: "Vedant — 5,681 double texts", desc: "Sent 5,681 messages in a row without anyone replying. That's nearly half his total messages. This man holds entire conversations with himself. Vedant doesn't need friends, just a mirror and WiFi.", award: "📱 Double Text King" },
  { emoji: "👻", title: "The Phantom Texter", winner: "Vashist — 1,890 messages in 3 years", desc: "1,890 messages. 12 characters average. 12-day max streak. That's a message every 12 hours with the enthusiasm of a loading screen. Legend says each one took a week to craft.", award: "👻 Ghost of the Year" },
  { emoji: "🔗", title: "The Reddit Recruiter", winner: "Aakarsh — 109 links shared", desc: "109 links. Mostly Reddit. At 4 AM. Nobody clicks them. Nobody reads them. But he WILL share them. The group's unsolicited content curator, powered by insomnia and r/memes.", award: "🔗 Link Spammer Award" },
  { emoji: "📝", title: "The Perfectionist", winner: "Hiten — 140 edited messages", desc: "140 messages edited. That's a message re-written every 6.8 days for 3 years. What was wrong with the original? What did it say? The mystery keeps us up at night. Only 6 abuses though — a true gentleman.", award: "📝 Edit King" },
  { emoji: "🗑️", title: "Evidence Destroyer", winner: "Aakarsh — 148 deleted messages", desc: "148 messages deleted forever. More than anyone else. Combined with 110 edits, this man has altered approximately 258 messages. History is written by the victors — and Aakarsh is rewriting his chat history.", award: "🗑️ Delete Champion" },
  { emoji: "😶", title: "The Certified Saint", winner: "Hiten — 6 abuses in 3 years", desc: "SIX. In THREE years. In a group where Vedant alone drops 680. That's one abuse every 6 months. Hiten isn't in a group chat — he's in anger management. The bar is underground and he still set it.", award: "😇 Cleanest Mouth Award" },
  { emoji: "🌅", title: "Rise & Grind", winner: "Aryan — 418 conversation starters", desc: "Started 418 conversations after 3+ hour gaps. This man cannot let the chat die. It's 6 AM, nobody's awake, and Aryan is typing 'Bhai...' to wake up the dead. The group's unofficial defibrillator.", award: "🌅 Chat Reviver" },
  { emoji: "💀", title: "The Cancer Pickup Line", winner: "Vedant — Worst rizz in recorded history", desc: "Told a girl he has cancer. Got rejected. The group found out. Nobody let him forget. Ever. 'Even the cancer one aint working' is now VVARSHAA scripture. The bar was on the floor and he dug under it.", award: "❌ Worst Rizz Lifetime Achievement" },
  { emoji: "🍗", title: "The Starving Gator", winner: "Anand — 'When are we eating?'", desc: "Can walk like a 48-year-old arthritic alligator but will magically sprint if food is mentioned. 214 conversation starters, and half of them are asking about dinner. The group's designated food alarm clock.", award: "🍽️ Professional Eater" },
  { emoji: "🎬", title: "3hrs to Pick a Movie", winner: "Entire group — Peak indecisiveness", desc: "Halloween night. 8 people. 50+ messages. 'ek banda family ek banda horny ek banda horror'. Zero consensus. Vedant removes Rohit out of frustration. Adds back. Still no movie. They watched nothing. Classic.", award: "🎪 Peak Indecisiveness Trophy" },
  { emoji: "😂", title: "Rohit Doesn't LOL", winner: "Rohit — 11 laughs in 3 years", desc: "11 'haha/lol/lmao' instances. In 3 years. In a group chat with 54,000+ messages. Either Rohit has transcended humor, or he genuinely doesn't find any of you funny. Both are concerning. Both are probably true.", award: "😐 Stone Face Award" }
];

// ============ ANALYTICS CARDS DATA ============
const analyticsData = [
  {
    icon: "🤬", title: "Abuse Leaderboard", subtitle: "Who has the dirtiest mouth?",
    type: "bars", color: "#ef4444",
    data: [
      { name: "Vedant", val: 680 }, { name: "Shadab", val: 261 }, { name: "Aakarsh", val: 247 },
      { name: "Aryan", val: 210 }, { name: "Anand", val: 103 }, { name: "Rohit", val: 45 },
      { name: "Vashist", val: 11 }, { name: "Hiten", val: 6 }
    ]
  },
  {
    icon: "📱", title: "Double Text Champions", subtitle: "Messaging without a reply",
    type: "bars", color: "#8b5cf6",
    data: [
      { name: "Vedant", val: 5681 }, { name: "Aryan", val: 5104 }, { name: "Aakarsh", val: 2251 },
      { name: "Anand", val: 2117 }, { name: "Hiten", val: 1575 }, { name: "Rohit", val: 1558 },
      { name: "Shadab", val: 1004 }, { name: "Vashist", val: 746 }
    ]
  },
  {
    icon: "🌅", title: "Conversation Starters", subtitle: "Who texts first after silence?",
    type: "bars", color: "#06d6a0",
    data: [
      { name: "Aryan", val: 418 }, { name: "Aakarsh", val: 329 }, { name: "Vedant", val: 270 },
      { name: "Anand", val: 214 }, { name: "Hiten", val: 162 }, { name: "Rohit", val: 103 },
      { name: "Shadab", val: 98 }, { name: "Vashist", val: 59 }
    ]
  },
  {
    icon: "🌙", title: "Night Owl Rankings", subtitle: "Who's texting at 3 AM like a psychopath?",
    type: "bars", color: "#facc15",
    data: [
      { name: "Vedant", val: 997 }, { name: "Aryan", val: 955 }, { name: "Aakarsh", val: 733 },
      { name: "Anand", val: 639 }, { name: "Rohit", val: 591 }, { name: "Hiten", val: 518 },
      { name: "Shadab", val: 342 }, { name: "Vashist", val: 195 }
    ]
  },
  {
    icon: "💀", title: "Busiest Day Ever", subtitle: "July 20, 2024 — what happened?!",
    type: "big", bigVal: "847", bigLabel: "messages in one day"
  },
  {
    icon: "🔥", title: "Longest Group Streak", subtitle: "Consecutive days of chatting",
    type: "big", bigVal: "123", bigLabel: "days without silence"
  },
  {
    icon: "📅", title: "Most Active Day", subtitle: "Saturday party never stops",
    type: "big", bigVal: "SAT", bigLabel: "9,043 messages on Saturdays"
  },
  {
    icon: "⚡", title: "Messages Per Day", subtitle: "Average chaos rate",
    type: "big", bigVal: "57.6", bigLabel: "messages every single day"
  },
  {
    icon: "🔗", title: "Link Spammers", subtitle: "Reddit recruiters & URL warriors",
    type: "bars", color: "#22d3ee",
    data: [
      { name: "Aakarsh", val: 109 }, { name: "Vedant", val: 60 }, { name: "Hiten", val: 51 },
      { name: "Aryan", val: 47 }, { name: "Anand", val: 38 }, { name: "Rohit", val: 22 },
      { name: "Shadab", val: 12 }, { name: "Vashist", val: 3 }
    ]
  },
  {
    icon: "😀", title: "Emoji Fanatics", subtitle: "Who speaks in hieroglyphics?",
    type: "bars", color: "#f472b6",
    data: [
      { name: "Vedant", val: 1271 }, { name: "Aryan", val: 1094 }, { name: "Aakarsh", val: 1007 },
      { name: "Anand", val: 641 }, { name: "Rohit", val: 580 }, { name: "Shadab", val: 537 },
      { name: "Hiten", val: 348 }, { name: "Vashist", val: 130 }
    ]
  },
  {
    icon: "🏃", title: "Activity Streak Kings", subtitle: "Longest daily chatting streak",
    type: "bars", color: "#fb923c",
    data: [
      { name: "Aakarsh", val: 61 }, { name: "Vedant", val: 46 }, { name: "Anand", val: 41 },
      { name: "Rohit", val: 40 }, { name: "Hiten", val: 39 }, { name: "Aryan", val: 38 },
      { name: "Shadab", val: 25 }, { name: "Vashist", val: 12 }
    ]
  },
  {
    icon: "❓", title: "Question Masters", subtitle: "Who can't stop asking questions?",
    type: "bars", color: "#a78bfa",
    data: [
      { name: "Vedant", val: 617 }, { name: "Aakarsh", val: 561 }, { name: "Aryan", val: 439 },
      { name: "Anand", val: 378 }, { name: "Shadab", val: 367 }, { name: "Hiten", val: 306 },
      { name: "Rohit", val: 264 }, { name: "Vashist", val: 109 }
    ]
  }
];

// ============ HERO CANVAS ============
function initCanvas() {
  const c = document.getElementById('hero-canvas');
  const ctx = c.getContext('2d');
  let w, h, particles = [];
  function resize() { w = c.width = window.innerWidth; h = c.height = window.innerHeight }
  resize(); window.addEventListener('resize', resize);
  class P {
    constructor() { this.reset() }
    reset() { this.x = Math.random() * w; this.y = Math.random() * h; this.vx = (Math.random() - .5) * .4; this.vy = (Math.random() - .5) * .4; this.r = Math.random() * 2.5 + .5; this.hue = Math.random() * 360; this.alpha = Math.random() * .5 + .1 }
    update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > w) this.vx *= -1; if (this.y < 0 || this.y > h) this.vy *= -1; this.hue = (this.hue + .1) % 360 }
    draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = `hsla(${this.hue},70%,60%,${this.alpha})`; ctx.fill() }
  }
  for (let i = 0; i < 100; i++)particles.push(new P());
  function loop() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.update(); p.draw() });
    for (let i = 0; i < particles.length; i++)for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
        const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
        gradient.addColorStop(0, `hsla(${particles[i].hue},70%,60%,${.06 * (1 - dist / 100)})`);
        gradient.addColorStop(1, `hsla(${particles[j].hue},70%,60%,${.06 * (1 - dist / 100)})`);
        ctx.strokeStyle = gradient; ctx.stroke()
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
}

// ============ COUNTER ANIMATION ============
function animateCounters() {
  document.querySelectorAll('.stat-card').forEach(card => {
    const target = parseFloat(card.dataset.count);
    const suffix = card.dataset.suffix || '';
    const num = card.querySelector('.stat-num');
    const isFloat = !Number.isInteger(target);
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer) }
      num.textContent = (isFloat ? current.toFixed(1) : Math.round(current).toLocaleString()) + suffix;
    }, 25);
  });
}

// ============ LEADERBOARD ============
function buildLeaderboard() {
  const container = document.getElementById('lb-bars');
  const sorted = [...members].sort((a, b) => b.msgs - a.msgs);
  const max = sorted[0].msgs;
  const colors = ['#8b5cf6', '#06d6a0', '#f472b6', '#22d3ee', '#fb923c', '#ef4444', '#facc15', '#a78bfa'];
  sorted.forEach((m, i) => {
    const pct = (m.msgs / max * 100).toFixed(0);
    const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const bar = document.createElement('div');
    bar.className = 'lb-bar reveal';
    bar.innerHTML = `
      <div class="lb-name"><span class="rank ${rankClass}">${i + 1}</span>${m.name}</div>
      <div class="lb-track"><div class="lb-fill" style="background:${colors[i]};width:0" data-width="${pct}%">${m.msgs.toLocaleString()}</div></div>
      <div class="lb-count">${m.msgs.toLocaleString()}</div>`;
    container.appendChild(bar);
  });
}

// ============ HOUR CHART ============
function buildHourChart() {
  const hours = [3038, 1055, 599, 121, 157, 52, 113, 371, 652, 1342, 2102, 2768, 2790, 2828, 1943, 1750, 3643, 3861, 4278, 3884, 4701, 3790, 4539, 4371];
  const max = Math.max(...hours);
  const container = document.getElementById('hour-chart');
  hours.forEach((val, i) => {
    const pct = (val / max * 100).toFixed(0);
    const wrap = document.createElement('div');
    wrap.className = 'hour-bar-wrap';
    const hue = i < 5 ? 280 : i < 12 ? 200 : i < 18 ? 160 : i < 21 ? 30 : 350;
    wrap.innerHTML = `<div class="bar-container"><div class="hour-bar" style="height:0;background:hsl(${hue},70%,50%)" data-height="${pct}%" data-val="${val.toLocaleString()}"></div></div><div class="hour-label">${i}h</div>`;
    container.appendChild(wrap);
  });
}

// ============ DAY OF WEEK CHART ============
function buildDowChart() {
  const days = [7265, 8288, 8523, 7290, 7062, 7277, 9043];
  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const max = Math.max(...days);
  const container = document.getElementById('dow-chart');
  const colors = ['#8b5cf6', '#06d6a0', '#22d3ee', '#f472b6', '#fb923c', '#ef4444', '#facc15'];
  days.forEach((val, i) => {
    const pct = (val / max * 100).toFixed(0);
    const wrap = document.createElement('div');
    wrap.className = 'dow-bar-wrap';
    wrap.innerHTML = `<div class="bar-container"><div class="dow-bar" style="height:0;background:${colors[i]}" data-height="${pct}%" data-val="${val.toLocaleString()}"></div></div><div class="dow-label">${labels[i]}</div>`;
    container.appendChild(wrap);
  });
}

// ============ ANALYTICS ============
function buildAnalytics() {
  const grid = document.getElementById('analytics-grid');
  analyticsData.forEach(card => {
    const el = document.createElement('div');
    el.className = 'analytics-card reveal';
    let content = `<div class="card-icon">${card.icon}</div><div class="card-title">${card.title}</div><div class="card-subtitle">${card.subtitle}</div>`;
    if (card.type === 'bars') {
      const max = card.data[0].val;
      content += '<div class="analytics-mini-bars">';
      card.data.forEach(d => {
        const pct = max > 0 ? (d.val / max * 100).toFixed(0) : 0;
        content += `<div class="analytics-mini-bar"><span class="bar-name">${d.name}</span><div class="bar-track"><div class="bar-fill" style="width:0;background:${card.color}" data-width="${pct}%">${d.val.toLocaleString()}</div></div><span class="bar-val">${d.val.toLocaleString()}</span></div>`;
      });
      content += '</div>';
    } else if (card.type === 'big') {
      content += `<div class="big-stat">${card.bigVal}</div><div class="big-stat-label">${card.bigLabel}</div>`;
    }
    el.innerHTML = content;
    grid.appendChild(el);
  });
}

// ============ MEMBERS ============
function buildMembers() {
  const grid = document.getElementById('members-grid');
  members.forEach(m => {
    const card = document.createElement('div');
    card.className = 'member-card reveal';
    card.style.setProperty('--hue', m.hue);
    card.innerHTML = `
      <div class="member-header">
        <div class="member-avatar">${m.letter}</div>
        <div class="member-info"><h3>${m.name}</h3><div class="gamename">${m.tag}</div></div>
      </div>
      <div class="member-stats">
        <div class="member-stat"><div class="num">${m.msgs.toLocaleString()}</div><div class="lbl">Messages</div></div>
        <div class="member-stat"><div class="num">${m.words.toLocaleString()}</div><div class="lbl">Words</div></div>
        <div class="member-stat"><div class="num">${m.media.toLocaleString()}</div><div class="lbl">Media</div></div>
        <div class="member-stat"><div class="num">${m.lateNight}</div><div class="lbl">Late Night</div></div>
      </div>
      <p class="member-desc">${m.desc}</p>
      <span class="member-tag">${m.tag2}</span>`;
    grid.appendChild(card);
  });
}

// ============ WHAT IF ============
function buildWhatIf() {
  const grid = document.getElementById('whatif-grid');
  whatIfs.forEach(w => {
    const card = document.createElement('div');
    card.className = 'whatif-card reveal';
    card.innerHTML = `
      <span class="whatif-emoji">${w.emoji}</span>
      <div class="whatif-name">${w.name}</div>
      <div class="whatif-scenario">${w.scenario}</div>
      <div class="whatif-answer">${w.answer}</div>
      <div class="chaos-meter">
        <span class="chaos-label">Chaos</span>
        <div class="chaos-bar"><div class="chaos-fill" style="width:0" data-width="${w.chaos}%"></div></div>
        <span class="chaos-label">${w.chaos}%</span>
      </div>`;
    grid.appendChild(card);
  });
}

// ============ TIMELINE ============
function buildTimeline() {
  const container = document.getElementById('trail');
  timeline.forEach((t, i) => {
    const item = document.createElement('div');
    item.className = 'tl-item reveal';
    item.innerHTML = `<div class="tl-marker"></div><div class="tl-content"><div class="tl-date">${t.date}</div><div class="tl-title">${t.title}</div><div class="tl-desc">${t.desc}</div></div>`;
    container.appendChild(item);
  });
}

// ============ SONGS ============
function buildSongs() {
  document.getElementById('song-lyrics').innerHTML = `<h3>🎵 The VVARSHAA Anthem</h3><div class="lyrics">${songLyrics}</div>`;
  document.getElementById('rap-lyrics').innerHTML = `<h3>🔥 The VVARSHAA Cypher</h3><div class="lyrics">${rapLyrics}</div>`;
}

// ============ AUDIO PLAYER ============
function initAudioPlayers() {
  const tracks = { anthem: 'anthem.mp3', cypher: 'cypher.mp3' };
  const audios = {};
  document.querySelectorAll('.play-btn').forEach(btn => {
    const trackName = btn.dataset.track;
    const id = btn.id.split('-')[1];
    const vinyl = document.getElementById('vinyl-' + id);
    const bar = document.getElementById('bar-' + id);
    const timeEl = document.getElementById('time-' + id);
    const durEl = document.getElementById('dur-' + id);

    btn.addEventListener('click', () => {
      if (!audios[trackName]) {
        audios[trackName] = new Audio(tracks[trackName]);
        audios[trackName].addEventListener('loadedmetadata', () => {
          const d = audios[trackName].duration;
          durEl.textContent = Math.floor(d / 60) + ':' + String(Math.floor(d % 60)).padStart(2, '0');
        });
        audios[trackName].addEventListener('timeupdate', () => {
          const a = audios[trackName];
          const pct = (a.currentTime / a.duration * 100);
          bar.style.width = pct + '%';
          timeEl.textContent = Math.floor(a.currentTime / 60) + ':' + String(Math.floor(a.currentTime % 60)).padStart(2, '0');
        });
        audios[trackName].addEventListener('ended', () => {
          btn.textContent = '▶';
          vinyl.classList.remove('spinning');
        });
        audios[trackName].addEventListener('error', () => {
          btn.textContent = '⚠';
          btn.title = 'Audio file not found. Add ' + tracks[trackName] + ' to the site folder.';
        });
      }
      const audio = audios[trackName];
      if (audio.paused) {
        // Pause all others
        Object.values(audios).forEach(a => { if (a !== audio && !a.paused) a.pause() });
        document.querySelectorAll('.song-vinyl').forEach(v => v.classList.remove('spinning'));
        document.querySelectorAll('.play-btn').forEach(b => { if (b !== btn) b.textContent = '▶' });
        audio.play().catch(() => { });
        btn.textContent = '⏸';
        vinyl.classList.add('spinning');
      } else {
        audio.pause();
        btn.textContent = '▶';
        vinyl.classList.remove('spinning');
      }
    });
  });
  // Click on progress bar to seek
  document.querySelectorAll('.audio-progress').forEach(prog => {
    prog.addEventListener('click', e => {
      const id = prog.querySelector('.audio-bar').id.split('-')[1];
      const trackName = document.getElementById('play-' + id).dataset.track;
      if (audios[trackName] && audios[trackName].duration) {
        const rect = prog.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        audios[trackName].currentTime = pct * audios[trackName].duration;
      }
    });
  });
}

// ============ QUOTES ============
const quoteCategories = [
  { key: 'all', label: 'All' },
  { key: 'roast', label: '🔥 Roasts' },
  { key: 'philosophy', label: '🧠 Philosophy' },
  { key: '2am', label: '🌙 2 AM Wisdom' },
  { key: 'chaos', label: '💀 Pure Chaos' }
];

function buildQuoteTabs() {
  const container = document.getElementById('quote-tabs');
  quoteCategories.forEach((cat, i) => {
    const tab = document.createElement('button');
    tab.className = 'quote-tab' + (i === 0 ? ' active' : '');
    tab.textContent = cat.label;
    tab.dataset.cat = cat.key;
    tab.addEventListener('click', () => {
      document.querySelectorAll('.quote-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterQuotes(cat.key);
    });
    container.appendChild(tab);
  });
}

function buildQuotes() {
  renderQuotes('all');
}

function filterQuotes(cat) {
  renderQuotes(cat);
}

function renderQuotes(cat) {
  const grid = document.getElementById('quotes-grid');
  grid.innerHTML = '';
  const filtered = cat === 'all' ? quotes : quotes.filter(q => q.cat === cat);
  filtered.forEach(q => {
    const card = document.createElement('div');
    card.className = 'quote-card reveal visible';
    const catLabel = quoteCategories.find(c => c.key === q.cat);
    card.innerHTML = `<p class="quote-text">${q.text}</p><div class="quote-author">— ${q.author}</div><span class="quote-category">${catLabel ? catLabel.label : q.cat}</span>`;
    grid.appendChild(card);
  });
}

// ============ MEMES ============
function buildMemes() {
  const grid = document.getElementById('memes-grid');
  memes.forEach(m => {
    const card = document.createElement('div');
    card.className = 'meme-card reveal';
    card.innerHTML = `<div class="meme-emoji">${m.emoji}</div><div class="meme-title">${m.title}</div><div class="meme-winner">${m.winner}</div><p class="meme-desc">${m.desc}</p><span class="meme-award">${m.award}</span>`;
    grid.appendChild(card);
  });
}

// ============ SCROLL ANIMATIONS ============
function initObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Animate fills
        e.target.querySelectorAll('.lb-fill').forEach(f => { setTimeout(() => { f.style.width = f.dataset.width }, 100) });
        e.target.querySelectorAll('.hour-bar').forEach(b => { setTimeout(() => { b.style.height = b.dataset.height }, 100) });
        e.target.querySelectorAll('.dow-bar').forEach(b => { setTimeout(() => { b.style.height = b.dataset.height }, 100) });
        e.target.querySelectorAll('.bar-fill').forEach(f => { setTimeout(() => { f.style.width = f.dataset.width }, 100) });
        e.target.querySelectorAll('.chaos-fill').forEach(f => { setTimeout(() => { f.style.width = f.dataset.width }, 200) });
      }
    });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-scale,.stats-section,.lb-section,.activity-section,.analytics-section').forEach(el => obs.observe(el));
}

function initStatsObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounters(); obs.unobserve(e.target) } });
  }, { threshold: .3 });
  const s = document.querySelector('.stats-section');
  if (s) obs.observe(s);
}

function initBarAnimObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.lb-fill').forEach(f => { setTimeout(() => { f.style.width = f.dataset.width }, 100) });
        e.target.querySelectorAll('.hour-bar').forEach(b => { setTimeout(() => { b.style.height = b.dataset.height }, 100) });
        e.target.querySelectorAll('.dow-bar').forEach(b => { setTimeout(() => { b.style.height = b.dataset.height }, 100) });
        e.target.querySelectorAll('.bar-fill').forEach(f => { setTimeout(() => { f.style.width = f.dataset.width }, 150) });
        e.target.querySelectorAll('.chaos-fill').forEach(f => { setTimeout(() => { f.style.width = f.dataset.width }, 200) });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .15 });
  document.querySelectorAll('.lb-section,.activity-section,.analytics-section,.whatif-section').forEach(el => obs.observe(el));
}

// ============ FLOATING NAV ============
function initNav() {
  const sections = document.querySelectorAll('.section');
  const dots = document.querySelectorAll('.nav-dot');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        dots.forEach(d => d.classList.remove('active'));
        const active = document.querySelector(`.nav-dot[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: .3 });
  sections.forEach(s => obs.observe(s));
}

// ============ LETTER TOOLTIPS ============
function initLetterHover() {
  document.querySelectorAll('.letter').forEach(l => {
    l.title = l.dataset.member;
  });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  buildLeaderboard();
  buildHourChart();
  buildDowChart();
  buildAnalytics();
  buildMembers();
  buildWhatIf();
  buildTimeline();
  buildSongs();
  buildQuoteTabs();
  buildQuotes();
  buildMemes();
  initObserver();
  initStatsObserver();
  initBarAnimObserver();
  initNav();
  initLetterHover();
  initAudioPlayers();
});
