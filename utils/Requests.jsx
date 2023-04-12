const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = 'https://rawg.io/api'
const today = new Date()

// get trending games
export const fetchTrending = `${BASE_URL}/games?dates=${today.getFullYear()}-${(
  `0${
    today.getMonth() + 1}`
).slice(-2)}-10,${today.getFullYear() + 1}-${(
  `0${
    today.getMonth() + 1}`
).slice(-2)}-10&ordering=-added&key=${API_KEY}`

// get game with slug
export const fetchGameSlug = (slug) => `${BASE_URL}/games/${slug}?&key=${API_KEY}`

// get creators
export const fetchCreators = `${BASE_URL}/creators?page_size=20&key=${API_KEY}`

// find creator
export const fetchFindCreator = (id) => `${BASE_URL}/creators/${id}?key=${API_KEY}`

// get creator's game
export const fetchFindCreatorGame = (id) => `${BASE_URL}/games?key=${API_KEY}&creators=${id}`

// get all games
export const fetchAllGames = `${BASE_URL}/games?key=${API_KEY}&ordering=-added&page_size=12`

// get game screenshots
export const fetchGameScreenshots = (slug) => `${BASE_URL}/games/${slug}/screenshots?&key=${API_KEY}`

// search games
export const fetchSearchGames = (searchTerm) => `${BASE_URL}/games?key=${API_KEY}&search=${searchTerm}&page_size=10`
