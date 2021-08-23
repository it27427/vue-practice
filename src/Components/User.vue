<template>
    <div>
        <h1 ref="user">User Component</h1>
    </div>
</template>

<script>
    export default {
        name: 'User',
        beforeUnmount() {
            console.log('beforeUnmount', this.$refs['user']);
        },
        unmounted() {
            console.log('unmounted', this.$refs['user']);
        }
    }
</script>

<style lang="scss" scoped>

</style>