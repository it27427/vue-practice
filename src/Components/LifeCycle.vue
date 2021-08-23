<template>
    <div>
        <h1>Test {{ name }}</h1>

        <h2 ref="counter">{{ count }}</h2>
        <button @click="count++">Update Count</button>
        
        <button @click="show=!show">Toggle</button>

        <User v-if="show" />

    </div>
</template>

<script>
    import User from './User';

    export default {
        name: 'LifeCycle',
        components: {
            User
        },
        data() {
            // console.log('created...');
            return {
                name: 'Tushar',
                count: 0,
                show: true
            }
        },
        // beforeCreate() {
        //     alert('before create');
        // },
        // created() {
        //     this.name = 'Istiak';
        //     alert('created');
        // },
        // beforeMount() {
        //     console.log('before mount', this.$el);
        // },
        // mounted() {
        //     console.log('mounted', this.$el);
        // },
        // beforeUpdate() {
        //     console.log('beforeUpdate', this.$refs['counter'].textContent);
        // },
        // updated() {
        //     console.log('updated', this.$refs['counter'].textContent);
        // }
    }
</script>

<style lang="scss" scoped>

</style>