<script setup lang="ts">
import Layout from '~/components/navbar/Layout.vue'
import type { GameFindQueryResult } from '#teacher/game/repositories/game_repository'

defineProps<{
  game: GameFindQueryResult
}>()
</script>

<template>
  <Layout>
    <h1 class="text-4xl my-4">Lancement du jeu numéro {{ game.id }}</h1>
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
