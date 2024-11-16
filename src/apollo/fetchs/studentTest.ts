import { gql } from '../../__generated__';

export const GET_STUDENT_TEST_QUESTIONS = gql(`
    query GetStudentTestQuestions($studentTestId: Int!) {
    getStudentTestQuestions(studentTestId: $studentTestId) {
        id
        title
        position
    }
  }
`);

export const GET_STUDENT_TEST_VARIANTS = gql(`
query GetStudentTestVariants {
  getStudentTestVariants {
      id
      title
    }
  }
`);

export const ANSWER_STUDENT_TEST_ONE = gql(`
  mutation AnswerStudentTestOne($studentTestId: Int!, $answers: [StudentTestOneAnswerInput!]!) {
    answerStudentTestOne(studentTestId: $studentTestId, answers: $answers)
  }
`);

export const ANSWER_STUDENT_TEST_TWO = gql(`
  mutation AnswerStudentTestTwo($studentTestId: Int!, $answers: [StudentTestTwoAnswerInput!]!) {
    answerStudentTestTwo(studentTestId: $studentTestId, answers: $answers)
  }
`);

export const ANSWER_STUDENT_TEST_THREE = gql(`
  mutation AnswerStudentTestThree($studentTestId: Int!, $fileBase64: String!) {
    answerStudentTestThree(studentTestId: $studentTestId, fileBase64: $fileBase64)
  }
`);

export const START_STUDENT_TEST = gql(`
  mutation StartStudentTest($studentTestProcessId: Int!) {
    startStudentTest(studentTestProcessId: $studentTestProcessId)
  }
`);

export const GET_STUDENT_TEST_BY_ID = gql(`
  query GetStudentTestById($studentTestId: Int!) {
    getStudentTestById(studentTestId: $studentTestId) {
      id
      passbookNumber
      studentTestProcessId
      dateStart
      dateEnd
      StudentTestVariant {
        id
        title
      }
    }
  }
`);
