<script setup lang="ts">
import Card from '../components/Card.vue'
import { getYugiCards, getYugiCardsList } from '@/services/cardsServices.ts'
</script>

<template>
  <div class="cards">
    <h1>Cards page</h1>
    <Card :image="cardData" />
    <button @click="handleReq($event)">GENERATE</button>
    <div class="grid">
      <ul v-for="l in listPacks">
        <img :src="l.set_image"></img>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardsView',
  components: {
    Card
  },
  data() {
    return {
      cardData: '',
      listPacks: []
    }
  },
  methods: {
    async handleReq(event?:any) {
      event && event.preventDefault()
      const res = await getYugiCards()
      this.cardData = res.card_images[0].image_url
    },
    async handlePacks() {
      this.listPacks = await getYugiCardsList()
    }
  },
  mounted() {
    this.handleReq()
    this.handlePacks()
  },

}
</script>

<style scoped>
.grid {
  margin: 2rem;
  padding: 1rem;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
}
img{
  max-width: 300px;
}
</style>