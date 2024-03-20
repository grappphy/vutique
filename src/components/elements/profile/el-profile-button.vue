<template>
    <component @click="clickHandler" class="vu-profile-button" :is="tag" :to="to" :href="href" :target="linkTarget">
        <vu-el-a11y :text="'프로필 더보기'" />
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Elements
import ScElA11y from '../a11y/vu-el-a11y.vue';

export default defineComponent({
    components: {
        ScElA11y
    },
    props: {
        /**
         * 태그
         *
         * @type {String}
         */
        tag: {
            type: String
        },
        /**
         * 링크 URL
         *
         * @type {String}
         */
        href: {
            type: String
        },
        /**
         * 라우터 링크 URL
         *
         * @type {String}
         */
        to: {
            type: String
        },
        /**
         * 링크 타겟
         *
         * @type {String}
         */
        linkTarget: {
            type: String
        }
    },
    setup(props, { emit }) {
        // 클릭
        function clickHandler(event: Event): void {
            emit('on-click', event);
        }

        return {
            clickHandler
        };
    }
});
</script>
