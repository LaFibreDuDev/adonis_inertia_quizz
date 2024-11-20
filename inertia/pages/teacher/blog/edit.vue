<script setup lang="ts">
import AppTextarea from '~/components/AppTextarea.vue'
import AppInput from '~/components/AppInput.vue'
import Layout from '~/components/Layout.vue'
import { router, useForm } from '@inertiajs/vue3'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
const props = defineProps<{ post: Object }>()
const form = useForm({
  title: props.post.title,
  content: props.post.content,
})
const updateRouteUrl = computed(() =>
  client.$url('teacher.blog.update', { params: { id: props.post.id } })
)
</script>

<template>
  <Layout>
    <h1 class="text-2xl">Modification d'un article</h1>
    <form method="post" @submit.prevent="form.put(updateRouteUrl)">
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
      <button type="submit" class="btn btn-primary mt-8" :disabled="form.processing">Editer</button>
    </form>
  </Layout>
</template>
