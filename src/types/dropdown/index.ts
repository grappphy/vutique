// 크기
export const DROPDOWN_SIZES = {
    sm: 'sm',
    lg: 'lg'
};

export type DropdownSizes = (typeof DROPDOWN_SIZES)[keyof typeof DROPDOWN_SIZES];
