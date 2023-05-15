import { Paper as PaperMUI, styled } from "@mui/material";

export const Paper = styled(PaperMUI)({
    backgroundColor: "#065a1e",
    fontSize: '1.5rem',
    textTransform: 'capitalize',
    textAlign: 'center',
    cursor: 'pointer',
    '& a': {
        color: 'white',
        textDecoration: 'none',
        width: '100%',
        height: '100%',
        padding: '20px',
        display:'block'


    }
}) as typeof PaperMUI;