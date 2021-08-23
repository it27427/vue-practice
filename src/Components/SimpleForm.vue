<template>
<div class="container">
    <h1>Simple Form</h1>

    <ul>
        <li v-for="error in errors" :key="error.value">{{error}} is not valid</li>
    </ul>

    <form>
        <div class="wrapper">
            <label for="name">Name</label>
            <br>
            <input type="text" id="name" placeholder="Enter Name" v-model="form.name">
        </div>
        <br>
        <div class="wrapper">
            <label for="email">Email</label>
            <br>
            <input type="email" id="email" placeholder="Enter Email" v-model="form.email">
        </div>
        <br>
        <div class="wrapper">
            <label for="country">Country</label>
            <br>
            <select id="country" v-model="form.country">
                <option selected>Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
            </select>
        </div>
        <br>
        <div class="technologybox">
            <div class="wrapper">
                <label for="html">HTML</label>
                <input type="checkbox" value="HTML" id="html" v-model="form.technology">
            </div>
            <div class="wrapper">
                <label for="css">CSS</label>
                <input type="checkbox" value="CSS" id="css" v-model="form.technology">
            </div>
            <div class="wrapper">
                <label for="javascript">JavaScript</label>
                <input type="checkbox" value="JAVASCRIPT" id="javascript" v-model="form.technology">
            </div>
            <div class="wrapper">
                <label for="vue">Vue</label>
                <input type="checkbox" value="VUE" id="vue" v-model="form.technology">
            </div>
            <div class="wrapper">
                <label for="react">React</label>
                <input type="checkbox" value="REACT" id="react" v-model="form.technology">
            </div>
            <div class="wrapper">
                <label for="node">Node</label>
                <input type="checkbox" value="NODE" id="node" v-model="form.technology">
            </div>
        </div>
        <br>
        <div class="wrapper">
            <input type="radio" id="male" value="male" name="gender" v-model="form.gender">
            <label for="male">Male</label>
        </div>
        <div class="wrapper">
            <input type="radio" id="female" value="female" name="gender" v-model="form.gender">
            <label for="female">Female</label>
        </div>
        <br>
        <div class="wrapper">
            <label for="password">Pasword</label>
            <br>
            <input type="password" id="password" placeholder="Enter Pasword" v-model="form.password">
            <!-- <button type="button" @click="showHidePassword">Show password</button> -->
        </div>
        <br>
        <button type="submit" @click.prevent="login">Submit</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'SimpleForm',
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                country: '',
                technology: [],
                gender: ''
            },
            errors: [],
        }
    },
    methods: {
        login() {
            this.errors = [];

            for(const item in this.form) {
                if(this.form[item] === '' || this.form[item].length === 0) {
                    this.errors.push(item);
                }
            }

            if(this.errors.length === 0) {
                alert('Data has been submitted.');
            }

            console.log('login data: ', this.form, this.errors);
        },
        // showHidePassword() {
        //     this.form.password.value.show();
        // }
    }
}
</script>

<style lang="css" scoped>

</style>
