import { useId, useRef, useState } from "react"
import { useZoo } from "../../hooks/useZoo"
import { Animal, Comment } from "../../types"
import { FoundZones } from "../FoundZones"
import { FoundAnimals } from "../FoundAnimals"
import { FoundComments } from "../FoundComments"
import { Stack, Form, Snackbar } from "./styles"
import SearchIcon from '@mui/icons-material/Search';
import { List, Typography } from "@mui/material"



export const Search = () => {
    const searchId = useId()
    const { zones, filterComment, filterReplies, filterAnimals } = useZoo()

    const [foundZones, setFoundZones] = useState<string>('')
    const [foundAnimals, setFoundAnimals] = useState<Animal[]>([])
    const [foundComments, setFoundComments] = useState<Comment[]>([])
    const [foundReplies, setFoundReplies] = useState<Comment[]>([])
    const [showOptions, setShowOptions] = useState(false)
    const busqueda = useRef<string>('')

    const hideForms = () => {
        setShowOptions(false)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const target = e.currentTarget

        busqueda.current = target[searchId].value

        if (!busqueda.current.trim()) return

        busqueda.current = busqueda.current.toLowerCase()
        zones.includes(busqueda.current) ? setFoundZones(busqueda.current) : setFoundZones('')

        setFoundAnimals(filterAnimals(busqueda.current))
        setFoundComments(filterComment(busqueda.current))
        setFoundReplies(filterReplies(busqueda.current))
        setShowOptions(true)
    }
    return (
        <Form action="" onSubmit={handleSubmit}>
            <Stack direction="row"  >
                <button type="submit">  <SearchIcon /></button>
                <fieldset>
                    <input type="text" id={searchId} placeholder="reptiles..." />
                </fieldset>
            </Stack >
            <Snackbar open={showOptions} onClose={hideForms} sx={{ bgcolor: 'aliceblue' }}>
                <List aria-label="secondary mailbox folder" onClick={hideForms} sx={{ width: '100%' }}>
                    {
                        foundZones.length > 0 &&
                        <FoundZones zones={foundZones} searchText={busqueda.current} />
                    }
                    {
                        foundAnimals.length > 0 &&
                        <FoundAnimals animals={foundAnimals} searchText={busqueda.current} />
                    }
                    {
                        foundComments.length > 0 &&
                        <FoundComments comments={foundComments} searchText={busqueda.current} />
                    }
                    {
                        foundReplies.length > 0 &&
                        <FoundComments comments={foundReplies} searchText={busqueda.current} />
                    }
                    {
                        (foundZones.length == 0 && foundAnimals.length == 0 && foundComments.length == 0 && foundReplies.length == 0)
                        && <Typography variant="subtitle1" >No Hay Resultados</Typography>
                    }
                </List>
            </Snackbar>



        </Form>
    )
}
