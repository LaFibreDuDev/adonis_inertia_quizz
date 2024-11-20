<script setup lang="ts">
import AppDelete from '~/components/AppDelete.vue'
import Layout from '~/components/Layout.vue'
import Card from '~/pages/teacher/blog/card.vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'

const props = defineProps<{
  posts: Object[]
}>()
const addRouteUrl = computed(() => client.$url('teacher.blog.add'))
</script>

<template>
  <Layout>
    <h1 class="text-4xl my-4">Liste des articles</h1>
    <a class="btn btn-primary" :href="addRouteUrl">Ajouter un nouvel article</a>
    <div class="grid grid-cols-3 gap-4">
      <template v-for="post in posts">
        <Card :post="post" />
      </template>
    </div>
  </Layout>
</template>
