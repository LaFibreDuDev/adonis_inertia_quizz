<script setup lang="ts">
import { Question } from '~/types/quiz'
import { computed, ref } from 'vue'
import { shuffleArray } from '~/helpers/functions.ts'
import AppAnswerRadio from '~/components/student/AppAnswerRadio.vue'

const props = defineProps<{ question: Question }>()
const emits = defineEmits(['answer'])
const answer = ref(null)
const hasAnswer = computed(() => answer.value !== null)
const randomChoices = computed(() => shuffleArray(props.question.choices))
</script>

<template>
  <h3 class="text-xl mt-4">{{ question.question }}</h3>
  <ul class="my-4">
    <li v-for="(choice, index) in randomChoices" :key="choice">
      <AppAnswerRadio
        :id="`answer_${index}`"
        :disabled="hasAnswer"
        :value="choice"
        v-model="answer"
        :correct-answer="question.correct_answer"
      />
    </li>
  </ul>
  {{ answer }}
  <button
    :disabled="!hasAnswer"
    @click="emits('answer', answer)"
    class="block btn btn-primary mt-4"
  >
    Question suivante
  </button>
</template>
