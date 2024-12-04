<script setup lang="ts">
import { client } from '~/helpers/rpc_client.ts'
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'
import { getRelativePath } from '~/helpers/functions.ts'

const props = defineProps<{ label: string; routePath: string; routeParams?: object }>()
const routeUrl = computed(() => {
  if (props.routeParams) {
    return client.$url(props.routePath as any, { params: props.routeParams as any })
  }
  return client.$url(props.routePath as any)
})
</script>

<template>
  <Link :href="routeUrl" :class="{ active: $page.url === getRelativePath(routeUrl) }">{{
    label
  }}</Link>
</template>
