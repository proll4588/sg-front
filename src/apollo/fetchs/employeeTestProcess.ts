import { gql } from '../../__generated__';

export const GET_EMPLOYEE_TEST_PROCESSES_RESULT = gql(`
    query GetEmployeeTestProcessResults($processId: Int!) {
        getEmployeeTestProcessResults(processId: $processId) {
            title
            value
        }
    }
`);
