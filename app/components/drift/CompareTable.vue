<script setup lang="ts">
defineProps<{
  competitor: string
  rows: { label: string, them: string, us: string }[]
}>()
</script>

<template>
  <div class="overflow-x-auto">
    <div class="frost-card rounded-xl">
    <table class="w-full min-w-[36rem] text-left text-sm">
      <thead class="text-white">
        <tr>
          <th class="px-4 py-3 font-medium">
            Compared
          </th>
          <th class="px-4 py-3 font-medium">
            {{ competitor }}
          </th>
          <th class="px-4 py-3 font-medium">
            CutWire Drift
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          :key="row.label"
          class="border-t border-white/15"
        >
          <th class="px-4 py-3 font-medium text-white">
            {{ row.label }}
          </th>
          <td class="px-4 py-3 text-white/70">
            {{ row.them }}
          </td>
          <td class="px-4 py-3 text-white">
            {{ row.us }}
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
