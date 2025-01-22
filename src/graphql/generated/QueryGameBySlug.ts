/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_GAME_RATING } from "./globalTypes";
import { Query_Image } from "./QueryHome";

// ====================================================
// GraphQL query operation: QueryGameBySlug
// ====================================================

export interface QueryGameBySlug_games_gallery {
  src: string;
  label: string | null;
}


export interface QueryGameBySlug_games_developers {
  name: string;
}

export interface QueryGameBySlug_games_publisher {
  name: string;
}

export interface QueryGameBySlug_games_categories {
  name: string;
}

export interface QueryGameBySlug_games_platforms {
  name: string;
}

export interface QueryGameBySlug_Game {
  id: string;
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: ENUM_GAME_RATING | null;
  release_date: any | null;
  gallery: QueryGameBySlug_games_gallery[];
  cover: Query_Image | null;
  developers: QueryGameBySlug_games_developers[];
  publisher: QueryGameBySlug_games_publisher | null;
  categories: QueryGameBySlug_games_categories[];
  platforms: QueryGameBySlug_games_platforms[];
}

export interface QueryGameBySlug {
  games: QueryGameBySlug[];
}

export interface QueryGameBySlugVariables {
  slug: string;
}
