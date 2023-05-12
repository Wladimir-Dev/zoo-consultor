import {  Paper, styled } from "@mui/material";

export const Carta = styled(Paper)({
    backgroundColor: "#007fff",
    fontSize:'1.5rem',
    textTransform:'capitalize',
    padding: '20px',
    textAlign:'center',
    cursor:'pointer',
    '& a': {
        color: 'white',
        textDecoration: 'none'

    }
}) as typeof Paper;