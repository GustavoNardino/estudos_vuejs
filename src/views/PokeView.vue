<script setup lang="ts">
import { getPokeCards } from '@/services/cardsServices'
import { useDeckStore } from '@/stores/cards';
import Card from '@/components/Card.vue'
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from '@/App.vue';

</script>

<script lang="ts">
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
const store = useDeckStore();
export default {

    name: 'poke',
    components: {
        Card
    },
    data() {
        return {
            cardsList: []
        }
    },
    methods: {
        async handleReq(event?: any) {
            event && event.preventDefault()
        },
        async handlePacks() {
            this.cardsList = await getPokeCards()
        },
        handleAdd(c: any) {
            store.increment(c)
        },
        async handleGen(event: any) {
            event.preventDefault()
            console.log('generate')
            this.handlePacks()
        }
    },
    mounted() {
        this.handlePacks()
    },
}
</script>

<template>
    <!-- <div class="poke"> -->
    <h2>Pokemon Buster</h2>
    <!-- <button @click="handleGen($event)">Generate</button> -->
    <div class="content">
        <fieldset class="grid">
            <legend>Todas as cartas</legend>
            <ul v-for="c in cardsList">
                <Card @click="handleAdd(c)" :id="c.id" :name="c.name" :image="c.images.large" />
            </ul>
        </fieldset>
        <fieldset class="deck">
            <legend>Baralho</legend>
            <ul v-for="cd in store.deck">
                <Card @click="" :id="cd.id" :name="cd.name" :image="cd.images.large" />
            </ul>
        </fieldset>
    </div>
    <!-- </div> -->
</template>


<style scoped>
.content {
    display: flex;
}

.grid {
    width: 80%;
    height: 730px;
    overflow-y: scroll;
    margin: 0rem 2rem;
    padding: 2rem .5rem;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    background-color: beige;
}

.deck {
    width: 20%;
    height: 730px;
    overflow-y: scroll;
    margin: 0rem 2rem;
    padding: 2rem .5rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: antiquewhite;
}
ul{
    margin: 0;
    padding: 0;
}
</style>