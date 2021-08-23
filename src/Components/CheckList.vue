<template>
    <div>
        <div class="checkcheckbox">
            <h1>Checkbox Value Get</h1>

            <div class="wrapper">
                <label for="tshirt">T-Shirt</label>
                <input type="checkbox" id="tshirt" value="tshirt" v-model="checkCategory">
            </div>
            <div class="wrapper">
                <label for="shirt">Shirt</label>
                <input type="checkbox" id="shirt" value="shirt" v-model="checkCategory">
            </div>
            <div class="wrapper">
                <label for="men">Men</label>
                <input type="checkbox" id="men" value="men" v-model="checkCategory">
            </div>
            <div class="wrapper">
                <label for="women">Women</label>
                <input type="checkbox" id="women" value="women" v-model="checkCategory">
            </div>

            <h2>Selected Category: {{ checkCategory }}</h2>
        </div>

        <div class="checkradiokbox">
            <h1>Radio Value Get</h1>

            <div class="wrapper">
                <label for="male">Male</label>
                <input type="radio" id="male" value="male" name="gender" v-model="radioValue">
            </div>
            <div class="wrapper">
                <label for="female">Shirt</label>
                <input type="radio" id="female" value="female" name="gender" v-model="radioValue">
            </div>
            <div class="wrapper">
                <label for="other">Other</label>
                <input type="radio" id="other" value="other" name="gender" v-model="radioValue">
            </div>

            <h2>Checked value: {{ radioValue }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CheckList',
        data() {
            return {
                checkCategory: [],
                radioValue: null,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>