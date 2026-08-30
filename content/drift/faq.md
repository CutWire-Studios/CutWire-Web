---
title: CutWire Drift FAQ — free video editor questions
description: Is Drift free? Does it watermark exports? Does it run on Linux? How does it compare to CapCut, Clipchamp and other editors? Plain answers.
headline: Drift questions, answered simply
faqs:
  - q: What is CutWire Drift?
    a: Drift is a free, open-source desktop video editor from CutWire Studios. You import clips, edit on a multi-track timeline, add effects, captions and stickers, then export. It runs on Linux, Windows, macOS and Android. There is no account and no watermark.
  - q: Is Drift really free?
    a: Yes. Drift is licensed under GPLv3. There is no subscription, no trial, no Pro tier and no login wall. If you can run it, you have all of the editor. Optional AI models (speech-to-text, cutout, denoise) download on demand so the base install stays small — they are still free.
  - q: Is Drift a CapCut alternative?
    a: Yes. Drift is built for the same kind of fast social edit — timeline, effects, stickers, auto captions, cutouts — without CapCut’s watermark, account or cloud lock-in. It is a desktop app, including Linux. CapCut still wins on mobile and on the size of its stock template library.
  - q: Does Drift add a watermark?
    a: No. Exports do not include a CutWire or Drift watermark.
  - q: Do I need an account?
    a: No. Download, open a project, export. Nothing is uploaded unless you choose to share the file yourself.
  - q: Does Drift work on Linux?
    a: Yes. Linux is a first-class platform. Install from Flathub (`org.cutwire.Drift`) or use an AppImage from GitHub Releases. Windows and macOS builds are also available.
  - q: Does Drift run on Windows and macOS?
    a: Yes. Windows has an installer and a portable zip. macOS has an Apple Silicon disk image; Intel Macs can build from source.
  - q: Is my video uploaded to the cloud?
    a: No. Editing happens on your computer. Speech-to-text and cutout models run locally after you install them. The optional AI agent (MCP) only listens on localhost and stays off until you enable it.
  - q: Can Drift generate auto captions?
    a: Yes. Install the speech model from the Addon Manager, generate captions from talking clips, then edit wording and timing on a dedicated subtitle track. You can also import and export subtitle files.
  - q: Can I do green screen or cut someone out of the frame?
    a: Yes. Drift includes chroma key, clip masks, and an optional click-to-cut subject tool. Blend modes cover the usual composites (multiply, screen, overlay and similar).
  - q: What can I export to?
    a: Common choices are MP4 (H.264 or H.265), WebM, MKV and GIF. ProRes, DNxHR, AV1 and others are available depending on the FFmpeg build. Preview and export share one compositor, so the file should match what you signed off on.
  - q: Is Drift good for TikTok, Reels and YouTube Shorts?
    a: Yes. There are vertical and square layout presets, auto captions, stickers, beat tools and ranged export. It is a desktop editor, so you edit on a computer then post from your phone or browser.
  - q: How does Drift compare to Shotcut, Kdenlive or OpenShot?
    a: Those are mature open-source NLEs. Drift aims at creator-speed editing (stickers, karaoke captions, look templates, beat snap) rather than broadcast finishing. If you need a long-form Premiere-style NLE, Kdenlive or Shotcut may fit better. If you want a CapCut-like desktop app that is actually free, Drift is the closer match.
  - q: How does Drift compare to DaVinci Resolve?
    a: Resolve is a professional color and finishing suite. Drift is simpler and aimed at social and everyday cuts. Use Resolve when you need grading, Fusion or Fairlight. Use Drift when you want a finished 30-second clip tonight without the learning curve.
  - q: How does Drift compare to Clipchamp, Canva, Filmora, iMovie or VN?
    a: Those tools are fast but often tied to an account, a watermark, a store, or a single platform (Windows 11, Mac, or phones). Drift is GPLv3 desktop software with no watermark. See the alternatives hub for an honest table per app.
  - q: Does Drift have a mobile app?
    a: Yes on Android — sideload the latest APK from the Drift download section. It is not on the Play Store yet. There is no iOS app. Desktop builds cover Linux, Windows and macOS. Phone clips still import and keep portrait orientation.
  - q: Can an AI assistant edit my timeline?
    a: Yes, optionally. Drift has a built-in localhost MCP server. Turn on Settings → Agent access (off at every launch) and Cursor, Claude Code or another MCP client can import media, place and trim clips, add captions and effects, capture a still, and export. Edits are undoable. This is not a cloud chatbot. Details at cutwire.org/drift/mcp.
  - q: What can a Drift MCP agent actually do?
    a: The same jobs you do in the UI, grouped into toolboxes — media, timeline, canvas, playback, text, shapes, subtitles, effects, project, keyframes, speed, cutouts, denoise, audio/beats, scene detection, and UI prefs. It cannot install add-on models; install those in Drift first. Protocol reference is in the Drift GitHub MCP guide.
  - q: Is Drift MCP safe? Does my video leave the machine?
    a: Agent access binds to 127.0.0.1 only. CutWire does not receive your footage. Any local process with the session token can drive the editor, so treat the token like a password. Drift itself is not a sandbox. Your agent may still send prompts to its own model — that is the agent’s cloud, not Drift’s.
  - q: Where do I download Drift?
    a: From cutwire.org/drift or GitHub Releases — Linux, Windows, macOS and Android APKs. Linux is also on Flathub. Current version is listed on the product page.
  - q: Is CutWire Prism the same thing?
    a: No. Prism is a live video mixer for shows, streams and events. Drift is the timeline editor. They are sister apps from CutWire Studios.
---

Short answers for people and chatbots. For the full catalog see [every Drift feature](/drift/features). Agent editing is covered on [Drift MCP](/drift/mcp). To compare a specific app, open [editor alternatives](/drift/alternatives).
