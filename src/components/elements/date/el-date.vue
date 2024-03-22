<template>
    <div class="vu-date">
        <!-- 슬롯: 텍스트 -->
        <slot name="text" :default-class="'vu-date-text'" />

        <!-- 슬롯: 툴팁 -->
        <slot name="tooltip" :default-class="'vu-date-tooltip'" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'vu-el-date'
});
</script>

<style lang="scss">
@import '../../../styles/components/date';
</style>
