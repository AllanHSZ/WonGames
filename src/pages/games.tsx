import {
  genreFields,
  platformFields,
  priceFields,
  sortFields
} from 'utils/filter/fields'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import { GetServerSidePropsContext } from 'next'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const filterPrice = {
    title: 'Price',
    name: 'price_lte',
    type: 'radio',
    fields: priceFields
  }

  const filterPlatforms = {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields: platformFields
  }

  const filterSort = {
    title: 'Sort by price',
    name: 'sort',
    type: 'radio',
    fields: sortFields
  }

  const filterCategories = {
    title: 'Genres',
    name: 'categories',
    type: 'checkbox',
    fields: genreFields
  }

  const filterItems = [
    filterSort,
    filterPrice,
    filterPlatforms,
    filterCategories
  ]

  return {
    props: {
      filterItems
    }
  }
}
