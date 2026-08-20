<script setup lang="ts">
defineProps<{
  competitor: string
  rows: { label: string, them: string, us: string }[]
}>()
</script>

<template>
  <div class="overflow-x-auto rounded-xl border border-border">
    <table class="w-full min-w-[36rem] text-left text-sm">
      <thead class="bg-surface-2 text-foreground">
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
          class="border-t border-border"
        >
          <th class="px-4 py-3 font-medium text-foreground">
            {{ row.label }}
          </th>
          <td class="px-4 py-3 text-muted-foreground">
            {{ row.them }}
          </td>
          <td class="px-4 py-3 text-foreground">
            {{ row.us }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
