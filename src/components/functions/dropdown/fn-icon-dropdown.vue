<template>
    <vu-el-dropdown ref="rootRef" :type="'icon'" :size="size" :is-active="isActive" :is-disabled="isDisabled">
        <!-- 버튼 -->
        <template #button>
            <slot name="button" :on-button-click="buttonClickHandler">
                <vu-el-dropdown-button @on-click="buttonClickHandler" :icon="buttonIcon" :is-disabled="isDisabled" />
            </slot>
        </template>

        <!-- 메뉴 -->
        <template #menu>
            <vu-el-dropdown-menu v-show="isActive" :placement="placement">
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
    </vu-el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

// Elements
import {
    VuElIcon,
    VuElDropdown,
    VuElDropdownButton,
    VuElDropdownMenu,
    VuElDropdownMenuItem,
    VuElDropdownMenuButton
} from '../../elements';

// Functions
import { VuFnText } from '../text';

// Constants
import { ICON_DROPDOWN } from '../../../constants';

// Extends
import { useDropdown, dropdownProps } from '../../../composables';

export default defineComponent({
    name: 'vu-fn-filled-dropdown',
    props: {
        ...dropdownProps,
        /**
         * 활성화 버튼 아이콘
         *
         * @type {String}
         * @default 'ic-squarestyle-option-vertical-line'
         */
        activeButtonIcon: {
            type: String,
            default: ICON_DROPDOWN.ACTIVE_BUTTON_ICON
        },
        /**
         * 비활성화 버튼 아이콘
         *
         * @type {String}
         * @default 'ic-squarestyle-option-vertical-line'
         */
        inactiveButtonIcon: {
            type: String,
            default: ICON_DROPDOWN.INACTIVE_BUTTON_ICON
        }
    },
    components: {
        VuElIcon,
        VuElDropdown,
        VuElDropdownButton,
        VuElDropdownMenu,
        VuElDropdownMenuItem,
        VuElDropdownMenuButton,
        VuFnText
    },
    setup(props) {
        const { rootRef, buttonText, buttonArrow, isActive, buttonClickHandler, menuButtonClickHandler } =
            useDropdown(props);

        // 버튼 아이콘
        const buttonIcon = computed(() => {
            return isActive ? props.activeButtonIcon : props.inactiveButtonIcon;
        });

        return {
            rootRef,
            buttonText,
            buttonArrow,
            buttonIcon,
            isActive,
            buttonClickHandler,
            menuButtonClickHandler
        };
    }
});
</script>
