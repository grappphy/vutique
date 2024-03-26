<template>
    <vu-el-container>
        <div style="position: relative">
            <vu-fn-dropdown :data="dropdownData" :selected-index="0" />

            <vu-fn-icon-dropdown :data="dropdownData" />
        </div>
    </vu-el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

// Elements
import { VuElContainer } from './components/elements';

// Functions
import { VuFnDropdown, VuFnIconDropdown } from './components/functions';

export default defineComponent({
    components: {
        VuElContainer,
        VuFnDropdown,
        VuFnIconDropdown
    },
    setup() {
        const dropdownData = ref([
            {
                text: '드롭다운'
            }
        ]);
        return {
            dropdownData
        };
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
