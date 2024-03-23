// Composables
import { useSanitize } from '../../composables';

// Types
import type { SanitizeBinding } from '../../types';

/**
 * sanitize-html 디렉티브
 * v1.0.1
 *
 * 허용되지 않은 패턴을 안전한 HTML 코드로 필터링
 */
const SanitizeHtml = {
    /**
     * 바인딩 된 엘리먼트가 부모 노드에 삽입 되었을 때 호출
     *
     * @param el 바인딩된 요소
     * @param binding 바인딩 정보
     */
    mounted(el: HTMLElement, binding: SanitizeBinding) {
        updateElement(el, binding);
    },

    /**
     * 업데이트 후 호출
     *
     * @param el 바인딩된 요소
     * @param binding 바인딩 정보
     */
    updated(el: HTMLElement, binding: SanitizeBinding) {
        updateElement(el, binding);
    }
};

function updateElement(el: HTMLElement, binding: SanitizeBinding) {
    if (!binding.value) {
        return;
    }

    // 슬롯 사용을 대비해 content가 있을 경우만 실행
    if (binding.value.content) {
        const { sanitizeHtml } = useSanitize();

        el.innerHTML = sanitizeHtml(binding.value.content, {
            ...sanitizeHtml.defaults,
            ...binding.value.options
        });
    }
}

export default SanitizeHtml;
