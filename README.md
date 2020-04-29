# rc-big-calendar

> A React component google calendar like responsive with support for customized cells

[![NPM](https://img.shields.io/npm/v/rc-big-calendar.svg)](https://www.npmjs.com/package/rc-big-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rc-big-calendar
```

## Usage

```jsx
import React from 'react'

import Calendar from 'rc-big-calendar'

const Example = () => {
    return <Calendar />
}
```


### Props

- `renderDay - ?Func` - Callback function - (day, startDate, endDate)
- `previousButton -?Component` 
- `nextButton -?Component` 
- `onMonthChange - ?Func` - Callback function - (month)
- `mobileBreakpoint ?Number` - The screen width where it would switch to the mobile styles


## License

Licensed under the MIT License, Copyright © 2020-present Luis Guerrero [drac94](https://github.com/drac94).

See [LICENSE](./LICENSE) for more information.
