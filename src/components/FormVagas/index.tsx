import { FormEvent, useState } from 'react'

import { BtnPesq, CampoPesq, FormPesq } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormPesq onSubmit={aoEnviarForm}>
      <CampoPesq
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesq type="submit">Pesquisar</BtnPesq>
    </FormPesq>
  )
}
export default FormVagas
