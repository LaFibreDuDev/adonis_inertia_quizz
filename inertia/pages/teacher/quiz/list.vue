<script setup lang="ts">
import Layout from '~/components/navbar/Layout.vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
import type { QuizListQueryResult } from '#teacher/quiz/repositories/quiz_repository'
import Quiz_table from '~/pages/teacher/quiz/quiz_table.vue'
import LucideIcon from '~/components/icons/LucideIcon.vue'

const props = defineProps<{
  quizzes: QuizListQueryResult
}>()
const addRouteUrl = computed(() => client.$url('teacher.quiz.add'))
const addFromPromptRouteUrl = computed(() => client.$url('teacher.quiz.add_from_prompt'))
</script>

<template>
  <Layout>
    <h1 class="text-4xl my-4">Liste des quiz</h1>
    <div class="flex gap-4">
      <a class="btn btn-primary" :href="addRouteUrl">
        <LucideIcon name="FilePlus" /> Ajouter un nouveau quiz
      </a>
      <a class="btn btn-secondary" :href="addFromPromptRouteUrl">
        <LucideIcon name="CopyPlus" /> Ajouter un quiz depuis un prompt GPT
      </a>
    </div>
    <quiz_table :quizzes="quizzes" class="mt-4" />
  </Layout>
</template>
