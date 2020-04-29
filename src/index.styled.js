import styled, { css } from 'styled-components'

export const selectedStyles = (selected) => {
  if (selected)
    return css`
      color: #fff;
      background: #1a73e8;
      border-radius: 50%;
    `
}

export const Header = styled.div`
  display: grid;
  grid-template-columns: 48px 48px auto;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`

export const DayNamesWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
  border-top: #dadce0 1px solid;
`

export const DayName = styled.div`
  color: #70757a;
  font-size: 11px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  border-right: #dadce0 1px solid;
`

export const DaysWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  ${(props) => `grid-template-rows: repeat(${props.rows}, minmax(0, 1fr))`};
`

export const Day = styled.div`
  border-right: #dadce0 1px solid;
  border-bottom: #dadce0 1px solid;
  overflow: hidden;
`

export const DayNumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
`

export const DayNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.3px;
  white-space: nowrap;
  color: #70757a;
  line-height: 16px;
  min-height: 24px;
  min-width: 24px;
  ${(props) => selectedStyles(props.selected)};
`

export const DayBody = styled.div`
  height: calc(100% - 40px);
`

export const NavButtonLeft = styled.div`
  padding: 4px;
  cursor: pointer;
  grid-column: 1;
`

export const NavButtonRight = styled.div`
  padding: 4px;
  cursor: pointer;
  grid-column: 2;
`

export const Month = styled.div`
  color: #3c4043;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
  margin-left: 24px;
  grid-column: 3;
`

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 60px 20px minmax(0, 1fr);
  border-left: #dadce0 1px solid;

  ${(props) => `
    @media only screen and (max-width: ${props.breakpoint}px) {
      height: auto;
    }

    ${DayNamesWrapper} {
      @media only screen and (max-width: ${props.breakpoint}px) {
        visibility: hidden;
      }
    }

    ${DaysWrapper} {
      @media only screen and (max-width: ${props.breakpoint}px) {
        display: flex;
        flex-direction: column;
      }
    }

    ${Day} {
      @media only screen and (max-width: ${props.breakpoint}px) {
        overflow: initial;
        min-height: 60px;
      }
    }
    
    ${NavButtonRight} {
      @media only screen and (max-width: ${props.breakpoint}px) {
        grid-column: 3;
      }
    }
    
    ${Month} {
      @media only screen and (max-width: ${props.breakpoint}px) {
        grid-column: 2;
        grid-row: 1;
        text-align: center;
        margin: 0;
      }
    }
    
    ${Header} {
      @media only screen and (max-width: ${props.breakpoint}px) {
        grid-template-columns: 48px auto 48px;
      }
    }`}
`
