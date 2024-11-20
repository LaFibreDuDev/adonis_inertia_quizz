<script setup lang="ts">
import Layout from '~/components/Layout.vue'
import AppInput from '~/components/AppInput.vue'
import { useForm } from '@inertiajs/vue3'
import AppPasswordInput from '~/components/AppPasswordInput.vue'
import { computed } from 'vue'
import { client } from '~/helpers/rpc_client.ts'
const form = useForm({
  email: null,
  password: null,
})
const loginRouteUrl = computed(() => client.$url('auth.login.process'))
</script>

<template>
  <Layout>
    <h1 class="text-2xl my-8">Se connecter</h1>
    <form method="post" @submit.prevent="form.post(loginRouteUrl)">
      <div class="flex flex-col gap-4">
        <AppInput label="Email" :errors="form.errors.email" v-model="form.email" :name="`email`" />
        <AppPasswordInput
          label="Mot de passe"
          :errors="form.errors.password"
          v-model="form.password"
          :name="`password`"
        />
      </div>
      <button type="submit" class="btn btn-primary mt-8" :disabled="form.processing">
        Se connecter
      </button>
    </form>
  </Layout>
</template>
