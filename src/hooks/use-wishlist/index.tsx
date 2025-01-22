import { useState, createContext, useContext, useEffect } from 'react'

import { gamesMapper } from 'utils/mappers'
import { GameCardProps } from 'components/GameCard'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { Query_Games } from 'graphql/generated/QueryHome'
import { SimpleGameMock } from 'mock/game'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WISHLIST_KEY = 'wishItems'

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlistItems, setWishlistItems] = useState<Query_Games[]>([])

  useEffect(() => {
    const ids = getStorageItem(WISHLIST_KEY)
    const games = ids?.map((id) => SimpleGameMock[id])

    setWishlistItems(games || [])
  }, [])

  const updateList = (games: Query_Games[]) => {
    const ids = games.map((game) => game.id)
    setStorageItem(WISHLIST_KEY, ids)
    setWishlistItems(games)
  }

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  const addToWishlist = (id: string) => {
    const items = [...wishlistItems, SimpleGameMock[id]]
    updateList(items)
  }

  const removeFromWishlist = (id: string) => {
    updateList(wishlistItems.filter((item) => item.id !== id))
  }

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: false
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
