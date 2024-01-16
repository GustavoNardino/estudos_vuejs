<template>
    <div>
        <div>
            <button @click="showEmail">CLIQUE - {{ btnText }}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: gustavo@email.com</p>
        <div>
            <h3>Lista:</h3>
            <ul v-for="l in lista">
                <li><strong>{{ l.title }}</strong> - {{ l.text }}</li>
            </ul>
        </div>
        <form action="" @submit="handleSubmit($event)">
            <input v-model="form_name" type="text" />
            <input v-model="form_email" type="text" />
            <input type="submit" value="Enviar">
        </form>
        <div>
            <button @click="func1($event), func2($event), func3($event)">MÚLTIPLOS EVENTOS</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MeuInfo',
    data() {
        return {
            mostrar_email: false,
            btnText: 0,
            lista: [
                {
                    id: 0,
                    title: 'Title 1',
                    text: 'Text 1',
                },
                {
                    id: 1,
                    title: 'Title 2',
                    text: 'Text 2',
                },
                {
                    id: 2,
                    title: 'Title 3',
                    text: 'Text 3',
                },
                {
                    id: 3,
                    title: 'Title 4',
                    text: 'Text 4',
                },
                {
                    id: 4,
                    title: 'Title 5',
                    text: 'Text 5',
                },
            ],
            form_name: '',
            form_email: '',
        }
    },
    methods: {
        showEmail() {
            // this.mostrar_email = !this.mostrar_email
            this.btnText += 1
            this.lista.push({ id: this.lista.length + 1, title: `Title ${this.lista.length + 1}`, text: `Text ${this.lista.length + 1}` })
        },
        handleSubmit(event:any){
            event.preventDefault()
            console.log(this.form_name, this.form_email)
        },
        func1(event:any){
            console.log('func1 event')
        },
        func2(event:any){
            console.log('func2 event')
        },
        func3(event:any){
            console.log('func3 event')
        }
    }
}
</script>

<style scoped>
button {
    padding: 5px 10px;
}
</style>