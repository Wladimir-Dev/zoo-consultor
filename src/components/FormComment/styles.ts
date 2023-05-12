import { InputLabel, TextField, TextareaAutosize, styled } from '@mui/material'
// import { InputZone } from '../FormZone/styles'

export const Form = styled('form')({
  backgroundColor: 'white',
 /*  minWidth: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0, */
  padding: '1rem',
  '& fieldset': {
    borderStyle: 'none',
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginBlockStart:'1rem'
})

export const TextArea = styled(TextareaAutosize)({
  flexGrow: 1,
  fontFamily: 'inherit',
})
export const InputUser = styled(TextField)({
  //   borderRadius: '.8rem',
  '& label.Mui-focused': {
    color: '#007fff',
  },
  borderBlockEnd: '1px solid #00000080',
})
