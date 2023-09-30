import { Container } from '../../styles'
import styles from './Hero.module.css'
import { DivContainer, Formulario, HeroTitle } from './syles'

const Hero = () => (
  <Formulario>
    <Container>
      <DivContainer>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </DivContainer>
    </Container>
  </Formulario>
)

export default Hero
