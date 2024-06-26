// src/index.ts
export function getDeviceType(userAgent?: string, screenWidth?: number): 'mobile' | 'tablet' | 'desktop' | 'unknown' {
    const ua = userAgent || (typeof window !== 'undefined' && window.navigator.userAgent) || '';
    const width = screenWidth !== undefined ? screenWidth : (typeof window !== 'undefined' && window.innerWidth);

    const isMobile = /Mobile|Android|iP(hone|od)/.test(ua) || (typeof width === 'number' && width <= 767);
    const isTablet = /Tablet|iPad/.test(ua) || (typeof width === 'number' && width >= 768 && width <= 1024);
    const isDesktop = !isMobile && !isTablet || (typeof width === 'number' && width > 1024);

    if (isMobile) {
        return 'mobile';
    } else if (isTablet) {
        return 'tablet';
    } else if (isDesktop) {
        return 'desktop';
    }

    return 'unknown';
}
