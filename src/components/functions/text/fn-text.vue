<template>
    <vu-el-text
        v-sanitize-html="sanitizeHtmlProps"
        @on-click="clickHandler"
        :type="type"
        :tag="tag"
        :size="size"
        :color="color"
        :content="content"
        :href="href"
        :to="to"
        :link-target="linkTarget"
        :use-truncate="useTruncate"
    >
        <slot />
    </vu-el-text>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

// Elements
import { VuElText } from '../../elements';

// Directives
import { SanitizeHtml } from '../../../directives';

// Types
import type { TextTypes, TextTags, TextSizes, Colors, LinkTargets, SanitizeOptions } from '../../../types';
import { TEXT_TYPES, TEXT_TAGS, TEXT_SIZES, COLORS, LINK_TARGETS, SANITIZE_ALLOWED_TAGS } from '../../../types';

export default defineComponent({
    name: 'vu-fn-text',
    components: {
        VuElText
    },
    directives: {
        /**
         * sanitize-html 디렉티브
         */
        SanitizeHtml
    },
    props: {
        /**
         * 텍스트 유형
         *
         * @type {TextTypes}
         */
        type: {
            type: String as PropType<TextTypes>,
            validator: (value: string): value is TextTypes => {
                return Object.values(TEXT_TYPES).includes(value as TextTypes);
            }
        },
        /**
         * 텍스트 태그
         *
         * @type {TextTags}
         * @default 'span'
         */
        tag: {
            type: String as PropType<TextTags>,
            default: TEXT_TAGS.span,
            validator: (value: string): value is TextTags => {
                return Object.values(TEXT_TAGS).includes(value as TextTags);
            }
        },
        /**
         * 텍스트 크기
         *
         * @type {TextSizes}
         */
        size: {
            type: String as PropType<TextSizes>,
            validator: (value: string): value is TextSizes => {
                return Object.values(TEXT_SIZES).includes(value as TextSizes);
            }
        },
        /**
         * 텍스트 색상
         *
         * @type {Colors}
         */
        color: {
            type: String as PropType<Colors>,
            validator: (value: string): value is Colors => {
                return Object.values(COLORS).includes(value as Colors);
            }
        },
        /**
         * 텍스트 내용
         *
         * @type {string}
         */
        content: {
            type: String
        },
        /**
         * 링크
         *
         * @type {String}
         */
        link: {
            type: String
        },
        /**
         * 링크 타겟
         *
         * @type {LinkTargets}
         */
        linkTarget: {
            type: String as PropType<LinkTargets>,
            validator: (value: string): value is LinkTargets => {
                return Object.values(LINK_TARGETS).includes(value as LinkTargets);
            }
        },
        /**
         * sanitize-html 옵션
         *
         * @type {SanitizeOptions}
         */
        sanitizeOptions: {
            type: Object as PropType<SanitizeOptions>,
            default: () => ({
                allowedTags: Object.values(SANITIZE_ALLOWED_TAGS),
                allowedAttributes: false
            })
        },
        /**
         * SanitizeHtml 사용 여부
         *
         * @type {Boolean}
         * @default true
         */
        useSanitizeHtml: {
            type: Boolean,
            default: true
        },
        /**
         * 말줄임 사용 여부
         *
         * @type {Boolean}
         */
        useTruncate: {
            type: Boolean
        }
    },
    setup(props, { emit }) {
        /**
         * sanitize-html 디렉티브 프로퍼티
         * 사용하지 않을 경우 디렉티브에서 sanitizeHtml를 실행하지 않도록 false 처리
         */
        const sanitizeHtmlProps = computed(() => {
            return props.useSanitizeHtml ? { content: props.content, options: props.sanitizeOptions } : false;
        });

        // 링크 URL
        const href = computed(() => {
            return props.tag === TEXT_TAGS.a ? props.link : undefined;
        });

        // 라우터 링크 URL
        const to = computed(() => {
            return props.tag === TEXT_TAGS.routerLink ? props.link : undefined;
        });

        // 클릭
        function clickHandler(): void {
            emit('on-click');
        }

        return {
            // Sanitize Html
            sanitizeHtmlProps,

            // Link
            href,
            to,

            // Handlers
            clickHandler
        };
    }
});
</script>
