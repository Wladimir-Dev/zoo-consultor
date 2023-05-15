import {
  Button as ButtonMUI,
  TextField,
  TextareaAutosize,
  styled,
} from '@mui/material'

export const Form = styled('form')({
  backgroundColor: 'white',
  padding: '1rem',
  '& fieldset': {
    borderStyle: 'none',
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginBlockStart: '1rem',
  borderRadius: '.8rem',
  '@media (min-width: 768px)': {
    width: '80%',
    alignSelf: 'center',
  },
})

export const TextArea = styled(TextareaAutosize)({
  flexGrow: 1,
  fontFamily: 'inherit',
  padding: '.8rem',
  outline: 'none ',
})
export const InputUser = styled(TextField)({
  '& label.Mui-focused': {
    color: '#007fff',
  },
  borderBlockEnd: '1px solid #00000080',
})

export const Button = styled(ButtonMUI)({
  backgroundColor: '#065a1e',
  '&:hover': {
    backgroundColor: '#065a1e',
  },
})
