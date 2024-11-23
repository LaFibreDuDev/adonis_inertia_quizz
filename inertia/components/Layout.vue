<script setup lang="ts">
import { useTheme } from '~/store/theme'
import NavBar from '~/components/NavBar.vue'

const themeStore = useTheme()
</script>
<template>
  <div :data-theme="themeStore.isDark ? 'dark' : 'cupcake'" class="min-h-screen">
    <NavBar class="px-8" />
    <main>
      <div class="px-12">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
