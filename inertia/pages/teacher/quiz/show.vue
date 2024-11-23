<script setup lang="ts">
import Layout from '~/components/Layout.vue'
import AppDelete from '~/components/AppDelete.vue'
import AppCheckbox from '~/components/AppCheckbox.vue'
const props = defineProps<{ quiz: Object }>()
</script>
<template>
  <Layout>
    <h1 class="text-2xl my-8">Visualisation du quiz</h1>
    <h2 class="text-xl">{{ quiz.title }}</h2>
    <div class="flex flex-col gap-4" v-for="question in quiz.questions">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title mb-4">
            {{ question.title }}
          </h2>
          <div class="flex flex-wrap">
            <div class="w-1/2 p-4" v-for="response in question.responses">
              <label class="cursor-pointer label">
                {{ response.correct }}
                <AppCheckbox v-if="response.correct" :label="response.title" checked accent />
                <AppCheckbox v-else :label="response.title" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
