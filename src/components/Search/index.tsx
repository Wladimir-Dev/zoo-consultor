import { Stack } from "@mui/material"
import { useId, useRef, useState } from "react"
import { useZoo } from "../../hooks/useZoo"
import { Animal, Comment } from "../../types"
import { FoundResults } from "../FoundZones"
import { FoundAnimals } from "../FoundAnimals"
import { FoundComments } from "../FoundComments"


export const Search = () => {
    const searchId = useId()
    const { zones, animals, comments, dispatch } = useZoo()

    const [foundZones, setFoundZones] = useState<string>('')
    const [foundAnimals, setFoundAnimals] = useState<Animal[]>([])
    const [foundComments, setFoundComments] = useState<Comment[]>([])
    const [foundReplies, setFoundReplies] = useState<Comment[]>([])

    const [showOptions, setShowOptions] = useState(false)
    const busqueda = useRef<string>('')


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({ type: 'CLEAN' })
        const target = e.currentTarget

        if (target[searchId].value == '') return

        busqueda.current = target[searchId].value
        busqueda.current = busqueda.current.toLowerCase()

        zones.includes(busqueda.current) && setFoundZones(busqueda.current)

        setFoundAnimals(animals.filter(
            animal => animal.name == busqueda.current || animal.type == busqueda.current))

        const searchedComments = comments.
            filter(
                comment => comment.author == busqueda.current || comment.content.includes(busqueda.current)).
            map(newC => ({ id: newC.id, author: newC.author, createdAt: newC.createdAt, content: newC.content }))


        const searchedReplies = comments.
            map(auxc => ({ ...auxc, replies: auxc.replies?.filter(rep => rep.content.includes(busqueda.current)) })).
            filter(item => item.replies && item.replies?.length > 0)

        setFoundComments(searchedComments)
        setFoundReplies(searchedReplies)
        setShowOptions(true)
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <Stack direction="row"  >
                <fieldset>
                    <label htmlFor={searchId}></label>
                    <input type="text" id={searchId} placeholder="reptiles..." />
                </fieldset>
                <button type="submit"> buscar</button>
            </Stack >
            <section>

                <ul onClick={() => setShowOptions(false)}>
                    {
                        showOptions &&
                        <>
                            <FoundResults zones={foundZones} searchText={busqueda.current} />
                            <FoundAnimals animals={foundAnimals} searchText={busqueda.current} />
                            <FoundComments comments={foundComments} searchText={busqueda.current} />
                            <FoundComments comments={foundReplies} searchText={busqueda.current} />
                        </>
                    }
                </ul>
            </section>
        </form>
    )
}
