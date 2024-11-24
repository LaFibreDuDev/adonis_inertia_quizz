<script setup lang="ts">
import TableHeader from '~/components/table/TableHeader.vue'
import TableLine from '~/components/table/TableLine.vue'
import AppTable from '~/components/table/AppTable.vue'
import AppDelete from '~/components/AppDelete.vue'
import LucideIcon from '~/components/icons/LucideIcon.vue'
import type { PostListQueryResult } from '#repositories/post_repository'
import { Link } from '@tuyau/inertia/vue'

const props = defineProps<{ posts: PostListQueryResult }>()
</script>

<template>
  <AppTable>
    <TableHeader :fields="['Id', 'Titre', 'Contenu', 'Actions']" />
    <tbody v-for="post in posts">
      <TableLine :id="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.content }}</td>
        <th class="flex gap-4">
          <Link route="teacher.blog.edit" :params="{ id: post.id }"
            ><LucideIcon name="Pencil"
          /></Link>
          <AppDelete
            :route-path="`teacher.blog.destroy`"
            :route-params="{ id: post.id }"
            :message="`Êtes vous sûr de vouloir supprimer le post ${post.id} ?`"
            ><LucideIcon name="Trash"
          /></AppDelete>
        </th>
      </TableLine>
    </tbody>
  </AppTable>
</template>

<style scoped></style>
