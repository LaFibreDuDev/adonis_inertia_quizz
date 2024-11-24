<script setup lang="ts">
import Layout from '~/components/Layout.vue'
import AppInput from '~/components/AppInput.vue'
import { useForm } from '@inertiajs/vue3'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
import LucideIcon from '~/components/icons/LucideIcon.vue'
const props = defineProps<{ quiz: Object }>()
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
  form.responses = form.responses.filter((response, currIndex) => index !== currIndex)
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
      <template v-for="(response, index) in form.responses">
        <label class="cursor-pointer label justify-start gap-4">
          <div class="flex flex-col gap-2 items-center justify-center">
            <input type="checkbox" class="checkbox" v-model="form.responses[index].correct" />
            <button class="btn btn-sm btn-error" @click="deleteResponse(index)">
              <LucideIcon name="Trash2" />
            </button>
          </div>
          <AppInput
            class="w-full"
            :label="`Réponse ${index + 1}`"
            :errors="form.errors.responses"
            v-model="form.responses[index].title"
            :name="`response${index}`"
          />
        </label>
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
