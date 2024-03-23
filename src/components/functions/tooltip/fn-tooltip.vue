<template>
    <vu-el-tooltip :placement="placement" :text="text" :is-active="isActive">
        <template #text="{ defaultClass }">
            <!-- 텍스트 -->
            <vu-fn-text :class="defaultClass" :content="text" />
        </template>
    </vu-el-tooltip>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// Elements
import { VuElTooltip } from '../../elements';

// Functions
import { VuFnText } from '../../functions/text';

// Types
import type { Placements } from '../../../types';
import { PLACEMENTS } from '../../../types';

export default defineComponent({
    components: {
        VuElTooltip,
        VuFnText
    },
    props: {
        /**
         * 배치
         *
         * @type {String}
         * @default 'bottom-start'
         */
        placement: {
            type: String as PropType<Placements>,
            default: PLACEMENTS.bottomStart,
            validator: (value: string): value is Placements => {
                return Object.values(PLACEMENTS).includes(value as Placements);
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
         * 활성화 상태
         *
         * @type {Boolean}
         */
        isActive: {
            type: Boolean
        }
    }
});
</script>
