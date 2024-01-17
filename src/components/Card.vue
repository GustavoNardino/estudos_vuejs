
<template>
    <div>
        <img :src="image" alt="">
    </div>
</template>

<script lang="ts">
export default {
    name: 'Card',
    props: {
        id: String,
        name: String,
        image: String,
    },
}
</script>

<style scoped>
div {
    transition: 0.2s;
    width: 270px;
    height: 350px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
}

img {
    width: 240px;
    height: 320px;
    transition: 0.2s;
}

img:hover {

    opacity: 90%;
    width: 270px;
    height: 350px;
}
</style>