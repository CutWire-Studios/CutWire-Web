---
title: CutWire Drift features — free desktop video editor
description: Every Drift feature in plain language. Timeline, effects, captions, cutouts, audio, export, Linux/Windows/macOS/Android. Free, no watermark, no account.
headline: Every Drift feature, in plain language
eyebrow: Features
---

This page lists what **CutWire Drift** can do today. Drift is a free, open-source video editor for Linux, Windows, macOS and Android. There is no subscription, no account and no watermark on export.

If you are comparing editors, start at [Drift as an alternative](/drift/alternatives) or the [FAQ](/drift/faq). If you want an AI tool to drive the timeline, see [MCP / agent access](/drift/mcp).

## Who it is for

- People who want a **free video editor** that does not stamp a watermark on the file
- Anyone looking for a **CapCut alternative** that runs on a computer, including Linux
- Short-form creators (Reels, Shorts, TikTok), teachers, YouTubers and everyday edits
- Teams who need to hand a project to someone else without broken file paths

## Editing

A real multi-track timeline — not a one-clip toy.

- Stack **video, audio, text, shapes and overlays** on separate tracks
- **Trim, split, snap and ripple** so cuts stay tight
- Mute or hide a track without deleting it
- Full **undo and redo**
- CapCut-style tools: Select (V) and Blade (B)
- Linked audio and video that move together, or unlink them when you need to
- Copy, cut and paste at the playhead
- Extract or separate audio, merge clips, align left or right
- **Freeze frame** of the full composited image
- Bookmarks and markers
- Filmstrip thumbnails on video, waveforms on audio
- In/Out **work area** for playback and ranged export
- Zoom the timeline around the playhead; fit the whole edit in view

## Canvas and preview

- Layout presets for **YouTube, Instagram, Facebook, TikTok, Snapchat, X and LinkedIn**, plus square, landscape and portrait
- Quality presets: **4K, 1440p, 1080p, 720p**, or a custom size
- Portrait editor layout (preview on top) for vertical video
- Zoom and pan the preview; crop by dragging edges
- Guides: rule of thirds, center cross, safe margins
- Background fill: solid color or blur
- Dark or light theme
- What you see in preview is what you export — one compositor, not two render paths

## Looks (effects, transitions, templates)

About **56 GPU effects** ship with Drift, including:

- Color: brightness, contrast, saturation, hue, gamma, temperature, cinematic, duotone, grayscale, sepia
- Stylize: blur, sharpen, pixelate, vignette, bloom, oil paint, pencil sketch, comic, neon edges
- Film / analog: Super 8, halation, light leak, film burn, VHS, star filter, bokeh, lens flare
- Motion: zoom punch, wave warp, spin blur, motion trail, shockwave, ripple, kaleidoscope, beat shake, strobe
- Glitch: digital, scanline, block, RGB split
- Green screen **chroma key**
- Face warps (optional face model): big eyes, wide mouth, fat/slim, fisheye, swirl, alien head, 3D face mesh

About **28 GPU transitions**, including crossfade, dip to black/white, wipes, push, zoom, glitch, VHS, mosaic and cinematic blends. Drop a transition onto overlapping clips.

**Look templates** stack effects for a finished vibe in one click (beat drop, glitch cut, cinematic open, neon night, retro tape and similar looks).

Effects are reorderable, can be turned off, and can be keyframed. Thumbnails preview on a real frame from your clip.

## Text, stickers and shapes

- Title packs: title, subtitle, lower third, caption, quote, impact, pop, neon, handwritten, karaoke, bulky, outline and more
- Font, color, outline, shadow, glow, box and alignment
- In/out animations and karaoke-style word accents
- **Shapes:** rectangles, circles, arrows, stars, speech bubbles, banners and similar callouts
- **Stickers and emoji** you can search and drop on the canvas (packs install when you want them)

## Captions and speech

- **Auto captions** from speech using a local Whisper model (optional download, runs on your computer)
- Editable timed cues on a dedicated subtitle track
- Words-per-caption control
- Import and export subtitle files
- Voice waveform on the cue lane so timing is visible

