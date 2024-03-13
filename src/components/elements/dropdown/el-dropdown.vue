<template>
    <div :class="classes">
        <!-- 슬롯: 버튼 -->
        <slot name="button" />

        <!-- 슬롯: 메뉴 -->
        <slot name="menu" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'vu-el-dropdown',
    props: {
        /**
         * 유형
         *
         * @type {String}
         */
        type: {
            type: String
        },
        /**
         * 크기
         *
         * @type {String}
         */
        size: {
            type: String
        },
        /**
         * 활성화 상태
         *
         * @type {Boolean}
         */
        isActive: {
            type: Boolean
        },
        /**
         * 사용불가 상태
         *
         * @type {Boolean}
         */
        isDisabled: {
            type: Boolean
        }
    },
    setup(props) {
        const classes = computed(() => {
            const defaultClass = 'vu-dropdown';

            const typeClass = props.type ? `${defaultClass}<${props.type}>` : null;

            const sizeClass = props.size ? `${defaultClass}{${props.size}}` : null;

            const activeClass = props.isActive ? `${defaultClass}:active` : null;

            const disabledClass = props.isDisabled ? `${defaultClass}:disabled` : null;

            return [defaultClass, typeClass, sizeClass, activeClass, disabledClass];
        });

        return {
            classes
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/dropdown';
</style>
