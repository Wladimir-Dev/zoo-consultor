import { InputLabel, Select as SelectMUI, styled } from '@mui/material'

export const LabelInput = styled(InputLabel)({
  color: 'black',
  opacity: 0.7,
  '&.Mui-focused':{
    fontSize: '1.5rem',
    color: 'white',
    top: '-.5rem',
    opacity: 1,
  }
})
export const Select = styled(SelectMUI)({
  backgroundColor: 'white',
  
})
