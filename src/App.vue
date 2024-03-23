<template>
    <vu-el-container>
        <div>
            <vu-fn-badge :color="'primary'" :text="'뱃지'" :text-color="'white'" />
        </div>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer } from './components/elements';

// Functions
import { VuFnBadge } from './components/functions';

export default defineComponent({
    components: {
        VuElContainer,
        VuFnBadge
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
