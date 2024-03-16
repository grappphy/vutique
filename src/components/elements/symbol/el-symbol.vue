<template>
    <div :class="classes" @click="clickHandler">
        <!-- 슬롯: 아이콘 -->
        <slot name="icon" :default-class="iconClasses" />

        <!-- 슬롯: 썸네일 -->
        <slot name="thumbnail" :default-class="thumbnailClasses" :image-class="'vu-symbol-thumbnail-image'" />

        <!-- 슬롯: 스트로크 -->
        <slot name="stroke" :default-class="'vu-symbol-stroke'" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'vu-el-symbol',
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
         * 스트로크 사용 여부
         *
         * @type {Boolean}
         */
        useStroke: {
            type: Boolean
        }
    },
    setup(props, { emit }) {
        // 클래스
        const classes = computed(() => {
            const defaultClass = 'vu-symbol';

            const typeClass = props.type ? `${defaultClass}<${props.type}>` : null;

            const sizeClass = props.size ? `${defaultClass}{${props.size}}` : null;

            const colorClass = props.color ? `vu-color{${props.color}}` : null;

            const strokeClass = props.useStroke ? `${defaultClass}{stroke}` : null;

            return [defaultClass, sizeClass, typeClass, colorClass, strokeClass];
        });

        // 아이콘 클래스
        const iconClasses = computed(() => {
            const defaultClass = 'vu-symbol-icon';

            const strokeClass = props.useStroke ? `${defaultClass}{stroke}` : null;

            return [defaultClass, strokeClass];
        });

        // 썸네일 클래스
        const thumbnailClasses = computed(() => {
            const defaultClass = 'vu-symbol-thumbnail';

            const strokeClass = props.useStroke ? `${defaultClass}{stroke}` : null;

            return [defaultClass, strokeClass];
        });

        // 클릭
        function clickHandler(): void {
            emit('on-click');
        }

        return {
            classes,
            iconClasses,
            thumbnailClasses,

            clickHandler
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/symbol';
</style>
