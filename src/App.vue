<template>
    <vu-el-container>
        <div>
            <vu-fn-text :size="'14'" :content="`<span>텍스트</span>`" />
        </div>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import { VuElContainer } from './components/elements';

// Functions
import { VuFnText } from './components/functions';

export default defineComponent({
    components: {
        VuElContainer,
        VuFnText
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
