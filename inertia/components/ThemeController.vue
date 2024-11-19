<script setup lang="ts">
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import { useTheme } from '~/store/theme'
const themeStore = useTheme()
</script>

<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input
      type="checkbox"
      :checked="themeStore.isDark"
      @change="themeStore.switchTheme"
      class="theme-controller"
      value="synthwave"
    />
    <SunIcon />
    <MoonIcon />
  </label>
</template>

<style scoped></style>
