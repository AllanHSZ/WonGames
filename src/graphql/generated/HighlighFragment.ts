/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: HighlighFragment
// ====================================================

export interface HighlighFragment_background {
  __typename: "UploadFile";
  url: string;
}

export interface HighlighFragment_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface HighlighFragment {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HighlighFragment_background | null;
  floatImage: HighlighFragment_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}
