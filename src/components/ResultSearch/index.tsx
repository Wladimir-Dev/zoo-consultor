import { List } from "@mui/material"
import { useZoo } from "../../hooks/useZoo"
import { PostedComment } from "../PostedComment"
import { ListOfReplies } from "../ListOfReplies"

export const ResultSearch = () => {
    const { search2 } = useZoo()
    return (
        <>
            <div>Zona: {search2.zone}</div>
            {
                search2.animal.name != '' && <div>Animal: {search2.animal.name}</div>
            }
            {
                search2.comment.id && <>
                    <PostedComment key={search2.comment.id} comment={search2.comment} />

                    {
                        (search2.comment.replies && search2.comment.replies?.length > 0) &&
                        <List sx={{ marginLeft: '25px', gap: '5px' }}>
                            <ListOfReplies comments={search2.comment.replies} topCommentId={search2.comment.id} />
                        </List>

                    }
                </>

            }


        </>
       /*  <>
            <div>Zona: {search.zone}</div>
            {
                search.animal.name != '' && <div>Animal: {search.animal.name}</div>
            }
            {
                search.comment.id && <>
                    <PostedComment key={search.comment.id} comment={search.comment} />

                    {
                        (search.comment.replies && search.comment.replies?.length > 0) &&
                        <List sx={{ marginLeft: '25px', gap: '5px' }}>
                            <ListOfReplies comments={search.comment.replies} topCommentId={search.comment.id} />
                        </List>

                    }
                </>

            }


        </> */

    )
}
