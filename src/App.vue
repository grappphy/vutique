<template>
    <vu-el-container>
        <div>
            <vu-fn-checkbox :label="'체크박스'" />
        </div>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer } from './components/elements';

// Functions
import { VuFnCheckbox } from './components/functions';

export default defineComponent({
    components: {
        VuElContainer,
        VuFnCheckbox
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
