import { useNavigate } from 'react-router-dom'
import { useZoo } from '../../hooks/useZoo'
import { Comment } from '../../types'
interface Props {
    comments: Comment[]
    searchText: string
}

export const FoundComments = ({ comments, searchText }: Props) => {
    const { dispatch, findZone, findAnimal } = useZoo()
    const navigate = useNavigate()
    return (
        <>
            {
                comments?.length > 0
                && comments.map(comment =>
                    <li key={`${comment.author}-${comment.content}`}
                        onClick={() => {
                            const newAnimal = findAnimal(comment.id)
                            if (newAnimal) dispatch({ type: 'COMENTARIO', payload: { zone: findZone(newAnimal), animal: { ...newAnimal }, comment: { ...comment } } })
                            navigate('/resultSearch')
                        }}
                    >
                        {searchText}...{comment.author}-{comment.replies ?'Replies':'Comentario'}
                    </li>
                )

            }
        </>
    )
}
