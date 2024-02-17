<template>
    <div :class="classes">
        <!-- 시작 -->
        <div class="vu-input-start">
            <!-- 슬롯: 시작 이전 -->
            <slot name="start-before" />

            <!-- 컨트롤 -->
            <input
                @keydown="controlKeydownHandler"
                @keypress="controlKeypressHandler"
                @input="controlChangeHandler"
                @focus="controlFocusHandler"
                @blur="controlBlurHandler"
                @focusin="controlFocusinHandler"
                @focusout="controlFocusoutHandler"
                ref="controlRef"
                class="vu-input-control"
                :type="controlType"
                :value="value"
                :placeholder="placeholder"
                :min="min"
                :max="max"
                :maxlength="maxlength"
                :autocomplete="autocomplete"
                :autofocus="autofocus"
                :readonly="isReadonly"
                :disabled="isDisabled"
            />

            <!-- 슬롯: 시작 이후 -->
            <slot name="start-after" />
        </div>

        <!-- 종료 -->
        <div v-if="useEnd" class="vu-input-end">
            <!-- 슬롯: 종료 이전 -->
            <slot v-if="useEndBefore" name="end-before" />

            <!-- 클리어 버튼 -->
            <button v-if="useClear" @click="clearButtonClickHandler" class="vu-input-clear-button">
                <vu-el-icon :icon="clearIcon" />
                <vu-el-a11y :text="'클리어'" />
            </button>

            <!-- 검색 버튼 -->
            <button v-if="useSearch" @click="searchButtonClickHandler" class="vu-input-search-button">
                <vu-el-icon :icon="searchIcon" />
                <vu-el-a11y :text="'검색'" />
            </button>

            <!-- 슬롯: 종료 이후 -->
            <slot v-if="useEndAfter" name="end-after" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, Ref } from 'vue';

// Elements
import VuElA11y from '../a11y/el-a11y.vue';
import VuElIcon from '../icon/el-icon.vue';

export default defineComponent({
    name: 'vu-el-input',
    components: {
        VuElA11y,
        VuElIcon
    },
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
         * 컨트롤 유형
         *
         * @type {String}
         */
        controlType: {
            type: String
        },
        /**
         * 유효성
         *
         * @type {String}
         */
        validation: {
            type: String
        },
        /**
         * 자동 완성
         *
         * @type {String}
         */
        autocomplete: {
            type: String
        },
        /**
         * 자동 포커스
         *
         * @type {Boolean}
         */
        autofocus: {
            type: Boolean
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
         * 플레이스홀더
         *
         * @type {String}
         */
        placeholder: {
            type: String
        },
        /**
         * 최소값
         *
         * @type {Number}
         */
        min: {
            type: Number
        },
        /**
         * 최대값
         *
         * @type {Number}
         */
        max: {
            type: Number
        },
        /**
         * 최대 길이
         *
         * @type {Number}
         */
        maxlength: {
            type: Number
        },
        /**
         * 클리어 아이콘
         *
         * @type {String}
         */
        clearIcon: {
            type: String
        },
        /**
         * 검색 아이콘
         *
         * @type {String}
         */
        searchIcon: {
            type: String
        },
        /**
         * 종료 영역 사용 여부
         *
         * @type {Boolean}
         */
        useEnd: {
            type: Boolean
        },
        /**
         * 종료 이전 영역 사용 여부
         *
         * @type {Boolean}
         */
        useEndBefore: {
            type: Boolean
        },
        /**
         * 종료 이후 영역 사용 여부
         *
         * @type {Boolean}
         */
        useEndAfter: {
            type: Boolean
        },
        /**
         * 클리어 사용 여부
         *
         * @type {Boolean}
         */
        useClear: {
            type: Boolean
        },
        /**
         * 검색 사용 여부
         *
         * @type {Boolean}
         */
        useSearch: {
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
        // 레퍼런스
        const controlRef: Ref<HTMLInputElement> = ref(null);

        // 클래스
        const classes = computed(() => {
            const defaultClass = 'vu-input';

            const typeClass = props.type ? `${defaultClass}<${props.type}>` : null;

            const sizeClass = props.size ? `${defaultClass}{${props.size}}` : null;

            const validationsClass = props.validation ? `${defaultClass}{${props.validation}}` : null;

            const readonlyClass = props.isReadonly ? `${defaultClass}:readonly` : null;

            const disabledClass = props.isDisabled ? `${defaultClass}:disabled` : null;

            return [defaultClass, typeClass, sizeClass, validationsClass, readonlyClass, disabledClass];
        });

        // 컨트롤 키다운
        function controlKeydownHandler(event: Event): void {
            emit('on-keydown', (event.target as HTMLInputElement).value, event);
        }

        // 컨트롤 키프레스
        function controlKeypressHandler(event: Event): void {
            emit('on-keypress', (event.target as HTMLInputElement).value, event);
        }

        // 컨트롤 변경
        function controlChangeHandler(event: Event): void {
            emit('on-change', (event.target as HTMLInputElement).value, event);
        }

        // 컨트롤 포커스
        function controlFocusHandler(event: Event): void {
            emit('on-focus', (event.target as HTMLInputElement).value, event);
        }

        // 컨트롤 블러
        function controlBlurHandler(event: Event): void {
            emit('on-blur', (event.target as HTMLInputElement).value, event);
        }

        // 컨트롤 포커스인
        function controlFocusinHandler(event: Event): void {
            emit('on-focusin', (event.target as HTMLInputElement).value, event);
        }

        // 컨트롤 포커스아웃
        function controlFocusoutHandler(event: Event): void {
            emit('on-focusout', (event.target as HTMLInputElement).value, event);
        }

        // 클리어 버튼 클릭
        function clearButtonClickHandler(event: Event): void {
            emit('on-clear-button-click', (event.target as HTMLInputElement).value, event, controlRef.value);
        }

        // 검색 버튼 클릭
        function searchButtonClickHandler(event: Event): void {
            emit('on-search-button-click', controlRef.value?.value, event);
        }

        return {
            controlRef,

            classes,

            controlKeydownHandler,
            controlKeypressHandler,
            controlChangeHandler,
            controlFocusHandler,
            controlBlurHandler,
            controlFocusinHandler,
            controlFocusoutHandler,
            clearButtonClickHandler,
            searchButtonClickHandler
        };
    }
});
</script>
