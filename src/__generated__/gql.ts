/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query GetEmployees {\n        getEmployees {\n            name\n            id\n            email\n            EmployeePosition {\n                id\n                title\n            }\n        }\n    }\n": types.GetEmployeesDocument,
    "\n    query GetEmployeePositions {\n        getEmployeePositions {\n            id\n            title\n        }\n    }\n": types.GetEmployeePositionsDocument,
    "\n    mutation CreateEmployee($login: String!, $password: String!, $positionId: Int!, $name: String!, $email: String!) {\n        createEmployee(login: $login, password: $password, positionId: $positionId, name: $name, email: $email) {\n            name\n            id\n            email\n            EmployeePosition {\n                id\n                title\n            }\n        }\n    }\n": types.CreateEmployeeDocument,
    "\n    mutation DeleteEmployee($employeeId: Int!) {\n        deleteEmployee(employeeId: $employeeId)\n    }\n": types.DeleteEmployeeDocument,
    "\n    mutation CreateEmployeePosition($title: String!) {\n        createEmployeePosition(title: $title) {\n            id\n            title\n        }\n    }\n": types.CreateEmployeePositionDocument,
    "\n  query GetEmployeeTestProcesses {\n    getEmployeeTestProcesses {\n      title\n      startDate\n      id\n      endDate\n      User {\n        id\n        login\n        Role {\n          title\n          id\n        }\n      }\n      EmployeeProcessMembers {\n        id\n        employeeTestProcessId\n        Employee {\n          name\n          id\n          email\n          User {\n            id\n            login\n            Role {\n              title\n              id\n            }\n          }\n          EmployeePosition {\n            title\n            id\n          }\n        }\n      }\n      EmployeeTestVariant {\n        title\n        id\n      }\n      EmployeeTest {\n        startDate\n        id\n        endDate\n        Employee {\n          name\n          id\n          email\n          User {\n            login\n            id\n            Role {\n              id\n              title\n            }\n          }\n          EmployeePosition {\n            id\n            title\n          }\n        }\n        EmployeeTestVariant {\n          id\n          title\n        }\n        EmployeeTestAnswer {\n          id\n          answer\n          EmployeeTestQuestion {\n            id\n            title\n            position\n          }\n        }\n      }\n    }\n  }\n": types.GetEmployeeTestProcessesDocument,
    "\n    mutation FinishEmployeeTestProcess($processId: Int!) {\n      finishEmployeeTestProcess(processId: $processId)\n    }\n": types.FinishEmployeeTestProcessDocument,
    "\n    query GetEmployeeTestVariants {\n        getEmployeeTestVariants {\n            title\n            id\n        }\n    }\n": types.GetEmployeeTestVariantsDocument,
    "\n    mutation CreateEmployeeTestProcess($employeeIds: [Int!]!, $title: String!, $testVariantId: Int!) {\n  createEmployeeTestProcess(employeeIds: $employeeIds, title: $title, testVariantId: $testVariantId) {\n    title\n    startDate\n    id\n    endDate\n    User {\n      login\n      id\n      Role {\n        title\n        id\n      }\n    }\n    EmployeeProcessMembers {\n      id\n      employeeTestProcessId\n      Employee {\n        name\n        id\n        email\n        User {\n          login\n          id\n          Role {\n            title\n            id\n          }\n        }\n        EmployeePosition {\n          title\n          id\n        }\n      }\n    }\n    EmployeeTestVariant {\n      title\n      id\n    }\n  }\n}\n": types.CreateEmployeeTestProcessDocument,
    "\n    query GetAvailableEmployeeTestProcesses {\n  getAvailableEmployeeTestProcesses {\n    title\n    startDate\n    id\n    endDate\n    EmployeeTest {\n      startDate\n      id\n      endDate\n      EmployeeTestVariant {\n        title\n        id\n      }\n      EmployeeTestAnswer {\n        id\n        answer\n        EmployeeTestQuestion {\n          id\n          title\n          position\n        }\n      }\n    }\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n    EmployeeTestVariant {\n      id\n      title\n    }\n    EmployeeProcessMembers {\n      id\n      employeeTestProcessId\n      Employee {\n        id\n        EmployeePosition {\n          id\n          title\n        }\n        User {\n          id\n          login\n          Role {\n            id\n            title\n          }\n        }\n        name\n        email\n      }\n    }\n  }\n}\n": types.GetAvailableEmployeeTestProcessesDocument,
    "\n    query GetEmployeeTestQuestions($testId: Int!) {\n      getEmployeeTestQuestions(testId: $testId) {\n        id\n        title\n        position\n      }\n    }\n": types.GetEmployeeTestQuestionsDocument,
    "\n    mutation StartEmployeeTest($testProcessId: Int!) {\n      startEmployeeTest(testProcessId: $testProcessId) {\n        startDate\n        id\n        endDate\n        EmployeeTestVariant {\n          id\n          title\n        }\n      }\n    }\n": types.StartEmployeeTestDocument,
    "\n    query GetEmployeeTestProcessById($processId: Int!) {\n      getEmployeeTestProcessById(processId: $processId) {\n        title\n        startDate\n        id\n        endDate\n        EmployeeTest {\n          startDate\n          id\n          endDate\n          EmployeeTestVariant {\n            title\n            id\n          }\n          EmployeeTestAnswer {\n            id\n            answer\n            EmployeeTestQuestion {\n              title\n              position\n              id\n            }\n          }\n        }\n        EmployeeTestVariant {\n          title\n          id\n        }\n      }\n    }\n": types.GetEmployeeTestProcessByIdDocument,
    "\n    query GetEmployeeTestByProcessId($processId: Int!) {\n      getEmployeeTestByProcessId(processId: $processId) {\n        startDate\n        id\n        endDate\n        EmployeeTestVariant {\n          title\n          id\n        }\n        EmployeeTestAnswer {\n          id\n          answer\n          EmployeeTestQuestion {\n            title\n            position\n            id\n          }\n        }\n      }\n    }\n": types.GetEmployeeTestByProcessIdDocument,
    "\n    query GetEmployeeTestById($testId: Int!) {\n      getEmployeeTestById(testId: $testId) {\n        startDate\n        id\n        endDate\n        EmployeeTestVariant {\n          title\n          id\n        }\n        EmployeeTestAnswer {\n          id\n          answer\n          EmployeeTestQuestion {\n            id\n            title\n            position\n          }\n        }\n      }\n    }\n": types.GetEmployeeTestByIdDocument,
    "\n    mutation AnswerEmployeeTest($testId: Int!, $answers: [CompleteEmployeeTestAnswer!]!) {\n      answerEmployeeTest(testId: $testId, answers: $answers)\n    }\n": types.AnswerEmployeeTestDocument,
    "\n    query GetEmployeeTestProcessResults($processId: Int!) {\n        getEmployeeTestProcessResults(processId: $processId) {\n            title\n            value\n        }\n    }\n": types.GetEmployeeTestProcessResultsDocument,
    "\n    query GetStudents {\n        getStudents {\n            passbookNumber\n            name\n            Group {\n                id\n                title\n            }\n        }\n    }\n": types.GetStudentsDocument,
    "\n    query GetStudentGroups {\n        getStudentGroups {\n            id\n            title\n        }\n    }\n": types.GetStudentGroupsDocument,
    "\n    mutation CreateStudent($passbookNumber: Int!, $name: String!, $groupId: Int!, $login: String!, $password: String!) {\n        createStudent(passbookNumber: $passbookNumber, name: $name, groupId: $groupId, login: $login, password: $password) {\n            passbookNumber\n            name\n            Group {\n                id\n                title\n            }\n        }\n    }\n": types.CreateStudentDocument,
    "\n    mutation CreateStudentGroup($title: String!) {\n        createStudentGroup(title: $title) {\n            id\n            title\n        }\n    }\n": types.CreateStudentGroupDocument,
    "\n    mutation DeleteStudent($studentId: Int!) {\n        deleteStudent(studentId: $studentId)\n    }\n": types.DeleteStudentDocument,
    "\n    query GetStudentTestQuestions($studentTestId: Int!) {\n    getStudentTestQuestions(studentTestId: $studentTestId) {\n        id\n        title\n        position\n    }\n  }\n": types.GetStudentTestQuestionsDocument,
    "\nquery GetStudentTestVariants {\n  getStudentTestVariants {\n      id\n      title\n    }\n  }\n": types.GetStudentTestVariantsDocument,
    "\n  mutation AnswerStudentTestOne($studentTestId: Int!, $answers: [StudentTestOneAnswerInput!]!) {\n    answerStudentTestOne(studentTestId: $studentTestId, answers: $answers)\n  }\n": types.AnswerStudentTestOneDocument,
    "\n  mutation AnswerStudentTestTwo($studentTestId: Int!, $answers: [StudentTestTwoAnswerInput!]!) {\n    answerStudentTestTwo(studentTestId: $studentTestId, answers: $answers)\n  }\n": types.AnswerStudentTestTwoDocument,
    "\n  mutation AnswerStudentTestThree($studentTestId: Int!, $fileBase64: String!) {\n    answerStudentTestThree(studentTestId: $studentTestId, fileBase64: $fileBase64)\n  }\n": types.AnswerStudentTestThreeDocument,
    "\n  mutation StartStudentTest($studentTestProcessId: Int!) {\n    startStudentTest(studentTestProcessId: $studentTestProcessId)\n  }\n": types.StartStudentTestDocument,
    "\n  query GetStudentTestById($studentTestId: Int!) {\n    getStudentTestById(studentTestId: $studentTestId) {\n      id\n      passbookNumber\n      studentTestProcessId\n      dateStart\n      dateEnd\n      StudentTestVariant {\n        id\n        title\n      }\n    }\n  }\n": types.GetStudentTestByIdDocument,
    "\n  query GetAvailableStudentTestProcesses {\n    getAvailableStudentTestProcesses {\n      title\n      id\n      StudentTestVariant {\n        id\n        title\n      }\n      StudentTest {\n        id\n        dateStart\n        dateEnd\n      }\n    }\n  }\n": types.GetAvailableStudentTestProcessesDocument,
    "\n  query GetStudentTestProcessMembers($studentTestProcessId: Int!) {\n    getStudentTestProcessMembers(studentTestProcessId: $studentTestProcessId) {\n      passbookNumber\n      name\n      StudentTest {\n        id\n        dateStart\n        dateEnd\n      }\n      Group {\n        title\n        id\n      }\n    }\n  }\n": types.GetStudentTestProcessMembersDocument,
    "\n  query GetStudentTestProcesses {\n    getStudentTestProcesses {\n      id\n      title\n      dateStart\n      dateEnd\n      StudentTestVariant {\n        id\n        title\n      }\n    }\n  }\n": types.GetStudentTestProcessesDocument,
    "\n  mutation FinishStudentTestProcess($studentTestProcessId: Int!) {\n    finishStudentTestProcess(studentTestProcessId: $studentTestProcessId)\n  }\n": types.FinishStudentTestProcessDocument,
    "\n  mutation StartStudentTestProcess(\n    $studentTestVariantId: Int!\n    $title: String!\n    $studentPassbookNumbers: [Int!]!\n  ) {\n    startStudentTestProcess(\n      studentTestVariantId: $studentTestVariantId\n      title: $title\n      studentPassbookNumbers: $studentPassbookNumbers\n    )\n  }\n": types.StartStudentTestProcessDocument,
    "\n    mutation Login($login: String!, $password: String!) {\n      login(login: $login, password: $password) {\n        token\n      }\n    }\n": types.LoginDocument,
    "\n    query GetUsers {\n        getUsers {\n            id\n            login\n            Role {\n                id\n                title\n            }\n        }\n    }\n": types.GetUsersDocument,
    "\n    query Query {\n        getUser {\n            login\n            id\n            Role {\n                id\n                title\n            }\n        }\n    }\n": types.QueryDocument,
    "\n    query GetUsersRoles {\n        getUsersRoles {\n            id\n            title\n        }\n    }\n": types.GetUsersRolesDocument,
    "\n    mutation CreateUser($login: String!, $password: String!, $roleId: Int!) {\n        createUser(login: $login, password: $password, roleId: $roleId) {\n            id\n        }\n    }\n": types.CreateUserDocument,
    "\n    mutation DeleteUser($userId: Int!) {\n        deleteUser(userId: $userId)\n    }\n": types.DeleteUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetEmployees {\n        getEmployees {\n            name\n            id\n            email\n            EmployeePosition {\n                id\n                title\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetEmployees {\n        getEmployees {\n            name\n            id\n            email\n            EmployeePosition {\n                id\n                title\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetEmployeePositions {\n        getEmployeePositions {\n            id\n            title\n        }\n    }\n"): (typeof documents)["\n    query GetEmployeePositions {\n        getEmployeePositions {\n            id\n            title\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateEmployee($login: String!, $password: String!, $positionId: Int!, $name: String!, $email: String!) {\n        createEmployee(login: $login, password: $password, positionId: $positionId, name: $name, email: $email) {\n            name\n            id\n            email\n            EmployeePosition {\n                id\n                title\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateEmployee($login: String!, $password: String!, $positionId: Int!, $name: String!, $email: String!) {\n        createEmployee(login: $login, password: $password, positionId: $positionId, name: $name, email: $email) {\n            name\n            id\n            email\n            EmployeePosition {\n                id\n                title\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteEmployee($employeeId: Int!) {\n        deleteEmployee(employeeId: $employeeId)\n    }\n"): (typeof documents)["\n    mutation DeleteEmployee($employeeId: Int!) {\n        deleteEmployee(employeeId: $employeeId)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateEmployeePosition($title: String!) {\n        createEmployeePosition(title: $title) {\n            id\n            title\n        }\n    }\n"): (typeof documents)["\n    mutation CreateEmployeePosition($title: String!) {\n        createEmployeePosition(title: $title) {\n            id\n            title\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEmployeeTestProcesses {\n    getEmployeeTestProcesses {\n      title\n      startDate\n      id\n      endDate\n      User {\n        id\n        login\n        Role {\n          title\n          id\n        }\n      }\n      EmployeeProcessMembers {\n        id\n        employeeTestProcessId\n        Employee {\n          name\n          id\n          email\n          User {\n            id\n            login\n            Role {\n              title\n              id\n            }\n          }\n          EmployeePosition {\n            title\n            id\n          }\n        }\n      }\n      EmployeeTestVariant {\n        title\n        id\n      }\n      EmployeeTest {\n        startDate\n        id\n        endDate\n        Employee {\n          name\n          id\n          email\n          User {\n            login\n            id\n            Role {\n              id\n              title\n            }\n          }\n          EmployeePosition {\n            id\n            title\n          }\n        }\n        EmployeeTestVariant {\n          id\n          title\n        }\n        EmployeeTestAnswer {\n          id\n          answer\n          EmployeeTestQuestion {\n            id\n            title\n            position\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEmployeeTestProcesses {\n    getEmployeeTestProcesses {\n      title\n      startDate\n      id\n      endDate\n      User {\n        id\n        login\n        Role {\n          title\n          id\n        }\n      }\n      EmployeeProcessMembers {\n        id\n        employeeTestProcessId\n        Employee {\n          name\n          id\n          email\n          User {\n            id\n            login\n            Role {\n              title\n              id\n            }\n          }\n          EmployeePosition {\n            title\n            id\n          }\n        }\n      }\n      EmployeeTestVariant {\n        title\n        id\n      }\n      EmployeeTest {\n        startDate\n        id\n        endDate\n        Employee {\n          name\n          id\n          email\n          User {\n            login\n            id\n            Role {\n              id\n              title\n            }\n          }\n          EmployeePosition {\n            id\n            title\n          }\n        }\n        EmployeeTestVariant {\n          id\n          title\n        }\n        EmployeeTestAnswer {\n          id\n          answer\n          EmployeeTestQuestion {\n            id\n            title\n            position\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation FinishEmployeeTestProcess($processId: Int!) {\n      finishEmployeeTestProcess(processId: $processId)\n    }\n"): (typeof documents)["\n    mutation FinishEmployeeTestProcess($processId: Int!) {\n      finishEmployeeTestProcess(processId: $processId)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetEmployeeTestVariants {\n        getEmployeeTestVariants {\n            title\n            id\n        }\n    }\n"): (typeof documents)["\n    query GetEmployeeTestVariants {\n        getEmployeeTestVariants {\n            title\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateEmployeeTestProcess($employeeIds: [Int!]!, $title: String!, $testVariantId: Int!) {\n  createEmployeeTestProcess(employeeIds: $employeeIds, title: $title, testVariantId: $testVariantId) {\n    title\n    startDate\n    id\n    endDate\n    User {\n      login\n      id\n      Role {\n        title\n        id\n      }\n    }\n    EmployeeProcessMembers {\n      id\n      employeeTestProcessId\n      Employee {\n        name\n        id\n        email\n        User {\n          login\n          id\n          Role {\n            title\n            id\n          }\n        }\n        EmployeePosition {\n          title\n          id\n        }\n      }\n    }\n    EmployeeTestVariant {\n      title\n      id\n    }\n  }\n}\n"): (typeof documents)["\n    mutation CreateEmployeeTestProcess($employeeIds: [Int!]!, $title: String!, $testVariantId: Int!) {\n  createEmployeeTestProcess(employeeIds: $employeeIds, title: $title, testVariantId: $testVariantId) {\n    title\n    startDate\n    id\n    endDate\n    User {\n      login\n      id\n      Role {\n        title\n        id\n      }\n    }\n    EmployeeProcessMembers {\n      id\n      employeeTestProcessId\n      Employee {\n        name\n        id\n        email\n        User {\n          login\n          id\n          Role {\n            title\n            id\n          }\n        }\n        EmployeePosition {\n          title\n          id\n        }\n      }\n    }\n    EmployeeTestVariant {\n      title\n      id\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetAvailableEmployeeTestProcesses {\n  getAvailableEmployeeTestProcesses {\n    title\n    startDate\n    id\n    endDate\n    EmployeeTest {\n      startDate\n      id\n      endDate\n      EmployeeTestVariant {\n        title\n        id\n      }\n      EmployeeTestAnswer {\n        id\n        answer\n        EmployeeTestQuestion {\n          id\n          title\n          position\n        }\n      }\n    }\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n    EmployeeTestVariant {\n      id\n      title\n    }\n    EmployeeProcessMembers {\n      id\n      employeeTestProcessId\n      Employee {\n        id\n        EmployeePosition {\n          id\n          title\n        }\n        User {\n          id\n          login\n          Role {\n            id\n            title\n          }\n        }\n        name\n        email\n      }\n    }\n  }\n}\n"): (typeof documents)["\n    query GetAvailableEmployeeTestProcesses {\n  getAvailableEmployeeTestProcesses {\n    title\n    startDate\n    id\n    endDate\n    EmployeeTest {\n      startDate\n      id\n      endDate\n      EmployeeTestVariant {\n        title\n        id\n      }\n      EmployeeTestAnswer {\n        id\n        answer\n        EmployeeTestQuestion {\n          id\n          title\n          position\n        }\n      }\n    }\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n    EmployeeTestVariant {\n      id\n      title\n    }\n    EmployeeProcessMembers {\n      id\n      employeeTestProcessId\n      Employee {\n        id\n        EmployeePosition {\n          id\n          title\n        }\n        User {\n          id\n          login\n          Role {\n            id\n            title\n          }\n        }\n        name\n        email\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetEmployeeTestQuestions($testId: Int!) {\n      getEmployeeTestQuestions(testId: $testId) {\n        id\n        title\n        position\n      }\n    }\n"): (typeof documents)["\n    query GetEmployeeTestQuestions($testId: Int!) {\n      getEmployeeTestQuestions(testId: $testId) {\n        id\n        title\n        position\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation StartEmployeeTest($testProcessId: Int!) {\n      startEmployeeTest(testProcessId: $testProcessId) {\n        startDate\n        id\n        endDate\n        EmployeeTestVariant {\n          id\n          title\n        }\n      }\n    }\n"): (typeof documents)["\n    mutation StartEmployeeTest($testProcessId: Int!) {\n      startEmployeeTest(testProcessId: $testProcessId) {\n        startDate\n        id\n        endDate\n        EmployeeTestVariant {\n          id\n          title\n        }\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetEmployeeTestProcessById($processId: Int!) {\n      getEmployeeTestProcessById(processId: $processId) {\n        title\n        startDate\n        id\n        endDate\n        EmployeeTest {\n          startDate\n          id\n          endDate\n          EmployeeTestVariant {\n            title\n            id\n          }\n          EmployeeTestAnswer {\n            id\n            answer\n            EmployeeTestQuestion {\n              title\n              position\n              id\n            }\n          }\n        }\n        EmployeeTestVariant {\n          title\n          id\n        }\n      }\n    }\n"): (typeof documents)["\n    query GetEmployeeTestProcessById($processId: Int!) {\n      getEmployeeTestProcessById(processId: $processId) {\n        title\n        startDate\n        id\n        endDate\n        EmployeeTest {\n          startDate\n          id\n          endDate\n          EmployeeTestVariant {\n            title\n            id\n          }\n          EmployeeTestAnswer {\n            id\n            answer\n            EmployeeTestQuestion {\n              title\n              position\n              id\n            }\n          }\n        }\n        EmployeeTestVariant {\n          title\n          id\n        }\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetEmployeeTestByProcessId($processId: Int!) {\n      getEmployeeTestByProcessId(processId: $processId) {\n        startDate\n        id\n        endDate\n        EmployeeTestVariant {\n          title\n          id\n        }\n        EmployeeTestAnswer {\n          id\n          answer\n          EmployeeTestQuestion {\n            title\n            position\n            id\n          }\n        }\n      }\n    }\n"): (typeof documents)["\n    query GetEmployeeTestByProcessId($processId: Int!) {\n      getEmployeeTestByProcessId(processId: $processId) {\n        startDate\n        id\n        endDate\n        EmployeeTestVariant {\n          title\n          id\n        }\n        EmployeeTestAnswer {\n          id\n          answer\n          EmployeeTestQuestion {\n            title\n            position\n            id\n          }\n        }\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetEmployeeTestById($testId: Int!) {\n      getEmployeeTestById(testId: $testId) {\n        startDate\n        id\n        endDate\n        EmployeeTestVariant {\n          title\n          id\n        }\n        EmployeeTestAnswer {\n          id\n          answer\n          EmployeeTestQuestion {\n            id\n            title\n            position\n          }\n        }\n      }\n    }\n"): (typeof documents)["\n    query GetEmployeeTestById($testId: Int!) {\n      getEmployeeTestById(testId: $testId) {\n        startDate\n        id\n        endDate\n        EmployeeTestVariant {\n          title\n          id\n        }\n        EmployeeTestAnswer {\n          id\n          answer\n          EmployeeTestQuestion {\n            id\n            title\n            position\n          }\n        }\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation AnswerEmployeeTest($testId: Int!, $answers: [CompleteEmployeeTestAnswer!]!) {\n      answerEmployeeTest(testId: $testId, answers: $answers)\n    }\n"): (typeof documents)["\n    mutation AnswerEmployeeTest($testId: Int!, $answers: [CompleteEmployeeTestAnswer!]!) {\n      answerEmployeeTest(testId: $testId, answers: $answers)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetEmployeeTestProcessResults($processId: Int!) {\n        getEmployeeTestProcessResults(processId: $processId) {\n            title\n            value\n        }\n    }\n"): (typeof documents)["\n    query GetEmployeeTestProcessResults($processId: Int!) {\n        getEmployeeTestProcessResults(processId: $processId) {\n            title\n            value\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetStudents {\n        getStudents {\n            passbookNumber\n            name\n            Group {\n                id\n                title\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetStudents {\n        getStudents {\n            passbookNumber\n            name\n            Group {\n                id\n                title\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetStudentGroups {\n        getStudentGroups {\n            id\n            title\n        }\n    }\n"): (typeof documents)["\n    query GetStudentGroups {\n        getStudentGroups {\n            id\n            title\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateStudent($passbookNumber: Int!, $name: String!, $groupId: Int!, $login: String!, $password: String!) {\n        createStudent(passbookNumber: $passbookNumber, name: $name, groupId: $groupId, login: $login, password: $password) {\n            passbookNumber\n            name\n            Group {\n                id\n                title\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateStudent($passbookNumber: Int!, $name: String!, $groupId: Int!, $login: String!, $password: String!) {\n        createStudent(passbookNumber: $passbookNumber, name: $name, groupId: $groupId, login: $login, password: $password) {\n            passbookNumber\n            name\n            Group {\n                id\n                title\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateStudentGroup($title: String!) {\n        createStudentGroup(title: $title) {\n            id\n            title\n        }\n    }\n"): (typeof documents)["\n    mutation CreateStudentGroup($title: String!) {\n        createStudentGroup(title: $title) {\n            id\n            title\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteStudent($studentId: Int!) {\n        deleteStudent(studentId: $studentId)\n    }\n"): (typeof documents)["\n    mutation DeleteStudent($studentId: Int!) {\n        deleteStudent(studentId: $studentId)\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetStudentTestQuestions($studentTestId: Int!) {\n    getStudentTestQuestions(studentTestId: $studentTestId) {\n        id\n        title\n        position\n    }\n  }\n"): (typeof documents)["\n    query GetStudentTestQuestions($studentTestId: Int!) {\n    getStudentTestQuestions(studentTestId: $studentTestId) {\n        id\n        title\n        position\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetStudentTestVariants {\n  getStudentTestVariants {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\nquery GetStudentTestVariants {\n  getStudentTestVariants {\n      id\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AnswerStudentTestOne($studentTestId: Int!, $answers: [StudentTestOneAnswerInput!]!) {\n    answerStudentTestOne(studentTestId: $studentTestId, answers: $answers)\n  }\n"): (typeof documents)["\n  mutation AnswerStudentTestOne($studentTestId: Int!, $answers: [StudentTestOneAnswerInput!]!) {\n    answerStudentTestOne(studentTestId: $studentTestId, answers: $answers)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AnswerStudentTestTwo($studentTestId: Int!, $answers: [StudentTestTwoAnswerInput!]!) {\n    answerStudentTestTwo(studentTestId: $studentTestId, answers: $answers)\n  }\n"): (typeof documents)["\n  mutation AnswerStudentTestTwo($studentTestId: Int!, $answers: [StudentTestTwoAnswerInput!]!) {\n    answerStudentTestTwo(studentTestId: $studentTestId, answers: $answers)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AnswerStudentTestThree($studentTestId: Int!, $fileBase64: String!) {\n    answerStudentTestThree(studentTestId: $studentTestId, fileBase64: $fileBase64)\n  }\n"): (typeof documents)["\n  mutation AnswerStudentTestThree($studentTestId: Int!, $fileBase64: String!) {\n    answerStudentTestThree(studentTestId: $studentTestId, fileBase64: $fileBase64)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation StartStudentTest($studentTestProcessId: Int!) {\n    startStudentTest(studentTestProcessId: $studentTestProcessId)\n  }\n"): (typeof documents)["\n  mutation StartStudentTest($studentTestProcessId: Int!) {\n    startStudentTest(studentTestProcessId: $studentTestProcessId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetStudentTestById($studentTestId: Int!) {\n    getStudentTestById(studentTestId: $studentTestId) {\n      id\n      passbookNumber\n      studentTestProcessId\n      dateStart\n      dateEnd\n      StudentTestVariant {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStudentTestById($studentTestId: Int!) {\n    getStudentTestById(studentTestId: $studentTestId) {\n      id\n      passbookNumber\n      studentTestProcessId\n      dateStart\n      dateEnd\n      StudentTestVariant {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAvailableStudentTestProcesses {\n    getAvailableStudentTestProcesses {\n      title\n      id\n      StudentTestVariant {\n        id\n        title\n      }\n      StudentTest {\n        id\n        dateStart\n        dateEnd\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAvailableStudentTestProcesses {\n    getAvailableStudentTestProcesses {\n      title\n      id\n      StudentTestVariant {\n        id\n        title\n      }\n      StudentTest {\n        id\n        dateStart\n        dateEnd\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetStudentTestProcessMembers($studentTestProcessId: Int!) {\n    getStudentTestProcessMembers(studentTestProcessId: $studentTestProcessId) {\n      passbookNumber\n      name\n      StudentTest {\n        id\n        dateStart\n        dateEnd\n      }\n      Group {\n        title\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStudentTestProcessMembers($studentTestProcessId: Int!) {\n    getStudentTestProcessMembers(studentTestProcessId: $studentTestProcessId) {\n      passbookNumber\n      name\n      StudentTest {\n        id\n        dateStart\n        dateEnd\n      }\n      Group {\n        title\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetStudentTestProcesses {\n    getStudentTestProcesses {\n      id\n      title\n      dateStart\n      dateEnd\n      StudentTestVariant {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStudentTestProcesses {\n    getStudentTestProcesses {\n      id\n      title\n      dateStart\n      dateEnd\n      StudentTestVariant {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation FinishStudentTestProcess($studentTestProcessId: Int!) {\n    finishStudentTestProcess(studentTestProcessId: $studentTestProcessId)\n  }\n"): (typeof documents)["\n  mutation FinishStudentTestProcess($studentTestProcessId: Int!) {\n    finishStudentTestProcess(studentTestProcessId: $studentTestProcessId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation StartStudentTestProcess(\n    $studentTestVariantId: Int!\n    $title: String!\n    $studentPassbookNumbers: [Int!]!\n  ) {\n    startStudentTestProcess(\n      studentTestVariantId: $studentTestVariantId\n      title: $title\n      studentPassbookNumbers: $studentPassbookNumbers\n    )\n  }\n"): (typeof documents)["\n  mutation StartStudentTestProcess(\n    $studentTestVariantId: Int!\n    $title: String!\n    $studentPassbookNumbers: [Int!]!\n  ) {\n    startStudentTestProcess(\n      studentTestVariantId: $studentTestVariantId\n      title: $title\n      studentPassbookNumbers: $studentPassbookNumbers\n    )\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation Login($login: String!, $password: String!) {\n      login(login: $login, password: $password) {\n        token\n      }\n    }\n"): (typeof documents)["\n    mutation Login($login: String!, $password: String!) {\n      login(login: $login, password: $password) {\n        token\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetUsers {\n        getUsers {\n            id\n            login\n            Role {\n                id\n                title\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetUsers {\n        getUsers {\n            id\n            login\n            Role {\n                id\n                title\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Query {\n        getUser {\n            login\n            id\n            Role {\n                id\n                title\n            }\n        }\n    }\n"): (typeof documents)["\n    query Query {\n        getUser {\n            login\n            id\n            Role {\n                id\n                title\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetUsersRoles {\n        getUsersRoles {\n            id\n            title\n        }\n    }\n"): (typeof documents)["\n    query GetUsersRoles {\n        getUsersRoles {\n            id\n            title\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateUser($login: String!, $password: String!, $roleId: Int!) {\n        createUser(login: $login, password: $password, roleId: $roleId) {\n            id\n        }\n    }\n"): (typeof documents)["\n    mutation CreateUser($login: String!, $password: String!, $roleId: Int!) {\n        createUser(login: $login, password: $password, roleId: $roleId) {\n            id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation DeleteUser($userId: Int!) {\n        deleteUser(userId: $userId)\n    }\n"): (typeof documents)["\n    mutation DeleteUser($userId: Int!) {\n        deleteUser(userId: $userId)\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;