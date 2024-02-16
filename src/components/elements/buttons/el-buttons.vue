<template>
    <div class="sc-buttons">
        <!-- 슬롯: 아이템 -->
        <slot name="item" :default-class="'sc-buttons-item'" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "vu-el-buttons"
});
</script>
