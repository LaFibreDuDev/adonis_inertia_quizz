<script setup lang="ts">
import TableHeader from '~/components/table/TableHeader.vue'
import TableLine from '~/components/table/TableLine.vue'
import AppTable from '~/components/table/AppTable.vue'
import type { GameListQueryResult } from '#teacher/game/repositories/game_repository'
import { getGameStatus } from '#teacher/game/enums/game_status'
import LucideIcon from '~/components/icons/LucideIcon.vue'
import { Link } from '@tuyau/inertia/vue'

defineProps<{ games: GameListQueryResult }>()
</script>

<template>
  <AppTable>
    <TableHeader
      :fields="['Id de la partie', 'Id du quiz', 'Statut', 'Nombre de participants', 'Actions']"
    />
    <tbody v-for="game in games">
      <TableLine :id="game.id">
        <td>{{ game.id }}</td>
        <td>{{ game.quizId }}</td>
        <td>{{ getGameStatus(game.status) }}</td>
        <td>{{ game.users.length }}</td>
        <td>
          <Link route="teacher.game.pending" :params="{ id: game.id }"
            ><LucideIcon name="Eye"
          /></Link>
        </td>
      </TableLine>
    </tbody>
  </AppTable>
</template>

<style scoped></style>
