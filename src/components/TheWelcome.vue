<script lang="ts">
let a = 'variável 1'
let b = 'variável 2'
export default {
  name: 'Componente',
  data() {
    return {
      textos: {
        a, b
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>Teste</h1>
    <h3>{{ textos.a }}</h3>
    <h3>{{ textos.b }}</h3>

  </div>
</template>
