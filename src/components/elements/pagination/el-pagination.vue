<template>
    <div class="vu-pagination">
        <slot name="content" :list-class="'vu-pagination-list'" :item-class="'vu-pagination-item'" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'vu-el-pagination'
});
</script>

<style lang="scss">
@import '../../../styles/components/pagination';
</style>
