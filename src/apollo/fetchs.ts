import { gql } from '@apollo/client';

export const LOGIN = gql`
  query Login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      token
    }
  }
`;
