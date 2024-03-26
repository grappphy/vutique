// 드롭다운 아이템 옵션
export interface DropdownMenuItemOptions {
    /**
     * 텍스트
     */
    text: string;
    /**
     * 아이콘
     */
    icon?: string;
    /**
     * 아이디
     */
    id?: string;
    /**
     * 파라미터
     */
    params?: unknown;
}

// 드롭다운 프로퍼티
export interface DropdownProps {
    /**
     * 드롭다운 데이터
     */
    data?: Array<DropdownMenuItemOptions>;
    /**
     * 드롭다운 크기
     */
    size?: DropdownSizes;
    /**
     * 배치
     */
    placement?: Placements;
    /**
     * 선택된 인덱스
     */
    selectedIndex?: number;
    /**
     * 기본 버튼 텍스트
     */
    defaultButtonText?: string;
    /**
     * 활성화 버튼 화살표
     */
    activeButtonArrow?: string;
    /**
     * 비활성화 버튼 화살표
     */
    inactiveButtonArrow?: string;
    /**
     * 사용 불가 상태
     */
    isDisabled?: boolean;
}
