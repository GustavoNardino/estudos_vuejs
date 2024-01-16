<template>
    <div>
        <h1>componente Pessoa: <span>{{ title }}</span> dados vindos de props</h1>
        <div v-if="controle_layout">
            <p>Só aparece se tiver true</p>
        </div>
        <div v-else="controle_layout">
            <p>Só aparece se tiver false</p>
        </div>
        <div v-show="controle_layout">
            <p>mesma coisa, mas com v-show</p>
        </div>
        <button v-on:click="controle_layout ? controle_layout = false : controle_layout = true">CONTROLE LAYOUT</button>
        <a v-bind:href="url_site">DUCKDUCKGO</a>
    </div>
</template>

<script lang="ts">
export default {
    name: "Pessoa",
    props: {
        title: String,
    },
    setup(props) {
        props.title
    },
    data() {
        return {
            controle_layout: true,
            url_site: 'https://ddg.gg'
        }
    }
}
</script>

<style>
span {
    text-decoration: underline;
}
</style>