import { Link } from 'react-router-dom'
import { useZoo } from '../../hooks/useZoo'
import { Comment } from '../../types'
import { Divider, ListItem, ListItemButton, ListItemText } from '@mui/material'
interface Props {
    comments: Comment[]
    searchText: string
}

export const FoundComments = ({ comments, searchText }: Props) => {
    const { dispatch, findZone, findAnimal } = useZoo()

    const handleClick = (comment: Comment) => {
        const newAnimal = findAnimal(comment.id)
        if (newAnimal)
            dispatch({ type: 'COMENTARIO', payload: { zone: findZone(newAnimal), animal: { ...newAnimal }, comment: { ...comment } } })
    }
    return (
        <>
            {
                comments?.length > 0
                && comments.map(comment =>
                    <ListItem>
                        <ListItemButton
                            key={`${comment.author}-${comment.content}`}
                            onClick={() => handleClick(comment)}
                            component={Link}
                            to={'/resultSearch'}
                        >
                            <ListItemText>{searchText}</ListItemText>
                            <ListItemText sx={{ textAlign: 'end' }}>
                                ......{comment.author}-{comment.replies ? 'Replies' : 'Comentario'}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                )

            }
            <Divider />
        </>
    )
}
