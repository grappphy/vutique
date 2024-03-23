<template>
    <vu-el-switch
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
        :use-reverse="useReverse"
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
    </vu-el-switch>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// Elements
import { VuElSwitch } from '../../elements';

// Types
import type { SwitchSizes, SwitchAligns, SwitchControlTypes } from '../../../types';
import { SWITCH_SIZES, SWITCH_ALIGNS, SWITCH_CONTROL_TYPES } from '../../../types';

export default defineComponent({
    components: {
        VuElSwitch
    },
    props: {
        /**
         * 스위치 크기
         *
         * @type {String}
         * @default 'md'
         */
        size: {
            type: String as PropType<SwitchSizes>,
            default: SWITCH_SIZES.md,
            validator: (value: string): value is SwitchSizes => {
                return Object.values(SWITCH_SIZES).includes(value as SwitchSizes);
            }
        },
        /**
         * 스위치 정렬
         *
         * @type {String}
         * @default 'middle'
         */
        align: {
            type: String as PropType<SwitchAligns>,
            default: SWITCH_ALIGNS.middle,
            validator: (value: string): value is SwitchAligns => {
                return Object.values(SWITCH_ALIGNS).includes(value as SwitchAligns);
            }
        },
        /**
         * 스위치 컨트롤 유형
         *
         * @type {String}
         * @default 'checkbox'
         */
        controlType: {
            type: String as PropType<SwitchControlTypes>,
            default: SWITCH_CONTROL_TYPES.checkbox,
            validator: (value: string): value is SwitchControlTypes => {
                return Object.values(SWITCH_CONTROL_TYPES).includes(value as SwitchControlTypes);
            }
        },
        /**
         * 스위치 레이블
         *
         * @type {String}
         */
        label: {
            type: String
        },
        /**
         * 스위치 이름
         *
         * @type {String}
         */
        name: {
            type: String
        },
        /**
         * 스위치 아이디
         *
         * @type {String}
         */
        id: {
            type: String
        },
        /**
         * 스위치 값
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
         * 반전 사용 여부
         *
         * @type {Boolean}
         */
        useReverse: {
            type: Boolean
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
