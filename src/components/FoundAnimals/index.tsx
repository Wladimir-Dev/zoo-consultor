import { Link } from "react-router-dom"
import { useZoo } from "../../hooks/useZoo"
import { Animal } from "../../types"
import { Divider, ListItem, ListItemButton, ListItemText } from "@mui/material"

interface Props {
    animals: Animal[]
    searchText: string
}
export const FoundAnimals = ({ animals, searchText }: Props) => {
    const { dispatch, findZone } = useZoo()
    return (
        <>
            {
                animals?.length > 0
                && animals.map(animal =>
                    <ListItem>
                        <ListItemButton
                            key={`${animal.name}-${animal.type}`}
                            component={Link}
                            to={'/resultSearch'}
                            onClick={() => {
                                dispatch({ type: 'ANIMAL', payload: { zone: findZone(animal), animal: { ...animal } } })
                            }}
                        >
                            <ListItemText>{searchText}</ListItemText>
                            <ListItemText sx={{textAlign:'end'}}>......{animal.name}-{animal.type}-Animal</ListItemText>
                        </ListItemButton>
                    </ListItem>
                )

            }
            <Divider />
        </>
    )
}
