<script setup lang="ts">
import { client } from '~/helpers/rpc_client.ts'
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'
import { getRelativePath } from '~/helpers/functions.ts'
const props = defineProps<{ label: string; routePath: string; routeParams?: object }>()
const routeUrl = computed(() => {
  console.log(props.routeParams)
  if (props.routeParams) {
    return client.$url(props.routePath, { params: props.routeParams })
  }
  return client.$url(props.routePath)
})
</script>

<template>
  <Link :href="routeUrl" :class="{ active: $page.url === getRelativePath(routeUrl) }">{{
    label
  }}</Link>
</template>
