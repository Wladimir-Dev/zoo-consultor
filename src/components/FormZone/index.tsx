import React, { useId } from 'react'
import { useZoo } from '../../hooks/useZoo'

interface Props {
  showForm: (state: boolean) => void;
}

export const FormZone = ({ showForm }: Props) => {
  const { addZone } = useZoo()
  const nameId = useId()


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const added = addZone(e.currentTarget.zoneName.value)
    added && showForm(false)
  }

  return (


    <form action="" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor={nameId}>Zona</label>
        <input type="text" name="zoneName" id={nameId} placeholder='Reptiles...' />
      </fieldset>

      <button type='submit'>Guardar Zona</button>
    </form>
  )
}
