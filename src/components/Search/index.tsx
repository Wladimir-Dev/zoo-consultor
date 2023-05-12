import { useId, useRef, useState } from "react"
import { useZoo } from "../../hooks/useZoo"
import { Animal, Comment } from "../../types"
import { FoundResults } from "../FoundZones"
import { FoundAnimals } from "../FoundAnimals"
import { FoundComments } from "../FoundComments"
import { ContainerResults, ContainerSearch, Form } from "./styles"
import SearchIcon from '@mui/icons-material/Search';
import { List, ListItemButton } from "@mui/material"



export const Search = () => {
    const searchId = useId()
    const { zones, dispatch, filterComment, filterReplies, filterAnimals } = useZoo()

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

        dispatch({ type: 'CLEAN' })
        const target = e.currentTarget

        if (target[searchId].value == '') return

        busqueda.current = target[searchId].value
        busqueda.current = busqueda.current.toLowerCase()

        zones.includes(busqueda.current) && setFoundZones(busqueda.current)

        setFoundAnimals(filterAnimals(busqueda.current))
        setFoundComments(filterComment(busqueda.current))
        setFoundReplies(filterReplies(busqueda.current))
        setShowOptions(true)
    }
    return (
        <Form action="" onSubmit={handleSubmit}>
            <ContainerSearch direction="row"  >
                <button type="submit">  <SearchIcon /></button>
                <fieldset>
                    <input type="text" id={searchId} placeholder="reptiles..." />
                </fieldset>
            </ContainerSearch >
            {
                showOptions &&
                <List component="nav" aria-label="secondary mailbox folder" onClick={hideForms}>
                    {
                        foundZones.length > 0 &&
                        <FoundResults zones={foundZones} searchText={busqueda.current} />
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
                </List>
            }

        </Form>
    )
}
