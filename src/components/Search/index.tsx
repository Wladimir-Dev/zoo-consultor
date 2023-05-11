import { Stack } from "@mui/material"
import { useId, useRef, useState } from "react"
import { useZoo } from "../../hooks/useZoo"
import { Animal, Comment } from "../../types"
import { useNavigate } from "react-router-dom"


export const Search = () => {
    const searchId = useId()
    const { zones, animals, findZone, comments, findAnimal, dispatch } = useZoo()
    const [searchedZones, setSearchedZones] = useState<string>('')
    const [searchedAnimals, setSearchedAnimals] = useState<Animal[]>([])
    const [searchedComments, setSearchedComments] = useState<Comment[]>([])
    const [searchedReplies, setSearchedReplies] = useState<Comment[]>([])
    const [showOptions, setShowOptions] = useState(false)
    const busqueda = useRef<string>('')
    const navigate = useNavigate()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({ type: 'CLEAN' })
        const target = e.currentTarget

        if (target[searchId].value == '') return

        busqueda.current = target[searchId].value
        busqueda.current = busqueda.current.toLowerCase()

        zones.includes(busqueda.current)
            ? setSearchedZones(busqueda.current)
            : setSearchedZones('')

        setSearchedAnimals(animals.filter(
            animal => animal.name == busqueda.current || animal.type == busqueda.current))

        const auxw = comments.filter(
            comment => comment.author == busqueda.current || comment.content.includes(busqueda.current))

        const nuevos = auxw.map(wlad => ({ id: wlad.id, author: wlad.author, createdAt: wlad.createdAt, content: wlad.content }))

        setSearchedComments(nuevos)


        const aux1 = comments.map(auxc => ({ ...auxc, replies: auxc.replies?.filter(rep => rep.content.includes(busqueda.current)) }))

        setSearchedReplies(aux1.filter(item => item.replies && item.replies?.length > 0))


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
                            {
                                searchedZones &&
                                <li
                                    onClick={() => {
                                        dispatch({ type: 'ZONA', payload: busqueda.current })
                                        navigate('/resultSearch')
                                    }}
                                >
                                    {searchedZones}... Zona</li>
                            }
                            {
                                searchedAnimals?.length > 0
                                && searchedAnimals.map(animal =>
                                    <li key={`${animal.name}-${animal.type}`}
                                        onClick={() => {

                                            dispatch({ type: 'ANIMAL', payload: { zone: findZone(animal), animal: { ...animal } } })
                                            navigate('/resultSearch')
                                        }}
                                    >
                                        {busqueda.current}...{animal.name}-Animal
                                    </li>
                                )

                            }
                            {
                                searchedComments?.length > 0
                                && searchedComments.map(comment =>
                                    <li key={`${comment.author}-${comment.content}`}
                                        onClick={() => {
                                            const newAnimal = findAnimal(comment.id)
                                            if (newAnimal) dispatch({ type: 'COMENTARIO', payload: { zone: findZone(newAnimal), animal: { ...newAnimal }, comment: { ...comment } } })
                                            navigate('/resultSearch')
                                        }}
                                    >
                                        {busqueda.current}...{comment.author}-Comentario
                                    </li>
                                )

                            }
                            {
                                searchedReplies?.length > 0
                                && searchedReplies.map(comment =>
                                    <li key={`${comment.author}-${comment.content}`}
                                        onClick={() => {
                                            const newAnimal = findAnimal(comment.id)
                                            if (newAnimal) dispatch({ type: 'COMENTARIO', payload: { zone: findZone(newAnimal), animal: { ...newAnimal }, comment: { ...comment } } })
                                            navigate('/resultSearch')
                                        }}
                                    >
                                        {busqueda.current}...{comment.author}-Replie
                                    </li>
                                )

                            }

                        </>
                    }
                </ul>
            </section>
        </form>
    )
}
