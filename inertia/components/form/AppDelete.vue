<script setup lang="ts">
import { computed, ref } from 'vue'
import { router } from '@inertiajs/vue3'
import { client } from '~/helpers/rpc_client.ts'

type Props = {
  routePath: string
  routeParams: object
  message?: string
  btnClasses?: string
}
const props = withDefaults(defineProps<Props>(), {
  message: 'Êtes-vous sûr de vouloir supprimer ?',
  btnClasses: '',
})
const open = ref(false)

const toggleDisplay = () => {
  open.value = !open.value
}

const deleteItem = async () => {
  console.log(props.routeParams)
  const route = computed(() => client.$url(props.routePath, { params: props.routeParams }))
  await router.delete(route.value)
  toggleDisplay()
}
</script>

<template>
  <button @click="toggleDisplay" :class="btnClasses">
    <slot>Supprimer</slot>
  </button>
  <template v-if="open">
    <Teleport to="div#app > div">
      <div class="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50">
        <dialog class="modal" open>
          <div class="modal-box">
            <h3 class="text-lg font-bold">Confirmation</h3>
            <p class="py-4">{{ message }}</p>
            <div class="modal-action">
              <button class="btn btn-error" @click="deleteItem">Oui</button>
              <button class="btn btn-outline" @click="toggleDisplay">Non</button>
            </div>
          </div>
        </dialog>
      </div>
    </Teleport>
  </template>
</template>
