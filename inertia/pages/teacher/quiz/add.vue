<script setup lang="ts">
import Layout from '~/components/Layout.vue'
import { useForm } from '@inertiajs/vue3'
import AppInput from '~/components/AppInput.vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'

const form = useForm({
  title: null,
})
const storeRouteUrl = computed(() => client.$url('teacher.quiz.store'))
</script>
<template>
  <Layout>
    <h1 class="text-2xl my-8">Ajouter un nouveau quiz</h1>
    <form method="post" @submit.prevent="form.post(storeRouteUrl)">
      <AppInput
        label="Titre du quiz"
        :errors="form.errors.title"
        v-model="form.title"
        :name="`title`"
      />
      <button type="submit" class="btn btn-primary mt-8" :disabled="form.processing">
        Ajouter
      </button>
    </form>
  </Layout>
</template>
