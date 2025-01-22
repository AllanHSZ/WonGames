import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from 'graphql/generated/globalTypes'

const Highlight = {
  cyberpunk: {
    title: 'Cyberpunk 2077',
    subtitle:
      'Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.',
    background: {
      url: 'https://images.gog-statics.com/90b287f4b41f72d83b72fc6bb282f423e7672fc9709351c8be4702ea502b7d63_bg_crop_1680x655.jpg'
    },
    floatImage: {
      url: 'https://images.gog-statics.com/7550dba3c65c44375b3e265301d75f80d4ecab4ff5f53c57e831fe59a9824a01_product_card_v2_logo_480x285.png'
    },
    buttonLabel: 'Buy now',
    buttonLink: 'game/cyberpunk-2077',
    alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT.right
  },
  roxville: {
    title: 'Boxville 2 Demo',
    subtitle:
      'Boxville 2, from Triomatica Games, is the next part of an adventure game about cans living in a box city.',
    background: {
      url: 'https://images.gog-statics.com/528eb04593c9f305e8f4669d719fd43d48bfcab99d78d2cd51cd27b729870e34_bg_crop_1920x655.jpg'
    },
    floatImage: {
      url: 'https://images.gog-statics.com/26287e71e10a53134d578fabe99567bc2a0e88981be4ad9ec20d838170f68299_product_card_v2_logo_480x285.png'
    },
    buttonLabel: 'Play now',
    buttonLink: 'game/boxville-2-demo',
    alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT.left
  },
  tombraider: {
    title: 'Tomb Raider IV-VI Remastered',
    subtitle:
      'Play the next series of Tomb Raider adventures in this remastered collection of the Darkness Trilogy.',
    background: {
      url: 'https://images.gog-statics.com/7948a41a05c5977046373e9748f87fde1ae18d1964f5cd8627458fd956cc4909_bg_crop_1680x655.jpg'
    },
    floatImage: {
      url: 'https://images.gog-statics.com/1da007f2fc1c31f13471995151f09d1db4fa167963503d8528c57a29be5975af_product_card_v2_logo_480x285.png'
    },
    buttonLabel: 'Preorder now',
    buttonLink: 'game/tomb-raider-iv-vi-remastered',
    alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT.right
  }
}

export default Highlight
