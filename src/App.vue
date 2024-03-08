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
        <vu-el-dialog :size="'sm'" />
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
    VuElDialog
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
        VuElDialog
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
