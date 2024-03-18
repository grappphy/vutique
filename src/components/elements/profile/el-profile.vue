<template>
    <div :class="classes">
        <div class="vu-profile-content">
            <div v-if="useSymbol" class="vu-profile-start">
                <!-- 슬롯: 심볼-->
                <slot name="symbol" />
            </div>

            <div class="vu-profile-end">
                <div class="vu-profile-end-before">
                    <!-- 슬롯: 버튼 -->
                    <slot name="button" />

                    <div class="vu-profile-info">
                        <!-- 슬롯: 뱃지 -->
                        <slot name="badge" :default-class="'vu-profile-badge'" />

                        <!-- 슬롯: 관리자 -->
                        <slot name="staff" :default-class="'vu-profile-staff'" />

                        <!-- 슬롯: 닉네임 접두사 -->
                        <slot name="nickname-prefix" :default-class="'vu-profile-nickname-prefix'" />

                        <!-- 슬롯: 닉네임 -->
                        <slot name="nickname" :default-class="'vu-profile-nickname'" />

                        <!-- 슬롯: 닉네임 접미사 -->
                        <slot name="nickname-suffix" :default-class="'vu-profile-nickname-suffix'" />

                        <!-- 슬롯: 인포 작성자 -->
                        <slot name="info-writer" :default-class="'vu-profile-writer'" />
                    </div>

                    <!-- 서브 인포 -->
                    <div v-if="useSubinfo" class="vu-profile-subinfo">
                        <!-- 슬롯: 서브 인포 아이템 -->
                        <slot name="subinfo-item" />
                    </div>

                    <!-- 슬롯: 작성자 -->
                    <slot name="writer" :default-class="'vu-profile-writer'" />
                </div>

                <!-- 종료 이후 -->
                <div v-if="useEndAfter" class="vu-profile-end-after">
                    <slot name="end-after-content" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'vu-el-profile',
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
         * 관리자
         *
         * @type {String}
         */
        staff: {
            type: String
        },
        /**
         * 닉네임
         *
         * @type {String}
         */
        nickname: {
            type: String
        },
        /**
         * 심볼 사용 여부
         *
         * @type {Boolean}
         */
        useSymbol: {
            type: Boolean
        },
        /**
         * 서브 인포 사용 여부
         *
         * @type {Boolean}
         */
        useSubinfo: {
            type: Boolean
        },
        /**
         * 종료 이후 사용 여부
         *
         * @type {Boolean}
         */
        useEndAfter: {
            type: Boolean
        }
    },
    setup(props) {
        // 클래스
        const classes = computed(() => {
            const defaultClass = 'vu-profile';

            const typeClass = props.type ? `${defaultClass}:${props.type}` : null;

            const sizeClass = props.size ? `${defaultClass}{${props.size}}` : null;

            return [defaultClass, sizeClass, typeClass];
        });

        return {
            classes
        };
    }
});
</script>

<style lang="scss">
@import '../../../styles/components/profile';
</style>
