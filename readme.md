# device-type-detector
##### React module to detect OS / Browser / Device

[![npm version](https://badge.fury.io/js/device-detector.svg)](https://badge.fury.io/js/device-detector)
[![GitHub issues](https://img.shields.io/github/issues/me-ruhin/device-detector.svg)](https://github.com/me-ruhin/device-detector/issues)
[![GitHub license](https://img.shields.io/github/license/me-ruhin/device-detector.svg)](https://github.com/me-ruhin/device-detector/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/dm/device-detector.svg)](https://www.npmjs.com/package/device-detector)
[![npm](https://img.shields.io/npm/dt/device-detector.svg)](https://www.npmjs.com/package/device-detector)
[![npm](https://img.shields.io/npm/v/device-detector.svg)](https://www.npmjs.com/package/device-detector)


### Install
NPM
```sh
$ npm install device-type-detector --save
```
 Yarn
```sh
$ yarn add device-type-detector
```

### How to use in React

```typescript
import React, { useEffect, useState } from 'react';
import { getDeviceType } from 'device-detector';

const App = () => {
const [deviceType, setDeviceType] = useState('');

useEffect(() => {
const type = getDeviceType();
setDeviceType(type);
}, []);

return (
<div>
<h1>Device Detector</h1>
<p>Your device type is: {deviceType}</p>
</div>
);
};

export default App;
```


### How to use in Javascript

```javascript

const deviceType = getDeviceType();
console.log(deviceType); // Outputs: 'mobile', 'tablet', 'desktop', or 'unknown'

```

### License

[MIT License](//https://github.com/me-ruhin/device-detector/license.txt)