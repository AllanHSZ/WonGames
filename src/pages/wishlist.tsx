import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import gamesMock from 'components/GameCardSlider/mock'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import { getRecomended } from 'mock/game'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  if (!session) return { props: {} }

  const recommended = getRecomended()

  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: recommended?.title,
      recommendedGames: gamesMapper(recommended?.games),
      recommendedHighlight: highlightMapper(recommended?.highlight)
    } as WishlistTemplateProps
  }
}
