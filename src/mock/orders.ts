import { CartItem } from 'hooks/use-cart'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { APP_KEY, getStorageItem, setStorageItem } from 'utils/localStorage'
import { SimpleGameMock } from './game'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'

export const ORDER_KEY = 'ORDERS'

export interface Orders {
  id: string
  created_at: unknown
  card_brand?: string
  card_last4?: string
  games: QueryGames_games[]
}

async function timeout() {
  await new Promise((sucess) => {
    setTimeout(() => sucess('success'), 2000)
  })
}

type CreateOrderProps = {
  user: string
  items: CartItem[]
  card?: StripeCardElementChangeEvent
}

export async function createOrder({ items, card, user }: CreateOrderProps) {
  await timeout()
  const orders = getOrders()

  if (!orders[user]) orders[user] = []

  orders[user].push({
    id: Object.values(orders).length.toString(),
    created_at: Date.now(),
    card_brand: card?.brand || null,
    card_last4: card ? '1234' : null,
    games: items.map((item) => item.id)
  })

  setStorageItem(ORDER_KEY, orders)
}

export function getUsersAsString() {
  if (typeof window === 'undefined') return []

  return window.localStorage.getItem(`${APP_KEY}_${ORDER_KEY}`) || []
}

export function getUserOrders(user: string): QueryOrders_orders[] {
  const orders = getOrders()

  if (!orders[user]) return []

  return orders[user].map((item) => ({
    ...item,
    games: item.games.map((game) => SimpleGameMock[game])
  }))
}

type Storege = {
  [key: string]: {
    id: string
    created_at: unknown
    card_brand: string | null
    card_last4: string | null
    games: string[]
  }[]
}

function getOrders() {
  return getStorageItem<Storege>(ORDER_KEY) || {}
}
