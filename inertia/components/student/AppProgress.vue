<script setup lang="ts">
defineProps<{ value: number; max: number }>()
</script>

<template>
  <div class="flex flex-col w-full my-4">
    Etape {{ value + 1 }}/{{ max + 1 }}
    <progress class="progress progress-primary w-full" :value="value" :max="max" />
  </div>
</template>
