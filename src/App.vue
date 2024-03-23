<template>
    <vu-el-container>
        <div>
            <vu-fn-radio :label="'라디오'" />
        </div>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer } from './components/elements';

// Functions
import { VuFnRadio } from './components/functions';

export default defineComponent({
    components: {
        VuElContainer,
        VuFnRadio
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
