<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>

<script lang="ts">
export default {
    name: 'LifeCycle',
    data() {
        return {
            nome: 'nada'
        }
    },
    created() {
        setTimeout(() => {
            this.nome = 'Gustavo created'
        }, 1000);
    },
    mounted() {
        setTimeout(() => {
            this.nome = 'Gustavo mounted'
        }, 2000);
    }
}
</script>