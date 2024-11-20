<script setup lang="ts">
import Layout from '~/components/Layout.vue'
import AppInput from '~/components/AppInput.vue'
import { useForm } from '@inertiajs/vue3'
import AppPasswordInput from '~/components/AppPasswordInput.vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
const form = useForm({
  username: null,
  lastname: null,
  firstname: null,
  email: null,
  password: null,
})
const signInRouteUrl = computed(() => client.$url('auth.store'))
</script>

<template>
  <Layout>
    <h1 class="text-2xl my-8">Inscription</h1>
    <form method="post" @submit.prevent="form.post(signInRouteUrl)">
      <div class="flex flex-col gap-4">
        <AppInput
          label="Pseudo"
          :errors="form.errors.username"
          v-model="form.username"
          :name="`username`"
        />
        <AppInput
          label="Nom"
          :errors="form.errors.lastname"
          v-model="form.lastname"
          :name="`lastname`"
        />
        <AppInput
          label="Prénom"
          :errors="form.errors.firstname"
          v-model="form.firstname"
          :name="`firstname`"
        />
        <AppInput label="Email" :errors="form.errors.email" v-model="form.email" :name="`email`" />
        <AppPasswordInput
          label="Mot de passe"
          :errors="form.errors.password"
          v-model="form.password"
          :name="`password`"
        />
      </div>
      <button type="submit" class="btn btn-primary mt-8" :disabled="form.processing">
        S'inscrire
      </button>
    </form>
  </Layout>
</template>
