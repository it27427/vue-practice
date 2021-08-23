<template>
    <div>
        <h1>Send data child to parent component</h1>
    
        <button @click="getName(name)">Send User Name</button>
    </div>
</template>

<script>
    export default {
        name: 'Child',
        data() {
            return {
                name: 'Istiak Hossain Tushar',
                id: '1234'
            }
        },
        props: {
            getName: Function
        }
    }
</script>

<style lang="scss" scoped>

</style>