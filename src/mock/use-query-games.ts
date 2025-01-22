import { useMemo, useState } from 'react'
import { SimpleGameMock } from './game'

type useQueryGamesProps = {
  notifyOnNetworkStatusChange?: boolean
  variables: {
    limit: number
    where?: {
      price_lte: string
      platforms?: {
        name_contains: string | string[]
      }
      categories?: {
        name_contains: string | string[]
      }
    }
    start?: number
    sort?: string | null
  }
}

export function useQueryGames({ variables }: useQueryGamesProps) {
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(variables.limit || 15)

  const games = useMemo(() => {
    let games = Object.values(SimpleGameMock)

    const where = variables.where
    if (where?.price_lte) {
      const price = parseInt(where.price_lte)
      games = games.filter((game) => game.price <= price)
    }

    const plaforms = where?.platforms?.name_contains
    if (plaforms) {
      const items = Array.isArray(plaforms) ? plaforms : [plaforms]
      games = games.filter((game) =>
        game.platforms.some(({ name }) => items.includes(name))
      )
    }

    const categories = where?.categories?.name_contains
    if (categories) {
      const items = Array.isArray(categories) ? categories : [categories]
      games = games.filter((game) =>
        game.categories.some(({ name }) => items.includes(name.toLowerCase()))
      )
    }

    if (!variables.sort) return games

    if (variables.sort === 'price:desc') {
      return games.sort((a, b) => (a.price > b.price ? -1 : 1))
    }

    return games.sort((a, b) => (a.price > b.price ? 1 : -1))
  }, [variables.sort, variables.where])

  console.log('variables', variables)

  return {
    loading,
    data: {
      games: games.slice(0, limit),
      gamesConnection: { values: games }
    },
    fetchMore: async ({ variables }: useQueryGamesProps) => {
      setLoading(true)

      await new Promise((accept) => setTimeout(() => accept(null), 3000))
      setLimit((current) => current + (variables.limit || 15))

      setLoading(false)
    }
  }
}
