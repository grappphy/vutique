<template>
    <button @click="clickHandler" class="vu-dropdown-button" :disabled="isDisabled">
        <!-- 슬롯: 텍스트 -->
        <slot name="text" :default-class="'vu-dropdown-button-text'">
            <!-- 텍스트 -->
            <vu-el-text v-if="text" class="vu-dropdown-button-text" :tag="'span'" :content="text" />
        </slot>

        <!-- 슬롯: 아이콘 -->
        <slot name="icon" :default-class="'vu-dropdown-button-icon'">
            <!-- 아이콘 -->
            <vu-el-icon v-if="icon" class="vu-dropdown-button-icon" :icon="icon" />
        </slot>

        <!-- 슬롯: 화살표 -->
        <slot name="arrow" :default-class="'vu-dropdown-button-arrow'">
            <!-- 화살표 -->
            <vu-el-icon v-if="arrow" class="vu-dropdown-button-arrow" :icon="arrow" />
        </slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import VuElIcon from '../icon/el-icon.vue';
import VuElText from '../text/el-text.vue';

export default defineComponent({
    name: 'vu-el-dropdown-button',
    components: {
        VuElIcon,
        VuElText
    },
    props: {
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
         * 화살표
         *
         * @type {String}
         */
        arrow: {
            type: String
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
        // 버튼 클릭
        function clickHandler(): void {
            emit('on-click');
        }

        return {
            clickHandler
        };
    }
});
</script>
