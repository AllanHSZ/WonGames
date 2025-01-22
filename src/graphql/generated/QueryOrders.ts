/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { QueryGames_games } from "./QueryGames";

// ====================================================
// GraphQL query operation: QueryOrders
// ====================================================

export interface QueryOrders_orders {
  id: string;
  created_at: any;
  card_brand: string | null;
  card_last4: string | null;
  games: QueryGames_games[];
}

export interface QueryOrders {
  orders: QueryOrders_orders[];
}

export interface QueryOrdersVariables {
  identifier: string;
}
