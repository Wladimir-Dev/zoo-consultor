import { List, Stack, styled } from '@mui/material'

export const ContainerCom = styled(Stack)({
  paddingBlockEnd: '1rem',
  '@media (min-width: 768px)': {
    padding: '0rem 10rem',
  },
  '@media (min-width: 1024px)': {
    padding: '0rem 30rem',
  },
})
export const ContainerRep=styled(List)({
    display:'flex',
    flexDirection:'column',
    alignItems:'end',
    width:'100%',
    paddingLeft:'1rem',
    gap:'.5rem',
    '&>button':{
        alignSelf:'end'
    }
    /* sx={{  gap: '5px',alignSelf:'end', width:'100%',paddingLeft:'10px' }} */
})