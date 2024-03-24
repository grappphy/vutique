<template>
    <vu-el-dialog
        @on-dialog-click="dialogClickHandler"
        :type="type"
        :size="size"
        :use-header="useHeader"
        :use-body-start="useBodyStart"
        :use-footer="useFooter"
        :use-paddingless="usePaddingless"
        :use-footerless="useFooterless"
    >
        <template #content-before>
            <!-- 슬롯: 콘텐츠 이전 -->
            <slot name="content-before" />
        </template>

        <template #header-content>
            <!-- 슬롯: 헤더 콘텐츠 -->
            <slot name="header-content" />
        </template>

        <template #header-start-content="{ titleClass, buttonClass, buttonIconClass }">
            <!-- 슬롯: 헤더 시작 콘텐츠 -->
            <slot
                name="header-start-content"
                :title-class="titleClass"
                :button-class="buttonClass"
                :button-icon-class="buttonIconClass"
            >
                <!-- 헤더 제목 -->
                <vu-fn-text
                    v-if="headerTitle"
                    :class="titleClass"
                    :tag="'strong'"
                    :size="'16'"
                    :content="headerTitle"
                />
            </slot>
        </template>

        <template #header-end-content="{ buttonClass, iconClass }">
            <!-- 슬롯: 헤더 종료 콘텐츠 -->
            <slot name="header-end-content" :button-class="buttonClass" :icon-class="iconClass">
                <!-- 닫기 버튼 -->
                <button v-if="useClose" @click="closeButtonClickHandler" :class="buttonClass">
                    <vu-el-icon :class="iconClass" :size="'24'" :icon="closeIcon" />
                    <vu-el-a11y :text="closeButtonText" />
                </button>
            </slot>
        </template>

        <template #body-content>
            <!-- 슬롯: 바디 콘텐츠 -->
            <slot name="body-content" />
        </template>

        <template #body-start-content>
            <!-- 슬롯: 바디 시작 콘텐츠 -->
            <slot name="body-start-content" />
        </template>

        <!-- 슬롯: 바디 종료 콘텐츠 -->
        <template #body-end-content="{ titleClass, textClass }">
            <slot name="body-end-content" :title-class="titleClass" :text-class="textClass">
                <!-- 바디 제목 -->
                <vu-fn-text v-if="bodyTitle" :class="titleClass" :tag="'h2'" :size="'18'" :content="bodyTitle" />

                <!-- 바디 텍스트 -->
                <vu-fn-text v-if="bodyText" :class="textClass" :tag="'p'" :size="'15'" :content="bodyText" />
            </slot>
        </template>

        <template #footer-content>
            <!-- 슬롯: 푸터 콘텐츠 -->
            <slot name="footer-content" />
        </template>

        <!-- 슬롯: 푸터 버튼 콘텐츠 -->
        <template #footer-buttons-content="{ itemClass, buttonClass }">
            <slot name="footer-buttons-content" :item-class="itemClass">
                <!-- 취소 버튼 -->
                <div v-if="useCancel" :class="itemClass">
                    <vu-fn-button
                        @on-click="cancelButtonClickHandler"
                        :class="buttonClass"
                        :color="'outline'"
                        :text="cancelButtonText"
                    />
                </div>

                <!-- 확인 버튼 -->
                <div v-if="useConfirm" :class="itemClass">
                    <vu-fn-button
                        @on-click="confirmButtonClickHandler"
                        :class="buttonClass"
                        :text="confirmButtonText"
                        :is-disabled="isDisabledConfirm"
                    />
                </div>
            </slot>
        </template>

        <template #content-after>
            <!-- 슬롯: 콘텐츠 이후 -->
            <slot name="content-after" />
        </template>
    </vu-el-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

// Elements
import { VuElA11y, VuElIcon, VuElDialog } from '../../elements';

// Functions
import { VuFnText } from '../text';
import { VuFnButton } from '../button';

// Constants
import { DIALOG } from '../../../constants';

// Types
import type { DialogTypes, DialogSizes } from '../../../types';
import { DIALOG_TYPES, DIALOG_SIZES } from '../../../types';

