// 크기
export const SWITCH_SIZES = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
} as const;

export type SwitchSizes = (typeof SWITCH_SIZES)[keyof typeof SWITCH_SIZES];

// 정렬
export const SWITCH_ALIGNS = {
    top: 'top',
    middle: 'middle'
} as const;

export type SwitchAligns = (typeof SWITCH_ALIGNS)[keyof typeof SWITCH_ALIGNS];

// 컨트롤 유형
export const SWITCH_CONTROL_TYPES = {
    checkbox: 'checkbox',
    radio: 'radio'
} as const;

export type SwitchControlTypes = (typeof SWITCH_CONTROL_TYPES)[keyof typeof SWITCH_CONTROL_TYPES];
