<template>
    <span class="vu-a11y">
        <slot>
            {{ text }}
        </slot>
    </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "vu-el-a11y",
    props: {
        /**
         * 텍스트
         *
         * @type {String}
         */
        text: {
            type: String
        }
    }
});
</script>
