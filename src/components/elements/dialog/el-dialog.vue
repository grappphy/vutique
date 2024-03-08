<template>
    <div @click="clickHandler" :class="classes">
        <div class="vu-dialog-content">
            <!-- 슬롯: 콘텐츠 이전 -->
            <slot name="content-before" />

            <!-- 패널 -->
            <div class="vu-dialog-panel">
                <!-- 헤더 -->
                <div v-if="useHeader" class="vu-dialog-header">
                    <!-- 슬롯: 헤더 콘텐츠 -->
                    <slot name="header-content">
                        <div class="vu-dialog-header-start">
                            <!-- 슬롯: 헤더 시작 콘텐츠 -->
                            <slot name="header-start-content" :title-class="'vu-dialog-header-title'" />
                        </div>

                        <div class="vu-dialog-header-end">
                            <!-- 슬롯: 헤더 종료 콘텐츠 -->
                            <slot
                                name="header-end-content"
                                :button-class="'vu-dialog-header-button'"
                                :icon-class="'vu-dialog-header-button-icon'"
                            />
                        </div>
                    </slot>
                </div>

                <!-- 바디 -->
                <div class="vu-dialog-body">
                    <!-- 슬롯: 바디 콘텐츠 -->
                    <slot name="body-content">
                        <!-- 바디 시작 -->
                        <div v-if="useBodyStart" class="vu-dialog-body-start">
                            <!-- 슬롯: 바디 시작 콘텐츠 -->
                            <slot name="body-start-content" />
                        </div>

                        <!-- 바디 종료 -->
                        <div class="vu-dialog-body-end">
                            <!-- 슬롯: 바디 시작 종료 -->
                            <slot
                                name="body-end-content"
                                :title-class="'vu-dialog-body-title'"
                                :text-class="'vu-dialog-body-text'"
                            />
                        </div>
                    </slot>
                </div>

                <!-- 푸터 -->
                <div v-if="useFooter" class="vu-dialog-footer">
                    <!-- 슬롯: 푸터 콘텐츠 -->
                    <slot name="footer-content">
                        <vu-el-buttons class="vu-dialog-footer-buttons">
                            <template #item="{ defaultClass }">
                                <slot
                                    name="footer-buttons-content"
                                    :item-class="defaultClass"
                                    :button-class="'vu-dialog-footer-button'"
                                />
                            </template>
                        </vu-el-buttons>
                    </slot>
                </div>
            </div>

            <!-- 슬롯: 콘텐츠 이후 -->
            <slot name="content-after" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

// Elements
import VuElButtons from '../buttons/el-buttons.vue';

export default defineComponent({
    name: 'vu-el-dialog',
    components: {
        VuElButtons
    },
    props: {
        /**
         * 유형
         *
         * @type {String}
         */
        type: {
            type: String
        },
        /**
         * 크기
         *
         * @type {String}
         */
        size: {
            type: String
        },
        /**
         * 헤더 사용 여부
         *
         * @type {Boolean}
         */
        useHeader: {
            type: Boolean
        },
        /**
         * 바디 시작 사용 여부
         *
         * @type {Boolean}
         */
        useBodyStart: {
            type: Boolean
        },
        /**
         * 푸터 사용 여부
         *
         * @type {Boolean}
         */
        useFooter: {
            type: Boolean
        },
        /**
         * 패딩 없음 사용 여부
         *
         * @type {Boolean}
         */
        usePaddingless: {
            type: Boolean
        },
        /**
         * 푸터 없음 사용 여부
         *
         * @type {Boolean}
         */
        useFooterless: {
            type: Boolean
        }
    },
    setup(props, { emit }) {
        // 클래스
        const classes = computed(() => {
            const defaultClass = 'vu-dialog';

            const typeClass = props.type ? `${defaultClass}<${props.type}>` : null;

            const sizeClass = props.size ? `${defaultClass}{${props.size}}` : null;

            const footerlessClass = props.useFooterless ? `${defaultClass}{footerless}` : '';

            const paddinglessClass = props.usePaddingless ? `${defaultClass}{paddingless}` : '';

            return [defaultClass, typeClass, sizeClass, footerlessClass, paddinglessClass];
        });

        // 클릭
        function clickHandler(event: Event): void {
            emit('on-click', event);
        }

        return {
            classes,

            clickHandler
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/dialog';
</style>
