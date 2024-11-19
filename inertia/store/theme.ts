import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTheme = defineStore(
  'theme',
  () => {
    const darkTheme = ref(true)
    const switchTheme = () => {
      darkTheme.value = !darkTheme.value
    }
    return {
      isDark: darkTheme,
      switchTheme,
    }
  },
  {
    persist: true,
  }
)
