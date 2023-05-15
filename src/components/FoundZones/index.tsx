import { Divider, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useZoo } from '../../hooks/useZoo'
import { Link } from 'react-router-dom'

interface Props {
    zones: string
    searchText: string
}

export const FoundZones = ({ zones, searchText }: Props) => {
    const { dispatch } = useZoo()
    return (

        <>{
            zones &&
            <ListItem >
                <ListItemButton component={Link} to={'/resultSearch'}
                    onClick={() => { dispatch({ type: 'ZONA', payload: searchText }) }} >
                    <ListItemText>{zones}</ListItemText>
                    <ListItemText sx={{ textAlign: 'end' }}>
                        ......Zona
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        }
            <Divider />
        </>

    )
}
