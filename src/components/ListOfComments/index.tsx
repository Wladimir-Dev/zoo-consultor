// import React from 'react'
import { List } from '@mui/material'
import { Comment } from '../../types'
import { PostedComment } from '../PostedComment'
import { ListOfReplies } from '../ListOfReplies'
interface Props {
    comments: Comment[]
}
export const ListOfComments = ({ comments }: Props) => {

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                comments.length > 0
                    ? comments.map(comment => {
                        return <>
                            <PostedComment key={comment.id} comment={comment} topCommentId={comment.id} />
                            {
                                comment.replies &&
                                    comment.replies.length > 0 &&
                                    <List sx={{ marginLeft: '25px', gap: '5px' }}>
                                        <ListOfReplies comments={comment.replies} topCommentId={comment.id} />
                                    </List>

                            }
                        </>
                    })
                    : <h2>No Hay Comentarios</h2>
            }
        </List>
    )
}
