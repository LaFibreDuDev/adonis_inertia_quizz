<script setup lang="ts">
import { client } from '~/helpers/rpc_client.ts'
import { Link } from '@inertiajs/vue3'
import { computed } from 'vue'
const props = defineProps<{ label: String; routePath: String; routeParams?: Object }>()
const routeUrl = computed(() => {
  if (props.routeParams?.length > 0) {
    return client.$url(props.routePath, { params: props.routeParams })
  }
  return client.$url(props.routePath)
})
</script>

<template>
  <Link :href="routeUrl" :class="{ active: routeUrl.includes($page.url) }">{{ label }}</Link>
</template>
