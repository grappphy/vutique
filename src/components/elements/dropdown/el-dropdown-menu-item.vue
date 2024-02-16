<template>
    <vu-el-menu-item :class="classes">
        <slot />
    </vu-el-menu-item>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

// Elements
import VuElMenuItem from "../menu/el-menu-item.vue";

export default defineComponent({
    name: "vu-el-dropdown-menu-item",
    components: {
        VuElMenuItem
    },
    props: {
        /**
         * 활성화 상태
         *
         * @type {Boolean}
         */
        isActive: {
            type: Boolean
        }
    },
    setup(props) {
        const classes = computed(() => {
            const defaultClass = "vu-dropdown-menu-item";

            const activeClass = props.isActive ? `${defaultClass}:active` : null;

            return [defaultClass, activeClass];
        });

        return {
            classes
        };
    }
});
</script>
