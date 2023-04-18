import ReactPaginate from 'react-paginate'
import React, { useEffect, useState } from 'react'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import { Filter } from '@/components/Filter'
import { GamesGrid } from '@/components/GamesGrid'
import css from './styles.module.css'

export const PaginatedGames = ({ itemsPerPage, initial }) => {
  const [data, setData] = useState(initial || null)
  const { count, results, next, previous } = data || {}
  const [loading, setLoading] = useState(false)
  const [force, setForce] = useState(0)
  const [pageCount, setPageCount] = useState(0)

  const fetchPage = async (page, selectedGenre) => {
    setLoading(true)
    // eslint-disable-next-line no-unused-expressions
    selectedGenre && setForce(0)
    const url = next
      ? `${next}&page=${page + 1}${selectedGenre ? `&genres=${selectedGenre}` : ''}`
      : `${previous}&page=${page + 1}${selectedGenre ? `&genres=${selectedGenre}` : ''}`
    try {
      const res = await fetch(url)
      const json = await res.json()
      setLoading(false)
      setData(json)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    setPageCount(Math.ceil(count / itemsPerPage))
  }, [itemsPerPage, count])

  const handlePageClick = (event) => {
    if (typeof window === 'object') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    fetchPage(event.selected)
    setForce(event.selected)
  }

  return (
    <>
      <Filter fetchGenres={fetchPage} />
      <div className={css.items}>
        <GamesGrid games={results} loading={loading} />
      </div>
      <ReactPaginate
        nextLabel={<MdOutlineNavigateNext />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<MdOutlineNavigateBefore />}
        pageClassName={css.pageItem}
        pageLinkClassName={css.pageLink}
        previousLinkClassName={css.icon}
        nextLinkClassName={css.icon}
        breakLabel="..."
        breakClassName={css.break}
        breakLinkClassName={css.pageLink}
        containerClassName={css.pagination}
        activeClassName={css.active}
        renderOnZeroPageCount={null}
        forcePage={force}
      />
    </>
  )
}
