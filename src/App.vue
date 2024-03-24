<template>
    <vu-el-container>
        <div style="position: relative">
            <vu-fn-dialog :use-header-start="false" />
        </div>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer } from './components/elements';

// Functions
import { VuFnDialog } from './components/functions';

export default defineComponent({
    components: {
        VuElContainer,
        VuFnDialog
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