export default defineComponent({
    components: {
        VuElA11y,
        VuElIcon,
        VuElDialog,

        VuFnText,
        VuFnButton
    },
    props: {
        /**
         * 다이얼로그 유형
         *
         * @type {String}
         */
        type: {
            type: String as PropType<DialogTypes>,
            validator: (value: string): value is DialogTypes => {
                return Object.values(DIALOG_TYPES).includes(value as DialogTypes);
            }
        },
        /**
         * 다이얼로그 유형
         *
         * @type {String}
         * @default 'sm'
         */
        size: {
            type: String as PropType<DialogSizes>,
            default: DIALOG_SIZES.sm,
            validator: (value: string): value is DialogSizes => {
                return Object.values(DIALOG_SIZES).includes(value as DialogSizes);
            }
        },
        /**
         * 헤더 제목
         *
         * @type {String}
         */
        headerTitle: {
            type: String
        },
        /**
         * 바디 제목
         *
         * @type {String}
         */
        bodyTitle: {
            type: String
        },
        /**
         * 바디 텍스트
         *
         * @type {String}
         */
        bodyText: {
            type: String
        },
        /**
         * 닫기 텍스트
         *
         * @type {String}
         */
        closeText: {
            type: String,
            default: DIALOG.CLOSE_TEXT
        },
        /**
         * 닫기 아이콘
         *
         * @type {String}
         */
        closeIcon: {
            type: String,
            default: DIALOG.CLOSE_ICON
        },
        /**
         * 취소 텍스트
         *
         * @type {String}
         */
        cancelText: {
            type: String,
            default: DIALOG.CANCEL_TEXT
        },
        /**
         * 확인 텍스트
         *
         * @type {String}
         */
        confirmText: {
            type: String,
            default: DIALOG.CONFIRM_TEXT
        },
        /**
         * 헤더 사용 여부
         *
         * @type {Boolean}
         */
        useHeader: {
            type: Boolean,
            default: true
        },
        /**
         * 바디 시작 사용 여부
         *
         * @type {Boolean}
         */
        useBodyStart: {
            type: Boolean
        },
        /**
         * 푸터 사용 여부
         *
         * @type {Boolean}
         */
        useFooter: {
            type: Boolean,
            default: true
        },
        /**
         * 닫기 사용 여부
         *
         * @type {Boolean}
         */
        useClose: {
            type: Boolean,
            default: true
        },
        /**
         * 취소 사용 여부
         *
         * @type {Boolean}
         */
        useCancel: {
            type: Boolean,
            default: true
        },
        /**
         * 확인 사용 여부
         *
         * @type {Boolean}
         */
        useConfirm: {
            type: Boolean,
            default: true
        },
        /**
         * 패딩 없음 사용 여부
         *
         * @type {Boolean}
         */
        usePaddingless: {
            type: Boolean
        },
        /**
         * 푸터 없음 사용 여부
         *
         * @type {Boolean}
         */
        useFooterless: {
            type: Boolean
        },
        /**
         * 확인 버튼 비활성화 상태
         *
         * @type {Boolean}
         */
        isDisabledConfirm: {
            type: Boolean
        }
    },
    setup(props, { emit }) {
        // 닫기 버튼 텍스트
        const closeButtonText = computed(() => {
            return props.closeText;
        });

        // 취소 버튼 텍스트
        const cancelButtonText = computed(() => {
            return props.cancelText;
        });

        // 확인 버튼 텍스트
        const confirmButtonText = computed(() => {
            return props.confirmText;
        });

        // 다이얼로그 클릭
        function dialogClickHandler(event: Event): void {
            emit('on-dialog-click', event);
        }

        // 취소 버튼 클릭
        function cancelButtonClickHandler(): void {
            emit('on-cancel-button-click');
        }

        // 확인 버튼 클릭
        function confirmButtonClickHandler(): void {
            emit('on-confirm-button-click');
        }

        // 닫기 버튼 클릭
        function closeButtonClickHandler(): void {
            emit('on-close-button-click');
        }

        return {
            // Button text
            closeButtonText,
            cancelButtonText,
            confirmButtonText,

            // Handlers
            dialogClickHandler,
            cancelButtonClickHandler,
            confirmButtonClickHandler,
            closeButtonClickHandler
        };
    }
});
</script>
