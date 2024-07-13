import { gql } from '@apollo/client';

export const LOGIN = gql`
  query Login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      token
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    getUser {
      login
      id
      Role {
        id
        title
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers($roleId: Int) {
    getUsers(roleId: $roleId) {
      id
      login
      Role {
        id
        title
      }
    }
  }
`;

export const GET_USERS_ROLES = gql`
  query GetUsersRoles {
    getUsersRoles {
      id
      title
    }
  }
`;

export const REGISTRATION = gql`
  mutation Mutation($login: String!, $password: String!, $roleId: Int!) {
    registration(login: $login, password: $password, roleId: $roleId) {
      token
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($userId: Int!) {
    deleteUser(userId: $userId)
  }
`;
