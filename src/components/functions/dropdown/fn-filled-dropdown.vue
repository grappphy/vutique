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
import { defineComponent } from 'vue';

// Elements
import { VuElDropdown, VuElDropdownButton } from '../../elements';

// Functions
import { VuFnDropdownMenu } from '../dropdown';
import { VuFnText } from '../text';

// Composables
import { useDropdown, dropdownProps } from '../../../composables';

export default defineComponent({
    name: 'vu-fn-filled-dropdown',
    components: {
        VuElDropdown,
        VuElDropdownButton,

        VuFnDropdownMenu,
        VuFnText
    },
    props: dropdownProps,
    setup(props) {
        // Composables
        const { rootRef, buttonText, buttonArrow, isActive, buttonClickHandler } = useDropdown(props);

        return {
            // Refs
            rootRef,

            // Values
            buttonText,
            buttonArrow,

            // States
            isActive,

            // Handlers
            buttonClickHandler
        };
    }
});
</script>
