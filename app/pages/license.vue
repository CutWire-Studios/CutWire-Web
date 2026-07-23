<script setup lang="ts">
definePageMeta({ layout: 'legal' })
useSeoMeta({
  title: 'License — CutWire Studios',
  description: 'CutWire Prism and CutWire Drift are free and open source under the GNU General Public License v3.0 (GPLv3).',
})

const repos = [
  { name: 'CutWire Prism', href: 'https://github.com/CutWire-Studios/Prism' },
  { name: 'CutWire Drift', href: 'https://github.com/CutWire-Studios/Drift' },
]
</script>

<template>
  <div>
    <h1 class="text-display-xl text-on-surface">
      License
    </h1>
    <p class="mt-6 text-on-surface-variant">
      CutWire software is free and open source
    </p>
    <div class="mt-8 space-y-4 text-on-surface-variant">
      <p>
        CutWire Prism and CutWire Drift are licensed under the
        <strong class="text-on-surface">GNU General Public License v3.0 (GPLv3)</strong>.
        You are free to use, study, share, and modify the software.
      </p>
      <p>
        Any redistributed or modified versions must also be released under the GPLv3
        and keep the complete corresponding source code available.
      </p>
      <p>
        The full source code and license text for each product are available on GitHub:
      </p>
      <ul class="list-disc space-y-2 pl-5">
        <li
          v-for="repo in repos"
          :key="repo.href"
        >
          <a
            :href="repo.href"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary underline underline-offset-4 hover:text-primary/80"
          >{{ repo.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
