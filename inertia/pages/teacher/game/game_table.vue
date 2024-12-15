<script setup lang="ts">
import TableHeader from '~/components/table/TableHeader.vue'
import TableLine from '~/components/table/TableLine.vue'
import AppTable from '~/components/table/AppTable.vue'
import type { GameListQueryResult } from '#teacher/game/repositories/game_repository'

const props = defineProps<{ games: GameListQueryResult }>()
</script>

<template>
  <AppTable>
    <TableHeader :fields="['Id de la partie', 'Id du quiz', 'Nombre de participants']" />
    <tbody v-for="game in games">
      <TableLine :id="game.id">
        <td>{{ game.id }}</td>
        <td>{{ game.quizId }}</td>
        <td>{{ game.users.length }}</td>
      </TableLine>
    </tbody>
  </AppTable>
</template>

<style scoped></style>
