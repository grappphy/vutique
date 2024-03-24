<template>
    <vu-el-date @on-mouseenter="mouseenterHandler" @on-mouseleave="mouseleaveHandler">
        <template #text="{ defaultClass }">
            <!-- 텍스트 -->
            <vu-fn-text :class="defaultClass" :content="text" />
        </template>

        <template #tooltip="{ defaultClass }">
            <!-- 툴팁 -->
            <vu-fn-tooltip
                v-if="useTooltip"
                :class="defaultClass"
                :placement="tooltipPlacement"
                :text="tooltipText"
                :is-active="isActiveTooltip"
            />
        </template>
    </vu-el-date>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

// Elements
import { VuElDate } from '../../elements';

// Functions
import { VuFnText } from '../text';
import { VuFnTooltip } from '../tooltip';

// Type
import type { Placements } from '../../../types';
import { PLACEMENTS } from '../../../types';

export default defineComponent({
    name: 'vu-fn-date',
    components: {
        VuElDate,
        VuFnText,
        VuFnTooltip
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
         * 툴팁 텍스트
         *
         * @type {String}
         */
        tooltipText: {
            type: String
        },
        /**
         * 툴팁 배치
         *
         * @type {Placements},
         * @default 'bottom'
         */
        tooltipPlacement: {
            type: String as PropType<Placements>,
            default: PLACEMENTS.bottom
        },
        /**
         * 툴팁 지속 시간
         *
         * @type {Number}
         * @default 1000
         */
        tooltipDuration: {
            type: Number,
            default: 1000
        },
        /**
         * 툴팁 사용 여부
         *
         * @type {Boolean}
         */
        useTooltip: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        // 툴팁 타이머
        const tooltipTimer = ref(setTimeout(() => '', props.tooltipDuration));

        // 툴팁 활성화 상태
        const isActiveTooltip = ref(false);

        // 마우스엔터
        function mouseenterHandler(): void {
            clearInterval(tooltipTimer.value);
            isActiveTooltip.value = true;
        }

        // 마우스리브
        function mouseleaveHandler(): void {
            tooltipTimer.value = setTimeout(() => {
                isActiveTooltip.value = false;
            }, props.tooltipDuration);
        }

        return {
            // States
            isActiveTooltip,

            // Handlers
            mouseenterHandler,
            mouseleaveHandler
        };
    }
});
</script>
