// 태그
export const BUTTON_TAGS = {
    button: 'button',
    a: 'a',
    routerLink: 'router-link',
    span: 'span'
};

export type ButtonTags = (typeof BUTTON_TAGS)[keyof typeof BUTTON_TAGS];

// 유형
export const BUTTON_TYPES = {
    icon: 'icon',
    toIcon: 'to-icon'
} as const;

export type ButtonTypes = (typeof BUTTON_TYPES)[keyof typeof BUTTON_TYPES];

// 크기
export const BUTTON_SIZES = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg'
};

export type ButtonSizes = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

// 색상
export const BUTTON_COLORS = {
    transparent: 'transparent',
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    outline: 'outline',
    white: 'white',
    ghost: 'ghost',
    follow: 'follow',
    following: 'following'
} as const;

export type ButtonColors = (typeof BUTTON_COLORS)[keyof typeof BUTTON_COLORS];

// 모양
export const BUTTON_SHAPES = {
    round: 'round'
} as const;

export type ButtonShapes = (typeof BUTTON_SHAPES)[keyof typeof BUTTON_SHAPES];
