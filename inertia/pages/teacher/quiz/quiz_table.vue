<script setup lang="ts">
import TableHeader from '~/components/table/TableHeader.vue'
import TableLine from '~/components/table/TableLine.vue'
import AppTable from '~/components/table/AppTable.vue'
import AppDelete from '~/components/AppDelete.vue'
import LucideIcon from '~/components/icons/LucideIcon.vue'
import type { QuizListQueryResult } from '#repositories/quiz_repository'
import { Link } from '@tuyau/inertia/vue'

const props = defineProps<{ quizzes: QuizListQueryResult }>()
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
          <Link route="teacher.quiz.show" :params="{ id: quiz.id }"><LucideIcon name="Eye" /></Link>
          <Link route="teacher.quiz.edit" :params="{ id: quiz.id }"
            ><LucideIcon name="Pencil"
          /></Link>
          <AppDelete
            :route-path="`teacher.quiz.destroy`"
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
