# rc-big-calendar

> A lightweight calendar React component built with grid and flexbox.

[![NPM](https://img.shields.io/npm/v/rc-big-calendar.svg)](https://www.npmjs.com/package/rc-big-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/rc-big-calendar.svg)](https://www.npmjs.com/package/rc-big-calendar)
[![npm](https://img.shields.io/npm/dw/rc-big-calendar.svg)](https://www.npmjs.com/package/rc-big-calendar)

## Install

```bash
npm install --save rc-big-calendar
```

## Usage

```jsx
import React from 'react'
import Calendar from 'rc-big-calendar'

const myCustomRender = (day) => {
    return <div>Example</div>
}

const MyView = props => (
    <Calendar
      renderDay={myCustomRender}
      previousButton={<span> 👈 </span>}
      nextButton={<span> 👉 </span>}
      onMonthChange={handleMonthChange}
      mobileBreakpoint={600} 
    />
)
```


### Props

- `renderDay - ?Func` - Callback function - (currentDay: Date, startDate: Date, endDate: Date)
- `previousButton -?Component` 
- `nextButton -?Component` 
- `onMonthChange - ?Func` - Callback function - (currentMonth: Date, startDate: Date, endDate: Date)
- `mobileBreakpoint ?Number` - The screen width when to switch to mobile styles

### Output
![image](https://user-images.githubusercontent.com/1719915/80731993-480f9480-8ad1-11ea-920f-39e3f2de8bec.png)

![image](https://user-images.githubusercontent.com/1719915/80732095-71302500-8ad1-11ea-9d2c-919336eaa5c0.png)

## License

Licensed under the MIT License, Copyright © 2020-present Luis Guerrero [drac94](https://github.com/drac94).

See [LICENSE](./LICENSE) for more information.
