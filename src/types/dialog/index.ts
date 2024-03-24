// 크기
export const DIALOG_SIZES = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
} as const;

export type DialogSizes = (typeof DIALOG_SIZES)[keyof typeof DIALOG_SIZES];

// 유형
export const DIALOG_TYPES = {
    fullpage: 'fullpage',
    bottomSheet: 'bottom-sheet'
} as const;

export type DialogTypes = (typeof DIALOG_TYPES)[keyof typeof DIALOG_TYPES];
