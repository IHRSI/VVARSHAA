<div align="center">

# VVARSHAA
<img src="https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=250&section=header&text=VVARSHAA&fontSize=90&animation=fadeIn&fontAlignY=38&desc=8%20Idiots.%201%20Group%20Chat.%2055,000+%20Messages.&descAlignY=51&descAlign=62" />

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Website-Live-06d6a0?style=for-the-badge&logo=vercel&logoColor=white" /></a>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

*A living tribute website to the MIT Manipal, Batch of '27 friend group that survived 950+ days of pure chaos.*

</div>

---

## ⚡ What is this?
**VVARSHAA** isn't just a group chat; it's a social experiment that went horribly right. This repository hosts a fully static, vanilla JS tribute website that parses, analyzes, and immortalizes over 55,000 WhatsApp messages.

We turned raw JSON chat data into a dynamic dashboard featuring:
- **📊 Real-time Chat Analytics**
- **🏆 The VVARSHAA Leaderboards**
- **🎤 Original AI-Generated Anthems & Cyphers**
- **🤡 A Meme Wall, Quotes, & "What If" Scenarios**

## 🧩 The Squad
The name VVARSHAA comes from the first letters of its 8 architects of chaos:

<div align="center">

| Initial | Name | Gamertag | Description |
|:---:|:---|:---|:---|
| <img src="https://img.shields.io/badge/V-8b5cf6?style=flat-square" /> | **Vedant** | `420` | The unhinged self-appointed CEO. 680+ abuses. Runs the chat like a dictatorship. |
| <img src="https://img.shields.io/badge/V-f472b6?style=flat-square" /> | **Vashist** | `gwak` | The phantom member. Appears monthly to drop a 😔 and vanishes. |
| <img src="https://img.shields.io/badge/A-06d6a0?style=flat-square" /> | **Anand** | `bingbong` | Walks like an alligator. Constantly asking "when are we eating?" |
| <img src="https://img.shields.io/badge/R-22d3ee?style=flat-square" /> | **Rohit** | `sourgrapes` | 11 laughs in 3 years. Ghosted the group for 7 hours to play basketball. |
| <img src="https://img.shields.io/badge/S-fb923c?style=flat-square" /> | **Shadab** | `mrkms` | Volvo intern. Gym bro. Entered the chat saying "Loda bc". |
| <img src="https://img.shields.io/badge/H-ef4444?style=flat-square" /> | **Hiten** | `HRS` | Only 6 abuses. Edits everything 140 times. Suggests trips just to cancel them. |
| <img src="https://img.shields.io/badge/A-facc15?style=flat-square" /> | **Aakarsh** | `bevu` | Posts Reddit links at 4 AM. Accidental genius. Evidence destroyer (148+ deleted). |
| <img src="https://img.shields.io/badge/A-a78bfa?style=flat-square" /> | **Aryan** | `ninjastar` | The creator. 47k+ words typed. Man United fan in perpetual pain. |

</div>

## 🚀 Features

<details>
<summary><b>📈 Deep Analytics Dashboard</b></summary>
A custom vanilla JS dashboard breaks down 55k+ messages into:
- 🌙 **Night Owl Rankings:** Who texts the most between midnight and 6 AM.
- 🤬 **Toxicity Meter:** 680+ abuses counted and ranked.
- 📱 **Double Text Champions:** Visualizing who holds conversations with themselves.
- 📊 **Activity Heatmaps:** Breakdown of messages by Hour of Day and Day of the Week.
</details>

<details>
<summary><b>🎵 Custom Audio Player</b></summary>
Features an interactive spinning vinyl player built natively with HTML5 Audio & CSS animations.
Includes the **VVARSHAA Anthem** and the **VVARSHAA Cypher** with custom lyrics tailored to the group's inside jokes.
</details>

<details>
<summary><b>😂 The Wall of Chaos</b></summary>
- **Meme Wall:** Custom awards like "Worst Rizz", "Link Spammer", and "The Phantom Texter".
- **Quotes:** Filterable grid of 2AM wisdom, life philosophy, and pure unadulterated roasts.
- **What If Scenarios:** Hilarious alternate realities for each member (e.g., Shadab as a Diplomat).
</details>

## 🛠️ Tech Stack & Architecture

This project was built intentionally without modern heavy frameworks (no React, no Vue) to ensure lightning-fast loads and ultimate control over the DOM.

*   **HTML5** - Semantic structure and layout
*   **CSS3** - Custom variables, flexbox/grid layouts, keyframe animations, glassmorphism, responsive design
*   **Vanilla JS** - DOM manipulation, IntersectionObserver for scroll animations, custom data visualization (building bar charts from scratch)
*   **Data Preprocessing** - Raw WhatsApp chats `.txt` backups are parsed via a Node script into cleanly structured JSON arrays. *(Note: The raw chat data is gitignored for privacy).*

## 🚢 Deployment

The site is configured for automatic zero-config deployment on **Vercel**.

1. Connect the repository to Vercel.
2. Set the **Root Directory** to `site`.
3. Vercel automatically serves the static files.

> Note: Make sure `stats.json` and the audio files (`anthem.mp3`, `cypher.mp3`) are inside the `site/` folder before deployment.

---
<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Inter&size=20&pause=1000&color=06d6a0&center=true&vCenter=true&width=435&lines=VVARSHAA+—+where+the+V+stands+for+forever;These+bonds+don't+break,+not+now,+not+ever" />
</div>
