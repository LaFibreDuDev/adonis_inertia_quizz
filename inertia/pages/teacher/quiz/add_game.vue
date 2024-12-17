<script setup lang="ts">
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
import { useForm } from '@inertiajs/vue3'

const props = defineProps<{ quizId: string }>()

const form = useForm({
  quizId: props.quizId,
})

const gameStoreUrl = computed(() => client.$url('teacher.game.store'))
</script>

<template>
  <form method="post" @submit.prevent="form.post(gameStoreUrl)">
    <button type="submit" class="btn btn-sm btn-primary">Créer une partie</button>
  </form>
</template>

<style scoped></style>
