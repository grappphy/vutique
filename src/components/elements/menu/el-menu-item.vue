<template>
    <div class="vu-menu-item">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "vu-el-menu-item"
});
</script>
