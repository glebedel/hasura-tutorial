import gql from 'graphql-tag';

export const GET_PIXELS = gql`
  query GetPixels {
    pixels(order_by: { id: asc }) {
      id
      color
    }
  }
`;

export const SUBSCRIPTION_GET_PIXELS = gql`
  subscription GetPixels {
    pixels(order_by: { id: asc }) {
      id
      color
    }
  }
`;

export const UPDATE_COLOR = gql`
  mutation changesPixelColor($id: Int!, $color: String!) {
    update_pixels(where: { id: { _eq: $id } }, _set: { color: $color }) {
      returning {
        color
        id
      }
    }
  }
`;
