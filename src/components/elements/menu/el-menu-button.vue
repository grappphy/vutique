<template>
    <button @click="clickHandler" class="vu-menu-button">
        <slot />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'vu-el-menu-button',
    setup(props, { emit }) {
        // 클릭
        function clickHandler(): void {
            emit('on-click');
        }

        return {
            clickHandler
        };
    }
});
</script>
