<script setup lang="ts">
import BurgerIcon from './icons/BurgerIcon.vue'
import ThemeController from './ThemeController.vue'
import AppLink from '~/components/navbar/AppLink.vue'
import NavBarUser from '~/components/navbar/NavBarUser.vue'
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import type { SharedProps } from '@adonisjs/inertia/types'
const currentUser = computed(() => usePage<SharedProps>().props.currentUser)
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <BurgerIcon />
        </div>
        <NavBarUser
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        />
      </div>
      <div class="navbar-center hidden lg:flex">
        <NavBarUser class="menu-horizontal px-1" />
      </div>
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal px-1 items-center">
        <template v-if="currentUser">
          <li>{{ currentUser.username }}</li>
          <li>
            <AppLink :label="`Se déconnecter`" :routePath="`auth.logout`" />
          </li>
        </template>
        <template v-else>
          <li>
            <AppLink :label="`Inscription`" :routePath="`auth.signin`" />
          </li>
          <li>
            <AppLink :label="`Connexion`" :routePath="`auth.login`" />
          </li>
        </template>
      </ul>
      <ThemeController />
    </div>
  </div>
</template>
