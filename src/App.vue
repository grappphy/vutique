<template>
    <vu-el-container>
        <div style="position: relative">
            <vu-fn-date :text="'2024.03.24'" :tooltip-text="'2024.03.24'" />
        </div>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer } from './components/elements';

// Functions
import { VuFnDate } from './components/functions';

export default defineComponent({
    components: {
        VuElContainer,
        VuFnDate
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
