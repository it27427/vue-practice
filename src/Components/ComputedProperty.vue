<template>
    <div>
        <h1>{{ getResult }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'ComputedProperty',
        data() {
            return {
                dollar: 100,
                bdt: 8,
                discount: 10
            }
        },
        computed: {
            getResult() {
                return (this.dollar * this.bdt) - this.discount;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>