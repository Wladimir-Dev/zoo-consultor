// import React from 'react'
import { type Comment } from '../../types'
import ReplyIcon from '@mui/icons-material/Reply';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import { useState } from 'react';
import { FormComment } from '../FormComment';
interface Props {
    comment: Comment
    topCommentId: string | undefined

}
export const PostedComment = ({ comment,topCommentId }: Props) => {
    const [addComment, setAddComment] = useState(false)
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'red[500]' }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    title={comment.author}
                    subheader={comment.createdAt}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {comment.content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button variant="text" startIcon={<ReplyIcon />} onClick={() => setAddComment(prev => !prev)} sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                        Reply
                    </Button>
                </CardActions>
            </Card>
            {
                addComment && <FormComment topCommentId={topCommentId} showForm={setAddComment}/>
            }
        </>
    )
}
