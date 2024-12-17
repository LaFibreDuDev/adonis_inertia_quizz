<script setup lang="ts">
import Layout from '~/components/navbar/Layout.vue'
import type { GameFindQueryResult } from '#teacher/game/repositories/game_repository'
import { Transmit } from '@adonisjs/transmit-client'
import { onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  game: GameFindQueryResult
}>()

onMounted(async () => {
  const transmit = new Transmit({
    baseUrl: window.location.origin,
  })
  const subscription = transmit.subscription(`game/${props.game.id}`)
  await subscription.create()
  subscription.onMessage((data: { message: string; userId: number; gameUser: string }) => {
    console.log(`message reçu : ${JSON.stringify(data)}`)
    if (data.gameUser) {
      console.log(data)
      props.game.users.push(JSON.parse(data.gameUser))
    }
  })

  onUnmounted(async () => {
    await subscription.delete()
  })
})
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
