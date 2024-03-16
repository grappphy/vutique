<template>
    <vu-el-container>
        <vu-el-buttons>
            <template #item="{ defaultClass }">
                <div :class="defaultClass">
                    <vu-el-button :tag="'button'" :color="'primary'" :size="'sm'" :text="'버튼'" />
                </div>
                <div :class="defaultClass">
                    <vu-el-button :tag="'button'" :color="'primary'" :size="'sm'" :text="'버튼'" />
                </div>
            </template>
        </vu-el-buttons>
        <vu-el-badge :type="'filled'" :size="'sm'" :color="'primary'" :text="'뱃지'" :text-color="'white'" />
        <vu-el-checkbox :size="'sm'" :control-type="'checkbox'" :label="'체크박스'" :use-label="true" />
        <vu-el-radio :size="'sm'" :control-type="'radio'" :label="'라디오'" :use-label="true" />
        <vu-el-chip :type="'filled'" :tag="'button'" :size="'sm'" :text="'칩'" :use-button="true" />
        <vu-el-menu>
            <template #list="{ defaultClass }">
                <div :class="defaultClass">
                    <vu-el-menu-item>
                        <vu-el-menu-button> aaaa </vu-el-menu-button>
                    </vu-el-menu-item>
                </div>
            </template>
        </vu-el-menu>

        <vu-el-input :type="'filled'" :size="'lg'" :control-type="'text'" :is-disabled="true" />

        <vu-el-dropdown :type="'outline'" :size="'lg'">
            <template #button>
                <vu-el-dropdown-button :text="'선택'" />
            </template>

            <template #menu>
                <vu-el-dropdown-menu :placement="'bottom-start'">
                    <vu-el-dropdown-menu-item>
                        <vu-el-dropdown-menu-button :text="'메뉴'" />
                    </vu-el-dropdown-menu-item>
                </vu-el-dropdown-menu>
            </template>
        </vu-el-dropdown>

        <vu-el-switch :size="'sm'" :control-type="'checkbox'" :label="'스위치'" :use-label="true" />

        <vu-el-symbol :type="'circle'" :size="'40'" />
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import {
    VuElContainer,
    VuElButtons,
    VuElButton,
    VuElBadge,
    VuElCheckbox,
    VuElRadio,
    VuElChip,
    VuElDialog,
    VuElMenu,
    VuElMenuItem,
    VuElMenuButton,
    VuElDropdown,
    VuElDropdownButton,
    VuElDropdownMenu,
    VuElDropdownMenuItem,
    VuElDropdownMenuButton,
    VuElInput,
    VuElSwitch,
    VuElSymbol
} from './components/elements';

export default defineComponent({
    components: {
        VuElContainer,
        VuElButtons,
        VuElButton,
        VuElBadge,
        VuElCheckbox,
        VuElRadio,
        VuElChip,
        VuElMenu,
        VuElMenuItem,
        VuElMenuButton,
        VuElDropdown,
        VuElDropdownButton,
        VuElDropdownMenu,
        VuElDropdownMenuItem,
        VuElDropdownMenuButton,
        VuElInput,
        VuElSwitch,
        VuElSymbol
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
