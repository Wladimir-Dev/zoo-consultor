import { List } from '@mui/material'
import { useState } from 'react'
import { PostedComment } from '../PostedComment'
import { Comment } from '../../types'
import { Button } from '../FormZone/styles'

interface Props {
    comments: Comment[] | undefined
    topCommentId?: string
    hideBtnOption: boolean
}
export const ListOfReplies = ({ comments, topCommentId, hideBtnOption }: Props) => {

    const [showComments, setShowComments] = useState(hideBtnOption)
    return (
        <>
            {
                showComments
                && <List sx={{ width: '100%', maxWidth: '21rem', marginLeft: '5px' }}>
                    {
                        comments?.map(comment => <PostedComment key={comment.id} comment={comment} topCommentId={topCommentId} />)
                    }
                </List>
            }
            {
                !hideBtnOption &&
                <Button variant='contained' onClick={() => setShowComments(prev => !prev)} >
                    {

                        showComments ? 'Ocultar Respuestas' : `Ver ${comments?.length} Respuestas`
                    }
                </Button>
            }

        </>
    )
}
