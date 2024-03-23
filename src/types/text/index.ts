// 유형
export const TEXT_TYPES = {
    gradient: 'gradient'
};

export type TextTypes = (typeof TEXT_TYPES)[keyof typeof TEXT_TYPES];

// 태그
export const TEXT_TAGS = {
    em: 'em',
    p: 'p',
    span: 'span',
    strong: 'strong',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    a: 'a',
    routerLink: 'router-link'
};

export type TextTags = (typeof TEXT_TAGS)[keyof typeof TEXT_TAGS];

// 크기
export const TEXT_SIZES = {
    11: '11',
    12: '12',
    13: '13',
    14: '14',
    15: '15',
    16: '16',
    18: '18',
    20: '20',
    24: '24',
    32: '32',
    42: '42',
    50: '50'
};

export type TextSizes = (typeof TEXT_SIZES)[keyof typeof TEXT_SIZES];
