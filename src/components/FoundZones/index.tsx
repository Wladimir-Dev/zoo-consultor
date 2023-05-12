import { ListItemButton } from '@mui/material'
import { useZoo } from '../../hooks/useZoo'
import { useNavigate } from 'react-router-dom'

interface Props {
    zones: string
    searchText: string
}

export const FoundResults = ({ zones, searchText }: Props) => {
    const { dispatch } = useZoo()
    const navigate = useNavigate()
    return (

        <>{
            zones &&
            <ListItemButton
                onClick={() => {
                    dispatch({ type: 'ZONA', payload: searchText })
                    navigate('/resultSearch')
                }}
            >
                {zones}... Zona
            </ListItemButton>
        }
        </>

    )
}
