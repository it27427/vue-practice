<template>
    <div>
        <h1>{{ data }}</h1>

        <h2>Istiak Tushar</h2>
        <h2 v-bind="$attrs">Some other text</h2>
    </div>
</template>

<script>
    export default {
        name: 'NonPropData',
        props: {
            data:String
        }
    }
</script>

<style lang="scss" scoped>

</style>