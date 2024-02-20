<template>
    <div>
        <vu-el-button :tag="'button'" :color="'primary'" :size="'sm'" :text="'버튼'" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import VuElButton from './components/elements/button/el-button.vue';

export default defineComponent({
    components: {
        VuElButton
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
