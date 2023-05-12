// import React from 'react'
import { List, Stack } from '@mui/material'
import { Comment } from '../../types'
import { PostedComment } from '../PostedComment'
import { ListOfReplies } from '../ListOfReplies'
interface Props {
    comments: Comment[]
}
export const ListOfComments = ({ comments }: Props) => {

    return (
        <Stack spacing={1} sx={{paddingBlockEnd:'1rem'}}>
            {
                comments.length > 0
                    ? comments.map(comment => {
                        return <>
                            <PostedComment key={comment.id} comment={comment} topCommentId={comment.id} />
                            {
                                comment.replies &&
                                    comment.replies.length > 0 &&
                                    <List sx={{  gap: '5px',alignSelf:'end' }}>
                                        <ListOfReplies comments={comment.replies} topCommentId={comment.id} hideBtnOption={false} />
                                    </List>

                            }
                        </>
                    })
                    : <h2>No Hay Comentarios</h2>
            }
        </Stack>
    )
}
