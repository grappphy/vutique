<template>
    <div :class="classes" :data-vu-placement="placement">
        <div class="vu-tooltip-content">
            <!-- 슬롯: 텍스트 -->
            <slot name="text" :default-class="'vu-tooltip-text'">
                <vu-el-text class="vu-tooltip-text" :tag="'span'" :content="text" />
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

// Elements
import { VuElText } from '../text';

export default defineComponent({
    name: 'vu-el-tooltip',
    components: {
        VuElText
    },
    props: {
        /**
         * 배치
         *
         * @type {String}
         */
        placement: {
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
         * 활성화 상태
         *
         * @type {Boolean}
         */
        isActive: {
            type: Boolean
        }
    },
    setup(props) {
        const classes = computed(() => {
            // 클래스
            const defaultClass = 'vu-tooltip';

            const activeClass = props.isActive ? 'vu-tooltip:active' : null;

            return [defaultClass, activeClass];
        });

        return {
            classes
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/tooltip';
</style>
