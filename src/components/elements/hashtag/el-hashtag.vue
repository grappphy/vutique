<template>
    <component
        @click="clickHandler"
        @mouseenter="mouseenterHandler"
        @mouseleave="mouseleaveHandler"
        @mousedown="mousedownHandler"
        @mouseup="mouseupHandler"
        :class="classes"
        :is="tag"
        :to="to"
        :href="href"
        :target="linkTarget"
        :disabled="isDisabled"
    >
        <!-- 슬롯: 아이콘-->
        <slot name="icon" :default-class="'vu-hashtag-icon'">
            <vu-el-icon v-if="icon" class="vu-hashtag-icon" :icon="icon" />
        </slot>

        <!-- 슬롯: 텍스트 -->
        <slot name="text" :default-class="'vu-hashtag-text'">
            <vu-el-text v-if="text" class="vu-hashtag-text" :tag="'span'" :content="text" />
        </slot>

        <!-- 슬롯: 서브 텍스트 -->
        <slot name="subtext" :default-class="'vu-hashtag-subtext'">
            <vu-el-text v-if="text" class="vu-hashtag-subtext" :tag="'span'" :content="subtext" />
        </slot>
    </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

// Elements
import { VuElText, VuElIcon } from '../index';

export default defineComponent({
    name: 'vu-el-hashtag',
    components: {
        VuElText,
        VuElIcon
    },
    props: {
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
         * 형태
         *
         * @type {String}
         */
        shape: {
            type: String
        },
        /**
         * 아이콘
         *
         * @type {String}
         */
        icon: {
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
         * 서브 텍스트
         *
         * @type {String}
         */
        subtext: {
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
         * 비활성화 상태
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
            const defaultClass = 'vu-hashtag';

            const sizeClass = props.size ? `${defaultClass}{${props.size}}` : null;

            const shapeClass = props.shape ? `vu-button{${props.shape}}` : null;

            const disabledClass = props.isDisabled ? `${defaultClass}:disabled` : null;

            return [defaultClass, sizeClass, shapeClass, disabledClass];
        });

        // 클릭
        function clickHandler(event: Event): void {
            emit('on-click', event);
        }

        // 마우스 엔터
        function mouseenterHandler(event: Event): void {
            emit('on-mouseenter', event);
        }

        // 마우스 리브
        function mouseleaveHandler(event: Event): void {
            emit('on-mouseleave', event);
        }

        // 마우스 다운
        function mousedownHandler(event: Event): void {
            emit('on-mousedown', event);
        }

        // 마우스 업
        function mouseupHandler(event: Event): void {
            emit('on-mouseup', event);
        }

        return {
            classes,

            clickHandler,
            mouseenterHandler,
            mouseleaveHandler,
            mousedownHandler,
            mouseupHandler
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/hashtag';
</style>
