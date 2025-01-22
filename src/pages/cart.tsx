import { GetServerSidePropsContext } from 'next'

import { gamesMapper, highlightMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

import Cart, { CartProps } from 'templates/Cart'
import { getRecomended } from 'mock/game'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  const recommended = getRecomended()

  return {
    props: {
      session,
      recommendedTitle: recommended.title,
      recommendedGames: gamesMapper(recommended.games),
      recommendedHighlight: highlightMapper(recommended.highlight)
    }
  }
}
