import { gql } from '../../__generated__';

export const GET_STUDENTS = gql(`
    query GetStudents {
        getStudents {
            passbookNumber
            name
            Group {
                id
                title
            }
        }
    }
`);

export const GET_STUDENT_GROUPS = gql(`
    query GetStudentGroups {
        getStudentGroups {
            id
            title
        }
    }
`);

export const CREATE_STUDENT = gql(`
    mutation CreateStudent($passbookNumber: Int!, $name: String!, $groupId: Int!, $login: String!, $password: String!) {
        createStudent(passbookNumber: $passbookNumber, name: $name, groupId: $groupId, login: $login, password: $password) {
            passbookNumber
            name
            Group {
                id
                title
            }
        }
    }
`);

export const CREATE_STUDENT_GROUP = gql(`
    mutation CreateStudentGroup($title: String!) {
        createStudentGroup(title: $title) {
            id
            title
        }
    }
`);

export const DELETE_STUDENT = gql(`
    mutation DeleteStudent($studentId: Int!) {
        deleteStudent(studentId: $studentId)
    }
`);
