<script setup lang="ts">
import Layout from '~/components/Layout.vue'
import AppCheckbox from '~/components/AppCheckbox.vue'
import { Link } from '@tuyau/inertia/vue'
import LucideIcon from '~/components/icons/LucideIcon.vue'
import AppDelete from '~/components/AppDelete.vue'
const props = defineProps<{ quiz: Object }>()
</script>
<template>
  <Layout>
    <h1 class="text-2xl my-8">Visualisation du quiz</h1>
    <h2 class="text-xl">{{ quiz.title }}</h2>
    <Link route="teacher.question.add" :params="{ id: quiz.id }" class="btn btn-primary mt-8"
      >Ajouter une question</Link
    >
    <div class="flex flex-col gap-4" v-for="question in quiz.questions">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="flex justify-between">
            <h2 class="card-title mb-4">
              {{ question.title }}
            </h2>
            <AppDelete
              :route-path="`teacher.question.destroy`"
              :route-params="{ quizid: quiz.id, id: question.id }"
              :message="`Êtes vous sûr de vouloir supprimer la question ${question.id} du quiz ${quiz.id} ?`"
              btn-classes="btn btn-error"
              ><LucideIcon name="Trash2"
            /></AppDelete>
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
