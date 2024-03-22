<template>
    <rect class="vu-stroke-rect" fill="transparent" width="100%" :stroke="stroke" :rx="999" :ry="999" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        /**
         * 스트로크
         *
         * @type {String}
         */
        stroke: {
            type: String
        }
    }
});
</script>
