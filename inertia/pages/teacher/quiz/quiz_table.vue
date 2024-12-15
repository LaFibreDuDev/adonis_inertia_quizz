<script setup lang="ts">
import AddGame from '~/pages/teacher/quiz/add_game.vue'
import TableHeader from '~/components/table/TableHeader.vue'
import TableLine from '~/components/table/TableLine.vue'
import AppTable from '~/components/table/AppTable.vue'
import AppDelete from '~/components/form/AppDelete.vue'
import LucideIcon from '~/components/icons/LucideIcon.vue'
import type { QuizListQueryResult } from '#teacher/quiz/repositories/quiz_repository'
import { Link } from '@tuyau/inertia/vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'

const props = defineProps<{ quizzes: QuizListQueryResult }>()

const gameStoreUrl = computed(() => client.$url('teacher.game.store'))
</script>

<template>
  <AppTable>
    <TableHeader :fields="['Id', 'Titre', 'Nombre de questions', 'Créateur', 'Actions']" />
    <tbody v-for="quiz in quizzes">
      <TableLine :id="quiz.id">
        <td>{{ quiz.id }}</td>
        <td>{{ quiz.title }}</td>
        <td>{{ quiz.questions.length }}</td>
        <td>{{ quiz.creator.username }}</td>
        <th class="flex gap-4 items-center">
          <Link route="teacher.quiz.show" :params="{ id: quiz.id }"><LucideIcon name="Eye" /></Link>
          <Link route="teacher.quiz.edit" :params="{ id: quiz.id }"
            ><LucideIcon name="Pencil"
          /></Link>
          <AppDelete
            :route-path="`teacher.quiz.destroy`"
            :route-params="{ id: quiz.id }"
            :id="quiz.id"
            :message="`Êtes vous sûr de vouloir supprimer le quiz ${quiz.id} ?`"
            ><LucideIcon name="Trash"
          /></AppDelete>
          <AddGame :quiz-id="quiz.id" />
        </th>
      </TableLine>
    </tbody>
  </AppTable>
</template>

<style scoped></style>
