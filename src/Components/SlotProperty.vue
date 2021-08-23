<template>
    <div>
        <slot name="card-header"></slot>
        <slot name="card-body"></slot>
        <slot name="card-footer"></slot>
    </div>
</template>

<script>
    export default {
        name: 'SlotProperty',
    }
</script>

<style lang="scss" scoped>

</style>