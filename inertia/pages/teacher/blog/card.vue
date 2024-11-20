<script setup lang="ts">
import AppDelete from '~/components/AppDelete.vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
const props = defineProps<{ post: Object }>()
const editRouteUrl = computed(() =>
  client.$url('teacher.blog.edit', { params: { id: props.post.id } })
)
const destroyRouteUrl = computed(() =>
  client.$url('teacher.blog.destroy', { params: { id: props.post.id } })
)
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">
        {{ post.title }}
      </h2>
      <p>{{ post.content }}</p>
      <div class="flex justify-between mt-4">
        <a class="btn btn-info" :href="editRouteUrl">Editer l'article</a>
        <AppDelete :route-path="destroyRouteUrl" :id="post.id">{{
          `Êtes vous sûr de vouloir supprimer l'article ${post.id} ?`
        }}</AppDelete>
      </div>
    </div>
  </div>
</template>
