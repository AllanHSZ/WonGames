import { gql } from '@apollo/client'

export const HighlightFragment = gql`
  fragment HighlighFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatImage {
      url
    }
    buttonLabel
    buttonLink
    alignment
  }
`
