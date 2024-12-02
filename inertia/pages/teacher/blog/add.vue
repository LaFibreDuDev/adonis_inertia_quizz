<script setup lang="ts">
import Layout from '~/components/navbar/Layout.vue'
import { useForm } from '@inertiajs/vue3'
import AppInput from '~/components/form/AppInput.vue'
import AppTextarea from '~/components/form/AppTextarea.vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'

const form = useForm({
  title: null,
  content: null,
})
const storeRouteUrl = computed(() => client.$url('teacher.blog.store'))
</script>
<template>
  <Layout>
    <h1 class="text-2xl my-8">Ajouter un nouvel article</h1>
    <form method="post" @submit.prevent="form.post(storeRouteUrl)">
      <AppInput
        label="Titre de l'article"
        :errors="form.errors.title"
        v-model="form.title"
        :name="`title`"
      />
      <AppTextarea
        label="Contenu"
        :errors="form.errors.content"
        v-model="form.content"
        :name="`content`"
      />
      <button type="submit" class="btn btn-primary mt-8" :disabled="form.processing">
        Ajouter
      </button>
    </form>
  </Layout>
</template>
