<template>
    <div>
        <h1>Ref Property In Vue 3</h1>

        <div class="wrapper">
            <input type="text" ref="inputField" class="input-field">
            <button @click="getRefData">Focus by Click</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Ref',
        data() {
            return {

            }
        },
        methods: {
            getRefData() {
                let ref = this.$refs.inputField;
                ref.focus();
                let value = ref.value;
                console.log(value);
            }
        }
    }
</script>

<style lang="css" scoped>
    .input-field:focus {
        outline: none;
        border-color: cadetblue;
    }
</style>