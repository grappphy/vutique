<template>
    <component :class="classes" :is="tag">
        <slot name="item" :default-class="'vu-list-item'" />
    </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'vu-el-list',
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
         * 태그
         *
         * @type {String}
         */
        tag: {
            type: String
        }
    },
    setup(props) {
        // 클래스
        const classes = computed(() => {
            const defaultClass = 'vu-list';

            const typeClass = props.type ? `${defaultClass}<${props.type}>` : null;

            return [defaultClass, typeClass];
        });

        return {
            classes
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/list';
</style>
