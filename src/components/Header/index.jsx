import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/ArlanFigueiredo.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Arlan Figueiredo</strong>
        </div>
      </Profile>
    </Container>
  )
}