import React, { useState } from 'react'
import styles from './styles.module.css'
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

const Calendar = (props) => {
  const {
    renderDay,
    previousButton,
    nextButton,
    onMonthChange,
    mobileBreakpoint = 900,
    headerDateFormat = 'MMMM YYYY',
    borderColor = '#dadce0'
  } = props
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const enabledDayDateFormat = 'D'
  const disabledDayDateFormat = 'MMM D'

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const Days = ({ renderDay }) => {
    const days = []
    let day = startDate

    const getDayNumber = () =>
      isWithinRange(day, monthStart, monthEnd)
        ? format(day, enabledDayDateFormat)
        : format(day, disabledDayDateFormat)

    while (day <= endDate) {
      days.push(
        <div
          className={styles.day}
          style={{ borderColor: borderColor }}
          key={day}
        >
          {renderDay ? (
            renderDay(day, startDate, endDate)
          ) : (
            <React.Fragment>
              <div className={styles.dayNumberWrapper}>
                <div
                  className={
                    isSameDay(day, today)
                      ? `${styles.dayNumber} ${styles.selected}`
                      : styles.dayNumber
                  }
                >
                  {getDayNumber()}
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      )
      day = addDays(day, 1)
    }
    const rows = Math.ceil(differenceInDays(endDate, startDate) / 7)
    return (
      <div
        className={styles.daysWrapper}
        style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}
      >
        {days}
      </div>
    )
  }

  const DayNames = () => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    return (
      <div
        className={styles.dayNamesWrapper}
        style={{ borderColor: borderColor }}
      >
        {days.map((value, index) => (
          <div
            className={styles.dayName}
            style={{ borderColor: borderColor }}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
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
    <div
      className={styles.container}
      style={{ borderColor: borderColor }}
      breakpoint={mobileBreakpoint}
    >
      <div className={styles.header} style={{ borderColor: borderColor }}>
        <div className={styles.navButtonLeft} onClick={() => prevMonth()}>
          {previousButton || '<'}
        </div>
        <div className={styles.navButtonRight} onClick={() => nextMonth()}>
          {nextButton || '>'}
        </div>
        <div className={styles.month}>
          {format(currentMonth, headerDateFormat)}
        </div>
      </div>
      <DayNames />
      <Days renderDay={renderDay} />
    </div>
  )
}

export default Calendar
