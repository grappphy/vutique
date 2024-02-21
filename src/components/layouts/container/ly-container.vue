<template>
    <span class="vu-container">
        <slot />
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'vu-ly-container'
});
</script>

<style lang="scss">
@import '../../../styles/layout/containers';
</style>
