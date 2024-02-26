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
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer, VuElButtons, VuElButton, VuElBadge } from './components/elements';

export default defineComponent({
    components: {
        VuElContainer,
        VuElButtons,
        VuElButton,
        VuElBadge
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
