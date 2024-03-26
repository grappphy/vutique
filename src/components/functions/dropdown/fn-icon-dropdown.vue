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
            <vu-fn-dropdown-menu
                v-show="isActive"
                :data="data"
                :selected-index="selectedIndex"
                :placement="placement"
            />
        </template>
    </vu-el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

// Elements
import { VuElDropdown, VuElDropdownButton } from '../../elements';

// Functions
import VuFnDropdownMenu from './fn-dropdown-menu.vue';

// Constants
import { ICON_DROPDOWN } from '../../../constants';

// Composables
import { useDropdown, dropdownProps } from '../../../composables';

export default defineComponent({
    name: 'vu-fn-icon-dropdown',
    components: {
        VuElDropdown,
        VuElDropdownButton,
        VuFnDropdownMenu
    },
    props: {
        ...dropdownProps,
        /**
         * 활성화 버튼 아이콘
         *
         * @type {String}
         * @default 'ic-v2-navigation-option-vertical-fill'
         */
        activeButtonIcon: {
            type: String,
            default: ICON_DROPDOWN.ACTIVE_BUTTON_ICON
        },
        /**
         * 비활성화 버튼 아이콘
         *
         * @type {String}
         * @default 'ic-v2-navigation-option-vertical-fill'
         */
        inactiveButtonIcon: {
            type: String,
            default: ICON_DROPDOWN.INACTIVE_BUTTON_ICON
        }
    },
    setup(props) {
        // Composables
        const { rootRef, buttonText, buttonArrow, isActive, buttonClickHandler, menuButtonClickHandler } =
            useDropdown(props);

        // 버튼 아이콘
        const buttonIcon = computed(() => {
            return isActive ? props.activeButtonIcon : props.inactiveButtonIcon;
        });

        return {
            // Refs
            rootRef,

            // Values
            buttonText,
            buttonArrow,
            buttonIcon,

            // States
            isActive,

            // Handlers
            buttonClickHandler,
            menuButtonClickHandler
        };
    }
});
</script>
