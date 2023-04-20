import { Container, LinkButton } from '@/components'
import css from './styles.module.css'

export const RAWG = () => (
  <Container gap sx={css.container}>
    <div className={css.rawg}>
      <h2 className={css.title}>
        Thanks to <span className={css.logo}>RAWG</span> API
      </h2>
      <p>
        Data and/or images on this webpage are sourced from RAWG API.
        To learn more about RAWG, please visit their website:
      </p>
      <LinkButton margin="2rem 0 0 0" href="https://rawg.io/apidocs" blank>
        Read the documentation
      </LinkButton>
    </div>
  </Container>
)
