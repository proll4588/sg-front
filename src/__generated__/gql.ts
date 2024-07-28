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
    "\n  query Login($login: String!, $password: String!) {\n    login(login: $login, password: $password) {\n      token\n    }\n  }\n": types.LoginDocument,
    "\n  query GetUser {\n    getUser {\n      login\n      id\n      Role {\n        id\n        title\n      }\n    }\n  }\n": types.GetUserDocument,
    "\n  query GetUsers($roleId: Int) {\n    getUsers(roleId: $roleId) {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n  }\n": types.GetUsersDocument,
    "\n  query GetUsersRoles {\n    getUsersRoles {\n      id\n      title\n    }\n  }\n": types.GetUsersRolesDocument,
    "\n  mutation Mutation($login: String!, $password: String!, $roleId: Int!) {\n    registration(login: $login, password: $password, roleId: $roleId) {\n      token\n    }\n  }\n": types.MutationDocument,
    "\n  mutation DeleteUser($userId: Int!) {\n    deleteUser(userId: $userId)\n  }\n": types.DeleteUserDocument,
    "\n  query GetTestOneQuestions {\n    getTestOneQuestions {\n      id\n      text\n      position\n    }\n  }\n": types.GetTestOneQuestionsDocument,
    "\n  mutation StartTestOne($userId: Int!) {\n    startTestOne(userId: $userId) {\n      id\n      complete\n      startDate\n      endDate\n      TestOneAnswer {\n        id\n        answer\n        TestOneQuestions {\n          id\n          text\n          position\n        }\n      }\n      User {\n        id\n        login\n        Role {\n          id\n          title\n        }\n      }\n    }\n}\n": types.StartTestOneDocument,
    "\n  mutation CompleteTestOne($processId: Int!) {\n  completeTestOne(processId: $processId) {\n    id\n    complete\n    startDate\n    endDate\n    TestOneAnswer {\n      id\n      answer\n      TestOneQuestions {\n        id\n        text\n        position\n      }\n    }\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n  }\n}\n  ": types.CompleteTestOneDocument,
    "\n  query GetTestOne($userId: Int!) {\n  getTestOne(userId: $userId) {\n    startDate\n    id\n    endDate\n    complete\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n    TestOneAnswer {\n      answer\n      id\n      TestOneQuestions {\n        id\n        position\n        text\n      }\n    }\n  }\n}\n  ": types.GetTestOneDocument,
    "\n  mutation AnsTestOne($processId: Int!, $ans: Int!, $questionId: Int!) {\n  ansTestOne(processId: $processId, ans: $ans, questionId: $questionId) {\n    id\n    complete\n    startDate\n    endDate\n    TestOneAnswer {\n      id\n      answer\n      TestOneQuestions {\n        id\n        text\n        position\n      }\n    }\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n  }\n}\n  ": types.AnsTestOneDocument,
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
export function gql(source: "\n  query Login($login: String!, $password: String!) {\n    login(login: $login, password: $password) {\n      token\n    }\n  }\n"): (typeof documents)["\n  query Login($login: String!, $password: String!) {\n    login(login: $login, password: $password) {\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUser {\n    getUser {\n      login\n      id\n      Role {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUser {\n    getUser {\n      login\n      id\n      Role {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUsers($roleId: Int) {\n    getUsers(roleId: $roleId) {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUsers($roleId: Int) {\n    getUsers(roleId: $roleId) {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUsersRoles {\n    getUsersRoles {\n      id\n      title\n    }\n  }\n"): (typeof documents)["\n  query GetUsersRoles {\n    getUsersRoles {\n      id\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Mutation($login: String!, $password: String!, $roleId: Int!) {\n    registration(login: $login, password: $password, roleId: $roleId) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation Mutation($login: String!, $password: String!, $roleId: Int!) {\n    registration(login: $login, password: $password, roleId: $roleId) {\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteUser($userId: Int!) {\n    deleteUser(userId: $userId)\n  }\n"): (typeof documents)["\n  mutation DeleteUser($userId: Int!) {\n    deleteUser(userId: $userId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTestOneQuestions {\n    getTestOneQuestions {\n      id\n      text\n      position\n    }\n  }\n"): (typeof documents)["\n  query GetTestOneQuestions {\n    getTestOneQuestions {\n      id\n      text\n      position\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation StartTestOne($userId: Int!) {\n    startTestOne(userId: $userId) {\n      id\n      complete\n      startDate\n      endDate\n      TestOneAnswer {\n        id\n        answer\n        TestOneQuestions {\n          id\n          text\n          position\n        }\n      }\n      User {\n        id\n        login\n        Role {\n          id\n          title\n        }\n      }\n    }\n}\n"): (typeof documents)["\n  mutation StartTestOne($userId: Int!) {\n    startTestOne(userId: $userId) {\n      id\n      complete\n      startDate\n      endDate\n      TestOneAnswer {\n        id\n        answer\n        TestOneQuestions {\n          id\n          text\n          position\n        }\n      }\n      User {\n        id\n        login\n        Role {\n          id\n          title\n        }\n      }\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CompleteTestOne($processId: Int!) {\n  completeTestOne(processId: $processId) {\n    id\n    complete\n    startDate\n    endDate\n    TestOneAnswer {\n      id\n      answer\n      TestOneQuestions {\n        id\n        text\n        position\n      }\n    }\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n  }\n}\n  "): (typeof documents)["\n  mutation CompleteTestOne($processId: Int!) {\n  completeTestOne(processId: $processId) {\n    id\n    complete\n    startDate\n    endDate\n    TestOneAnswer {\n      id\n      answer\n      TestOneQuestions {\n        id\n        text\n        position\n      }\n    }\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n  }\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTestOne($userId: Int!) {\n  getTestOne(userId: $userId) {\n    startDate\n    id\n    endDate\n    complete\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n    TestOneAnswer {\n      answer\n      id\n      TestOneQuestions {\n        id\n        position\n        text\n      }\n    }\n  }\n}\n  "): (typeof documents)["\n  query GetTestOne($userId: Int!) {\n  getTestOne(userId: $userId) {\n    startDate\n    id\n    endDate\n    complete\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n    TestOneAnswer {\n      answer\n      id\n      TestOneQuestions {\n        id\n        position\n        text\n      }\n    }\n  }\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AnsTestOne($processId: Int!, $ans: Int!, $questionId: Int!) {\n  ansTestOne(processId: $processId, ans: $ans, questionId: $questionId) {\n    id\n    complete\n    startDate\n    endDate\n    TestOneAnswer {\n      id\n      answer\n      TestOneQuestions {\n        id\n        text\n        position\n      }\n    }\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n  }\n}\n  "): (typeof documents)["\n  mutation AnsTestOne($processId: Int!, $ans: Int!, $questionId: Int!) {\n  ansTestOne(processId: $processId, ans: $ans, questionId: $questionId) {\n    id\n    complete\n    startDate\n    endDate\n    TestOneAnswer {\n      id\n      answer\n      TestOneQuestions {\n        id\n        text\n        position\n      }\n    }\n    User {\n      id\n      login\n      Role {\n        id\n        title\n      }\n    }\n  }\n}\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;