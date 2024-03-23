// 배치
export const PLACEMENTS = {
    bottom: 'bottom',
    bottomStart: 'bottom-start',
    bottomEnd: 'bottom-end',
    top: 'top',
    topStart: 'top-start',
    topEnd: 'top-end',
    right: 'right',
    rightStart: 'right-start',
    rightEnd: 'right-end',
    left: 'left',
    leftStart: 'left-start',
    leftEnd: 'left-end'
} as const;

export type Placements = (typeof PLACEMENTS)[keyof typeof PLACEMENTS];
