<script setup lang="ts">
import type { Quiz } from '~/types/quiz'
import { computed, ref } from 'vue'
import AppProgress from '~/components/student/AppProgress.vue'
import AppQuestion from '~/components/student/AppQuestion.vue'
import AppRecap from '~/components/student/AppRecap.vue'

const state = ref('question')
const props = defineProps<{ quiz: Quiz }>()
const answers = ref<Array<null | string>>(props.quiz.questions.map(() => null))
const step = ref(0)
const question = computed(() => props.quiz.questions[step.value])
const addAnswer = (answer: string) => {
  answers.value[step.value] = answer
  if (step.value === props.quiz.questions.length - 1) {
    state.value = 'recap'
  } else {
    step.value++
  }
}
</script>

<template>
  <h2 class="text-xl">{{ quiz.title }}</h2>
  <AppProgress :value="step" :max="quiz.questions.length - 1" />
  <AppQuestion
    :key="question.question"
    :question="question"
    v-if="state === 'question'"
    @answer="addAnswer"
  />
  <AppRecap v-if="state === 'recap'" :quiz="quiz" :answers="answers" />
</template>
