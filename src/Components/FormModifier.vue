<template>
<div>
    <input type="number" v-model.number.lazy="data">
    <h1>{{ typeof(data) }}</h1>
    <h1>{{ data }}</h1>
</div>
</template>

<script>
export default {
    name: 'FormModifier',
    data() {
        return {
            data: '',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
