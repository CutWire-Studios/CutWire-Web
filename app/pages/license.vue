<script setup lang="ts">
definePageMeta({ layout: 'legal' })
useSeoMeta({ title: 'License — CutWire Studios' })

const repoUrl = 'https://github.com/CutWire-Studios/Prism'
</script>

<template>
  <div>
    <h1 class="text-display-xl text-on-surface">
      License
    </h1>
    <p class="mt-6 text-on-surface-variant">
      CutWire Prism is free and open source software
    </p>
    <div class="mt-8 space-y-4 text-on-surface-variant">
      <p>
        CutWire Prism is licensed under the
        <strong class="text-on-surface">GNU General Public License v3.0 (GPLv3)</strong>.
        You are free to use, study, share, and modify the software.
      </p>
      <p>
        Any redistributed or modified versions must also be released under the GPLv3
        and keep the complete corresponding source code available.
      </p>
      <p>
        The full source code and license text are available on
        <a
          :href="repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary underline underline-offset-4 hover:text-primary/80"
        >GitHub</a>.
      </p>
    </div>
  </div>
</template>
