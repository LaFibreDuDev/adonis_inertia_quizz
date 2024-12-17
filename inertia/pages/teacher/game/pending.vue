<script setup lang="ts">
import Layout from '~/components/navbar/Layout.vue'
import type { GameFindQueryResult } from '#teacher/game/repositories/game_repository'
import { useForm } from '@inertiajs/vue3'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'

const props = defineProps<{
  game: GameFindQueryResult
}>()

const form = useForm({
  gameId: props.game.id,
  userId: 4,
})
const gameUserJoinUrl = computed(() => client.$url('teacher.game.join'))
</script>

<template>
  <Layout>
    <h1 class="text-4xl my-4">Lancement du jeu numéro {{ game.id }}</h1>
    <form method="post" @submit.prevent="form.post(gameUserJoinUrl)">
      <button type="submit" class="btn btn-sm btn-primary">Simuler un ajout de joueur</button>
    </form>
    <h2 class="text-xl my-4">En attente des participants</h2>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="gameUser in game.users" class="card bg-primary bg-base-100 text-black w-96">
        <div class="card-body">
          <h2 class="card-title">{{ gameUser.user.lastname }} {{ gameUser.user.firstname }}</h2>
        </div>
      </div>
    </div>
  </Layout>
</template>
