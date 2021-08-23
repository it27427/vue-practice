<template>
    <div>
        <h1>{{ count }}</h1>
        <button @click="decrese">Decrement</button>
        <button @click="increse">Increment</button>
    </div>
</template>

<script>
    export default {
        name: 'WatcherProperty',
        data() {
            return {
                count: 0,
            }
        },
        methods: {
            increse() {
                if(this.count >= 5) {
                    alert('You can not add more than 5 products...');
                    return false;
                } else {
                    this.count = this.count + 1
                }
            },
            decrese() {
                if (this.count > 1) {
                    this.count = this.count - 1
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>