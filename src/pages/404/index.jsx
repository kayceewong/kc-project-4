import { Container, Layout } from '@/components'
import css from './styles.module.css'

export default function Page404() {
  return (
    <Layout
      title="VGDB | 404"
      desc="This page doesn't exist or has been deleted"
    >
      <Container gap sx={css.err}>
        <div className={css.info}>
          <h1>404 - Not found</h1>
          <p>This page doesn&apos;t exist or has been deleted</p>
        </div>
      </Container>
    </Layout>
  )
}
