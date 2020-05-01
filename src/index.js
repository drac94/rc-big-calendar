import React, { useState } from 'react'
import {
  addDays,
  addMonths,
  subMonths,
  isWithinRange,
  format,
  isSameDay,
  differenceInDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek
} from 'date-fns'

import {
  Container,
  Header,
  DaysWrapper,
  Day,
  DayNamesWrapper,
  DayName,
  DayNumber,
  DayNumberWrapper,
  DayBody,
  NavButtonLeft,
  NavButtonRight,
  Month
} from './index.styled'

const Calendar = (props) => {
  const {
    renderDay,
    previousButton,
    nextButton,
    onMonthChange,
    mobileBreakpoint = 900,
    headerDateFormat = 'MMMM YYYY',
    enabledDayDateFormat = 'D',
    disabledDayDateFormat = 'MMM D',
    currentDayColor
  } = props
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const Days = ({ renderDay }) => {
    const days = []
    let day = startDate

    while (day <= endDate) {
      const dayNumber = isWithinRange(day, monthStart, monthEnd)
        ? format(day, enabledDayDateFormat)
        : format(day, disabledDayDateFormat)
      days.push(
        <Day key={day}>
          <DayNumberWrapper>
            <DayNumber
              selected={isSameDay(day, today)}
              currentDayColor={currentDayColor}
            >
              {dayNumber}
            </DayNumber>
          </DayNumberWrapper>
          {renderDay && <DayBody>{renderDay(day, startDate, endDate)}</DayBody>}
        </Day>
      )
      day = addDays(day, 1)
    }
    const rows = Math.ceil(differenceInDays(endDate, startDate) / 7)
    return <DaysWrapper rows={rows}>{days}</DaysWrapper>
  }

  const DayNames = () => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    return (
      <DayNamesWrapper>
        {days.map((value, index) => (
          <DayName key={index}>{value}</DayName>
        ))}
      </DayNamesWrapper>
    )
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
    onMonthChange && monthChangeCallback(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
    onMonthChange && monthChangeCallback(subMonths(currentMonth, 1))
  }

  const monthChangeCallback = (currentMonth) => {
    onMonthChange(currentMonth, startDate, endDate)
  }

  return (
    <Container breakpoint={mobileBreakpoint}>
      <Header>
        <NavButtonLeft onClick={() => prevMonth()}>
          {previousButton || '<'}
        </NavButtonLeft>
        <NavButtonRight onClick={() => nextMonth()}>
          {nextButton || '>'}
        </NavButtonRight>
        <Month>{format(currentMonth, headerDateFormat)}</Month>
      </Header>
      <DayNames />
      <Days renderDay={renderDay} />
    </Container>
  )
}

export default Calendar
