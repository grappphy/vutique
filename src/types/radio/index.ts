export const RADIO_SIZES = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
} as const;

export type RadioSizes = (typeof RADIO_SIZES)[keyof typeof RADIO_SIZES];

export const RADIO_ALIGNS = {
    top: 'top',
    middle: 'middle'
} as const;

export type RadioAligns = (typeof RADIO_ALIGNS)[keyof typeof RADIO_ALIGNS];

export const RADIO_CONTROL_TYPES = {
    checkbox: 'checkbox',
    radio: 'radio'
} as const;

export type RadioControlTypes = (typeof RADIO_CONTROL_TYPES)[keyof typeof RADIO_CONTROL_TYPES];
