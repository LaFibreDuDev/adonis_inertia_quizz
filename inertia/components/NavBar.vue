<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3'
import type { SharedProps } from '@adonisjs/inertia/types'
import BurgerIcon from './icons/BurgerIcon.vue'
import ThemeController from './ThemeController.vue'
import { computed } from 'vue'
const currentUser = computed(() => usePage<SharedProps>().props.currentUser)
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <BurgerIcon />
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><Link href="/blog" :class="{ active: $page.url === '/blog' }">Accueil</Link></li>
          <li><Link href="/about" :class="{ active: $page.url === '/about' }">A propos</Link></li>
        </ul>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><Link href="/blog" :class="{ active: $page.url === '/blog' }">Accueil</Link></li>
          <li><Link href="/about" :class="{ active: $page.url === '/about' }">A propos</Link></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal px-1 items-center">
        <template v-if="currentUser">
          <li>{{ currentUser.username }}</li>
          <li>
            <Link href="/auth/logout" :class="{ active: $page.url === '/auth/logout' }"
              >Se déconnecter</Link
            >
          </li>
        </template>
        <template v-else>
          <li>
            <Link href="/auth/signin" :class="{ active: $page.url === '/auth/signin' }"
              >Inscription</Link
            >
          </li>
          <li>
            <Link href="/auth/login" :class="{ active: $page.url === '/auth/login' }"
              >Connexion</Link
            >
          </li>
        </template>
      </ul>
      <ThemeController />
    </div>
  </div>
</template>
