import { IconButton, styled } from '@mui/material'

export const ContainerAnimals = styled('section')({
  width: '90%',
  margin: '0 auto',
})
export const Title = styled('h2')({
  color: 'white',
  textAlign: 'center',
  marginBlockEnd: '5rem',
  fontSize: '2.2rem',
})
export const ButtonAdd = styled(IconButton)({
  color: 'white',
  backgroundColor: '#007fff',
  position: 'absolute',
  bottom: '4rem',
  right: '3rem',
  '&: hover':{
    backgroundColor:'#004fff'
  }
})
