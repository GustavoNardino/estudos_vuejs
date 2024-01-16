<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import LifeCycle from '../components/LifeCycle.vue'
import Pessoa from '../components/Pessoa.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <LifeCycle />
    <Pessoa :title="title" />
  </main>
</template>

<script lang="ts">
export default {
  name: 'HomeView',
  components: {
    TheWelcome,
    LifeCycle,
    Pessoa
  },
  data() {
    return {
      title: 'props data'
    }
  }
}
</script>