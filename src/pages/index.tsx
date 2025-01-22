import Home, { HomeTemplateProps } from 'templates/Home'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'
import { getHome } from 'mock/home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const { banners, newGames, upcomingGames, freeGames, sections } = getHome()

  return {
    revalidate: 10,
    props: {
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
