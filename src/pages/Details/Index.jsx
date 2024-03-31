import { Container } from './style'
import { Button } from '../../components/Button'

export function Index(){
  return (
    <Container>
      <h1>Hello world!</h1>
      <Button title="Entrar" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
  )
}