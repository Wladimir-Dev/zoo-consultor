import { Snackbar as SnackbarMUI, Stack as StackMUI, styled } from '@mui/material'

export const Stack = styled(StackMUI)({
  padding: '1rem',
  backgroundColor: '#e7ebf0',
  borderRadius: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  '& fieldset': {
    borderStyle: 'none',
  },
  '& input': {
    padding: '1.5rem',
    borderStyle: 'none',
    borderRadius: '2rem',
    outline: 'none',
    flexgrow: 1,
    backgroundColor: '#e7ebf0',
    opacity: 1,
  },
  '& button': {
    borderStyle: 'none',
    width: '2.8rem',
    height: '2.8rem',
  },
  '& svg': {
    width: '100%',
    height: '100%',
  },
})
export const Form = styled('form')({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '.8rem',
  position: 'relative',
})
export const ContainerResults = styled('section')({
  backgroundColor: 'aliceblue',
  minHeight: 'auto',
})

export const Snackbar = styled(SnackbarMUI)({
  position: 'absolute',
  background: '#e7ebf0',
  width: '100%',
  borderBottomLeftRadius: '0.8rem',
  borderBottomRightRadius: '0.8rem',
  padding:'1rem',
  height:'fit-content',
  '&.MuiSnackbar-root': {
    top: '6rem',
    left: 0,
  },
})
