import { Button as ButtonMUI, IconButton, TextField, styled } from '@mui/material'

export const Form = styled('form')({
  backgroundColor: '#2b2c37',
  position: 'fixed',
  top: '0',
  bottom: '0',
  width: '100%',
  padding: '5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  '& fieldset': {
    borderStyle: 'none',
  },
  
  '@media (min-width: 768px)': {
    maxWidth:'50rem',
    maxHeight:'50rem',
    top:'4rem',
    padding:'10rem'
  },
})
export const ButtonClose = styled(IconButton)({
  backgroundColor: '#828fa3',
  color: 'white',
  position: 'absolute',
  top: 0,
  right: 0,
  '& svg': {
    width: '2.2rem',
    height: '2.2rem',
  },
  '&:hover': {
    backgroundColor: '#828fa3',
  },
})
export const Title = styled('h2')({
  color: 'white',
  fontSize: '2rem',
  textAlign: 'center',
  textTransform:'capitalize'
})
export const InputZone = styled(TextField)({
  backgroundColor: 'white',
  borderRadius: '.8rem',
  '& label.Mui-focused': {
    fontSize: '1.5rem',
    color: 'white',
    top: '-.5rem',
  },
  '& div.Mui-focused': {
    fontSize: '1.5rem',
  
  },
})
export const Button=styled(ButtonMUI)({
  backgroundColor: '#065a1e',
  width:'fit-content',
  alignSelf:'center',
  fontSize:'1.3rem',
  textTransform:'capitalize',
  '&:hover':{
    backgroundColor: '#065a1e',
  }
  
})