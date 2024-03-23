export const LINK_TARGETS = {
    blank: '_blank',
    parent: '_parent',
    self: '_self',
    top: '_top'
};

export type LinkTargets = (typeof LINK_TARGETS)[keyof typeof LINK_TARGETS];
