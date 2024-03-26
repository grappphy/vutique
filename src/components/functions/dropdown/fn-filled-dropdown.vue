<template>
    <vu-el-dropdown ref="rootRef" :type="'filled'" :size="size" :is-active="isActive" :is-disabled="isDisabled">
        <!-- 버튼 -->
        <template #button>
            <slot name="button" :on-button-click="buttonClickHandler">
                <vu-el-dropdown-button
                    @on-click="buttonClickHandler"
                    :text="buttonText"
                    :arrow="buttonArrow"
                    :is-disabled="isDisabled"
                >
                    <!-- 버튼 텍스트 -->
                    <template #text="{ defaultClass }">
                        <vu-fn-text :class="defaultClass" :content="buttonText" />
                    </template>
                </vu-el-dropdown-button>
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
import { defineComponent } from 'vue';

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

// Extends
import { useDropdown, dropdownProps } from '../../../composables';

export default defineComponent({
    name: 'vu-fn-filled-dropdown',
    props: dropdownProps,
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

        return {
            rootRef,
            buttonText,
            buttonArrow,
            isActive,
            buttonClickHandler,
            menuButtonClickHandler
        };
    }
});
</script>
