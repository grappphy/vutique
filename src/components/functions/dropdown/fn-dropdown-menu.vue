<template>
    <vu-el-dropdown-menu :placement="placement">
        <!-- 메뉴 아이템 -->
        <vu-el-dropdown-menu-item
            v-for="(item, index) in data"
            :is-active="index === selectedIndex"
            :key="`vu-dropdown-menu-item-${index}`"
        >
            <!-- 메뉴 버튼 -->
            <vu-el-dropdown-menu-button @on-click="menuButtonClickHandler(index)">
                <!-- 메뉴 아이콘 -->
                <template #icon="{ defaultClass }">
                    <vu-el-icon :class="defaultClass" :size="'20'" :icon="item.icon" />
                </template>

                <!-- 메뉴 텍스트 -->
                <template #text="{ defaultClass }">
                    <vu-fn-text :class="defaultClass" :size="'14'" :content="item.text" />
                </template>
            </vu-el-dropdown-menu-button>
        </vu-el-dropdown-menu-item>
    </vu-el-dropdown-menu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// Elements
import { VuElDropdownMenu, VuElDropdownMenuItem, VuElDropdownMenuButton, VuElIcon } from '../../elements';

// Functions
import { VuFnText } from '../text';

// Composables
import { useDropdown } from '../../../composables';

// Types
import type { Placements } from '../../../types';
import { PLACEMENTS } from '../../../types';

// Interfaces
import type { DropdownMenuItemOptions } from '../../../interfaces';

export default defineComponent({
    name: 'vu-fn-dropdown-menu',
    components: {
        VuElDropdownMenu,
        VuElDropdownMenuItem,
        VuElDropdownMenuButton,
        VuElIcon,
        VuFnText
    },
    props: {
        /**
         * 드롭다운 데이터
         *
         * @type {Array<DropdownMenuItemOptions>}
         * @default []
         */
        data: {
            type: Array as PropType<Array<DropdownMenuItemOptions>>,
            default: () => [] as Array<DropdownMenuItemOptions>
        },
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
         * 선택된 인덱스
         *
         * @type {Number}
         */
        selectedIndex: {
            type: Number
        }
    },
    setup(props) {
        // Composables
        const { menuButtonClickHandler } = useDropdown(props);

        return {
            // Handlers
            menuButtonClickHandler
        };
    }
});
</script>
