<script setup lang="ts">
import Layout from '~/components/navbar/Layout.vue'
import { onMounted, ref } from 'vue'
import type { Quiz } from '~/types/quiz'
import AppQuiz from '~/components/student/AppQuiz.vue'

const quiz = ref<Quiz | null>(null)
const state = ref('loading')

onMounted(async () => {
  try {
    const response = await fetch('/data/quiz.json')
    quiz.value = await response.json()
    state.value = 'idle'
  } catch (error) {
    state.value = 'error'
    throw new Error('Impossible de récupérer le JSON !')
  }
})
</script>

<template>
  <Layout>
    <h1 class="text-4xl my-4">Quiz d'exemple</h1>
    <div v-if="state === 'error'">
      <p>Impossible de charger le quiz</p>
    </div>
    <div :aria-busy="state === 'loading'">
      <AppQuiz :quiz="quiz" v-if="quiz" />
    </div>
  </Layout>
</template>