Captions never require an account or a cloud upload.

## Cutouts, masks and compositing

- Click-to-isolate **subject cutout** (optional on-device model)
- Clip masks
- Green screen chroma key
- Blend modes: normal, multiply, screen, overlay, add, darken, lighten

## Motion and speed

- Speed presets, ramps and custom **speed curves**
- Reverse playback
- Fade in/out and custom fade curves
- Audio tempo follows clip speed
- Beat detection, snap-to-beats, split-on-beats
- Keyframes with a graph editor

## Audio

Per-clip volume and fades, plus an effect chain:

- Utility: EQ, compressor, limiter, noise gate, de-esser, voice leveler
- Space: echo, chorus, flanger, phaser, tremolo, auto-pan, stereo widen
- Voice: chipmunk, deep voice, robot, alien and similar stylers
- Texture: tape, vinyl, bitcrush, 8-bit
- Transmission: telephone, walkie-talkie, megaphone, muffled, underwater
- Optional **noise removal** model (on-device download)

There is no separate track-level volume fader yet — use clip volume, or mute the lane.

## Multicam and scenes

- Multicam window: watch every angle, punch between cameras, save a clean cut
- Scene / shot detection: jump to scenes, split or bookmark on scene boundaries
- Optional object labels in shots (addon)

## Import and media bin

- Video: anything FFmpeg can decode (typical MP4, MKV, MOV, WebM, AVI and similar)
- Images: PNG, JPEG, GIF, WebP, BMP, TIFF, SVG
- Audio: MP3, WAV, AAC, FLAC, OGG, M4A, WMA, AIFF
- Drag and drop, replace media in place, search, favorites
- Phone videos keep portrait orientation

## Export

Preview and export share the same compositor.

- Containers: **MP4, WebM, MKV, GIF**
- Video codecs: H.264, H.265, AV1, VP8, VP9, ProRes, DNxHR, FFV1 and others (depends on the bundled FFmpeg)
- Audio codecs: AAC, Opus, MP3, AC3, FLAC
- CRF or bitrate, encoder presets, downscale presets, custom FPS
- Audio-only export, freeze-frame stills, GIF loops
- Ranged export from the In/Out work area
- **No watermark. No account.**

## Agent access (MCP)

Drift can run a **localhost MCP server** so Cursor, Claude Code, or another agent edits the **open project** — import, trim, captions, effects, capture a still, export. Off until you enable **Settings → Agent access**. Listens only on `127.0.0.1`. One batch of edits is one undo step.

This is a real editor hook, not a webpage chatbot. Full plain-language list: [Drift MCP / agent access](/drift/mcp). Protocol: [MCP guide on GitHub](https://github.com/CutWire-Studios/Drift/blob/main/docs/MCP.md).

## Projects, addons and extra AI models

- Save as a `.drift` project
- **Project bundles** pack media with the edit for sharing and backup
- Addon Manager: fonts, stickers, speech models and extra effects as optional downloads so the base install stays small
- Speech-to-text, subject cutout and denoise are optional on-device models — MCP will not install them for you

## Platforms, price and license

- **Linux** (Flathub, AppImage), **Windows** (installer and portable zip), **macOS** (Apple Silicon disk image; Intel from source)
- **Android** (sideload APK from GitHub Releases — not on the Play Store yet)
- Price: **free**
- License: **GPLv3**
- No telemetry in the app, no login wall, no feature tier

## What Drift is not (yet)

Say this out loud so a chatbot does not invent it:

- No iOS app (Android is a sideloaded APK, not a Play Store release)
- Not a huge CapCut-style stock media library
- Not a color-grading suite like DaVinci Resolve
- Not a live mixer (that is [CutWire Prism](/prism))
- Early product (version 0.5.x) — file bugs if something breaks
- Heavy AI (Whisper, cutout, denoise) is an optional download, not stuffed into the first install
- No track-level volume fader yet

## Download

Get current builds from the [Drift download section](/drift#download), [GitHub Releases](https://github.com/CutWire-Studios/Drift/releases/latest) or [Flathub](https://flathub.org/apps/org.cutwire.Drift).
