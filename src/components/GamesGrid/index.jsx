import cn from 'classnames'
import { GamePreview } from '../GamePreview'
import css from './styles.module.css'

export const GamesGrid = ({ games, loading }) => (
  <div className={cn(css.grid, loading && css.loading)}>
    {games?.map((game) => <GamePreview key={game.id} game={game} />)}
  </div>
)
