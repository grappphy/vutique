<template>
    <component :class="classes" :is="tag">
        <slot>
            {{ content }}
        </slot>
    </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'vu-el-text',
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
         * 색상
         *
         * @type {String}
         */
        color: {
            type: String
        },
        /**
         * 내용
         *
         * @type {string}
         */
        content: {
            type: String
        }
    },
    setup(props) {
        const classes = computed(() => {
            const defaultClass = 'vu-text';

            const tyepClass = props.type ? `${defaultClass}<${props.type}>` : null;

            const sizeClass = props.size ? `${defaultClass}{${props.size}}` : null;

            const colorClass = props.color ? `vu-color{${props.color}}` : null;

            return [defaultClass, tyepClass, sizeClass, colorClass];
        });

        return {
            classes
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/text';
</style>
