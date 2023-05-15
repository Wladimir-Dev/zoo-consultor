import { Comment } from '../../types'
import { PostedComment } from '../PostedComment'
import { ListOfReplies } from '../ListOfReplies'
import { Title } from '../FormZone/styles'
import { ContainerCom, ContainerRep } from './styles'
interface Props {
    comments: Comment[]
}
export const ListOfComments = ({ comments }: Props) => {

    return (
        <ContainerCom spacing={1} >
            {
                comments.length > 0
                    ? comments.map(comment => {
                        return <>
                            <PostedComment
                                key={comment.id}
                                comment={comment}
                                topCommentId={comment.id} />
                            {
                                comment.replies &&
                                comment.replies.length > 0 &&
                                <ContainerRep >
                                    <ListOfReplies
                                        comments={comment.replies}
                                        topCommentId={comment.id}
                                        hideBtnOption={false} />
                                </ContainerRep>

                            }
                        </>
                    })
                    : <Title>No Hay Comentarios</Title>
            }
        </ContainerCom>
    )
}
