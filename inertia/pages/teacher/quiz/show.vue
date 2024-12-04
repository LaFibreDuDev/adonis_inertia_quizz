<script setup lang="ts">
import Layout from '~/components/navbar/Layout.vue'
import AppCheckbox from '~/components/form/AppCheckbox.vue'
import { Link } from '@tuyau/inertia/vue'
import AppDelete from '~/components/form/AppDelete.vue'
import type { QuizFindQueryResult } from '#teacher/quiz/repositories/quiz_repository'
import LucideIcon from '~/components/icons/LucideIcon.vue'
import Prism from 'prismjs'
import 'prism-themes/themes/prism-a11y-dark.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import { onMounted } from 'vue'

defineProps<{ quiz: QuizFindQueryResult }>()

onMounted(() => {
  Prism.highlightAll()
})
</script>
<template>
  <Layout>
    <h1 class="text-2xl my-8">Visualisation du quiz</h1>

    <h2 class="text-xl">{{ quiz.title }}</h2>
    <Link route="teacher.question.add" :params="{ id: quiz.id }" class="btn btn-primary mt-8"
      >Ajouter une question</Link
    >
    <div class="flex flex-col gap-4" v-for="(question, index) in quiz.questions">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="flex justify-between">
            <div>
              <h2 class="card-title mb-4">#{{ index + 1 }} - {{ question.title }}</h2>
              <pre class="line-numbers"><code class="language-javascript">
let maVar = 10
maVar = maVar + 1
              </code></pre>
            </div>
            <div class="flex gap-4">
              <Link
                route="teacher.question.edit"
                :params="{ id: question.id }"
                class="btn btn-primary"
              >
                <LucideIcon name="Pencil" />
              </Link>
              <AppDelete
                :route-path="`teacher.question.destroy`"
                :route-params="{ quizid: quiz.id, id: question.id }"
                :message="`Êtes vous sûr de vouloir supprimer la question ${question.id} du quiz ${quiz.id} ?`"
                btn-classes="btn btn-error"
              >
                <LucideIcon name="Trash2" />
              </AppDelete>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-1/2 p-4" v-for="response in question.responses">
              <label class="cursor-pointer label">
                <AppCheckbox
                  v-if="response.correct"
                  :label="response.title"
                  checked
                  accent
                  disabled
                />
                <AppCheckbox v-else :label="response.title" disabled />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
