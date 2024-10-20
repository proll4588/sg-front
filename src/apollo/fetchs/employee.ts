import { gql } from '../../__generated__';

export const GET_EMPLOYEE_POSITIONS = gql(`
    query GetEmployeePositions {
        getEmployeePositions {
            id
            title
        }
    }
`);

export const GET_EMPLOYEES = gql(`
        query GetEmployees {
            getEmployees {
                id
                EmploeePosition {
                    id
                    title
                }
                User {
                    id
                    login
                    Role {
                        id
                        title
                    }
                }
                name
                email
            }
        }
`);

export const CREATE_EMPLOYEE_POSITION = gql(`
    mutation CreateEmployeePosition($title: String!) {
        createEmployeePosition(title: $title) {
            id
            title
        }
    }
`);

export const CREATE_EMPLOYEE = gql(`
    mutation CreateEmployee($login: String!, $password: String!, $positionId: Int!, $name: String!, $email: String!) {
        createEmployee(login: $login, password: $password, positionId: $positionId, name: $name, email: $email) {
            id
            EmploeePosition {
                id
                title
            }
            User {
                id
                login
                Role {
                    id
                    title
                }
            }
            name
            email
        }
    }
`);
