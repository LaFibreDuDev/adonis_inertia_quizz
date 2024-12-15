<script setup lang="ts">
import Layout from '~/components/navbar/Layout.vue'
import type { GameListQueryResult } from '#teacher/game/repositories/game_repository'
import GameTable from '~/pages/teacher/game/game_table.vue'

const props = defineProps<{
  games: GameListQueryResult
}>()
</script>

<template>
  <Layout>
    <h1 class="text-4xl my-4">Liste des parties de quiz</h1>
    <GameTable :games="games" />
  </Layout>
</template>
