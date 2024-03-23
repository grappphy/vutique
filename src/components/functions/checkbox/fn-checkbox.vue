<template>
    <vu-el-checkbox
        @on-click="controlClickHandler"
        @on-change="controlChangeHandler"
        :size="size"
        :align="align"
        :control-type="controlType"
        :label="label"
        :name="name"
        :id="id"
        :value="value"
        :use-label="useLabel"
        :is-checked="isChecked"
        :is-readonly="isReadonly"
        :is-disabled="isDisabled"
    >
        <!-- 레이블 슬롯 -->
        <template #label="{ defaultClass }">
            <slot name="label" :default-class="defaultClass" />
        </template>

        <!-- 레이블 콘텐츠 슬롯 -->
        <template #label-content>
            <slot name="label-content" />
        </template>
    </vu-el-checkbox>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// Elements
import { VuElCheckbox } from '../../elements';

// Types
import type { CheckboxSizes, CheckboxAligns, CheckboxControlTypes } from '../../../types';
import { CHECKBOX_SIZES, CHECKBOX_ALIGNS, CHECKBOX_CONTROL_TYPES } from '../../../types';

export default defineComponent({
    components: {
        VuElCheckbox
    },
    props: {
        /**
         * 체크박스 크기
         *
         * @type {String}
         * @default 'md'
         */
        size: {
            type: String as PropType<CheckboxSizes>,
            default: CHECKBOX_SIZES.md,
            validator: (value: string): value is CheckboxSizes => {
                return Object.values(CHECKBOX_SIZES).includes(value as CheckboxSizes);
            }
        },
        /**
         * 체크박스 정렬
         *
         * @type {String}
         * @default 'middle'
         */
        align: {
            type: String as PropType<CheckboxAligns>,
            default: CHECKBOX_ALIGNS.middle,
            validator: (value: string): value is CheckboxAligns => {
                return Object.values(CHECKBOX_ALIGNS).includes(value as CheckboxAligns);
            }
        },
        /**
         * 체크박스 컨트롤 유형
         *
         * @type {String}
         * @default 'checkbox'
         */
        controlType: {
            type: String as PropType<CheckboxControlTypes>,
            default: CHECKBOX_CONTROL_TYPES.checkbox,
            validator: (value: string): value is CheckboxControlTypes => {
                return Object.values(CHECKBOX_CONTROL_TYPES).includes(value as CheckboxControlTypes);
            }
        },
        /**
         * 체크박스 레이블
         *
         * @type {String}
         */
        label: {
            type: String
        },
        /**
         * 체크박스 이름
         *
         * @type {String}
         */
        name: {
            type: String
        },
        /**
         * 체크박스 아이디
         *
         * @type {String}
         */
        id: {
            type: String
        },
        /**
         * 체크박스 값
         *
         * @type {String}
         */
        value: {
            type: String
        },
        /**
         * 레이블 사용 여부
         *
         * @type {Boolean}
         */
        useLabel: {
            type: Boolean,
            default: true
        },
        /**
         * 체크 상태
         *
         * @type {Boolean}
         */
        isChecked: {
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
        // 컨트롤 클릭
        function controlClickHandler(isChecked: boolean, event: Event): void {
            if (props.isReadonly) {
                event.preventDefault();
            }

            emit('on-click', isChecked, event);
        }

        // 컨트롤 변경
        function controlChangeHandler(isChecked: boolean, event: Event): void {
            if (props.isReadonly) {
                event.preventDefault();
            }

            emit('on-change', isChecked, event);
        }

        return {
            // Handlers
            controlClickHandler,
            controlChangeHandler
        };
    }
});
</script>
