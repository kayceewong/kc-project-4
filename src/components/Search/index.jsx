import { FiSearch } from 'react-icons/fi'
import { ImSpinner2 } from 'react-icons/im'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { fetchGamesSearch } from '../../utils/Requests'
import { Container } from '../Container'

import css from './styles.module.css'

export const Search = () => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [noResult, setNoResult] = useState(false)
  const [timer, setTimer] = useState(null)
  const ref = useRef()

  const callApi = async () => {
    fetch(fetchGamesSearch(inputValue))
      .then((res) => res.json())
      .then((json) => {
        setResults(json.results)
        setNoResult(json.count === 0)
        setLoading(false)
      })
  }

  const inputChanged = (e) => {
    setInputValue(e.target.value)

    if (e.target.value) setLoading(true)
    if (e.target.value === '') {
      setResults([])
      setNoResult(false)
      setLoading(false)
    }

    clearTimeout(timer)

    const newTimer = setTimeout(() => {
      if (e.target.value) callApi()
    }, 1000)

    setTimer(newTimer)
  }

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <div className={css.wrapper} ref={ref}>
      <button type="button" className={css.cta} onClick={() => setOpen((prev) => !prev)}>
        <FiSearch />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className={css.search}
            initial={{
              y: '-100%'
            }}
            animate={{
              y: 0
            }}
            exit={{
              y: '-100%'
            }}
            transition={{ duration: 0.4 }}
          >
            <Container>
              <div className={css.searchTerm}>
                <div className={css.icon}>
                  {loading ? (
                    <ImSpinner2 className={css.loading} />
                  ) : (
                    <FiSearch />
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className={css.input}
                  onChange={inputChanged}
                />
              </div>
              {results.map((game) => (
                (
                  <Link
                    href={`/Games/${game.slug}`}
                    key={game.id}
                    className={css.result}
                    onClick={() => setOpen(false)}
                    passHref
                  >
                    <FaLongArrowAltRight />
                    {game.name}
                  </Link>
                )
              ))}
              {noResult && (
                <p className={css.error}>
                  There were no results for your searched term
                </p>
              )}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
