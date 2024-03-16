<template>
    <span :class="classes">
        <slot />
    </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'vu-el-ratio',
    props: {
        /**
         * 종횡비
         *
         * @type {String}
         */
        ratio: {
            type: String
        }
    },
    setup(props) {
        const classes = computed(() => {
            // 클래스
            const defaultClass = 'vu-ratio';

            const ratioClass = props.ratio ? `${defaultClass}{${props.ratio}}` : null;

            return [defaultClass, ratioClass];
        });

        return {
            classes
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/ratio';
</style>
