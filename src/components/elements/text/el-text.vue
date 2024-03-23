<template>
    <component @click="clickHandler" :class="classes" :is="tag" :to="to" :href="href" :target="linkTarget">
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
         * 텍스트 태그
         *
         * @type {String}
         */
        tag: {
            type: String
        },
        /**
         * 텍스트 크기
         *
         * @type {String}
         */
        size: {
            type: String
        },
        /**
         * 텍스트 색상
         *
         * @type {String}
         */
        color: {
            type: String
        },
        /**
         * 텍스트 내용
         *
         * @type {string}
         */
        content: {
            type: String
        },
        /**
         * 링크 URL
         *
         * @type {String}
         */
        href: {
            type: String
        },
        /**
         * 라우터 링크 URL
         *
         * @type {String}
         */
        to: {
            type: String
        },
        /**
         * 링크 타겟
         *
         * @type {String}
         */
        linkTarget: {
            type: String
        },
        /**
         * 말줄임 사용 여부
         *
         * @type {Boolean}
         */
        useTruncate: {
            type: Boolean
        }
    },
    setup(props, { emit }) {
        // 클래스
        const classes = computed(() => {
            const defaultClass = 'vu-text';

            const tyepClass = props.type ? `${defaultClass}<${props.type}>` : null;

            const sizeClass = props.size ? `${defaultClass}{${props.size}}` : null;

            const colorClass = props.color ? `vu-color{${props.color}}` : null;

            return [defaultClass, tyepClass, sizeClass, colorClass];
        });

        // 클릭
        function clickHandler(): void {
            emit('on-click');
        }

        return {
            classes,

            // Handlers
            clickHandler
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/text';
</style>
