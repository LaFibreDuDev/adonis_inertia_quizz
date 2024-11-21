<script setup lang="ts">
import Layout from '~/components/Layout.vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
import { QuizListQueryResult } from '#repositories/quiz_repository'
import Quiz_table from '~/pages/teacher/quiz/quiz_table.vue'

const props = defineProps<{
  quizzes: QuizListQueryResult
}>()
const addRouteUrl = computed(() => client.$url('teacher.quiz.add'))
</script>

<template>
  <Layout>
    <h1 class="text-4xl my-4">Liste des quiz</h1>
    <a class="btn btn-primary" :href="addRouteUrl">Ajouter un nouveau quiz</a>
    <quiz_table :quizzes="quizzes" class="mt-4" />
  </Layout>
</template>
