<template>
    <button @click="clickHandler" :class="classes">
        <slot name="content" :icon-class="'vu-pagination-icon'" />
    </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'vu-el-pagination-button',
    props: {
        /**
         * 활성화 상태
         *
         * @type {Boolean}
         */
        isActive: {
            type: Boolean
        },
        /**
         * 사용 불가 상태
         *
         * @type {Boolean}
         */
        isDisabled: {
            type: Boolean
        }
    },
    setup(props, { emit }) {
        // 클래스
        const classes = computed(() => {
            const defaultClass = 'vu-pagination-button';

            const activeClass = props.isActive ? `${defaultClass}:active` : '';

            const disabledClass = props.isDisabled ? `${defaultClass}:disabled` : '';

            return [defaultClass, activeClass, disabledClass];
        });

        // 클릭
        function clickHandler() {
            emit('on-click');
        }

        return {
            classes,
            clickHandler
        };
    }
});
</script>
