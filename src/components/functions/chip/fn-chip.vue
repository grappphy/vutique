<template>
    <vu-el-chip
        @vu-on-click="clickHandler"
        @vu-on-delete-button-click="deleteButtonClickHandler"
        :tag="tag"
        :type="type"
        :size="size"
        :icon="icon"
        :text="text"
        :delete-icon="deleteIcon"
        :href="href"
        :to="to"
        :link-target="linkTarget"
        :use-button="useButton"
        :use-delete="useDelete"
        :is-readonly="isReadonly"
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

        <template #delete="{ defaultClass }">
            <!-- 슬롯: 삭제 버튼 -->
            <slot name="delete" :default-class="defaultClass" />
        </template>
    </vu-el-chip>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

// Elements
import { VuElChip } from '../../elements';

// Functions
import { VuFnText } from '../text';

// Constants
import { CHIP } from '../../../constants';

// Types
import type { ChipTags, ChipTypes, ChipSizes, LinkTargets } from '../../../types';
import { CHIP_TAGS, CHIP_TYPES, CHIP_SIZES, LINK_TARGETS } from '../../../types';

export default defineComponent({
    name: 'vu-fn-chip',
    components: {
        VuElChip,
        VuFnText
    },
    props: {
        /**
         * 태그
         *
         * @type {ChipTags}
         * @default 'button'
         */
        tag: {
            type: String as PropType<ChipTags>,
            default: CHIP_TAGS.button,
            validator: (value: string): value is ChipTags => {
                return Object.values(CHIP_TAGS).includes(value as ChipTags);
            }
        },
        /**
         * 유형
         *
         * @type {ButtonTypes}
         * @default 'filled'
         */
        type: {
            type: String as PropType<ChipTypes>,
            default: CHIP_TYPES.filled,
            validator: (value: string): value is ChipTypes => {
                return Object.values(CHIP_TYPES).includes(value as ChipTypes);
            }
        },
        /**
         * 크기
         *
         * @type {ChipSizes}
         * @default 'md'
         */
        size: {
            type: String as PropType<ChipSizes>,
            default: CHIP_SIZES.md,
            validator: (value: string): value is ChipSizes => {
                return Object.values(CHIP_SIZES).includes(value as ChipSizes);
            }
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
         * 아이콘
         *
         * @type {String}
         */
        icon: {
            type: String
        },
        /**
         * 삭제 아이콘
         *
         * @type {String}
         * @default 'fa-solid fa-circle-xmark'
         */
        deleteIcon: {
            type: String,
            default: CHIP.DELETE_ICON
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
         * @type {LinkTargets}
         */
        linkTarget: {
            type: String as PropType<LinkTargets>,
            validator: (value: string): value is LinkTargets => {
                return Object.values(LINK_TARGETS).includes(value as LinkTargets);
            }
        },
        /**
         * 버튼 사용 여부
         *
         * @type {Boolean}
         * @default true
         */
        useButton: {
            type: Boolean,
            default: true
        },
        /**
         * 삭제 사용 여부
         *
         * @type {Boolean}
         */
        useDelete: {
            type: Boolean
        },
        /**
         * 읽기 전용 상태
         *
         * @type {Boolean}
         */
        isReadonly: {
            type: Boolean
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
        // 링크 URL
        const href = computed(() => {
            return props.tag === CHIP_TAGS.a ? props.link : undefined;
        });

        // 라우터 링크 URL
        const to = computed(() => {
            return props.tag === CHIP_TAGS.routerLink ? props.link : undefined;
        });

        // 클릭
        function clickHandler(event: Event): void {
            if (props.isReadonly || props.isDisabled) {
                event.preventDefault();
            }

            emit('on-click', event);
        }

        // 삭제 버튼 클릭
        function deleteButtonClickHandler(event: Event): void {
            if (props.isReadonly || props.isDisabled) {
                event.preventDefault();
            }

            emit('on-delete', event);
        }

        return {
            // Link
            href,
            to,

            // Handlers
            clickHandler,
            deleteButtonClickHandler
        };
    }
});
</script>
./const
