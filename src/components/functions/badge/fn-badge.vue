<template>
    <vu-el-badge :type="type" :size="size" :shape="shape" :color="color">
        <template #text="{ defaultClass }">
            <!-- 슬롯: 텍스트 -->
            <slot name="text" :default-class="defaultClass">
                <vu-fn-text v-if="text" :class="defaultClass" :content="text" :type="textType" :color="textColor" />
            </slot>
        </template>
    </vu-el-badge>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// Elements
import { VuElBadge } from '../../elements';

// Functions
import { VuFnText } from '../text';

// Types
import type { BadgeTypes, BadgeSizes, BadgeShapes, TextTypes } from '../../../types';
import { BADGE_TYPES, BADGE_SIZES, BADGE_SHAPES, TEXT_TYPES } from '../../../types';

export default defineComponent({
    name: 'vu-fn-badge',
    components: {
        VuElBadge,
        VuFnText
    },
    props: {
        /**
         * 유형
         *
         * @type {BadgeTypes}
         */
        type: {
            type: String as PropType<BadgeTypes>,
            default: BADGE_TYPES.filled,
            validator: (value: string): value is BadgeTypes => {
                return Object.values(BADGE_TYPES).includes(value as BadgeTypes);
            }
        },
        /**
         * 크기
         *
         * @type {BadgeSizes}
         */
        size: {
            type: String as PropType<BadgeSizes>,
            default: BADGE_SIZES.md,
            validator: (value: string): value is BadgeSizes => {
                return Object.values(BADGE_SIZES).includes(value as BadgeSizes);
            }
        },
        /**
         * 형태
         *
         * @type {BadgeShapes}
         */
        shape: {
            type: String as PropType<BadgeShapes>,
            validator: (value: string): value is BadgeShapes => {
                return Object.values(BADGE_SHAPES).includes(value as BadgeShapes);
            }
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
         * @type {TextTypes}
         */
        textType: {
            type: String as PropType<TextTypes>,
            validator: (value: string): value is TextTypes => {
                return Object.values(TEXT_TYPES).includes(value as TextTypes);
            }
        },
        /**
         * 텍스트 색상
         *
         * @type {String}
         */
        textColor: {
            type: String
        }
    }
});
</script>
