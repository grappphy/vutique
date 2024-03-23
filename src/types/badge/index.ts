// 유형
export const BADGE_TYPES = {
    filled: 'filled',
    outline: 'outline'
} as const;

export type BadgeTypes = (typeof BADGE_TYPES)[keyof typeof BADGE_TYPES];

// 크기
export const BADGE_SIZES = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg'
} as const;

export type BadgeSizes = (typeof BADGE_SIZES)[keyof typeof BADGE_SIZES];

// 모양
export const BADGE_SHAPES = {
    round: 'round',
    dot: 'dot'
} as const;

export type BadgeShapes = (typeof BADGE_SHAPES)[keyof typeof BADGE_SHAPES];
