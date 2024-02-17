<template>
    <vu-el-menu class="vu-dropdown-menu" :placement="placement">
        <template #body="{ defaultClass, listClass }">
            <div :class="['vu-dropdown-menu-body', defaultClass]">
                <div :class="['vu-dropdown-menu-list', listClass]">
                    <slot />
                </div>
            </div>
        </template>
    </vu-el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import VuElMenu from '../menu/el-menu.vue';

export default defineComponent({
    name: 'vu-el-dropdown-menu',
    components: {
        VuElMenu
    },
    props: {
        /**
         * 배치
         *
         * @type {String}
         */
        placement: {
            type: String
        }
    }
});
</script>
