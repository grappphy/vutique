<template>
    <div @mouseenter="mouseenterHandler" @mouseleave="mouseleaveHandler" class="vu-date">
        <!-- 슬롯: 텍스트 -->
        <slot name="text" :default-class="'vu-date-text'" />

        <!-- 슬롯: 툴팁 -->
        <slot name="tooltip" :default-class="'vu-date-tooltip'" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'vu-el-date',
    setup(props, { emit }) {
        // 마우스엔터
        function mouseenterHandler(): void {
            emit('on-mouseenter');
        }

        // 마우스리브
        function mouseleaveHandler(): void {
            emit('on-mouseleave');
        }

        return {
            // handlers
            mouseenterHandler,
            mouseleaveHandler
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/date';
</style>
