import { gql } from '../../__generated__';

export const GET_AVAILABLE_STUDENT_TEST_PROCESSES = gql(`
  query GetAvailableStudentTestProcesses {
    getAvailableStudentTestProcesses {
      title
      id
      StudentTestVariant {
        id
        title
      }
      StudentTest {
        id
        dateStart
        dateEnd
      }
    }
  }
`);

export const GET_STUDENT_TEST_PROCESS_MEMBERS = gql(`
  query GetStudentTestProcessMembers($studentTestProcessId: Int!) {
    getStudentTestProcessMembers(studentTestProcessId: $studentTestProcessId) {
      passbookNumber
      name
      StudentTest {
        id
        dateStart
        dateEnd
      }
      Group {
        title
        id
      }
    }
  }
`);

export const GET_STUDENT_TEST_PROCESSES = gql(`
  query GetStudentTestProcesses {
    getStudentTestProcesses {
      id
      title
      dateStart
      dateEnd
      StudentTestVariant {
        id
        title
      }
    }
  }
`);

export const FINISH_STUDENT_TEST_PROCESS = gql(`
  mutation FinishStudentTestProcess($studentTestProcessId: Int!) {
    finishStudentTestProcess(studentTestProcessId: $studentTestProcessId)
  }
`);

export const START_STUDENT_TEST_PROCESS = gql(`
  mutation StartStudentTestProcess(
    $studentTestVariantId: Int!
    $title: String!
    $studentPassbookNumbers: [Int!]!
  ) {
    startStudentTestProcess(
      studentTestVariantId: $studentTestVariantId
      title: $title
      studentPassbookNumbers: $studentPassbookNumbers
    )
  }
`);
