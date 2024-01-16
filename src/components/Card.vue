
<template>
    <div>
        <img :src="image" alt="">
    </div>
</template>

<script lang="ts">
export default {
    name: 'Card',
    props: {
        image: String
    },
    // data(){

    // }
}
</script>

<style scoped>
div {
    transition: 0.2s;
    width: 300px;
    height: 400px;
    display: flex;
    margin: 1rem;
    cursor: pointer;
}
div:hover{
    opacity: 90%;
}
</style>