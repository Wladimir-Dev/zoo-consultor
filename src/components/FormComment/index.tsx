import { Button, TextareaAutosize } from '@mui/material'
import React, { useId, useRef } from 'react'
import { useZoo } from '../../hooks/useZoo'
import { useParams } from 'react-router-dom'
import { Comment } from '../../types'
import { generatorRandomId } from '../../utilities/generatorRandomId'

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

        if (userName == '' || textContent == '') return

        const newComment = createComment(userName, textContent)

        currentRoute && addComment(currentRoute, newComment, topCommentId)

        showForm && showForm(false)
        cleanInputs()
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor={nameId}>Usuario</label>
                <input ref={nameRef} type="text" id={nameId} placeholder='Gabriela Suarez...' />
            </fieldset>
            <fieldset>
                {/* <textarea ref={textContentRef}  id={textAreaId} placeholder="ingresa un comentario..."></textarea> */}
                <TextareaAutosize ref={textContentRef} id={textAreaId} minRows={2} placeholder="ingresa un comentario..." />
            </fieldset>
            <Button type="submit">Reply</Button>
        </form>
    )
}
