// 유형
export const DROPDOWN_TYPES = {
    filled: 'filled',
    outline: 'outline',
    icon: 'icon'
};

export type DropdownTypes = (typeof DROPDOWN_TYPES)[keyof typeof DROPDOWN_TYPES];

// 크기
export const DROPDOWN_SIZES = {
    sm: 'sm',
    lg: 'lg'
};

export type DropdownSizes = (typeof DROPDOWN_SIZES)[keyof typeof DROPDOWN_SIZES];
