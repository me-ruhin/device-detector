# device-type-detector
##### Angular module to detect OS / Browser / Device

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
Bower
```sh
$ bower install device-type-detector

```


### Setup

You can set custom detectors at the provider object.
The 



> Custom detectors will also be added as CSS classes with 'is-' prefix and encoded into css class name casing.

### deviceDetector service
Holds the following properties:
* raw : object : contains the raw values... for internal use mostly.
* os : string : name of current OS
* browser : string : name of current browser
* device : string : name of current device

### Example

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


```javascript

const deviceType = getDeviceType();
console.log(deviceType); // Outputs: 'mobile', 'tablet', 'desktop', or 'unknown'

```

### License

[MIT License](//github.com/srfrnk/ng-device-detector/blob/master/license.txt)