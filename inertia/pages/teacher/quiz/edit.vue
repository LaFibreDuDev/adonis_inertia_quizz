<script setup lang="ts">
import AppInput from '~/components/form/AppInput.vue'
import Layout from '~/components/navbar/Layout.vue'
import { useForm } from '@inertiajs/vue3'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
const props = defineProps<{ quiz: Object }>()
const form = useForm({
  title: props.quiz.title,
})
const updateRouteUrl = computed(() =>
  client.$url('teacher.quiz.update', { params: { id: props.quiz.id } })
)
</script>

<template>
  <Layout>
    <h1 class="text-2xl">Modification d'un quiz</h1>
    <form method="post" @submit.prevent="form.put(updateRouteUrl)">
      <AppInput
        label="Titre du quiz"
        :errors="form.errors.title"
        v-model="form.title"
        :name="`title`"
      />
      <button type="submit" class="btn btn-primary mt-8" :disabled="form.processing">Editer</button>
    </form>
  </Layout>
</template>
