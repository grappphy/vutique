<template>
    <vu-el-container>
        <div>
            <vu-fn-button :text="'버튼'" />
        </div>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer } from './components/elements';

// Functions
import { VuFnButton } from './components/functions';

export default defineComponent({
    components: {
        VuElContainer,
        VuFnButton
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
