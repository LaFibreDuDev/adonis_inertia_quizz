<script setup lang="ts">
import TableHeader from '~/components/table/TableHeader.vue'
import TableLine from '~/components/table/TableLine.vue'
import AppTable from '~/components/table/AppTable.vue'
import AppDelete from '~/components/AppDelete.vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
import LucideIcon from '~/components/icons/LucideIcon.vue'
import { Camera } from 'lucide-vue-next'

const props = defineProps<{ posts: Object[] }>()

const editRouteUrl = (id: number) => client.$url('teacher.blog.edit', { params: { id } })
const destroyRouteUrl = (id: number) => client.$url('teacher.blog.destroy', { params: { id } })
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
          <a :href="editRouteUrl(post.id)"><LucideIcon name="Pencil" /></a>
          <AppDelete
            :route-path="destroyRouteUrl(post.id)"
            :id="post.id"
            :message="`Êtes vous sûr de vouloir supprimer l'article ${post.id} ?`"
            ><LucideIcon name="Trash"
          /></AppDelete>
        </th>
      </TableLine>
    </tbody>
  </AppTable>
</template>

<style scoped></style>
