<script setup lang="ts">
import type { Quiz } from '~/types/quiz'
import { computed } from 'vue'

const props = defineProps<{ quiz: Quiz; answers: Array<null | string> }>()
const score = computed(() => {
  return props.quiz.questions.reduce((acc, q, k) => {
    if (q.correct_answer === props.answers[k]) {
      return acc + 1
    }
    return acc
  }, 0)
})
const hasWon = computed(() => score.value >= props.quiz.minimum_score)
</script>

<template>
  <h2 class="text-xl">Voici le récap</h2>
  <p class="my-4">{{ hasWon ? quiz.success_message : quiz.failure_message }}</p>
  <p class="my-4">Score : {{ score }}/{{ quiz.questions.length }}</p>
</template>
