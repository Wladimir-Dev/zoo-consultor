import { Container as ContainerMUI, styled } from '@mui/material'

export const Container = styled(ContainerMUI)({
  minWidth: '320px',
  margin: '0 auto',
  width: '100%',
  backgroundColor: '#1e952985',
  minHeight: '100vh',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '4rem',
  rowGap: '2rem',
  '@media (min-width: 1200px)':{
    maxWidth:'none',
    padding:'10rem'
  }

})
