<script setup lang="ts">
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'

type Props = {
  routePath: String
  id: Number
  message?: String
}
const props = withDefaults(defineProps<Props>(), {
  message: 'Êtes-vous sûr de vouloir supprimer ?',
})
const open = ref(false)

const toggleDisplay = () => {
  open.value = !open.value
}

const deleteItem = async () => {
  await router.delete(props.routePath)
  toggleDisplay()
}
</script>

<template>
  <button @click="toggleDisplay">
    <slot>Supprimer</slot>
  </button>
  <template v-if="open">
    <Teleport to="body">
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
