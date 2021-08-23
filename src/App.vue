<template>
<div class="container">

	<router-link to="/">Home</router-link>
	<router-link to="/profile">Profile</router-link>
	<router-link to="/contact">Contact</router-link>

	<router-view></router-view>
</div>
</template>

<script>


export default {
    name: 'App',
    components: {
        
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
