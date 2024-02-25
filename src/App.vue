<template>
    <vu-el-container>
        <vu-el-button :tag="'button'" :color="'primary'" :size="'sm'" :text="'버튼'" />
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer, VuElButton } from './components/elements';

export default defineComponent({
    components: {
        VuElContainer,
        VuElButton
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
