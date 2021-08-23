<template>
    <div>
        <button @click="active = 'Comp1'">Show Comp1</button>
        <button @click="active = 'Comp2'">Show Comp2</button>
        <button @click="active = 'Comp3'">Show Comp3</button>

        <component :is="active" />
    </div>
</template>

<script>
    import Comp1 from './Comp1.vue';
    import Comp2 from './Comp2.vue';
    import Comp3 from './Comp3.vue';
    export default {
        name: 'DynamicComponent',
        components: {
            Comp1,
            Comp2,
            Comp3
        },
        data() {
            return {
                active: 'Comp1'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>