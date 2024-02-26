<template>
    <div class="vu-buttons">
        <!-- 슬롯: 아이템 -->
        <slot name="item" :default-class="'vu-buttons-item'" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'vu-el-buttons'
});
</script>

<style lang="scss">
@import '../../../styles/components/buttons';
</style>
