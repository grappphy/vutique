<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'vu-el-container',
    props: {
        /**
         * 반응형
         *
         * @type {String}
         */
        responsive: {
            type: String
        },
        /**
         * 유동성 사용 여부
         *
         * @type {Boolean}
         */
        useFulid: {
            type: Boolean
        }
    },
    setup(props) {
        // 클래스
        const classes = computed(() => {
            const defaultClass = 'vu-container';

            if (props.useFulid) {
                return `${defaultClass}-fluid`;
            }

            if (props.responsive) {
                return `${props.responsive}@${defaultClass}`;
            }

            return [defaultClass];
        });

        return {
            classes
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/layout/containers';
</style>
