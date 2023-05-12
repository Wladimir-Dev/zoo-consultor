import { List } from "@mui/material"
import { useZoo } from "../../hooks/useZoo"
import { PostedComment } from "../PostedComment"
import { ListOfReplies } from "../ListOfReplies"
import { ContainerResults } from "./styles"

export const ResultSearch = () => {
    const { search } = useZoo()
    return (
        <ContainerResults>
            <span>Zona: {search.zone}</span>
            {
                search.animal.name != '' && 
                <span>Animal: {search.animal.name}</span>
            }
            {
                search.comment.id && <>
                    <PostedComment key={search.comment.id} comment={search.comment} />

                    {
                        (search.comment.replies && search.comment.replies?.length > 0) &&
                        <List sx={{ marginLeft: '25px', gap: '5px' }}>
                            <ListOfReplies comments={search.comment.replies} topCommentId={search.comment.id} hideBtnOption={true} />
                        </List>

                    }
                </>
            }
        </ContainerResults>


    )
}
