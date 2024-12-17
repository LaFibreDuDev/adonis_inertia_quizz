<script setup lang="ts">
import Layout from '~/components/navbar/Layout.vue'

defineProps<{
  gameId: number
}>()
</script>

<template>
  <Layout>
    <h1 class="text-4xl my-4">Lancement du jeu numéro {{ gameId }}</h1>
    <h2 class="text-xl my-4">En attente du démarrage du jeu</h2>
  </Layout>
</template>
