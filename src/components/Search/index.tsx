import { Stack } from "@mui/material"
import { useId, useRef, useState } from "react"
import { useZoo } from "../../hooks/useZoo"
import { Animal, Comment } from "../../types"
import { useNavigate } from "react-router-dom"
// import { Comment } from "@mui/icons-material"
// import { Comment } from "@mui/icons-material"

interface reducerFake {
    tipo: string
    animal?: Animal
    comment?: Comment
}
export const Search = () => {
    const searchId = useId()
    const { zones, animals, findZone, setSearch, comments, findAnimal } = useZoo()
    const [searchedZones, setSearchedZones] = useState<string>('')
    const [searchedAnimals, setSearchedAnimals] = useState<Animal[]>([])
    const [searchedComments, setSearchedComments] = useState<Comment[]>([])
    const [searchedReplies, setSearchedReplies] = useState<Comment[]>([])
    const [showOptions, setShowOptions] = useState(false)
    const busqueda = useRef<string>('')
    const navigate = useNavigate()

    const reducerFake = ({ tipo, animal, comment }: reducerFake) => {
        switch (tipo) {
            case 'zona':
                setSearch(prev => ({ ...prev, zone: busqueda.current }))
                navigate('/resultSearch')
                break;
            case 'animal':
                (animal) &&
                    setSearch(prev => ({
                        ...prev,
                        zone: findZone(animal),
                        animal: { ...animal }
                    }))
                navigate('/resultSearch')
                break;
            case 'comentario':
                if (comment) {
                    const newAnimal = findAnimal(comment.id)
                    newAnimal &&
                        setSearch(prev => ({
                            ...prev,
                            zone: findZone(newAnimal),
                            animal: newAnimal,
                            comment: comment
                        }))
                }

                navigate('/resultSearch')
                break;

            default:
                break;
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch({ zone: '', animal: { name: '', type: '', comments: [] }, comment: { id: '', author: '', createdAt: '', content: '' } })

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
                                <li onClick={() => reducerFake({ tipo: 'zona' })}>{searchedZones}... Zona</li>
                            }
                            {
                                searchedAnimals?.length > 0
                                && searchedAnimals.map(animal =>
                                    <li key={`${animal.name}-${animal.type}`} onClick={() => reducerFake({ tipo: 'animal', animal: animal })} >
                                        {busqueda.current}...{animal.name}-Animal
                                    </li>
                                )

                            }
                            {
                                searchedComments?.length > 0
                                && searchedComments.map(comment =>
                                    <li key={`${comment.author}-${comment.content}`} onClick={() => reducerFake({ tipo: 'comentario', comment: comment })} >
                                        {busqueda.current}...{comment.author}-Comentario
                                    </li>
                                )

                            }
                            {
                                searchedReplies?.length > 0
                                && searchedReplies.map(comment =>
                                    <li key={`${comment.author}-${comment.content}`} onClick={() => reducerFake({ tipo: 'comentario', comment: comment })} >
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
