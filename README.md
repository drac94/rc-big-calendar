![image](https://user-images.githubusercontent.com/1719915/80829582-0ce29380-8bad-11ea-9c61-dd8e4d47f268.png)

# React Big Calendar

> A lightweight Google Calendar like React Component built with grid and flexbox.

[![NPM](https://img.shields.io/npm/v/rc-big-calendar.svg)](https://www.npmjs.com/package/rc-big-calendar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/rc-big-calendar.svg)](https://www.npmjs.com/package/rc-big-calendar)
[![npm](https://img.shields.io/npm/dw/rc-big-calendar.svg)](https://www.npmjs.com/package/rc-big-calendar)

## Demo

[Demo](https://www.luisguerrero.me/rc-big-calendar/)

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

const MyView = (props) => (
  <Calendar
    renderDay={myCustomRender}
    previousButton={<span> 👈 </span>}
    nextButton={<span> 👉 </span>}
    onMonthChange={handleMonthChange}
  />
)
```

### Props

- `renderDay: Function(currentDay: Date, startDate: Date, endDate: Date, isToday: boolean)`

  - **Optional**
  - The custom renderer function for every day in the calendar.

- `previousButton: String | Component`

  - **Optional**
  - The button to navigate to the previous month.

- `nextButton: String | Component`
  - **Optional**
  - The button to navigate to the next month.

* `onMonthChange: Function(currentDay: Date, startDate: Date, endDate: Date)`

  - **Optional**
  - The callback function to be called when clicking the next and previous buttons.

* `isMobile: Boolean`

  - **Optional**
  - Whether to apply the mobile styles or not.
  - Default value: false

* `headerDateFormat: String`

  - **Optional**
  - The format of the date in the header of the calendar.
  - Default value: 'MMMM YYYY'

* `headerColor: String`

  - **Optional**
  - The color of the date in the header of the calendar.
  - Default value: '#3c4043'

* `borderColor: String`

  - **Optional**
  - The color of the borders.
  - Default value: '#dadce0'

* `dayNameColor: String`
  - **Optional**
  - The color of theday name (MON, TUE....).
  - Default value: '#70757a'

For date formating please refer to the [date-fns](https://date-fns.org/v1.28.5/docs/format) docs.

## Changelog

### 1.0.4

- Remove styled-components dependency.
- Previously only the content of the cell could be controlled and not the header, now the render callback allows you to render the whole cell.
- Removed props for formatting the header of the cell since now you can render your own header with your own styles.

### 1.0.3

- Added support for date formatting.
- Added support for current day header color.

## License

Licensed under the MIT License, Copyright © 2020-present Luis Guerrero [drac94](https://github.com/drac94).

See [LICENSE](./LICENSE) for more information.
