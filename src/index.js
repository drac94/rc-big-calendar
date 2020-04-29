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

export const Calendar = (props) => {
  const {
    renderDay,
    previousButton,
    nextButton,
    onMonthChange,
    mobileBreakpoint = 900
  } = props
  const headerDateFormat = 'MMMM YYYY'
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDates = (month) => {
    const monthStart = startOfMonth(month)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    return {
      monthStart,
      monthEnd,
      startDate,
      endDate
    }
  }

  const Days = ({ renderDay }) => {
    const { monthStart, monthEnd, startDate, endDate } = getDates(currentMonth)

    const dayFormat = 'D'
    const monthDayFormat = 'MMM D'

    let days = []
    let day = startDate

    while (day <= endDate) {
      const dayNumber = isWithinRange(day, monthStart, monthEnd)
        ? format(day, dayFormat)
        : format(day, monthDayFormat)
      days.push(
        <Day key={day}>
          <DayNumberWrapper>
            <DayNumber selected={isSameDay(day, today)}>{dayNumber}</DayNumber>
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
    const { startDate, endDate } = getDates(currentMonth)
    onMonthChange(currentMonth, startDate, endDate)
  }

  return (
    <Container breakpoint={mobileBreakpoint}>
      <Header>
        <NavButtonLeft onClick={() => prevMonth()}>
          {previousButton ? previousButton : 'prev'}
        </NavButtonLeft>
        <NavButtonRight onClick={() => nextMonth()}>
          {nextButton ? nextButton : 'next'}
        </NavButtonRight>
        <Month>{format(currentMonth, headerDateFormat)}</Month>
      </Header>
      <DayNames />
      <Days renderDay={renderDay} />
    </Container>
  )
}
