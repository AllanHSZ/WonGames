import {
  ENUM_COMPONENTPAGERIBBON_COLOR,
  ENUM_COMPONENTPAGERIBBON_SIZE
} from 'graphql/generated/globalTypes'
import { QueryHome, QueryHome_Banners } from 'graphql/generated/QueryHome'
import { SimpleGameMock as GamesMock } from './game'
import Highlight from './highlight'

export function getHome(): QueryHome {
  const coming = getUpcoming()

  return {
    banners: getBanners(),
    newGames: [
      GamesMock.legacyOfKain,
      GamesMock.rogueWaters,
      GamesMock.gris,
      GamesMock.aftermath,
      GamesMock.nightShiftNurses,
      GamesMock.symphonia
    ],
    upcomingGames: coming.games,
    freeGames: [
      GamesMock.anAmazingWizardDemo,
      GamesMock.citizenSleeper2StarwardVector,
      GamesMock.firewatch,
      GamesMock.dustborn,
      GamesMock.symphonia
    ],
    sections: {
      newGames: {
        title: 'New Games',
        highlight: null
      },
      popularGames: {
        title: 'Most Popular',
        highlight: Highlight.cyberpunk,
        games: [
          GamesMock.theWitcher3WildHunt,
          GamesMock.ultrakill,
          GamesMock.fallout4,
          GamesMock.tombRaiderGoty,
          GamesMock.gris
        ]
      },
      upcomingGames: {
        title: coming.title,
        highlight: coming.highlight
      },
      freeGames: {
        title: 'Free Games',
        highlight: Highlight.roxville
      }
    }
  }
}

export function getUpcoming(isGamePage?: boolean) {
  return {
    title: 'Upcoming Games',
    highlight: {
      ...Highlight.tombraider,
      buttonLink: isGamePage
        ? Highlight.tombraider.buttonLink.replace('game/', '')
        : Highlight.tombraider.buttonLink
    },
    games: [
      GamesMock.starWarsEpisode1JediPowerBattles,
      GamesMock.ultrakill,
      GamesMock.aftermath,
      GamesMock.gris,
      GamesMock.dustborn,
      GamesMock.citizenSleeper2StarwardVector
    ]
  }
}

export function getBanners(): QueryHome_Banners[] {
  return [
    {
      image: {
        url: 'https://images.gog-statics.com/6142569dc721f23b35277e83ac93173e472e36215f8c7b71dc005b132bda3319_bg_crop_1680x655.jpg'
      },
      title: "Baldur's Gate 3",
      subtitle:
        'Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.',
      button: {
        label: 'Buy now',
        link: '/game/baldurs-gate-iii'
      },
      ribbon: {
        text: 'New',
        color: ENUM_COMPONENTPAGERIBBON_COLOR.primary,
        size: ENUM_COMPONENTPAGERIBBON_SIZE.normal
      }
    },
    {
      image: {
        url: 'https://images.gog-statics.com/9424991433b75669ae54d96d9b963e81d004db27ce4398c3dd9cfcb898c56d1c_bg_crop_1680x655.jpg'
      },
      title: 'S.T.A.L.K.E.R. 2',
      subtitle:
        'Discover the legendary S.T.A.L.K.E.R. universe and experience.',
      button: {
        label: 'Buy now',
        link: '/game/stalker-2'
      },
      ribbon: {
        text: 'Play now',
        color: ENUM_COMPONENTPAGERIBBON_COLOR.secondary,
        size: ENUM_COMPONENTPAGERIBBON_SIZE.normal
      }
    },
    {
      image: {
        url: 'https://images.gog-statics.com/289e928b26e5abe852b36cad737d6ec7fc6a86e0e67236c504d288f7ae9e9e57_bg_crop_1680x655.jpg'
      },
      title: 'Dishonored 2',
      subtitle: 'Reprise your role as a supernatural assassin in Dishonored 2.',
      button: {
        label: 'Buy now',
        link: '/game/dishonored=2'
      },
      ribbon: {
        text: 'New',
        color: ENUM_COMPONENTPAGERIBBON_COLOR.primary,
        size: ENUM_COMPONENTPAGERIBBON_SIZE.normal
      }
    }
  ]
}
