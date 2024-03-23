<template>
    <vu-el-container>
        <div style="position: relative">
            <vu-fn-tooltip :text="'툴팁'" :is-active="true" />
        </div>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer } from './components/elements';

// Functions
import { VuFnTooltip } from './components/functions';

export default defineComponent({
    components: {
        VuElContainer,
        VuFnTooltip
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
