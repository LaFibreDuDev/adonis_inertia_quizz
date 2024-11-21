<script setup lang="ts">
import TableHeader from '~/components/table/TableHeader.vue'
import TableLine from '~/components/table/TableLine.vue'
import AppTable from '~/components/table/AppTable.vue'
import AppDelete from '~/components/AppDelete.vue'
import { client } from '~/helpers/rpc_client.ts'
import LucideIcon from '~/components/icons/LucideIcon.vue'
import type { QuizListQueryResult } from '#repositories/quiz_repository'

const props = defineProps<{ quizzes: QuizListQueryResult }>()

const editRouteUrl = (id: number) => client.$url('teacher.quiz.edit', { params: { id } })
const destroyRouteUrl = (id: number) => client.$url('teacher.quiz.destroy', { params: { id } })
</script>

<template>
  <AppTable>
    <TableHeader :fields="['Id', 'Titre', 'Créateur', 'Actions']" />
    <tbody v-for="quiz in quizzes">
      <TableLine :id="quiz.id">
        <td>{{ quiz.id }}</td>
        <td>{{ quiz.title }}</td>
        <td>{{ quiz.creator.username }}</td>
        <th class="flex gap-4">
          <a :href="editRouteUrl(quiz.id)"><LucideIcon name="Pencil" /></a>
          <AppDelete
            :route-path="destroyRouteUrl(quiz.id)"
            :id="quiz.id"
            :message="`Êtes vous sûr de vouloir supprimer le quiz ${quiz.id} ?`"
            ><LucideIcon name="Trash"
          /></AppDelete>
        </th>
      </TableLine>
    </tbody>
  </AppTable>
</template>

<style scoped></style>
