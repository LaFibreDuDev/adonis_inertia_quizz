<script setup lang="ts">
import { Link } from '@tuyau/inertia/vue'
import Layout from '~/components/navbar/Layout.vue'
</script>

<template>
  <Layout>
    <h1 class="text-4xl my-4">Partie étudiant</h1>
    <p>Voici tes stats et les liens vers les quizz auquels tu as accès ...</p>
    <div class="mt-8">
      <div class="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://www.filsantejeunes.com/wp-content/uploads/2020/10/Quiz2LG.jpg"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Un premier quiz</h2>
          <p>Un premier quiz</p>
          <div class="card-actions justify-end">
            <Link route="student.quiz.example" class="btn btn-primary">Accéder au quiz</Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
