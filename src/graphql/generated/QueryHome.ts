/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";
import { QueryGameBySlug_games_categories, QueryGameBySlug_games_platforms } from "./QueryGameBySlug";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_Section {
  title: string | null;
  highlight: Query_Highlight | null;
}

export interface QueryHome_Popular {
  title: string | null;
  highlight: Query_Highlight | null;
  games: Query_Games[] | null
} 

export interface Query_Ribbon {
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface QueryHome_Sections {
  newGames: QueryHome_Section | null;
  popularGames: QueryHome_Popular | null;
  upcomingGames: QueryHome_Section | null;
  freeGames: QueryHome_Section | null;
}

export interface QueryHome {
  banners: QueryHome_Banners[];
  newGames: Query_Games[];
  upcomingGames: Query_Games[];
  freeGames: Query_Games[];
  sections: QueryHome_Sections | null;
}

export interface QueryHomeVariables {
  date: any;
}

export interface Query_Highlight {
  title: string;
  subtitle: string;
  background: Query_Image | null;
  floatImage: Query_Image | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface Query_Image {
  url: string;
}

export interface Query_Developers {
  name: string;
}

export interface Query_Games {
  id: string;
  name: string;
  slug: string;
  cover: Query_Image | null;
  developers: Query_Developers[];
  promotionalPrice?: number
  platforms: QueryGameBySlug_games_platforms[]
  categories: QueryGameBySlug_games_categories[];
  price: number;
}

export interface QueryHome_Button {
  label: string;
  link: string;
}

export interface QueryHome_Banners {
  image: Query_Image | null;
  title: string;
  subtitle: string;
  button: QueryHome_Button | null;
  ribbon: Query_Ribbon | null;
}
