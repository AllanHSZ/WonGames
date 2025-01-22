import Success, { SuccessTemplateProps } from 'templates/Success'

import { gamesMapper, highlightMapper } from 'utils/mappers'
import { getRecomended } from 'mock/game'

export default function SuccessPage(props: SuccessTemplateProps) {
  return <Success {...props} />
}

export async function getStaticProps() {
  const recommended = getRecomended()

  return {
    revalidate: 60 * 60,
    props: {
      recommendedTitle: recommended?.title,
      recommendedGames: gamesMapper(recommended?.games),
      recommendedHighlight: highlightMapper(recommended?.highlight)
    }
  }
}
