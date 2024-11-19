<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import BurgerIcon from './icons/BurgerIcon.vue'
import ThemeController from './ThemeController.vue'
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
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">A propos</a></li>
        </ul>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><Link href="/" :class="{ active: $page.url === '/' }">Accueil</Link></li>
          <li><Link href="/about" :class="{ active: $page.url === '/about' }">A propos</Link></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <ThemeController />
    </div>
  </div>
</template>
