import { Stack, styled } from '@mui/material'

export const ContainerSearch = styled(Stack)({
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
    padding: '1rem',
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
  
  // position: 'fixed',
  // zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})
export const ContainerResults = styled('section')({
  backgroundColor: 'aliceblue',
  minHeight:'auto',
})
