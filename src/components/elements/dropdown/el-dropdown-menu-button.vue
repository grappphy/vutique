<template>
    <vu-el-menu-button @on-click="clickHandler" class="vu-dropdown-menu-button">
        <!-- 슬롯: 아이콘 -->
        <slot name="icon" :default-class="'vu-dropdown-menu-button-icon'" />

        <!-- 슬롯: 텍스트 -->
        <slot name="text" :default-class="'vu-dropdown-menu-button-text'" />
    </vu-el-menu-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import VuElMenuButton from '../menu/el-menu-button.vue';

export default defineComponent({
    name: 'vu-el-dropdown-menu-button',
    components: {
        VuElMenuButton
    },
    setup(props, { emit }) {
        // 버튼 클릭
        function clickHandler(): void {
            emit('on-click');
        }

        return {
            clickHandler
        };
    }
});
</script>
