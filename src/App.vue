<template>
    <vu-el-container>
        <div style="position: relative">
            <vu-fn-dropdown
                @on-menu-button-click="menuButtonClickHandler"
                :data="dropdownData"
                :selected-index="selectedIndex"
            />

            <vu-fn-icon-dropdown
                @on-menu-button-click="menuButtonClickHandler"
                :data="dropdownData"
                :selected-index="selectedIndex"
            />
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
        const selectedIndex = ref(0);

        const dropdownData = ref([
            {
                text: '드롭다운 1'
            },
            {
                text: '드롭다운 2'
            }
        ]);

        function menuButtonClickHandler(index: number) {
            selectedIndex.value = index;
        }

        return {
            selectedIndex,
            dropdownData,
            menuButtonClickHandler
        };
    }
});
</script>

<style lang="scss">
@import 'styles';
</style>
