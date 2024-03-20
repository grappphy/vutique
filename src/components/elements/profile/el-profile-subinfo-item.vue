<template>
    <div class="vu-profile-subinfo-item">
        <slot>
            <!-- 슬롯: 링크 -->
            <slot
                name="link"
                :default-class="'vu-profile-subinfo-link'"
                :icon-class="'vu-profile-subinfo-icon'"
                :text-class="'vu-profile-subinfo-text'"
                :after-icon-class="'vu-profile-subinfo-after-icon'"
            >
            </slot>
        </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'vu-el-profile-subinfo-item'
});
</script>
