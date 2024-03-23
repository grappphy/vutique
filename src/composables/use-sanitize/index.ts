// Library
/**
 * sanitize-html
 * @see https://www.npmjs.com/package/sanitize-html
 */
import sanitizeHTML from 'sanitize-html';

// Types
import { SanitizeOptions } from '../../types';

export function useSanitize() {
    /**
     * 지정된 옵션을 기반으로 위험성 있는 HTML 코드를 안전한 코드로 변환
     * @param {string} content - HTML 코드
     * @param {SanitizeOptions} options - sanitizeHTML 옵션
     * @returns {string} 변환된 HTML 코드
     */
    const sanitizeHtml = (content: string, options: SanitizeOptions) => {
        return sanitizeHTML(content, options);
    };

    sanitizeHtml.defaults = sanitizeHTML.defaults;

    return {
        sanitizeHtml
    };
}
