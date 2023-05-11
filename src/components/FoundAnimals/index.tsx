import { useNavigate } from "react-router-dom"
import { useZoo } from "../../hooks/useZoo"
import { Animal } from "../../types"

interface Props{
    animals:Animal[]
    searchText:string
}
export const FoundAnimals = ({animals,searchText}:Props) => {
    const { dispatch,findZone } = useZoo()
    const navigate = useNavigate()
    return (
        <>
            {
                animals?.length > 0
                && animals.map(animal =>
                    <li key={`${animal.name}-${animal.type}`}
                        onClick={() => {

                            dispatch({ type: 'ANIMAL', payload: { zone: findZone(animal), animal: { ...animal } } })
                            navigate('/resultSearch')
                        }}
                    >
                        {searchText}...{animal.name}-Animal
                    </li>
                )

            }
        </>
    )
}
