<script setup lang="ts">
import Layout from '~/components/Layout.vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
import Blog_table from '~/pages/teacher/blog/blog_table.vue'

const props = defineProps<{
  posts: Object[]
}>()
const addRouteUrl = computed(() => client.$url('teacher.blog.add'))
</script>

<template>
  <Layout>
    <h1 class="text-4xl my-4">Liste des articles</h1>
    <a class="btn btn-primary" :href="addRouteUrl">Ajouter un nouvel article</a>
    <blog_table :posts="posts" class="mt-4" />
  </Layout>
</template>
