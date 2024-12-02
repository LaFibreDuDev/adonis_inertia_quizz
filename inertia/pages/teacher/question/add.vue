<script setup lang="ts">
import Layout from '~/components/navbar/Layout.vue'
import AppInput from '~/components/form/AppInput.vue'
import { useForm } from '@inertiajs/vue3'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
import LucideIcon from '~/components/icons/LucideIcon.vue'
import type { QuizFindQueryResult } from '#teacher/quiz/repositories/quiz_repository'
const props = defineProps<{ quiz: QuizFindQueryResult }>()
const form = useForm({
  quizId: props.quiz.id,
  title: null,
  responses: [
    {
      title: null,
      correct: false,
    },
    {
      title: null,
      correct: false,
    },
    {
      title: null,
      correct: false,
    },
    {
      title: null,
      correct: false,
    },
  ],
})
const storeRouteUrl = computed(() => client.$url('teacher.question.store'))

const deleteResponse = (index: number) => {
  form.responses = form.responses.filter((_, currIndex) => index !== currIndex)
}
const addResponse = () => {
  form.responses.push({
    title: null,
    correct: false,
  })
}
</script>

<template>
  <Layout>
    <h1 class="text-2xl my-8">Ajouter une question au quiz {{ quiz.id }} ({{ quiz.title }})</h1>
    <form method="post" @submit.prevent="form.post(storeRouteUrl)">
      <AppInput
        label="Question"
        :errors="form.errors.title"
        v-model="form.title"
        :name="`question`"
      />
      <template v-for="(_, index) in form.responses">
        <div class="my-4">
          <label :for="`response${index}`">Réponse {{ index + 1 }}</label>
          <label class="cursor-pointer label justify-start gap-4">
            <input type="checkbox" class="checkbox" v-model="form.responses[index].correct" />
            <AppInput
              class="w-full"
              :errors="form.errors.responses"
              v-model="form.responses[index].title"
              :name="`response${index}`"
            />
            <button class="btn btn-sm btn-error" @click="deleteResponse(index)">
              <LucideIcon name="Trash2" />
            </button>
          </label>
        </div>
      </template>
      <div class="my-4">
        <button class="btn btn-success flex gap-4" @click.prevent="addResponse()">
          <LucideIcon name="SquarePlus" />
          <span>Ajouter une nouvelle réponse à la liste</span>
        </button>
      </div>
      <button type="submit" class="btn btn-primary mt-8" :disabled="form.processing">
        Ajouter
      </button>
    </form>
  </Layout>
</template>
