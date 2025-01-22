import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Game, { GameTemplateProps } from 'templates/Game'
import { GameMock, getRecomended, SimpleGameMock } from 'mock/game'
import { getImageUrl } from 'utils/getImageUrl '
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { getUpcoming } from 'mock/home'

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  if (router.isFallback) return null

  return <Game {...props} />
}

// gerar em build time (/game/bla, /bame/foo ...)
export async function getStaticPaths() {
  const paths = Object.values(SimpleGameMock).map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.slug !== 'string') {
    return { notFound: true }
  }

  const game = GameMock[params?.slug]!

  if (!game) return { notFound: true }

  const coming = getUpcoming(true)
  const recommended = getRecomended()

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      cover: getImageUrl(game.cover?.url),
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: getImageUrl(image.src),
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map(({ name }) => name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map(({ name }) => name)
      },
      upcomingTitle: coming.title,
      upcomingGames: gamesMapper(coming.games),
      upcomingHighlight: highlightMapper(coming.highlight),
      recommendedTitle: recommended.title,
      recommendedGames: gamesMapper(recommended.games)
    }
  }
}
