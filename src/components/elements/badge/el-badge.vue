<template>
    <span :class="classes">
        <slot name="text" :default-class="'vu-badge-text'">
            <vu-el-text class="vu-badge-text" :tag="'span'" :content="text" :type="textType" :color="textColor" />
        </slot>
    </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

// Elements
import VuElText from '../text/el-text.vue';

export default defineComponent({
    name: 'vu-el-badge',
    components: {
        VuElText
    },
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
         * 색상
         *
         * @type {String}
         */
        color: {
            type: String
        },
        /**
         * 형태
         *
         * @type {String}
         */
        shape: {
            type: String
        },
        /**
         * 텍스트
         *
         * @type {String}
         */
        text: {
            type: String
        },
        /**
         * 텍스트 유형
         *
         * @type {String}
         */
        textType: {
            type: String
        },
        /**
         * 텍스트 색상
         *
         * @type {String}
         */
        textColor: {
            type: String
        }
    },
    setup(props) {
        //  클래스
        const classes = computed(() => {
            const defaultClass = 'vu-badge';

            const typeClass = props.type ? `${defaultClass}:${props.type}` : null;

            const sizeClass = props.size ? `${defaultClass}{${props.size}}` : null;

            const shapeClass = props.shape ? `${defaultClass}{${props.shape}}` : null;

            const colorClass = props.color ? `vu-color{${props.color}}` : '';

            return [defaultClass, typeClass, sizeClass, shapeClass, colorClass];
        });

        return {
            classes
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/badge';
</style>
