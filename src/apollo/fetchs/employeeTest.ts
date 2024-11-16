import { gql } from '../../__generated__';

export const GET_EMPLOYEE_TEST_PROCESSES = gql(`
  query GetEmployeeTestProcesses {
    getEmployeeTestProcesses {
      title
      startDate
      id
      endDate
      User {
        id
        login
        Role {
          title
          id
        }
      }
      EmployeeProcessMembers {
        id
        employeeTestProcessId
        Employee {
          name
          id
          email
          User {
            id
            login
            Role {
              title
              id
            }
          }
          EmployeePosition {
            title
            id
          }
        }
      }
      EmployeeTestVariant {
        title
        id
      }
      EmployeeTest {
        startDate
        id
        endDate
        Employee {
          name
          id
          email
          User {
            login
            id
            Role {
              id
              title
            }
          }
          EmployeePosition {
            id
            title
          }
        }
        EmployeeTestVariant {
          id
          title
        }
        EmployeeTestAnswer {
          id
          answer
          EmployeeTestQuestion {
            id
            title
            position
          }
        }
      }
    }
  }
`);

export const FINISH_EMPLOYEE_TEST_PROCESS = gql(`
    mutation FinishEmployeeTestProcess($processId: Int!) {
      finishEmployeeTestProcess(processId: $processId)
    }
`);

export const GET_EMPLOYEE_TEST_VARIANTS = gql(`
    query GetEmployeeTestVariants {
        getEmployeeTestVariants {
            title
            id
        }
    }
`);

export const CREATE_EMPLOYEE_TEST_PROCESS = gql(`
    mutation CreateEmployeeTestProcess($employeeIds: [Int!]!, $title: String!, $testVariantId: Int!) {
  createEmployeeTestProcess(employeeIds: $employeeIds, title: $title, testVariantId: $testVariantId) {
    title
    startDate
    id
    endDate
    User {
      login
      id
      Role {
        title
        id
      }
    }
    EmployeeProcessMembers {
      id
      employeeTestProcessId
      Employee {
        name
        id
        email
        User {
          login
          id
          Role {
            title
            id
          }
        }
        EmployeePosition {
          title
          id
        }
      }
    }
    EmployeeTestVariant {
      title
      id
    }
  }
}
`);

export const GET_AVAILABLE_EMPLOYEE_TEST_PROCESSES = gql(`
    query GetAvailableEmployeeTestProcesses {
  getAvailableEmployeeTestProcesses {
    title
    startDate
    id
    endDate
    EmployeeTest {
      startDate
      id
      endDate
      EmployeeTestVariant {
        title
        id
      }
      EmployeeTestAnswer {
        id
        answer
        EmployeeTestQuestion {
          id
          title
          position
        }
      }
    }
    User {
      id
      login
      Role {
        id
        title
      }
    }
    EmployeeTestVariant {
      id
      title
    }
    EmployeeProcessMembers {
      id
      employeeTestProcessId
      Employee {
        id
        EmployeePosition {
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
  }
}
`);

export const GET_EMPLOYEE_TEST_QUESTIONS = gql(`
    query GetEmployeeTestQuestions($testId: Int!) {
      getEmployeeTestQuestions(testId: $testId) {
        id
        title
        position
      }
    }
`);

export const START_EMPLOYEE_TEST = gql(`
    mutation StartEmployeeTest($testProcessId: Int!) {
      startEmployeeTest(testProcessId: $testProcessId) {
        startDate
        id
        endDate
        EmployeeTestVariant {
          id
          title
        }
      }
    }
`);

export const GET_EMPLOYEE_TEST_PROCESS_FOR_TEST_PAGE = gql(`
    query GetEmployeeTestProcessById($processId: Int!) {
      getEmployeeTestProcessById(processId: $processId) {
        title
        startDate
        id
        endDate
        EmployeeTest {
          startDate
          id
          endDate
          EmployeeTestVariant {
            title
            id
          }
          EmployeeTestAnswer {
            id
            answer
            EmployeeTestQuestion {
              title
              position
              id
            }
          }
        }
        EmployeeTestVariant {
          title
          id
        }
      }
    }
`);

export const GET_EMPLOYEE_TEST_BY_PROCESS_ID = gql(`
    query GetEmployeeTestByProcessId($processId: Int!) {
      getEmployeeTestByProcessId(processId: $processId) {
        startDate
        id
        endDate
        EmployeeTestVariant {
          title
          id
        }
        EmployeeTestAnswer {
          id
          answer
          EmployeeTestQuestion {
            title
            position
            id
          }
        }
      }
    }
`);

export const GET_EMPLOYEE_TEST_BY_ID = gql(`
    query GetEmployeeTestById($testId: Int!) {
      getEmployeeTestById(testId: $testId) {
        startDate
        id
        endDate
        EmployeeTestVariant {
          title
          id
        }
        EmployeeTestAnswer {
          id
          answer
          EmployeeTestQuestion {
            id
            title
            position
          }
        }
      }
    }
`);

export const SEND_EMPLOYEE_TEST_ANSWERS = gql(`
    mutation AnswerEmployeeTest($testId: Int!, $answers: [CompleteEmployeeTestAnswer!]!) {
      answerEmployeeTest(testId: $testId, answers: $answers)
    }
`);
