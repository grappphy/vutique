export const CHECKBOX_SIZES = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
} as const;

export type CheckboxSizes = (typeof CHECKBOX_SIZES)[keyof typeof CHECKBOX_SIZES];

export const CHECKBOX_ALIGNS = {
    top: 'top',
    middle: 'middle'
} as const;

export type CheckboxAligns = (typeof CHECKBOX_ALIGNS)[keyof typeof CHECKBOX_ALIGNS];

export const CHECKBOX_CONTROL_TYPES = {
    checkbox: 'checkbox',
    radio: 'radio'
} as const;

export type CheckboxControlTypes = (typeof CHECKBOX_CONTROL_TYPES)[keyof typeof CHECKBOX_CONTROL_TYPES];
