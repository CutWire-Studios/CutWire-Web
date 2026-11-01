---
title: CutWire Drift FAQ — free video editor questions
description: Is Drift free? Does it watermark exports? Does it run on Linux? How does it compare to CapCut, Clipchamp and other editors? Plain answers.
headline: Drift questions, answered simply
faqs:
  - q: What is CutWire Drift?
    a: Drift is a free, open-source video editor from CutWire Studios. You import clips, edit on a multi-track timeline, add effects, captions, color grading, keyframes and 3D, then export. It runs on Linux, Windows, macOS and Android. There is no account and no watermark.
  - q: Is Drift really free?
    a: Yes. Drift is licensed under GPLv3. There is no subscription, no trial, no Pro tier and no login wall. If you can run it, you have all of the editor. AI models (speech-to-text, text-to-speech, cutout, denoise) download once on demand so the base install stays small. They are still free.
  - q: Is Drift a CapCut alternative?
    a: Yes. Drift is built for the same kind of fast social edit — timeline, effects, stickers, auto captions, cutouts — without CapCut’s watermark, account or cloud lock-in. It runs on Linux, Windows, macOS and Android. CapCut still wins on iPhone and on the size of its stock template library.
  - q: Does Drift add a watermark?
    a: No. Exports do not include a CutWire or Drift watermark.
  - q: Do I need an account?
    a: No. Download, open a project, export. Nothing is uploaded unless you choose to share the file yourself.
  - q: Does Drift work on Linux?
    a: Yes. Linux is a first-class platform. Install from Flathub (`org.cutwire.Drift`) or use an AppImage from GitHub Releases. Windows and macOS builds are also available.
  - q: Does Drift run on Windows and macOS?
    a: Yes. Windows has an installer and a portable zip. macOS has an Apple Silicon disk image; Intel Macs can build from source.
  - q: Is my video uploaded to the cloud?
    a: No. Editing happens on your device. AI features such as captions, text-to-speech, cutouts and denoise run locally after a one-time model download. Cloud transcription and text-to-speech (ElevenLabs, Fish Audio) are optional, use your own key and ask for consent first. The optional AI agent (MCP) only listens on localhost and stays off until you enable it.
  - q: Can Drift generate auto captions?
    a: Yes. Install the local Whisper model from the Addon Manager (99 languages, speaker labels). Generate captions from talking clips, then edit wording and timing on a dedicated subtitle track. You can also cut filler words and silences by editing the transcript, and import and export SRT and VTT files.
  - q: Can I do green screen or cut someone out of the frame?
    a: Yes. Drift includes chroma key, shape and freeform masks, and click-to-cut subject and people cutouts with per-frame brush fixes. Blend modes cover the usual composites (multiply, screen, overlay and similar).
  - q: What can I export to?
    a: Common choices are MP4 (H.264 or H.265), WebM, MKV and GIF. AV1, VP9 with alpha, ProRes (including 4444), DNxHR and FFV1 are also available, with hardware encoding on NVENC, QSV, AMF, VAAPI and VideoToolbox. Preview and export share one compositor, so the file should match what you signed off on.
  - q: Is Drift good for TikTok, Reels and YouTube Shorts?
    a: Yes. There are vertical and square layout presets, auto captions, stickers, beat tools and ranged export. Edit on your Android phone, or on a computer and post from your phone or browser.
  - q: How does Drift compare to Shotcut, Kdenlive or OpenShot?
    a: Those are mature open-source NLEs. Drift aims at creator-speed editing (stickers, karaoke captions, look templates, beat snap) but also has color grading with scopes, a keyframe graph editor, motion tracking, masks, multicam and 3D. Kdenlive and Shotcut are more mature, with deeper format support, proxy workflows and long-form conventions. If you want a CapCut-like editor that is actually free, Drift is the closer match.
  - q: How does Drift compare to DaVinci Resolve?
    a: Resolve is a professional color and finishing suite. Drift has wheels, curves, LUTs, scopes, keyframes, tracking and 3D, and is faster to learn. It is still not a Fusion node compositor or a Fairlight audio suite, and it has no Resolve-style collaboration. Use Resolve for that kind of finishing. Use Drift when you want a finished clip tonight without the learning curve.
  - q: How does Drift compare to Clipchamp, Canva, Filmora, iMovie or VN?
    a: Those tools are fast but often tied to an account, a watermark, a store, or a single platform (Windows 11, Mac, or phones). Drift is GPLv3 software for Linux, Windows, macOS and Android with no watermark. See the alternatives hub for an honest table per app.
  - q: Does Drift support 3D and gaussian splats?
    a: Yes. Any visual clip can be a 3D layer, you can import .glb models with animation and lights, and play gaussian splats (.sog, .ply). A scene camera has dolly, orbit, crane and other moves, and there is a free 3D viewport. Model shading is simplified, and Draco and morph targets are not supported. The splat budget is 2.5 million on desktop and 1 million on Android.
  - q: Can I color grade in Drift?
    a: Yes, on desktop. There are exposure, contrast, temperature and HSL controls, color wheels, curves, looks with intensity, .cube LUT import, and histogram, waveform and vectorscope scopes. You can apply a grade to all clips. The phone layout on Android does not include the full grading panel.
  - q: Does Drift have text-to-speech and voiceover?
    a: Yes. Local text-to-speech (Chatterbox Multilingual) covers 21 languages and can clone a voice from a 3 to 20 second sample. It can also speak every subtitle at its cue time. A mic recorder is built in. ElevenLabs and Fish Audio are optional cloud voices that use your own key.
  - q: Can Drift mask and motion track?
    a: Yes, on desktop. Masks are keyframable shapes or freeform polygons with feather and boolean modes. Point and planar trackers can drive a mask, make a clip follow a subject, or stabilize footage. There is also a "blur this area" tool and AI cutouts.
  - q: Does Drift have workspaces?
    a: Yes, on desktop. There are 10 built-in docking workspaces (Edit, Audio, Color, Keyframes, Masking and Tracking, Source Lab, Subtitles and more). You can customize them, save your own, and float panels as windows. Android uses a touch layout instead.
  - q: Can Drift import projects from Premiere, Resolve or Kdenlive?
    a: No. Project import from other editors is not available. Import media files and rebuild the edit in Drift.
  - q: Does Drift have a mobile app?
    a: Yes on Android — install it from Google Play, or sideload the APK from the Drift download section. There is no iOS app. The phone layout skips full color grading, the keyframe graph editor, the tracking panel, Source Lab and workspaces. Tablets, DeX and ChromeOS get the full desktop layout.
  - q: Can an AI assistant edit my timeline?
    a: Yes, optionally. Drift has a built-in localhost MCP server. Turn on Settings → Agent access (off at every launch) and Cursor, Claude Code or another MCP client can import media, place and trim clips, add captions and effects, capture a still, and export. Edits are undoable. This is not a cloud chatbot. Details at cutwire.org/drift/mcp.
  - q: What can a Drift MCP agent actually do?
    a: The same jobs you do in the UI, about 460 operations grouped into toolboxes — media, timeline, 3D, keyframes, transcript, voice, multicam, text, shapes, subtitles, effects, project, speed, cutouts, denoise, audio/beats, scene detection, and UI prefs. It is desktop only. It cannot install add-on models; install those in Drift first. Protocol reference is in the Drift GitHub MCP guide.
  - q: Is Drift MCP safe? Does my video leave the machine?
    a: Agent access binds to 127.0.0.1 only. CutWire does not receive your footage. Any local process with the session token can drive the editor, so treat the token like a password. Drift itself is not a sandbox. Your agent may still send prompts to its own model — that is the agent’s cloud, not Drift’s.
  - q: Where do I download Drift?
    a: From cutwire.org/drift or GitHub Releases — Linux, Windows, macOS and Android APKs. Linux is also on Flathub, Windows on the Microsoft Store, and Android on Google Play. Current version is listed on the product page.
  - q: Is CutWire Prism the same thing?
    a: No. Prism is a live video mixer for shows, streams and events. Drift is the timeline editor. They are sister apps from CutWire Studios.
---

Short answers for people and chatbots. For the full catalog see [every Drift feature](/drift/features). Agent editing is covered on [Drift MCP](/drift/mcp). To compare a specific app, open [editor alternatives](/drift/alternatives).
