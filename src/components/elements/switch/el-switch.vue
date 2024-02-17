<template>
    <div :class="classes">
        <input
            @click="controlClickHandler"
            @change="controlChangeHandler"
            class="vu-switch-control"
            :type="controlType"
            :name="name"
            :id="id"
            :value="value"
            :disabled="isDisabled"
            :checked="isChecked"
        />
        <slot name="label" :default-class="'vu-switch-label'">
            <label v-if="useLabel" class="vu-switch-label" :for="id">
                <slot name="label-content">
                    {{ label }}
                </slot>
            </label>
        </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'vu-el-switch',
    props: {
        /**
         * 크기
         *
         * @type {String}
         */
        size: {
            type: String
        },
        /**
         * 정렬
         *
         * @type {String}
         */
        align: {
            type: String
        },
        /**
         * 컨트롤 유형
         *
         * @type {String}
         */
        controlType: {
            type: String
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
            type: Boolean
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
        const classes = computed(() => {
            const defaultClass = 'vu-switch';

            const sizeClass = props.size ? `${defaultClass}{${props.size}}` : null;

            const alignClass = props.align ? `${defaultClass}{align-${props.align}}` : null;

            const reverseClass = props.useReverse ? `${defaultClass}{reverse}` : '';

            const readonlyClass = props.isReadonly ? `${defaultClass}:readonly` : null;

            const disabledClass = props.isDisabled ? `${defaultClass}:disabled` : null;

            return [defaultClass, sizeClass, alignClass, reverseClass, readonlyClass, disabledClass];
        });

        // 컨트롤 클릭
        function controlClickHandler(event: Event): void {
            emit('on-click', (event.target as HTMLFormElement).checked, event);
        }

        // 컨트롤 변경
        function controlChangeHandler(event: Event): void {
            emit('on-change', (event.target as HTMLFormElement).checked, event);
        }

        return {
            classes,

            controlClickHandler,
            controlChangeHandler
        };
    }
});
</script>
