import { Button, List } from '@mui/material'
import { useState } from 'react'
import { PostedComment } from '../PostedComment'
import { Comment } from '../../types'

interface Props {
    comments: Comment[] | undefined
    topCommentId?: string
}
export const ListOfReplies = ({ comments, topCommentId }: Props) => {

    const [showComments, setShowComments] = useState(false)
    return (
        <>
            {
                showComments
                && <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {
                        comments?.map(comment => <PostedComment key={comment.id} comment={comment} topCommentId={topCommentId} />)
                    }
                </List>
            }
            <Button
                onClick={() => setShowComments(prev => !prev)}>
                {
                    showComments
                        ? 'Ocultar Respuestas'
                        : `Ver ${comments?.length} Respuestas`
                }</Button>
        </>
    )
}
