<template>
    <div class="vu-toggle">
        <button @mouseenter="buttonMouseenterHandler" @mouseleave="buttonMouseleaveHandler" class="vu-toggle-button">
            <!-- 슬롯: 버튼 콘텐츠 -->
            <slot name="button-content" />
        </button>

        <!-- 슬롯: 툴팁 -->
        <slot name="tooltip" :default-class="'vu-toggle-tooltip'" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'vu-el-toggle',
    setup(props, { emit }) {
        // 버튼 마우스 엔터
        function buttonMouseenterHandler() {
            emit('on-mouseenter');
        }

        // 버튼 마우스 리브
        function buttonMouseleaveHandler() {
            emit('on-mouseleave');
        }

        return {
            buttonMouseenterHandler,
            buttonMouseleaveHandler
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/toggle';
</style>
