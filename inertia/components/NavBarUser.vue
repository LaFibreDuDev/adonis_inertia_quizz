<script setup lang="ts">
import { UserRole } from '../../app/enums/user_role.ts'
import AppLink from '~/components/AppLink.vue'
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import type { SharedProps } from '@adonisjs/inertia/types'
const currentUser = computed(() => usePage<SharedProps>().props.currentUser)
const menuItems = {
  student: [
    { label: 'Accueil étudiant', routePath: `student.home` },
    { label: 'A propos', routePath: `student.about` },
  ],
  teacher: [
    { label: 'Liste des articles', routePath: `teacher.blog.list` },
    { label: 'Liste des quiz', routePath: `teacher.quiz.list` },
    /*{ label: 'Modifier article 1', routePath: `teacher.blog.edit`, routeParams: { id: 1 } },*/
  ],
}
</script>

<template>
  <ul class="menu">
    <template v-if="currentUser && currentUser.role === UserRole.Teacher">
      <li class="flex items-center font-bold"><span>Vue formateur</span></li>
      <li v-for="(item, index) in menuItems.teacher" :key="'menu-teacher-' + index">
        <template v-if="item.routeParams">
          <AppLink
            :label="item.label"
            :routePath="item.routePath"
            :routeParams="item.routeParams"
          />
        </template>
        <template v-else>
          <AppLink :label="item.label" :routePath="item.routePath" />
        </template>
      </li>
    </template>
    <template v-if="currentUser && currentUser.role === UserRole.Student">
      <li class="flex items-center font-bold"><span>Vue étudiant</span></li>
      <li v-for="(item, index) in menuItems.student" :key="'menu-student-' + index">
        <template v-if="item.routeParams">
          <AppLink
            :label="item.label"
            :routePath="item.routePath"
            :routeParams="item.routeParams"
          />
        </template>
        <template v-else>
          <AppLink :label="item.label" :routePath="item.routePath" />
        </template>
      </li>
    </template>
  </ul>
</template>
