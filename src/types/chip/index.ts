// 유형
export const CHIP_TYPES = {
    filled: 'filled',
    outline: 'outline'
} as const;

export type ChipTypes = (typeof CHIP_TYPES)[keyof typeof CHIP_TYPES];

// 크기
export const CHIP_SIZES = {
    sm: 'sm',
    md: 'md'
} as const;

export type ChipSizes = (typeof CHIP_SIZES)[keyof typeof CHIP_SIZES];

// 태그
export const CHIP_TAGS = {
    button: 'button',
    a: 'a',
    routerLink: 'router-link'
};

export type ChipTags = (typeof CHIP_TAGS)[keyof typeof CHIP_TAGS];
