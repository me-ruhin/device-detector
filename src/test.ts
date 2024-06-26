// src/test.ts
import { getDeviceType } from './index';

// User Agent Tests
console.log(getDeviceType("Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1")); // Should print 'mobile'
console.log(getDeviceType("Mozilla/5.0 (iPad; CPU OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1")); // Should print 'tablet'
console.log(getDeviceType("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3")); // Should print 'desktop'

// Screen Width Tests
console.log(getDeviceType("", 320)); // Should print 'mobile'
console.log(getDeviceType("", 800)); // Should print 'tablet'
console.log(getDeviceType("", 1200)); // Should print 'desktop'
