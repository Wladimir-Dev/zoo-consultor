import { Stack as StackMUI, styled, Box as BoxMUI } from '@mui/material'

export const Stack = styled(StackMUI)({
  width: '90%',
  margin: '0 auto',
  paddingBottom: '13rem',
  '@media (min-width:  600px)': {
    paddingBottom: '1rem'
  },
}) as typeof StackMUI

export const Box = styled(BoxMUI)({
  position: 'fixed',
  minWidth: '26rem',
  bottom: 0,

  '@media (min-width:  600px)': {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
})
