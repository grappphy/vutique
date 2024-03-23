<template>
    <vu-el-button
        @on-click="clickHandler"
        @on-mouseenter="mouseenterHandler"
        @on-mouseleave="mouseleaveHandler"
        @on-mousedown="mousedownHandler"
        @on-mouseup="mouseupHandler"
        :tag="tag"
        :type="type"
        :size="size"
        :color="color"
        :shape="shape"
        :icon="icon"
        :arrow="arrow"
        :href="href"
        :to="to"
        :link-target="linkTarget"
        :is-disabled="isDisabled"
    >
        <template #icon="{ defaultClass }">
            <!-- 슬롯: 아이콘 -->
            <slot name="icon" :default-class="defaultClass" />
        </template>

        <template #text="{ defaultClass }">
            <!-- 슬롯: 텍스트 -->
            <slot name="text" :default-class="defaultClass">
                <vu-fn-text v-if="text" :content="text" :class="defaultClass" />
            </slot>
        </template>

        <template #arrow="{ defaultClass }">
            <!-- 슬롯: 화살표 -->
            <slot name="arrow" :default-class="defaultClass" />
        </template>
    </vu-el-button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

// Elements
import { VuElButton } from '../../elements';

// Functions
import { VuFnText } from '../text';

// Types
import type { ButtonTags, ButtonTypes, ButtonSizes, ButtonColors, ButtonShapes, LinkTargets } from '../../../types';
import { BUTTON_TAGS, BUTTON_TYPES, BUTTON_SIZES, BUTTON_COLORS, BUTTON_SHAPES, LINK_TARGETS } from '../../../types';

export default defineComponent({
    name: 'vu-fn-button',
    components: {
        VuElButton,
        VuFnText
    },
    props: {
        /**
         * 태그
         *
         * @type {ButtonTags}
         * @default 'button'
         */
        tag: {
            type: String as PropType<ButtonTags>,
            default: BUTTON_TAGS.button,
            validator: (value: string): value is ButtonTags => {
                return Object.values(BUTTON_TAGS).includes(value as ButtonTags);
            }
        },
        /**
         * 유형
         *
         * @type {ButtonTypes}
         */
        type: {
            type: String as PropType<ButtonTypes>,
            validator: (value: string): value is ButtonTypes => {
                return Object.values(BUTTON_TYPES).includes(value as ButtonTypes);
            }
        },
        /**
         * 크기
         *
         * @type {ButtonSizes}
         */
        size: {
            type: String as PropType<ButtonSizes>,
            default: BUTTON_SIZES.md,
            validator: (value: string): value is ButtonSizes => {
                return Object.values(BUTTON_SIZES).includes(value as ButtonSizes);
            }
        },
        /**
         * 색상
         *
         * @type {ButtonColors}
         */
        color: {
            type: String as PropType<ButtonColors>,
            default: BUTTON_COLORS.primary,
            validator: (value: string): value is ButtonColors => {
                return Object.values(BUTTON_COLORS).includes(value as ButtonColors);
            }
        },
        /**
         * 형태
         *
         * @type {ButtonShapes}
         */
        shape: {
            type: String as PropType<ButtonShapes>,
            validator: (value: string): value is ButtonShapes => {
                return Object.values(BUTTON_SHAPES).includes(value as ButtonShapes);
            }
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
         * 화살표
         *
         * @type {String}
         */
        arrow: {
            type: String
        },
        /**
         * 링크
         *
         * @type {String}
         */
        link: {
            type: String
        },
        /**
         * 링크 타겟
         *
         * @type {LinkTarget}
         */
        linkTarget: {
            type: String as PropType<LinkTargets>,
            validator: (value: string): value is LinkTargets => {
                return Object.values(LINK_TARGETS).includes(value as LinkTargets);
            }
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
    setup(props, { emit }) {
        // 링크 URL
        const href = computed(() => {
            return props.tag === BUTTON_TAGS.a ? props.link : undefined;
        });

        // 라우터 링크 URL
        const to = computed(() => {
            return props.tag === BUTTON_TAGS.routerLink ? props.link : undefined;
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
            // Link
            href,
            to,

            // Handlers
            clickHandler,
            mouseenterHandler,
            mouseleaveHandler,
            mousedownHandler,
            mouseupHandler
        };
    }
});
</script>
