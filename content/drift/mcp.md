---
title: Drift MCP — let an AI edit the real timeline
description: Drift has a built-in localhost MCP server. Turn on Agent access and Cursor, Claude Code or another agent can import, trim, caption, apply effects and export — undoable, on your computer.
headline: Let an AI edit the real timeline
eyebrow: Agent access
---

**CutWire Drift** speaks [MCP](https://modelcontextprotocol.io/) (Model Context Protocol). That means Cursor, Claude Code, or another compatible agent can work **inside the open project** — not in a chat window that pretends to edit video.

This is a real editor hook. The agent sees the timeline, makes cuts you can **undo**, and only runs when you turn it on.

## How to turn it on

1. Open Drift.
2. Go to **Settings → Agent access**.
3. Enable it. It stays **off at every launch** until you do.
4. Copy the connection snippet from Settings into Cursor, Claude Code, or your MCP client.

The server listens only on your computer (`127.0.0.1`). A bearer token rotates each session.

You can also attach with stdio: run `drift --mcp-stdio` against an editor that already has Agent access enabled. Setup details live in the [MCP guide on GitHub](https://github.com/CutWire-Studios/Drift/blob/main/docs/MCP.md).

## What an agent can do

The agent does not get a single “make a video” button. It gets the same jobs you do, grouped into toolboxes:

- **Media** — import files (local paths), list, rename, replace, export a still
- **Timeline** — tracks, clips, selection, bookmarks, copy/paste, link or unlink audio
- **Canvas** — position, flip, blend, mask, fades, speed, reverse
- **Playback** — seek, play, pause, In/Out work area
- **Text and shapes** — titles, captions, stickers, emoji, fonts
- **Subtitles** — cues, import/export, generate captions from speech
- **Effects** — video/audio effects, transitions, look templates
- **Project** — new/open/save, package a bundle, canvas size, **export**
- **Keyframes and speed** — animation keys, speed ramps
- **Cutout** — SAM-style subject segmentation
- **AI addons** — denoise and face detection (if those models are installed)
- **Audio** — waveforms, beat detection, beat-synced cuts, clip volume
- **Scenes** — shot detection, what is in each shot, split or bookmark on scene boundaries
- **UI** — theme, shortcuts, editor preferences

Typical loop: inspect the project, apply a batch of edits (one undo step), **capture** a JPEG of the composition to check the frame, then export.

## Working to the music or the footage

Agents can:

- Detect beats, snap clips to the grid, split on bars, bookmark downbeats
- Detect scenes, list shots, find a label such as “person”, split or bookmark on those boundaries
- Capture a still of the mixed frame to verify the look before export

Beat analysis is temporary (a mix-changing edit clears it). Scene analysis is cached on the source file.

## Safety — what this is not

- **Not on by default.** Off until you enable Agent access, and off again the next time you launch.
- **Not the cloud.** Nothing is sent to CutWire. The MCP port binds to localhost. Your agent still uses whatever model *it* uses.
- **Not a sandbox.** Any local process with the session token can drive the editor. Treat the token like a password for this session.
- **Not a substitute for addons.** MCP will not install Whisper, cutout, or other models. If a tool needs a pack, install it in Drift first.
- **Not atomic.** A failed batch keeps the ops that already ran. Check the reply, then undo if needed.

## Who this is for

- People already in **Cursor** or **Claude Code** who want the editor to follow a prompt
- Automation: import a folder, caption it, export, without clicking every clip
- Open-source builders extending Drift through the same protocol the UI uses

If you just want to cut a Reel by hand, ignore Agent access. The rest of Drift works without it.

See also the [full feature list](/drift/features), the [FAQ](/drift/faq), and the [protocol reference](https://github.com/CutWire-Studios/Drift/blob/main/docs/MCP.md).
