<script setup lang="ts">
import Layout from '~/components/Layout.vue'
import { useForm } from '@inertiajs/vue3'
import AppInput from '~/components/AppInput.vue'
import AppTextarea from '~/components/AppTextarea.vue'

const form = useForm({
  title: null,
  content: null,
})
</script>
<template>
  <Layout>
    <h1 class="text-2xl my-8">Ajouter un nouvel article</h1>
    <form method="post" @submit.prevent="form.post('/store')">
      <AppInput label="Titre de l'article" :errors="form.errors.title" v-model="form.title" />
      <AppTextarea label="Contenu" :errors="form.errors.content" v-model="form.content" />
      <button type="submit" class="btn btn-primary mt-8" :disabled="form.processing">
        Ajouter
      </button>
    </form>
  </Layout>
</template>
