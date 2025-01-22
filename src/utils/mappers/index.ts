import {
  Query_Games,
  Query_Highlight,
  QueryHome_Banners
} from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'

import { getImageUrl } from 'utils/getImageUrl '
import formatPrice from 'utils/format-price'
import { GameCardProps } from 'components/GameCard'
import { OrderProps } from 'components/OrdersList'

export const bannerMapper = (banners: QueryHome_Banners[]) => {
  return banners.map((banner) => ({
    img: getImageUrl(banner.image?.url),
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }))
}

export const gamesMapper = (games: Query_Games[] | null | undefined) => {
  return games
    ? games.map<GameCardProps>((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: getImageUrl(game.cover!.url)!,
        promotionalPrice: game.promotionalPrice || 0,
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: Query_Highlight | null | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: getImageUrl(highlight.background?.url),
        floatImage: getImageUrl(highlight.floatImage?.url),
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
}

export const cartMapper = (games: Query_Games[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: getImageUrl(game.cover?.url)!,
        title: game.name,
        price: formatPrice(game.price)
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[]): OrderProps[] => {
  return orders
    ? orders.map<OrderProps>((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: `/img/cards/${order.card_brand}.png`,
            number: order.card_last4 ? `**** **** **** 1234` : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          games: order.games.map((game) => ({
            id: game.id,
            title: game.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: getImageUrl(game.cover?.url)!,
            price: formatPrice(game.price)
          }))
        }
      })
    : []
}
