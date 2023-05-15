import { type Comment } from '../../types'
import ReplyIcon from '@mui/icons-material/Reply';
import { Avatar, Button, CardActions, CardContent } from '@mui/material'
import { useState } from 'react';
import { FormComment } from '../FormComment';
import { Card, CardHeader, Typography } from './styles';

interface Props {
    comment: Comment
    topCommentId?: string
}
export const PostedComment = ({ comment, topCommentId }: Props) => {
    const [addComment, setAddComment] = useState(false)
    return (
        <>
            <Card sx={{ maxWidth: 345 }} component='article'>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            {comment.author.split("", 1)}
                        </Avatar>
                    }
                    title={comment.author}
                    subheader={comment.createdAt}
                />
                <CardContent>
                    <Typography>
                        {comment.content}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ justifyContent: 'end' }}>
                    <Button variant="text" startIcon={<ReplyIcon />}
                        onClick={() => setAddComment(prev => !prev)}
                        sx={{ textTransform: 'capitalize', fontSize: '1.3rem', fontWeight: 'bold', color: '#065a1e' }}>
                        Reply
                    </Button>
                </CardActions>
            </Card>
            {
                addComment && <FormComment topCommentId={topCommentId} showForm={setAddComment} />
            }
        </>
    )
}
