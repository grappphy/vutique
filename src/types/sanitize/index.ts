import type { IOptions, IDefaults } from 'sanitize-html';
import { DirectiveBinding } from 'vue';

export type SanitizeOptions = IOptions;
export type SanitizeDefaults = IDefaults;

export interface SanitizeBinding extends DirectiveBinding {
    content?: string;
    options?: SanitizeOptions;
}

// 허용된 태그
export const SANITIZE_ALLOWED_TAGS = {
    em: 'em',
    p: 'p',
    span: 'span',
    strong: 'strong',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    br: 'br'
};

export type SanitizeAllowedTags = (typeof SANITIZE_ALLOWED_TAGS)[keyof typeof SANITIZE_ALLOWED_TAGS];
