<template>
    <div>
        <teleport to='#teleportcomponent'>
            <div class="container">
                <TeleportComponent />
            </div>
        </teleport>
    </div>
</template>

<script>
    export default {
        name: 'TelePort'
    }
</script>

<style lang="scss" scoped>

</style>