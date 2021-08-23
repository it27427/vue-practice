<template>
    <div>
        <h1>This is parent component</h1>
        <h2>{{ childUserName }}</h2>

        <Child :getName="getUserName" />
    </div>
</template>

<script>
    import Child from './Child';

    export default {
        name: 'Parent',
        components: {
            Child
        },
        data() {
            return {
                childUserName: '',
            }
        },
        methods: {
            getUserName(name) {
                this.childUserName = name;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>