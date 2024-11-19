<script setup lang="ts">
import AppDelete from '~/components/AppDelete.vue'
import Layout from '~/components/Layout.vue'

const props = defineProps<{
  posts: Object
}>()
</script>

<template>
  <Layout>
    <h1 class="text-4xl my-4">Liste des articles</h1>
    <a class="btn btn-primary" href="/add">Ajouter un nouvel article</a>
    <div class="grid grid-cols-3 gap-4">
      <template v-for="post in posts">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              {{ post.title }}
            </h2>
            <p>{{ post.content }}</p>
            <div class="flex justify-between mt-4">
              <a class="btn btn-info" :href="`/edit/${post.id}`">Editer l'article</a>
              <AppDelete :route-path="`/destroy/${post.id}`" :id="post.id">{{
                `Êtes vous sûr de vouloir supprimer l'article ${post.id} ?`
              }}</AppDelete>
            </div>
          </div>
        </div>
      </template>
    </div>
  </Layout>
</template>
