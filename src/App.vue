<template>
<div class="container">

	<router-link to="/">Home</router-link>
	<router-link to="/profile/1">Profile 1</router-link>
	<router-link to="/profile/2">Profile 2</router-link>
	<router-link to="/profile/3">Profile 3</router-link>
	<router-link to="/contact">Contact</router-link>

	<router-view></router-view>

    <Api />
</div>
</template>

<script>
import Api from './Components/Api';

export default {
    name: 'App',
    components: {
        Api
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

.container {
    max-width: 60rem;
    margin: 0 auto;
}

input:focus {
    outline: none;
}
</style>
