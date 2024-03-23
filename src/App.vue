<template>
    <vu-el-container>
        <div>
            <vu-fn-chip :text="'칩'" :use-delete="true" />
        </div>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer } from './components/elements';

// Functions
import { VuFnChip } from './components/functions';

export default defineComponent({
    components: {
        VuElContainer,
        VuFnChip
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
