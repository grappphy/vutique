<template>
    <div class="vu-menu" :data-vu-placement="placement">
        <!-- 헤더 -->
        <slot name="header" :default-class="'vu-menu-header'" />

        <!-- 바디 -->
        <slot name="body" :default-class="'vu-menu-body'" :list-class="'vu-menu-list'">
            <div class="vu-menu-body">
                <!-- 슬롯: 리스트 -->
                <slot name="list" :default-class="'vu-menu-list'" />
            </div>
        </slot>

        <!-- 푸터 -->
        <slot name="footer" :default-class="'vu-menu-footer'" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "vu-el-menu",
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
