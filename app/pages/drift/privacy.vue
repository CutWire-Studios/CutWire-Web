<script setup lang="ts">
definePageMeta({ layout: 'drift' })

const site = useSiteConfig()
const path = '/drift/privacy'

const title = 'Drift Privacy Policy — CutWire Studios'
const description = 'Drift collects no personal data. Your video, audio and projects never leave your device. The only thing our servers see is the IP address behind an update check or an addon download.'

useSeoMeta({
  title,
  description,
  ogTitle: 'Drift Privacy Policy',
  ogDescription: description,
  ogType: 'website',
  ogUrl: `${site.url}${path}`,
  ogSiteName: site.name,
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
})

useHead({ link: [{ rel: 'canonical', href: `${site.url}${path}` }] })

defineOgImageComponent('Default', {
  title: 'Drift Privacy Policy',
  description: 'No account. No telemetry. Your files stay on your device.',
  eyebrow: 'CutWire Drift',
})

useSchemaOrg([
  defineWebPage({ name: title, description }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Drift', item: '/drift' },
      { name: 'Privacy' },
    ],
  }),
])
</script>

<template>
  <div>
    <DriftSeoHero
      eyebrow="Privacy"
      title="Drift Privacy Policy"
      description="Drift is a video editor that runs entirely on your device. It has no account system, no telemetry and no analytics. This page explains the two things it does send over the network, and what we can see when it does."
      :crumbs="[
        { name: 'Home', to: '/' },
        { name: 'Drift', to: '/drift' },
        { name: 'Privacy' },
      ]"
    />

    <div class="mx-auto max-w-3xl px-4 pb-16 md:px-6">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Last updated: 4 September 2026
      </p>

      <div class="mt-6 rounded-xl border border-border bg-surface-2 p-5 md:p-6">
        <h2 class="text-lg font-semibold text-foreground">
          The short version
        </h2>
        <ul class="mt-3 space-y-2 text-muted-foreground">
          <li>
            <strong class="font-semibold text-foreground">Your media never leaves your device.</strong>
            No video, audio, image, project file, transcript or export is ever uploaded to us or to
            anyone else.
          </li>
          <li>
            <strong class="font-semibold text-foreground">There is no account and no telemetry.</strong>
            Drift does not ask who you are, does not have a login, and contains no analytics,
            crash-reporting or advertising code of any kind.
          </li>
          <li>
            <strong class="font-semibold text-foreground">Two features touch the network:</strong>
            the update check and the addon downloader. Like any HTTPS request, those reveal your IP
            address to the server that answers them. That is the whole of the personal data
            involved.
          </li>
        </ul>
      </div>

      <div class="drift-prose mt-10">
        <h2>Who we are, and what this covers</h2>
        <p>
          This policy is published by <strong>CutWire Studios</strong>, based in Colombo, Sri Lanka.
          Where any of the data described below counts as personal data, CutWire Studios is the
          controller of it.
        </p>
        <p>
          It covers <strong>Drift</strong>, our desktop and Android video editor, on every platform
          we ship it for — Linux, Windows, macOS and Android. The
          <NuxtLink to="/privacy">
            site-wide privacy policy
          </NuxtLink>
          covers the cutwire.org website itself, including the support form.
        </p>

        <h2>What Drift never sends</h2>
        <p>
          Editing happens locally. Nothing below is transmitted anywhere, at any point, by any
          feature of the app:
        </p>
        <ul>
          <li>Video, audio, image and other media you import</li>
          <li>Project files, timelines, edit history and layouts</li>
          <li>Exported or rendered files</li>
          <li>File names, folder paths and the contents of your media bin</li>
          <li>Subtitles and transcripts, including anything produced by automatic captions</li>
          <li>Camera or microphone input</li>
          <li>Your name, email address, device identifiers or advertising IDs</li>
        </ul>
        <p>
          Automatic subtitles are worth calling out specifically, because comparable features in
          other editors are cloud services. In Drift the speech model is downloaded once as an addon
          and then <strong>runs on your own machine</strong>. Your audio is never sent to a
          transcription service — ours or anybody else's.
        </p>

        <h2>What Drift does send</h2>
        <p>Exactly two features open a network connection.</p>

        <h3>1. The update check</h3>
        <p>
          Roughly five seconds after launch, and at most once every 24 hours, Drift asks GitHub
          whether a newer release exists. It is a single request to
          <code>api.github.com</code> for the public release listing of the Drift repository. It
          sends no information about you, your projects or your installation beyond what any HTTPS
          request unavoidably carries — your IP address and a standard user agent — and it is
          answered by GitHub, not by us.
        </p>
        <p>
          You can turn it off completely in <strong>Settings → Updates → “Check on startup”</strong>.
          With it off, Drift makes no update request at all, and you can still press
          <strong>Check now</strong> when you want one.
        </p>

        <h3>2. Addons: fonts, stickers, speech models and runtimes</h3>
        <p>
          Fonts, emoji stickers, speech models and the optional acceleration runtimes are not bundled
          in the download — they are installed on demand from our addon service at
          <code>drift-addons.cutwire.org</code>. Drift refreshes the addon catalog when it starts and
          downloads a package only when you choose to install one.
        </p>
        <p>These requests reach our service, which can see:</p>
        <ul>
          <li>your IP address,</li>
          <li>the time of the request, and</li>
          <li>which catalog or package was requested.</li>
        </ul>
        <p>
          We do not attach an account, a profile or a persistent identifier to any of it. Every copy
          of Drift sends the same fixed application token with these requests
          (<code>X-Drift-Client</code>); it identifies the <em>application</em>, so that our storage
          bucket cannot be trivially crawled or hotlinked by others, and it is identical in every
          installation. It is not a user ID, an install ID or a device ID, and it cannot be used to
          link one request to another.
        </p>
        <p>
          If you would rather Drift never contact the addon service, you can simply not install
          addons — but note that the catalog refresh happens at startup. Builds distributed with the
          addon service disabled make no such request at all, and anything you have already
          installed keeps working offline.
        </p>

        <h2>About IP addresses</h2>
        <p>
          An IP address is personal data under laws such as the GDPR, so we would rather be plain
          about it than claim to collect “nothing”. Any server has to see the address of the computer
          it is answering, and ours is no exception.
        </p>
        <p>
          We use those addresses only to deliver the file that was asked for, to keep the service
          working, and to stop abuse such as scraping or bulk hotlinking of our storage. We do not
          use them to build a profile, we do not combine them with anything else, we do not sell or
          share them, and we do not use them for advertising. They appear in ordinary server request
          logs, which are retained only for as long as they are useful for those operational
          purposes and are then discarded.
        </p>

        <h2>Agent access (MCP)</h2>
        <p>
          Drift can expose a
          <NuxtLink to="/drift/mcp">
            local MCP server
          </NuxtLink>
          so that a coding agent can edit the open project. This is off every time Drift launches and
          has to be switched on deliberately. The server binds to loopback
          (<code>127.0.0.1</code>) only — it is not reachable from your network or from the internet.
        </p>
        <p>
          Two things follow from that, and they are yours to weigh:
        </p>
        <ul>
          <li>
            While it is on, any program running on the same computer can connect to it and drive the
            editor.
          </li>
          <li>
            If the agent you connect is itself a cloud service, then whatever that agent reads from
            your project goes to <em>its</em> provider under <em>their</em> privacy policy. That is
            the one path by which project content can leave your machine, and it exists only because
            you turned the feature on and pointed an agent at it. Drift itself still sends nothing.
          </li>
        </ul>

        <h2>What Drift stores on your device</h2>
        <p>
          Drift keeps your preferences, recent projects, window layout, the addon catalog and any
          addons you have installed in the standard settings and application-data locations for your
          operating system. This data stays on your device, is never transmitted, and is removed when
          you uninstall the app or clear its data.
        </p>

        <h2>Android permissions</h2>
        <p>
          The Android build requests only what a given feature needs, and none of it is used to
          collect information about you:
        </p>
        <ul>
          <li>
            <strong>Internet / network state</strong> — the update check and addon downloads
            described above, and nothing else.
          </li>
          <li>
            <strong>Notifications and foreground service</strong> — a video export runs for minutes,
            so it holds a foreground service and shows a progress notification to keep Android from
            killing it partway through.
          </li>
          <li>
            <strong>Vibration</strong> — optional haptic feedback on the timeline, which you can
            switch off.
          </li>
          <li>
            <strong>Modify audio settings</strong> — audio playback in the editor.
          </li>
        </ul>
        <p>
          Drift deliberately does <strong>not</strong> request broad storage or media permissions.
          Importing media uses Android's Storage Access Framework, so the app receives access to the
          specific files you pick and nothing else. Camera and microphone are declared as optional
          hardware features so that devices without them can still install the app; they are used
          only if and when you record with them, and that recording stays on your device.
        </p>

        <h2>Third parties</h2>
        <p>We rely on a small number of services, and it is worth knowing which:</p>
        <ul>
          <li>
            <strong>GitHub</strong> hosts the source code, the release downloads and the update feed.
            Requests for updates or downloads are handled by GitHub under its own privacy policy.
          </li>
          <li>
            <strong>Cloudflare</strong> serves the addon catalog and packages on our behalf, and
            processes those requests as our infrastructure provider.
          </li>
          <li>
            <strong>Flathub</strong> and any other distribution channel you install Drift through
            operate their own services under their own policies.
          </li>
        </ul>
        <p>
          Links inside the app — to the documentation, the issue tracker or our community server —
          open in your browser. Once you are there, that site's own policy applies.
        </p>
        <p>
          There are no advertising networks, no analytics vendors, no crash-reporting services and no
          data brokers involved in Drift at any point. We have never sold or shared personal data,
          because there is none to sell.
        </p>

        <h2>Children</h2>
        <p>
          Drift is suitable for general audiences and does not knowingly collect personal information
          from anyone, including children. There is no account to create, no profile to fill in and
          no content uploaded to us.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live you may have rights to access, correct, delete or restrict the
          processing of personal data we hold about you. In practice we hold no account, profile or
          contact record for Drift users — only the transient request logs described above, which are
          not linked to an identity and which we cannot connect back to an individual person. If you
          believe we hold something about you, write to us and we will look and tell you honestly
          what we find.
        </p>
        <p>
          We are based in Sri Lanka, so when Drift contacts our addon service the request is handled
          by us there and by our infrastructure providers on servers around the world. If you are in
          the European Economic Area, the United Kingdom or another region with its own data
          protection law, that means the limited data described above is processed outside your
          region. We apply the same standard to everyone regardless of where they live: no accounts,
          no profiles, no sale or sharing of personal data, and nothing kept beyond what running the
          service requires.
        </p>

        <h2>Open source</h2>
        <p>
          Drift is released under the GPLv3 and the entire source is public. Every claim on this page
          can be checked against the code — the update check, the addon client and the MCP server are
          the only networking code in the repository.
          <a
            href="https://github.com/CutWire-Studios/Drift"
            target="_blank"
            rel="noreferrer"
          >Read it on GitHub</a> if you would rather verify than take our word for it.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If Drift ever gains a feature that sends more than this page describes, we will update this
          policy before that feature ships and change the date at the top. We will not quietly start
          collecting something and document it afterwards.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, corrections or requests: <a href="mailto:privacy@cutwire.org">privacy@cutwire.org</a>.
          Bugs and privacy concerns can also be raised publicly on the
          <a
            href="https://github.com/CutWire-Studios/Drift/issues"
            target="_blank"
            rel="noreferrer"
          >issue tracker</a>.
        </p>
        <p>
          CutWire Studios · Colombo, Sri Lanka
        </p>
      </div>
    </div>

    <DriftDownloadBand />
  </div>
</template>
