import { ref, computed, getCurrentInstance, Ref, PropType } from 'vue';

// Constants
import { DROPDOWN } from '../../constants';

// Interfaces
import type { DropdownProps, DropdownMenuItemOptions } from '../../interfaces';

// Types
import type { DropdownSizes, Placements } from '../../types';
import { DROPDOWN_SIZES, PLACEMENTS } from '../../types';

// Library
import { onClickOutside } from '@vueuse/core';

export const dropdownProps = {
    /**
     * 드롭다운 데이터
     *
     * @type {Array<DropdownMenuItemOptions>}
     * @default []
     */
    data: {
        type: Array as PropType<Array<DropdownMenuItemOptions>>,
        default: () => [] as Array<DropdownMenuItemOptions>
    },
    /**
     * 드롭다운 크기
     *
     * @type {String}
     * @default 'sm'
     */
    size: {
        type: String as PropType<DropdownSizes>,
        default: DROPDOWN_SIZES.sm,
        validator: (value: string): value is DropdownSizes => {
            return Object.values(DROPDOWN_SIZES).includes(value as DropdownSizes);
        }
    },
    /**
     * 배치
     *
     * @type {String}
     * @default 'bottom-start'
     */
    placement: {
        type: String as PropType<Placements>,
        default: PLACEMENTS.bottomStart,
        validator: (value: string): value is Placements => {
            return Object.values(PLACEMENTS).includes(value as Placements);
        }
    },
    /**
     * 선택된 인덱스
     *
     * @type {Number}
     */
    selectedIndex: {
        type: Number
    },
    /**
     * 기본 버튼 텍스트
     *
     * @type {String}
     * @default '선택'
     */
    defaultButtonText: {
        type: String,
        default: DROPDOWN.DEFAULT_BUTTON_TEXT
    },
    /**
     * 활성화 버튼 화살표
     *
     * @type {String}
     * @default 'ic-control-select-arrow-up-fill'
     */
    activeButtonArrow: {
        type: String,
        default: DROPDOWN.ACTIVE_BUTTON_ARROW
    },
    /**
     * 비활성화 버튼 화살표
     *
     * @type {String}
     * @default 'ic-control-select-arrow-down-fill'
     */
    inactiveButtonArrow: {
        type: String,
        default: DROPDOWN.INACTIVE_BUTTON_ARROW
    },
    /**
     * 사용 불가 상태
     *
     * @type {Boolean}
     */
    isDisabled: {
        type: Boolean
    }
};

export function useDropdown(props: DropdownProps) {
    // 인스턴스
    const instance = getCurrentInstance();

    // 레퍼런스
    const rootRef: Ref<HTMLElement> = ref(null);

    // 활성화 상태
    const isActive = ref(false);

    // 버튼 텍스트
    const buttonText = computed(() => {
        return props.selectedIndex >= 0 ? props.data[props.selectedIndex]?.text : props.defaultButtonText;
    });

    // 버튼 화살표
    const buttonArrow = computed(() => {
        return isActive.value ? props.activeButtonArrow : props.inactiveButtonArrow;
    });

    // 버튼 클릭
    function buttonClickHandler(event: Event): void {
        if (props.isDisabled) {
            event.preventDefault();
        }

        isActive.value = !isActive.value;

        instance?.emit('on-button-click');
    }

    // 메뉴 버튼 클릭
    function menuButtonClickHandler(index: number): void {
        isActive.value = false;

        instance?.emit('on-menu-button-click', index);
    }

    // 외부 클릭
    onClickOutside(rootRef, () => {
        isActive.value = false;

        instance?.emit('on-outside-click');
    });

    return {
        // Refs
        rootRef,

        // Values
        buttonText,
        buttonArrow,

        // States
        isActive,

        // Handlers
        buttonClickHandler,
        menuButtonClickHandler
    };
}
