import { Button, Stack} from '@mui/material'
import React, { useId, useRef } from 'react'
import { useZoo } from '../../hooks/useZoo'
import { useParams } from 'react-router-dom'
import { Comment } from '../../types'
import { generatorRandomId } from '../../utilities/generatorRandomId'
import { Form, InputUser, TextArea } from './styles'

interface Props {
    topCommentId?: string
    showForm?: (s: boolean) => void
}


export const FormComment = ({ topCommentId, showForm }: Props) => {
    const nameId = useId()
    const textAreaId = useId()
    const { idAnimal: currentRoute } = useParams()
    const { addComment } = useZoo()
    const nameRef = useRef<HTMLInputElement>(null)
    const textContentRef = useRef<HTMLTextAreaElement>(null)

    const cleanInputs = () => {
        if (nameRef.current != undefined) (nameRef.current as HTMLInputElement).value = ''
        if (textContentRef.current != undefined) (textContentRef.current as HTMLTextAreaElement).value = ''
    }

    const createComment = (userName: string, textContent: string) => {
        const date = new Date();
        const newComment: Comment = {
            id: generatorRandomId().toString(),
            author: userName,
            createdAt: date.toLocaleDateString('es-US'),
            content: textContent,
        }
        if (!topCommentId) newComment.replies = []
        return newComment
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const target = e.currentTarget
        const userName = target[nameId].value
        const textContent = target[textAreaId].value

        if (userName == '' || textContent == ''){
            alert('Ambos campos son requeridos')
            return
        }

        const newComment = createComment(userName, textContent)

        currentRoute && addComment(currentRoute, newComment, topCommentId)

        showForm && showForm(false)
        cleanInputs()
    }
    return (
        <Form action="" onSubmit={handleSubmit} >
            <Stack component='fieldset' spacing={1}>

                <InputUser
                    id={nameId}
                    ref={nameRef}
                    label="Nombre Usuario"
                    name='nameId'
                    placeholder='Gabriela Suarez...'
                />
            </Stack>
            {/*  <fieldset>
                <input ref={nameRef} type="text" id={nameId} placeholder='Gabriela Suarez...' />
            </fieldset> */}

            <Stack component='div' sx={{flexDirection:'row'}} gap={1}>
                <TextArea ref={textContentRef} id={textAreaId} minRows={2} placeholder="ingresa un comentario..." />
                <Button variant='contained' type="submit">Reply</Button>

            </Stack>

        </Form>
    )
}
