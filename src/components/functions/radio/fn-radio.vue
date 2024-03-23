<template>
    <vu-el-radio
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
        <template #label="{ defaultClass }">
            <!-- 레이블 슬롯 -->
            <slot name="label" :default-class="defaultClass" />
        </template>

        <template #label-content>
            <!-- 레이블 콘텐츠 슬롯 -->
            <slot name="label-content" />
        </template>
    </vu-el-radio>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// Elements
import { VuElRadio } from '../../elements';

// Types
import type { RadioSizes, RadioAligns, RadioControlTypes } from '../../../types';
import { RADIO_SIZES, RADIO_ALIGNS, RADIO_CONTROL_TYPES } from '../../../types';

export default defineComponent({
    components: {
        VuElRadio
    },
    props: {
        /**
         * 크기
         *
         * @type {String}
         * @default 'md'
         */
        size: {
            type: String as PropType<RadioSizes>,
            default: RADIO_SIZES.md,
            validator: (value: string): value is RadioSizes => {
                return Object.values(RADIO_SIZES).includes(value as RadioSizes);
            }
        },
        /**
         * 정렬
         *
         * @type {String}
         * @default 'middle'
         */
        align: {
            type: String as PropType<RadioAligns>,
            default: RADIO_ALIGNS.middle,
            validator: (value: string): value is RadioAligns => {
                return Object.values(RADIO_ALIGNS).includes(value as RadioAligns);
            }
        },
        /**
         * 컨트롤 유형
         *
         * @type {String}
         * @default 'radio'
         */
        controlType: {
            type: String as PropType<RadioControlTypes>,
            default: RADIO_CONTROL_TYPES.radio,
            validator: (value: string): value is RadioControlTypes => {
                return Object.values(RADIO_CONTROL_TYPES).includes(value as RadioControlTypes);
            }
        },
        /**
         * 레이블
         *
         * @type {String}
         */
        label: {
            type: String
        },
        /**
         * 이름
         *
         * @type {String}
         */
        name: {
            type: String
        },
        /**
         * 아이디
         *
         * @type {String}
         */
        id: {
            type: String
        },
        /**
         * 값
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
