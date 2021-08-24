<template>
    <div>
        <h1>API Calls</h1>

        <ul v-for="list in lists" :key="list.id">
            <li>
                <img :src="list.avatar" alt="">
            </li>
            <li>
                {{ list.first_name }}
            </li>
            <li>
                {{ list.last_name }}
            </li>
            <li>
                {{ list.email }}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Api',
        data() {
            return {
                lists: [],
            }
        },
        async mounted() {
            let result = await axios.get('https://reqres.in/api/users?page=1');
            console.log(result);
            this.lists = result.data.data;
        }
    }
</script>

<style lang="scss" scoped>

</style>