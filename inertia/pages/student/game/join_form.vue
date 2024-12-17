<script setup lang="ts">
import { useForm, usePage } from '@inertiajs/vue3'
import AppInput from '~/components/form/AppInput.vue'
import { client } from '~/helpers/rpc_client.ts'
import type { SharedProps } from '@adonisjs/inertia/types'
import { computed } from 'vue'

const currentUser = computed(() => usePage<SharedProps>().props.currentUser)

const form = useForm<{ gameId: number | null; userId: number }>({
  gameId: null,
  userId: Number.parseInt(currentUser.value.id),
})

const gameUserJoinUrl = computed(() => client.$url('student.game.join'))
</script>

<template>
  <form method="post" @submit.prevent="form.post(gameUserJoinUrl)">
    <AppInput label="Id du quiz" :errors="form.errors.gameId" v-model="form.gameId" name="gameId" />
    <button type="submit" class="my-4 btn btn-primary">Rejoindre la partie</button>
  </form>
</template>
