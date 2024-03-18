<template>
    <div class="sc-profile-subinfo-item">
        <slot>
            <!-- 슬롯: 링크 -->
            <slot
                name="link"
                :default-class="'sc-profile-subinfo-link'"
                :icon-class="'sc-profile-subinfo-icon'"
                :text-class="'sc-profile-subinfo-text'"
                :after-icon-class="'sc-profile-subinfo-after-icon'"
            >
            </slot>
        </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'sc-el-profile-subinfo-item'
});
</script>
