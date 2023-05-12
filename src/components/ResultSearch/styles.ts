import { styled } from '@mui/material'

export const ContainerResults = styled('section')({
    display:'flex',
    flexDirection:'column', 
    gap:'1rem',
    '&>span':{
        color:'white',
        fontSize:'1.8rem',
        fontWeight:'600',
        textTransform:'capitalize'
    }
})
