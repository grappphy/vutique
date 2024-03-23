<template>
    <vu-el-container>
        <div>
            <vu-fn-switch :label="'스위치'" />
        </div>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer } from './components/elements';

// Functions
import { VuFnSwitch } from './components/functions';

export default defineComponent({
    components: {
        VuElContainer,
        VuFnSwitch
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
