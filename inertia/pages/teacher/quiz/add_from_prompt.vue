<script setup lang="ts">
import Layout from '~/components/navbar/Layout.vue'
import { useForm } from '@inertiajs/vue3'
import AppInput from '~/components/form/AppInput.vue'
import AppTextarea from '~/components/form/AppTextarea.vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
const form = useForm({
  title: 'Quiz sur le SQL',
  content:
    "1. Quelle clause SQL est utilisée pour récupérer des données d'une table ?\n" +
    'A. GET\n' +
    'B. FETCH\n' +
    'C. SELECT (correct)\n' +
    'D. Télécharge tout et prie.\n' +
    '\n' +
    "2. Quel mot-clé SQL est utilisé pour limiter les résultats d'une requête ?\n" +
    'A. CUTOFF\n' +
    'B. LIMIT (correct)\n' +
    'C. RESTRICT\n' +
    'D. STOP IT, PLEASE!',
})
const promptPlaceholder =
  'Copie ton contenu ici sous cette forme là\n' +
  '\n' +
  '1. Question 1\n' +
  'A. Option 1\n' +
  'B. Option 2\n' +
  'C. Option 3\n' +
  'D. Option 4 (Correct)\n' +
  '\n' +
  '2. Question 2\n' +
  'A. Option 1\n' +
  'B. Option 2\n' +
  'C. Option 3\n' +
  'D. Option 4 (Correct)'
const storeFromPromptRouteUrl = computed(() => client.$url('teacher.quiz.store_from_prompt'))
</script>
<template>
  <Layout>
    <h1 class="text-2xl my-8">Ajouter un nouveau quiz depuis un prompt GPT</h1>
    <form method="post" @submit.prevent="form.post(storeFromPromptRouteUrl)">
      <AppInput
        label="Titre du quiz"
        :errors="form.errors.title"
        v-model="form.title"
        :name="`title`"
      />
      <AppTextarea
        label="Insérer votre prompt GPT ici"
        :errors="form.errors.content"
        v-model="form.content"
        :name="`content`"
        :height="96"
        :placeholder="promptPlaceholder"
      />
      <button type="submit" class="btn btn-primary mt-8" :disabled="form.processing">
        Ajouter
      </button>
    </form>
  </Layout>
</template>
