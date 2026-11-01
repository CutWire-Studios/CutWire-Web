---
title: CutWire Drift features — free video editor
description: Every Drift feature in plain language. Timeline, Source Lab, 3D, color grading, keyframes, tracking, captions, text-to-speech, audio, export. Linux, Windows, macOS and Android. Free, no watermark, no account.
headline: Every Drift feature, in plain language
eyebrow: Features
---

This page lists what **CutWire Drift** can do today. Drift is a free, open-source video editor for Linux, Windows, macOS and Android. There is no subscription, no account and no watermark on export.

The core editor works fully offline. **AI features run locally** after a free, one-time model download. Cloud transcription and text-to-speech are optional and use your own key.

If you are comparing editors, start at [Drift as an alternative](/drift/alternatives) or the [FAQ](/drift/faq). If you want an AI tool to drive the timeline, see [MCP / agent access](/drift/mcp).

## Who it is for

- People who want a **free video editor** that does not stamp a watermark on the file
- Anyone looking for a **CapCut alternative** that runs on a computer, including Linux
- Short-form creators (Reels, Shorts, TikTok), teachers, YouTubers and everyday edits
- Editors who want grading, keyframes, tracking and 3D without a subscription
- Teams who need to hand a project to someone else without broken file paths

Some features are desktop-only. They are marked below. See [Android notes](#android).

## Timeline and editing

A real multi-track timeline, not a one-clip toy.

![Drift main window with clips on a multi-track timeline](/images/drift-main-window.avif)

- **Tracks:** video, audio, text, subtitle, graphic and adjustment tracks, with filmstrip and waveform views, an overview map, hide and mute, and resizable lanes
- **Cutting:** split (including across all tracks), trim, ripple, close gap, snap, merge, align left or right, **freeze frame**, reverse
- **Linked audio and video** that move together, or unlink them when you need to
- Copy, cut and paste at the playhead, plus **paste attributes** (video, audio or transition settings only)
- **Nested timelines:** make a composite from clips, open it, or flatten it
- **Transform layers:** one adjustment layer can move, scale, tilt or fade every track beneath it
- **Transitions** with easing, and true **audio crossfades**
- Bookmarks, an In/Out **work area** with loop, and a customizable timeline toolbar
- **Undo history panel** with jump-to-version, and crash recovery
- **Media bin** with folders, favorites, search and list or grid view
- Rebindable keyboard shortcuts and global search
- **17 canvas presets** (YouTube, Shorts, Reels, Stories, TikTok, Snapchat, X, LinkedIn, square, portrait, landscape and more) plus custom, in 16:9, 9:16, 1:1, 4:5 and 4:3, at 4K, 1440p, 1080p or 720p
- Imports image sequences, GIF, Lottie, SVG, PDF and 3D files, as well as normal video, audio and images
- **Collect media** into the project, or save a packaged project bundle

## Source Lab

A frame-accurate viewer for your source clips, before they hit the timeline. Desktop and tablet layouts only.

- JKL playback, frame stepping, timecode entry and a trim strip
- Mark **favorite and reject ranges**, add markers, split at scene changes
- Process clips: crop and reframe presets, speed, gain and **loudness normalize**, **denoise**, **stabilize**, **enhance and upscale** with A/B compare
- Output by replacing the clip in the bin, adding a copy, or exporting a fast **stream-copy trim**

## Multicam

- See **all angles** at once and switch cameras at the playhead
- Saves a clean cut to the timeline
- Works on Android too

## 3D, gaussian splats and the 3D camera

Any visual clip can sit in 3D space. Everything here renders locally with OpenGL.

![Drift 3D inspector with model and camera controls](/images/drift-3d.avif)

- **3D layers:** rotate on X and Y, set z depth and perspective on any clip
- **3D models:** import `.glb` files with node and skeletal animation (loop, hold, ping-pong, hide), ambient light and up to four point or spot lights
- **Gaussian splats:** `.sog` (single, bundled or streamed LOD), binary `.ply`, `.zip` and `meta.json`. Budget is 2.5 million splats on desktop and 1 million on Android
- **Scene camera:** a camera clip on its own lane with pan, dolly, pitch, yaw and roll, keyframable perspective, look-at, and camera moves (dolly, truck, crane, pan, tilt, orbit, push-in, pull-out)
- **3D viewport:** switch the preview to a free 3D view with gizmos, axis views, orbit, pan and dolly, or look through the camera
- **Depth effects** (optional depth model): depth relight, depth of field, depth fog and depth occlude. These are slow on CPU
- **Face 3D** (optional face model): face mesh, 3D face props and face swap

Limits: model shading is simplified, and Draco compression and morph targets are not supported.

## Workspaces

Dock, split and float panels the way you like. Desktop only.

![Drift editor in the Color workspace](/images/drift-workspace-color.avif)

- **10 built-in workspaces:** Edit, Edit (Portrait), Audio, Color, Keyframes, Masking and Tracking, Record, Source Lab, Subtitles and AI
- Customize any preset and reset it, or create, duplicate, rename and delete your own
- Float panels as separate windows. Layouts are saved per display set
- **4 themes** (dark, light, graphite, frost), your own JSON themes, and about 17 interface languages

## Color grading and scopes

A full grading panel with scopes. Desktop UI; see [Android notes](#android).

![Drift Color panel with wheels and curves](/images/drift-color.avif)

- **Basics:** exposure, contrast, highlights, shadows, whites, blacks, temperature, tint, saturation, vibrance and **HSL bands**
- **Color wheels** for shadows, midtones and highlights, and **master and per-channel curves**
- **Scopes:** histogram, waveform (including parade) and vectorscope, with an eyedropper
- **Looks** with an intensity slider, **.cube LUT import** and your own saved looks
- Apply a grade to **all clips**, or grade the whole timeline from an adjustment layer
- Finishing: vignette, film grain, chromatic aberration and bloom

![Drift scopes panel with waveform and vectorscope](/images/drift-scopes.avif)

![Drift Looks panel with intensity control](/images/drift-looks.avif)

## Keyframes and the graph editor

Animate almost anything. The graph editor is desktop only.

![Drift Keyframes panel with curves graph](/images/drift-keyframes.avif)

- Keyframe **transforms (including 3D)**, any effect parameter, masks, text and layer properties, 3D lights, PDF scroll and zoom, and SVG properties
- Keyframe panel with **lanes and a curves graph** with tangent handles, marquee select, a stretch box, value scrubber and beat overlay
- Easing: linear, hold, Bezier, elastic and bounce (in, out, in-out), with a thumbnail picker. Save your own easing presets
- Custom fade curves
- **Intro and outro** animation presets for clips

## Masking and motion tracking

Desktop only for the Masking and Tracking panels.

![Drift Masking panel with shape masks](/images/drift-masking.avif)

- **Masks:** rectangle, ellipse, star, heart, bars and freeform polygon, with feather, invert, rotation, and add, subtract or intersect. All keyframable, with presets
- Use an **image or video as a luma or alpha matte**
- **AI cutout masks** with per-frame brush fixes
- **Blur this area:** blur or pixelate a region
- **Stabilization** with zoom control

- **Motion tracking:** point trackers (translate, plus rotate, plus scale, perspective) and **planar trackers**
- Confidence display and manual correction. Track forward, backward or one frame at a time
- Attach a track to a mask, make a clip follow it, or use it to stabilize

## Text, titles, shapes and stickers

On-canvas text and subtitle clips, with your own fonts plus 21 bundled families.

![Drift text inspector with style stack](/images/drift-text-styles.avif)

- Alignment, wrapping, spacing, bend, boxes, word pills and accent runs
- **Shading stack:** fill, stroke, shadow, glow and extrude, with solid, gradient or texture paints
- **6 shader effects:** shine, shimmer, neon-pulse, glitch, chrome, dissolve. Plus stroke write-on and sketch wobble
- **33 style packs** (lower-third, impact, neon, handwritten, karaoke, chrome, retro 3D, glitch, fire, ice and more). Save, import and export packs
- **47 in, out and loop text animations** (typewriter, wave, karaoke-bounce, glitch-in and more), with per-character, word or line stagger. Import Lottie text animators
- Apply one text style to every subtitle on a track
- **Lottie and SVG clips** with recolor and reword
- **Shapes** (arrows, polygons, banners) with the same shading and keyframes
- About **170 stickers**, an emoji picker and face-tracked prop stickers

![Drift stickers tab](/images/drift-stickers.avif)

## Captions and transcript editing

Auto captions from speech, then edit the video by editing the text.

![Drift subtitles panel with timed cues](/images/drift-captions.avif)

- **Local Whisper** transcription in 99 languages with auto-detect, word-level timing (English), voice activity detection and **speaker labels**
- Optional cloud transcription with ElevenLabs Scribe, using your own key
- SRT and VTT import and export, a cue grid with a waveform lane, merge and split, and a words-per-cue limit
- Convert between subtitle and text clips
- **Edit by transcript:** cut words and phrases, remove filler words, remove silences, assemble the best takes
- Karaoke, hormozi and word-highlight caption styles

## Text-to-speech and voiceover

Local speech generation, with optional cloud voices.

![Drift voiceover and text-to-speech dialog](/images/drift-voiceover.avif)

- **Local Chatterbox Multilingual** in **21 languages**: Arabic, Danish, German, Greek, English, Spanish, Finnish, French, Hindi, Italian, Korean, Malay, Dutch, Norwegian, Polish, Portuguese, Russian, Swedish, Swahili, Turkish and Chinese
- **Voice cloning** from a 3 to 20 second sample, a voice library and an exaggeration control
- **Voiceover from subtitles:** speaks every caption at its cue time
- **Mic recorder** with meter and gain
- Optional cloud: ElevenLabs and Fish Audio text-to-speech, and ElevenLabs sound-effect generation. These use your own key, ask for consent first and are billed by the provider

## Audio

![Drift audio mixer with faders and meters](/images/drift-audio-mixer.avif)

- **Mixer** with faders, pan, meters, mute and arm
- **AI noise removal** (DeepFilterNet3), local after a model download
- **Beat detection** with BPM and downbeats, beat snap, split on beats or bars, quantize clips to the beat
- **Auto ducking** of music under speech
- **Loudness metering** (EBU R128, LUFS)
- Silence removal, audio sync, and audio tagging (genre, mood, instruments) with sound search
- **30 audio effects:** EQ, compressor, limiter, gate, de-esser, leveler, chorus, flanger, echo, tape, vinyl, megaphone, telephone, underwater, robot, chipmunk and more

![Drift audio inspector](/images/drift-audio.avif)

## Effects, transitions and templates

![Drift effect templates browser](/images/drift-effects.avif)

- **69 bundled video effects**, plus downloadable packs (40+ more effects and 150+ transitions with addons): chroma key, motion trail, depth of field, halftone, kaleidoscope, lens flare, light leak, VHS and CRT, oil paint, droste, shockwave and **audio-reactive visuals**
- **Face effects:** retouch, swap, big eyes, slim, fisheye and more
- **28 bundled transitions**, plus packs
- **23 effect templates** (Beat Drop, Glitch Cut, Neon Cutout, Anime Punch and more)
- **Blend modes:** normal, multiply, screen, overlay, add, darken, lighten
- Write **custom GLSL effects**, import and export `.driftfx` files, save effect-stack presets
- Marketplace and Extras store for optional downloads

![Drift transitions tab](/images/drift-transitions.avif)

## Cutouts and restoration

Local AI, after a one-time model download.

![Drift segmentation window for subject cutouts](/images/drift-cutout.avif)

- **Click-to-cut** (SAM 2.1) follows a subject through occlusion
- **People cutout** (Robust Video Matting) with soft hair edges
- **Per-frame brush fixes** on any cutout
- **Upscale 2x or 4x** and compression-artefact removal, with A/B compare
- Chroma key for green screen

## Speed, scenes and reframe

![Drift speed curve window](/images/drift-speed.avif)

- **Bezier speed ramps** that retime video and audio with pitch preserved, plus constant speed, freeze and reverse
- **Scene detection:** split or bookmark at scene changes, and label and search scenes by what is in them
- **Auto-reframe** landscape video to vertical, following faces

## Performance

- **One OpenGL compositor** for preview and export, so what you see is what you export
- **Hardware decode:** VAAPI, D3D11VA and MediaCodec
- **Preview proxies**, and conversion of phone or screen recordings into an edit-friendly format
- AI models run on **NVIDIA, AMD or other GPUs**, or on the CPU

## Export

![Drift export dialog](/images/drift-export.avif)

- Video, **audio-only**, GIF, still image, and range or work-area export
- **Video codecs:** AV1 (including 10-bit), H.264 (8 and 10-bit), H.265 (8, 10 and 12-bit), VP8, VP9 (alpha, 10-bit), ProRes (including 4444), DNxHR, FFV1, MPEG-4, MPEG-2 and Theora
- **Hardware encode:** NVENC, Intel QSV, AMD AMF, VAAPI, VideoToolbox and Android MediaCodec
- **Audio:** AAC, Opus, MP3, AC3, FLAC and WAV, with tags
- **Transparent export** with VP9 alpha or ProRes 4444
- High-frame-rate source frames for smooth slow motion
- **No watermark. No account.**

## Agent access (MCP)

Desktop only. Drift can run a **localhost MCP server** so Cursor, Claude Code or another agent edits the **open project**. It is off each time you launch Drift until you enable it. It listens only on `127.0.0.1`.

About **460 operations** cover the timeline, 3D, keyframes, transcript, voice, multicam and more. Batches of edits are undoable, and there are snapshots and an agent log panel. Headless mode and multiple instances are supported.

This is a real editor hook, not a webpage chatbot. Full list: [Drift MCP / agent access](/drift/mcp). Protocol: [MCP guide on GitHub](https://github.com/CutWire-Studios/Drift/blob/main/docs/MCP.md).

## Android

Drift on Android has a touch layout. It includes the timeline, split and trim, speed and fade curves, transform, crop, adjust (exposure, contrast, saturation, temperature), blend, filters, animation and easing, masks, AI cutout, text and styles, subtitles, stickers, shapes, Lottie, PDF, 3D models, stabilize, camera, transitions, audio effects, noise removal, voiceover and text-to-speech, multicam, the marketplace, and share-sheet import and export.

Not on the phone layout: **full color grading** (wheels, curves, scopes, LUTs), the **keyframe graph editor**, the **tracking panel**, **Source Lab** and **workspaces**. There is no MCP on Android. Tablets, Samsung DeX and ChromeOS get the full desktop layout.

## What runs locally and what uses the network

- **Local, offline:** the whole editor, plus AI features (Whisper captions, text-to-speech, cutouts, noise removal, depth, face, scene labels) after a free, one-time model download
- **Network, only when you use it:** addon and marketplace downloads, the update check, stock media and sound effects
- **Optional, your own key:** ElevenLabs Scribe transcription, ElevenLabs and Fish Audio text-to-speech, ElevenLabs sound effects. Consent-gated and billed by the provider

## Projects, addons and platforms

- Save as a `.drift` project, or a **project bundle** that packs media with the edit
- Addon Manager: fonts, stickers, speech and AI models, and extra effects as optional downloads, so the base install stays small
- **Platforms:** Linux (Flathub, AppImage), Windows (installer and portable zip), macOS (Apple Silicon disk image; Intel from source), Android (Google Play, or APK from GitHub Releases)
- **Price:** free. **License:** GPLv3. No account, no watermark, no feature tier

## What Drift is not (yet)

Say this out loud so a chatbot does not invent it:

- No iOS app
- Not a huge CapCut-style stock media library
- Grading, scopes, keyframes, tracking and 3D are there, but Drift is not a Fusion-style node compositor or a Fairlight-class audio suite like DaVinci Resolve
- Does not import Premiere, Resolve, Kdenlive, Final Cut XML, EDL or OTIO projects
- No built-in local LLM agent. Agent editing goes through [MCP](/drift/mcp)
- Not a live mixer (that is [CutWire Prism](/prism))
- Pre-1.0 software (version 0.9) — file bugs if something breaks
- AI models are an optional download, not stuffed into the first install

## Download

Get current builds from the [Drift download section](/drift#download), [GitHub Releases](https://github.com/CutWire-Studios/Drift/releases/latest) or [Flathub](https://flathub.org/apps/org.cutwire.Drift).
