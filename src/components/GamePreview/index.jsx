import Link from 'next/link'
import cn from 'classnames'
import Image from 'next/image'

import { FaEye } from 'react-icons/fa'
import { ErrorBoundary } from 'react-error-boundary'
import css from './styles.module.css'

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export const GamePreview = ({ game, fullsize }) => {
  const { slug, name, background_image: image, added, blurDataURL } = game

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Link
        href={`/games/${slug}`}
        className={cn(css.card, fullsize && css.fullcard)}
      >

        <div className={cn(css.image, fullsize && css.fullimage)}>
          {image && (
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              placeholder={blurDataURL && 'blur'}
              blurDataURL={blurDataURL}
            />

          )}
        </div>
        <span className={cn(css.title, fullsize && css.absolutetitle)}>
          {name}
          {fullsize && (
            <span className={css.added}>
              <FaEye />
              {added}
            </span>
          )}
        </span>

      </Link>
    </ErrorBoundary>
  )
}
