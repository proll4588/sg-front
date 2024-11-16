import { gql } from '../../__generated__';

export const LOGIN = gql(`
    mutation Login($login: String!, $password: String!) {
      login(login: $login, password: $password) {
        token
      }
    }
`);

export const GET_USERS = gql(`
    query GetUsers {
        getUsers {
            id
            login
            Role {
                id
                title
            }
        }
    }
`);

export const GET_USER = gql(`
    query Query {
        getUser {
            login
            id
            Role {
                id
                title
            }
        }
    }
`);

export const GET_USERS_ROLES = gql(`
    query GetUsersRoles {
        getUsersRoles {
            id
            title
        }
    }
`);

export const CREATE_USER = gql(`
    mutation CreateUser($login: String!, $password: String!, $roleId: Int!) {
        createUser(login: $login, password: $password, roleId: $roleId) {
            id
        }
    }
`);

export const DELETE_USER = gql(`
    mutation DeleteUser($userId: Int!) {
        deleteUser(userId: $userId)
    }
`);
