// import React from 'react'
import { type Comment } from '../../types'
import ReplyIcon from '@mui/icons-material/Reply';
import { Avatar, Button,  CardActions, CardContent } from '@mui/material'
import { useState } from 'react';
import { FormComment } from '../FormComment';
import { CommentCard, HeaderCard, Span } from './styles';
interface Props {
    comment: Comment
    topCommentId?: string | undefined

}
export const PostedComment = ({ comment, topCommentId }: Props) => {
    const [addComment, setAddComment] = useState(false)
    return (
        <>
            <CommentCard sx={{ maxWidth: 345 }}>
                <HeaderCard
                    avatar={
                        <Avatar aria-label="recipe">
                            {comment.author.split("", 1)}
                        </Avatar>
                    }
                    title={comment.author}
                    subheader={comment.createdAt}
                />
                <CardContent>
                    <Span>
                        {comment.content}
                    </Span>
                </CardContent>
                <CardActions disableSpacing sx={{justifyContent:'end'}}>
                    <Button variant="text" startIcon={<ReplyIcon />}
                        onClick={() => setAddComment(prev => !prev)}
                        sx={{ textTransform: 'capitalize', fontSize: '1.3rem', fontWeight: 'bold' }}>
                        Reply
                    </Button>
                </CardActions>
            </CommentCard>
            {
                addComment && <FormComment topCommentId={topCommentId} showForm={setAddComment} />
            }
        </>
    )
}
